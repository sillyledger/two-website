"use client";

import { useEffect, useRef, useState } from "react";

type Key = "image" | "colors" | "text" | "shape" | "note" | "links";
type ItemKey = Exclude<Key, "links">;
type Pt = [number, number];

const TOOLS: { k: Key; long: string; short: string }[] = [
  { k: "image", long: "Image", short: "Image" },
  { k: "colors", long: "Color cards", short: "Colors" },
  { k: "text", long: "Text", short: "Text" },
  { k: "shape", long: "Shape", short: "Shape" },
  { k: "note", long: "Pinned note", short: "Note" },
  { k: "links", long: "Connections", short: "Connect" },
];

const PRESETS = ["#d8d2c4", "#c98a5e", "#8f89e6", "#6fb587", "#e0b48c", "#3a6ea5", "#2a2a1c"];

// Item centers in each layout's own coordinate space (desktop board 640x470, phone board 342x450)
const CENTERS: Record<"d" | "m", Record<ItemKey | "doc", Pt>> = {
  d: { doc: [344, 230], image: [132, 102], colors: [130, 285], text: [542, 80], shape: [534, 284], note: [348, 380] },
  m: { doc: [171, 188], image: [89, 66], colors: [86, 290], text: [256, 52], shape: [268, 288], note: [264, 388] },
};

const LINKED: ItemKey[] = ["image", "colors", "text", "shape", "note"];

function Links({ layout, on }: { layout: "d" | "m"; on: Record<Key, boolean> }) {
  const c = CENTERS[layout];
  const box = layout === "d" ? "0 0 640 470" : "0 0 342 450";
  return (
    <svg className={`crx-links ${layout}`} viewBox={box} preserveAspectRatio="none" aria-hidden="true">
      {LINKED.filter((k) => on[k]).map((k) => (
        <line
          key={k}
          x1={c.doc[0]}
          y1={c.doc[1]}
          x2={c[k][0]}
          y2={c[k][1]}
          stroke="rgba(143,137,230,0.55)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

export function CanvasDemo() {
  const [on, setOn] = useState<Record<Key, boolean>>({ image: true, colors: true, text: false, shape: false, note: false, links: false });
  const [hex, setHex] = useState<string[]>(["#d8d2c4", "#c98a5e", "#2a2a1c"]);
  const [sel, setSel] = useState(-1);
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const toggle = (k: Key) => {
    setOn((prev) => ({ ...prev, [k]: !prev[k] }));
    if (k === "colors") setSel(-1);
  };

  const pickSwatch = (i: number) => {
    setSel(sel === i ? -1 : i);
    setCopied(false);
  };

  const setColor = (p: string) => {
    if (sel < 0) return;
    setHex((prev) => prev.map((h, i) => (i === sel ? p : h)));
    setCopied(false);
  };

  const copy = async () => {
    if (sel < 0) return;
    try {
      await navigator.clipboard.writeText(hex[sel].toUpperCase());
      setCopied(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard unavailable: keep the label as it is
    }
  };

  const items = 1 + (["image", "text", "shape", "note"] as Key[]).filter((k) => on[k]).length + (on.colors ? 3 : 0);

  return (
    <section className="crx-demo">
      <p className="micro">Try a canvas</p>
      <div className="crx-demo-grid">
        <div className="crx-demo-side">
          <h2 className="display crx-h">Pin it all down.</h2>
          <p className="crx-demo-sub">Add things to the board. Tap a color card to change it and copy its hex.</p>
          <div className="crx-tools">
            {TOOLS.map((t) => (
              <button type="button" key={t.k} className={on[t.k] ? "crx-tool on" : "crx-tool"} aria-pressed={on[t.k]} onClick={() => toggle(t.k)}>
                <span className="sym" aria-hidden="true">{on[t.k] ? "✓" : "+"}</span>
                <span className="long">{t.long}</span>
                <span className="short">{t.short}</span>
                <span className="st">{on[t.k] ? "On board" : "Add"}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="crx-board" role="group" aria-label="Example canvas">
          {on.links && (
            <>
              <Links layout="d" on={on} />
              <Links layout="m" on={on} />
            </>
          )}

          {on.image && (
            <div className="crx-it crx-i-image" aria-hidden="true">
              <div className="ph" />
              <div className="cap">Location, 4:40 PM</div>
            </div>
          )}

          {on.text && (
            <div className="crx-i-text" aria-hidden="true">
              <p>Quieter. Warmer. More space.</p>
            </div>
          )}

          <div className="crx-it crx-i-doc" aria-hidden="true">
            <span className="k">Doc</span>
            <b>Shoot brief</b>
            <i style={{ width: "92%" }} />
            <i style={{ width: "70%" }} />
          </div>

          {on.colors &&
            hex.map((h, i) => (
              <button
                type="button"
                key={i}
                className={`crx-sw s${i}${i === sel ? " sel" : ""}`}
                style={{ background: h }}
                aria-pressed={i === sel}
                aria-label={`Color card ${h.toUpperCase()}`}
                onClick={() => pickSwatch(i)}
              >
                <span>{h.toUpperCase()}</span>
              </button>
            ))}

          {on.shape && (
            <div className="crx-i-shape" aria-hidden="true">
              <i />
              <span>
                Logo
                <br />
                round 2
              </span>
            </div>
          )}

          {on.note && (
            <div className="crx-it crx-i-note" aria-hidden="true">
              <span className="k">Note</span>
              <b>Call notes: Kiko</b>
            </div>
          )}

          {on.colors && sel >= 0 && (
            <div className="crx-pop">
              <p className="crx-pop-t">Change color</p>
              <div className="crx-dots">
                {PRESETS.map((p) => (
                  <button
                    type="button"
                    key={p}
                    className={hex[sel] === p ? "crx-dot on" : "crx-dot"}
                    style={{ background: p }}
                    aria-label={`Use ${p.toUpperCase()}`}
                    onClick={() => setColor(p)}
                  />
                ))}
              </div>
              <div className="crx-hexrow">
                <span className="crx-hex">{hex[sel].toUpperCase()}</span>
                <button type="button" className="crx-copy" onClick={copy}>{copied ? "Copied" : "Copy"}</button>
              </div>
            </div>
          )}

          <span className="crx-count" aria-live="polite">
            {items} {items === 1 ? "item" : "items"}
            <span className="long"> on this canvas</span>
          </span>
        </div>
      </div>
    </section>
  );
}
