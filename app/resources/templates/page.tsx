"use client"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { CtaBand } from "@/components/cta-band"

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
          gap: 16px;
        }
        .template-card {
          background: #fff;
          border: 1px solid #e8e6e0;
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
          color: #1a1a18;
          background: transparent;
          border: 1px solid #dddbd4;
          border-radius: 7px;
          padding: 8px 16px;
          text-decoration: none;
          font-family: 'DM Sans', system-ui, sans-serif;
          transition: background 0.15s, border-color 0.15s;
        }
        .template-use-btn:hover {
          background: #f0ede6;
          border-color: #bbb9b2;
        }
        @media (max-width: 768px) {
          .templates-hero { padding: 48px 24px 32px; }
          .templates-filters { padding: 0 24px 20px; }
          .templates-grid-wrap { padding: 0 24px 72px; }
          .templates-grid { grid-template-columns: 1fr; }
        }
      `}</style>

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

      <div className="templates-grid-wrap">
        <p style={{
          fontSize: '12px',
          color: '#aaa89e',
          marginBottom: '20px',
        }}>{filtered.length} template{filtered.length !== 1 ? 's' : ''}</p>

        <div className="templates-grid">
          {filtered.map(t => (
            <div key={t.key} className="template-card">
              <div style={{
                height: '200px',
                overflow: 'hidden',
                borderBottom: '1px solid #e8e6e0',
                background: '#0d0d0d',
              }}>
                <img
                  src={t.img}
                  alt={t.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                    display: 'block',
                  }}
                />
              </div>
              <div style={{ padding: '18px 20px 14px', flex: 1 }}>
                <p style={{
                  fontSize: '11px',
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
