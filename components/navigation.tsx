"use client"
import { useState } from "react"

export function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggle = (menu: string) =>
    setOpenMenu(prev => (prev === menu ? null : menu))

  const close = () => setTimeout(() => setOpenMenu(null), 150)

  return (
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
    </nav>
  )
}
