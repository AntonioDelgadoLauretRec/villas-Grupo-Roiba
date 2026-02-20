'use client'

import { FC, useState } from 'react'
import { cn } from '@/lib/utils'

const ROIBA_PHASES = [
  {
    number: '01',
    title: 'Análisis de Terreno',
    subtitle: 'Due Diligence Completo',
    duration: '2-4 semanas',
    deliverable: 'Informe de viabilidad legal y técnica',
    description: 'Identificamos y analizamos parcelas que cumplan con sus criterios de inversión. Verificación jurídica completa, estudio topográfico y análisis de retorno.',
  },
  {
    number: '02',
    title: 'Validación Legal',
    subtitle: 'Seguridad Jurídica',
    duration: '1-2 semanas',
    deliverable: 'Certificado de título + Compliance AML',
    description: 'Proceso exhaustivo de verificación de titulación, cargas y gravámenes. Estructuración óptima para beneficios Confotur.',
  },
  {
    number: '03',
    title: 'Co-Diseño',
    subtitle: 'Arquitectura Personalizada',
    duration: '4-6 semanas',
    deliverable: 'Planos finales aprobados',
    description: 'Colaboración directa con nuestro equipo de arquitectura. Adaptamos cada villa a sus necesidades, respetando la normativa local.',
  },
  {
    number: '04',
    title: 'Presupuesto Detallado',
    subtitle: 'Transparencia Total',
    duration: '1 semana',
    deliverable: 'Desglose por partida + cronograma financiero',
    description: 'Modelo "Open Book": cada partida presupuestaria visible y justificada. Sin sorpresas ni costos ocultos.',
  },
  {
    number: '05',
    title: 'Construcción',
    subtitle: 'Supervisión en Tiempo Real',
    duration: '12-18 meses',
    deliverable: 'Dashboard 24/7 + Reportes semanales',
    description: 'Acceso a su portal privado con fotos de avance, cronograma actualizado y comunicación directa con el director de obra.',
  },
  {
    number: '06',
    title: 'Roiba Care',
    subtitle: 'Gestión Post-Entrega',
    duration: 'Permanente (opcional)',
    deliverable: 'Mantenimiento + Gestión de rentas',
    description: 'Servicio integral de property management: mantenimiento preventivo, gestión de alquileres turísticos y maximización de retorno.',
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
            Seis fases estructuradas que transforman la incertidumbre en previsibilidad. 
            Cada etapa con entregables claros y supervisión experta.
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
