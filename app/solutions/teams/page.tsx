import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TWO for Teams: Fast, Collaborative Workspace Docs",
};

const GALLERY: { key: string; title: string; desc: string }[] = [
  { key: "shared", title: "Shared workspaces", desc: "Everyone works from the same place — no hunting through email or Slack for the latest version." },
  { key: "sync", title: "Live, as you type", desc: "Edits sync in real time — see what your teammates are writing as they write it." },
  { key: "simple", title: "Simple enough for everyone", desc: "No onboarding sessions. If your team can use Apple Notes, they can use TWO." },
  { key: "browser", title: "A web app that just works", desc: "Runs in the browser on Mac and iPad today — no install. Native apps are on the roadmap." },
  { key: "clean", title: "Docs that look great shared", desc: "Send a proposal or brief to a client and it looks polished — not like a database row." },
  { key: "activity", title: "Full activity history", desc: "See what your team's worked on at a glance — every edit and create, no surprises." },
];

const FILMSTRIP = [
  { title: "Team knowledge base", desc: "One place for processes, decisions, and what everyone needs to know." },
  { title: "Client deliverables", desc: "Write and share briefs, reports, and proposals that look professional." },
  { title: "Meeting notes", desc: "Capture and share notes from every meeting — searchable, always available." },
  { title: "Product & strategy docs", desc: "Keep your roadmap, strategy, and decisions documented." },
];

function GalleryVisual({ visualKey }: { visualKey: string }) {
  switch (visualKey) {
    case "shared":
      return (
        <div className="tw-mv-shared">
          <div className="av" style={{ background: "var(--indigo-pill)", color: "var(--indigo)" }}>JL</div>
          <div className="av" style={{ background: "var(--clay-pill)", color: "var(--clay)" }}>MK</div>
          <div className="av" style={{ background: "var(--bg-card)", color: "var(--text-muted)", border: "1px solid var(--border-strong)" }}>+2</div>
        </div>
      );
    case "sync":
      return (
        <div className="tw-mv-sync">
          <div className="dev" /><div className="pulse" /><div className="dev" />
        </div>
      );
    case "simple":
      return (
        <div className="tw-mv-simple">
          <div className="l" /><div className="l" /><div className="l" />
        </div>
      );
    case "browser":
      return (
        <div className="tw-mv-browser">
          <div className="bar"><i /><i /><i /></div>
        </div>
      );
    case "clean":
      return (
        <div className="tw-mv-doc-clean">
          <div className="l" /><div className="l" /><div className="l" />
        </div>
      );
    case "activity":
    default:
      return (
        <div className="tw-mv-activity">
          <div className="row"><div className="d" /><span>Edited Client Brief</span></div>
          <div className="row"><div className="d" /><span>Created Meeting Notes</span></div>
          <div className="row"><div className="d" /><span>Shared Roadmap</span></div>
        </div>
      );
  }
}

export default function ForTeamsPage() {
  return (
    <div className="features-frame">
      <section className="tw-hero">
        <span className="tw-tag">For Small Teams</span>
        <h1 className="display">
          A shared doc your <span className="ac">whole team actually opens.</span>
        </h1>
        <p className="sub">
          Not a workspace platform. Not a database. Just real-time shared docs — clean, fast, and simple enough
          that nobody needs a walkthrough.
        </p>
        <div className="cta-row">
          <a className="btn solid" href="https://app.two.so/signup">Start for free</a>
          <a className="btn outline" href="/product/features/shared-workspaces">See how it works</a>
        </div>

        <div className="tw-board">
          <div className="tw-app tw-doc">
            <div className="tw-doc-bar">
              <i /><i /><i />
              <div className="tw-presence">
                <div className="tw-av tw-av1">JL</div>
                <div className="tw-av tw-av2">MK</div>
              </div>
            </div>
            <div className="tw-ln tw-w95" style={{ height: 2, background: "var(--text-muted)" }} />
            <div className="tw-ln tw-w95" style={{ marginTop: 14 }} />
            <div className="tw-ln tw-w80" />
            <div className="tw-ln tw-w70" />
            <div className="tw-ln tw-w50" />
          </div>

          <div className="tw-app tw-shared">
            <div className="k">SHARED WITH</div>
            <div className="tw-avatars">
              <div className="av" style={{ background: "var(--indigo-pill)", color: "var(--indigo)" }}>JL</div>
              <div className="av" style={{ background: "var(--clay-pill)", color: "var(--clay)" }}>MK</div>
              <div className="av" style={{ background: "var(--bg-tertiary)", color: "var(--text-muted)" }}>+2</div>
            </div>
          </div>

          <div className="tw-app tw-sync">
            <div className="tw-sync-row"><div className="tw-sync-dot" /><span style={{ fontSize: 11.5, fontWeight: 600 }}>Live sync</span></div>
            <p>Edits appear as they&apos;re typed.</p>
          </div>

          <div className="tw-app tw-activity">
            <div className="k">RECENT ACTIVITY</div>
            <div className="tw-act-row"><div className="d" />JL edited Client Brief · 2m</div>
            <div className="tw-act-row"><div className="d c" />MK created Meeting Notes · 1h</div>
            <div className="tw-act-row"><div className="d" />JL shared Roadmap · 3h</div>
          </div>

          <div className="tw-app tw-web">
            <div className="k">RUNS IN YOUR BROWSER</div>
            <p>No install. Works on Mac and iPad today.</p>
          </div>

          <div className="tw-leader tw-l1"><div className="tick" /><div className="line" /><div className="lbl">Presence — <b>see who&apos;s editing</b></div></div>
          <div className="tw-leader tw-l2"><div className="tick" /><div className="line" /><div className="lbl">Activity — <b>full history, no surprises</b></div></div>
        </div>
        <div className="tw-board-cap">
          <p>A real working spread — one shared doc, live edits, and a full activity trail.</p>
        </div>
      </section>

      <section className="tw-intro">
        <div className="tw-intro-inner">
          <p>Notion was built for teams of 50. You have five people and <span className="ac">zero patience for complexity.</span></p>
        </div>
      </section>

      <section>
        <div className="tw-gallery-head">
          <p className="micro" style={{ marginBottom: 12 }}>BUILT FOR HOW SMALL TEAMS ACTUALLY WORK</p>
          <h2 className="display">Six reasons the whole team actually uses it.</h2>
        </div>
        <div className="tw-grid">
          {GALLERY.map((g) => (
            <div className="tw-tile" key={g.key}>
              <div className="tw-tile-visual"><GalleryVisual visualKey={g.key} /></div>
              <div className="tw-tile-body"><h3>{g.title}</h3><p>{g.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="tw-filmstrip-wrap">
        <div className="tw-fs-head">
          <p className="micro" style={{ marginBottom: 12 }}>WHAT SMALL TEAMS USE TWO FOR</p>
          <h2 className="display">Four documents, every week.</h2>
        </div>
        <div className="tw-filmstrip">
          {FILMSTRIP.map((f) => (
            <div className="tw-frame" key={f.title}>
              <div className="mini"><div className="l hi" /><div className="l" style={{ width: "80%" }} /><div className="l" style={{ width: "60%" }} /></div>
              <h4>{f.title}</h4>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="tw-price">
        <div className="tw-price-inner">
          <div className="tw-price-left">
            <h3 className="display">One price. However many teammates you invite.</h3>
            <p>No per-seat pricing, no headcount tax as the team grows.</p>
          </div>
          <div className="tw-price-right">
            <div className="tw-price-fact"><div className="num">$0</div><div className="lbl">Free to start</div></div>
            <div className="tw-price-fact"><div className="num">$6/mo</div><div className="lbl">Pro, monthly</div></div>
            <div className="tw-price-fact"><div className="num">1</div><div className="lbl">Flat price, not per seat</div></div>
          </div>
        </div>
      </section>

      <section className="tw-closing">
        <p>Your team shouldn&apos;t need a workspace admin. It should just <span className="ac">open the doc and start writing.</span></p>
      </section>

      <section className="cta-section">
        <h2 className="cta-title display">Get your team on the same page.</h2>
        <p className="cta-sub">Free to start. No credit card. Ready in a minute.</p>
        <a className="btn-dark" href="https://app.two.so/signup">Start for free</a>
      </section>
    </div>
  );
}
