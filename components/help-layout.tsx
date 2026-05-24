import { Navigation } from "@/components/navigation"

interface HelpLayoutProps {
  children: React.ReactNode
  activeCategory?: string
  activeArticle?: string
}

export function HelpLayout({ children, activeCategory, activeArticle }: HelpLayoutProps) {
  return (
    <>
      <Navigation />

      <div className="help-wrap">

        <aside className="help-sidebar">
          <div className="help-sidebar-inner">

            <div className="help-sidebar-section">
              <div className="help-sidebar-label">Getting started</div>
              
                href="/resources/help/getting-started/your-first-doc"
                className={`help-sidebar-item ${activeArticle === "your-first-doc" ? "active" : ""}`}
              >
                Your first doc
              </a>
              
                href="/resources/help/getting-started/using-two-on-ipad"
                className={`help-sidebar-item ${activeArticle === "using-two-on-ipad" ? "active" : ""}`}
              >
                Using TWO on iPad
              </a>
              
                href="/resources/help/getting-started/syncing-across-devices"
                className={`help-sidebar-item ${activeArticle === "syncing-across-devices" ? "active" : ""}`}
              >
                Syncing across devices
              </a>
            </div>

            <div className="help-sidebar-section">
              <div className="help-sidebar-label">Docs &amp; editor</div>
              
                href="/resources/help/docs-editor/formatting"
                className={`help-sidebar-item ${activeArticle === "formatting" ? "active" : ""}`}
              >
                Formatting
              </a>
              
                href="/resources/help/docs-editor/linking-docs"
                className={`help-sidebar-item ${activeArticle === "linking-docs" ? "active" : ""}`}
              >
                Linking docs
              </a>
              
                href="/resources/help/docs-editor/images"
                className={`help-sidebar-item ${activeArticle === "images" ? "active" : ""}`}
              >
                Images
              </a>
            </div>

            <div className="help-sidebar-section">
              <div className="help-sidebar-label">Account</div>
              
                href="/resources/help/account/settings"
                className={`help-sidebar-item ${activeArticle === "settings" ? "active" : ""}`}
              >
                Settings
              </a>
              
                href="/resources/help/account/billing"
                className={`help-sidebar-item ${activeArticle === "billing" ? "active" : ""}`}
              >
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
