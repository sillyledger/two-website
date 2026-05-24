import { Navigation } from "@/components/navigation"

export default function HelpCenter() {
  return (
    <>
      <Navigation />

      <section className="roadmap-hero">
        <div className="section-eyebrow">Help Center</div>
        <h1>How can we help?</h1>
        <p className="hero-sub">Everything you need to get the most out of TWO.</p>
      </section>

      <div className="help-index-wrap">

        <div className="help-index-group">
          <div className="help-index-group-title">Getting started</div>
          <div className="help-index-cards">
            <a href="/resources/help/getting-started/your-first-doc" className="help-index-card">
              <div className="help-index-card-title">Your first doc</div>
              <div className="help-index-card-desc">How to create, name, and organise your first document in TWO.</div>
              <div className="help-index-card-meta">2 min read</div>
            </a>
            <a href="/resources/help/getting-started/using-two-on-ipad" className="help-index-card">
              <div className="help-index-card-title">Using TWO on iPad</div>
              <div className="help-index-card-desc">Tips for getting the most out of TWO on your iPad.</div>
              <div className="help-index-card-meta">4 min read</div>
            </a>
            <a href="/resources/help/getting-started/syncing-across-devices" className="help-index-card">
              <div className="help-index-card-title">Syncing across devices</div>
              <div className="help-index-card-desc">How your docs stay in sync between your iPad and Mac automatically.</div>
              <div className="help-index-card-meta">2 min read</div>
            </a>
          </div>
        </div>

        <div className="help-index-group">
          <div className="help-index-group-title">Docs &amp; editor</div>
          <div className="help-index-cards">
            <a href="/resources/help/docs-editor/formatting" className="help-index-card">
              <div className="help-index-card-title">Formatting</div>
              <div className="help-index-card-desc">Headers, bold, lists, code blocks — everything the editor supports.</div>
              <div className="help-index-card-meta">3 min read</div>
            </a>
            <a href="/resources/help/docs-editor/linking-docs" className="help-index-card">
              <div className="help-index-card-title">Linking docs</div>
              <div className="help-index-card-desc">How to link directly to other docs inside your workspace.</div>
              <div className="help-index-card-meta">2 min read</div>
            </a>
            <a href="/resources/help/docs-editor/images" className="help-index-card">
              <div className="help-index-card-title">Images</div>
              <div className="help-index-card-desc">Inserting and managing images inside your docs.</div>
              <div className="help-index-card-meta">2 min read · Coming soon</div>
            </a>
          </div>
        </div>

        <div className="help-index-group">
          <div className="help-index-group-title">Account</div>
          <div className="help-index-cards">
            <a href="/resources/help/account/settings" className="help-index-card">
              <div className="help-index-card-title">Settings</div>
              <div className="help-index-card-desc">Managing your account, appearance, and preferences.</div>
              <div className="help-index-card-meta">2 min read</div>
            </a>
            <a href="/resources/help/account/billing" className="help-index-card">
              <div className="help-index-card-title">Billing &amp; plans</div>
              <div className="help-index-card-desc">Everything about Free and Pro — what&apos;s included and how to upgrade.</div>
              <div className="help-index-card-meta">3 min read</div>
            </a>
          </div>
        </div>

        <div className="help-index-cta">
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
