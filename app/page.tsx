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
