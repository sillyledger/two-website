import Link from 'next/link'
import { supabase } from '../../lib/supabase'

export const revalidate = 3600

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
    <main className="max-w-3xl mx-auto px-6 py-24">
      <div className="mb-16">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-muted-foreground text-lg">
          Thoughts on writing, collaboration, and building TWO.
        </p>
      </div>

      {!posts || posts.length === 0 ? (
        <p className="text-muted-foreground">No posts yet. Check back soon.</p>
      ) : (
        <div className="divide-y divide-border">
          {posts.map((post: Post) => (
            <article key={post.id} className="py-10">
              <Link href={`/blog/${post.slug}`} className="group block">
                <p className="text-sm text-muted-foreground mb-3">
                  {post.published_at
                    ? new Date(post.published_at).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })
                    : ''}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight mb-3 group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                )}
                <span className="inline-block mt-4 text-sm font-medium underline underline-offset-4">
                  Read more →
                </span>
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  )
}
