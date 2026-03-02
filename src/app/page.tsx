import HomePage from '@/components/HomePage'
import type { Metadata } from 'next'
import { getServices, getProcessSteps, getTestimonials } from '@/lib/data'
import { getSiteSetting } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Grupo Roiba | Construcción de Villas de Lujo en Punta Cana',
  description:
    'Construcción boutique de villas premium en Punta Cana y Cap Cana, República Dominicana. Dirección técnica, diseño arquitectónico y gestión integral llave en mano. Más de 20 años de experiencia.',
  alternates: {
    canonical: 'https://gruporoiba.com',
  },
}

export default async function Page() {
  const [services, processSteps, testimonials, heroImages, stats, about] = await Promise.all([
    getServices('homepage').catch(() => []),
    getProcessSteps().catch(() => []),
    getTestimonials().catch(() => []),
    getSiteSetting('hero_images').catch(() => null),
    getSiteSetting('stats').catch(() => null),
    getSiteSetting('about').catch(() => null),
  ])

  return (
    <HomePage
      dbServices={services.length > 0 ? services : undefined}
      dbProcessSteps={processSteps.length > 0 ? processSteps : undefined}
      dbTestimonials={testimonials.length > 0 ? testimonials : undefined}
      dbHeroImages={Array.isArray(heroImages) ? heroImages as string[] : undefined}
      dbStats={Array.isArray(stats) ? stats as { value: string; label: string }[] : undefined}
      dbAbout={about as { title?: string; paragraph1?: string; paragraph2?: string } | undefined}
    />
  )
}
