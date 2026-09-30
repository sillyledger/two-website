"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type View = "docs" | "notes" | "planner" | "studio";

const CAPTIONS: Record<View, [string, string]> = {
  docs: ["Split view.", "Two docs side by side, each scrolling on its own. Drag the divider to resize."],
  notes: ["Notes.", "Quick private notes with color categories, nested as deep as you like."],
  planner: ["Planner.", "Tasks with due dates and priority, attached to the doc they belong to."],
  studio: ["Studio.", "Ideas you might write, and canvases to think them through. Any idea becomes a doc in one click."],
};

const ic = (d: ReactNode) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d}
  </svg>
);

const NAV: { label: string; view?: View; icon: ReactNode; beta?: boolean }[] = [
  { label: "Home", icon: ic(<path d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-6h-6v6H4a1 1 0 01-1-1z" />) },
  { label: "Docs", view: "docs", icon: ic(<><path d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9z" /><path d="M14 3v6h6" /></>) },
  { label: "Folders", icon: ic(<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />) },
  { label: "Notes", view: "notes", icon: ic(<><path d="M15 3H5a2 2 0 00-2 2v14a2 2 0 002 2h9l7-7V5a2 2 0 00-2-2z" /><path d="M14 21v-6a1 1 0 011-1h6" /></>) },
  { label: "Planner", view: "planner", icon: ic(<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>) },
  { label: "Activity", icon: ic(<path d="M3 12h4l3-8 4 16 3-8h4" />) },
  { label: "Library", icon: ic(<path d="M4 4v16M9 4v16M14 5l5 15" />) },
  { label: "Studio", view: "studio", beta: true, icon: ic(<><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /></>) },
];

const NOTES = [
  { t: "Tuesday morning", b: "Slept badly, wrote well anyway. The café by the station opens at seven now.", m: "Journal · 2h ago" },
  { t: "Studio Kiko brief", b: "Wants the rebrand to feel quieter. Send moodboard canvas by Friday.", m: "Clients · Yesterday" },
  { t: "Quote to keep", b: "\u201CStart before you feel ready. Edit once you are.\u201D", m: "Reading · 3d ago" },
  { t: "Episode 12 guests", b: "Ask Lin about building in public without burning out.", m: "Podcast · 4d ago" },
  { t: "Grocery run", b: "Oat milk, lemons, the good bread.", m: "No category · 5d ago" },
  { t: "Invoice reminder", b: "Follow up on the March invoice before the 10th.", m: "Clients · 1w ago" },
];

const TASKS = [
  { t: "Finish chapter three draft", p: "High", due: "Today", doc: "Chapter three", done: false },
  { t: "Send moodboard to Studio Kiko", p: "High", due: "Fri", doc: "Kiko brief", done: false },
  { t: "Record episode 12 intro", p: "Medium", due: "Mon", doc: "Episode 12", done: false },
  { t: "Outline harbor research", p: "Low", due: "Done", doc: "", done: true },
];

const IDEAS = [
  { t: "Why I stopped using AI to write", type: "Post", status: "Published", cls: "pub", cta: "Open Doc →" },
  { t: "Harbor towns photo essay", type: "Post", status: "Not started", cls: "", cta: "Turn into Doc" },
  { t: "Episode 12: building quietly", type: "Audio", status: "In progress", cls: "prog", cta: "Open Doc →" },
];

export function HomeAppDemo() {
  const [view, setView] = useState<View>("docs");
  const [capTitle, capBody] = CAPTIONS[view];

  return (
    <div className="hm-demo">
      <div className="hm-tabs" aria-label="App views">
        {NAV.filter((n) => n.view).map((n) => (
          <button
            key={n.label}
            className={view === n.view ? "on" : ""}
            onClick={() => setView(n.view as View)}
            aria-pressed={view === n.view}
          >
            {n.label}
          </button>
        ))}
      </div>

      <div className="hm-frame">
        <aside className="hm-side">
          <div className="hm-ws">
            <span className="hm-ws-av">M</span>
            <span>My Workspace</span>
          </div>
          {NAV.map((n) =>
            n.view ? (
              <button
                key={n.label}
                className={`hm-sbi${view === n.view ? " on" : ""}`}
                onClick={() => setView(n.view as View)}
                aria-pressed={view === n.view}
              >
                {n.icon}
                {n.label}
                {n.beta && <span className="hm-beta">Beta</span>}
              </button>
            ) : (
              <div key={n.label} className="hm-sbi dim">
                {n.icon}
                {n.label}
              </div>
            )
          )}
          <p className="hm-side-hint">This sidebar works. Click Docs, Notes, Planner or Studio.</p>
        </aside>

        <div className="hm-main">
          {view === "docs" && (
            <>
              <div className="hm-doctabs">
                <span className="on">Chapter three</span>
                <span>Research: harbor towns</span>
                <span className="hm-splitflag">Split view on</span>
              </div>
              <div className="hm-split">
                <div className="hm-pane">
                  <h3>Chapter three</h3>
                  <p>By the time the ferry came in, Ana had already decided not to tell anyone about the letter.</p>
                  <p>The harbor smelled of diesel and oranges. Somewhere behind the fish market a radio was playing the same song it had played the summer her father left.</p>
                  <div className="hm-ln" style={{ width: "90%" }} />
                  <div className="hm-ln" style={{ width: "82%" }} />
                  <div className="hm-ln" style={{ width: "58%" }} />
                </div>
                <div className="hm-seam"><span /></div>
                <div className="hm-pane alt">
                  <h3 className="sm">Research: harbor towns</h3>
                  <p>Ferries run twice a day in winter. Fish market closes by noon. Most boats are painted blue and white.</p>
                  <p>Old men play cards outside the customs house.</p>
                  <div className="hm-ln" style={{ width: "76%" }} />
                  <div className="hm-ln" style={{ width: "88%" }} />
                </div>
              </div>
            </>
          )}

          {view === "notes" && (
            <div className="hm-view">
              <div className="hm-pills">
                <span className="hm-pill on">All</span>
                <span className="hm-pill"><i style={{ background: "#8f89e6" }} />Journal</span>
                <span className="hm-pill"><i style={{ background: "#c98a5e" }} />Clients</span>
                <span className="hm-pill"><i style={{ background: "#6ec39a" }} />Reading</span>
                <span className="hm-pill"><i style={{ background: "#5b9bd6" }} />Podcast</span>
              </div>
              <div className="hm-notes">
                {NOTES.map((n) => (
                  <div className="hm-note" key={n.t}>
                    <b>{n.t}</b>
                    <span>{n.b}</span>
                    <em>{n.m}</em>
                  </div>
                ))}
              </div>
            </div>
          )}

          {view === "planner" && (
            <div className="hm-view">
              <div className="hm-pills">
                <span className="hm-pill on">All</span>
                <span className="hm-pill">Today</span>
                <span className="hm-pill">Upcoming</span>
                <span className="hm-pill">Done</span>
                <span className="hm-seg"><span className="on">List</span><span>Board</span></span>
              </div>
              <div className="hm-tasks">
                <div className="hm-task head"><span /><span>Task</span><span>Priority</span><span className="due">Due</span><span className="doc">Doc</span></div>
                {TASKS.map((t) => (
                  <div className={`hm-task${t.done ? " done" : ""}`} key={t.t}>
                    <span className={`hm-check${t.done ? " on" : ""}`} />
                    <span className="t">{t.t}</span>
                    <span className={t.p === "High" ? "hi" : ""}>{t.p}</span>
                    <span className="due">{t.due}</span>
                    <span className="doc">{t.doc && <span className="hm-chip">{t.doc}</span>}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {view === "studio" && (
            <div className="hm-view">
              <div className="hm-sec-head"><b>Ideas</b><span>24</span></div>
              <div className="hm-ideas">
                {IDEAS.map((i) => (
                  <div className={`hm-idea${i.cta === "Turn into Doc" ? " hl" : ""}`} key={i.t}>
                    <span className="t">{i.t}</span>
                    <span className="hm-chip">{i.type}</span>
                    <span className={`st ${i.cls}`}>{i.status}</span>
                    <span className={i.cta === "Turn into Doc" ? "hm-turn" : "open"}>{i.cta}</span>
                  </div>
                ))}
              </div>
              <div className="hm-sec-head" style={{ marginTop: 26 }}><b>Canvas</b><span>6</span></div>
              <div className="hm-canvases">
                <div className="hm-cvcard"><div className="hm-cvdots"><i className="a" /><i className="b" /></div><span>Kiko moodboard</span></div>
                <div className="hm-cvcard"><div className="hm-cvdots"><i className="c" /><i className="d" /></div><span>Novel plot map</span></div>
                <div className="hm-cvcard"><div className="hm-cvdots"><i className="a" /><i className="e" /></div><span>Podcast season 2</span></div>
              </div>
            </div>
          )}
        </div>
      </div>

      <p className="hm-caption">
        <span className="hm-caption-dot" />
        <span><b>{capTitle}</b> {capBody}</span>
      </p>
    </div>
  );
}
