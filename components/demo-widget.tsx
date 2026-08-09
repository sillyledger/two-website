"use client";

import { useEffect, useRef, useState } from "react";

type DocId = "brief" | "calendar" | "moodboard" | "kickoff";
type PaneId = "left" | "right";
type DocTag = { label: string; color: "clay" | "green" } | null;

interface DocDef {
  title: string;
  meta: string;
  tag: DocTag;
  body: (onChip: (target: DocId) => void) => React.ReactNode;
}

function DemoChip({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button type="button" className="dm-chip" onClick={onClick}>
      <span className="dm-chip-arrow">→</span> {label}
    </button>
  );
}

const DOCS: Record<DocId, DocDef> = {
  brief: {
    title: "Client Brief — Rebrand",
    meta: "Edited 2m ago · Creative",
    tag: { label: "Client Work", color: "clay" },
    body: (onChip) => (
      <>
        <p>Studio Alder wants a full identity refresh ahead of their fall launch. Current mark feels dated — leaning warmer, more tactile.</p>
        <p>Reference points: independent print studios, 1970s travel posters, nothing that reads &quot;startup.&quot;</p>
        <ul>
          <li>Primary logotype + mark</li>
          <li>Business card + letterhead</li>
          <li>Social templates (see <DemoChip label="Moodboard" onClick={() => onChip("moodboard")} />)</li>
        </ul>
        <p>Kickoff notes are linked in the panel on the right — worth a re-read before Friday&apos;s review</p>
      </>
    ),
  },
  calendar: {
    title: "Content Calendar — Q3",
    meta: "Edited yesterday · Solo",
    tag: { label: "Planning", color: "green" },
    body: (onChip) => (
      <>
        <p>August is light — mostly evergreen. September ramps up around the product launch.</p>
        <ul>
          <li>Aug 12 — &quot;Behind the scenes&quot; reel</li>
          <li>Aug 19 — Newsletter #14</li>
          <li>Sep 2 — Launch teaser (see <DemoChip label="Kickoff Notes" onClick={() => onChip("kickoff")} />)</li>
        </ul>
        <p>Batch-record the September clips the week before — last quarter, doing it day-of ate every afternoon.</p>
      </>
    ),
  },
  moodboard: {
    title: "Moodboard Notes",
    meta: "Linked from Client Brief",
    tag: null,
    body: () => (
      <>
        <p>Palette leaning warm clay, cream, ink black — no gradients, no gloss. Texture over polish.</p>
        <p>Typography: a single confident serif for the wordmark, plain grotesk everywhere else.</p>
        <p>Circle back to Studio Alder&apos;s original 1998 mark — there&apos;s a shape in the old logo worth keeping.</p>
      </>
    ),
  },
  kickoff: {
    title: "Meeting Notes — Kickoff",
    meta: "Linked from Content Calendar",
    tag: null,
    body: (onChip) => (
      <>
        <p>Launch date confirmed for Sep 2. Marketing wants teaser content a week out, not day-of.</p>
        <p>Action items: draft three teaser angles, pick one by Aug 22, hand off to design.</p>
        <p>Full brief lives in <DemoChip label="Client Brief" onClick={() => onChip("brief")} /> — keep both in sync.</p>
      </>
    ),
  },
};

export function DemoWidget() {
  const [leftTabs, setLeftTabs] = useState<DocId[]>(["brief", "moodboard"]);
  const [rightTabs, setRightTabs] = useState<DocId[]>(["calendar", "kickoff"]);
  const [activeLeft, setActiveLeft] = useState<DocId>("brief");
  const [activeRight, setActiveRight] = useState<DocId>("kickoff");

  const [leftWidth, setLeftWidth] = useState(50);
  const [dragging, setDragging] = useState(false);
  const stageRef = useRef<HTMLDivElement>(null);

  const [toastVisible, setToastVisible] = useState(false);
  const toastTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!dragging) return;
    function onMove(e: MouseEvent) {
      if (!stageRef.current) return;
      const rect = stageRef.current.getBoundingClientRect();
      let pct = ((e.clientX - rect.left) / rect.width) * 100;
      pct = Math.min(80, Math.max(20, pct));
      setLeftWidth(pct);
    }
    function onUp() {
      setDragging(false);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [dragging]);

  useEffect(() => {
    return () => {
      if (toastTimeout.current) clearTimeout(toastTimeout.current);
    };
  }, []);

  function handleDividerMouseDown(e: React.MouseEvent) {
    e.preventDefault();
    setDragging(true);
  }

  function handleShowToast() {
    setToastVisible(true);
    if (toastTimeout.current) clearTimeout(toastTimeout.current);
    toastTimeout.current = setTimeout(() => setToastVisible(false), 4200);
  }

  function openInOtherPane(fromPane: PaneId, target: DocId) {
    if (fromPane === "left") {
      setRightTabs((prev) => (prev.includes(target) ? prev : [...prev, target]));
      setActiveRight(target);
    } else {
      setLeftTabs((prev) => (prev.includes(target) ? prev : [...prev, target]));
      setActiveLeft(target);
    }
  }

  function renderPane(paneId: PaneId) {
    const tabs = paneId === "left" ? leftTabs : rightTabs;
    const activeId = paneId === "left" ? activeLeft : activeRight;
    const setActive = paneId === "left" ? setActiveLeft : setActiveRight;
    const doc = DOCS[activeId];
    const widthStyle = paneId === "left" ? { flex: `0 0 calc(${leftWidth}% - 3px)` } : undefined;

    return (
      <div className="dm-pane" style={widthStyle}>
        <div className="dm-tabbar">
          {tabs.map((id) => (
            <button
              key={id}
              type="button"
              className={id === activeId ? "dm-tab active" : "dm-tab"}
              onClick={() => setActive(id)}
            >
              {DOCS[id].title}
            </button>
          ))}
        </div>
        <div className="dm-doc-body-wrap">
          <div className="dm-doc-body">
            <div className="dm-doc-head">
              <h2 className="dm-doc-title display">{doc.title}</h2>
              {doc.tag && <span className={`dm-doc-tag ${doc.tag.color}`}>{doc.tag.label}</span>}
            </div>
            <p className="dm-doc-meta">{doc.meta}</p>
            {doc.body((target) => openInOtherPane(paneId, target))}
          </div>
          <div className="dm-click-catcher" onClick={handleShowToast}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero-frame">
      <div className="hero">
        <p className="micro">Live Demo · No signup</p>
        <h1 className="display headline">
          Two docs.
          <br />
          <span className="accent">One</span> screen.
          <br />
          See it for yourself.
        </h1>
        <p className="body-copy">
          Drag the divider, switch tabs, click a linked reference. This is real split-view — just with sample docs
          instead of yours.
        </p>
        <div className="cta-row">
          <a href="https://app.two.so/signup" className="btn solid">Start free</a>
          <a href="/pricing" className="btn outline">See pricing</a>
        </div>
      </div>

      <div className="dm-widget-wrap">
        <div className={dragging ? "dm-widget dragging" : "dm-widget"}>
          <div className="dm-titlebar">
            <div className="dm-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
            <span className="dm-titlebar-label">app.two.so — demo workspace</span>
          </div>
          <div className="dm-split" ref={stageRef}>
            {renderPane("left")}
            <div className="dm-divider" onMouseDown={handleDividerMouseDown}></div>
            {renderPane("right")}
          </div>
        </div>
        <div className="dm-mobile-note">
          Split-view is a desktop experience. Open this page on a larger screen to try the live demo.
        </div>
      </div>

      <p className="dm-below-note">Like what you see? It gets better with your own docs.</p>

      <div className={toastVisible ? "dm-toast visible" : "dm-toast"}>
        <span>Sign up to save your edits — everything else stays exactly like this.</span>
        <a href="https://app.two.so/signup" className="dm-toast-btn">Start free</a>
      </div>
    </div>
  );
}
