import { Navigation } from "@/components/navigation"
import { CtaBand } from "@/components/cta-band"

export default function CompareNotion() {
  return (
    <>
      <Navigation />

      <section className="compare-section">
        <div className="compare-inner">

          <div className="compare-hero-dark">
            <div className="section-eyebrow" style={{ color: '#555552' }}>Comparisons</div>
            <h1 className="compare-h1-dark">TWO vs Notion.</h1>
            <p className="compare-sub-dark">One is a writing app. The other is a database that also lets you write. They&apos;re not the same thing.</p>
            <div className="compare-tabs">
              <span className="compare-tab compare-tab-active">vs Notion</span>
              <span className="compare-tab">vs Apple Notes</span>
              <span className="compare-tab">vs Bear</span>
              <span className="compare-tab">vs Obsidian</span>
            </div>
          </div>

          <div className="compare-verdict-grid">
            <div className="compare-verdict-card compare-verdict-two">
              <div className="compare-app-name">TWO</div>
              <div className="compare-app-tagline">A writing app that opens fast and gets out of your way. No setup. No blocks. Just write.</div>
              <div className="compare-pill-row">
                <span className="compare-pill compare-pill-dark">Writing-first</span>
                <span className="compare-pill compare-pill-dark">No setup</span>
                <span className="compare-pill compare-pill-dark">Focused</span>
              </div>
            </div>
            <div className="compare-verdict-card">
              <div className="compare-app-name">Notion</div>
              <div className="compare-app-tagline">A database tool that also has a text editor. Powerful, but everything needs configuring before you can write.</div>
              <div className="compare-pill-row">
                <span className="compare-pill compare-pill-neutral">Database-first</span>
                <span className="compare-pill compare-pill-neutral">Heavy setup</span>
                <span className="compare-pill compare-pill-neutral">Complex</span>
              </div>
            </div>
          </div>

          <div className="compare-bento">
            <div className="compare-bento-cell">
              <div className="compare-bento-label">Time to first word in TWO</div>
              <div className="compare-bento-stat">2s</div>
              <div className="compare-bento-sub">Open, start typing. Nothing to configure first.</div>
            </div>
            <div className="compare-bento-cell">
              <div className="compare-bento-label">Notion setup time</div>
              <div className="compare-bento-stat">~20m</div>
              <div className="compare-bento-sub">Workspace, template, database — then you write.</div>
            </div>
            <div className="compare-bento-cell compare-bento-dark">
              <div className="compare-bento-label">The honest take</div>
              <p className="compare-bento-body">Notion is powerful for databases and wikis. If you just want to write, TWO is faster and built for exactly that.</p>
            </div>
          </div>

          <div className="compare-table-label">Feature comparison</div>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-th" style={{ width: '44%' }}>Feature</th>
                  <th className="compare-th compare-th-two" style={{ width: '28%' }}>TWO</th>
                  <th className="compare-th" style={{ width: '28%' }}>Notion</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="compare-td compare-td-feature">Open and write immediately</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">No setup required</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Split view</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Real-time sync</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Native Mac app</td>
                  <td className="compare-td"><span className="compare-soon">Soon</span></td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Works offline</td>
                  <td className="compare-td"><span className="compare-soon">Soon</span></td>
                  <td className="compare-td"><span className="compare-soon">Partial</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Databases &amp; spreadsheets</td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Free plan</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Lifetime deal</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      <CtaBand />

      <footer>
        <div className="footer-left">TWO — A better place to think and write.</div>
        <div className="footer-right">© 2026 TWO. All rights reserved.</div>
      </footer>
    </>
  )
}
