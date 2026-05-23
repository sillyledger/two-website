export default function Home() {
  return (
    <>
      <nav>
        <a href="/" className="nav-logo">
          <img src="/logo-two.svg" alt="TWO" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#features">Product</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <div className="nav-cta">
          <a href="https://app.two.so/login" className="btn-login">Log in</a>
          <a href="https://app.two.so/signup" className="btn-signup">Sign up</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-eyebrow">
          <div className="hero-dot"></div>
          Now in open beta
        </div>
        <h1>Write better.<br />Think clearer.</h1>
        <p className="hero-sub">
          Beautiful docs for individuals and small teams who live on Apple devices.
          Fast, focused, and nothing you don&apos;t need.
        </p>
        <div className="hero-actions">
          <a href="https://app.two.so/signup" className="btn-hero">Start for free →</a>
          <a href="#features" className="btn-hero-ghost">See how it works</a>
        </div>
      </section>

      <div className="screen-wrap">
        <div className="browser-frame">
          <div className="browser-bar">
            <div className="browser-dots">
              <div className="bd bd-r"></div>
              <div className="bd bd-y"></div>
              <div className="bd bd-g"></div>
            </div>
            <div className="browser-url">app.two.so</div>
          </div>
          <div className="app-layout">
            <div className="app-sidebar">
              <div className="sb-logo-icon">T</div>
              <div className="sb-nav-icon active">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              </div>
              <div className="sb-nav-icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              </div>
              <div className="sb-nav-icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="5" width="6" height="6" rx="1"/><path d="M3 17h18M3 12h18"/></svg>
              </div>
              <div className="sb-nav-icon">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
            </div>
            <div className="app-main">
              <div className="app-main-header">
                <div className="app-main-title">Recent Docs</div>
                <div className="app-new-btn">
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  New Doc
                </div>
              </div>
              <div className="app-pills">
                <div className="app-pill active">Recent</div>
                <div className="app-pill">Favorites</div>
                <div className="app-pill">Deleted</div>
              </div>
              <div className="doc-grid">
                <div className="doc-card">
                  <div className="doc-card-bar" style={{background:'#e8c06e'}}></div>
                  <div className="doc-card-title">Q3 Investor Update</div>
                  <div className="doc-card-preview">Quarterly update covering revenue, growth metrics and product milestones.</div>
                  <div className="doc-card-date">May 23</div>
                </div>
                <div className="doc-card">
                  <div className="doc-card-bar" style={{background:'#4a8fd4'}}></div>
                  <div className="doc-card-title">2026 GTM Strategy</div>
                  <div className="doc-card-preview">Go-to-market plan for the new year. Channels, ICP, and launch sequencing.</div>
                  <div className="doc-card-date">May 23</div>
                </div>
                <div className="doc-card">
                  <div className="doc-card-bar" style={{background:'#4aad6e'}}></div>
                  <div className="doc-card-title">Workspace Doc V1</div>
                  <div className="doc-card-preview">Initial workspace setup and team conventions for the new product sprint.</div>
                  <div className="doc-card-date">May 23</div>
                </div>
                <div className="doc-card">
                  <div className="doc-card-bar" style={{background:'#c96b8c'}}></div>
                  <div className="doc-card-title">Series A Deck — Draft 3</div>
                  <div className="doc-card-preview">Latest pitch deck revision with updated traction slides and market sizing.</div>
                  <div className="doc-card-date">May 22</div>
                </div>
                <div className="doc-card">
                  <div className="doc-card-bar" style={{background:'#7a6fd4'}}></div>
                  <div className="doc-card-title">Competitive Analysis</div>
                  <div className="doc-card-preview">Deep dive into Notion, Apple Notes, and Bear. Where TWO wins.</div>
                  <div className="doc-card-date">May 22</div>
                </div>
                <div className="doc-card">
                  <div className="doc-card-bar" style={{background:'#d4943a'}}></div>
                  <div className="doc-card-title">Product Roadmap 2026</div>
                  <div className="doc-card-preview">Feature priorities, team assignments, and shipping milestones.</div>
                  <div className="doc-card-date">May 21</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="features-section" id="features">
        <div className="features-inner">
          <div className="section-eyebrow">Why TWO</div>
          <h2>Built for how writers, founders, and small teams actually work in docs.</h2>
          <div className="feat-grid">
            <div className="feat-cell">
              <div className="feat-num">01</div>
              <div className="feat-name">Open in a second</div>
              <div className="feat-desc">Blank doc, ready to write. Never lose a thought while it&apos;s still sharp.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">02</div>
              <div className="feat-name">Everything in one place</div>
              <div className="feat-desc">Docs, tasks, and activity — organized without the setup tax.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">03</div>
              <div className="feat-name">Beautiful on any device</div>
              <div className="feat-desc">Designed for iPad, Mac, and web. No compromises on any screen.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">04</div>
              <div className="feat-name">Rich editor, zero clutter</div>
              <div className="feat-desc">Format when you need it. Stays out of your way when you don&apos;t.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">05</div>
              <div className="feat-name">Tasks tied to docs</div>
              <div className="feat-desc">Every task lives next to the doc it belongs to. Nothing gets lost.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">06</div>
              <div className="feat-name">Not Notion</div>
              <div className="feat-desc">No databases. No blocks. No setup. Just write and get things done.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="backstory-section">
        <div className="backstory-inner">
          <div className="section-eyebrow">The backstory</div>
          <div className="backstory-cols">
            <div className="backstory-left">
              Most writing apps were built for desktops, then reluctantly ported to iPad. TWO wasn&apos;t.
            </div>
            <div className="backstory-right">
              <p>It was built by someone who creates content full-time on an iPad Pro and got tired of apps that were either too complex, too basic, or never took the device seriously.</p>
              <p>TWO exists because the right tool didn&apos;t. One that&apos;s fast to open, beautiful to write in, and built for the way modern teams actually work — across devices, across time zones, and across shared docs.</p>
              <a href="https://app.two.so/signup" className="backstory-cta">Try it now →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="pricing-inner">
          <div className="section-eyebrow" style={{textAlign:'center', color:'#555552'}}>Pricing</div>
          <h2>Simple, honest pricing.</h2>
          <p className="pricing-sub">Start free. Upgrade your team for less than a coffee.</p>
          <div className="plan-grid">
            <div className="plan-card">
              <div className="plan-name">Free</div>
              <div className="plan-price">$0<span className="plan-price-sub"> / month</span></div>
              <div className="plan-desc">Everything you need to get started. No credit card, no catch.</div>
              <div className="plan-divider"></div>
              <div className="plan-feature"><span className="plan-check">✓</span> Up to 50 docs</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Rich text editor</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Planner &amp; activity</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Collections</div>
              <div className="plan-feature"><span className="plan-check">✓</span> 1 workspace</div>
              <a href="https://app.two.so/signup" className="plan-btn plan-btn-ghost">Get started</a>
            </div>
            <div className="plan-card featured">
              <div className="plan-badge">Pro &amp; Teams</div>
              <div className="plan-name">Pro</div>
              <div className="plan-price">$6<span className="plan-price-sub"> / mo per user</span></div>
              <div className="plan-desc">Unlimited everything. Built for teams who move fast.</div>
              <div className="plan-divider"></div>
              <div className="plan-feature"><span className="plan-check">✓</span> Unlimited docs</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Team workspaces</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Shared collections</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Doc sharing</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Priority support</div>
              <a href="#" className="plan-btn plan-btn-accent">Available Soon →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <h2>Start writing.<br />Everything else follows.</h2>
          <p className="cta-sub">Free forever. No credit card. No Notion migration required.</p>
          <a href="https://app.two.so/signup" className="btn-hero">Get started free →</a>
        </div>
      </section>

      <footer>
        <div className="footer-left">TWO — A docs app by Strevius</div>
        <div className="footer-right">© 2026 Strevius. All rights reserved.</div>
      </footer>
    </>
  );
}
