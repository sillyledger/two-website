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
    <main className="max-w-2xl mx-auto px-6 py-24">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-12 inline-block"
      >
        ← Back to blog
      </Link>

      <article>
        <header className="mb-12">
          <p className="text-sm text-muted-foreground mb-4">
            {post.published_at
              ? new Date(post.published_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })
              : ''}
          </p>
          <h1 className="text-4xl font-bold tracking-tight leading-tight mb-6">
            {post.title}
          </h1>
          {post.excerpt && (
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          )}
        </header>

        {post.cover_image && (
          <img
            src={post.cover_image}
            alt={post.title}
            className="w-full rounded-lg mb-12 object-cover"
            style={{ maxHeight: '480px' }}
          />
        )}

        <div
          className="prose prose-neutral dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content || '' }}
        />
      </article>
    </main>
  )
}
