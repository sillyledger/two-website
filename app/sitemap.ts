import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase'

const baseUrl = 'https://www.two.so'

const staticRoutes = [
  '',
  '/pricing',
  '/roadmap',
  '/terms-of-service',
  '/privacy-policy',
  '/product/features',
  '/product/features/split-view',
  '/product/features/live-sync',
  '/product/features/shared-workspaces',
  '/solutions',
  '/solutions/creatives',
  '/solutions/solo',
  '/solutions/teams',
  '/compare/notion',
  '/compare/apple-notes',
  '/compare/bear',
  '/compare/obsidian',
  '/resources',
  '/resources/templates',
  '/resources/help',
  '/resources/help/getting-started',
  '/resources/help/getting-started/your-first-doc',
  '/resources/help/getting-started/using-templates',
  '/resources/help/getting-started/using-two-as-a-web-app',
  '/resources/help/docs-editor',
  '/resources/help/docs-editor/split-view',
  '/resources/help/docs-editor/multiple-tabs',
  '/resources/help/docs-editor/linked-docs',
  '/resources/help/docs-editor/formatting',
  '/resources/help/docs-editor/version-history',
  '/resources/help/organizing',
  '/resources/help/organizing/folders',
  '/resources/help/organizing/library',
  '/resources/help/organizing/favorites-quick-jump',
  '/resources/help/collaboration',
  '/resources/help/collaboration/shared-workspaces',
  '/resources/help/collaboration/activity',
  '/resources/help/studio',
  '/resources/help/studio/wall',
  '/resources/help/studio/canvas',
  '/resources/help/account',
  '/resources/help/account/settings-appearance',
  '/resources/help/account/billing-plans',
  '/blog',
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = createClient()
  const { data: posts } = await supabase
    .from('posts')
    .select('slug, published_at')
    .eq('target_site', 'two.so')
    .eq('status', 'published')

  const blogEntries = (posts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.published_at ? new Date(post.published_at) : new Date(),
  }))

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  return [...staticEntries, ...blogEntries]
}
