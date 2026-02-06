"use client";

import { FC } from 'react'

interface BentoCard {
  id: string
  title: string
  subtitle: string
  description: string
  imagePlaceholder: string // URL o descripción para placeholder
  size: 'large' | 'medium' | 'small'
  tag?: string
}

const privileges: BentoCard[] = [
  {
    id: 'golf',
    title: 'Sede del PGA Tour',
    subtitle: 'Golf Real Estate',
    description: 'Campos diseñados por Tom Fazio y P.B. Dye. Corales Golf Course y Punta Espada entre los mejores del Caribe.',
    imagePlaceholder: '/images/bento/golf-corales.jpg',
    size: 'large',
    tag: 'Golf de Clase Mundial',
  },
  {
    id: 'marina',
    title: 'Capital del Marlin Azul',
    subtitle: 'Náutica de Lujo',
    description: 'Marina Cap Cana: 1,100+ slips para yates hasta 150 pies. Torneos internacionales de pesca deportiva.',
    imagePlaceholder: '/images/bento/marina-capcana.jpg',
    size: 'medium',
  },
  {
    id: 'equestrian',
    title: 'Los Establos & Polo',
    subtitle: 'Ecuestre Premium',
    description: 'Instalaciones de clase mundial para polo, salto y doma. Club hípico con más de 100 caballos.',
    imagePlaceholder: '/images/bento/polo-equestrian.jpg',
    size: 'medium',
  },
  {
    id: 'fbo',
    title: 'Llegada VIP (FBO)',
    subtitle: 'Aviación Privada',
    description: 'Aeropuerto privado a 10 minutos de tu villa. Terminal exclusiva con servicios de handling.',
    imagePlaceholder: '/images/bento/fbo-private.jpg',
    size: 'small',
  },
]

interface BentoGridSectionProps {
  locale?: 'es' | 'en'
}

export const BentoGridSection: FC<BentoGridSectionProps> = ({ locale = 'es' }) => {
  return (
    <section className="section bg-roiba-arena">
      <div className="container-wide">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm text-roiba-dorado-oscuro font-semibold uppercase tracking-wider bg-roiba-dorado/10 rounded-full">
            {locale === 'es' ? 'Estilo de Vida' : 'Lifestyle'}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-roiba-oceano mb-4">
            {locale === 'es' ? 'The Punta Cana Privileges' : 'The Punta Cana Privileges'}
          </h2>
          <p className="text-roiba-carbon/70 max-w-2xl mx-auto text-lg">
            {locale === 'es'
              ? 'No solo construimos casas. Te integramos en un ecosistema de lujo diseñado para quienes exigen lo extraordinario.'
              : "We don't just build homes. We integrate you into a luxury ecosystem designed for those who demand the extraordinary."}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {privileges.map((card) => (
            <BentoCard key={card.id} card={card} />
          ))}
        </div>
      </div>

      {/* CSS para el grid asimétrico */}
      <style jsx>{`
        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(2, 280px);
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 240px);
          }
        }

        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: 1fr;
            grid-template-rows: repeat(4, 220px);
          }
        }
      `}</style>
    </section>
  )
}

// Componente interno para cada tarjeta
const BentoCard: FC<{ card: BentoCard }> = ({ card }) => {
  // Clases de grid según tamaño
  const gridClasses = {
    large: 'col-span-2 row-span-2 lg:col-span-2 lg:row-span-2',
    medium: 'col-span-2 row-span-1 lg:col-span-1 lg:row-span-1',
    small: 'col-span-2 row-span-1 lg:col-span-1 lg:row-span-1',
  }

  return (
    <article
      className={`
        ${gridClasses[card.size]}
        group relative overflow-hidden rounded-sm
        bg-roiba-verde transition-all duration-500 ease-out
        hover:scale-[1.02] hover:shadow-luxury
        cursor-pointer
      `}
    >
      {/* Background placeholder (en producción: next/image con Sanity) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-roiba-verde to-roiba-verde-light opacity-90"
        aria-hidden="true"
      />
      
      {/* Decorative pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5E6D3' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 lg:p-8">
        {/* Tag (solo en tarjeta grande) */}
        {card.tag && (
          <span className="inline-block w-fit px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-wider text-roiba-dorado bg-roiba-dorado/20 rounded-full">
            {card.tag}
          </span>
        )}

        {/* Subtitle - SEO optimized */}
        <span className="text-roiba-dorado text-sm font-medium uppercase tracking-wider mb-2">
          {card.subtitle}
        </span>

        {/* Title - SEO H3 */}
        <h3 className="font-serif text-xl lg:text-2xl text-roiba-arena mb-3 group-hover:text-roiba-dorado-claro transition-colors duration-300">
          {card.title}
        </h3>

        {/* Description (visible on large cards or on hover for smaller) */}
        <p className={`
          text-roiba-arena/70 text-sm leading-relaxed
          ${card.size === 'large' ? 'block' : 'opacity-0 group-hover:opacity-100 transition-opacity duration-300'}
        `}>
          {card.description}
        </p>

        {/* Hover indicator */}
        <div className="mt-4 flex items-center gap-2 text-roiba-dorado opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-sm font-medium">Descubrir</span>
          <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-roiba-dorado group-hover:w-full transition-all duration-500" />
    </article>
  )
}

// Icon
function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

export default BentoGridSection
