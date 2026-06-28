import Link from 'next/link'
import { notFound } from 'next/navigation'
import { supabase } from '../../../lib/supabase'

export const revalidate = 0

type Props = {
  params: { slug: string }
}

export default async function BlogPostPage({ params }: Props) {
  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', params.slug)
    .eq('target_site', 'two.so')
    .eq('status', 'published')
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
          letterSpacing: '0.01em',
        }}>
          ← Back to blog
        </Link>

        <article>
          <header style={{ marginBottom: '56px' }}>
            {post.published_at && (
              <p style={{ fontSize: '12px', fontWeight: 400, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--muted-foreground)', marginBottom: '20px' }}>
                {new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            )}
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--foreground)', marginBottom: '24px' }}>
              {post.title}
            </h1>
            {post.seo_description && (
              <p style={{ fontSize: '18px', fontWeight: 300, color: 'var(--muted-foreground)', lineHeight: 1.65 }}>
                {post.seo_description}
              </p>
            )}
          </header>

          <div style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.8, color: 'var(--foreground)' }}
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
          />
        </article>
      </div>
    </main>
  )
}
