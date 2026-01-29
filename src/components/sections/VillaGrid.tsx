'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn, formatCurrency } from '@/lib/utils'
export type VillaGridProps = {
  locale?: string;
  showFilters?: boolean;
  columns?: number;
};


interface Villa {
  id: string
  slug: string
  title: string
  location: string
  investment_range: {
    min: number
    max: number
  }
  bedrooms: number
  area_m2: number
  status: 'available' | 'in_progress' | 'sold'
  image_url: string
  ai_generated?: boolean
}

const SAMPLE_VILLAS: Villa[] = [
  {
    id: '1',
    slug: 'villa-coral',
    title: 'Villa Coral',
    location: 'Cap Cana',
    investment_range: { min: 850000, max: 950000 },
    bedrooms: 4,
    area_m2: 450,
    status: 'available',
    image_url: '/images/villas/villa-coral.jpg',
    ai_generated: true,
  },
  {
    id: '2',
    slug: 'villa-oceano',
    title: 'Villa Océano',
    location: 'Punta Cana Village',
    investment_range: { min: 1200000, max: 1400000 },
    bedrooms: 5,
    area_m2: 580,
    status: 'available',
    image_url: '/images/villas/villa-oceano.jpg',
    ai_generated: true,
  },
  {
    id: '3',
    slug: 'villa-palma',
    title: 'Villa Palma',
    location: 'Bávaro',
    investment_range: { min: 650000, max: 750000 },
    bedrooms: 3,
    area_m2: 320,
    status: 'in_progress',
    image_url: '/images/villas/villa-palma.jpg',
    ai_generated: true,
  },
  {
    id: '4',
    slug: 'villa-arena',
    title: 'Villa Arena',
    location: 'Cap Cana',
    investment_range: { min: 1800000, max: 2200000 },
    bedrooms: 6,
    area_m2: 720,
    status: 'available',
    image_url: '/images/villas/villa-arena.jpg',
    ai_generated: true,
  },
]

const StatusBadge: FC<{ status: Villa['status'] }> = ({ status }) => {
  const statusConfig = {
    available: { label: 'Disponible', className: 'bg-roiba-verde/10 text-roiba-verde' },
    in_progress: { label: 'En construcción', className: 'bg-roiba-dorado/10 text-roiba-dorado' },
    sold: { label: 'Vendida', className: 'bg-roiba-verde/5 text-roiba-verde/50' },
  }

  const config = statusConfig[status]

  return (
    <span className={cn('badge', config.className)}>
      {config.label}
    </span>
  )
}

interface VillaCardProps {
  villa: Villa
}

const VillaCard: FC<VillaCardProps> = ({ villa }) => {
  return (
    <Link href={`/villas/${villa.slug}`} className="villa-card group">
      {/* Imagen */}
      <div className="villa-card-image bg-roiba-verde/5">
        <Image
          src={villa.image_url}
          alt={villa.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Overlay en hover */}
        <div className="absolute inset-0 bg-roiba-verde/0 group-hover:bg-roiba-verde/20 transition-colors duration-500" />
        
        {/* Badge AI en imagen */}
        {villa.ai_generated && (
          <div className="absolute top-4 left-4">
            <span className="badge bg-white/90 text-roiba-verde/70">
              Visualización
            </span>
          </div>
        )}
        
        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <StatusBadge status={villa.status} />
        </div>
      </div>

      {/* Contenido */}
      <div className="pt-6 space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-subheading font-serif text-roiba-verde group-hover:text-roiba-dorado transition-colors duration-300">
              {villa.title}
            </h3>
            <p className="text-caption text-roiba-verde/60">
              {villa.location}
            </p>
          </div>
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-heading font-serif text-roiba-verde">
            {formatCurrency(villa.investment_range.min)}
          </span>
          <span className="text-caption text-roiba-verde/40">
            — {formatCurrency(villa.investment_range.max)}
          </span>
        </div>

        <div className="flex items-center gap-4 pt-2 text-caption text-roiba-verde/60">
          <span>{villa.bedrooms} habitaciones</span>
          <span className="w-1 h-1 rounded-full bg-roiba-verde/20" />
          <span>{villa.area_m2} m²</span>
        </div>
      </div>
    </Link>
  )
}

export const VillaGrid = (_props: VillaGridProps) => {
  return (
    <section className="py-24 md:py-32 bg-roiba-arena">
      <div className="container-editorial">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
              Colección
            </span>
            <h2 className="text-display-md md:text-display-lg font-serif text-roiba-verde mb-4">
              Proyectos Disponibles
            </h2>
            <p className="text-body-lg text-roiba-verde/70 font-light">
              Cada villa es una comisión única. Diseño personalizado, construcción supervisada, 
              entrega garantizada.
            </p>
          </div>
          
          <Link 
            href="/villas"
            className="inline-flex items-center gap-2 text-caption font-sans font-medium tracking-wider uppercase text-roiba-verde hover:text-roiba-dorado transition-colors"
          >
            Ver todas las villas
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Disclaimer ético */}
        <div className="mb-10 p-4 bg-roiba-verde/[0.03] border-l-2 border-roiba-dorado">
          <p className="text-caption text-roiba-verde/70">
            <span className="font-medium">Nota:</span> Las visualizaciones presentadas son conceptualizaciones arquitectónicas 
            generadas con tecnología de renderizado avanzado. Representan nuestra visión de diseño y pueden 
            variar del resultado final. Consulte los planos oficiales para especificaciones técnicas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
          {SAMPLE_VILLAS.map((villa) => (
            <VillaCard key={villa.id} villa={villa} />
          ))}
        </div>
      </div>
    </section>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
void VillaGrid;
