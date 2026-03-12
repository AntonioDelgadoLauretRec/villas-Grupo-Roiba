'use client'

import { type FC } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import ValueFlipCard from '@/components/ui/ValueFlipCard'
import { RevealWrapper } from '@/components/ui/RevealWrapper'

export interface TrustSignal {
  title: { es: string; en: string }
  description: { es: string; en: string }
  image: string
}

const signals: TrustSignal[] = [
  {
    title: {
      es: 'Experiencia Acumulada',
      en: 'Accumulated Experience',
    },
    description: {
      es: 'Más de cuatro décadas ejecutando y supervisando proyectos residenciales y hoteleros en España y República Dominicana.',
      en: 'Over four decades executing and supervising residential and hotel projects in Spain and the Dominican Republic.',
    },
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=70&fit=crop',
  },
  {
    title: {
      es: 'Seguridad Jurídica',
      en: 'Legal Security',
    },
    description: {
      es: 'Due diligence completa, títulos verificados y cumplimiento normativo antes de cualquier inversión.',
      en: 'Complete due diligence, verified titles, and regulatory compliance before any investment.',
    },
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=70&fit=crop',
  },
  {
    title: {
      es: 'Trato Directo',
      en: 'Direct Contact',
    },
    description: {
      es: 'Sin intermediarios ni comisiones ocultas. Comunicación directa con los fundadores y el equipo técnico.',
      en: 'No middlemen or hidden commissions. Direct communication with founders and technical team.',
    },
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=70&fit=crop',
  },
]

export const TrustSignals: FC = () => {
  const { locale } = useLanguage()

  return (
    <section className="py-14 md:py-20 bg-roiba-fondo-alt">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-display-md font-serif text-roiba-verde mb-4">
            {locale === 'es' ? 'Por qué Grupo Roiba' : 'Why Grupo Roiba'}
          </h2>
          <div className="w-16 h-px bg-roiba-dorado mx-auto" />
        </div>

        {/* Cards Grid — ValueFlipCard style matching Nosotros values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {signals.map((signal, i) => (
            <RevealWrapper key={signal.title[locale]} variant="slide-left" delay={i * 100}>
              <ValueFlipCard
                title={signal.title[locale]}
                description={signal.description[locale]}
                image={signal.image}
              />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustSignals
