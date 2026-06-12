import { Navigation } from "@/components/navigation"

export default function FeaturesPage() {
  return (
    <>
      <Navigation />

      <section className="features-page-hero">
        <div className="section-eyebrow">Product features</div>
        <h1>Everything you need.<br />Nothing you don&apos;t.</h1>
        <p className="hero-sub">TWO is built around how you actually think and write — focused, fast, and always in sync.</p>
      </section>

      <section className="features-page-section">
        <div className="features-page-inner">

          <div className="fp-bento">

            {/* Row 1: Split View hero (2 cols) + Live Sync tall */}
            <a href="/product/features/split-view" className="fp-card fp-card-hero">
              <div className="fp-badge fp-badge-hot">★ Signature feature</div>
              <div className="fp-eyebrow">Split View</div>
              <div className="fp-title">Two docs. One screen.</div>
              <div className="fp-desc">Open any two documents side by side. Drag to resize. Reference and write at the same time.</div>
              <div className="fp-split-visual">
                <div className="fp-pane">
                  <div className="fp-pane-label">Product Brief — Q3</div>
                  <div className="fp-sl fp-sl-blue" style={{width:"80%"}}></div>
                  <div className="fp-sl" style={{width:"60%"}}></div>
                  <div className="fp-sl" style={{width:"90%"}}></div>
                  <div className="fp-sl" style={{width:"45%"}}></div>
                  <div className="fp-sl" style={{width:"70%"}}></div>
                  <div className="fp-sl" style={{width:"30%"}}></div>
                </div>
                <div className="fp-pane-divider"><div className="fp-pane-handle"></div></div>
                <div className="fp-pane">
                  <div className="fp-pane-label">Weekly Review — June</div>
                  <div className="fp-sl fp-sl-green" style={{width:"70%"}}></div>
                  <div className="fp-sl" style={{width:"85%"}}></div>
                  <div className="fp-sl" style={{width:"50%"}}></div>
                  <div className="fp-sl" style={{width:"75%"}}></div>
                  <div className="fp-sl" style={{width:"40%"}}></div>
                  <div className="fp-sl" style={{width:"60%"}}></div>
                </div>
              </div>
              <div className="fp-cta">Explore Split View →</div>
            </a>

            <a href="/product/features/live-sync" className="fp-card fp-card-tall">
              <div className="fp-eyebrow">Live Sync</div>
              <div className="fp-title">Always in sync.</div>
              <div className="fp-desc">Changes appear instantly on every device — Mac, iPad, browser. No manual saves, no conflicts.</div>
              <div className="fp-devices">
                <div className="fp-device">
                  <div className="fp-device-label">Mac</div>
                  <div className="fp-dl fp-dl-hi" style={{width:"85%"}}></div>
                  <div className="fp-dl" style={{width:"60%"}}></div>
                  <div className="fp-dl" style={{width:"75%"}}></div>
                </div>
                <div className="fp-device">
                  <div className="fp-device-label">iPad</div>
                  <div className="fp-dl fp-dl-hi" style={{width:"85%"}}></div>
                  <div className="fp-dl" style={{width:"60%"}}></div>
                  <div className="fp-dl" style={{width:"75%"}}></div>
                </div>
                <div className="fp-device fp-device-full">
                  <div className="fp-device-label">Browser</div>
                  <div className="fp-dl fp-dl-hi" style={{width:"85%"}}></div>
                  <div className="fp-dl" style={{width:"60%"}}></div>
                </div>
              </div>
              <div className="fp-cta" style={{marginTop:"auto"}}>Explore Live Sync →</div>
            </a>

            {/* Row 2: Tabs + Shared Workspaces (wide) — Live Sync tall fills col 3 */}
            <a href="/product/features/tabs" className="fp-card">
              <div className="fp-eyebrow">Tabs</div>
              <div className="fp-title">Multiple docs, one window.</div>
              <div className="fp-desc">Keep your research, notes, and drafts open at once. Switch without losing your place.</div>
              <div className="fp-tabs-visual">
                <div className="fp-tab-row">
                  <div className="fp-tab fp-tab-active">Weekly Review</div>
                  <div className="fp-tab">OKR Tracker</div>
                  <div className="fp-tab">Brief</div>
                </div>
                <div className="fp-tab-body">
                  <div className="fp-dl fp-dl-hi" style={{width:"80%"}}></div>
                  <div className="fp-dl" style={{width:"55%"}}></div>
                  <div className="fp-dl" style={{width:"70%"}}></div>
                </div>
              </div>
              <div className="fp-cta">Learn more →</div>
            </a>

            <a href="/product/features/shared-workspaces" className="fp-card fp-card-wide">
              <div className="fp-eyebrow">Shared Workspaces</div>
              <div className="fp-title">Your team&apos;s second brain.</div>
              <div className="fp-desc">Invite your team, share docs, and edit together in real time. Everything in one place.</div>
              <div className="fp-ws-visual">
                <div className="fp-ws-row">
                  <div className="fp-avatar" style={{background:"#3C3489",color:"#CECBF6"}}>P</div>
                  <div className="fp-ws-line fp-ws-line-hi" style={{width:"50%"}}></div>
                  <div className="fp-cursor" style={{background:"#7F77DD"}}></div>
                  <div className="fp-ws-line" style={{flex:1}}></div>
                </div>
                <div className="fp-ws-row">
                  <div className="fp-avatar" style={{background:"#085041",color:"#9FE1CB"}}>J</div>
                  <div className="fp-ws-line" style={{width:"25%"}}></div>
                  <div className="fp-ws-line fp-ws-line-hi" style={{width:"38%"}}></div>
                  <div className="fp-cursor" style={{background:"#1D9E75"}}></div>
                  <div className="fp-ws-line" style={{flex:1}}></div>
                </div>
                <div className="fp-ws-row">
                  <div className="fp-avatar" style={{background:"#3C3489",color:"#CECBF6"}}>P</div>
                  <div className="fp-ws-line fp-ws-line-hi" style={{width:"65%"}}></div>
                  <div className="fp-ws-line" style={{flex:1}}></div>
                </div>
              </div>
              <div className="fp-cta">Learn more →</div>
            </a>

            {/* Row 3: Mac App + Editor + Library */}
            <a href="/product/features/mac-app" className="fp-card">
              <div className="fp-badge fp-badge-new">Coming soon</div>
              <div className="fp-eyebrow">Native Mac App</div>
              <div className="fp-title">Lives in your dock.</div>
              <div className="fp-desc">A dedicated Mac experience — fast to open, native feel, always ready.</div>
              <div className="fp-cta">Join waitlist →</div>
            </a>

            <a href="/product/features/editor" className="fp-card">
              <div className="fp-eyebrow">Editor</div>
              <div className="fp-title">Rich text that stays out of your way.</div>
              <div className="fp-desc">Markdown shortcuts, callout blocks, image upload — without the bloat.</div>
              <div className="fp-cta">Learn more →</div>
            </a>

            <a href="/product/features/library" className="fp-card">
              <div className="fp-eyebrow">Library</div>
              <div className="fp-title">Your workspace at a glance.</div>
              <div className="fp-desc">Bento overview of everything you&apos;ve written — folders, recent docs, favorites.</div>
              <div className="fp-cta">Learn more →</div>
            </a>

            {/* Row 4: Templates (wide) + Export */}
            <a href="/resources/templates" className="fp-card fp-card-wide">
              <div className="fp-eyebrow">Templates</div>
              <div className="fp-title">Start fast. Every time.</div>
              <div className="fp-desc">Meeting notes, OKRs, briefs, weekly reviews — one click away and ready to fill in.</div>
              <div className="fp-cta">Browse templates →</div>
            </a>

            <a href="/product/features/export" className="fp-card">
              <div className="fp-eyebrow">Export</div>
              <div className="fp-title">Take your work anywhere.</div>
              <div className="fp-desc">Export to PDF or Markdown in one click. Your words, your format.</div>
              <div className="fp-cta">Learn more →</div>
            </a>

          </div>

        </div>
      </section>

      <footer>
        <div className="footer-left">TWO — A better place to think and write.</div>
        <div className="footer-right">© 2026 TWO. All rights reserved.</div>
      </footer>
    </>
  )
}
