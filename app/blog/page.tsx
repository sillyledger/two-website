import Link from 'next/link'
import { createClient } from '../../lib/supabase'

export const revalidate = 0

type Post = {
  id: string
  title: string
  slug: string
  seo_description: string | null
  published_at: string | null
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default async function BlogPage() {
  const supabase = createClient()
  const { data: posts } = await supabase
    .from('posts')
    .select('id, title, slug, seo_description, published_at')
    .eq('target_site', 'two.so')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  const featured = posts?.[0] ?? null
  const rest = posts?.slice(1) ?? []

  return (
    <>
      <style>{`
        .blog-page {
          padding-top: 120px;
          min-height: 100vh;
          background: #0c0c0b;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        .blog-inner {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px 120px;
        }

        .blog-eyebrow {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #6b6b63;
          margin-bottom: 20px;
        }

        .blog-h1 {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: #f0ede6;
          margin-bottom: 16px;
          max-width: 640px;
        }

        .blog-sub {
          font-size: 16px;
          font-weight: 300;
          color: #6b6b63;
          line-height: 1.6;
          margin-bottom: 64px;
        }

        .blog-card {
          background: #141412;
          border: 1px solid #222220;
          border-radius: 16px;
          text-decoration: none;
          display: block;
          color: inherit;
          transition: border-color 0.2s ease;
        }

        .blog-card:hover {
          border-color: #f0ede6;
        }

        .blog-card-featured {
          padding: 48px;
          margin-bottom: 16px;
        }

        .blog-card-inner {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 640px;
        }

        .blog-meta-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .blog-latest-badge {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #f0ede6;
          background: #222220;
          padding: 4px 10px;
          border-radius: 999px;
        }

        .blog-date {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #6b6b63;
        }

        .blog-card-title-lg {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #f0ede6;
        }

        .blog-card-title-sm {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: #f0ede6;
          flex: 1;
        }

        .blog-card-desc {
          font-size: 15px;
          font-weight: 300;
          color: #6b6b63;
          line-height: 1.65;
        }

        .blog-card-desc-sm {
          font-size: 14px;
          font-weight: 300;
          color: #6b6b63;
          line-height: 1.6;
        }

        .blog-read-more {
          font-size: 13px;
          font-weight: 500;
          color: #c4b87a;
          margin-top: 8px;
        }

        .blog-read-more-sm {
          font-size: 12px;
          font-weight: 500;
          color: #c4b87a;
          margin-top: 4px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 16px;
        }

        .blog-card-grid {
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          height: 100%;
          box-sizing: border-box;
        }

        .blog-empty {
          background: #141412;
          border: 1px solid #222220;
          border-radius: 16px;
          padding: 48px;
          color: #6b6b63;
          font-size: 15px;
        }

        @media (max-width: 768px) {
          .blog-inner { padding: 0 24px 80px; }
          .blog-card-featured { padding: 32px; }
        }
      `}</style>

      <main className="blog-page">
        <div className="blog-inner">

          {/* Header */}
          <p className="blog-eyebrow">Blog</p>
          <h1 className="blog-h1">
            Thoughts on writing<br />and building TWO.
          </h1>
          <p className="blog-sub">
            Ideas on collaboration, focus, and the tools we use to think.
          </p>

          {/* Empty state */}
          {!posts || posts.length === 0 ? (
            <div className="blog-empty">No posts yet. Check back soon.</div>
          ) : (
            <>
              {/* Featured */}
              {featured && (
                <Link href={`/blog/${featured.slug}`} className="blog-card blog-card-featured">
                  <div className="blog-card-inner">
                    <div className="blog-meta-row">
                      <span className="blog-latest-badge">Latest</span>
                      {featured.published_at && (
                        <span className="blog-date">{formatDate(featured.published_at)}</span>
                      )}
                    </div>
                    <h2 className="blog-card-title-lg">{featured.title}</h2>
                    {featured.seo_description && (
                      <p className="blog-card-desc">{featured.seo_description}</p>
                    )}
                    <span className="blog-read-more">Read more →</span>
                  </div>
                </Link>
              )}

              {/* Bento grid */}
              {rest.length > 0 && (
                <div className="blog-grid">
                  {rest.map((post: Post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="blog-card">
                      <div className="blog-card-grid">
                        {post.published_at && (
                          <span className="blog-date">{formatDate(post.published_at)}</span>
                        )}
                        <h2 className="blog-card-title-sm">{post.title}</h2>
                        {post.seo_description && (
                          <p className="blog-card-desc-sm">{post.seo_description}</p>
                        )}
                        <span className="blog-read-more-sm">Read more →</span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </>
          )}

        </div>
      </main>
    </>
  )
}
