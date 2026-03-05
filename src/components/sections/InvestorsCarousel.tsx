'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

const DEFAULT_SLIDES = [
  {
    title: 'Destino Turístico Líder',
    description: 'Punta Cana recibe más de 8 millones de visitantes anuales, con vuelos directos desde las principales capitales de Europa y América. Es el destino más demandado del Caribe.',
    image: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=3840&q=90&fit=crop',
  },
  {
    title: 'Seguridad Jurídica para el Inversor',
    description: 'República Dominicana cuenta con un marco legal sólido que protege la propiedad privada extranjera. Proceso de compra transparente con títulos de propiedad certificados y registro catastral fiable.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=3840&q=90&fit=crop',
  },
  {
    title: 'Rentabilidad Demostrada',
    description: 'Rentabilidades brutas del 6-10% anual en alquiler vacacional. Revalorización sostenida del 8-12% anual en las zonas premium.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=3840&q=90&fit=crop',
  },
  {
    title: 'Infraestructura de Primer Nivel',
    description: 'Cap Cana, Bávaro, Cocotal: comunidades con seguridad 24h, marina, campos de golf y servicios de lujo integrados.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=3840&q=90&fit=crop',
  },
  {
    title: 'Clima y Estilo de Vida',
    description: '350 días de sol al año, playas de arena blanca y una comunidad internacional creciente. El Caribe más accesible para inversores europeos.',
    image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=3840&q=90&fit=crop',
  },
]

interface Slide {
  title: string
  description: string
  image: string
}

export default function InvestorsCarousel({ slides }: { slides?: Slide[] }) {
  const data = slides && slides.length > 0 ? slides : DEFAULT_SLIDES
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = useCallback(() => setCurrent(c => (c + 1) % data.length), [data.length])
  const prev = useCallback(() => setCurrent(c => (c - 1 + data.length) % data.length), [data.length])

  useEffect(() => {
    if (paused) return
    intervalRef.current = setInterval(next, 5000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [paused, next])

  return (
    <section className="py-12 md:py-16 bg-roiba-arena-light">
      <div className="px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em] block mb-3">
              ¿Por qué Punta Cana?
            </span>
            <h2 className="text-[clamp(28px,4vw,48px)] font-serif text-roiba-verde mb-3">
              Razones para <span className="italic text-roiba-dorado">invertir</span>
            </h2>
            <div className="w-12 h-px bg-roiba-dorado mx-auto" />
          </div>

          {/* Carousel */}
          <div
            className="relative overflow-hidden rounded-sm"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div className="relative aspect-[16/9] md:aspect-[21/9]">
              {data.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-700 ${current === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority={idx === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-roiba-verde/80 via-roiba-verde/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-8 md:px-16">
                    <div className="max-w-lg">
                      <h3 className="font-serif text-2xl md:text-3xl text-white mb-4">{slide.title}</h3>
                      <p className="text-sm md:text-body text-white/70 leading-relaxed">{slide.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-colors"
              aria-label="Anterior"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 4l-6 6 6 6"/></svg>
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full transition-colors"
              aria-label="Siguiente"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 4l6 6-6 6"/></svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {data.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${current === idx ? 'bg-roiba-dorado w-6' : 'bg-white/40 hover:bg-white/60'}`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
