'use client'

import { FC, useState } from 'react'
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

export const ProcessTimeline: FC = () => {
  const [activePhase, setActivePhase] = useState(0)

  return (
    <section className="py-24 md:py-32 bg-roiba-arena relative overflow-hidden">
      {/* Número decorativo de fondo */}
      <div className="absolute top-20 right-0 text-[20rem] md:text-[30rem] font-serif text-roiba-verde/[0.02] leading-none select-none pointer-events-none">
        {ROIBA_PHASES[activePhase].number}
      </div>

      <div className="container-editorial relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
            Nuestro Proceso
          </span>
          <h2 className="text-display-md md:text-display-lg font-serif text-roiba-verde mb-6">
            The Roiba Method
          </h2>
          <p className="text-body-lg text-roiba-verde/70 font-light">
            The Roiba Method estructura cada proyecto en seis fases definidas, diseñadas para eliminar la incertidumbre y garantizar control, transparencia y previsibilidad en todo el proceso constructivo.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Timeline navegable */}
          <div className="lg:col-span-5">
            <div className="space-y-0 border-l border-roiba-verde/10">
              {ROIBA_PHASES.map((phase, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePhase(idx)}
                  className={cn(
                    'w-full text-left pl-6 py-5 relative transition-all duration-300',
                    'hover:bg-roiba-verde/[0.02]',
                    activePhase === idx && 'bg-roiba-verde/[0.03]'
                  )}
                >
                  {/* Indicador activo */}
                  <div 
                    className={cn(
                      'absolute left-0 top-0 bottom-0 w-px bg-roiba-dorado',
                      'transform origin-top transition-transform duration-500',
                      activePhase === idx ? 'scale-y-100' : 'scale-y-0'
                    )}
                  />
                  
                  <div className="flex items-baseline gap-4">
                    <span 
                      className={cn(
                        'text-caption font-sans font-medium transition-colors duration-300',
                        activePhase === idx ? 'text-roiba-dorado' : 'text-roiba-verde/30'
                      )}
                    >
                      {phase.number}
                    </span>
                    <div>
                      <h3 
                        className={cn(
                          'text-subheading font-serif transition-colors duration-300',
                          activePhase === idx ? 'text-roiba-verde' : 'text-roiba-verde/60'
                        )}
                      >
                        {phase.title}
                      </h3>
                      <p 
                        className={cn(
                          'text-caption transition-colors duration-300',
                          activePhase === idx ? 'text-roiba-verde/60' : 'text-roiba-verde/40'
                        )}
                      >
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Detalle de fase activa */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-12 shadow-sm">
              <div className="mb-8">
                <span className="text-display-xl font-serif text-roiba-verde/10">
                  {ROIBA_PHASES[activePhase].number}
                </span>
              </div>

              <h3 className="text-heading font-serif text-roiba-verde mb-2">
                {ROIBA_PHASES[activePhase].title}
              </h3>
              
              <p className="text-body text-roiba-dorado mb-6">
                {ROIBA_PHASES[activePhase].subtitle}
              </p>

              <p className="text-body-lg text-roiba-verde/70 font-light mb-8 leading-relaxed">
                {ROIBA_PHASES[activePhase].description}
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-8 border-t border-roiba-verde/10">
                <div>
                  <p className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-verde/40 mb-2">
                    Duración
                  </p>
                  <p className="text-subheading font-serif text-roiba-verde">
                    {ROIBA_PHASES[activePhase].duration}
                  </p>
                </div>
                <div>
                  <p className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-verde/40 mb-2">
                    Entregable
                  </p>
                  <p className="text-body text-roiba-verde">
                    {ROIBA_PHASES[activePhase].deliverable}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
