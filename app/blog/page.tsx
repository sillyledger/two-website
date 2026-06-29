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
        .blog-card {
          background: var(--card, #111);
          border: 1px solid var(--border);
          border-radius: 16px;
          transition: border-color 0.2s ease;
          cursor: pointer;
          text-decoration: none;
          display: block;
        }
        .blog-card:hover {
          border-color: var(--foreground);
        }
      `}</style>

      <main style={{ paddingTop: '120px', minHeight: '100vh', background: 'var(--background)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px 120px' }}>

          {/* Header */}
          <div style={{ marginBottom: '64px' }}>
            <p style={{
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--muted-foreground)',
              marginBottom: '20px',
            }}>
              Blog
            </p>
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: 'var(--foreground)',
              marginBottom: '16px',
              maxWidth: '640px',
            }}>
              Thoughts on writing<br />and building TWO.
            </h1>
            <p style={{
              fontSize: '16px',
              fontWeight: 300,
              color: 'var(--muted-foreground)',
              lineHeight: 1.6,
            }}>
              Ideas on collaboration, focus, and the tools we use to think.
            </p>
          </div>

          {/* Empty state */}
          {!posts || posts.length === 0 ? (
            <div style={{
              background: 'var(--card, #111)',
              border: '1px solid var(--border)',
              borderRadius: '16px',
              padding: '48px',
              color: 'var(--muted-foreground)',
              fontSize: '15px',
            }}>
              No posts yet. Check back soon.
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              {/* Featured post */}
              {featured && (
                <Link href={`/blog/${featured.slug}`} className="blog-card">
                  <div style={{ padding: '48px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '640px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{
                          fontSize: '10px',
                          fontWeight: 600,
                          letterSpacing: '0.1em',
                          textTransform: 'uppercase',
                          color: 'var(--foreground)',
                          background: 'var(--border)',
                          padding: '4px 10px',
                          borderRadius: '999px',
                        }}>
                          Latest
                        </span>
                        {featured.published_at && (
                          <span style={{
                            fontSize: '11px',
                            fontWeight: 400,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            color: 'var(--muted-foreground)',
                          }}>
                            {formatDate(featured.published_at)}
                          </span>
                        )}
                      </div>
                      <h2 style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(28px, 4vw, 44px)',
                        fontWeight: 400,
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                        color: 'var(--foreground)',
                      }}>
                        {featured.title}
                      </h2>
                      {featured.seo_description && (
                        <p style={{
                          fontSize: '15px',
                          fontWeight: 300,
                          color: 'var(--muted-foreground)',
                          lineHeight: 1.65,
                        }}>
                          {featured.seo_description}
                        </p>
                      )}
                      <span style={{
                        fontSize: '13px',
                        fontWeight: 500,
                        color: 'var(--foreground)',
                        marginTop: '8px',
                      }}>
                        Read more →
                      </span>
                    </div>
                  </div>
                </Link>
              )}

              {/* Bento grid */}
              {rest.length > 0 && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '16px',
                }}>
                  {rest.map((post: Post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="blog-card"
                    >
                      <div style={{
                        padding: '32px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '12px',
                        height: '100%',
                        boxSizing: 'border-box',
                      }}>
                        {post.published_at && (
                          <p style={{
                            fontSize: '11px',
                            fontWeight: 400,
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            color: 'var(--muted-foreground)',
                          }}>
                            {formatDate(post.published_at)}
                          </p>
                        )}
                        <h2 style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(20px, 2.5vw, 26px)',
                          fontWeight: 400,
                          lineHeight: 1.15,
                          letterSpacing: '-0.02em',
                          color: 'var(--foreground)',
                          flex: 1,
                        }}>
                          {post.title}
                        </h2>
                        {post.seo_description && (
                          <p style={{
                            fontSize: '14px',
                            fontWeight: 300,
                            color: 'var(--muted-foreground)',
                            lineHeight: 1.6,
                          }}>
                            {post.seo_description}
                          </p>
                        )}
                        <span style={{
                          fontSize: '12px',
                          fontWeight: 500,
                          color: 'var(--foreground)',
                          marginTop: '4px',
                        }}>
                          Read more →
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

            </div>
          )}
        </div>
      </main>
    </>
  )
}
