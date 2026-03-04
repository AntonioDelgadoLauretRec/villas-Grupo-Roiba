'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const MILESTONES = [
  { year: '2003', title: 'Primeros Proyectos', desc: 'Iván y Ramón inician sus carreras en dirección técnica y ejecución de obra en España.' },
  { year: '2008', title: 'Expansión Hotelera', desc: 'Participación en proyectos hoteleros de alto nivel en la Costa del Sol y el Caribe.' },
  { year: '2013', title: 'Caribe', desc: 'Primer traslado al Caribe: dirección técnica de resorts y residencias premium en República Dominicana.' },
  { year: '2018', title: 'Alta Gama', desc: 'Especialización en villas y residencias de lujo en Punta Cana y Cap Cana.' },
  { year: '2023', title: 'Grupo Roiba', desc: 'Fundación de Grupo Roiba como firma independiente de servicios técnicos integrales.' },
  { year: '2024', title: 'Crecimiento', desc: 'Primeros proyectos llave en mano y expansión del equipo técnico.' },
]

export default function CompanyTimeline() {
  const [active, setActive] = useState(4) // Default to Grupo Roiba founding

  return (
    <section className="py-14 md:py-20 bg-roiba-arena-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em] block mb-4">
            Trayectoria
          </span>
          <h2 className="text-display-md font-serif text-roiba-verde">
            Nuestra <span className="italic text-roiba-dorado">historia</span>
          </h2>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          {/* Timeline bar */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-px bg-roiba-verde/10" />
            <div className="flex justify-between relative">
              {MILESTONES.map((m, idx) => (
                <button
                  key={m.year}
                  onClick={() => setActive(idx)}
                  className="relative flex flex-col items-center group"
                >
                  {/* Dot */}
                  <div className={cn(
                    'w-4 h-4 rounded-full border-2 transition-all duration-500 relative z-10',
                    active === idx
                      ? 'bg-roiba-dorado border-roiba-dorado scale-125'
                      : 'bg-white border-roiba-verde/20 group-hover:border-roiba-dorado'
                  )} />
                  {/* Year label */}
                  <span className={cn(
                    'mt-4 font-serif text-lg transition-colors duration-300',
                    active === idx ? 'text-roiba-dorado' : 'text-roiba-verde/40 group-hover:text-roiba-verde'
                  )}>
                    {m.year}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Active milestone detail */}
          <div
            key={active}
            className="mt-12 max-w-2xl mx-auto text-center"
            style={{ animation: 'fadeUp 0.4s ease both' }}
          >
            <h3 className="font-serif text-heading text-roiba-verde mb-3">{MILESTONES[active].title}</h3>
            <p className="text-body-lg text-roiba-verde/65 leading-relaxed">{MILESTONES[active].desc}</p>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden relative pl-8">
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-3 w-px bg-roiba-verde/10" />

          {MILESTONES.map((m, idx) => (
            <div key={m.year} className="relative mb-8 last:mb-0">
              {/* Dot */}
              <div className={cn(
                'absolute left-[-21px] top-1 w-3 h-3 rounded-full border-2',
                idx === active ? 'bg-roiba-dorado border-roiba-dorado' : 'bg-white border-roiba-verde/20'
              )} />
              <span className="font-serif text-lg text-roiba-dorado block mb-1">{m.year}</span>
              <h3 className="font-serif text-subheading text-roiba-verde mb-1">{m.title}</h3>
              <p className="text-body text-roiba-verde/60 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
