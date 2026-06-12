import { Navigation } from "@/components/navigation"
import { CtaBand } from "@/components/cta-band"

export default function ForSolo() {
  return (
    <>
      <Navigation />

      <section className="roadmap-hero">
        <div className="section-eyebrow">For Solo Operators</div>
        <h1>Run your whole operation from one clean workspace.</h1>
        <p className="hero-sub">TWO is built for indie founders, consultants, and freelancers who need to think fast, write well, and stay organised — without the overhead of enterprise tools.</p>
      </section>

      <section className="roadmap-section">
        <div className="roadmap-inner">

          <div className="backstory-cols">
            <div className="backstory-left">
              You&apos;re building something. You don&apos;t have time to manage your tools.
            </div>
            <div className="backstory-right">
              <p>As a solo operator, every hour matters. You need to write proposals, track your thinking, draft strategies, and document your work — all without spinning up a complicated workspace that takes more time to maintain than to use.</p>
              <p>TWO is fast to open, fast to write in, and gets out of your way. Your brain on paper — nothing more, nothing less.</p>
            </div>
          </div>

          <div className="roadmap-divider" style={{marginTop: "64px"}}></div>

          <div className="roadmap-later-title">Built for how solo operators actually work</div>

          <div className="feat-grid" style={{marginBottom: "56px"}}>
            <div className="feat-cell">
              <div className="feat-num">01</div>
              <div className="feat-name">Always with you</div>
              <div className="feat-desc">iPad on the go, Mac at your desk. TWO syncs instantly so your work follows you — not the other way around.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">02</div>
              <div className="feat-name">Fast to open, fast to write</div>
              <div className="feat-desc">No loading screens, no setup, no friction. Open TWO and start writing within seconds — every single time.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">03</div>
              <div className="feat-name">Everything in one place</div>
              <div className="feat-desc">Strategy docs, client notes, personal journal, meeting prep — all in one workspace that doesn&apos;t require a manual to navigate.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">04</div>
              <div className="feat-name">Autosave, always</div>
              <div className="feat-desc">Never lose a thought. TWO saves automatically as you type — so you can focus on the work, not the tool.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">05</div>
              <div className="feat-name">Clean enough to think in</div>
              <div className="feat-desc">No distracting sidebars, no notification noise, no feature creep. Just you and the page.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">06</div>
              <div className="feat-name">Priced for one person</div>
              <div className="feat-desc">No per-seat pricing, no enterprise tiers. TWO is built for individuals who want professional tools at a fair price.</div>
            </div>
          </div>

          <div className="roadmap-divider"></div>

          <div className="roadmap-later-title">What solo operators use TWO for</div>
          <div className="roadmap-later-grid" style={{marginBottom: "56px"}}>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Client proposals</div>
              <div className="roadmap-later-desc">Write and send polished proposals without juggling multiple apps</div>
            </div>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Strategy & thinking</div>
              <div className="roadmap-later-desc">Document your thinking, plans, and decisions in one place</div>
            </div>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Meeting notes</div>
              <div className="roadmap-later-desc">Capture notes on iPad during calls, review on Mac after</div>
            </div>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Personal knowledge base</div>
              <div className="roadmap-later-desc">Build a second brain that actually stays organised</div>
            </div>
          </div>
<CtaBand />

        </div>
      </section>

      <footer>
        <div className="footer-left">TWO — A docs app by Strevius</div>
        <div className="footer-right">© 2026 Strevius. All rights reserved.</div>
      </footer>
    </>
  )
}
