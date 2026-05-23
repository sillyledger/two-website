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
        <div className="hero-split">
          <h1>Write better.<br />Think clearer.<br /><em>Share instantly.</em></h1>
          <div className="hero-right">
            <p className="hero-sub">Beautiful docs for small teams who live on Apple devices. Fast, focused, and nothing you don&apos;t need.</p>
            <div className="hero-actions">
              <a href="#waitlist" className="btn-primary btn-lg">Join the waitlist</a>
              <a href="#" className="btn-ghost btn-lg">See how it works →</a>
            </div>
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
            <div className="feat-cell">
              <div className="feat-num">04</div>
              <div className="feat-title">Interconnected docs</div>
              <div className="feat-desc">Link between docs to build a second brain. Your notes work together, not in isolation.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">05</div>
              <div className="feat-title">Workspaces</div>
              <div className="feat-desc">Separate spaces for separate contexts. Keep personal, shared, and team work exactly where it belongs.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">06</div>
              <div className="feat-title">Built for Apple</div>
              <div className="feat-desc">Designed from the ground up for Mac and iPad. Native feel, no compromises.</div>
            </div>
          </div>
        </div>
      </section>

      {/* BACKSTORY */}
      <section className="light-section">
        <div className="section-inner">
          <div className="eyebrow">The backstory</div>
          <div className="two-col">
            <div>
              <p className="pos-quote">Most writing apps were built for desktops, then reluctantly ported to iPad. TWO wasn&apos;t. It was built by someone who creates content full-time on an iPad Pro and got tired of apps that were either too complex, too basic, or never took the device seriously.</p>
            </div>
            <div className="backstory-right">
              <p className="pos-quote">TWO exists because the right tool didn&apos;t. One that&apos;s fast to open, beautiful to write in, and built for the way modern teams actually work across devices, across time zones, and across shared docs.</p>
              <a href="https://app.two.so" className="btn-primary btn-lg backstory-cta">Try now</a>
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
