import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { createClient } from '../../../lib/supabase'

export const revalidate = 0

function formatMonthYear(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const supabase = createClient()

  const { data: post } = await supabase
    .from('posts')
    .select('seo_title, seo_description, title')
    .eq('slug', slug)
    .eq('target_site', 'two.so')
    .eq('status', 'published')
    .single()

  if (!post) return {}

  return {
    title: post.seo_title || post.title,
    description: post.seo_description || undefined,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const supabase = createClient()

  const { data: post } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('target_site', 'two.so')
    .eq('status', 'published')
    .single()

  if (!post) notFound()

  const { data: others } = await supabase
    .from('posts')
    .select('id, title, slug')
    .eq('target_site', 'two.so')
    .eq('status', 'published')
    .neq('slug', slug)

  const related = (others || [])
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)

  return (
    <div className="features-frame">
      <div className="frame-narrow">
        <Link href="/blog" className="bc">← Back to blog</Link>

        <article>
          {post.category && <span className="post-cat">{post.category}</span>}
          <h1 className="post-title display">{post.title}</h1>
          {post.published_at && <p className="post-meta">{formatMonthYear(post.published_at)}</p>}

          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content || '' }} />

          <div className="post-author">
            <img src="/pieter-avatar.png" alt="Pieter" className="post-author-avatar" />
            <div>
              <p className="post-author-name">Pieter</p>
              <p className="post-author-bio">Founder of TWO Docs, blogger, and passionate about content creation.</p>
            </div>
          </div>

          <div className="post-footer">
            <Link href="/blog">← Back to all posts</Link>
          </div>
        </article>

        {related.length > 0 && (
          <section className="bl-related">
            <p className="bl-related-label">More from the blog</p>
            <div className="bl-related-grid">
              {related.map((r) => (
                <Link key={r.id} href={`/blog/${r.slug}`} className="bl-related-card">
                  <div className="bl-related-title display">{r.title}</div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
