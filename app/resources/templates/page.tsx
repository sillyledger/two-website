"use client"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { CtaBand } from "@/components/cta-band"

const templates = [
  {
    key: 'meeting',
    title: 'Meeting Notes',
    category: 'Business',
    desc: 'Agenda, decisions, and action items — all in one structured doc.',
    slug: 'meeting-notes',
    color: '#4a8fd4',
  },
  {
    key: 'blog',
    title: 'Blog Post',
    category: 'Creative',
    desc: 'Hook, three sections, CTA, and a pre-publish checklist.',
    slug: 'blog-post',
    color: '#c96b8c',
  },
  {
    key: 'product',
    title: 'Product Brief',
    category: 'Strategy',
    desc: 'Problem, users, goals, scope, and risk — in one tight doc.',
    slug: 'product-brief',
    color: '#7a6fd4',
  },
  {
    key: 'weekly',
    title: 'Weekly Review',
    category: 'Personal',
    desc: 'Wins, blockers, priorities, and metrics — every week, sorted.',
    slug: 'weekly-review',
    color: '#4aad6e',
  },
  {
    key: 'okr',
    title: 'OKR Tracker',
    category: 'Strategy',
    desc: 'Three objectives, key results, and progress targets — all tracked.',
    slug: 'okr-tracker',
    color: '#d4943a',
  },
]

const categories = ['All', 'Strategy', 'Business', 'Creative', 'Personal']

export default function TemplatesPage() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? templates
    : templates.filter(t => t.category === active)

  return (
    <>
      <Navigation />

      <style>{`
        .templates-hero {
          max-width: 960px;
          margin: 0 auto;
          padding: 80px 48px 48px;
        }
        .templates-filters {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 48px 28px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .templates-grid-wrap {
          max-width: 960px;
          margin: 0 auto;
          padding: 0 48px 100px;
        }
        .templates-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .template-card {
          background: #fff;
          border: 0.5px solid #e4e2dc;
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .template-card:hover {
          border-color: #bbb9b2;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }
        .template-use-btn {
          display: inline-block;
          font-size: 13px;
          font-weight: 500;
          color: #f9f8f6;
          background: #1a1a18;
          border: none;
          border-radius: 7px;
          padding: 8px 16px;
          text-decoration: none;
          font-family: 'DM Sans', system-ui, sans-serif;
          transition: background 0.15s;
        }
        .template-use-btn:hover { background: #2e2e2c; }
        @media (max-width: 768px) {
          .templates-hero { padding: 56px 24px 36px; }
          .templates-filters { padding: 0 24px 24px; }
          .templates-grid-wrap { padding: 0 24px 72px; }
          .templates-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Hero */}
      <section className="templates-hero">
        <p className="section-eyebrow">Templates</p>
        <h1 style={{
          fontSize: 'clamp(40px, 5vw, 56px)',
          fontWeight: 700,
          letterSpacing: '-2px',
          lineHeight: 1.05,
          color: '#1a1a18',
          marginBottom: '16px',
          maxWidth: '560px',
        }}>Start faster.<br />Write better.</h1>
        <p style={{
          fontSize: '18px',
          color: '#1a1a18',
          lineHeight: 1.7,
          maxWidth: '460px',
        }}>Free, structured docs for every workflow. Open any template in TWO and make it yours in seconds.</p>
      </section>

      {/* Filter pills */}
      <div className="templates-filters">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            style={{
              fontSize: '13px',
              fontWeight: active === cat ? 500 : 400,
              fontFamily: "'DM Sans', system-ui, sans-serif",
              padding: '6px 16px',
              borderRadius: '999px',
              border: active === cat ? '1px solid #1a1a18' : '1px solid #dddbd4',
              background: active === cat ? '#1a1a18' : 'transparent',
              color: active === cat ? '#f9f8f6' : '#888880',
              cursor: 'pointer',
              transition: 'all 0.12s',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="templates-grid-wrap">
        <p style={{
          fontSize: '12px',
          color: '#aaa89e',
          marginBottom: '20px',
          letterSpacing: '0.02em',
        }}>{filtered.length} template{filtered.length !== 1 ? 's' : ''}</p>

        <div className="templates-grid">
          {filtered.map(t => (
            <div key={t.key} className="template-card">
              {/* Doc preview */}
              <div style={{
                height: '160px',
                background: '#f9f8f6',
                borderBottom: '0.5px solid #e4e2dc',
                padding: '20px 20px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                overflow: 'hidden',
              }}>
                <div style={{ height: '3px', width: '40%', borderRadius: '2px', background: t.color }} />
                <div style={{ height: '9px', width: '65%', borderRadius: '4px', background: 'rgba(26,26,24,0.12)' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '4px' }}>
                  {[80, 95, 70, 85, 60].map((w, i) => (
                    <div key={i} style={{ height: '5px', width: w + '%', borderRadius: '3px', background: 'rgba(26,26,24,0.07)' }} />
                  ))}
                </div>
                <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                  {[75, 90].map((w, i) => (
                    <div key={i} style={{ height: '5px', width: w + '%', borderRadius: '3px', background: 'rgba(26,26,24,0.05)' }} />
                  ))}
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '18px 20px 14px', flex: 1 }}>
                <p style={{
                  fontSize: '10px',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#aaa89e',
                  marginBottom: '6px',
                }}>{t.category}</p>
                <p style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: '#1a1a18',
                  letterSpacing: '-0.2px',
                  marginBottom: '6px',
                }}>{t.title}</p>
                <p style={{
                  fontSize: '14px',
                  color: '#1a1a18',
                  lineHeight: 1.6,
                  opacity: 0.6,
                }}>{t.desc}</p>
              </div>

              {/* CTA */}
              <div style={{ padding: '0 20px 18px' }}>
                <a href={`https://app.two.so/new?template=${t.slug}`} className="template-use-btn">
                  Use template →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  )
}
