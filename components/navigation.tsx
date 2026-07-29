"use client";

import { useState } from "react";

const ICON_SPLIT = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <line x1="12" y1="4" x2="12" y2="20" strokeDasharray="2 2" />
  </svg>
);

const ICON_SYNC = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12a9 9 0 0115-6.7M21 12a9 9 0 01-15 6.7" />
    <path d="M18 3v4h-4M6 21v-4h4" />
  </svg>
);

const ICON_SHARED = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);

const ICON_PEN = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 3a2.83 2.83 0 014 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
  </svg>
);

const ICON_SOLO = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21v-1a8 8 0 0116 0v1" />
  </svg>
);

const ICON_TEAM = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="8" r="3.2" />
    <circle cx="17" cy="9" r="2.6" />
    <path d="M3 20v-1a6 6 0 0112 0v1" />
    <path d="M15 14.5a4.5 4.5 0 014.5 4.5v1" />
  </svg>
);

const ICON_TEMPLATE = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <line x1="4" y1="8" x2="20" y2="8" />
    <line x1="8" y1="13" x2="16" y2="13" />
  </svg>
);

const ICON_HELP = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M9.1 9a2.9 2.9 0 015.7 1c0 1.9-2.8 1.8-2.8 3.7" />
    <line x1="12" y1="17.5" x2="12" y2="17.5" />
  </svg>
);

const ICON_LAPTOP = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="11" rx="1.5" />
    <path d="M2 19h20" />
  </svg>
);

const ICON_TABLET = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18" />
  </svg>
);

const CHEVRON = (
  <svg width="9" height="9" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1.5 3 5 7 8.5 3" />
  </svg>
);

const ICON_INSTALL = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#e8e8e8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M12 8v6" />
    <path d="M9 11l3 3 3-3" />
  </svg>
);

export function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggle = (menu: string) => setOpenMenu((prev) => (prev === menu ? null : menu));
  const close = () => setTimeout(() => setOpenMenu(null), 150);
  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav>
        <a href="/" className="nav-logo">
          <img src="/logo-two.svg" alt="" width={22} height={22} />
          <span>TWO</span>
        </a>

        <ul className="nav-links">
          <li>
            <button className={openMenu === "product" ? "nl-open" : ""} onClick={() => toggle("product")} onBlur={close}>
              Product <span className="nav-chevron">{CHEVRON}</span>
            </button>
          </li>
          <li>
            <button className={openMenu === "solutions" ? "nl-open" : ""} onClick={() => toggle("solutions")} onBlur={close}>
              Solutions <span className="nav-chevron">{CHEVRON}</span>
            </button>
          </li>
          <li>
            <button className={openMenu === "resources" ? "nl-open" : ""} onClick={() => toggle("resources")} onBlur={close}>
              Resources <span className="nav-chevron">{CHEVRON}</span>
            </button>
            {openMenu === "resources" && (
              <div className="simple-dd">
                <a href="/resources/templates" className="simple-item">
                  <span className="icon">{ICON_TEMPLATE}</span>
                  <div>
                    <p className="t">Templates</p>
                    <p className="d">Start fast, every time.</p>
                  </div>
                </a>
                <a href="/resources/help" className="simple-item">
                  <span className="icon">{ICON_HELP}</span>
                  <div>
                    <p className="t">Help &amp; Guides</p>
                    <p className="d">Docs on getting the most from TWO.</p>
                  </div>
                </a>
              </div>
            )}
          </li>
          <li>
            <button className={openMenu === "download" ? "nl-open" : ""} onClick={() => toggle("download")} onBlur={close}>
              Download <span className="nav-chevron">{CHEVRON}</span>
            </button>
            {openMenu === "download" && (
              <div className="simple-dd">
                <div className="simple-item">
                  <span className="icon">{ICON_LAPTOP}</span>
                  <div>
                    <p className="t">
                      Mac App <span className="soon-tag">Soon</span>
                    </p>
                    <p className="d">A dedicated Mac experience — fast, native, lives in your dock.</p>
                  </div>
                </div>
                <div className="simple-item">
                  <span className="icon">{ICON_TABLET}</span>
                  <div>
                    <p className="t">
                      iPad App <span className="soon-tag">Soon</span>
                    </p>
                    <p className="d">A dedicated iPad experience built for the way you think and write.</p>
                  </div>
                </div>
                <a href="/install" className="simple-item">
                  <span className="icon">{ICON_INSTALL}</span>
                  <div>
                    <p className="t">Install Web App</p>
                    <p className="d">Add TWO to your home screen.</p>
                  </div>
                </a>
              </div>
            )}
          </li>
          <li>
            <a href="/pricing">Pricing</a>
          </li>
          <li>
            <a href="/roadmap">Roadmap</a>
          </li>
          <li>
            <a href="https://www.sorano.space/two-docs/changelog" target="_blank" rel="noopener noreferrer">
              Changelog
            </a>
          </li>
        </ul>

        <div className="nav-cta">
          <a href="https://app.two.so/login" className="btn-login">
            Log in
          </a>
          <a href="https://app.two.so/signup" className="btn-signup">
            Sign up
          </a>
        </div>

        <button className="nav-hamburger" onClick={() => setMobileOpen((prev) => !prev)} aria-label="Toggle menu">
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {openMenu === "product" && (
          <div className="mega">
            <div className="mega-inner">
              <a href="/product/features/split-view" className="mega-item">
                <span className="icon">{ICON_SPLIT}</span>
                <div>
                  <p className="t">Split View</p>
                  <p className="d">Two docs, one screen. Drag to resize.</p>
                </div>
              </a>
              <a href="/product/features/live-sync" className="mega-item">
                <span className="icon">{ICON_SYNC}</span>
                <div>
                  <p className="t">Live Sync</p>
                  <p className="d">Every device, always current.</p>
                </div>
              </a>
              <a href="/product/features/shared-workspaces" className="mega-item">
                <span className="icon">{ICON_SHARED}</span>
                <div>
                  <p className="t">Shared Workspaces</p>
                  <p className="d">Bring people in, when you want it.</p>
                </div>
              </a>

              <div className="mega-preview">
                <p className="lbl">Preview</p>
                <div className="mini-device">
                  <div className="mini-panes">
                    <div className="mini-pane">
                      <div className="mini-bar" style={{ background: "var(--indigo)" }}></div>
                      <div className="mini-sl" style={{ width: "90%" }}></div>
                      <div className="mini-sl" style={{ width: "70%" }}></div>
                      <div className="mini-sl" style={{ width: "80%" }}></div>
                      <div className="mini-sl" style={{ width: "55%" }}></div>
                    </div>
                    <div className="mini-seam"></div>
                    <div className="mini-pane">
                      <div className="mini-bar" style={{ background: "var(--clay)" }}></div>
                      <div className="mini-sl" style={{ width: "85%" }}></div>
                      <div className="mini-sl" style={{ width: "60%" }}></div>
                      <div className="mini-sl" style={{ width: "75%" }}></div>
                      <div className="mini-sl" style={{ width: "50%" }}></div>
                    </div>
                  </div>
                  <div className="mp-annot">Split view — drag to resize</div>
                </div>
                <p className="cap">
                  The feature TWO is built around.{" "}
                  <a href="/product/features/split-view">See how it works →</a>
                </p>
              </div>

              <div className="mega-all">
                <a href="/product/features">View all features →</a>
              </div>
            </div>
          </div>
        )}

        {openMenu === "solutions" && (
          <div className="mega">
            <div className="mega-inner">
              <a href="/solutions/creatives" className="mega-item">
                <span className="icon">{ICON_PEN}</span>
                <div>
                  <p className="t">For Creatives</p>
                  <p className="d">Writers, designers, and makers who need a quiet place to think.</p>
                </div>
              </a>
              <a href="/solutions/solo" className="mega-item">
                <span className="icon">{ICON_SOLO}</span>
                <div>
                  <p className="t">For Solo Operators</p>
                  <p className="d">Founders and freelancers running everything themselves.</p>
                </div>
              </a>
              <a href="/solutions/teams" className="mega-item">
                <span className="icon">{ICON_TEAM}</span>
                <div>
                  <p className="t">For Small Teams</p>
                  <p className="d">Teams that move fast and don&apos;t want their docs app to slow them down.</p>
                </div>
              </a>

              <div className="mega-preview">
                <p className="lbl">Preview</p>
                <div className="mini-device">
                  <div className="mini-panes">
                    <div className="mini-pane">
                      <div className="mini-bar" style={{ background: "var(--indigo)" }}></div>
                      <div className="mini-sl" style={{ width: "90%" }}></div>
                      <div className="mini-sl" style={{ width: "70%" }}></div>
                      <div className="mini-sl" style={{ width: "80%" }}></div>
                      <div className="mini-sl" style={{ width: "55%" }}></div>
                    </div>
                  </div>
                  <div className="mp-annot">Shared, however you work</div>
                </div>
                <p className="cap">
                  One app, three ways to use it.{" "}
                  <a href="/product/features/shared-workspaces">See how sharing works →</a>
                </p>
              </div>
            </div>
          </div>
        )}
      </nav>

      <div className={`mobile-menu${mobileOpen ? " open" : ""}`}>
        <span className="mm-group-label">Product</span>
        <a href="/product/features/split-view" onClick={closeMobile}>
          Split View
        </a>
        <a href="/product/features/live-sync" onClick={closeMobile}>
          Live Sync
        </a>
        <a href="/product/features/shared-workspaces" onClick={closeMobile}>
          Shared Workspaces
        </a>
        <a href="/product/features" onClick={closeMobile}>
          All Features
        </a>

        <span className="mm-group-label">Solutions</span>
        <a href="/solutions/creatives" onClick={closeMobile}>
          For Creatives
        </a>
        <a href="/solutions/solo" onClick={closeMobile}>
          For Solo Operators
        </a>
        <a href="/solutions/teams" onClick={closeMobile}>
          For Small Teams
        </a>

        <span className="mm-group-label">Resources</span>
        <a href="/resources/templates" onClick={closeMobile}>
          Templates
        </a>
        <a href="/resources/help" onClick={closeMobile}>
          Help &amp; Guides
        </a>

        <span className="mm-group-label">Download</span>
        <span style={{ fontSize: 14, color: "var(--text-secondary)", padding: "10px 0", display: "flex", alignItems: "center", gap: 8 }}>
          Mac App <span className="soon-tag">Soon</span>
        </span>
        <span style={{ fontSize: 14, color: "var(--text-secondary)", padding: "10px 0", display: "flex", alignItems: "center", gap: 8 }}>
          iPad App <span className="soon-tag">Soon</span>
        </span>
        <a href="/install" onClick={closeMobile}>
          Install Web App
        </a>

        <a href="/pricing" onClick={closeMobile}>
          Pricing
        </a>
        <a href="/roadmap" onClick={closeMobile}>
          Roadmap
        </a>
        <a href="https://www.sorano.space/two-docs/changelog" target="_blank" rel="noopener noreferrer" onClick={closeMobile}>
          Changelog
        </a>

        <div className="mm-cta">
          <a href="https://app.two.so/login" className="btn-login">
            Log in
          </a>
          <a href="https://app.two.so/signup" className="btn-signup">
            Sign up
          </a>
        </div>
      </div>
    </>
  );
}
