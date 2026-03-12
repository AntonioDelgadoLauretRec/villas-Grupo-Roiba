'use client'

import { type FC } from 'react'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export interface TrustSignal {
  icon: 'experience' | 'legal' | 'direct'
  title: { es: string; en: string }
  description: { es: string; en: string }
  stat?: { value: string; label: { es: string; en: string } }
}

const signals: TrustSignal[] = [
  {
    icon: 'experience',
    title: {
      es: 'Experiencia Acumulada',
      en: 'Accumulated Experience',
    },
    description: {
      es: 'Más de cuatro décadas ejecutando y supervisando proyectos residenciales y hoteleros en España y República Dominicana.',
      en: 'Over four decades executing and supervising residential and hotel projects in Spain and the Dominican Republic.',
    },
    stat: {
      value: '40+',
      label: { es: 'Años combinados', en: 'Combined years' },
    },
  },
  {
    icon: 'legal',
    title: {
      es: 'Seguridad Jurídica',
      en: 'Legal Security',
    },
    description: {
      es: 'Due diligence completa, títulos verificados y cumplimiento normativo antes de cualquier inversión.',
      en: 'Complete due diligence, verified titles, and regulatory compliance before any investment.',
    },
    stat: {
      value: '100%',
      label: { es: 'Transparencia', en: 'Transparency' },
    },
  },
  {
    icon: 'direct',
    title: {
      es: 'Trato Directo',
      en: 'Direct Contact',
    },
    description: {
      es: 'Sin intermediarios ni comisiones ocultas. Comunicación directa con los fundadores y el equipo técnico.',
      en: 'No middlemen or hidden commissions. Direct communication with founders and technical team.',
    },
    stat: {
      value: '0%',
      label: { es: 'Comisiones broker', en: 'Broker fees' },
    },
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

        {/* Cards Grid — animated on hover */}
        <div className="grid md:grid-cols-3 gap-8">
          {signals.map((signal, index) => (
            <div
              key={signal.icon}
              className={cn(
                'group p-8 bg-white rounded-sm shadow-sm border border-roiba-verde/[0.06]',
                'transition-all duration-500 hover:shadow-xl hover:-translate-y-1',
                index === 0 && 'animate-delay-100',
                index === 1 && 'animate-delay-200',
                index === 2 && 'animate-delay-300'
              )}
            >
              {/* Icon */}
              <div className="w-16 h-16 mb-6 rounded-full bg-roiba-dorado/10 flex items-center justify-center group-hover:bg-roiba-dorado/20 transition-colors">
                <TrustIcon icon={signal.icon} className="w-8 h-8 text-roiba-dorado" />
              </div>

              {/* Stat Badge */}
              {signal.stat && (
                <div className="inline-flex items-baseline gap-1 mb-4">
                  <span className="text-display-md font-serif font-semibold text-roiba-dorado">
                    {signal.stat.value}
                  </span>
                  <span className="text-caption text-roiba-verde/60">
                    {signal.stat.label[locale]}
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="font-serif text-heading text-roiba-verde mb-3">
                {signal.title[locale]}
              </h3>

              {/* Description */}
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                {signal.description[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== ICONS ===== */
const TrustIcon: FC<{ icon: TrustSignal['icon']; className?: string }> = ({ icon, className }) => {
  const icons = {
    experience: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8v4l3 3" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    legal: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    direct: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  }

  return icons[icon] || null
}

export default TrustSignals
