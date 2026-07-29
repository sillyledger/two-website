const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-ic" style={{ color: "var(--indigo)" }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const DASH = <span className="dash">—</span>;
const SOON = (label: string) => <span className="soon">{label}</span>;

const FEATURES: { label: string; two: React.ReactNode; other: React.ReactNode }[] = [
  { label: "No setup required", two: CHECK, other: DASH },
  { label: "Visual rich text editor", two: CHECK, other: DASH },
  { label: "Built-in sync", two: CHECK, other: DASH },
  { label: "Split view", two: CHECK, other: CHECK },
  { label: "Web app", two: CHECK, other: DASH },
  { label: "Works offline", two: SOON("Soon"), other: CHECK },
  { label: "Linked notes", two: CHECK, other: CHECK },
  { label: "Graph view", two: DASH, other: CHECK },
  { label: "Free plan", two: CHECK, other: CHECK },
  { label: "Lifetime access — no subscription", two: CHECK, other: DASH },
];

export default function CompareObsidianPage() {
  return (
    <div className="features-frame">
      <section className="cmp-hero">
        <p className="micro">Comparisons</p>
        <h1 className="display">TWO vs Obsidian.</h1>
        <p>Obsidian is a powerful knowledge base for power users. TWO is for people who want to write — not configure a system.</p>
        <div className="cmp-tabs">
          <a href="/compare/notion">vs Notion</a>
          <a href="/compare/apple-notes">vs Apple Notes</a>
          <a href="/compare/bear">vs Bear</a>
          <span className="active">vs Obsidian</span>
        </div>
      </section>

      <div className="cmp-verdict-grid">
        <div className="cmp-verdict-card two">
          <div className="name">TWO</div>
          <p className="tag">Open, write, done. No vaults, no plugins, no graph views. Just a fast, focused writing app that syncs everywhere.</p>
          <div className="cmp-pill-row">
            <span className="cmp-pill two">Zero setup</span>
            <span className="cmp-pill two">Cloud-native</span>
            <span className="cmp-pill two">Writing-first</span>
          </div>
        </div>
        <div className="cmp-verdict-card">
          <div className="name">Obsidian</div>
          <p className="tag">A local-first knowledge base built around linked notes and plugins. Powerful, but demands significant setup and maintenance.</p>
          <div className="cmp-pill-row">
            <span className="cmp-pill other">Local-first</span>
            <span className="cmp-pill other">Plugin-heavy</span>
            <span className="cmp-pill other">Complex setup</span>
          </div>
        </div>
      </div>

      <div className="cmp-bento">
        <div className="cmp-bento-cell">
          <div className="lbl">Time to first word</div>
          <div className="num">2s</div>
          <div className="sub">TWO opens and you write. Obsidian requires a vault, plugins, and configuration before you start.</div>
        </div>
        <div className="cmp-bento-cell">
          <div className="lbl">Sync</div>
          <div className="num">Built-in</div>
          <div className="sub">TWO syncs automatically. Obsidian sync costs extra — or you manage it yourself with iCloud or Git.</div>
        </div>
        <div className="cmp-bento-cell dark">
          <div className="lbl">The honest take</div>
          <p>Obsidian is exceptional for building a personal knowledge base with linked notes and graphs. If you just want to write well and move fast — TWO gets out of your way in a way Obsidian never will.</p>
        </div>
      </div>

      <p className="cmp-table-label">Feature comparison</p>
      <div className="cmp-sheet">
        <div className="cmp-th-row">
          <div><span className="th-label">Feature</span></div>
          <div className="cmp-th-cell two">TWO</div>
          <div className="cmp-th-cell">Obsidian</div>
        </div>
        {FEATURES.map((f) => (
          <div className="cmp-spec-row" key={f.label}>
            <div className="label">{f.label}</div>
            <div className="cmp-spec-cell">{f.two}</div>
            <div className="cmp-spec-cell">{f.other}</div>
          </div>
        ))}
      </div>

      <section className="cta-section">
        <h2 className="cta-title display">See the difference yourself.</h2>
        <p className="cta-sub">Free to start. No credit card. Ready in a minute.</p>
        <a className="btn-dark" href="https://app.two.so/signup">Start for free</a>
      </section>
    </div>
  );
}
