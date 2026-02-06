'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    image: '/images/hero-villa-1.webp',
    alt: 'Villa de lujo en Punta Cana',
  },
  {
    image: '/images/hero-villa-2.webp',
    alt: 'Construcción residencial de alta gama',
  },
  {
    image: '/images/hero-villa-3.webp',
    alt: 'Proyecto arquitectónico exclusivo',
  },
]

export function Hero() {
  const [current, setCurrent] = useState(0)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#122620]/80 via-[#122620]/60 to-[#122620]/80" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="text-[#B68D40] uppercase tracking-[0.3em] text-sm md:text-base font-medium mb-6 animate-fade-in">
          Grupo Roiba — Desde 1986
        </p>

        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#F4EBD0] leading-tight max-w-5xl mb-6">
          Ingeniería aplicada a la{' '}
          <span className="text-[#FFCC53]">obra residencial</span>
        </h1>

        <p className="text-[#F4EBD0]/80 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          Diseño, construcción y gestión integral de proyectos residenciales de
          alta gama en España y el Caribe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/servicios"
            className="px-8 py-4 bg-[#FFCC53] text-[#122620] font-semibold rounded-lg hover:bg-[#B68D40] transition-all duration-300 text-base"
          >
            Nuestros Servicios
          </Link>
          <Link
            href="/contacto"
            className="px-8 py-4 border-2 border-[#F4EBD0]/40 text-[#F4EBD0] font-semibold rounded-lg hover:bg-[#F4EBD0]/10 transition-all duration-300 text-base"
          >
            Contactar
          </Link>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === current
                  ? 'bg-[#FFCC53] w-8'
                  : 'bg-[#F4EBD0]/40 hover:bg-[#F4EBD0]/60'
              }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
