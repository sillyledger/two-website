import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Roadmap & Upcoming Features | TWO",
};

type Card = { t: string; d: string; link?: { label: string; href: string } };

const DEPLOYED: Card[] = [
  {
    t: "Split View Docs",
    d: "View two documents side by side in one window. Drag the divider to resize, and reference one doc while you write in the other.",
  },
  {
    t: "Studio: Ideas and Canvas",
    d: "A home for the thinking before a doc. Keep a list of ideas, and work them out on an open canvas with docs, notes, images, shapes and color cards.",
  },
  {
    t: "Turn into Doc",
    d: "Turn any idea into a real doc in one click. The two stay linked, so renaming one renames the other.",
  },
  {
    t: "Notes categories",
    d: "Sort quick notes into color-coded categories, nested as deep as you like.",
  },
];

const IN_PROGRESS: Card[] = [
  { t: "Onboarding flow", d: "A guided first-run experience so new users hit the ground running." },
  { t: "Inline comments", d: "Highlight any text and leave a comment. Threaded feedback, built right into the doc." },
  { t: "Native Mac app", d: "A dedicated Mac experience. Fast, native, lives in your Dock.", link: { label: "See the build ↑", href: "#mac" } },
];

const SOON: Card[] = [
  { t: "Password-protected folders", d: "Lock sensitive folders behind a password for an extra layer of privacy." },
  { t: "Native iPad app", d: "A dedicated iPad experience built for the way you think and write." },
  { t: "Doc panel improvements", d: "Refinements to the slide-in side panel: smoother open and close, better use of space." },
];

const HORIZON: Card[] = [
  { t: "Offline-first", d: "Full functionality without an internet connection, always." },
];

type MacStatus = "done" | "progress" | "next";
type MacMilestone = { t: string; d: string; s: MacStatus; i: string[] };

const MAC_UPDATED = "Oct 10, 2026";

const MAC: MacMilestone[] = [
  { t: "Sign in and sync", s: "done", d: "Log in with your TWO account. Everything you wrote on the web is already there.", i: ["Email and password login", "Password reset", "Synced with the web app", "Log out"] },
  { t: "The editor", s: "progress", d: "Headings, lists, tables, images and code, in a fully native editor.", i: ["Headings, lists and task lists", "Tables, images and code blocks", "Markdown shortcuts", "Autosave and version history"] },
  { t: "Home and navigation", s: "next", d: "The sidebar, your recent docs and quick search.", i: ["Sidebar with favorites", "Recent docs on Home", "Quick search with ⌘K", "Grid and list views"] },
  { t: "Tabs and Split View", s: "next", d: "Two docs, one screen. The reason TWO exists.", i: ["Docs open as tabs", "Two docs side by side", "Drag the divider to resize", "Picks up where you left off"] },
  { t: "Folders and Library", s: "next", d: "Nested folders, pinned favorites and one place to see everything.", i: ["Nested folders with colors", "Pin folders to the sidebar", "Library overview", "Trash and restore"] },
  { t: "Notes", s: "next", d: "Quick notes, sorted into nested categories.", i: ["Grid or list of notes", "Nested categories", "Export as Markdown or PDF", "Open a note in Split View"] },
  { t: "Planner and Activity", s: "next", d: "Tasks tied to your docs, and a feed of what changed.", i: ["Tasks linked to docs", "Today, Upcoming and Overdue", "Board and list view", "Activity by day"] },
  { t: "Settings and finish", s: "next", d: "Themes, text size, shortcuts and the last details.", i: ["Dark, light or system theme", "Editor text size", "Date format and time zone", "Plan and storage"] },
];

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
  "Close All Tabs",
  "Folder structure improvements",
  "Sidebar redesign",
  "Layout improvements",
  "Activity redesign",
  "Library redesign",
  "Version history",
  "Canvas",
  "Nested folders",
];

const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Roadmap() {
  const shippedCount = PREV_ITEMS.length + DEPLOYED.length;
  const macDone = MAC.filter((m) => m.s === "done").length;
  const macFirstNext = MAC.findIndex((m) => m.s === "next");
  const macBadge = (m: MacMilestone, k: number) =>
    m.s === "done" ? (
      <span className="rm-badge shipped">✓ Done</span>
    ) : m.s === "progress" ? (
      <span className="rm-badge progress">Building now</span>
    ) : (
      <span className="rm-badge soon">{k === macFirstNext ? "Up next" : "Planned"}</span>
    );
  const [flagship, ...restDeployed] = DEPLOYED;

  return (
    <div className="features-frame">
      {/* ============ HERO ============ */}
      <section className="rmh-hero">
        <div>
          <p className="micro">Public roadmap</p>
          <h1 className="display">
            What we&apos;re
            <br />
            building.
          </h1>
        </div>
        <div className="rmh-intro">
          <p>A live look at what&apos;s deployed, what&apos;s in progress, and what&apos;s coming next.</p>
          <div className="rmh-links">
            <a href="https://www.sorano.space/two-docs/changelog" target="_blank" rel="noopener noreferrer">
              Read the changelog ↗
            </a>
            <a href="/contact">Suggest a feature →</a>
          </div>
        </div>
      </section>

      <div className="rmh-stats">
        <div className="rmh-stat">
          <span className="rmh-node shipped" />
          <b>{shippedCount}</b>
          <span>Features shipped</span>
        </div>
        <div className="rmh-stat">
          <span className="rmh-node progress" />
          <b>{IN_PROGRESS.length}</b>
          <span>In progress now</span>
        </div>
        <div className="rmh-stat">
          <span className="rmh-node" />
          <b>{SOON.length}</b>
          <span>Coming soon</span>
        </div>
        <div className="rmh-stat">
          <span className="rmh-node horizon" />
          <b className="dim">{HORIZON.length}</b>
          <span>On the horizon</span>
        </div>
      </div>

      {/* ============ MAC BUILD ============ */}
      <section className="rmm" id="mac" aria-labelledby="rmm-h">
        <div className="rmm-left">
          <div className="roadmap-col-head">
            <div className="dot progress"></div>
            <span>Native Mac app</span>
          </div>
          <h2 className="display rmm-h" id="rmm-h">
            The Mac app,
            <br />
            built from scratch.
          </h2>
          <p className="rmm-lede">Fully native and written in Swift, not the website in a window. Here is where the build stands.</p>
          <div className="rmm-prog">
            <div className="rmm-count">
              <b>{macDone}</b>
              <span>of {MAC.length} milestones done</span>
            </div>
            <div className="rmm-bar" aria-hidden="true">
              {MAC.map((m) => (
                <span key={m.t} className={`rmm-${m.s}`} />
              ))}
            </div>
            <p className="rmm-upd">Updated {MAC_UPDATED}</p>
          </div>
          <p className="rmm-scope">The first version covers private workspaces. Shared workspaces and Canvas come after.</p>
        </div>
        <div>
          <ol className="rmm-track">
            {MAC.map((m, k) => (
              <li key={m.t} className={`rmm-step rmm-${m.s}`}>
                <span className="rmm-node" aria-hidden="true" />
                <div className="rmm-card">
                  <div className="rmm-top">
                    <h3 className="rmm-t">{m.t}</h3>
                    {macBadge(m, k)}
                  </div>
                  {m.s !== "done" && <p className="rmm-d">{m.d}</p>}
                  {m.s === "progress" && (
                    <ul className="rmm-inc">
                      {m.i.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
          <p className="rmm-scope rmm-scope-m">The first version covers private workspaces. Shared workspaces and Canvas come after.</p>
        </div>
      </section>

      <div className="roadmap-divider rmm-divider"></div>

      {/* ============ BOARD ============ */}
      <div className="roadmap-board">
        <div>
          <div className="roadmap-col-head">
            <div className="dot shipped"></div>
            <span>Deployed</span>
          </div>
          <div className="roadmap-flagship">
            <div className="roadmap-card">
              <p className="t">{flagship.t}</p>
              <p className="d">{flagship.d}</p>
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
          {restDeployed.map((c) => (
            <div className="roadmap-card" key={c.t}>
              <p className="t">{c.t}</p>
              <p className="d">{c.d}</p>
              <span className="rm-badge shipped">✓ Done</span>
            </div>
          ))}
        </div>

        <div>
          <div className="roadmap-col-head">
            <div className="dot progress"></div>
            <span>In progress</span>
          </div>
          {IN_PROGRESS.map((c) => (
            <div className="roadmap-card" key={c.t}>
              <p className="t">{c.t}</p>
              <p className="d">{c.d}</p>
              <span className="rm-badge progress">In progress</span>
              {c.link && (
                <a href={c.link.href} className="rmm-link">{c.link.label}</a>
              )}
            </div>
          ))}
        </div>

        <div>
          <div className="roadmap-col-head">
            <div className="dot soon"></div>
            <span>Coming soon</span>
          </div>
          {SOON.map((c) => (
            <div className="roadmap-card" key={c.t}>
              <p className="t">{c.t}</p>
              <p className="d">{c.d}</p>
              <span className="rm-badge soon">Planned</span>
            </div>
          ))}
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
      {HORIZON.map((c) => (
        <div className="roadmap-horizon-card" key={c.t}>
          <p className="t">{c.t}</p>
          <p className="d">{c.d}</p>
        </div>
      ))}
    </div>
  );
}
