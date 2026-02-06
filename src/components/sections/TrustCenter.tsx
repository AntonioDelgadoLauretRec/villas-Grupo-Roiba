'use client'

import { FC } from 'react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

const LEGAL_BADGES = [
  {
    title: 'Ley 158-01',
    subtitle: 'Beneficios Confotur',
    description: 'Exención de impuestos sobre transferencias inmobiliarias y otros beneficios fiscales para proyectos turísticos.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Ley 155-17',
    subtitle: 'Compliance AML',
    description: 'Cumplimiento riguroso de normativas contra lavado de activos y financiamiento del terrorismo.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Ley 108-05',
    subtitle: 'Registro Inmobiliario',
    description: 'Garantía de titulación limpia y verificable. Proceso de registro conforme a derecho dominicano.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
        <path d="M10 9H8" />
      </svg>
    ),
  },
  {
    title: 'GDPR / CCPA',
    subtitle: 'Protección de Datos',
    description: 'Sus datos personales protegidos bajo los más estrictos estándares internacionales de privacidad.',
    icon: (
      <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
]

export const TrustCenter: FC = () => {
  return (
    <section className="py-24 md:py-32 bg-roiba-verde text-roiba-arena relative overflow-hidden">
      {/* Patrón decorativo */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 100px,
              rgba(244,235,208,0.5) 100px,
              rgba(244,235,208,0.5) 101px
            ),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 100px,
              rgba(244,235,208,0.5) 100px,
              rgba(244,235,208,0.5) 101px
            )`,
          }}
        />
      </div>

      <div className="container-editorial relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado-light mb-4 block">
            Seguridad Jurídica
          </span>
          <h2 className="text-display-md md:text-display-lg font-serif mb-6">
            Centro de Confianza
          </h2>
          <p className="text-body-lg text-roiba-arena/70 font-light">
            La seguridad jurídica no es una promesa, es un proceso documentado. 
            Operamos bajo el marco legal más estricto del Caribe para proteger su inversión.
          </p>
        </div>

        {/* Grid de badges */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
          {LEGAL_BADGES.map((badge, idx) => (
            <div 
              key={idx}
              className="group p-6 md:p-8 bg-roiba-arena/5 border border-roiba-arena/10 hover:border-roiba-dorado/30 transition-all duration-500"
            >
              <div className="text-roiba-dorado-light mb-6 transition-transform duration-300 group-hover:scale-110">
                {badge.icon}
              </div>
              
              <h3 className="text-subheading font-serif mb-1">
                {badge.title}
              </h3>
              
              <p className="text-caption text-roiba-dorado-light mb-4">
                {badge.subtitle}
              </p>
              
              <p className="text-body text-roiba-arena/60 font-light">
                {badge.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-roiba-arena/10">
          <div>
            <p className="text-body-lg font-serif mb-1">
              Dossier Legal Completo
            </p>
            <p className="text-caption text-roiba-arena/60">
              Documentación detallada sobre el marco jurídico de inversión en República Dominicana.
            </p>
          </div>
          <Link href="/inversores">
            <Button 
              variant="secondary" 
              className="border-roiba-arena/30 text-roiba-arena hover:bg-roiba-arena hover:text-roiba-verde flex-shrink-0"
            >
              <span>Descargar Dossier</span>
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
