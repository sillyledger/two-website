import { Navigation } from "@/components/navigation"
import { CtaBand } from "@/components/cta-band"

export default function CompareAppleNotes() {
  return (
    <>
      <Navigation />

      <section className="compare-section">
        <div className="compare-inner">

          <div className="compare-hero-dark">
            <div className="section-eyebrow" style={{ color: '#555552' }}>Comparisons</div>
            <h1 className="compare-h1-dark">TWO vs Apple Notes.</h1>
            <p className="compare-sub-dark">Apple Notes is fast and free. But it&apos;s built for quick captures, not serious writing. TWO is.</p>
            <div className="compare-tabs">
              <a href="/compare/notion" className="compare-tab">vs Notion</a>
              <span className="compare-tab compare-tab-active">vs Apple Notes</span>
              <a href="/compare/bear" className="compare-tab">vs Bear</a>
              <a href="/compare/obsidian" className="compare-tab">vs Obsidian</a>
            </div>
          </div>

          <div className="compare-verdict-grid">
            <div className="compare-verdict-card">
              <div className="compare-app-name">TWO</div>
              <div className="compare-app-tagline">A focused writing app with split view, real-time sync, and a rich editor — built for people who write seriously.</div>
              <div className="compare-pill-row">
                <span className="compare-pill">Rich editor</span>
                <span className="compare-pill">Split view</span>
                <span className="compare-pill">Web & Mac</span>
              </div>
            </div>
            <div className="compare-verdict-card">
              <div className="compare-app-name">Apple Notes</div>
              <div className="compare-app-tagline">Great for quick notes and checklists. Limited formatting, no web app, and no way to grow with your writing habit.</div>
              <div className="compare-pill-row">
                <span className="compare-pill">Apple-only</span>
                <span className="compare-pill">Basic formatting</span>
                <span className="compare-pill">No web app</span>
              </div>
            </div>
          </div>

          <div className="compare-bento">
            <div className="compare-bento-cell">
              <div className="compare-bento-label">Editor richness</div>
              <div className="compare-bento-stat">TWO</div>
              <div className="compare-bento-sub">Headings, callouts, tables, images, export to PDF — Apple Notes has checklists and bold.</div>
            </div>
            <div className="compare-bento-cell">
              <div className="compare-bento-label">Platform lock-in</div>
              <div className="compare-bento-stat">None</div>
              <div className="compare-bento-sub">TWO works on any browser. Apple Notes requires an Apple device — no Windows, no Android.</div>
            </div>
            <div className="compare-bento-cell compare-bento-dark">
              <div className="compare-bento-label">The honest take</div>
              <p className="compare-bento-body">Apple Notes is perfect for grocery lists and quick thoughts. If you&apos;re writing docs, briefs, or anything longer than a paragraph — TWO is the better tool.</p>
            </div>
          </div>

          <div className="compare-table-label">Feature comparison</div>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-th" style={{ width: '44%' }}>Feature</th>
                  <th className="compare-th compare-th-two" style={{ width: '28%' }}>TWO</th>
                  <th className="compare-th" style={{ width: '28%' }}>Apple Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="compare-td compare-td-feature">Rich text editor</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Split view</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Web app</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Real-time sync</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Export to PDF &amp; Markdown</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Works on Windows &amp; Android</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Native Mac app</td>
                  <td className="compare-td"><span className="compare-soon">Soon</span></td>
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
