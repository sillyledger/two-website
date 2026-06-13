"use client"
import { useState } from "react"

export function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)

  const toggle = (menu: string) =>
    setOpenMenu(prev => (prev === menu ? null : menu))

  const close = () => setTimeout(() => setOpenMenu(null), 150)

  return (
    <>
      <nav>
        <a href="/" className="nav-logo">
          <img src="/logo-two.svg" alt="TWO" className="nav-logo-img" />
        </a>
        <ul className="nav-links">
          <li className="nav-dropdown-wrap">
            <button
              className="nav-dropdown-btn"
              onClick={() => toggle("product")}
              onBlur={close}
            >
              Product <span className={`nav-chevron ${openMenu === "product" ? "nav-chevron-open" : ""}`}>▾</span>
            </button>
            {openMenu === "product" && (
              <div className="nav-dropdown">
                <a href="/product/features/split-view" className="nav-dropdown-item">
                  <span className="nav-dropdown-label">Split View</span>
                </a>
                <a href="/product/features/live-sync" className="nav-dropdown-item">
                  <span className="nav-dropdown-label">Live Sync</span>
                </a>
                <a href="/product/features/shared-workspaces" className="nav-dropdown-item">
                  <span className="nav-dropdown-label">Shared Workspaces</span>
                </a>
                <a href="/product/features" className="nav-dropdown-item">
                  <span className="nav-dropdown-label">View all features →</span>
                </a>
              </div>
            )}
          </li>
          <li className="nav-dropdown-wrap">
            <button
              className="nav-dropdown-btn"
              onClick={() => toggle("solutions")}
              onBlur={close}
            >
              Solutions <span className={`nav-chevron ${openMenu === "solutions" ? "nav-chevron-open" : ""}`}>▾</span>
            </button>
            {openMenu === "solutions" && (
              <div className="nav-dropdown">
                <a href="/solutions/creatives" className="nav-dropdown-item">
                  <span className="nav-dropdown-label">For Creatives</span>
                </a>
                <a href="/solutions/solo" className="nav-dropdown-item">
                  <span className="nav-dropdown-label">For Solo Operators</span>
                </a>
                <a href="/solutions/teams" className="nav-dropdown-item">
                  <span className="nav-dropdown-label">For Small Teams</span>
                </a>
              </div>
            )}
          </li>
          <li className="nav-dropdown-wrap">
            <button
              className="nav-dropdown-btn"
              onClick={() => toggle("resources")}
              onBlur={close}
            >
              Resources <span className={`nav-chevron ${openMenu === "resources" ? "nav-chevron-open" : ""}`}>▾</span>
            </button>
            {openMenu === "resources" && (
              <div className="nav-dropdown">
                <a href="/resources/templates" className="nav-dropdown-item">
                  <span className="nav-dropdown-label">Templates</span>
                </a>
                <a href="/resources/help" className="nav-dropdown-item">
                  <span className="nav-dropdown-label">Help & Guides</span>
                </a>
              </div>
            )}
          </li>
          <li><a href="https://app.two.so">Web App</a></li>
          <li className="nav-dropdown-wrap">
            <button
              className="nav-dropdown-btn"
              onClick={() => toggle("download")}
              onBlur={close}
            >
              Download <span className={`nav-chevron ${openMenu === "download" ? "nav-chevron-open" : ""}`}>▾</span>
            </button>
            {openMenu === "download" && (
              <div className="nav-dropdown">
                <div className="nav-dropdown-item">
                  <span className="nav-dropdown-label">Mac App</span>
                  <span className="nav-dropdown-soon">Soon</span>
                </div>
                <div className="nav-dropdown-item">
                  <span className="nav-dropdown-label">iPad App</span>
                  <span className="nav-dropdown-soon">Soon</span>
                </div>
                <a href="/install" className="nav-dropdown-item">
                  <span className="nav-dropdown-label">Install Web App</span>
                </a>
              </div>
            )}
          </li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/roadmap">Roadmap</a></li>
        </ul>
        <div className="nav-cta">
          <a href="https://app.two.so/login" className="btn-login">Log in</a>
          <a href="https://app.two.so/signup" className="btn-signup">Sign up</a>
        </div>
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-group">
            <span className="mobile-menu-label">Product</span>
            <a href="/product/features/split-view" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>Split View</a>
            <a href="/product/features/live-sync" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>Live Sync</a>
            <a href="/product/features/shared-workspaces" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>Shared Workspaces</a>
            <a href="/product/features" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>All Features</a>
          </div>
          <div className="mobile-menu-group">
            <span className="mobile-menu-label">Solutions</span>
            <a href="/solutions/creatives" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>For Creatives</a>
            <a href="/solutions/solo" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>For Solo Operators</a>
            <a href="/solutions/teams" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>For Small Teams</a>
          </div>
          <div className="mobile-menu-group">
            <span className="mobile-menu-label">Resources</span>
            <a href="/resources/templates" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>Templates</a>
            <a href="/resources/help" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>Help & Guides</a>
          </div>
          <div className="mobile-menu-group">
            <a href="https://app.two.so" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>Web App</a>
            <a href="/pricing" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>Pricing</a>
            <a href="/roadmap" className="mobile-menu-item" onClick={() => setMobileOpen(false)}>Roadmap</a>
          </div>
          <div className="mobile-menu-actions">
            <a href="https://app.two.so/login" className="btn-login" style={{ flex: 1, textAlign: 'center' }}>Log in</a>
            <a href="https://app.two.so/signup" className="btn-signup" style={{ flex: 1, textAlign: 'center' }}>Sign up</a>
          </div>
        </div>
      )}
    </>
  )
}
