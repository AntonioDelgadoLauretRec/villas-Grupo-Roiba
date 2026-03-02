'use client'

import { useState } from 'react'
import ImageSkeleton from '@/components/ui/ImageSkeleton'

const SERVICES = [
  { key: 'design', title: 'Diseño Arquitectónico', desc: 'Proyectos exclusivos que integran estética contemporánea con funcionalidad y eficiencia constructiva.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&fit=crop' },
  { key: 'build', title: 'Construcción', desc: 'Ejecución integral con materiales premium y control en cada fase.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80&fit=crop' },
  { key: 'direction', title: 'Dirección Técnica', desc: 'Supervisión que garantiza plazos, calidad y normativa.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&fit=crop' },
  { key: 'turnkey', title: 'Gestión Llave en Mano', desc: 'Un solo interlocutor. Desde el concepto hasta la entrega.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&fit=crop' },
  { key: 'develop', title: 'Desarrollo de Proyectos', desc: 'Viabilidad técnica y económica para su inversión.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&fit=crop' },
  { key: 'quality', title: 'Control de Calidad', desc: 'Protocolos de inspección. Estándares medibles.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&fit=crop' },
  { key: 'installations', title: 'Gestión de Instalaciones', desc: 'Sistemas eléctricos, hidráulicos, climatización y domótica.', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80&fit=crop' },
  { key: 'cost', title: 'Control de Costes', desc: 'Presupuestos detallados y seguimiento en tiempo real.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&fit=crop' },
  { key: 'advisory', title: 'Asesoría Técnica', desc: 'Consultoría experta en normativa, terrenos, permisos y viabilidad.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop' },
]

export default function ServicesGrid() {
  const [openCard, setOpenCard] = useState<string | null>(null)

  return (
    <section id="servicios" className="py-[clamp(80px,10vw,140px)] px-[clamp(24px,8vw,120px)] bg-roiba-arena-light relative overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(rgba(201,169,110,0.12) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

      <div className="max-w-[1200px] mx-auto relative z-[2]">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-[72px] border-b border-roiba-dorado/[0.12] pb-8">
          <div>
            <span className="scroll-reveal block font-sans text-micro font-semibold tracking-[0.3em] uppercase text-roiba-dorado mb-4">
              Nuestros Servicios
            </span>
            <h2 className="scroll-reveal delay-1 font-serif text-[clamp(32px,4vw,52px)] font-normal text-roiba-verde leading-[1.15]">
              Ingeniería aplicada{' '}
              <span className="italic text-roiba-dorado">con precisión</span>
            </h2>
          </div>
          <span className="scroll-reveal delay-2 font-sans text-xs text-slate-500 max-w-xs md:text-right leading-relaxed mt-5 md:mt-0">
            Control integral del proceso constructivo. Cada servicio responde a una necesidad real del proyecto.
          </span>
        </div>

        {/* Grid */}
        <div className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 services-scroll">
          {SERVICES.map((svc) => {
            const isOpen = openCard === svc.key
            return (
              <div
                key={svc.key}
                onClick={() => setOpenCard(isOpen ? null : svc.key)}
                className={`group relative aspect-[5/3] overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_16px_48px_rgba(12,35,64,0.2)] hover:z-10 ${isOpen ? 'scale-[1.02] shadow-[0_16px_48px_rgba(12,35,64,0.2)] z-10' : ''}`}
              >
                <ImageSkeleton
                  src={svc.image}
                  alt={svc.title}
                  fill
                  className={`object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${isOpen ? 'scale-110' : ''}`}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde via-roiba-verde/60 to-transparent transition-opacity duration-500" />
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-roiba-dorado opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isOpen ? '!opacity-100' : ''}`} />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-serif text-lg font-semibold text-white leading-tight">{svc.title}</h3>
                  <div className={`overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2 ${isOpen ? 'max-h-24 !opacity-100 mt-2' : ''}`}>
                    <p className="font-sans text-[11px] leading-relaxed text-white/70">{svc.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile hint */}
        <div className="flex md:hidden items-center gap-2 mt-4 justify-center font-sans text-micro tracking-[0.15em] uppercase text-roiba-dorado/70">
          <span>Desliza para ver más</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 8h8M9 5l3 3-3 3"/></svg>
        </div>
      </div>
    </section>
  )
}
