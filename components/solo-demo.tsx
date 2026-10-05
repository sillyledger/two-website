"use client";

import { useState } from "react";

type Step = { t: string; d: string; lead: string; crumb: string; rail: number; saved: boolean };

const STEPS: Step[] = [
  { t: "Catch the idea", d: "Jot it in Ideas the moment it comes up. Give it a type and a status.", lead: "Studio · Ideas", crumb: "Studio › Ideas", rail: 4, saved: false },
  { t: "Turn it into a doc", d: "One click makes a real doc from the idea, linked back to it.", lead: "Turn into Doc", crumb: "Docs › Retainer proposal", rail: 1, saved: true },
  { t: "Write with the notes beside it", d: "Open your call notes in split view and write without switching windows.", lead: "Split view", crumb: "Docs › Split view", rail: 1, saved: true },
  { t: "Plan the follow-up", d: "Add a task with a due date and link it to the doc it belongs to.", lead: "Planner", crumb: "Planner", rail: 3, saved: false },
  { t: "Send it", d: "Export a clean PDF, or Markdown if it goes somewhere else.", lead: "Export", crumb: "Docs › Retainer proposal", rail: 1, saved: true },
];

const RAIL = ["Home", "Docs", "Notes", "Planner", "Studio"];
const DOC_TITLE = "Retainer proposal: Studio Kiko";

function IdeasScreen() {
  return (
    <div className="slx-pad">
      <div className="slx-head">
        <b>Ideas</b>
        <span>List · Board</span>
      </div>
      <div className="slx-rows">
        <div className="slx-row cur">
          <span className="t">Retainer proposal, Studio Kiko</span>
          <span className="slx-type">Post</span>
          <span className="slx-turn slx-hl">Turn into Doc</span>
        </div>
        <div className="slx-row">
          <span className="t">Newsletter: pricing lessons</span>
          <span className="slx-type">Post</span>
          <span className="slx-st"><i style={{ background: "#e0a44d" }} />In progress</span>
        </div>
        <div className="slx-row">
          <span className="t">Case study: Harbor rebrand</span>
          <span className="slx-type">Post</span>
          <span className="slx-st"><i style={{ background: "#6ec39a" }} />Published</span>
        </div>
        <div className="slx-row">
          <span className="t">Talk outline for the meetup</span>
          <span className="slx-type">Audio</span>
          <span className="slx-st"><i style={{ background: "#6a6a74" }} />Not started</span>
        </div>
      </div>
    </div>
  );
}

function DocScreen() {
  return (
    <div className="slx-doc">
      <b className="slx-doc-t">{DOC_TITLE}</b>
      <p>
        Three months of brand support, starting in November. One shared moodboard, two rounds of logo directions,
        and a small type system.
      </p>
      <p className="h">Scope</p>
      <i className="slx-ln" style={{ width: "92%" }} />
      <i className="slx-ln" style={{ width: "84%" }} />
      <i className="slx-ln" style={{ width: "70%" }} />
      <p className="h">Timeline</p>
      <i className="slx-ln" style={{ width: "88%" }} />
      <i className="slx-ln" style={{ width: "52%" }} />
    </div>
  );
}

function SplitScreen() {
  return (
    <div className="slx-split">
      <div className="slx-doc">
        <b className="slx-doc-t">{DOC_TITLE}</b>
        <p>Three months of brand support, starting in November.</p>
        <p className="ac">A quieter look, as agreed on the call: warm neutrals and one accent.</p>
        <i className="slx-ln wide" style={{ width: "90%" }} />
        <i className="slx-ln wide" style={{ width: "74%" }} />
      </div>
      <div className="slx-doc side slx-hl">
        <b className="slx-doc-t">Call notes: Kiko</b>
        <p>• Wants the rebrand to feel quieter</p>
        <p>• Warm neutrals, one accent colour</p>
        <p>• Budget agreed for Q3</p>
        <p>• Start in November</p>
      </div>
    </div>
  );
}

function PlannerScreen() {
  return (
    <div className="slx-pad">
      <div className="slx-head">
        <b>Planner</b>
        <span>This week</span>
      </div>
      <div className="slx-rows">
        <div className="slx-task cur">
          <span className="slx-box" />
          <span>
            Send proposal to Studio Kiko
            <br />
            <span className="slx-link slx-hl">{DOC_TITLE}</span>
          </span>
          <span className="slx-due soon">Fri</span>
        </div>
        <div className="slx-task">
          <span className="slx-box" />
          <span>Edit the Harbor case study</span>
          <span className="slx-due">Thu</span>
        </div>
        <div className="slx-task">
          <span className="slx-box" />
          <span>Weekly review</span>
          <span className="slx-due">Sun</span>
        </div>
      </div>
    </div>
  );
}

function ExportScreen() {
  return (
    <>
      <div className="slx-doc">
        <b className="slx-doc-t">{DOC_TITLE}</b>
        <p>Three months of brand support, starting in November.</p>
        <i className="slx-ln" style={{ width: "92%" }} />
        <i className="slx-ln" style={{ width: "84%" }} />
        <i className="slx-ln" style={{ width: "70%" }} />
        <i className="slx-ln" style={{ width: "60%" }} />
      </div>
      <div className="slx-menu">
        <span className="slx-mi on">Export as PDF</span>
        <span className="slx-mi">Export as Markdown</span>
        <span className="slx-mi">Version history</span>
      </div>
    </>
  );
}

export function SoloDemo() {
  const [step, setStep] = useState(0);
  const cur = STEPS[step];
  const last = STEPS.length - 1;

  return (
    <section className="slx-demo">
      <p className="micro">One proposal, start to finish</p>
      <div className="slx-grid">
        <h2 className="display slx-h">From idea to sent.</h2>

        <div className="slx-stage">
          <p className="slx-lead">
            <i className="dot" />
            <i className="line" />
            Step {step + 1} of {STEPS.length} · {cur.lead}
          </p>
          <div className="slx-win" aria-hidden="true">
            <div className="slx-bar">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="slx-crumb">{cur.crumb}</span>
              {cur.saved && <span className="slx-saved">Saved</span>}
            </div>
            <div className="slx-body">
              <div className="slx-rail">
                {RAIL.map((r, i) => (
                  <span key={r} className={i === cur.rail ? "on" : ""}>{r}</span>
                ))}
              </div>
              <div className="slx-screen">
                {step === 0 && <IdeasScreen />}
                {step === 1 && <DocScreen />}
                {step === 2 && <SplitScreen />}
                {step === 3 && <PlannerScreen />}
                {step === 4 && <ExportScreen />}
              </div>
            </div>
          </div>
        </div>

        <div className="slx-list">
          {STEPS.map((s, i) => (
            <button
              type="button"
              key={s.t}
              className={i === step ? "slx-step on" : "slx-step"}
              aria-current={i === step ? "step" : undefined}
              onClick={() => setStep(i)}
            >
              <span className="n">{i + 1}</span>
              <span>
                <b>{s.t}</b>
                <span className="d">{s.d}</span>
              </span>
            </button>
          ))}
          <div className="slx-nav">
            <button type="button" className="slx-nb" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
              Back
            </button>
            <button type="button" className="slx-nb solid" onClick={() => setStep(step === last ? 0 : step + 1)}>
              {step === last ? "Start over" : "Next step"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
