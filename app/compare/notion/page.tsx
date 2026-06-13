import { Navigation } from "@/components/navigation"
import { CtaBand } from "@/components/cta-band"

export default function CompareNotion() {
  return (
    <>
      <Navigation />

      <section className="compare-hero">
        <div className="section-eyebrow">Comparisons</div>
        <h1 className="compare-h1">TWO vs Notion</h1>
        <p className="compare-sub">Notion is a database tool that happens to have a text editor. TWO is a writing app — fast to open, zero setup, nothing to configure.</p>
      </section>

      <section className="compare-section">
        <div className="compare-inner">

          <div className="compare-verdict-grid">
            <div className="compare-verdict-card compare-verdict-two">
              <div className="compare-app-name">TWO</div>
              <div className="compare-app-tagline">A writing app that opens fast and gets out of your way. No setup. No blocks. Just write.</div>
              <div className="compare-pill-row">
                <span className="compare-pill compare-pill-two">Writing-first</span>
                <span className="compare-pill compare-pill-two">No setup</span>
                <span className="compare-pill compare-pill-two">Focused</span>
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

          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-th">Feature</th>
                  <th className="compare-th compare-th-two">TWO</th>
                  <th className="compare-th">Notion</th>
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

          <div className="compare-bento">
            <div className="compare-bento-cell compare-bento-accent">
              <div className="compare-bento-label">Time to first word</div>
              <div className="compare-bento-stat">2s</div>
              <div className="compare-bento-sub">Open TWO, start typing. No template picker, no block chooser.</div>
            </div>
            <div className="compare-bento-cell">
              <div className="compare-bento-label">Notion setup time</div>
              <div className="compare-bento-stat">~20 min</div>
              <div className="compare-bento-sub">Create a workspace, pick a template, configure your database, then write.</div>
            </div>
            <div className="compare-bento-cell compare-bento-wide">
              <div className="compare-honest-take-label">The honest take</div>
              <p className="compare-honest-take-body">Notion is genuinely powerful if you need databases, project tracking, or wikis. If you just want to write — TWO is faster, cleaner, and built specifically for that.</p>
            </div>
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
