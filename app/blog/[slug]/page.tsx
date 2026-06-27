import Link from 'next/link'
import { notFound } from 'next/navigation'
import { supabase } from '../../../lib/supabase'

export const revalidate = 3600

type Props = {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: Props) {
  const { data: post } = await supabase
    .from('two_posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('published', true)
    .single()

  if (!post) notFound()

  return (
    <main style={{ paddingTop: '120px', minHeight: '100vh' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 40px 120px' }}>

        <Link href="/blog" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '13px',
          fontWeight: 400,
          color: 'var(--muted-foreground)',
          textDecoration: 'none',
          marginBottom: '64px',
          transition: 'color 0.15s',
          letterSpacing: '0.01em',
        }}
          onMouseOver={e => (e.currentTarget.style.color = 'var(--foreground)')}
          onMouseOut={e => (e.currentTarget.style.color = 'var(--muted-foreground)')}
        >
          ← Back to blog
        </Link>

        <article>
          <header style={{ marginBottom: '56px' }}>
            {post.published_at && (
              <p style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: '20px' }}>
                {new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            )}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 400,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              color: 'var(--foreground)',
              marginBottom: '24px',
            }}>
              {post.title}
            </h1>
            {post.excerpt && (
              <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>
                {post.excerpt}
              </p>
            )}
          </header>

          {post.cover_image && (
            <img
              src={post.cover_image}
              alt={post.title}
              style={{ width: '100%', borderRadius: '10px', marginBottom: '56px', objectFit: 'cover', maxHeight: '440px', border: '1px solid var(--border)' }}
            />
          )}

          <div style={{
            fontSize: '16px',
            fontWeight: 300,
            lineHeight: 1.8,
            color: 'var(--foreground)',
          }}
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </article>

      </div>
    </main>
  )
}
