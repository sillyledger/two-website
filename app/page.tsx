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
        <h1>Docs that feel<br />like <em>thinking.</em></h1>
        <div className="hero-bottom">
          <p className="hero-sub">Beautiful docs for small teams who live on Apple devices. Fast, focused, and nothing you don&apos;t need.</p>
          <div className="hero-actions">
            <a href="#waitlist" className="btn-primary btn-lg">Join the waitlist</a>
            <a href="#" className="btn-ghost btn-lg">See how it works →</a>
          </div>
        </div>
      </section>

    {/* MOCKUP */}
      <div className="mockup-section">
        <div className="mockup-label">The app</div>
        <div className="app-window">
          <div className="aw-titlebar">
            <span className="tl tl-r"></span>
            <span className="tl tl-y"></span>
            <span className="tl tl-g"></span>
            <div className="aw-url">app.two.so</div>
          </div>
          <div className="aw-body">
            {/* Icon sidebar */}
            <div className="aw-sidebar">
              <div className="aw-sb-icon aw-sb-avatar">C</div>
              <div style={{flex:1}}></div>
              <div className="aw-sb-icon active">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1" y="1" width="5.5" height="5.5" rx="1.2" fill="currentColor"/><rect x="9.5" y="1" width="5.5" height="5.5" rx="1.2" fill="currentColor" opacity="0.4"/><rect x="1" y="9.5" width="5.5" height="5.5" rx="1.2" fill="currentColor" opacity="0.4"/><rect x="9.5" y="9.5" width="5.5" height="5.5" rx="1.2" fill="currentColor" opacity="0.4"/></svg>
              </div>
              <div className="aw-sb-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4.5h12M2 8h8M2 11.5h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>
              </div>
              <div className="aw-sb-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 2h7l3 3v9H3V2z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/><path d="M10 2v3h3" stroke="currentColor" strokeWidth="1.3"/></svg>
              </div>
              <div className="aw-sb-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 5h12M2 8h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><rect x="2" y="11" width="5" height="3" rx="1" fill="currentColor" opacity="0.4"/></svg>
              </div>
              <div style={{flex:1}}></div>
              <div className="aw-sb-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.3"/><path d="M8 5.5v3l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
              </div>
              <div className="aw-sb-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="2.5" stroke="currentColor" strokeWidth="1.3"/><path d="M2.5 13.5c0-3 2.5-5 5.5-5s5.5 2 5.5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/></svg>
              </div>
            </div>
            {/* Main content */}
            <div className="aw-main">
              <div className="aw-topbar">
                <div className="aw-page-title">Recent Docs</div>
                <button className="aw-new-btn">+ New Doc</button>
              </div>
              <div className="aw-docs-grid">
                {[
                  { title: "Q2 Roadmap", preview: "Features to ship before launch — onboarding flow, search with autocomplete, mobile MVP..." },
                  { title: "Investor Call Notes", preview: "Key questions from the call, follow-ups, and next steps for the round..." },
                  { title: "Brand Guidelines", preview: "Logo usage, color palette, typography, and tone of voice for TWO..." },
                  { title: "Team Handbook", preview: "How we work, async principles, tools, and meeting cadence for the team..." },
                  { title: "Product Spec v2", preview: "Updated spec for the iPad app — navigation patterns, editor, sync architecture..." },
                  { title: "Competitor Analysis", preview: "Market positioning, feature gaps, and opportunities for TWO to stand out..." },
                  { title: "Launch Checklist", preview: "Everything we need before going public — marketing, onboarding, press kit..." },
                  { title: "Design System", preview: "Components, spacing tokens, color variables, and usage guidelines..." },
                  { title: "Cara's Meeting Notes", preview: "Weekly sync notes, action items, and decisions made across the team..." },
                ].map((doc, i) => (
                  <div key={i} className="aw-doc-card">
                    <div className="aw-doc-title">{doc.title}</div>
                    <div className="aw-doc-preview">{doc.preview}</div>
                    <div className="aw-doc-date">May 2026</div>
                  </div>
                ))}
              </div>
            </div>
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
