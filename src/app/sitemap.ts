import type { MetadataRoute } from 'next'

const BASE_URL = 'https://gruporoiba.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/villas', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/por-que-punta-cana', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/servicios', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/proceso', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/inversores', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/nosotros', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contacto', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/privacidad', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/terminos', priority: 0.2, changeFrequency: 'yearly' as const },
    { path: '/cookies', priority: 0.2, changeFrequency: 'yearly' as const },
  ]

  return routes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}
