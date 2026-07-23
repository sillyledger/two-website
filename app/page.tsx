import { Navigation } from "@/components/navigation"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { CtaBand } from "@/components/cta-band"
import "@/styles/homepage-v2.css"

export default function Home() {
  return (
    <>
      <Navigation />

      <div className="homepage-v2">
        {/* ============ HERO ============ */}
        <section className="hero">
          <div className="hero-grid">
            <div>
              <div className="eyebrow">Currently in beta on Web</div>
              <h1 className="h1">Two docs,<br />one screen.</h1>
              <p className="sub">TWO puts two docs side by side on a single screen — no tabs to hunt through, no context lost switching windows.</p>
              <div className="actions">
                <a className="btn-primary" href="https://app.two.so/signup">Start for free</a>
                <a className="btn-ghost" href="#features">Features</a>
              </div>
            </div>
            <div className="panels">
              <div className="doc-card">
                <span className="doc-tag a">Q3 INVESTOR UPDATE</span>
                <div className="doc-line" style={{ width: '88%' }}></div>
                <div className="doc-line" style={{ width: '76%' }}></div>
                <div className="doc-line" style={{ width: '82%' }}></div>
                <div className="doc-line" style={{ width: '60%' }}></div>
                <div className="doc-line pale" style={{ width: '80%', marginTop: '10px' }}></div>
                <div className="doc-line pale" style={{ width: '66%' }}></div>
                <div className="doc-line pale" style={{ width: '72%' }}></div>
              </div>
              <div className="seam"></div>
              <div className="doc-card">
                <span className="doc-tag b">2026 GTM STRATEGY</span>
                <div className="doc-line" style={{ width: '90%' }}></div>
                <div className="doc-line" style={{ width: '70%' }}></div>
                <div className="doc-line" style={{ width: '84%' }}></div>
                <div className="doc-line" style={{ width: '58%' }}></div>
                <div className="doc-line pale" style={{ width: '78%', marginTop: '10px' }}></div>
                <div className="doc-line pale" style={{ width: '64%' }}></div>
                <div className="doc-line pale" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>
          <div className="platforms">
            <span><b>Web</b> — available now</span>
            <span><b>Mac</b> — coming soon</span>
            <span><b>iPad</b> — coming soon</span>
          </div>
        </section>

        {/* ============ HOW TWO WORKS ============ */}
        <section className="section how">
          <div className="section-eyebrow left"><span className="s-dot"></span>How TWO works</div>
          <div className="s-row">
            <h2 className="s-h2">Two docs, kept in sync, out of your way.</h2>
            <p className="s-desc">TWO holds two documents open side by side and keeps every keystroke in sync between them — so you can move between related work without breaking focus or hunting through tabs.</p>
          </div>
          <div className="how-grid">
            <div className="how-card how-dark">
              <span className="how-mock-label">Split View</span>
              <div className="how-mock">
                <div className="how-mock-row">
                  <div className="how-mock-col on">
                    <div className="how-mock-line" style={{ width: '60%' }}></div>
                    <div className="how-mock-line short"></div>
                  </div>
                  <div className="how-mock-col">
                    <div className="how-mock-line" style={{ width: '60%' }}></div>
                    <div className="how-mock-line short"></div>
                  </div>
                </div>
                <div className="how-mock-row">
                  <div className="how-mock-col">
                    <div className="how-mock-line" style={{ width: '70%' }}></div>
                    <div className="how-mock-line" style={{ width: '45%' }}></div>
                  </div>
                  <div className="how-mock-col on">
                    <div className="how-mock-line" style={{ width: '70%' }}></div>
                    <div className="how-mock-line" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="how-card how-white">
              <div className="how-pills">
                <span className="how-pill active">✓ Sync</span>
                <span className="how-pill">Autosave</span>
                <span className="how-pill">Offline (soon)</span>
              </div>
              <div>
                <h3>Real-time, without the lag</h3>
                <p>Every keystroke syncs across your docs and devices the moment you type — no spinner to wait on, no version to reconcile, nothing to lose.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHY TWO (bento) ============ */}
        <section className="section" id="features">
          <div className="section-eyebrow"><span className="s-dot" style={{ background: 'var(--clay)' }}></span>Why TWO</div>
          <div className="s-row">
            <h2 className="s-h2">Built for focused writing. Nothing else.</h2>
            <p className="s-desc">No blocks to configure, no databases to design. Every screen is built to get out of your way.</p>
          </div>

          <div className="bento">
            {/* DARK, hero: Tabs */}
            <div className="card card-dark">
              <span className="pill-label on-dark">Tabs</span>
              <h3>Multiple docs open at once.</h3>
              <p>Switch context without losing your place — each tab remembers exactly where you left off.</p>
              <div className="tab-row">
                <span className="tab active">Weekly Review</span>
                <span className="tab">OKR Tracker</span>
                <span className="tab">Product Brief</span>
              </div>
              <div className="tab-body">
                <div className="tab-line" style={{ width: '85%' }}></div>
                <div className="tab-line" style={{ width: '65%' }}></div>
                <div className="tab-line" style={{ width: '76%' }}></div>
                <div className="tab-line" style={{ width: '52%' }}></div>
                <div className="tab-line pale" style={{ width: '80%', marginTop: '6px' }}></div>
                <div className="tab-line pale" style={{ width: '60%' }}></div>
                <div className="tab-line pale" style={{ width: '68%', marginBottom: 0 }}></div>
              </div>
            </div>

            <div className="bento-stack">
              {/* LIGHT: Templates */}
              <div className="card card-light">
                <span className="pill-label on-light">Templates</span>
                <h3>Start fast. Every time.</h3>
                <p>Meeting notes, briefs, and blog posts — one click away.</p>
                <div className="tpl-grid">
                  <div className="tpl-tile"><span className="tpl-tag a">MEETING</span><div className="tpl-line" style={{ width: '80%' }}></div><div className="tpl-line" style={{ width: '55%' }}></div></div>
                  <div className="tpl-tile"><span className="tpl-tag b">OKR</span><div className="tpl-line" style={{ width: '80%' }}></div><div className="tpl-line" style={{ width: '55%' }}></div></div>
                </div>
              </div>

              {/* DARK: Shared workspaces */}
              <div className="card card-dark">
                <span className="pill-label on-dark">Shared workspaces</span>
                <h3>Invite your team in.</h3>
                <p>One place, with the same instant sync as your own.</p>
                <div className="avatar-row">
                  <div className="avatar a">P</div>
                  <div className="avatar b">R</div>
                  <div className="avatar c">+2</div>
                </div>
                <div className="presence"><span className="presence-dot"></span><span className="presence-text">Pieter is editing Product Brief — Q3</span></div>
              </div>

              {/* LIGHT: Quiet editor */}
              <div className="card card-light">
                <h3>A quiet editor</h3>
                <p>No sidebars you don&apos;t need, no blocks to assemble before you can write.</p>
                <div className="page-mock">
                  <div className="page-title"></div>
                  <div className="page-line" style={{ width: '92%' }}></div>
                  <div className="page-line" style={{ width: '78%' }}></div>
                  <div className="page-cursor-row"><div className="txt"></div><div className="blink"></div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ WHO IT'S FOR ============ */}
        <section className="section who-for">
          <div className="who-grid">
            <div>
              <div className="section-eyebrow left"><span className="s-dot"></span>Who it&apos;s for</div>
              <h2 className="h2">TWO is built for a specific kind of person. You&apos;ll know if that&apos;s you.</h2>
            </div>
            <div className="rows">
              <a href="/solutions/creatives" className="row">
                <div className="bar" style={{ background: 'var(--indigo)' }}></div>
                <div className="row-body">
                  <div className="row-title">Creatives</div>
                  <div className="row-desc">Writers, designers, and makers who need a quiet place to think and create.</div>
                </div>
                <div className="arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a18" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </div>
              </a>
              <a href="/solutions/solo" className="row">
                <div className="bar" style={{ background: 'var(--clay)' }}></div>
                <div className="row-body">
                  <div className="row-title">Solo operators</div>
                  <div className="row-desc">Founders and freelancers running everything themselves, who need one place for it all.</div>
                </div>
                <div className="arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a18" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </div>
              </a>
              <a href="/solutions/teams" className="row">
                <div className="bar" style={{ background: 'var(--ink)', opacity: .35 }}></div>
                <div className="row-body">
                  <div className="row-title">Small teams</div>
                  <div className="row-desc">Teams that move fast and don&apos;t want their docs app to slow them down.</div>
                </div>
                <div className="arrow">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#1a1a18" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <PricingSection />

        {/* ── FAQ ── */}
        <FaqSection variant="sidebar" />
      </div>

     <CtaBand />

      <div className="homepage-v2">
        <footer>
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-brand-row">
                <svg width="22" height="22" viewBox="0 0 120 120"><rect x="12" y="8" width="58" height="76" rx="14" fill="#1a1a18" opacity="0.85"/><rect x="38" y="28" width="58" height="76" rx="14" fill="#1a1a18" opacity="0.55"/></svg>
                <span className="footer-word">two</span>
              </div>
              <span className="footer-tag">A better place to think and write.</span>
            </div>
            <div className="footer-cols">
              <div className="footer-col">
                <span className="footer-col-h">Product</span>
                <a href="https://two.so/#features">Features</a>
                <a href="https://two.so/#pricing">Pricing</a>
                <a href="https://two.so/roadmap">Roadmap</a>
                <a href="https://www.sorano.space/two-docs/changelog" target="_blank" rel="noopener noreferrer">Changelog</a>
              </div>
              <div className="footer-col">
                <span className="footer-col-h">Compare</span>
                <a href="/compare/notion">TWO vs Notion</a>
                <a href="/compare/apple-notes">TWO vs Apple Notes</a>
                <a href="/compare/bear">TWO vs Bear</a>
                <a href="/compare/obsidian">TWO vs Obsidian</a>
              </div>
              <div className="footer-col">
                <span className="footer-col-h">Account</span>
                <a href="https://app.two.so/login">Log in</a>
                <a href="https://app.two.so/signup">Sign up</a>
              </div>
              <div className="footer-col">
                <span className="footer-col-h">Legal</span>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
                <a href="/terms-of-service#refunds">Refund Policy</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">© 2026 TWO. All rights reserved.</div>
        </footer>
      </div>
    </>
  )
}

function SbIcon({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div style={{
      width: 32, height: 32,
      borderRadius: '7px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: active ? '#e8e8e8' : 'rgba(255,255,255,0.28)',
      background: active ? '#2e2e30' : 'transparent',
    }}>
      {children}
    </div>
  )
}

const DOCS = [
  { title: 'Q3 Investor Update',      color: '#e8c06e', preview: 'Quarterly update covering revenue, growth metrics and product milestones for the board.', date: 'May 24' },
  { title: '2026 GTM Strategy',       color: '#4a8fd4', preview: 'Go-to-market plan for the new year. Channels, ICP, and launch sequencing.', date: 'May 24' },
  { title: 'Series A Deck — Draft 3', color: '#4aad6e', preview: 'Latest pitch deck revision with updated traction slides and market sizing.', date: 'May 23' },
  { title: 'Competitive Analysis',    color: '#c96b8c', preview: 'Deep dive into Notion, Apple Notes, and Bear. Where TWO wins.', date: 'May 23' },
  { title: 'Product Roadmap 2026',    color: '#7a6fd4', preview: 'Feature priorities, team assignments, and shipping milestones for H1.', date: 'May 22' },
  { title: 'Brand Guidelines',        color: '#d4943a', preview: 'Typography, color system, tone of voice, and logo usage guidelines.', date: 'May 22' },
  { title: 'Hiring Plan Q2',          color: '#4aadad', preview: 'New hire checklist, tools setup, and first week expectations.', date: 'May 21' },
  { title: 'Onboarding Docs',         color: '#ad4a4a', preview: 'New hire checklist, tools setup, and first week expectations.', date: 'May 21' },
  { title: 'Meeting Notes — May',     color: '#8aad4a', preview: 'Weekly sync summaries, decisions made, and action items this month.', date: 'May 20' },
]
