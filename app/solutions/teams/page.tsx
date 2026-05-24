import { Navigation } from "@/components/navigation"

export default function ForTeams() {
  return (
    <>
      <Navigation />

      <section className="roadmap-hero">
        <div className="section-eyebrow">For Small Teams</div>
        <h1>A shared workspace your whole team will actually use.</h1>
        <p className="hero-sub">TWO is built for small teams who want to collaborate on docs without the complexity of enterprise tools — clean, fast, and built for Apple.</p>
      </section>

      <section className="roadmap-section">
        <div className="roadmap-inner">

          <div className="backstory-cols">
            <div className="backstory-left">
              Notion was built for teams of 50. You have five people and zero patience for complexity.
            </div>
            <div className="backstory-right">
              <p>Small teams move fast. You need everyone on the same page — literally. Writing docs, sharing briefs, keeping decisions documented — without spending half your week maintaining a workspace that was built for a company ten times your size.</p>
              <p>TWO is simple enough that everyone actually uses it. Beautiful enough that you&apos;re proud to share it with clients.</p>
            </div>
          </div>

          <div className="roadmap-divider" style={{marginTop: "64px"}}></div>

          <div className="roadmap-later-title">Built for how small teams actually work</div>

          <div className="feat-grid" style={{marginBottom: "56px"}}>
            <div className="feat-cell">
              <div className="feat-num">01</div>
              <div className="feat-name">Shared workspaces</div>
              <div className="feat-desc">Everyone on the team works from the same place. No more hunting through email threads or Slack for the latest version of a doc.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">02</div>
              <div className="feat-name">Simple enough for everyone</div>
              <div className="feat-desc">No onboarding sessions, no training required. If your team can use Apple Notes, they can use TWO — but with far more power.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">03</div>
              <div className="feat-name">iPad and Mac native</div>
              <div className="feat-desc">Whether your team is in the office or on the go, TWO works beautifully across every Apple device — no compromises.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">04</div>
              <div className="feat-name">Docs that look great shared</div>
              <div className="feat-desc">Send a proposal or brief to a client and it looks polished — not like it was typed into a database row.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">05</div>
              <div className="feat-name">Activity feed</div>
              <div className="feat-desc">See what your team has been working on at a glance. Full history of edits and creates — no surprises.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">06</div>
              <div className="feat-name">Priced for small teams</div>
              <div className="feat-desc">Fair, transparent pricing. No hidden per-seat fees that spiral as you grow. Built for teams who watch their spend.</div>
            </div>
          </div>

          <div className="roadmap-divider"></div>

          <div className="roadmap-later-title">What small teams use TWO for</div>
          <div className="roadmap-later-grid" style={{marginBottom: "56px"}}>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Team knowledge base</div>
              <div className="roadmap-later-desc">One place for processes, decisions, and everything your team needs to know</div>
            </div>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Client deliverables</div>
              <div className="roadmap-later-desc">Write and share briefs, reports, and proposals that look professional</div>
            </div>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Meeting notes</div>
              <div className="roadmap-later-desc">Capture and share notes from every meeting — searchable, always available</div>
            </div>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Product & strategy docs</div>
              <div className="roadmap-later-desc">Keep your roadmap, strategy, and decisions documented and accessible</div>
            </div>
          </div>

          <div className="roadmap-cta">
            <p>Ready to give your team a workspace they&apos;ll love?</p>
            <a href="https://app.two.so/signup" className="btn-hero">Start for free →</a>
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
