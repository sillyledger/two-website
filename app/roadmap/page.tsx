import { Navigation } from "@/components/navigation"

export default function Roadmap() {
  return (
    <>
      <Navigation />

      <section className="roadmap-hero">
        <div className="section-eyebrow">Public roadmap</div>
        <h1>What we&apos;re building</h1>
        <p className="hero-sub">A live look at what&apos;s deployed, what&apos;s in progress, and what&apos;s coming next. No fluff — just the work.</p>
      </section>

      <section className="roadmap-section">
        <div className="roadmap-inner">

          <div className="roadmap-cols">

            {/* Deployed */}
            <div className="roadmap-col">
              <div className="roadmap-col-head">
                <div className="rm-dot rm-dot-shipped"></div>
                <span className="roadmap-col-label">Deployed</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Favorites</div>
                <div className="rm-card-desc">Pin your most-used docs to the top for instant access.</div>
                <span className="rm-badge rm-badge-shipped">✓ Done</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Image upload</div>
                <div className="rm-card-desc">Drop images and galleries directly into any doc.</div>
                <span className="rm-badge rm-badge-shipped">✓ Done</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Restore deleted files</div>
                <div className="rm-card-desc">Recover any doc you&apos;ve deleted within the last 30 days.</div>
                <span className="rm-badge rm-badge-shipped">✓ Done</span>
              </div>
            </div>

            {/* In Progress */}
            <div className="roadmap-col">
              <div className="roadmap-col-head">
                <div className="rm-dot rm-dot-progress"></div>
                <span className="roadmap-col-label">In progress</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Templates</div>
                <div className="rm-card-desc">Starter docs for meeting notes, product briefs, and more.</div>
                <span className="rm-badge rm-badge-progress">In progress</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Onboarding flow</div>
                <div className="rm-card-desc">A guided first-run experience so new users hit the ground running.</div>
                <span className="rm-badge rm-badge-progress">In progress</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Public knowledge base</div>
                <div className="rm-card-desc">Publish a workspace as a public-facing site anyone can browse.</div>
                <span className="rm-badge rm-badge-progress">In progress</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Doc sharing</div>
                <div className="rm-card-desc">Share a link to any doc — no account required to view.</div>
                <span className="rm-badge rm-badge-progress">In progress</span>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="roadmap-col">
              <div className="roadmap-col-head">
                <div className="rm-dot rm-dot-soon"></div>
                <span className="roadmap-col-label">Coming soon</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Export to PDF</div>
                <div className="rm-card-desc">Download any doc as a clean, print-ready PDF.</div>
                <span className="rm-badge rm-badge-soon">Up next</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Export to Markdown</div>
                <div className="rm-card-desc">Take your docs anywhere — export as plain Markdown in one click.</div>
                <span className="rm-badge rm-badge-soon">Planned</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Team workspaces</div>
                <div className="rm-card-desc">Invite your team and collaborate in a shared workspace.</div>
                <span className="rm-badge rm-badge-soon">Planned</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Inline comments</div>
                <div className="rm-card-desc">Highlight any text and leave a comment — Google Docs-style.</div>
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
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Activity feed</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Planner</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Internal doc links</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Library</div>
            </div>
          </div>

          <div className="roadmap-divider"></div>

          <div className="roadmap-later-title">On the horizon</div>
          <div className="roadmap-later-grid">
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Offline-first</div>
              <div className="roadmap-later-desc">Full functionality without an internet connection — always.</div>
            </div>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Billing &amp; Pro tier</div>
              <div className="roadmap-later-desc">Stripe-powered Pro plan with advanced features for power users.</div>
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
  )
}
