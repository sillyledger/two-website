import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TWO vs Notion: Faster, Distraction-Free Docs Editor",
};

const CHECK = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="check-ic" style={{ color: "var(--indigo)" }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const DASH = <span className="dash">—</span>;
const SOON = (label: string) => <span className="soon">{label}</span>;

const FEATURES: { label: string; two: React.ReactNode; other: React.ReactNode }[] = [
  { label: "Open and write immediately", two: CHECK, other: DASH },
  { label: "No setup required", two: CHECK, other: DASH },
  { label: "Split view", two: CHECK, other: DASH },
  { label: "Real-time sync", two: CHECK, other: CHECK },
  { label: "Native Mac app", two: SOON("Soon"), other: CHECK },
  { label: "Native iPad app", two: SOON("Soon"), other: CHECK },
  { label: "Works offline", two: SOON("Soon"), other: SOON("Partial") },
  { label: "Export to PDF & Markdown", two: CHECK, other: CHECK },
  { label: "Databases & spreadsheets", two: DASH, other: CHECK },
  { label: "Free plan", two: CHECK, other: CHECK },
];

export default function CompareNotionPage() {
  return (
    <div className="features-frame">
      <section className="cmp-hero">
        <p className="micro">Comparisons</p>
        <h1 className="display">TWO vs Notion.</h1>
        <p>One is a writing app. The other is a database that also lets you write. They&apos;re not the same thing.</p>
        <div className="cmp-tabs">
          <span className="active">vs Notion</span>
          <a href="/compare/apple-notes">vs Apple Notes</a>
          <a href="/compare/bear">vs Bear</a>
          <a href="/compare/obsidian">vs Obsidian</a>
        </div>
      </section>

      <div className="cmp-verdict-grid">
        <div className="cmp-verdict-card two">
          <div className="name">TWO</div>
          <p className="tag">A writing app that opens fast and gets out of your way. No setup. No blocks. Just write.</p>
          <div className="cmp-pill-row">
            <span className="cmp-pill two">Writing-first</span>
            <span className="cmp-pill two">No setup</span>
            <span className="cmp-pill two">Focused</span>
          </div>
        </div>
        <div className="cmp-verdict-card">
          <div className="name">Notion</div>
          <p className="tag">A database tool that also has a text editor. Powerful, but everything needs configuring before you can write.</p>
          <div className="cmp-pill-row">
            <span className="cmp-pill other">Database-first</span>
            <span className="cmp-pill other">Heavy setup</span>
            <span className="cmp-pill other">Complex</span>
          </div>
        </div>
      </div>

      <div className="cmp-bento">
        <div className="cmp-bento-cell">
          <div className="lbl">Time to first word in TWO</div>
          <div className="num">2s</div>
          <div className="sub">Open, start typing. Nothing to configure first.</div>
        </div>
        <div className="cmp-bento-cell">
          <div className="lbl">Notion setup time</div>
          <div className="num">~20m</div>
          <div className="sub">Workspace, template, database — then you write.</div>
        </div>
        <div className="cmp-bento-cell dark">
          <div className="lbl">The honest take</div>
          <p>Notion is powerful for databases and wikis. If you just want to write, TWO is faster and built for exactly that.</p>
        </div>
      </div>

      <p className="cmp-table-label">Feature comparison</p>
      <div className="cmp-sheet">
        <div className="cmp-th-row">
          <div><span className="th-label">Feature</span></div>
          <div className="cmp-th-cell two">TWO</div>
          <div className="cmp-th-cell">Notion</div>
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
