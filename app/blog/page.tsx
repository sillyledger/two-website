import { createClient } from '../../lib/supabase'
import { BlogList, type BlogPost } from '@/components/blog-list'
import { PageCta } from '@/components/page-cta'

export const revalidate = 0

export default async function BlogPage() {
  const supabase = createClient()
  const { data } = await supabase
    .from('posts')
    .select('id, title, slug, category, seo_description, published_at')
    .eq('target_site', 'two.so')
    .eq('status', 'published')
    .order('published_at', { ascending: false })

  const posts: BlogPost[] = data ?? []

  return (
    <div className="features-frame">
      <section className="bx-hero">
        <div>
          <p className="micro">Blog</p>
          <h1 className="display">
            Notes on writing.
            <br />
            <span>And building TWO.</span>
          </h1>
        </div>
        <p className="bx-hero-p">Ideas on writing, focus, and the tools we use to think. New posts every few weeks.</p>
      </section>

      {posts.length === 0 ? (
        <p className="bx-empty">No posts yet. Check back soon.</p>
      ) : (
        <BlogList posts={posts} />
      )}

      <PageCta
        title="Done reading?"
        subtitle="Write your own."
        primary={{ label: 'Start writing free', href: 'https://app.two.so/signup' }}
        secondary={{ label: 'See how it works', href: '/demo' }}
        note="Free for 30 docs. No AI, nothing to set up."
      />
    </div>
  )
}
