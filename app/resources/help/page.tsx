import { Navigation } from "@/components/navigation"

export default function HelpCenter() {
  return (
    <>
      <Navigation />

      <section className="roadmap-hero">
        <div className="section-eyebrow">Help Center</div>
        <h1>How can we help?</h1>
        <p className="hero-sub">Guides and answers to get the most out of TWO.</p>
      </section>

      <div className="help-hub-wrap">

        <div className="help-hub-grid">

          <a href="/resources/help/getting-started" className="help-hub-card">
            <div className="help-hub-card-icon">✦</div>
            <div className="help-hub-card-body">
              <div className="help-hub-card-title">Getting Started</div>
              <div className="help-hub-card-desc">New to TWO? Start here. Create your first doc, use templates, and set up the web app.</div>
              <div className="help-hub-card-meta">3 articles</div>
            </div>
          </a>

          <a href="/resources/help/docs-editor" className="help-hub-card">
            <div className="help-hub-card-icon">✐</div>
            <div className="help-hub-card-body">
              <div className="help-hub-card-title">Docs &amp; Editor</div>
              <div className="help-hub-card-desc">Everything about writing and formatting — headers, links, code blocks, and more.</div>
              <div className="help-hub-card-meta">2 articles</div>
            </div>
          </a>

          <a href="/resources/help/account" className="help-hub-card">
            <div className="help-hub-card-icon">◎</div>
            <div className="help-hub-card-body">
              <div className="help-hub-card-title">Account</div>
              <div className="help-hub-card-desc">Manage your settings, appearance preferences, and billing plan.</div>
              <div className="help-hub-card-meta">2 articles</div>
            </div>
          </a>

        </div>

        <div className="help-hub-cta">
          <p>Can&apos;t find what you&apos;re looking for?</p>
          <a href="mailto:two@strevius.com" className="btn-hero">Contact support →</a>
        </div>

      </div>

      <footer>
        <div className="footer-left">TWO — A docs app by Strevius</div>
        <div className="footer-right">© 2026 Strevius. All rights reserved.</div>
      </footer>
    </>
  )
}
