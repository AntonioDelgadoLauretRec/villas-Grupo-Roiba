'use client'

import { FC, useState, useRef, useCallback } from 'react'
import { cn } from '@/lib/utils'

const ROIBA_PHASES = [
  {
    number: '01',
    title: 'Análisis de Terreno',
    subtitle: 'Seguridad jurídica en la adquisición',
    duration: '2-4 semanas',
    deliverable: 'Informe de viabilidad legal y técnica',
    description: 'La adquisición del terreno es el primer paso y uno de los más críticos del proyecto. Grupo Roiba trabaja con un equipo de profesionales especializados en seguridad jurídica inmobiliaria en República Dominicana, encargado de verificar la situación legal de la propiedad antes de su adquisición. Este proceso permite confirmar la titularidad, detectar posibles cargas y asegurar que el terreno es apto para el desarrollo previsto.',
  },
  {
    number: '02',
    title: 'Validación del Proyecto',
    subtitle: 'Viabilidad técnica y normativa',
    duration: '1-2 semanas',
    deliverable: 'Informe de viabilidad técnica y urbanística',
    description: 'Analizamos el proyecto desde un punto de vista técnico y urbanístico para asegurar su viabilidad antes de avanzar en el desarrollo. Evaluamos condicionantes del terreno, normativa aplicable y criterios constructivos, garantizando que el proyecto puede ejecutarse conforme a los estándares requeridos.',
  },
  {
    number: '03',
    title: 'Co-Diseño',
    subtitle: 'Arquitectura e interiorismo a medida',
    duration: '4-6 semanas',
    deliverable: 'Proyecto arquitectónico personalizado',
    description: 'Definimos el proyecto junto al cliente, adaptando la vivienda a sus necesidades, estilo de vida y objetivos de inversión. Desde esta fase se integran arquitectura, interiorismo y funcionalidad, asegurando coherencia en el diseño y facilitando su correcta ejecución en obra. Cada proyecto es único y se desarrolla con un enfoque totalmente personalizado.',
  },
  {
    number: '04',
    title: 'Presupuesto Detallado',
    subtitle: 'Control económico desde el inicio',
    duration: '1-2 semanas',
    deliverable: 'Desglose por partidas + cronograma financiero',
    description: 'Desarrollamos un presupuesto desglosado por partidas, que permite conocer el alcance real de la inversión antes del inicio de la obra. Este enfoque aporta transparencia y facilita la toma de decisiones, evitando desviaciones y permitiendo mantener el control económico durante todo el proceso.',
  },
  {
    number: '05',
    title: 'Construcción',
    subtitle: 'Ejecución bajo control técnico',
    duration: '12-18 meses',
    deliverable: 'Informes periódicos de avance',
    description: 'Ejecutamos la obra bajo un modelo basado en planificación rigurosa, supervisión continua y control de calidad en cada fase. Coordinamos todos los agentes del proyecto, realizando un seguimiento técnico y económico que garantiza el cumplimiento de plazos, costes y estándares de ejecución. El cliente dispone de información periódica sobre el avance de la obra.',
  },
  {
    number: '06',
    title: 'Roiba Care',
    subtitle: 'Gestión y mantenimiento post-entrega',
    duration: 'Permanente',
    deliverable: 'Mantenimiento + Gestión operativa',
    description: 'El proyecto no finaliza con la entrega de la vivienda. A través de Roiba Care, ofrecemos un servicio de gestión y mantenimiento orientado a preservar el valor de la propiedad y garantizar su correcto funcionamiento a lo largo del tiempo. Este servicio está especialmente pensado para propietarios que no residen de forma permanente.',
  },
]

const SWIPE_THRESHOLD = 50

export const ProcessTimeline: FC = () => {
  const [activePhase, setActivePhase] = useState(0)
  const touchRef = useRef<{ startX: number; startY: number } | null>(null)

  const goNext = useCallback(() => {
    setActivePhase((prev) => Math.min(prev + 1, ROIBA_PHASES.length - 1))
  }, [])

  const goPrev = useCallback(() => {
    setActivePhase((prev) => Math.max(prev - 1, 0))
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchRef.current = {
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
    }
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchRef.current) return
    const deltaX = e.changedTouches[0].clientX - touchRef.current.startX
    const deltaY = e.changedTouches[0].clientY - touchRef.current.startY
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) goNext()
      else goPrev()
    }
    touchRef.current = null
  }, [goNext, goPrev])

  return (
    <section className="py-14 md:py-20 bg-roiba-arena-light relative overflow-hidden">
      {/* Número decorativo de fondo */}
      <div className="absolute top-16 right-0 text-[18rem] md:text-[26rem] font-serif text-roiba-verde/[0.025] leading-none select-none pointer-events-none">
        {ROIBA_PHASES[activePhase].number}
      </div>

      <div className="container-editorial relative z-10">
        <div className="grid lg:grid-cols-12 gap-0 lg:gap-14 items-start">

          {/* ── Left: Phase list ── */}
          <div className="lg:col-span-4">
            {/* Mobile: horizontal scrollable — Desktop: vertical list */}
            <div
              className="flex lg:flex-col overflow-x-auto lg:overflow-visible border-b-2 lg:border-b-0 lg:border-l-2 border-roiba-verde/10 snap-x snap-mandatory scrollbar-luxury"
              style={{ WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
            >
              {ROIBA_PHASES.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={cn(
                    'flex-shrink-0 lg:flex-shrink text-left snap-center',
                    'px-5 lg:pl-6 lg:pr-4 py-4 lg:py-5',
                    'relative transition-all duration-300',
                    'border-b-2 lg:border-b-0 lg:border-l-2 -mb-0.5 lg:-mb-0 lg:-ml-0.5',
                    activePhase === idx
                      ? 'border-roiba-dorado bg-roiba-verde/[0.03] lg:bg-roiba-verde/[0.03]'
                      : 'border-transparent hover:bg-roiba-verde/[0.02]'
                  )}
                >
                  <div className="flex items-baseline gap-3 whitespace-nowrap lg:whitespace-normal">
                    <span
                      className={cn(
                        'font-sans text-caption font-semibold tracking-widest flex-shrink-0 transition-colors duration-300',
                        activePhase === idx ? 'text-roiba-dorado' : 'text-roiba-verde/25'
                      )}
                    >
                      {phase.number}
                    </span>
                    <div>
                      <p
                        className={cn(
                          'font-serif text-body leading-snug transition-colors duration-300',
                          activePhase === idx ? 'text-roiba-verde' : 'text-roiba-verde/50'
                        )}
                      >
                        {phase.title}
                      </p>
                      <p
                        className={cn(
                          'text-caption hidden lg:block mt-0.5 transition-colors duration-300',
                          activePhase === idx ? 'text-roiba-verde/55' : 'text-roiba-verde/30'
                        )}
                      >
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Mobile swipe hint */}
            <div className="flex lg:hidden items-center gap-2 mt-3 justify-center font-sans text-micro tracking-[0.12em] uppercase text-roiba-dorado/60">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 8H4M7 5L4 8l3 3"/></svg>
              <span>Desliza para navegar</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 8h8M9 5l3 3-3 3"/></svg>
            </div>
          </div>

          {/* ── Right: Active phase detail (swipeable on mobile) ── */}
          <div
            className="lg:col-span-8 mt-6 lg:mt-0 lg:sticky lg:top-28"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              key={activePhase}
              className="bg-white shadow-sm border border-roiba-verde/8 p-8 md:p-10 lg:p-12"
              style={{ animation: 'fadeUp 0.4s ease both' }}
            >
              {/* Phase number + title row */}
              <div className="flex items-start gap-5 mb-7">
                <span className="font-serif leading-none font-light text-roiba-verde/[0.07] select-none flex-shrink-0"
                  style={{ fontSize: 'clamp(4rem, 8vw, 6rem)' }}>
                  {ROIBA_PHASES[activePhase].number}
                </span>
                <div className="pt-1 flex-1 min-w-0">
                  <h3 className="text-heading font-serif text-roiba-verde mb-1.5 leading-tight">
                    {ROIBA_PHASES[activePhase].title}
                  </h3>
                  <p className="text-micro font-sans font-semibold tracking-widest uppercase text-roiba-dorado">
                    {ROIBA_PHASES[activePhase].subtitle}
                  </p>
                </div>
              </div>

              {/* Gold divider */}
              <div className="w-full h-px bg-roiba-dorado/20 mb-7" />

              {/* Description */}
              <p className="text-body-lg text-roiba-verde/65 font-light leading-relaxed mb-9">
                {ROIBA_PHASES[activePhase].description}
              </p>

              {/* Meta grid */}
              <div className="grid grid-cols-2 gap-6 pt-7 border-t border-roiba-verde/8">
                <div>
                  <p className="text-micro font-sans font-semibold tracking-widest uppercase text-roiba-verde/35 mb-2">
                    Duración estimada
                  </p>
                  <p className="text-subheading font-serif text-roiba-verde leading-tight">
                    {ROIBA_PHASES[activePhase].duration}
                  </p>
                </div>
                <div>
                  <p className="text-micro font-sans font-semibold tracking-widest uppercase text-roiba-verde/35 mb-2">
                    Entregable
                  </p>
                  <p className="text-body text-roiba-verde/80 leading-snug">
                    {ROIBA_PHASES[activePhase].deliverable}
                  </p>
                </div>
              </div>

              {/* Navigation arrows + progress */}
              <div className="flex items-center justify-between mt-7 pt-6 border-t border-roiba-verde/8">
                <button
                  onClick={goPrev}
                  disabled={activePhase === 0}
                  aria-label="Fase anterior"
                  className={cn(
                    'w-10 h-10 flex items-center justify-center border transition-all duration-300',
                    activePhase === 0
                      ? 'border-roiba-verde/10 text-roiba-verde/20 cursor-not-allowed'
                      : 'border-roiba-verde/20 text-roiba-verde/60 hover:border-roiba-dorado hover:text-roiba-dorado'
                  )}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 19l-7-7 7-7" /></svg>
                </button>

                <div className="flex items-center gap-2">
                  {ROIBA_PHASES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActivePhase(idx)}
                      aria-label={`Fase ${idx + 1}`}
                      className={cn(
                        'h-1.5 rounded-full transition-all duration-300',
                        activePhase === idx
                          ? 'w-8 bg-roiba-dorado'
                          : 'w-3 bg-roiba-verde/15 hover:bg-roiba-verde/30'
                      )}
                    />
                  ))}
                </div>

                <button
                  onClick={goNext}
                  disabled={activePhase === ROIBA_PHASES.length - 1}
                  aria-label="Fase siguiente"
                  className={cn(
                    'w-10 h-10 flex items-center justify-center border transition-all duration-300',
                    activePhase === ROIBA_PHASES.length - 1
                      ? 'border-roiba-verde/10 text-roiba-verde/20 cursor-not-allowed'
                      : 'border-roiba-verde/20 text-roiba-verde/60 hover:border-roiba-dorado hover:text-roiba-dorado'
                  )}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5l7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
