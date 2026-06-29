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
          color: var(--muted-foreground);
          margin-bottom: 20px;
        }
        .blog-h1 {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 60px);
          font-weight: 400;
          line-height: 1.05;
          letter-spacing: -0.03em;
          color: var(--foreground);
          margin-bottom: 16px;
          max-width: 640px;
        }
        .blog-sub {
          font-size: 16px;
          font-weight: 300;
          color: var(--muted-foreground);
          line-height: 1.6;
          margin-bottom: 64px;
        }
        .blog-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          text-decoration: none;
          display: block;
          color: inherit;
          transition: border-color 0.2s ease;
        }
        .blog-card:hover {
          border-color: var(--foreground);
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
          color: var(--foreground);
          background: var(--border);
          padding: 4px 10px;
          border-radius: 999px;
        }
        .blog-date {
          font-size: 11px;
          font-weight: 400;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted-foreground);
        }
        .blog-title-lg {
          font-family: var(--font-display);
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 400;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--foreground);
        }
        .blog-title-sm {
          font-family: var(--font-display);
          font-size: clamp(20px, 2.5vw, 26px);
          font-weight: 400;
          line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--foreground);
          flex: 1;
        }
        .blog-desc {
          font-size: 15px;
          font-weight: 300;
          color: var(--muted-foreground);
          line-height: 1.65;
        }
        .blog-desc-sm {
          font-size: 14px;
          font-weight: 300;
          color: var(--muted-foreground);
          line-height: 1.6;
        }
        .blog-cta {
          font-size: 13px;
          font-weight: 500;
          color: var(--accent-dim);
          margin-top: 8px;
        }
        .blog-cta-sm {
          font-size: 12px;
          font-weight: 500;
          color: var(--accent-dim);
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
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 48px;
          color: var(--muted-foreground);
          font-size: 15px;
        }
        @media (max-width: 768px) {
          .blog-inner { padding: 0 24px 80px; }
          .blog-card-featured { padding: 32px; }
          .blog-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <main className="blog-page">
        <div className="blog-inner">
          <p className="blog-eyebrow">Blog</p>
          <h1 className="blog-h1">
            Thoughts on writing<br />and building TWO.
          </h1>
          <p className="blog-sub">
            Ideas on collaboration, focus, and the tools we use to think.
          </p>

          {!posts || posts.length === 0 ? (
            <div className="blog-empty">No posts yet. Check back soon.</div>
          ) : (
            <>
              {featured && (
                <Link href={`/blog/${featured.slug}`} className="blog-card blog-card-featured">
                  <div className="blog-card-inner">
                    <div className="blog-meta-row">
                      <span className="blog-latest-badge">Latest</span>
                      {featured.published_at && (
                        <span className="blog-date">{formatDate(featured.published_at)}</span>
                      )}
                    </div>
                    <h2 className="blog-title-lg">{featured.title}</h2>
                    {featured.seo_description && (
                      <p className="blog-desc">{featured.seo_description}</p>
                    )}
                    <span className="blog-cta">Read more →</span>
                  </div>
                </Link>
              )}

              {rest.length > 0 && (
                <div className="blog-grid">
                  {rest.map((post: Post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="blog-card">
                      <div className="blog-card-grid">
                        {post.published_at && (
                          <span className="blog-date">{formatDate(post.published_at)}</span>
                        )}
                        <h2 className="blog-title-sm">{post.title}</h2>
                        {post.seo_description && (
                          <p className="blog-desc-sm">{post.seo_description}</p>
                        )}
                        <span className="blog-cta-sm">Read more →</span>
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
