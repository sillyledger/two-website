"use client";

import { useEffect, useRef, useState } from "react";

const RIGHT_DOCS = [
  {
    title: "Research notes",
    kind: "Note",
    body: "Ferries run twice a day in winter. Fish market closes by noon. Most boats are painted blue and white.",
  },
  {
    title: "Interview: Maya",
    kind: "Note",
    body: "She wants her draft and her notes on the same screen. Hates switching windows mid-sentence.",
  },
  {
    title: "Chapter two",
    kind: "Doc",
    body: "The letter had been in the drawer for eleven years before anyone thought to open it.",
  },
];

export function SplitDemo() {
  const [split, setSplit] = useState(52);
  const [right, setRight] = useState(0);
  const [pickOpen, setPickOpen] = useState(false);
  const [stacked, setStacked] = useState(false);
  const panesRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 860px)");
    const update = () => setStacked(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  function onDown(e: React.PointerEvent<HTMLDivElement>) {
    draggingRef.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    e.preventDefault();
  }

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current || !panesRef.current) return;
    const r = panesRef.current.getBoundingClientRect();
    const pct = stacked ? ((e.clientY - r.top) / r.height) * 100 : ((e.clientX - r.left) / r.width) * 100;
    setSplit(Math.max(25, Math.min(75, pct)));
  }

  function onUp(e: React.PointerEvent<HTMLDivElement>) {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId);
  }

  const cur = RIGHT_DOCS[right];

  return (
    <div className="svx-demo">
      <div className="svx-labels" aria-hidden="true">
        <span className="svx-lbl"><i /><b>Both sides</b> editable</span>
        <span className="svx-lbl mid"><b>Drag</b> the divider<i /></span>
        <span className="svx-lbl"><b>Swap</b> to any doc or note<i /></span>
      </div>

      <div className="svx-win">
        <div className="svx-bar">
          <span className="svx-tab">Chapter three</span>
          <span className="svx-on">◫ Split view on</span>
          <button
            type="button"
            className="svx-swap"
            onClick={() => setPickOpen((o) => !o)}
            aria-expanded={pickOpen}
          >
            ⇄ {cur.title}
          </button>
          {pickOpen && (
            <div className="svx-pick">
              {RIGHT_DOCS.map((d, i) => (
                <button
                  type="button"
                  key={d.title}
                  onClick={() => {
                    setRight(i);
                    setPickOpen(false);
                  }}
                >
                  {d.title}
                  <span>{d.kind}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="svx-panes" ref={panesRef}>
          <div className="svx-pane" style={{ flexBasis: `${split}%` }}>
            <div className="svx-doc" contentEditable suppressContentEditableWarning>
              <span className="svx-kind">Doc</span>
              <h3>Chapter three</h3>
              <p>By the time the ferry came in, Ana had already decided not to tell anyone about the letter.</p>
              <p>
                The harbor smelled of diesel and oranges. Somewhere behind the fish market a radio was playing the same
                song it had played the summer her father left.
              </p>
            </div>
          </div>
          <div
            className="svx-divider"
            role="separator"
            aria-orientation={stacked ? "horizontal" : "vertical"}
            aria-label="Resize the two docs"
            onPointerDown={onDown}
            onPointerMove={onMove}
            onPointerUp={onUp}
            onPointerCancel={onUp}
          >
            <span />
          </div>
          <div className="svx-pane alt">
            <div key={cur.title} className="svx-doc" contentEditable suppressContentEditableWarning>
              <span className="svx-kind">{cur.kind}</span>
              <h3>{cur.title}</h3>
              <p>{cur.body}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="svx-kv">
        <div><span className="k">Resize</span><span className="v">Drag from 25% to 75%</span></div>
        <div><span className="k">Works with</span><span className="v">Any doc or note</span></div>
        <div><span className="k">Plan</span><span className="v">Every plan, including Free</span></div>
      </div>
    </div>
  );
}
