'use client'

import { type FC, type ReactNode } from 'react'
import { cn, formatCurrency, formatArea } from '@/lib/utils'

/* ===== CARD BASE ===== */
export interface CardProps {
  children: ReactNode
  variant?: 'light' | 'dark'
  className?: string
  hover?: boolean
}

const Card: FC<CardProps> = ({ children, variant = 'light', className, hover = true }) => {
  const variants = {
    light: 'bg-roiba-arena-light text-roiba-verde',
    dark: 'bg-roiba-verde text-roiba-arena',
  }

  return (
    <div
      className={cn(
        'rounded-sm shadow-card overflow-hidden',
        'transition-all duration-300 ease-out',
        hover && 'hover:shadow-luxury hover:-translate-y-1',
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  )
}

/* ===== VILLA CARD ===== */
export interface Villa {
  id: string
  slug: string
  title: string
  location: string
  price_usd: number
  area_sqm: number
  bedrooms: number
  bathrooms: number
  image_url: string
  status: 'available' | 'reserved' | 'sold'
  is_render?: boolean
}

export interface VillaCardProps {
  villa: Villa
  onSelect?: (slug: string) => void
  priority?: boolean
}

const VillaCard: FC<VillaCardProps> = ({ villa, onSelect, priority = false }) => {
  const statusLabels = {
    available: { text: 'Disponible', color: 'bg-green-500' },
    reserved: { text: 'Reservada', color: 'bg-roiba-dorado' },
    sold: { text: 'Vendida', color: 'bg-red-500' },
  }

  const status = statusLabels[villa.status]

  return (
    <Card className="group cursor-pointer" hover>
      {/* Image Container */}
      <div className="relative aspect-villa overflow-hidden">
        <img
          src={villa.image_url}
          alt={villa.title}
          loading={priority ? 'eager' : 'lazy'}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/60 via-transparent to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={cn(
              'inline-flex items-center px-3 py-1 text-xs font-semibold text-white rounded-sm',
              status.color
            )}
          >
            {status.text}
          </span>
        </div>

        {/* Render Disclaimer */}
        {villa.is_render && (
          <div className="absolute bottom-4 right-4">
            <span className="text-[10px] text-white/70 bg-black/40 px-2 py-1 rounded">
              Visualización conceptual
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="font-serif text-xl font-medium text-roiba-verde group-hover:text-roiba-dorado-oscuro transition-colors">
              {villa.title}
            </h3>
            <p className="text-sm text-roiba-verde/60 mt-1">
              {villa.location}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-roiba-verde/70 mb-4">
          <span className="flex items-center gap-1">
            <AreaIcon className="w-4 h-4" />
            {formatArea(villa.area_sqm)}
          </span>
          <span className="flex items-center gap-1">
            <BedIcon className="w-4 h-4" />
            {villa.bedrooms}
          </span>
          <span className="flex items-center gap-1">
            <BathIcon className="w-4 h-4" />
            {villa.bathrooms}
          </span>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-roiba-verde/10">
          <div>
            <p className="text-xs text-roiba-verde/50 uppercase tracking-wider">Desde</p>
            <p className="text-xl font-semibold text-roiba-dorado">
              {formatCurrency(villa.price_usd)}
            </p>
          </div>
          <button
            onClick={() => onSelect?.(villa.slug)}
            className="text-sm font-medium text-roiba-dorado hover:text-roiba-dorado-oscuro transition-colors"
          >
            Ver Detalles →
          </button>
        </div>
      </div>
    </Card>
  )
}

/* ===== FEATURE CARD ===== */
export interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  variant?: 'light' | 'dark'
}

const FeatureCard: FC<FeatureCardProps> = ({ icon, title, description, variant = 'light' }) => {
  return (
    <Card variant={variant} hover={false} className="p-6 text-center">
      <div
        className={cn(
          'w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center',
          variant === 'dark' ? 'bg-roiba-dorado/20' : 'bg-roiba-dorado/10'
        )}
      >
        <span className="text-roiba-dorado">{icon}</span>
      </div>
      <h4 className="font-serif text-lg font-medium mb-2">{title}</h4>
      <p
        className={cn(
          'text-sm',
          variant === 'dark' ? 'text-roiba-arena/70' : 'text-roiba-verde/70'
        )}
      >
        {description}
      </p>
    </Card>
  )
}

/* ===== ICONS ===== */
const AreaIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 3v18" />
  </svg>
)

const BedIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" />
    <path d="M3 7h18v3H3z" />
    <path d="M7 10V7M17 10V7" />
  </svg>
)

const BathIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 12h16a1 1 0 011 1v3a4 4 0 01-4 4H7a4 4 0 01-4-4v-3a1 1 0 011-1z" />
    <path d="M6 12V5a2 2 0 012-2h1" />
  </svg>
)

export { Card, VillaCard, FeatureCard }
