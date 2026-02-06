'use client'

import { type FC } from 'react'
import { cn } from '@/lib/utils'

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
      es: '38 Años de Experiencia',
      en: '38 Years of Experience',
    },
    description: {
      es: 'Trayectoria consolidada en construcción de alta calidad con proyectos en España y el Caribe.',
      en: 'Consolidated track record in high-quality construction with projects in Spain and the Caribbean.',
    },
    stat: {
      value: '38+',
      label: { es: 'Años', en: 'Years' },
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

export interface TrustSignalsProps {
  locale?: 'es' | 'en'
  variant?: 'cards' | 'inline' | 'stats'
}

export const TrustSignals: FC<TrustSignalsProps> = ({ locale = 'es', variant = 'cards' }) => {
  if (variant === 'inline') {
    return <InlineTrust signals={signals} locale={locale} />
  }

  if (variant === 'stats') {
    return <StatsTrust signals={signals} locale={locale} />
  }

  return (
    <section className="section bg-roiba-arena">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-roiba-dorado text-sm font-semibold uppercase tracking-wider">
            {locale === 'es' ? 'Nuestra Diferencia' : 'Our Difference'}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-roiba-verde mt-3 mb-4">
            {locale === 'es' ? 'Por qué Grupo Roiba' : 'Why Grupo Roiba'}
          </h2>
          <div className="divider" />
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {signals.map((signal, index) => (
            <div
              key={signal.icon}
              className={cn(
                'group p-8 bg-white rounded-sm shadow-card',
                'transition-all duration-300 hover:shadow-luxury hover:-translate-y-1',
                'animate-fade-up',
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
                  <span className="text-3xl font-bold text-roiba-dorado">
                    {signal.stat.value}
                  </span>
                  <span className="text-sm text-roiba-verde/60">
                    {signal.stat.label[locale]}
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="font-serif text-xl text-roiba-verde mb-3">
                {signal.title[locale]}
              </h3>

              {/* Description */}
              <p className="text-roiba-verde/70 leading-relaxed">
                {signal.description[locale]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== INLINE VARIANT ===== */
const InlineTrust: FC<{ signals: TrustSignal[]; locale: 'es' | 'en' }> = ({ signals, locale }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 py-8 border-y border-roiba-verde/10">
      {signals.map((signal, index) => (
        <div key={signal.icon} className="flex items-center gap-3">
          <TrustIcon icon={signal.icon} className="w-6 h-6 text-roiba-dorado" />
          <span className="text-roiba-verde font-medium">{signal.title[locale]}</span>
          {index < signals.length - 1 && (
            <span className="hidden md:block w-px h-6 bg-roiba-verde/20 ml-8" />
          )}
        </div>
      ))}
    </div>
  )
}

/* ===== STATS VARIANT ===== */
const StatsTrust: FC<{ signals: TrustSignal[]; locale: 'es' | 'en' }> = ({ signals, locale }) => {
  return (
    <div className="grid grid-cols-3 gap-4 md:gap-8">
      {signals.map((signal) => (
        <div key={signal.icon} className="text-center">
          {signal.stat && (
            <>
              <p className="text-4xl md:text-5xl font-bold text-roiba-dorado mb-2">
                {signal.stat.value}
              </p>
              <p className="text-sm text-roiba-verde/60">{signal.stat.label[locale]}</p>
            </>
          )}
        </div>
      ))}
    </div>
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
