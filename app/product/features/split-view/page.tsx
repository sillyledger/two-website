import { Navigation } from "@/components/navigation"

export default function SplitViewPage() {
  return (
    <>
      <Navigation />

      {/* Hero — full dark, app bleeds off bottom */}
      <div className="sv-hero">
        <div className="sv-hero-inner">
          <div className="sv-hero-breadcrumb">
            <a href="/product/features" className="sv-hero-bc-back">Features</a>
            <span className="sv-hero-bc-sep">/</span>
            <span className="sv-hero-bc-cur">Split View</span>
          </div>
          <h1 className="sv-hero-title">Two docs.<br />One screen.</h1>
          <div className="sv-hero-cols">
            <p className="sv-hero-col">Research on the left, writing on the right. Drag the divider and reshape your workspace however you think.</p>
            <p className="sv-hero-col">Open any two docs from your library. Your layout saves automatically. No setup, no reconfiguring. Just open TWO and pick up exactly where you left off.</p>
          </div>
        </div>

        {/* Full-width app frame bleeds off bottom */}
        <div className="sv-app-bleed">
          <div className="sv-frame-bar">
            <div className="sv-dots">
              <div className="sv-dot sv-dot-r"></div>
              <div className="sv-dot sv-dot-y"></div>
              <div className="sv-dot sv-dot-g"></div>
            </div>
            <div className="sv-frame-url">app.two.so</div>
            <div className="sv-frame-badge">&#9632; Split active</div>
          </div>
          <div className="sv-app-inner">
            <div className="sv-app-sidebar">
              <div className="sv-sb-logo">T</div>
              <div className="sv-sb-icon sv-sb-icon-on">⌂</div>
              <div className="sv-sb-icon">◎</div>
              <div className="sv-sb-icon">⟳</div>
              <div className="sv-sb-icon">◫</div>
            </div>
            <div className="sv-panes">
              <div className="sv-pane">
                <div className="sv-pane-colorbar" style={{background:"rgba(80,140,255,0.6)"}}></div>
                <div className="sv-pane-label">Product Brief — Q3</div>
                <div className="sv-sl sv-sl-b" style={{width:"74%"}}></div>
                <div className="sv-sl" style={{width:"52%"}}></div>
                <div className="sv-sl sv-sl-hi" style={{width:"88%"}}></div>
                <div className="sv-sl" style={{width:"40%"}}></div>
                <div className="sv-sl sv-sl-hi" style={{width:"66%"}}></div>
                <div className="sv-sl" style={{width:"32%"}}></div>
                <div className="sv-sl" style={{width:"79%"}}></div>
                <div className="sv-sl sv-sl-hi" style={{width:"50%"}}></div>
                <div className="sv-sl" style={{width:"61%"}}></div>
                <div className="sv-sl" style={{width:"43%"}}></div>
                <div className="sv-sl sv-sl-hi" style={{width:"71%"}}></div>
                <div className="sv-sl" style={{width:"37%"}}></div>
                <div className="sv-sl" style={{width:"84%"}}></div>
                <div className="sv-sl sv-sl-hi" style={{width:"56%"}}></div>
              </div>
              <div className="sv-pane-divider-bar">
                <div className="sv-pane-handle"></div>
              </div>
              <div className="sv-pane">
                <div className="sv-pane-colorbar" style={{background:"rgba(60,200,120,0.6)"}}></div>
                <div className="sv-pane-label">Weekly Review — June</div>
                <div className="sv-sl sv-sl-g" style={{width:"67%"}}></div>
                <div className="sv-sl sv-sl-hi" style={{width:"82%"}}></div>
                <div className="sv-sl" style={{width:"46%"}}></div>
                <div className="sv-sl" style={{width:"73%"}}></div>
                <div className="sv-sl sv-sl-hi" style={{width:"55%"}}></div>
                <div className="sv-sl" style={{width:"38%"}}></div>
                <div className="sv-sl sv-sl-hi" style={{width:"85%"}}></div>
                <div className="sv-sl" style={{width:"49%"}}></div>
                <div className="sv-sl" style={{width:"64%"}}></div>
                <div className="sv-sl sv-sl-hi" style={{width:"42%"}}></div>
                <div className="sv-sl" style={{width:"76%"}}></div>
                <div className="sv-sl" style={{width:"34%"}}></div>
                <div className="sv-sl sv-sl-hi" style={{width:"58%"}}></div>
                <div className="sv-sl" style={{width:"70%"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="sv-body">

        {/* Intro — 2 col editorial */}
        <div className="sv-intro">
          <div className="sv-intro-left">
            The best writing happens when your sources and your draft live side by side.
          </div>
          <div className="sv-intro-right">
            <p>Most tools make you choose: either you&apos;re reading, or you&apos;re writing. TWO lets you do both at once — two documents, one window, zero context switching.</p>
            <p>Drag the divider to give more space to whatever needs it. Pick any two docs from your library. Your layout persists when you close and reopen.</p>
          </div>
        </div>

        <div className="sv-body-divider"></div>

        {/* 3 benefit blocks */}
        <div className="sv-blocks">
          <div className="sv-block">
            <div className="sv-block-num">01</div>
            <div className="sv-block-title">Drag to resize anytime</div>
            <p className="sv-block-desc">Give more room to whichever side needs it. The divider moves freely — your layout, your call.</p>
          </div>
          <div className="sv-block">
            <div className="sv-block-num">02</div>
            <div className="sv-block-title">Any two docs from your library</div>
            <p className="sv-block-desc">Pick from anything you&apos;ve written. Swap either pane independently without losing your place.</p>
          </div>
          <div className="sv-block">
            <div className="sv-block-num">03</div>
            <div className="sv-block-title">Layout remembered</div>
            <p className="sv-block-desc">Close TWO and reopen it. Your split is exactly where you left it — divider position and all.</p>
          </div>
        </div>

      </div>

      {/* Use cases — dark strip */}
      <div className="sv-dark">
        <div className="sv-dark-inner">
          <div className="sv-dark-label">Made for your workflow</div>
          <div className="sv-dark-title">How writers and founders use it.</div>
          <div className="sv-uses">
            <div className="sv-use">
              <div className="sv-use-arrow">→</div>
              <div>
                <div className="sv-use-title">Research + draft</div>
                <p className="sv-use-desc">Notes on one side, article on the other. Stop losing your thread mid-sentence.</p>
              </div>
            </div>
            <div className="sv-use">
              <div className="sv-use-arrow">→</div>
              <div>
                <div className="sv-use-title">Strategy + brief</div>
                <p className="sv-use-desc">Reference your OKRs while writing the product brief. Stay aligned without tab-switching.</p>
              </div>
            </div>
            <div className="sv-use">
              <div className="sv-use-arrow">→</div>
              <div>
                <div className="sv-use-title">Last week + this week</div>
                <p className="sv-use-desc">Open your past review beside today&apos;s planner. See patterns, set sharper intentions.</p>
              </div>
            </div>
            <div className="sv-use">
              <div className="sv-use-arrow">→</div>
              <div>
                <div className="sv-use-title">Template + your version</div>
                <p className="sv-use-desc">Template on one side, your draft on the other. Structured and freeform at once.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="sv-cta-section">
        <div className="sv-cta-box">
          <div className="sv-cta-title">Ready to think in two windows?</div>
          <p className="sv-cta-sub">Split View is free on every plan. Open TWO and hit the split icon to try it now.</p>
          <a href="https://app.two.so/signup" className="sv-btn-dark">Start writing for free</a>
        </div>
      </div>

      {/* Prev / Next nav */}
      <div className="sv-feature-nav">
        <a href="/product/features" className="sv-fn-back">← All features</a>
        <a href="/product/features/live-sync" className="sv-fn-next">Next: Live Sync →</a>
      </div>

      <footer>
        <div className="footer-left">TWO — A better place to think and write.</div>
        <div className="footer-right">© 2026 TWO. All rights reserved.</div>
      </footer>
    </>
  )
}
