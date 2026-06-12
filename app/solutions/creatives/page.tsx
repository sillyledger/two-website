import { Navigation } from "@/components/navigation"
import { CtaBand } from "@/components/cta-band"

export default function ForCreatives() {
  return (
    <>
      <Navigation />

      <section className="roadmap-hero">
        <div className="section-eyebrow">For Creatives</div>
        <h1>Your workspace should feel as good as your work.</h1>
        <p className="hero-sub">TWO is built for writers, designers, photographers, and filmmakers who think in docs — and care deeply about how their tools look and feel.</p>
      </section>

      <section className="roadmap-section">
        <div className="roadmap-inner">

          <div className="backstory-cols">
            <div className="backstory-left">
              Most doc apps are built for teams with 500 people. You&apos;re not that.
            </div>
            <div className="backstory-right">
              <p>You&apos;re a creative. You move between your iPad and Mac constantly. You need a place to capture ideas, write briefs, draft proposals, and keep your work organised — without drowning in databases and spreadsheets.</p>
              <p>TWO gets out of your way. No bloat. No complexity. Just a beautiful place to think and write.</p>
            </div>
          </div>

          <div className="roadmap-divider" style={{marginTop: "64px"}}></div>

          <div className="roadmap-later-title">Built for how creatives actually work</div>

          <div className="feat-grid" style={{marginBottom: "56px"}}>
            <div className="feat-cell">
              <div className="feat-num">01</div>
              <div className="feat-name">iPad-first writing</div>
              <div className="feat-desc">TWO feels native on iPad. Whether you&apos;re on the couch, in a café, or on a flight — your docs are always there, always fast.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">02</div>
              <div className="feat-name">Beautiful by default</div>
              <div className="feat-desc">Typography, spacing, and layout that make your words look good without any effort. Your workspace should match the quality of your work.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">03</div>
              <div className="feat-name">Mac and iPad in sync</div>
              <div className="feat-desc">Start a brief on your iPad, refine it on your Mac. Everything syncs instantly — no friction, no version conflicts.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">04</div>
              <div className="feat-name">Rich text that stays clean</div>
              <div className="feat-desc">Headers, bold, lists, code blocks — all the formatting you need, none of the clutter you don&apos;t.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">05</div>
              <div className="feat-name">Dark mode built in</div>
              <div className="feat-desc">Late night sessions look as good as morning ones. TWO supports dark and light mode natively across all your Apple devices.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">06</div>
              <div className="feat-name">Nothing you don&apos;t need</div>
              <div className="feat-desc">No kanban boards. No databases. No feature overload. TWO is a doc app — and it does that one thing exceptionally well.</div>
            </div>
          </div>

          <div className="roadmap-divider"></div>

          <div className="roadmap-later-title">What creatives use TWO for</div>
          <div className="roadmap-later-grid" style={{marginBottom: "56px"}}>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Creative briefs</div>
              <div className="roadmap-later-desc">Write and share project briefs with clients or collaborators</div>
            </div>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Idea capture</div>
              <div className="roadmap-later-desc">Grab ideas the moment they hit — on iPad, Mac, or web</div>
            </div>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Client proposals</div>
              <div className="roadmap-later-desc">Draft polished proposals without switching between five apps</div>
            </div>
            <div className="roadmap-later-item">
              <div className="roadmap-later-name">Personal journaling</div>
              <div className="roadmap-later-desc">A private space to reflect, write, and think without distractions</div>
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
