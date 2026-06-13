import { Navigation } from "@/components/navigation"
import { CtaBand } from "@/components/cta-band"

export default function CompareObsidian() {
  return (
    <>
      <Navigation />

      <section className="compare-section">
        <div className="compare-inner">

          <div className="compare-hero-dark">
            <div className="section-eyebrow" style={{ color: '#555552' }}>Comparisons</div>
            <h1 className="compare-h1-dark">TWO vs Obsidian.</h1>
            <p className="compare-sub-dark">Obsidian is a powerful knowledge base for power users. TWO is for people who want to write — not configure a system.</p>
            <div className="compare-tabs">
              <a href="/compare/notion" className="compare-tab">vs Notion</a>
              <a href="/compare/apple-notes" className="compare-tab">vs Apple Notes</a>
              <a href="/compare/bear" className="compare-tab">vs Bear</a>
              <span className="compare-tab compare-tab-active">vs Obsidian</span>
            </div>
          </div>

          <div className="compare-verdict-grid">
            <div className="compare-verdict-card">
              <div className="compare-app-name">TWO</div>
              <div className="compare-app-tagline">Open, write, done. No vaults, no plugins, no graph views. Just a fast, focused writing app that syncs everywhere.</div>
              <div className="compare-pill-row">
                <span className="compare-pill">Zero setup</span>
                <span className="compare-pill">Cloud-native</span>
                <span className="compare-pill">Writing-first</span>
              </div>
            </div>
            <div className="compare-verdict-card">
              <div className="compare-app-name">Obsidian</div>
              <div className="compare-app-tagline">A local-first knowledge base built around linked notes and plugins. Powerful, but demands significant setup and maintenance.</div>
              <div className="compare-pill-row">
                <span className="compare-pill">Local-first</span>
                <span className="compare-pill">Plugin-heavy</span>
                <span className="compare-pill">Complex setup</span>
              </div>
            </div>
          </div>

          <div className="compare-bento">
            <div className="compare-bento-cell">
              <div className="compare-bento-label">Time to first word</div>
              <div className="compare-bento-stat">2s</div>
              <div className="compare-bento-sub">TWO opens and you write. Obsidian requires a vault, plugins, and configuration before you start.</div>
            </div>
            <div className="compare-bento-cell">
              <div className="compare-bento-label">Sync</div>
              <div className="compare-bento-stat">Built-in</div>
              <div className="compare-bento-sub">TWO syncs automatically. Obsidian sync costs extra — or you manage it yourself with iCloud or Git.</div>
            </div>
            <div className="compare-bento-cell compare-bento-dark">
              <div className="compare-bento-label">The honest take</div>
              <p className="compare-bento-body">Obsidian is exceptional for building a personal knowledge base with linked notes and graphs. If you just want to write well and move fast — TWO gets out of your way in a way Obsidian never will.</p>
            </div>
          </div>

          <div className="compare-table-label">Feature comparison</div>
          <div className="compare-table-wrap">
            <table className="compare-table">
              <thead>
                <tr>
                  <th className="compare-th" style={{ width: '44%' }}>Feature</th>
                  <th className="compare-th compare-th-two" style={{ width: '28%' }}>TWO</th>
                  <th className="compare-th" style={{ width: '28%' }}>Obsidian</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="compare-td compare-td-feature">No setup required</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Visual rich text editor</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Built-in sync</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Split view</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Web app</td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                  <td className="compare-td"><span className="compare-cross">—</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Works offline</td>
                  <td className="compare-td"><span className="compare-soon">Soon</span></td>
                  <td className="compare-td"><span className="compare-check">✓</span></td>
                </tr>
                <tr>
                  <td className="compare-td compare-td-feature">Linked notes &amp; graph view</td>
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
