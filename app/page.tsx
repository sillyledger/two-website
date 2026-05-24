import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-eyebrow">
          <div className="hero-dot"></div>
          Now in open beta
        </div>
        <h1>The doc app built for iPad and Mac.</h1>
        <p className="hero-sub">
          Beautiful, focused writing for creatives, solo operators, and small teams.
        </p>
        <div className="hero-actions">
          <a href="https://app.two.so/signup" className="btn-hero">Start for free →</a>
          <a href="#features" className="btn-hero-ghost">See how it works</a>
        </div>
      </section>

      {/* ── App mockup ── */}
      <div className="screen-wrap">
        <div style={{
          width: '100%',
          maxWidth: '1080px',
          margin: '0 auto',
          borderRadius: '14px',
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.08)',
          background: '#161618',
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif",
          boxShadow: '0 40px 120px rgba(0,0,0,0.5)',
        }}>

          {/* Browser bar */}
          <div style={{
            background: '#1c1c1e',
            padding: '12px 18px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}>
            <div style={{ display: 'flex', gap: '6px' }}>
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ffbd2e' }} />
              <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
            </div>
            <div style={{
              flex: 1, textAlign: 'center',
              background: '#161618',
              borderRadius: '6px',
              padding: '4px 12px',
              fontSize: '12px',
              color: '#555',
              fontFamily: 'ui-monospace, monospace',
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              app.two.so
            </div>
          </div>

          {/* Layout */}
          <div style={{ display: 'flex', height: '620px' }}>

            {/* Sidebar */}
            <div style={{
              width: '48px',
              background: '#1c1c1e',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '12px 0',
              gap: '2px',
              borderRight: '1px solid rgba(255,255,255,0.08)',
              flexShrink: 0,
            }}>
              <div style={{
                width: 28, height: 28,
                borderRadius: '50%',
                background: 'linear-gradient(135deg,#4f8ef7,#f7a24f)',
                marginBottom: '8px',
                flexShrink: 0,
              }} />
              <SbIcon>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </SbIcon>
              <SbIcon active>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12L12 4l9 8v8a1 1 0 01-1 1H5a1 1 0 01-1-1z"/>
                </svg>
              </SbIcon>
              <SbIcon>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="9 11 12 14 22 4"/>
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
                </svg>
              </SbIcon>
              <SbIcon>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
              </SbIcon>
              <SbIcon>
                <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </SbIcon>
              <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                <SbIcon>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                </SbIcon>
                <SbIcon>
                  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                </SbIcon>
              </div>
            </div>

            {/* Main */}
            <div style={{ flex: 1, background: '#161618', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <div style={{ padding: '16px 24px 10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
                <div style={{ fontSize: '24px', fontWeight: 700, color: '#e8e8e8', letterSpacing: '-0.4px' }}>
                  Recent Docs
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    background: '#242426', color: '#c4c4c4',
                    borderRadius: '9px', padding: '7px 14px',
                    fontSize: '12px', fontWeight: 500,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}>
                    <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                      <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
                    </svg>
                    Templates
                  </div>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '6px',
                    background: '#e8e8e8', color: '#161618',
                    borderRadius: '9px', padding: '7px 14px',
                    fontSize: '12px', fontWeight: 600,
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#161618" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                    New Doc
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '6px', padding: '0 24px 14px', flexShrink: 0 }}>
                {['Recent', 'Favorites', 'Deleted'].map((p) => (
                  <div key={p} style={{
                    padding: '5px 14px',
                    borderRadius: '99px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: p === 'Recent' ? '#161618' : '#a0a0a0',
                    background: p === 'Recent' ? '#e8e8e8' : 'transparent',
                    border: p === 'Recent' ? '1px solid #e8e8e8' : '1px solid rgba(255,255,255,0.08)',
                  }}>
                    {p}
                  </div>
                ))}
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
                padding: '0 24px 24px',
                overflow: 'hidden',
              }}>
                {DOCS.map((doc) => (
                  <div key={doc.title} style={{
                    background: '#242426',
                    borderRadius: '10px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    padding: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                  }}>
                    <div style={{ height: '3px', borderRadius: '2px', background: doc.color, marginBottom: '4px' }} />
                    <div style={{ fontSize: '13px', fontWeight: 600, color: '#e8e8e8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {doc.title}
                    </div>
                    <div style={{ fontSize: '11px', color: '#a0a0a0', lineHeight: 1.55, overflow: 'hidden', flex: 1,
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' as const }}>
                      {doc.preview}
                    </div>
                    <div style={{
                      fontSize: '11px', color: 'rgba(255,255,255,0.2)',
                      marginTop: '8px', paddingTop: '8px',
                      borderTop: '1px solid rgba(255,255,255,0.06)',
                    }}>
                      {doc.date}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="features-section" id="features">
        <div className="features-inner">
          <div className="section-eyebrow">Why TWO</div>
          <h2>Built for how writers, founders, and small teams actually work in docs.</h2>
          <div className="feat-grid">
            <div className="feat-cell">
              <div className="feat-num">01</div>
              <div className="feat-name">Open in a second</div>
              <div className="feat-desc">Blank doc, ready to write. Never lose a thought while it&apos;s still sharp.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">02</div>
              <div className="feat-name">Everything in one place</div>
              <div className="feat-desc">Docs, tasks, and activity — organized without the setup tax.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">03</div>
              <div className="feat-name">Beautiful on any device</div>
              <div className="feat-desc">Designed for iPad, Mac, and web. No compromises on any screen.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">04</div>
              <div className="feat-name">Rich editor, zero clutter</div>
              <div className="feat-desc">Format when you need it. Stays out of your way when you don&apos;t.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">05</div>
              <div className="feat-name">Tasks tied to docs</div>
              <div className="feat-desc">Every task lives next to the doc it belongs to. Nothing gets lost.</div>
            </div>
            <div className="feat-cell">
              <div className="feat-num">06</div>
              <div className="feat-name">Not Notion</div>
              <div className="feat-desc">No databases. No blocks. No setup. Just write and get things done.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="backstory-section">
        <div className="backstory-inner">
          <div className="section-eyebrow">The backstory</div>
          <div className="backstory-cols">
            <div className="backstory-left">
              Most writing apps were built for desktops, then reluctantly ported to iPad. TWO wasn&apos;t.
            </div>
            <div className="backstory-right">
              <p>It was built by someone who creates content full-time on an iPad Pro and got tired of apps that were either too complex, too basic, or never took the device seriously.</p>
              <p>TWO exists because the right tool didn&apos;t. One that&apos;s fast to open, beautiful to write in, and built for the way modern teams actually work — across devices, across time zones, and across shared docs.</p>
              <a href="https://app.two.so/signup" className="backstory-cta">Try it now →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="pricing-inner">
          <div className="section-eyebrow" style={{textAlign:'center', color:'#555552'}}>Pricing</div>
          <h2>Simple, honest pricing.</h2>
          <p className="pricing-sub">Start free. Upgrade your team for less than a coffee.</p>
          <div className="plan-grid">
            <div className="plan-card">
              <div className="plan-name">Free</div>
              <div className="plan-price">$0<span className="plan-price-sub"> / month</span></div>
              <div className="plan-desc">Everything you need to get started. No credit card, no catch.</div>
              <div className="plan-divider"></div>
              <div className="plan-feature"><span className="plan-check">✓</span> Up to 50 docs</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Rich text editor</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Planner &amp; activity</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Collections</div>
              <div className="plan-feature"><span className="plan-check">✓</span> 1 workspace</div>
              <a href="https://app.two.so/signup" className="plan-btn plan-btn-ghost">Get started</a>
            </div>
            <div className="plan-card featured">
              <div className="plan-badge">Pro &amp; Teams</div>
              <div className="plan-name">Pro</div>
              <div className="plan-price">$6<span className="plan-price-sub"> / mo per user</span></div>
              <div className="plan-desc">Unlimited everything. Built for teams who move fast.</div>
              <div className="plan-divider"></div>
              <div className="plan-feature"><span className="plan-check">✓</span> Unlimited docs</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Team workspaces</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Shared collections</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Doc sharing</div>
              <div className="plan-feature"><span className="plan-check">✓</span> Priority support</div>
              <a href="#" className="plan-btn plan-btn-accent">Available Soon →</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-inner">
          <h2>Start writing.<br />Everything else follows.</h2>
          <p className="cta-sub">Free forever. No credit card. No Notion migration required.</p>
          <a href="https://app.two.so/signup" className="btn-hero">Get started free →</a>
        </div>
      </section>

      <footer>
        <div className="footer-left">TWO — A docs app by Strevius</div>
        <div className="footer-right">© 2026 Strevius. All rights reserved.</div>
      </footer>
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
  { title: 'Hiring Plan Q2',          color: '#4aadad', preview: 'Open roles, interview process, and headcount targets for the quarter.', date: 'May 21' },
  { title: 'Onboarding Docs',         color: '#ad4a4a', preview: 'New hire checklist, tools setup, and first week expectations.', date: 'May 21' },
  { title: 'Meeting Notes — May',     color: '#8aad4a', preview: 'Weekly sync summaries, decisions made, and action items this month.', date: 'May 20' },
]
