export default function Home() {
  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <img src="/logo.png" alt="TWO" className="nav-logo-img" />
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
          <p className="hero-sub">A fast, beautiful writing app for content creators and small teams. Built for iPad Pro and Mac first — without Notion&apos;s complexity.</p>
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
            "Fast by default",
            "Built for iPad Pro",
            "Rich text editor",
            "Smart collections",
            "Apple-first design",
            "Instant capture",
            "Offline ready",
            "Native Mac app",
            "Fast by default",
            "Built for iPad Pro",
            "Rich text editor",
            "Smart collections",
            "Apple-first design",
            "Instant capture",
            "Offline ready",
            "Native Mac app",
          ].map((item, i) => (
            <span key={i} className="marquee-item">{item}</span>
          ))}
        </div>
      </div>

      {/* MOCKUP */}
      <div className="mockup-section">
        <div className="mockup-label">The app</div>
        <div className="mockup-frame">
          <div className="titlebar">
            <span className="tl tl-r"></span>
            <span className="tl tl-y"></span>
            <span className="tl tl-g"></span>
            <div className="mock-url">app.two.so</div>
          </div>
          <div className="app-layout">
            <div className="sidebar">
              <div className="sb-logo">
                <img src="/logo.png" alt="TWO" className="sb-logo-img" />
              </div>
              <div className="sb-section">
                <div className="sb-label">Workspace</div>
                <div className="sb-item active">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><rect x="1" y="1" width="5" height="5" rx="1.5" fill="currentColor"/><rect x="9" y="1" width="5" height="5" rx="1.5" fill="currentColor" opacity="0.4"/><rect x="1" y="9" width="5" height="5" rx="1.5" fill="currentColor" opacity="0.4"/><rect x="9" y="9" width="5" height="5" rx="1.5" fill="currentColor" opacity="0.4"/></svg>
                  All notes <span className="sb-count">24</span>
                </div>
                <div className="sb-item">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2 4h11M2 7.5h7M2 11h9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  Recent
                </div>
                <div className="sb-item">
                  <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M7.5 2L9 5l3.5.5L10 8l.5 3.5L7.5 10l-3 1.5.5-3.5L2.5 5.5 6 5z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/></svg>
                  Favorites <span className="sb-count">3</span>
                </div>
              </div>
              <div className="sb-section">
                <div className="sb-label">Collections</div>
                <div className="sb-item"><span className="dot dot-blue"></span>Product ideas</div>
                <div className="sb-item"><span className="dot dot-amber"></span>Meeting notes</div>
                <div className="sb-item"><span className="dot dot-green"></span>Personal</div>
                <div className="sb-item"><span className="dot dot-pink"></span>Research</div>
              </div>
            </div>
            <div className="main">
              <div className="topbar">
                <div className="search">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" style={{opacity:0.4}}><circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.4"/><path d="M9.5 9.5l2.5 2.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
                  Search notes...
                </div>
                <button className="new-btn">
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M5.5 1v9M1 5.5h9" stroke="#141412" strokeWidth="1.5" strokeLinecap="round"/></svg>
                  New note
                </button>
              </div>
              <div className="notes-area">
                <div className="s-title">Recent notes</div>
                <div className="grid">
                  <div className="card wide">
                    <span className="tag t-blue">Product</span>
                    <div className="card-title">Q2 roadmap — features to ship before launch</div>
                    <div className="card-preview">Onboarding flow redesign, search with autocomplete, mobile app MVP, invite system for teams...</div>
                    <div className="card-meta"><span>Today, 2:14pm</span><span>⭐</span></div>
                  </div>
                  <div className="card">
                    <span className="tag t-amber">Meeting</span>
                    <div className="card-title">Investor call notes</div>
                    <div className="lines"><div className="line"></div><div className="line"></div><div className="line short"></div></div>
                    <div className="card-meta"><span>Yesterday</span></div>
                  </div>
                  <div className="card">
                    <span className="tag t-green">Personal</span>
                    <div className="card-title">Books to read in 2025</div>
                    <div className="lines"><div className="line"></div><div className="line"></div><div className="line short"></div></div>
                    <div className="card-meta"><span>3 days ago</span></div>
                  </div>
                  <div className="card">
                    <span className="tag t-pink">Research</span>
                    <div className="card-title">Competitor analysis</div>
                    <div className="card-preview">TWO focuses on speed and simplicity over feature bloat...</div>
                    <div className="card-meta"><span>4 days ago</span></div>
                  </div>
                  <div className="card">
                    <span className="tag t-blue">Product</span>
                    <div className="card-title">UX feedback from beta</div>
                    <div className="lines"><div className="line"></div><div className="line"></div><div className="line short"></div></div>
                    <div className="card-meta"><span>1 week ago</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURES — dark section */}
      <section className="dark-section">
        <div className="eyebrow">Why TWO</div>
        <h2 className="section-h">Built for how<br />you actually think.</h2>
        <div className="feat-grid">
          <div className="feat-cell">
            <div className="feat-num">01</div>
            <div className="feat-title">Instant capture</div>
            <div className="feat-desc">Open to a blank note in under a second. Never lose a thought while it&apos;s still fresh.</div>
          </div>
          <div className="feat-cell">
            <div className="feat-num">02</div>
            <div className="feat-title">Smart organization</div>
            <div className="feat-desc">Collections, tags, and search that actually work. Find anything in seconds — not minutes.</div>
          </div>
          <div className="feat-cell">
            <div className="feat-num">03</div>
            <div className="feat-title">Beautiful writing</div>
            <div className="feat-desc">A rich editor that stays out of your way. Format when you need it, not when you don&apos;t.</div>
          </div>
        </div>
      </section>

      {/* FOUNDER + COMPARISON — light section */}
      <section className="light-section">
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
                <div className="comp-name highlight">TWO</div>
                <div className="comp-bar-wrap"><div className="comp-bar highlight" style={{width:'58%'}}></div></div>
                <div className="comp-label highlight">Just right</div>
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
          <img src="/logo.png" alt="TWO" className="footer-logo" />
          TWO — A writing app by Strevius
        </div>
        <div className="fr">© 2025 Strevius. All rights reserved.</div>
      </footer>
    </>
  );
}
