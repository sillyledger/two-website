export default function Roadmap() {
  return (
    <>
      <nav>
        <a href="/" className="nav-logo">
          <img src="/logo-two.svg" alt="TWO" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li><a href="/#features">Product</a></li>
          <li><a href="/#pricing">Pricing</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="/roadmap" style={{color:'#1a1a1a', fontWeight:600}}>Roadmap</a></li>
        </ul>
        <div className="nav-cta">
          <a href="https://app.two.so/login" className="btn-login">Log in</a>
          <a href="https://app.two.so/signup" className="btn-signup">Sign up</a>
        </div>
      </nav>

      <section className="roadmap-hero">
        <div className="section-eyebrow">Public roadmap</div>
        <h1>What we&apos;re building</h1>
        <p className="hero-sub">A live look at what&apos;s deployed, what&apos;s in progress, and what&apos;s coming next. No fluff — just the work.</p>
      </section>

      <section className="roadmap-section">
        <div className="roadmap-inner">

          <div className="roadmap-cols">

            <div className="roadmap-col">
              <div className="roadmap-col-head">
                <div className="rm-dot rm-dot-shipped"></div>
                <span className="roadmap-col-label">Deployed</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Planner</div>
                <div className="rm-card-desc">Tasks linked to docs, grouped by date</div>
                <span className="rm-badge rm-badge-shipped">✓ Done</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Internal doc links</div>
                <div className="rm-card-desc">Link directly to other docs in your workspace</div>
                <span className="rm-badge rm-badge-shipped">✓ Done</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Library</div>
                <div className="rm-card-desc">Bento overview of your workspace at a glance</div>
                <span className="rm-badge rm-badge-shipped">✓ Done</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Activity feed</div>
                <div className="rm-card-desc">Full history of edits and creates</div>
                <span className="rm-badge rm-badge-shipped">✓ Done</span>
              </div>
            </div>

            <div className="roadmap-col">
              <div className="roadmap-col-head">
                <div className="rm-dot rm-dot-progress"></div>
                <span className="roadmap-col-label">In progress</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Image upload</div>
                <div className="rm-card-desc">Insert images and galleries into docs</div>
                <span className="rm-badge rm-badge-progress">In progress</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Templates</div>
                <div className="rm-card-desc">Meeting notes, product briefs, and more</div>
                <span className="rm-badge rm-badge-progress">In progress</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Onboarding flow</div>
                <div className="rm-card-desc">First-run experience for new users</div>
                <span className="rm-badge rm-badge-progress">In progress</span>
              </div>
            </div>

            <div className="roadmap-col">
              <div className="roadmap-col-head">
                <div className="rm-dot rm-dot-soon"></div>
                <span className="roadmap-col-label">Coming soon</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Favorites</div>
                <div className="rm-card-desc">Pin important docs to the top</div>
                <span className="rm-badge rm-badge-soon">Up next</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Restore recently deleted files</div>
                <div className="rm-card-desc">Recover docs you&apos;ve deleted within the last 30 days</div>
                <span className="rm-badge rm-badge-soon">Up next</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Inline comments</div>
                <div className="rm-card-desc">Google Docs-style text comments</div>
                <span className="rm-badge rm-badge-soon">Planned</span>
              </div>
            </div>

          </div>

          <div className="roadmap-divider"></div>

          <div className="roadmap-previously">
            <div className="roadmap-later-title">Previously deployed</div>
            <div className="roadmap-prev-grid">
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Auth &amp; accounts</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Rich text editor</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> PWA &amp; home screen</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Collections</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Notes scoped per user</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Autosave &amp; save indicator</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Settings &amp; appearance</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Dark &amp; light mode</div>
            </div>
          </div>

          <div className="roadmap-divider"></div>

          <div className="roadmap-later-title">On the horizon</div>
          <div className="roadmap-later-grid">
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Offline-first</div>
              <div className="roadmap-later-desc">Works without internet, always</div>
            </div>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Doc sharing</div>
              <div className="roadmap-later-desc">Share a link to any doc</div>
            </div>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Team workspaces</div>
              <div className="roadmap-later-desc">Collaborate with your team</div>
            </div>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Billing &amp; Pro tier</div>
              <div className="roadmap-later-desc">Stripe integration for Pro plan</div>
            </div>
          </div>

          <div className="roadmap-cta">
            <p>Have a feature request? We&apos;d love to hear it.</p>
            <a href="mailto:two@strevius.com" className="btn-hero">Suggest a feature →</a>
          </div>

        </div>
      </section>

      <footer>
        <div className="footer-left">TWO — A docs app by Strevius</div>
        <div className="footer-right">© 2026 Strevius. All rights reserved.</div>
      </footer>
    </>
  );
}
