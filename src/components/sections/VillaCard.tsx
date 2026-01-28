import { FC } from 'react'
import Link from 'next/link'
import { MapPin, Bed, Bath, Maximize, ArrowRight } from 'lucide-react'
import { Villa } from '@/types'
import { cn } from '@/lib/utils'
import { formatCurrency, formatArea } from '@/lib/utils/format'

interface VillaCardProps {
  villa: Villa
  className?: string
}

const statusConfig = {
  disponible: {
    label: 'Disponible',
    bgColor: 'bg-green-500',
    textColor: 'text-green-50',
  },
  reservada: {
    label: 'Reservada',
    bgColor: 'bg-amber-500',
    textColor: 'text-amber-50',
  },
  vendida: {
    label: 'Vendida',
    bgColor: 'bg-red-500',
    textColor: 'text-red-50',
  },
  'en-construccion': {
    label: 'Pre-venta',
    bgColor: 'bg-blue-500',
    textColor: 'text-blue-50',
  },
}

export const VillaCard: FC<VillaCardProps> = ({ villa, className }) => {
  const status = statusConfig[villa.status]

  return (
    <Link
      href={`/villas/${villa.slug}`}
      className={cn(
        'group block bg-white rounded-2xl overflow-hidden shadow-md',
        'hover:shadow-xl transition-all duration-300',
        'border border-gray-100 hover:border-dorado/30',
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Placeholder image - En producción usará next/image con Sanity */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-oceano/20 to-oceano/40"
          style={{
            backgroundImage: `url('/images/villa-placeholder.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 via-transparent to-transparent" />
        
        {/* Status Badge */}
        <span
          className={cn(
            'absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold',
            status.bgColor,
            status.textColor
          )}
        >
          {status.label}
        </span>

        {/* Featured Badge */}
        {villa.featured && (
          <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-dorado text-carbon">
            ⭐ Destacada
          </span>
        )}

        {/* Price Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-white text-2xl font-bold font-serif">
            {formatCurrency(villa.priceUsd, 'USD')}
          </p>
          {villa.priceEur && (
            <p className="text-white/80 text-sm">
              {formatCurrency(villa.priceEur, 'EUR')}
            </p>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="text-lg font-bold text-carbon font-serif mb-2 group-hover:text-oceano transition-colors">
          {villa.title}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4" />
          <span>{villa.location.zone}</span>
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-oceano" />
            <span>{villa.bedrooms} Hab.</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-oceano" />
            <span>{villa.bathrooms} Baños</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Maximize className="w-4 h-4 text-oceano" />
            <span>{formatArea(villa.areaM2)}</span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-gray-500 text-sm line-clamp-2 mb-4">
          {villa.shortDescription}
        </p>

        {/* CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-oceano font-semibold text-sm group-hover:text-dorado transition-colors">
            Ver detalles
          </span>
          <ArrowRight className="w-4 h-4 text-oceano group-hover:text-dorado group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Link>
  )
}
