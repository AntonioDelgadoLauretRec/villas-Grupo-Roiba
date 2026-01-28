'use client'

import { type FC, useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui'
import { cn } from '@/lib/utils'

export interface HeroProps {
  locale?: 'es' | 'en'
}

const content = {
  es: {
    headline: 'Inversión Patrimonial y Construcción Boutique en Punta Cana',
    subheadline: 'Rentabilidad sólida, seguridad jurídica absoluta y diseño personalizado. Sin intermediarios, sin sorpresas.',
    ctaPrimary: 'Iniciar Proyecto Personalizado',
    ctaSecondary: 'Ver Colección de Villas',
    filterQuestion: '¿Ya dispones de terreno?',
    filterYes: 'Sí, gestionar construcción',
    filterNo: 'No, buscar inversión completa',
  },
  en: {
    headline: 'Boutique Construction & Legacy Investment in Punta Cana',
    subheadline: 'Solid returns, absolute legal security, and custom design. No middlemen, no surprises.',
    ctaPrimary: 'Start Custom Project',
    ctaSecondary: 'View Villa Collection',
    filterQuestion: 'Do you own land?',
    filterYes: 'Yes, manage construction',
    filterNo: 'No, full investment search',
  },
}

export const Hero: FC<HeroProps> = ({ locale = 'es' }) => {
  const t = content[locale]
  const [selectedFilter, setSelectedFilter] = useState<'yes' | 'no' | null>(null)

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Video background - replace src with actual video */}
        <div className="absolute inset-0 bg-roiba-verde">
          {/* Placeholder gradient - will be replaced with video */}
          <div className="absolute inset-0 bg-gradient-verde opacity-90" />
          
          {/* Decorative pattern overlay */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F4EBD0' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-roiba-verde/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-wide text-center px-4">
        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-roiba-dorado/20 rounded-full animate-fade-in">
            <span className="w-2 h-2 bg-roiba-dorado rounded-full animate-pulse" />
            <span className="text-sm text-roiba-arena font-medium tracking-wide">
              {locale === 'es' ? 'Cupo limitado 2026' : 'Limited availability 2026'}
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-roiba-arena leading-tight mb-6 animate-fade-up">
            {t.headline.split(' ').map((word, i) => (
              <span
                key={i}
                className={cn(
                  'inline-block',
                  word === 'Boutique' || word === 'Legacy' ? 'text-roiba-dorado' : ''
                )}
              >
                {word}{' '}
              </span>
            ))}
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-roiba-arena/80 max-w-2xl mx-auto mb-10 animate-fade-up animate-delay-100">
            {t.subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up animate-delay-200">
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                {t.ctaPrimary}
              </Button>
            </Link>
            <Link href="/coleccion">
              <Button variant="ghost" size="lg">
                {t.ctaSecondary}
              </Button>
            </Link>
          </div>

          {/* Land Filter - Binary Choice */}
          <div className="animate-fade-up animate-delay-300">
            <p className="text-roiba-arena/60 text-sm mb-4 uppercase tracking-wider">
              {t.filterQuestion}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/contacto?has_land=true">
                <button
                  className={cn(
                    'group relative px-6 py-4 min-w-[220px] rounded-sm border-2 transition-all duration-300',
                    selectedFilter === 'yes'
                      ? 'border-roiba-dorado bg-roiba-dorado/20'
                      : 'border-roiba-arena/30 hover:border-roiba-dorado/50 hover:bg-roiba-verde-light'
                  )}
                  onClick={() => setSelectedFilter('yes')}
                >
                  <span className="flex items-center justify-center gap-3">
                    <CheckIcon className={cn(
                      'w-5 h-5 transition-colors',
                      selectedFilter === 'yes' ? 'text-roiba-dorado' : 'text-roiba-arena/50 group-hover:text-roiba-dorado'
                    )} />
                    <span className="text-roiba-arena font-medium">{t.filterYes}</span>
                  </span>
                </button>
              </Link>

              <Link href="/contacto?has_land=false">
                <button
                  className={cn(
                    'group relative px-6 py-4 min-w-[220px] rounded-sm border-2 transition-all duration-300',
                    selectedFilter === 'no'
                      ? 'border-roiba-dorado bg-roiba-dorado/20'
                      : 'border-roiba-arena/30 hover:border-roiba-dorado/50 hover:bg-roiba-verde-light'
                  )}
                  onClick={() => setSelectedFilter('no')}
                >
                  <span className="flex items-center justify-center gap-3">
                    <SearchIcon className={cn(
                      'w-5 h-5 transition-colors',
                      selectedFilter === 'no' ? 'text-roiba-dorado' : 'text-roiba-arena/50 group-hover:text-roiba-dorado'
                    )} />
                    <span className="text-roiba-arena font-medium">{t.filterNo}</span>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="w-8 h-8 text-roiba-arena/50" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-roiba-dorado to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1 bg-gradient-to-r from-roiba-dorado to-transparent" />
    </section>
  )
}

/* ===== ICONS ===== */
const CheckIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

const SearchIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
  </svg>
)

const ChevronDownIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export default Hero
