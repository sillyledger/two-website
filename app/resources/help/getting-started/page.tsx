import { Navigation } from "@/components/navigation"

export default function GettingStarted() {
  return (
    <>
      <Navigation />

      <div className="help-category-wrap">

        <div className="help-category-back">
          <a href="/resources/help">← Help Center</a>
        </div>

        <div className="help-category-header">
          <div className="section-eyebrow">Getting Started</div>
          <h1>New to TWO? Start here.</h1>
          <p className="hero-sub">Create your first doc, use templates, and set up the web app.</p>
        </div>

        <div className="help-article-list">

          <a href="/resources/help/getting-started/your-first-doc" className="help-article-row">
            <div className="help-article-row-body">
              <div className="help-article-row-title">Your first doc</div>
              <div className="help-article-row-desc">How to create, name, and organise your first document in TWO.</div>
            </div>
            <div className="help-article-row-arrow">→</div>
          </a>

          <a href="/resources/help/getting-started/using-templates" className="help-article-row">
            <div className="help-article-row-body">
              <div className="help-article-row-title">Using Templates</div>
              <div className="help-article-row-desc">Start faster with pre-built docs for meetings, briefs, and more.</div>
            </div>
            <div className="help-article-row-arrow">→</div>
          </a>

          <a href="/resources/help/getting-started/using-two-as-a-web-app" className="help-article-row">
            <div className="help-article-row-body">
              <div className="help-article-row-title">Using TWO as a Web App</div>
              <div className="help-article-row-desc">How to install TWO on your browser and use it without downloading the Mac app.</div>
            </div>
            <div className="help-article-row-arrow">→</div>
          </a>

        </div>

      </div>

      <footer>
        <div className="footer-left">TWO — A docs app by Strevius</div>
        <div className="footer-right">© 2026 Strevius. All rights reserved.</div>
      </footer>
    </>
  )
}
