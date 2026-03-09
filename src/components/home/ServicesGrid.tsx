'use client'

import { useState } from 'react'
import ImageSkeleton from '@/components/ui/ImageSkeleton'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import type { Service } from '@/types/admin'

const SERVICES_ES = [
  { key: 'design', title: 'Diseño Arquitectónico', desc: 'Proyectos exclusivos que integran estética contemporánea con funcionalidad y eficiencia constructiva.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&fit=crop' },
  { key: 'build', title: 'Construcción', desc: 'Ejecución integral con materiales premium y control en cada fase.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80&fit=crop' },
  { key: 'direction', title: 'Dirección Técnica', desc: 'Supervisión que garantiza plazos, calidad y normativa.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&fit=crop' },
  { key: 'turnkey', title: 'Gestión Llave en Mano', desc: 'Un solo interlocutor. Desde el concepto hasta la entrega.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&fit=crop' },
  { key: 'develop', title: 'Desarrollo de Proyectos', desc: 'Viabilidad técnica y económica para su inversión.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&fit=crop' },
  { key: 'quality', title: 'Control de Calidad', desc: 'Protocolos de inspección. Estándares medibles.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&fit=crop' },
  { key: 'installations', title: 'Gestión de Instalaciones', desc: 'Sistemas eléctricos, hidráulicos, climatización y domótica.', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80&fit=crop' },
  { key: 'cost', title: 'Control de Costes', desc: 'Presupuestos detallados y seguimiento en tiempo real.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&fit=crop' },
  { key: 'advisory', title: 'Asesoría Técnica', desc: 'Consultoría experta en normativa, terrenos, permisos y viabilidad.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop' },
]

const SERVICES_EN = [
  { key: 'design', title: 'Architectural Design', desc: 'Exclusive projects integrating contemporary aesthetics with functionality and construction efficiency.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&fit=crop' },
  { key: 'build', title: 'Construction', desc: 'Integral execution with premium materials and control at every phase.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80&fit=crop' },
  { key: 'direction', title: 'Technical Management', desc: 'Supervision that guarantees timelines, quality and regulations.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&fit=crop' },
  { key: 'turnkey', title: 'Turnkey Management', desc: 'One point of contact. From concept to delivery.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&fit=crop' },
  { key: 'develop', title: 'Project Development', desc: 'Technical and economic feasibility for your investment.', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&fit=crop' },
  { key: 'quality', title: 'Quality Control', desc: 'Inspection protocols. Measurable standards.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80&fit=crop' },
  { key: 'installations', title: 'Facilities Management', desc: 'Electrical, plumbing, HVAC and home automation systems.', image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80&fit=crop' },
  { key: 'cost', title: 'Cost Control', desc: 'Detailed budgets and real-time tracking.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&fit=crop' },
  { key: 'advisory', title: 'Technical Advisory', desc: 'Expert consulting on regulations, land, permits and feasibility.', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&fit=crop' },
]

export default function ServicesGrid({ dbServices }: { dbServices?: Service[] }) {
  const { locale, t } = useLanguage()
  const DEFAULT_SERVICES = locale === 'en' ? SERVICES_EN : SERVICES_ES

  const SERVICES = dbServices
    ? dbServices.map(s => ({ key: s.slug, title: s.title, desc: s.description, image: s.image }))
    : DEFAULT_SERVICES
  const [openCard, setOpenCard] = useState<string | null>(null)

  return (
    <section id="servicios" className="py-12 md:py-16 bg-roiba-fondo-alt relative overflow-hidden">
      <div className="px-4 md:px-8 lg:px-16 relative z-[2]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 border-b border-roiba-dorado/[0.12] pb-6">
          <div>
            <span className="scroll-reveal block font-sans text-micro font-semibold tracking-[0.3em] uppercase text-roiba-dorado mb-3">
              {t.services.eyebrow}
            </span>
            <h2 className="scroll-reveal delay-1 font-serif text-[clamp(28px,4vw,48px)] font-normal text-roiba-verde leading-[1.15]">
              {t.services.title}{' '}
              <span className="italic text-roiba-dorado">{t.services.titleAccent}</span>
            </h2>
          </div>
          <span className="scroll-reveal delay-2 font-sans text-xs text-roiba-texto-suave max-w-xs md:text-right leading-relaxed mt-4 md:mt-0">
            {t.services.subtitle}
          </span>
        </div>

        <div className="scroll-reveal overflow-x-auto hide-scrollbar snap-x snap-mandatory touch-pan-x -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16">
          <div className="flex gap-4 w-max">
            {SERVICES.map((svc) => {
              const isOpen = openCard === svc.key
              return (
                <div
                  key={svc.key}
                  onClick={() => setOpenCard(isOpen ? null : svc.key)}
                  className={`group relative snap-start flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[calc(33.333vw-2rem)] aspect-[5/3] overflow-hidden cursor-pointer transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-[0_16px_48px_rgba(12,35,64,0.15)] hover:z-10 ${isOpen ? 'scale-[1.02] shadow-[0_16px_48px_rgba(12,35,64,0.15)] z-10' : ''}`}
                >
                  <ImageSkeleton
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className={`object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${isOpen ? 'scale-110' : ''}`}
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde via-roiba-verde/60 to-transparent transition-opacity duration-500" />
                  <div className={`absolute top-0 left-0 right-0 h-[2px] bg-roiba-dorado opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isOpen ? '!opacity-100' : ''}`} />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-serif text-lg font-semibold text-white leading-tight group-hover:text-roiba-dorado-light transition-colors duration-300">{svc.title}</h3>
                    <div className={`overflow-hidden transition-all duration-500 ease-out max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 group-hover:mt-2 ${isOpen ? 'max-h-24 !opacity-100 mt-2' : ''}`}>
                      <p className="font-sans text-[11px] leading-relaxed text-white/70">{svc.desc}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4 justify-center font-sans text-micro tracking-[0.15em] uppercase text-roiba-dorado/70">
          <span>{t.services.scrollHint}</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 8h8M9 5l3 3-3 3"/></svg>
        </div>
      </div>
    </section>
  )
}
