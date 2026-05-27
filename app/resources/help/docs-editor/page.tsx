import { Navigation } from "@/components/navigation"

export default function DocsEditor() {
  return (
    <>
      <Navigation />

      <div className="help-category-wrap">

        <div className="help-category-back">
          <a href="/resources/help">← Help Center</a>
        </div>

        <div className="help-category-header">
          <div className="section-eyebrow">Docs &amp; Editor</div>
          <h1>Writing and formatting in TWO.</h1>
          <p className="hero-sub">Everything about the editor — headers, links, code blocks, and more.</p>
        </div>

        <div className="help-article-list">

          <a href="/resources/help/docs-editor/formatting" className="help-article-row">
            <div className="help-article-row-body">
              <div className="help-article-row-title">Formatting</div>
              <div className="help-article-row-desc">Headers, bold, lists, code blocks — everything the editor supports.</div>
            </div>
            <div className="help-article-row-arrow">→</div>
          </a>

          <a href="/resources/help/docs-editor/linking-docs" className="help-article-row">
            <div className="help-article-row-body">
              <div className="help-article-row-title">Linking docs</div>
              <div className="help-article-row-desc">How to link directly to other docs inside your workspace.</div>
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
