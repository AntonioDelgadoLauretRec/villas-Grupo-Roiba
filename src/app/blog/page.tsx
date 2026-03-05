import type { Metadata } from 'next'
import { getPublishedBlogPosts } from '@/lib/data'
import BlogContent from './BlogContent'

export const metadata: Metadata = {
  title: 'Blog | Grupo Roiba',
  description: 'Análisis de mercado, marco legal, proceso constructivo y vida en Punta Cana desde la perspectiva de quien ejecuta proyectos aquí.',
  alternates: { canonical: 'https://gruporoiba.com/blog' },
}

export default async function BlogPage() {
  const dbPosts = await getPublishedBlogPosts().catch(() => [])
  const articles = dbPosts.length > 0
    ? dbPosts.map(p => ({ slug: p.slug, title: p.title, excerpt: p.excerpt, image: p.image, category: p.category, date: p.date, readTime: p.read_time }))
    : undefined

  return <BlogContent dbArticles={articles} />
}
