'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const DEFAULT_HERO_IMAGES = [
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90&fit=crop',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=90&fit=crop',
]

export default function HeroSection({ dbImages }: { dbImages?: string[] }) {
  const HERO_IMAGES = dbImages && dbImages.length > 0 ? dbImages : DEFAULT_HERO_IMAGES
  const [imgIdx, setImgIdx] = useState(0)
  const [hasVideo, setHasVideo] = useState(false)

  useEffect(() => {
    const vid = document.createElement('video')
    vid.src = '/videos/hero-bg.mp4'
    vid.onloadeddata = () => setHasVideo(true)
    vid.onerror = () => setHasVideo(false)
  }, [])

  useEffect(() => {
    if (hasVideo) return
    const timer = setInterval(() => setImgIdx((p) => (p + 1) % HERO_IMAGES.length), 6000)
    return () => clearInterval(timer)
  }, [hasVideo])

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-roiba-verde overflow-hidden">
      {/* Background */}
      {hasVideo ? (
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      ) : (
        HERO_IMAGES.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[1500ms] z-0 ${imgIdx === i ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={src}
              alt=""
              fill
              className={`object-cover ${imgIdx === i ? 'animate-ken-burns' : ''}`}
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-roiba-verde/80 z-[1]" />

      {/* Geometric accents */}
      <div className="absolute top-[10%] right-[8%] w-[300px] h-[300px] border border-roiba-dorado/[0.08] rounded-full animate-float z-[1]" />
      <div className="absolute bottom-[15%] left-[5%] w-[200px] h-[200px] border border-roiba-dorado/[0.06] rotate-45 animate-float-slow z-[1]" />
      <div className="absolute top-[30%] left-[15%] w-px h-[120px] bg-gradient-to-b from-transparent via-roiba-dorado/20 to-transparent z-[1]" />

      {/* Logo on white card */}
      <div className="z-[2] relative mb-10 animate-fade-in [animation-delay:0.1s] flex justify-center">
        <div className="bg-white/95 backdrop-blur-sm px-8 py-5 rounded-sm shadow-[0_8px_32px_rgba(0,0,0,0.15)]">
          <Image
            src="/images/LOGO_GRUPOROIBA_path1-5-9_Color.svg"
            alt="Grupo Roiba"
            width={180}
            height={98}
            className="h-12 md:h-14 w-auto"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="text-center z-[2] relative px-6 animate-fade-up">
        <p className="font-sans text-[11px] font-medium tracking-[0.4em] uppercase text-roiba-dorado mb-8 animate-fade-in [animation-delay:0.3s]">
          Ingeniería y Construcción en el Caribe
        </p>

        <h1 className="font-serif text-[clamp(36px,5.5vw,72px)] font-light text-white leading-[1.1] tracking-tight max-w-[900px] mx-auto">
          Servicios técnicos integrales{' '}
          <span className="italic text-roiba-dorado-light">para proyectos</span>
          <br />residenciales de alta gama
        </h1>

        <div className="w-[60px] h-px bg-roiba-dorado mx-auto my-9 animate-reveal-line" />

        <p className="font-sans text-[15px] font-light text-white/80 max-w-[580px] mx-auto mb-12 leading-[1.7] tracking-wide animate-fade-in [animation-delay:1s]">
          Dirección técnica, supervisión de obra y construcción llave en mano.
          <br />
          Del concepto al mantenimiento, con un equipo que responde directamente ante usted.
        </p>

        <div className="flex gap-5 justify-center animate-fade-up [animation-delay:1.2s]">
          <a
            href="/servicios"
            className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase px-10 py-4 bg-roiba-dorado text-roiba-verde hover:bg-roiba-dorado-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,169,110,0.25)] transition-all duration-400"
          >
            Explorar servicios
          </a>
          <a
            href="/contacto"
            className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase px-10 py-4 bg-transparent text-white border border-white/25 hover:border-roiba-dorado hover:text-roiba-dorado-light transition-all duration-400"
          >
            Hablar con el equipo
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-opacity z-[2]">
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
        <div className="w-px h-[30px] bg-gradient-to-b from-roiba-dorado/40 to-transparent" />
      </div>
    </section>
  )
}
