import Link from 'next/link'
import { supabase } from '../../lib/supabase'

export const revalidate = 0

type Post = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  published_at: string | null
}

export default async function BlogPage() {
  const { data: posts } = await supabase
    .from('two_posts')
    .select('id, title, slug, excerpt, published_at')
    .eq('published', true)
    .order('published_at', { ascending: false })

  return (
    <>
      <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto', padding: '0 40px 120px' }}>

          <div style={{ marginBottom: '64px' }}>
            <p style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-dim)', marginBottom: '20px' }}>
              Blog
            </p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, lineHeight: 1.05, letterSpacing: '-0.02em', color: 'var(--foreground)', marginBottom: '20px' }}>
              Thoughts on writing<br />and building TWO.
            </h1>
            <p style={{ fontSize: '17px', fontWeight: 300, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>
              Ideas on collaboration, focus, and the tools we use to think.
            </p>
          </div>

          {!posts || posts.length === 0 ? (
            <p style={{ color: 'var(--muted-foreground)', fontSize: '15px' }}>No posts yet. Check back soon.</p>
          ) : (
            <div>
              {posts.map((post: Post, i: number) => (
                <article key={post.id} style={{ borderTop: '1px solid var(--border)', padding: '48px 0', ...(i === posts.length - 1 ? { borderBottom: '1px solid var(--border)' } : {}) }}>
                  <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                    {post.published_at && (
                      <p style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: '16px' }}>
                        {new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </p>
                    )}
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.02em', color: 'var(--foreground)', marginBottom: '16px', transition: 'color 0.15s' }}
                      onMouseOver={e => (e.currentTarget.style.color = 'var(--accent)')}
                      onMouseOut={e => (e.currentTarget.style.color = 'var(--foreground)')}
                    >
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p style={{ fontSize: '15px', fontWeight: 300, color: 'var(--muted-foreground)', lineHeight: 1.65, marginBottom: '20px' }}>
                        {post.excerpt}
                      </p>
                    )}
                    <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--accent-dim)', letterSpacing: '0.01em' }}>
                      Read more →
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  )
}
