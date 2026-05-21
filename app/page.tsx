export default function Home() {
  return (
    <>
      <nav>
        <a href="#" className="nav-logo">
          <div className="logo-mark">
            <div className="r1"></div>
            <div className="r2"></div>
          </div>
          <span className="nav-wordmark">TWO</span>
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

      <section className="hero">
        <div className="glow glow-blue"></div>
        <div className="glow glow-amber"></div>
        <div className="hero-badge"><div className="badge-dot"></div>Now in early access</div>
        <h1>Your work,<br /><em>beautifully</em> organized.</h1>
        <p className="hero-sub">A modern note-taking app for capturing ideas, organizing what matters, and finding clarity every day.</p>
        <div className="hero-actions">
          <a href="#waitlist" className="btn-primary btn-lg">Join the waitlist</a>
          <a href="#" className="btn-ghost btn-lg">See how it works</a>
        </div>
        <div className="hero-proof">
          <div className="avatars">
            <span className="av1">A</span><span className="av2">M</span><span className="av3">S</span><span className="av4">J</span>
          </div>
          <span>Join 400+ people already on the list</span>
        </div>
      </section>

      <div className="mockup-wrap">
        <div className="mockup-frame">
          <div className="titlebar">
            <span className="tl tl-r"></span>
            <span className="tl tl-y"></span>
            <span className="tl tl-g"></span>
            <div className="mock-url">⬤ app.two.so</div>
          </div>
          <div className="app-layout">
            <div className="sidebar">
              <div className="sb-logo">
                <div className="logo-mark sm"><div className="r1"></div><div className="r2"></div></div>
                <span>TWO</span>
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
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none"><path d="M5.5 1v9M1 5.5h9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
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
                    <div className="card-title">Competitor analysis notes</div>
                    <div className="card-preview">Key differentiators: TWO focuses on speed and simplicity over feature bloat...</div>
                    <div className="card-meta"><span>4 days ago</span></div>
                  </div>
                  <div className="card">
                    <span className="tag t-blue">Product</span>
                    <div className="card-title">UX feedback from beta users</div>
                    <div className="lines"><div className="line"></div><div className="line"></div><div className="line short"></div></div>
                    <div className="card-meta"><span>1 week ago</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>
      <section className="features">
        <div className="eyebrow">Why TWO</div>
        <h2 className="section-h">Built for how you actually think</h2>
        <div className="feat-grid">
          <div className="feat-cell">
            <div className="feat-icon fi-blue">✦</div>
            <div className="feat-title">Instant capture</div>
            <div className="feat-desc">Open to a blank note in under a second. Never lose a thought while it&apos;s fresh.</div>
          </div>
          <div className="feat-cell">
            <div className="feat-icon fi-amber">◈</div>
            <div className="feat-title">Smart organization</div>
            <div className="feat-desc">Collections, tags, and search that actually work. Find anything in seconds.</div>
          </div>
          <div className="feat-cell">
            <div className="feat-icon fi-green">⬡</div>
            <div className="feat-title">Beautiful writing</div>
            <div className="feat-desc">A rich editor that stays out of your way. Format when you need it, not when you don&apos;t.</div>
          </div>
        </div>
      </section>

      <div className="divider"></div>
      <section className="cta" id="waitlist">
        <div className="cta-glow"></div>
        <h2>Ready to get<br /><em>organized?</em></h2>
        <p>Join the waitlist for early access — free for the first 500.</p>
        <div className="wl-row">
          <input className="wl-input" type="email" placeholder="your@email.com" />
          <button className="wl-btn">Join waitlist</button>
        </div>
        <div className="wl-note">No spam. Early access when we launch.</div>
      </section>

      <footer>
        <div className="fl">
          <div className="logo-mark sm"><div className="r1"></div><div className="r2"></div></div>
          TWO — A note-taking app by Strevius
        </div>
        <div className="fr">© 2025 Strevius. All rights reserved.</div>
      </footer>
    </>
  );
}
