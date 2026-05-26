"use client"
import { useState } from "react"
import { Navigation } from "@/components/navigation"

const templates = [
  {
    key: 'meeting',
    title: 'Meeting notes',
    category: 'Business',
    catKey: 'business',
    desc: 'Agenda, decisions, and action items — all in one structured doc.',
    slug: 'meeting-notes',
    img: '/template-meeting.png',
  },
  {
    key: 'blog',
    title: 'Blog post',
    category: 'Creative',
    catKey: 'creative',
    desc: 'Hook, three sections, CTA, and a pre-publish checklist.',
    slug: 'blog-post',
    img: '/template-blog.png',
  },
  {
    key: 'product',
    title: 'Product brief',
    category: 'Strategy',
    catKey: 'strategy',
    desc: 'Problem, users, goals, scope, and risk — in one tight doc.',
    slug: 'product-brief',
    img: '/template-product.png',
  },
  {
    key: 'weekly',
    title: 'Weekly review',
    category: 'Personal',
    catKey: 'personal',
    desc: 'Wins, blockers, priorities, and metrics — every week, sorted.',
    slug: 'weekly-review',
    img: '/template-weekly.png',
  },
  {
    key: 'okr',
    title: 'OKR tracker',
    category: 'Strategy',
    catKey: 'strategy',
    desc: 'Three objectives, key results, and progress targets — all tracked.',
    slug: 'okr-tracker',
    img: '/template-okr.png',
  },
]

const categories = ['All', 'Strategy', 'Business', 'Creative', 'Personal', 'Finance', 'Research']

export default function TemplatesPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? templates
    : templates.filter(t => t.category === active)

  return (
    <>
      <Navigation />

      <div style={{ paddingTop: '60px' }}>

        {/* Hero */}
        <section style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 40px 48px',
        }}>
          <p style={{
            fontSize: '11px',
            fontWeight: 500,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: 'var(--accent-dim)',
            marginBottom: '20px',
          }}>Templates</p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 5vw, 64px)',
            fontWeight: 400,
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
            color: 'var(--foreground)',
            marginBottom: '16px',
            maxWidth: '600px',
          }}>Start faster. Write better.</h1>
          <p style={{
            fontSize: '17px',
            fontWeight: 300,
            color: 'var(--muted-foreground)',
            lineHeight: 1.65,
            maxWidth: '480px',
          }}>Free, structured docs for every workflow. Open any template in TWO and make it yours in seconds.</p>
        </section>

        {/* Filter pills */}
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 40px 32px',
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
        }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                fontSize: '13px',
                fontWeight: 400,
                fontFamily: 'var(--font-body)',
                padding: '7px 16px',
                borderRadius: '999px',
                border: `1px solid ${active === cat ? 'var(--accent)' : 'var(--border)'}`,
                background: active === cat ? 'var(--accent)' : 'transparent',
                color: active === cat ? '#0c0c0b' : 'var(--muted-foreground)',
                cursor: 'pointer',
                transition: 'all 0.12s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '0 40px 100px',
        }}>
          <p style={{
            fontSize: '12px',
            color: 'var(--muted-foreground)',
            marginBottom: '20px',
            opacity: 0.6,
          }}>{filtered.length} template{filtered.length !== 1 ? 's' : ''}</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
          }}>
            {filtered.map(t => (
              <div
                key={t.key}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  transition: 'border-color 0.15s, transform 0.15s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(232,217,160,0.3)'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--border)'
                  ;(e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'
                }}
              >
                {/* Preview image */}
                <div style={{
                  height: '200px',
                  overflow: 'hidden',
                  borderBottom: '1px solid var(--border)',
                  background: '#0d0d0d',
                  position: 'relative',
                }}>
                  <img
                    src={t.img}
                    alt={`${t.title} template preview`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      display: 'block',
                    }}
                    onError={e => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none'
                    }}
                  />
                </div>

                {/* Body */}
                <div style={{ padding: '18px 20px 14px' }}>
                  <p style={{
                    fontSize: '11px',
                    fontWeight: 500,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    color: 'var(--accent-dim)',
                    marginBottom: '6px',
                  }}>{t.category}</p>
                  <p style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'var(--foreground)',
                    letterSpacing: '-0.2px',
                    marginBottom: '6px',
                  }}>{t.title}</p>
                  <p style={{
                    fontSize: '13px',
                    fontWeight: 300,
                    color: 'var(--muted-foreground)',
                    lineHeight: 1.5,
                  }}>{t.desc}</p>
                </div>

                {/* Footer */}
                <div style={{ padding: '12px 20px 18px' }}>
                  
                    href={`https://app.two.so/new?template=${t.slug}`}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(232,217,160,0.08)'
                      ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(232,217,160,0.5)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'
                      ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(232,217,160,0.25)'
                    }}
                    style={{
                      display: 'inline-block',
                      fontSize: '13px',
                      fontWeight: 500,
                      color: 'var(--accent)',
                      background: 'transparent',
                      border: '1px solid rgba(232,217,160,0.25)',
                      borderRadius: '7px',
                      padding: '7px 14px',
                      textDecoration: 'none',
                      transition: 'background 0.1s, border-color 0.1s',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    Use template &#8594;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
