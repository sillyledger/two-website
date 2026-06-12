import { Navigation } from "@/components/navigation"
import { PricingSection } from "@/components/pricing-section"
import { FeaturesBento } from "@/components/features-bento"
import { FaqSection } from "@/components/faq-section"
import { CtaBand } from "@/components/cta-band"

export default function Home() {
  return (
    <>
      <Navigation />

      <section className="hero">
        <div className="hero-eyebrow">
          <div className="hero-dot"></div>
          Now in open beta (web only)
        </div>
        <h1>Beautiful docs for people who care about their work.</h1>
        <p className="hero-sub">
          Web now. Mac and iPad coming soon.
        </p>
        <div className="hero-actions">
          <a href="https://app.two.so/signup" className="btn-hero">Start for free →</a>
          <a href="/product/features" className="btn-hero-ghost">Explore features</a>
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
      <section className="mission-statement">
        <p>Somewhere along the way, iPad became the device people actually reach for. Writers. Founders. Solo operators. The ones who think better when they&apos;re away from their desk. And yet every doc app still treats it like a second screen. TWO exists because that never made sense to us.</p>
      </section>

      <FeaturesBento />
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

      {/* ── PRICING ── */}
      <PricingSection />

      <FaqSection />

     <CtaBand />

      <footer style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '48px 40px 40px', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 160 }}>
            <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--foreground)' }}>TWO</span>
            <span style={{ fontSize: 13, color: 'var(--muted-foreground)', maxWidth: 200, lineHeight: 1.5 }}>A better place to think and write.</span>
          </div>
          <div style={{ display: 'flex', gap: 60 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 4 }}>Product</span>
              <a href="https://two.so/#features" style={{ fontSize: 13, color: 'var(--muted-foreground)', textDecoration: 'none' }}>Features</a>
              <a href="https://two.so/#pricing" style={{ fontSize: 13, color: 'var(--muted-foreground)', textDecoration: 'none' }}>Pricing</a>
              <a href="https://two.so/roadmap" style={{ fontSize: 13, color: 'var(--muted-foreground)', textDecoration: 'none' }}>Roadmap</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 4 }}>Account</span>
              <a href="https://app.two.so/login" style={{ fontSize: 13, color: 'var(--muted-foreground)', textDecoration: 'none' }}>Log in</a>
              <a href="https://app.two.so/signup" style={{ fontSize: 13, color: 'var(--muted-foreground)', textDecoration: 'none' }}>Sign up</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: 4 }}>Legal</span>
              <a href="/privacy-policy" style={{ fontSize: 13, color: 'var(--muted-foreground)', textDecoration: 'none' }}>Privacy Policy</a>
              <a href="/terms-of-service" style={{ fontSize: 13, color: 'var(--muted-foreground)', textDecoration: 'none' }}>Terms of Service</a>
              <a href="/terms-of-service#refunds" style={{ fontSize: 13, color: 'var(--muted-foreground)', textDecoration: 'none' }}>Refund Policy</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border)', padding: '16px 40px', fontSize: 12, color: 'var(--muted-foreground)' }}>
          © 2026 TWO. All rights reserved.
        </div>
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
  { title: 'Hiring Plan Q2',          color: '#4aadad', preview: 'New hire checklist, tools setup, and first week expectations.', date: 'May 21' },
  { title: 'Onboarding Docs',         color: '#ad4a4a', preview: 'New hire checklist, tools setup, and first week expectations.', date: 'May 21' },
  { title: 'Meeting Notes — May',     color: '#8aad4a', preview: 'Weekly sync summaries, decisions made, and action items this month.', date: 'May 20' },
]
