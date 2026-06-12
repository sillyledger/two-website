import { Navigation } from "@/components/navigation"
import { CtaBand } from "@/components/cta-band"

export default function Roadmap() {
  return (
    <>
      <Navigation />

      <section className="roadmap-hero">
        <div className="section-eyebrow">Public roadmap</div>
        <h1>What we&apos;re building</h1>
        <p className="hero-sub">A live look at what&apos;s deployed, what&apos;s in progress, and what&apos;s coming next.</p>
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
                <div className="rm-card-title">Split View</div>
                <div className="rm-card-desc">Open two documents side by side in a single window. Drag the divider to resize — research on one side, writing on the other.</div>
                <span className="rm-badge rm-badge-shipped">✓ Done</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Live sync</div>
                <div className="rm-card-desc">Changes appear instantly across all your devices — iPad, Mac, browser. Always in sync, even mid-sentence.</div>
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
                <div className="rm-card-title">Onboarding flow</div>
                <div className="rm-card-desc">A guided first-run experience so new users hit the ground running.</div>
                <span className="rm-badge rm-badge-progress">In progress</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Inline comments</div>
                <div className="rm-card-desc">Highlight any text and leave a comment — Google Docs-style threaded feedback, built right into the doc.</div>
                <span className="rm-badge rm-badge-progress">In progress</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Native Mac app</div>
                <div className="rm-card-desc">A dedicated Mac experience — fast, native, lives in your dock.</div>
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
                <div className="rm-card-title">Password-protected folders</div>
                <div className="rm-card-desc">Lock sensitive folders behind a password for an extra layer of privacy.</div>
                <span className="rm-badge rm-badge-soon">Planned</span>
              </div>
              <div className="rm-card">
                <div className="rm-card-title">Native iPad app</div>
                <div className="rm-card-desc">A dedicated iPad experience built for the way you think and write.</div>
                <span className="rm-badge rm-badge-soon">Planned</span>
              </div>
            </div>

          </div>

          <div className="roadmap-divider"></div>

          <div className="roadmap-previously">
            <div className="roadmap-later-title">Previously deployed</div>
            <div className="roadmap-prev-grid">
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Activity feed</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Real-time collaboration</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Multiple tabs</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Team Workspaces</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Planner</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Internal doc links</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Library</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Auth &amp; accounts</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Rich text editor</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> PWA &amp; home screen</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Collections</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Notes scoped per user</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Autosave &amp; save indicator</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Settings &amp; appearance</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Dark &amp; light mode</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Favorites</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Restore recently deleted files</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Image upload</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Billing &amp; Pro tier</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Export to PDF &amp; Markdown</div>
              <div className="roadmap-prev-item"><span className="roadmap-prev-check">✓</span> Storage tracking</div>
            </div>
          </div>

          <div className="roadmap-divider"></div>

          <div className="roadmap-later-title">On the horizon</div>
          <div className="roadmap-later-grid">
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Offline-first</div>
              <div className="roadmap-later-desc">Full functionality without an internet connection — always.</div>
            </div>
          </div>

          <CtaBand />

        </div>
      </section>

      <footer>
        <div className="footer-left">TWO — A better place to think and write.</div>
        <div className="footer-right">© 2026 TWO. All rights reserved.</div>
      </footer>
    </>
  )
}
