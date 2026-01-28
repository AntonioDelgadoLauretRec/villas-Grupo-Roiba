'use client'

import { type FC, useState } from 'react'
import { cn } from '@/lib/utils'

export interface ProcessPhase {
  id: number
  icon: 'scouting' | 'legal' | 'design' | 'budget' | 'construction' | 'care'
  title: { es: string; en: string }
  subtitle: { es: string; en: string }
  duration: { es: string; en: string }
  deliverable: { es: string; en: string }
}

// ══════════════════════════════════════════════════════════════
// THE ROIBA METHOD - 6 FASES
// Fuente: Informe Estratégico Gemini (Enero 2026)
// Inspirado en: Patterson Custom Homes (California)
// ══════════════════════════════════════════════════════════════
const phases: ProcessPhase[] = [
  {
    id: 1,
    icon: 'scouting',
    title: {
      es: 'Land Scouting',
      en: 'Land Scouting',
    },
    subtitle: {
      es: 'Búsqueda del Terreno Perfecto',
      en: 'Finding the Perfect Land',
    },
    duration: {
      es: '2-4 semanas',
      en: '2-4 weeks',
    },
    deliverable: {
      es: 'Informe de viabilidad legal y técnica',
      en: 'Legal and technical viability report',
    },
  },
  {
    id: 2,
    icon: 'legal',
    title: {
      es: 'Due Diligence Legal',
      en: 'Legal Due Diligence',
    },
    subtitle: {
      es: 'Seguridad Jurídica Garantizada',
      en: 'Guaranteed Legal Security',
    },
    duration: {
      es: '1-2 semanas',
      en: '1-2 weeks',
    },
    deliverable: {
      es: 'Certificado de título + Compliance AML',
      en: 'Title certificate + AML Compliance',
    },
  },
  {
    id: 3,
    icon: 'design',
    title: {
      es: 'Co-Diseño Arquitectónico',
      en: 'Architectural Co-Design',
    },
    subtitle: {
      es: 'Tu Visión, Nuestros Planos',
      en: 'Your Vision, Our Plans',
    },
    duration: {
      es: '4-6 semanas',
      en: '4-6 weeks',
    },
    deliverable: {
      es: 'Planos finales aprobados',
      en: 'Approved final plans',
    },
  },
  {
    id: 4,
    icon: 'budget',
    title: {
      es: 'Presupuesto Open Book',
      en: 'Open Book Budget',
    },
    subtitle: {
      es: 'Transparencia Total de Costos',
      en: 'Full Cost Transparency',
    },
    duration: {
      es: '1 semana',
      en: '1 week',
    },
    deliverable: {
      es: 'Desglose detallado por partida',
      en: 'Detailed breakdown by item',
    },
  },
  {
    id: 5,
    icon: 'construction',
    title: {
      es: 'Construcción Supervisada',
      en: 'Supervised Construction',
    },
    subtitle: {
      es: 'Control en Tiempo Real',
      en: 'Real-Time Control',
    },
    duration: {
      es: '12-18 meses',
      en: '12-18 months',
    },
    deliverable: {
      es: 'Dashboard 24/7 + Reportes semanales',
      en: '24/7 Dashboard + Weekly reports',
    },
  },
  {
    id: 6,
    icon: 'care',
    title: {
      es: 'Roiba Care',
      en: 'Roiba Care',
    },
    subtitle: {
      es: 'Gestión de tu Activo',
      en: 'Asset Management',
    },
    duration: {
      es: 'De por vida (opcional)',
      en: 'Lifetime (optional)',
    },
    deliverable: {
      es: 'Mantenimiento + Gestión de alquiler',
      en: 'Maintenance + Rental management',
    },
  },
]

export interface ProcessTimelineProps {
  locale?: 'es' | 'en'
  variant?: 'vertical' | 'horizontal'
}

export const ProcessTimeline: FC<ProcessTimelineProps> = ({ 
  locale = 'es', 
  variant = 'vertical' 
}) => {
  const [activePhase, setActivePhase] = useState<number>(1)

  if (variant === 'horizontal') {
    return <HorizontalTimeline phases={phases} locale={locale} activePhase={activePhase} setActivePhase={setActivePhase} />
  }

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-roiba-dorado/20 -translate-x-1/2" />

      {/* Phases */}
      <div className="space-y-12 md:space-y-16">
        {phases.map((phase, index) => (
          <div
            key={phase.id}
            className={cn(
              'relative flex flex-col md:flex-row items-start gap-6 md:gap-12',
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            )}
          >
            {/* Phase Number & Icon */}
            <div className="flex-shrink-0 z-10 md:absolute md:left-1/2 md:-translate-x-1/2">
              <button
                onClick={() => setActivePhase(phase.id)}
                className={cn(
                  'w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-300',
                  activePhase === phase.id
                    ? 'bg-roiba-dorado border-roiba-dorado text-roiba-verde scale-110 shadow-gold'
                    : 'bg-roiba-arena border-roiba-dorado/30 text-roiba-dorado hover:border-roiba-dorado hover:scale-105'
                )}
              >
                <PhaseIcon icon={phase.icon} className="w-7 h-7" />
              </button>
            </div>

            {/* Content Card */}
            <div
              className={cn(
                'flex-1 md:w-[calc(50%-4rem)]',
                index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left',
                'ml-20 md:ml-0'
              )}
            >
              <div
                className={cn(
                  'p-6 rounded-sm transition-all duration-300',
                  activePhase === phase.id
                    ? 'bg-roiba-arena-light shadow-luxury'
                    : 'bg-transparent hover:bg-roiba-arena-light/50'
                )}
              >
                {/* Phase Number */}
                <span className="text-roiba-dorado text-sm font-semibold uppercase tracking-wider">
                  {locale === 'es' ? 'Fase' : 'Phase'} {phase.id}
                </span>

                {/* Title */}
                <h3 className="font-serif text-2xl text-roiba-verde mt-2 mb-1">
                  {phase.title[locale]}
                </h3>

                {/* Subtitle */}
                <p className="text-roiba-verde/60 text-sm mb-3">
                  {phase.subtitle[locale]}
                </p>

                {/* Duration & Deliverable */}
                <div className={cn(
                  'space-y-2 pt-3 border-t border-roiba-dorado/10',
                  activePhase === phase.id ? 'block' : 'hidden md:block'
                )}>
                  <div className="flex items-center gap-2 text-sm">
                    <ClockIcon className="w-4 h-4 text-roiba-dorado" />
                    <span className="text-roiba-verde/70">{phase.duration[locale]}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircleIcon className="w-4 h-4 text-roiba-dorado" />
                    <span className="text-roiba-verde/70">{phase.deliverable[locale]}</span>
                  </div>
                </div>

                {/* Optional indicator for phase 6 */}
                {phase.id === 6 && (
                  <span className="inline-block mt-3 px-3 py-1 text-xs bg-roiba-dorado/10 text-roiba-dorado rounded">
                    {locale === 'es' ? 'Servicio opcional' : 'Optional service'}
                  </span>
                )}
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="hidden md:block flex-1 md:w-[calc(50%-4rem)]" />
          </div>
        ))}
      </div>
    </div>
  )
}

/* ===== HORIZONTAL VARIANT ===== */
const HorizontalTimeline: FC<{ 
  phases: ProcessPhase[]
  locale: 'es' | 'en'
  activePhase: number
  setActivePhase: (id: number) => void
}> = ({ phases, locale, activePhase, setActivePhase }) => {

  return (
    <div className="relative">
      {/* Timeline Track */}
      <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-roiba-dorado/20" />

      {/* Phases Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-2">
        {phases.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setActivePhase(phase.id)}
            className={cn(
              'group flex flex-col items-center text-center p-4 rounded-sm transition-all duration-300',
              activePhase === phase.id
                ? 'bg-roiba-arena-light shadow-card'
                : 'hover:bg-roiba-arena-light/50'
            )}
          >
            {/* Icon */}
            <div
              className={cn(
                'w-14 h-14 rounded-full border-2 flex items-center justify-center mb-4 transition-all duration-300',
                activePhase === phase.id
                  ? 'bg-roiba-dorado border-roiba-dorado text-roiba-verde'
                  : 'bg-white border-roiba-dorado/30 text-roiba-dorado group-hover:border-roiba-dorado'
              )}
            >
              <PhaseIcon icon={phase.icon} className="w-6 h-6" />
            </div>

            {/* Number */}
            <span className="text-xs text-roiba-dorado font-semibold mb-1">
              0{phase.id}
            </span>

            {/* Title */}
            <h4 className="font-serif text-sm text-roiba-verde leading-tight">
              {phase.title[locale]}
            </h4>
          </button>
        ))}
      </div>

      {/* Active Phase Description */}
      <div className="mt-8 p-6 md:p-8 bg-roiba-verde text-roiba-arena rounded-sm">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            {/* Left: Title & Subtitle */}
            <div className="md:flex-1">
              <span className="text-roiba-dorado text-sm font-semibold uppercase tracking-wider">
                {locale === 'es' ? 'Fase' : 'Phase'} {activePhase}
              </span>
              <h3 className="font-serif text-2xl md:text-3xl mt-2 mb-2">
                {phases[activePhase - 1].title[locale]}
              </h3>
              <p className="text-roiba-arena/70">
                {phases[activePhase - 1].subtitle[locale]}
              </p>
            </div>
            
            {/* Right: Duration & Deliverable */}
            <div className="md:flex-shrink-0 md:w-64 space-y-3 md:border-l md:border-roiba-arena/20 md:pl-6">
              <div>
                <p className="text-xs text-roiba-arena/50 uppercase tracking-wider mb-1">
                  {locale === 'es' ? 'Duración' : 'Duration'}
                </p>
                <p className="text-roiba-dorado font-medium">
                  {phases[activePhase - 1].duration[locale]}
                </p>
              </div>
              <div>
                <p className="text-xs text-roiba-arena/50 uppercase tracking-wider mb-1">
                  {locale === 'es' ? 'Entregable' : 'Deliverable'}
                </p>
                <p className="text-roiba-arena">
                  {phases[activePhase - 1].deliverable[locale]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ===== PHASE ICONS ===== */
const PhaseIcon: FC<{ icon: ProcessPhase['icon']; className?: string }> = ({ icon, className }) => {
  const icons = {
    scouting: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    legal: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    design: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <path d="M2 2l7.586 7.586" />
        <circle cx="11" cy="11" r="2" />
      </svg>
    ),
    budget: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 10h16" />
        <path d="M10 4v16" />
      </svg>
    ),
    construction: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 20h20" />
        <path d="M5 20V8l7-4 7 4v12" />
        <path d="M9 20v-6h6v6" />
        <path d="M9 12h.01M15 12h.01" />
      </svg>
    ),
    care: (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  }

  return icons[icon] || null
}

/* ===== HELPER ICONS ===== */
const ClockIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
)

const CheckCircleIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
)

export default ProcessTimeline
