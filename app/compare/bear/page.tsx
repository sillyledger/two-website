import { Navigation } from "@/components/navigation"
import { CtaBand } from "@/components/cta-band"

export default function CompareBear() {
  return (
    <>
      <Navigation />

      <section className="compare-section">
        <div className="compare-inner">

          <div className="compare-hero-dark">
            <div className="section-eyebrow" style={{ color: '#555552' }}>Comparisons</div>
            <h1 className="compare-h1-dark">TWO vs Bear.</h1>
            <p className="compare-sub-dark">Bear is a beautiful Markdown editor for Apple devices. TWO is a rich writing app that works everywhere — and doesn&apos;t require Markdown to get started.</p>
            <div className="compare-tabs">
              <a href="/compare/notion" className="compare-tab">vs Notion</a>
              <a href="/compare/apple-notes" className="compare-tab">vs Apple Notes</a>
              <span className="compare-tab compare-tab-active">vs Bear</span>
              <a href="/compare/obsidian" className="compare-tab">vs Obsidian</a>
            </div>
          </div>

          <div className="compare-verdict-grid">
            <div className="compare-verdict-card">
              <div className="compare-app-name">TWO</div>
              <div className="compare-app-tagline">A rich writing app with a visual editor, split view, and real-time sync. No Markdown knowledge required.</div>
              <div className="compare-pill-row">
                <span className="compare-pill">Visual editor</span>
                <span className="compare-pill">Cross-platform</span>
                <span className="compare-pill">Split view</span>
              </div>
            </div>
            <div className="compare-verdict-card">
              <div className="compare-app-name">Bear</div>
              <div className="compare-app-tagline">A polished Markdown editor exclusive to Apple devices. Great for writers who love plain text — limited for everyone else.</div>
              <div className="compare-pill-row">
                <span className="compare-pill">Apple-only</span>
                <span className="compare-pill">Markdown-based</span>
                <span className="compare-pill">No web app</span>
              </div>
            </div>
          </div>

          <div className="compare-bento">
            <div className="compare-bento-cell">
              <div className="compare-bento-label">Platform support</div>
              <div className="compare-bento-stat">Any</div>
              <div className="compare-bento-sub">TWO runs in any browser. Bear is Mac and iPhone only — no Windows, no Android, no web.</div>
            </div>
            <div className="compare-bento-cell">
              <div className="compare-bento-label">Editor type</div>
              <div className="compare-bento-stat">Visual</div>
              <div className="compare-bento-sub">TWO uses a rich visual editor. Bear requires Markdown syntax — a learning curve for many writers.</div>
            </div>
            <div className="compare-bento-cell compare-bento-dark">
              <div className="compare-bento-label">The honest take</div>
              <p className="compare-bento-body">Bear is genuinely beautiful and a great fit for Markdown lovers on Apple devices. If you want a rich editor that works everywhere and doesn&apos;t require syntax knowledge — TWO is the better choice.</p>
            </div>
          </div>

          <div className="compare-table-label">Feature comparison</div>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-th" style={{ width: '44%' }}>Feature</th>
                  <th className="compare-th compare-th-two" style={{ width: '28%' }}>TWO</th>
                  <th className="compare-th" style={{ width: '28%' }}>Bear</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="compare-td compare-td-feature">Visual rich text editor</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Web app</td>
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
                  <td className="compare-td compare-td-feature">Works on Windows &amp; Android</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Export to PDF &amp; Markdown</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
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
