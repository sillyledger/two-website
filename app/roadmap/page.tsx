import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Roadmap & Upcoming Features | TWO",
};

const PREV_ITEMS = [
  "Activity feed",
  "Real-time collaboration",
  "Multiple tabs",
  "Team Workspaces",
  "Planner",
  "Internal doc links",
  "Library",
  "Auth & accounts",
  "Rich text editor",
  "PWA & home screen",
  "Collections",
  "Notes scoped per user",
  "Autosave & save indicator",
  "Settings & appearance",
  "Dark & light mode",
  "Favorites",
  "Restore recently deleted files",
  "Image upload",
  "Billing & Pro tier",
  "Export to PDF & Markdown",
  "Storage tracking & settings section",
  "Live sync",
];

const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Roadmap() {
  return (
    <div className="features-frame">
      <div className="roadmap-head">
        <p className="micro">Public roadmap</p>
        <h1 className="display">What we&apos;re building.</h1>
        <p>A live look at what&apos;s deployed, what&apos;s in progress, and what&apos;s coming next.</p>
      </div>

      <div className="roadmap-board">
        <div>
          <div className="roadmap-col-head">
            <div className="dot shipped"></div>
            <span>Deployed</span>
          </div>
          <div className="roadmap-flagship">
            <div className="roadmap-card">
              <p className="t">Split View Docs</p>
              <p className="d">
                View two documents side by side in one window. Drag the divider to resize — reference one doc while
                you write in the other.
              </p>
              <span className="rm-badge shipped">✓ Done</span>
            </div>
            <div className="roadmap-flag-leader">
              <div className="tick"></div>
              <div className="line"></div>
              <div className="lbl">
                The <b>flagship</b>, shipped
              </div>
            </div>
          </div>
          <div className="roadmap-card">
            <p className="t">Close All Tabs</p>
            <p className="d">
              One click to close every open tab at once, with a confirmation prompt to prevent accidental closes.
            </p>
            <span className="rm-badge shipped">✓ Done</span>
          </div>
        </div>

        <div>
          <div className="roadmap-col-head">
            <div className="dot progress"></div>
            <span>In progress</span>
          </div>
          <div className="roadmap-card">
            <p className="t">Onboarding flow</p>
            <p className="d">A guided first-run experience so new users hit the ground running.</p>
            <span className="rm-badge progress">In progress</span>
          </div>
          <div className="roadmap-card">
            <p className="t">Inline comments</p>
            <p className="d">
              Highlight any text and leave a comment — Google Docs-style threaded feedback, built right into the doc.
            </p>
            <span className="rm-badge progress">In progress</span>
          </div>
          <div className="roadmap-card">
            <p className="t">Native Mac app</p>
            <p className="d">A dedicated Mac experience — fast, native, lives in your dock.</p>
            <span className="rm-badge progress">In progress</span>
          </div>
        </div>

        <div>
          <div className="roadmap-col-head">
            <div className="dot soon"></div>
            <span>Coming soon</span>
          </div>
          <div className="roadmap-card">
            <p className="t">Password-protected folders</p>
            <p className="d">Lock sensitive folders behind a password for an extra layer of privacy.</p>
            <span className="rm-badge soon">Planned</span>
          </div>
          <div className="roadmap-card">
            <p className="t">Native iPad app</p>
            <p className="d">A dedicated iPad experience built for the way you think and write.</p>
            <span className="rm-badge soon">Planned</span>
          </div>
        </div>
      </div>

      <div className="roadmap-divider"></div>
      <p className="roadmap-prev-title">Previously deployed</p>
      <div className="roadmap-prev-grid">
        {PREV_ITEMS.map((item) => (
          <div className="roadmap-prev-item" key={item}>
            {CHECK}
            {item}
          </div>
        ))}
      </div>

      <div className="roadmap-divider"></div>
      <p className="roadmap-prev-title">On the horizon</p>
      <div className="roadmap-horizon-card">
        <p className="t">Offline-first</p>
        <p className="d">Full functionality without an internet connection — always.</p>
      </div>
    </div>
  );
}
