import { Navigation } from "@/components/navigation"

interface HelpLayoutProps {
  children: React.ReactNode
  activeArticle?: string
}

export function HelpLayout({ children, activeArticle }: HelpLayoutProps) {
  return (
    <>
      <Navigation />

      <div className="help-wrap">

        <aside className="help-sidebar">
          <div className="help-sidebar-inner">

            <div className="help-sidebar-section">
              <div className="help-sidebar-label">Getting started</div>
              <a href="/resources/help/getting-started/your-first-doc" className={activeArticle === "your-first-doc" ? "help-sidebar-item active" : "help-sidebar-item"}>
                Your first doc
              </a>
              <a href="/resources/help/getting-started/using-two-on-ipad" className={activeArticle === "using-two-on-ipad" ? "help-sidebar-item active" : "help-sidebar-item"}>
                Using TWO on iPad
              </a>
              <a href="/resources/help/getting-started/syncing-across-devices" className={activeArticle === "syncing-across-devices" ? "help-sidebar-item active" : "help-sidebar-item"}>
                Syncing across devices
              </a>
            </div>

            <div className="help-sidebar-section">
              <div className="help-sidebar-label">Docs &amp; editor</div>
              <a href="/resources/help/docs-editor/formatting" className={activeArticle === "formatting" ? "help-sidebar-item active" : "help-sidebar-item"}>
                Formatting
              </a>
              <a href="/resources/help/docs-editor/linking-docs" className={activeArticle === "linking-docs" ? "help-sidebar-item active" : "help-sidebar-item"}>
                Linking docs
              </a>
              <a href="/resources/help/docs-editor/images" className={activeArticle === "images" ? "help-sidebar-item active" : "help-sidebar-item"}>
                Images
              </a>
            </div>

            <div className="help-sidebar-section">
              <div className="help-sidebar-label">Account</div>
              <a href="/resources/help/account/settings" className={activeArticle === "settings" ? "help-sidebar-item active" : "help-sidebar-item"}>
                Settings
              </a>
              <a href="/resources/help/account/billing" className={activeArticle === "billing" ? "help-sidebar-item active" : "help-sidebar-item"}>
                Billing &amp; plans
              </a>
            </div>

          </div>
        </aside>

        <main className="help-main">
          <div className="help-content">
            {children}
          </div>
        </main>

      </div>

      <footer>
        <div className="footer-left">TWO — A docs app by Strevius</div>
        <div className="footer-right">© 2026 Strevius. All rights reserved.</div>
      </footer>
    </>
  )
}
