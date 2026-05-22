export default function Home() {
  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <img src="/logo-two.svg" alt="TWO" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="#">Product</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <div className="nav-cta">
          <a href="#" className="btn-ghost">Sign in</a>
          <a href="#waitlist" className="btn-primary">Join waitlist</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">
          <div className="badge-dot"></div>
          Private Beta — Coming Soon
        </div>
        <h1>Write without<br />the <em>database.</em></h1>
        <div className="hero-bottom">
          <p className="hero-sub">A beautiful docs app for small teams. Built for iPad Pro and Mac first — without Notion&apos;s complexity.</p>
          <div className="hero-actions">
            <a href="#waitlist" className="btn-primary btn-lg">Join the waitlist</a>
            <a href="#" className="btn-ghost btn-lg">See how it works →</a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-strip">
        <div className="marquee-inner">
          {[
            "Fast by default","Built for iPad Pro","Rich text editor",
            "Smart collections","Apple-first design","Instant capture",
            "Offline ready","Native Mac app",
            "Fast by default","Built for iPad Pro","Rich text editor",
            "Smart collections","Apple-first design","Instant capture",
            "Offline ready","Native Mac app",
          ].map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* iPAD MOCKUP */}
      <div className="mockup-section">
        <div className="mockup-label">The app</div>
        <div className="ipad-wrap">
          <div className="ipad-frame">
            <div className="ipad-camera"></div>
            <div className="ipad-screen">
              <div className="app-shell">
                {/* Sidebar */}
                <div className="app-sidebar">
                  <div className="app-sidebar-header">
                    <div className="app-avatar">P</div>
                    <div className="app-user">Pieter</div>
                  </div>
                  <div className="app-nav-item active">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="0.5" y="0.5" width="5" height="5" rx="1" fill="currentColor"/><rect x="7.5" y="0.5" width="5" height="5" rx="1" fill="currentColor" opacity="0.4"/><rect x="0.5" y="7.5" width="5" height="5" rx="1" fill="currentColor" opacity="0.4"/><rect x="7.5" y="7.5" width="5" height="5" rx="1" fill="currentColor" opacity="0.4"/></svg>
                    Home
                  </div>
                  <div className="app-nav-item">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M1.5 3h10M1.5 6.5h6M1.5 10h8" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
                    Activity
                  </div>
                  <div className="app-nav-item">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><rect x="1" y="1" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.3"/><path d="M4 4h5M4 6.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                    Library
                  </div>
                  <div className="app-nav-section">My Workspace</div>
                  <div className="app-nav-doc">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 1.5h5l2 2V10H2V1.5z" stroke="currentColor" strokeWidth="1.1"/></svg>
                    Q2 Roadmap
                  </div>
                  <div className="app-nav-doc">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 1.5h5l2 2V10H2V1.5z" stroke="currentColor" strokeWidth="1.1"/></svg>
                    Investor Notes
                  </div>
                  <div className="app-nav-doc">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 1.5h5l2 2V10H2V1.5z" stroke="currentColor" strokeWidth="1.1"/></svg>
                    Brand Guidelines
                  </div>
                  <div className="app-nav-doc">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 1.5h5l2 2V10H2V1.5z" stroke="currentColor" strokeWidth="1.1"/></svg>
                    Team Handbook
                  </div>
                  <div className="app-nav-doc">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M2 1.5h5l2 2V10H2V1.5z" stroke="currentColor" strokeWidth="1.1"/></svg>
                    Product Spec v2
                  </div>
                </div>

                {/* Main */}
                <div className="app-main">
                  <div className="app-topbar">
                    <div className="app-title">Recent Docs</div>
                    <div className="app-new-btn">
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M4.5 1v7M1 4.5h7" stroke="#141412" strokeWidth="1.4" strokeLinecap="round"/></svg>
                      New Doc
                    </div>
                  </div>
                  <div className="docs-grid">
                    {[
                      { title: "Q2 Roadmap", preview: "Features to ship before launch — onboarding flow, search, mobile MVP..." },
                      { title: "Investor Call Notes", preview: "Key questions from the call, follow-ups, and next steps..." },
                      { title: "Brand Guidelines", preview: "Logo usage, color palette, typography, tone of voice..." },
                      { title: "Team Handbook", preview: "How we work, async principles, tools, and meeting cadence..." },
                      { title: "Product Spec v2", preview: "Updated spec for the iPad app — navigation, editor, sync..." },
                      { title: "Competitor Analysis", preview: "TWO vs Notion, Bear, Obsidian — positioning and gaps..." },
                    ].map((doc, i) => (
                      <div key={i} className="doc-card">
                        <div className="doc-title">{doc.title}</div>
                        <div className="doc-preview">{doc.preview}</div>
                        <div className="doc-date">May 2026</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="ipad-home-bar"></div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section className="dark-section">
        <div className="section-inner">
          <div className="eyebrow">Why TWO</div>
          <h2 className="section-h">Built for how<br />you actually think.</h2>
          <div className="feat-grid">
            <div className="feat-cell">
              <div className="feat-num">01</div>
              <div className="feat-title">Instant capture</div>
              <div className="feat-desc">Open to a blank doc in under a second. Never lose a thought while it&apos;s still fresh.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">02</div>
              <div className="feat-title">Smart organization</div>
              <div className="feat-desc">Collections, tags, and search that actually work. Find anything in seconds — not minutes.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">03</div>
              <div className="feat-title">Beautiful editing</div>
              <div className="feat-desc">A rich editor that stays out of your way. Format when you need it, not when you don&apos;t.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER + COMPARISON */}
      <section className="light-section">
        <div className="section-inner">
          <div className="two-col">
            <div>
              <div className="eyebrow">The backstory</div>
              <p className="pos-quote">&ldquo;I&apos;m a content creator who does 90% of my writing on an iPad Pro. Every app I tried either died, got bloated, or never took the iPad seriously. So I built the one I always <em>wanted.</em>&rdquo;</p>
              <p className="pos-attr"><strong>Pieter</strong> — Founder, TWO</p>
            </div>
            <div>
              <div className="eyebrow">How we compare</div>
              <div className="comp-rows">
                <div className="comp-row">
                  <div className="comp-name">Notion</div>
                  <div className="comp-bar-wrap"><div className="comp-bar" style={{width:'88%'}}></div></div>
                  <div className="comp-label">Too complex</div>
                </div>
                <div className="comp-row">
                  <div className="comp-name">Obsidian</div>
                  <div className="comp-bar-wrap"><div className="comp-bar" style={{width:'72%'}}></div></div>
                  <div className="comp-label">Too steep</div>
                </div>
                <div className="comp-row">
                  <div className="comp-name">Bear</div>
                  <div className="comp-bar-wrap"><div className="comp-bar" style={{width:'38%'}}></div></div>
                  <div className="comp-label">Notes only</div>
                </div>
                <div className="comp-row">
                  <div className="comp-name hi">TWO</div>
                  <div className="comp-bar-wrap"><div className="comp-bar hi" style={{width:'58%'}}></div></div>
                  <div className="comp-label hi">Just right</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="waitlist">
        <h2>Finally built<br />for <em>iPad.</em></h2>
        <p>Free for the first 500 people. No credit card, no spam.</p>
        <div className="wl-row">
          <input className="wl-input" type="email" placeholder="your@email.com" />
          <button className="wl-btn">Join waitlist</button>
        </div>
        <div className="wl-note">Early access when we launch. Unsubscribe anytime.</div>
      </section>

      <footer>
        <div className="fl">
          <img src="/logo-two.svg" alt="TWO" className="footer-logo" />
          TWO — A docs app by Strevius
        </div>
        <div className="fr">© 2025 Strevius. All rights reserved.</div>
      </footer>
    </>
  );
}
