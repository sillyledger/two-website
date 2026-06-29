import Link from 'next/link'
import { createClient } from '../../lib/supabase'
import { Navigation } from '@/components/navigation'

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
      <Navigation />

      <section className="features-page-hero">
        <div className="section-eyebrow">Blog</div>
        <h1>Thoughts on writing.<br />And building TWO.</h1>
        <p className="hero-sub">Ideas on collaboration, focus, and the tools we use to think.</p>
      </section>

      <section className="features-page-section">
        <div className="features-page-inner">

          {!posts || posts.length === 0 ? (
            <div className="fp-card" style={{ textAlign: 'center', padding: '48px' }}>
              <p className="fp-desc">No posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="fp-bento">

              {/* Featured post — spans 2 cols like the hero card */}
              {featured && (
                <Link href={`/blog/${featured.slug}`} className="fp-card fp-card-hero">
                  <div className="fp-eyebrow">
                    Latest{featured.published_at ? ` · ${formatDate(featured.published_at)}` : ''}
                  </div>
                  <div className="fp-title" style={{ fontSize: '28px' }}>{featured.title}</div>
                  {featured.seo_description && (
                    <div className="fp-desc">{featured.seo_description}</div>
                  )}
                  <div className="fp-cta">Read more →</div>
                </Link>
              )}

              {/* Rest — regular cards in the bento grid */}
              {rest.map((post: Post) => (
                <Link key={post.id} href={`/blog/${post.slug}`} className="fp-card">
                  {post.published_at && (
                    <div className="fp-eyebrow">{formatDate(post.published_at)}</div>
                  )}
                  <div className="fp-title">{post.title}</div>
                  {post.seo_description && (
                    <div className="fp-desc">{post.seo_description}</div>
                  )}
                  <div className="fp-cta">Read more →</div>
                </Link>
              ))}

            </div>
          )}
        </div>
      </section>
    </>
  )
}
