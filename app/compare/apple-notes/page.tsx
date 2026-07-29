const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-ic" style={{ color: "var(--indigo)" }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const DASH = <span className="dash">—</span>;
const SOON = (label: string) => <span className="soon">{label}</span>;

const FEATURES: { label: string; two: React.ReactNode; other: React.ReactNode }[] = [
  { label: "Rich text editor", two: CHECK, other: DASH },
  { label: "Split view", two: CHECK, other: DASH },
  { label: "Web app", two: CHECK, other: DASH },
  { label: "Real-time sync", two: CHECK, other: CHECK },
  { label: "Export to PDF & Markdown", two: CHECK, other: DASH },
  { label: "Works on Windows & Android", two: CHECK, other: DASH },
  { label: "Native Mac app", two: SOON("Soon"), other: CHECK },
  { label: "Free plan", two: CHECK, other: CHECK },
  { label: "Lifetime access — no subscription", two: CHECK, other: DASH },
];

export default function CompareAppleNotesPage() {
  return (
    <div className="features-frame">
      <section className="cmp-hero">
        <p className="micro">Comparisons</p>
        <h1 className="display">TWO vs Apple Notes.</h1>
        <p>Apple Notes is fast and free. But it&apos;s built for quick captures, not serious writing. TWO is.</p>
        <div className="cmp-tabs">
          <a href="/compare/notion">vs Notion</a>
          <span className="active">vs Apple Notes</span>
          <a href="/compare/bear">vs Bear</a>
          <a href="/compare/obsidian">vs Obsidian</a>
        </div>
      </section>

      <div className="cmp-verdict-grid">
        <div className="cmp-verdict-card two">
          <div className="name">TWO</div>
          <p className="tag">A focused writing app with split view, real-time sync, and a rich editor — built for people who write seriously.</p>
          <div className="cmp-pill-row">
            <span className="cmp-pill two">Rich editor</span>
            <span className="cmp-pill two">Split view</span>
            <span className="cmp-pill two">Web &amp; Mac</span>
          </div>
        </div>
        <div className="cmp-verdict-card">
          <div className="name">Apple Notes</div>
          <p className="tag">Great for quick notes and checklists. Limited formatting, no web app, and no way to grow with your writing habit.</p>
          <div className="cmp-pill-row">
            <span className="cmp-pill other">Apple-only</span>
            <span className="cmp-pill other">Basic formatting</span>
            <span className="cmp-pill other">No web app</span>
          </div>
        </div>
      </div>

      <div className="cmp-bento">
        <div className="cmp-bento-cell">
          <div className="lbl">Editor richness</div>
          <div className="num">TWO</div>
          <div className="sub">Headings, callouts, tables, images, export to PDF — Apple Notes has checklists and bold.</div>
        </div>
        <div className="cmp-bento-cell">
          <div className="lbl">Platform lock-in</div>
          <div className="num">None</div>
          <div className="sub">TWO works on any browser. Apple Notes requires an Apple device — no Windows, no Android.</div>
        </div>
        <div className="cmp-bento-cell dark">
          <div className="lbl">The honest take</div>
          <p>Apple Notes is perfect for grocery lists and quick thoughts. If you&apos;re writing docs, briefs, or anything longer than a paragraph — TWO is the better tool.</p>
        </div>
      </div>

      <p className="cmp-table-label">Feature comparison</p>
      <div className="cmp-sheet">
        <div className="cmp-th-row">
          <div><span className="th-label">Feature</span></div>
          <div className="cmp-th-cell two">TWO</div>
          <div className="cmp-th-cell">Apple Notes</div>
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
