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
    <div className="features-frame">
      <section className="bl-hero">
        <p className="micro">Blog</p>
        <h1 className="display">Thoughts on writing.<br />And building TWO.</h1>
        <p className="body-copy">Ideas on collaboration, focus, and the tools we use to think.</p>
      </section>

      {!posts || posts.length === 0 ? (
        <div className="bl-empty">No posts yet. Check back soon.</div>
      ) : (
        <>
          {featured && (
            <Link href={`/blog/${featured.slug}`} className="bl-featured">
              <span className="bl-tag">Latest</span>
              <div className="bl-title display">{featured.title}</div>
              {featured.seo_description && <p className="bl-desc">{featured.seo_description}</p>}
            </Link>
          )}

          <div className="bl-index">
            {rest.map((post, i) => (
              <div key={post.id} className="bl-item">
                <div className="bl-rail">
                  <span className="bl-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="bl-dot"></span>
                </div>
                <Link href={`/blog/${post.slug}`} className="bl-item-link bl-content">
                  <div className="bl-title display">{post.title}</div>
                  {post.seo_description && <p className="bl-desc">{post.seo_description}</p>}
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
