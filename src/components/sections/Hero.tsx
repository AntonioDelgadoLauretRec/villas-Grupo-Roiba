'use client'

import { FC, useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export const Hero: FC = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-12 md:pb-20 overflow-hidden">
      {/* Background con overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-roiba-verde"
          style={{
            backgroundImage: `url('/images/hero-villa.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde via-roiba-verde/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-roiba-verde/80 via-transparent to-transparent" />
      </div>

      {/* Contenido */}
      <div className="container-editorial relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end">
          {/* Columna izquierda - Contenido principal */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div 
              className={`flex items-center gap-4 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              <span className="w-12 h-px bg-roiba-dorado" />
              <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-arena/80">
                Punta Cana, República Dominicana
              </span>
            </div>

            {/* Headline */}
            <h1 
              className={`font-serif font-normal text-roiba-arena transition-all duration-1000 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.4s' }}
            >
              <span className="block text-display-lg leading-[0.95]">
                Inversión
              </span>
              <span className="block text-display-xl leading-[0.95] text-roiba-dorado-light">
                Patrimonial
              </span>
              <span className="block text-display-lg leading-[0.95] mt-2">
                en el Caribe
              </span>
            </h1>

            {/* Subtítulo */}
            <p 
              className={`text-body-lg text-roiba-arena/80 max-w-md font-light transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              Construcción boutique de villas. Sin intermediarios. 
              Control total del proceso. Seguridad jurídica garantizada.
            </p>

            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '0.8s' }}
            >
              <Link href="/contacto">
                <Button variant="primary" size="lg">
                  <span>Solicitar Análisis</span>
                </Button>
              </Link>
              <Link href="/proceso">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="border-roiba-arena/30 text-roiba-arena hover:bg-roiba-arena hover:text-roiba-verde"
                >
                  <span>Ver Proceso</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Columna derecha - Stats o filtro */}
          <div 
            className={`hidden lg:block transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '1s' }}
          >
            <div className="bg-roiba-arena/5 backdrop-blur-md border border-roiba-arena/10 p-8 md:p-10">
              <p className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-arena/60 mb-6">
                Inversión desde
              </p>
              <p className="text-display-md font-serif text-roiba-dorado-light mb-8">
                $500,000 USD
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Terreno + Diseño + Construcción',
                  'Supervisión 24/7 vía Dashboard',
                  'Rentabilidad proyectada 8-12%',
                  'Beneficios fiscales Confotur',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-roiba-arena/80 text-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-roiba-dorado mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-roiba-arena/10">
                <p className="text-caption text-roiba-arena/60">
                  Tickets cualificados &gt;$500K USD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '1.2s' }}
      >
        <span className="text-micro text-roiba-arena/40 tracking-widest">SCROLL</span>
        <div className="w-px h-8 bg-gradient-to-b from-roiba-arena/40 to-transparent" />
      </div>
    </section>
  )
}
