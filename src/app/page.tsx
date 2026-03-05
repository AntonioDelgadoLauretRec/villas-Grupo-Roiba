import HomePage from '@/components/HomePage'
import type { Metadata } from 'next'
import { getServices, getProcessSteps, getTestimonials, getPublishedBlogPosts } from '@/lib/data'
import { getSiteSetting } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Grupo Roiba | Servicios Técnicos y Construcción en Punta Cana',
  description:
    'Firma de servicios técnicos especializados en proyectos residenciales exclusivos en Punta Cana y Cap Cana. Dirección técnica, supervisión de obra, construcción llave en mano y gestión integral. Más de 20 años de experiencia.',
  alternates: {
    canonical: 'https://gruporoiba.com',
  },
}

export default async function Page() {
  const [services, processSteps, testimonials, heroImages, stats, about, blogPosts] = await Promise.all([
    getServices('homepage').catch(() => []),
    getProcessSteps().catch(() => []),
    getTestimonials().catch(() => []),
    getSiteSetting('hero_images').catch(() => null),
    getSiteSetting('stats').catch(() => null),
    getSiteSetting('about').catch(() => null),
    getPublishedBlogPosts().catch(() => []),
  ])

  return (
    <HomePage
      dbServices={services.length > 0 ? services : undefined}
      dbProcessSteps={processSteps.length > 0 ? processSteps : undefined}
      dbTestimonials={testimonials.length > 0 ? testimonials : undefined}
      dbHeroImages={Array.isArray(heroImages) ? heroImages as string[] : undefined}
      dbStats={Array.isArray(stats) ? stats as { value: string; label: string }[] : undefined}
      dbAbout={about as { title?: string; paragraph1?: string; paragraph2?: string } | undefined}
      dbBlogPosts={blogPosts.length > 0 ? blogPosts : undefined}
    />
  )
}
