const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-ic" style={{ color: "var(--indigo)" }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const DASH = <span className="dash">—</span>;
const SOON = (label: string) => <span className="soon">{label}</span>;

const FEATURES: { label: string; two: React.ReactNode; other: React.ReactNode }[] = [
  { label: "Visual rich text editor", two: CHECK, other: DASH },
  { label: "Web app", two: CHECK, other: DASH },
  { label: "Split view", two: CHECK, other: DASH },
  { label: "Real-time sync", two: CHECK, other: CHECK },
  { label: "Works on Windows & Android", two: CHECK, other: DASH },
  { label: "Export to PDF & Markdown", two: CHECK, other: CHECK },
  { label: "Native Mac app", two: SOON("Soon"), other: CHECK },
  { label: "Free plan", two: CHECK, other: CHECK },
  { label: "Lifetime access — no subscription", two: CHECK, other: DASH },
];

export default function CompareBearPage() {
  return (
    <div className="features-frame">
      <section className="cmp-hero">
        <p className="micro">Comparisons</p>
        <h1 className="display">TWO vs Bear.</h1>
        <p>Bear is a beautiful Markdown editor for Apple devices. TWO is a rich writing app that works everywhere — and doesn&apos;t require Markdown to get started.</p>
        <div className="cmp-tabs">
          <a href="/compare/notion">vs Notion</a>
          <a href="/compare/apple-notes">vs Apple Notes</a>
          <span className="active">vs Bear</span>
          <a href="/compare/obsidian">vs Obsidian</a>
        </div>
      </section>

      <div className="cmp-verdict-grid">
        <div className="cmp-verdict-card two">
          <div className="name">TWO</div>
          <p className="tag">A rich writing app with a visual editor, split view, and real-time sync. No Markdown knowledge required.</p>
          <div className="cmp-pill-row">
            <span className="cmp-pill two">Visual editor</span>
            <span className="cmp-pill two">Cross-platform</span>
            <span className="cmp-pill two">Split view</span>
          </div>
        </div>
        <div className="cmp-verdict-card">
          <div className="name">Bear</div>
          <p className="tag">A polished Markdown editor exclusive to Apple devices. Great for writers who love plain text — limited for everyone else.</p>
          <div className="cmp-pill-row">
            <span className="cmp-pill other">Apple-only</span>
            <span className="cmp-pill other">Markdown-based</span>
            <span className="cmp-pill other">No web app</span>
          </div>
        </div>
      </div>

      <div className="cmp-bento">
        <div className="cmp-bento-cell">
          <div className="lbl">Platform support</div>
          <div className="num">Any</div>
          <div className="sub">TWO runs in any browser. Bear is Mac and iPhone only — no Windows, no Android, no web.</div>
        </div>
        <div className="cmp-bento-cell">
          <div className="lbl">Editor type</div>
          <div className="num">Visual</div>
          <div className="sub">TWO uses a rich visual editor. Bear requires Markdown syntax — a learning curve for many writers.</div>
        </div>
        <div className="cmp-bento-cell dark">
          <div className="lbl">The honest take</div>
          <p>Bear is genuinely beautiful and a great fit for Markdown lovers on Apple devices. If you want a rich editor that works everywhere and doesn&apos;t require syntax knowledge — TWO is the better choice.</p>
        </div>
      </div>

      <p className="cmp-table-label">Feature comparison</p>
      <div className="cmp-sheet">
        <div className="cmp-th-row">
          <div><span className="th-label">Feature</span></div>
          <div className="cmp-th-cell two">TWO</div>
          <div className="cmp-th-cell">Bear</div>
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
