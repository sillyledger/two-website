const MEMBERS = [
  { initial: "P", bg: "#3C3489", color: "#CECBF6", name: "Pieter", email: "pieter@strevius.co", role: "Owner" },
  { initial: "S", bg: "#085041", color: "#9FE1CB", name: "Sarah", email: "sarah@company.com", role: "Editor" },
  { initial: "M", bg: "#633806", color: "#FAC775", name: "Mark", email: "mark@company.com", role: "Viewer" },
];

const STEPS = [
  {
    t: "Invite by email",
    d: "Add anyone to your workspace in seconds. They get a link, click it, and they're in.",
  },
  {
    t: "Set their role",
    d: "Owner, Editor, or Viewer — control who can write and who can only read.",
  },
  {
    t: "Write together, live",
    d: "See who's in the doc right now. Coloured cursors show exactly where each person is writing.",
  },
];

const SPECS = [
  { label: "Roles", value: "Owner, Editor, Viewer" },
  { label: "Invites", value: "By email, instant" },
  { label: "Presence", value: "Live, colour-coded cursors" },
  { label: "Guest access", value: "Per-doc, no full access" },
  { label: "Availability", value: "Pro and Founding plans" },
];

const USES = [
  {
    title: "Team knowledge base",
    desc: "One place for everything your team needs to know — processes, decisions, references. Always up to date.",
  },
  {
    title: "Client deliverables",
    desc: "Invite clients as Viewers to share briefs and reports. Professional, polished, no extra tools needed.",
  },
  {
    title: "Co-writing in real time",
    desc: "Two people, one doc, editing simultaneously. No conflicts, no overwriting — just fluid collaboration.",
  },
  {
    title: "Guest access",
    desc: "Bring in a freelancer or external collaborator without giving them access to your whole workspace.",
  },
];

export default function SharedWorkspacesPage() {
  return (
    <div className="features-frame">
      <div className="bc">
        <a href="/product/features">Features</a>
        <span>/</span>
        <span className="cur">Shared Workspaces</span>
      </div>

      <h1 className="display hero-title">
        Your team,
        <br />
        one workspace.
      </h1>

      <div className="hero-cols">
        <p>
          Invite teammates or guests in seconds. Everyone works from the same space — no emailing files, no version
          confusion.
        </p>
        <p>See who&apos;s online, watch edits happen live, and keep your whole team on the same page. Literally.</p>
      </div>

      <div className="ws-stage">
        <div className="leader la3">
          <div className="tick"></div>
          <div className="line"></div>
          <div className="lbl">
            Live presence — <b>see who&apos;s here</b>
          </div>
        </div>

        <div className="ws-invite-card">
          <div className="ws-card-bar">Invite to workspace</div>
          <div className="ws-card-body">
            <p className="ws-field-label">Add people</p>
            <div className="ws-invite-row">
              <span className="email">sarah@company.com</span>
              <span className="role">Editor</span>
            </div>
            <div className="ws-invite-row">
              <span className="email">mark@company.com</span>
              <span className="role">Viewer</span>
            </div>
            <div className="ws-invite-btn">Send invites</div>

            <p className="ws-members-label">Members · 4</p>
            {MEMBERS.map((m) => (
              <div className="ws-member-row" key={m.name}>
                <div className="ws-avatar" style={{ background: m.bg, color: m.color }}>
                  {m.initial}
                </div>
                <div>
                  <div className="ws-member-name">{m.name}</div>
                  <div className="ws-member-email">{m.email}</div>
                </div>
                <div className="ws-member-role">{m.role}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="ws-doc-side">
          <div className="ws-doc-bar">
            <div className="ws-doc-title">Q3 Strategy — Draft</div>
            <div className="ws-presence">
              <div className="ws-avatar" style={{ background: "#3C3489", color: "#CECBF6" }}>
                P
              </div>
              <div className="ws-avatar" style={{ background: "#085041", color: "#9FE1CB" }}>
                S
              </div>
            </div>
          </div>
          <div className="ws-doc-content">
            <div className="ws-dline hi" style={{ width: "88%" }}></div>
            <div className="ws-dline" style={{ width: "72%" }}></div>
            <div className="ws-dline hi" style={{ width: "65%" }}></div>
            <div className="ws-dline" style={{ width: "80%" }}></div>
            <div className="ws-cursor-block">
              <div className="ws-cursor-label" style={{ background: "#3C3489", color: "#CECBF6" }}>
                Pieter
              </div>
              <div className="ws-dline hi" style={{ width: "38%", flexShrink: 0 }}></div>
              <div className="ws-inline-cursor" style={{ background: "#7F77DD" }}></div>
            </div>
            <div className="ws-dline" style={{ width: "77%" }}></div>
            <div className="ws-dline hi" style={{ width: "44%" }}></div>
            <div className="ws-cursor-block">
              <div className="ws-cursor-label" style={{ background: "#085041", color: "#9FE1CB" }}>
                Sarah
              </div>
              <div className="ws-dline hi" style={{ width: "50%", flexShrink: 0 }}></div>
              <div className="ws-inline-cursor" style={{ background: "#1D9E75" }}></div>
            </div>
            <div className="ws-dline" style={{ width: "59%" }}></div>
            <div className="ws-dline hi" style={{ width: "83%" }}></div>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <div>
          <span className="k">Roles</span>
          <span className="v">Owner, Editor, Viewer</span>
        </div>
        <div>
          <span className="k">Availability</span>
          <span className="v">Pro and Founding plans</span>
        </div>
      </div>

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
          <p className="ws-spec-title">Details</p>
          {SPECS.map((spec) => (
            <div key={spec.label} className="ws-spec-row">
              <span className="label">{spec.label}</span>
              <span className="value">{spec.value}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="dark-strip">
        <p className="micro">Built for small teams</p>
        <h2 className="display dark-title">How teams use shared workspaces.</h2>
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
        <h2 className="display cta-title">Ready to bring your team in?</h2>
        <p className="cta-sub">Shared Workspaces are included on Pro and Founding. Invite your first teammate today.</p>
        <a href="https://app.two.so/signup" className="btn-dark">
          Start writing for free
        </a>
      </div>
    </div>
  );
}
