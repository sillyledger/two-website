import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Split View Docs: Multi-Task & Compare Documents | TWO",
};

const PANE_1_LINES = [
  { width: "92%" },
  { width: "58%" },
  { width: "76%", hi: true },
  { width: "44%" },
  { width: "81%", hi: true },
  { width: "63%" },
  { width: "38%", hi: true },
  { width: "70%" },
];

const PANE_2_LINES = [
  { width: "84%" },
  { width: "66%", hi: true },
  { width: "52%" },
  { width: "77%", hi: true },
  { width: "41%" },
  { width: "68%", hi: true },
  { width: "50%" },
  { width: "73%" },
];

const STEPS = [
  {
    t: "Open any two notes or docs",
    d: "Pick from anything in your library. Notes and docs both work, no restrictions. From the home screen or straight from a tab.",
  },
  {
    t: "Drag to resize",
    d: "The divider moves freely between the two panes. Give more room to whichever side needs it.",
  },
  {
    t: "Layout auto-saves",
    d: "Close TWO and reopen it. Your split is exactly where you left it.",
  },
];

const SPECS = [
  { label: "Panes", value: "2, fully independent" },
  { label: "Resize", value: "Drag, any ratio" },
  { label: "Content types", value: "Notes or docs, no restrictions" },
  { label: "Layout persistence", value: "Saved per device" },
  { label: "Sync", value: "Live, cross-device" },
  { label: "Availability", value: "Web now, Mac & iPad soon" },
  { label: "Included in", value: "Every plan, including Free" },
];

const USES = [
  {
    title: "Research + draft",
    desc: "Notes on one side, article on the other. Stop losing your thread mid-sentence.",
  },
  {
    title: "Strategy + brief",
    desc: "Reference your OKRs while writing the product brief. Stay aligned without tab-switching.",
  },
  {
    title: "Last week + this week",
    desc: "Open your past review beside today's planner. See patterns, set sharper intentions.",
  },
  {
    title: "Template + your version",
    desc: "Template on one side, your draft on the other. Structured and freeform at once.",
  },
];

export default function SplitViewPage() {
  return (
    <div className="features-frame">
      <div className="bc">
        <a href="/product/features">Features</a>
        <span>/</span>
        <span className="cur">Split View</span>
      </div>

      <h1 className="display hero-title">
        Two docs.
        <br />
        One screen.
      </h1>

      <div className="hero-cols">
        <p>
          Research on the left, writing on the right. Drag the divider and reshape your workspace however you think.
        </p>
        <p>
          Open any two notes or docs from your library. Your layout saves automatically. No setup, no
          reconfiguring. Just open TWO and pick up exactly where you left off.
        </p>
      </div>

      <div className="sv-stage">
        <div className="leader la1">
          <div className="tick"></div>
          <div className="line"></div>
          <div className="lbl">
            Drag: <b>reshape anytime</b>
          </div>
        </div>
        <div className="leader la2">
          <div className="tick"></div>
          <div className="line"></div>
          <div className="lbl">
            Any doc: <b>swap either side</b>
          </div>
        </div>
        <div className="leader la3">
          <div className="tick"></div>
          <div className="line"></div>
          <div className="lbl">
            Auto-saved: <b>layout remembered</b>
          </div>
        </div>
        <div className="leader la4">
          <div className="tick"></div>
          <div className="line"></div>
          <div className="lbl">
            One click: <b>from your library</b>
          </div>
        </div>

        <div className="device">
          <div className="frame-bar">
            <div className="fb-dots">
              <div className="fb-dot" style={{ background: "#ff5f57" }}></div>
              <div className="fb-dot" style={{ background: "#febc2e" }}></div>
              <div className="fb-dot" style={{ background: "#28c840" }}></div>
            </div>
            <div className="frame-url">app.two.so</div>
            <div className="frame-badge">■ Split active</div>
          </div>
          <div className="panes">
            <div className="pane">
              <div className="pane-bar" style={{ background: "rgba(80,140,255,0.6)" }}></div>
              <div className="pane-label">Product Brief: Q3</div>
              {PANE_1_LINES.map((line, i) => (
                <div key={i} className={`sl${line.hi ? " hi" : ""}`} style={{ width: line.width }}></div>
              ))}
            </div>
            <div className="divider-bar">
              <div className="handle"></div>
            </div>
            <div className="pane">
              <div className="pane-bar" style={{ background: "rgba(60,200,120,0.6)" }}></div>
              <div className="pane-label">Weekly Review: June</div>
              {PANE_2_LINES.map((line, i) => (
                <div key={i} className={`sl${line.hi ? " hi" : ""}`} style={{ width: line.width }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sv-bottom-bar">
        <div>
          <span className="k">Panes</span>
          <span className="v">2, independent</span>
        </div>
        <div>
          <span className="k">Availability</span>
          <span className="v">Free, every plan</span>
        </div>
      </div>

      <div className="intro">
        <div className="intro-left">
          The best writing happens when your sources and your draft live side by side.
        </div>
        <div className="intro-right">
          <p>
            Most tools make you choose: either you&apos;re reading, or you&apos;re writing. TWO lets you do both at
            once. Two documents, one window, zero context switching.
          </p>
          <p>
            Drag the divider to give more space to whatever needs it. Pick any two docs from your library. Your
            layout persists when you close and reopen.
          </p>
        </div>
      </div>

      <div className="divider"></div>

      <div className="split">
        <div>
          <p className="how-title">How it works</p>
          <div className="steps">
            {STEPS.map((step, i) => (
              <div key={step.t} className={`step${i === 0 ? " active" : ""}`}>
                <p className="t">{step.t}</p>
                <p className="d">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="sv-spec-title">Details</p>
          {SPECS.map((spec) => (
            <div key={spec.label} className="sv-spec-row">
              <span className="label">{spec.label}</span>
              <span className="value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dark-strip">
        <p className="micro">Made for your workflow</p>
        <h2 className="display dark-title">How writers, creatives and founders use it.</h2>
        <div className="uses">
          {USES.map((use) => (
            <div key={use.title} className="use">
              <span className="use-arrow">→</span>
              <div>
                <p className="use-title">{use.title}</p>
                <p className="use-desc">{use.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="cta-section">
        <h2 className="display cta-title">Ready to think in two windows?</h2>
        <p className="cta-sub">Split View is free on every plan. Open TWO and hit the split icon to try it now.</p>
        <a href="https://app.two.so/signup" className="btn-dark">
          Start writing for free
        </a>
      </div>
    </div>
  );
}
