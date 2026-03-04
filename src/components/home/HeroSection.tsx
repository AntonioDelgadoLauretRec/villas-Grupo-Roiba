'use client'

import { useState, useEffect, useRef } from 'react'
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
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Check for hero-drone.mp4 first, then hero-bg.mp4 as fallback
    const checkVideo = (src: string) =>
      new Promise<boolean>((resolve) => {
        const vid = document.createElement('video')
        vid.src = src
        vid.onloadeddata = () => resolve(true)
        vid.onerror = () => resolve(false)
      })

    checkVideo('/videos/hero-drone.mp4').then((found) => {
      if (found) {
        setHasVideo(true)
      } else {
        checkVideo('/videos/hero-bg.mp4').then((found2) => {
          if (found2) setHasVideo(true)
        })
      }
    })
  }, [])

  useEffect(() => {
    if (hasVideo) return
    const timer = setInterval(() => setImgIdx((p) => (p + 1) % HERO_IMAGES.length), 6000)
    return () => clearInterval(timer)
  }, [hasVideo, HERO_IMAGES.length])

  const videoSrc = '/videos/hero-drone.mp4'

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-roiba-verde overflow-hidden">
      {/* Background — Video or Image Slideshow */}
      {hasVideo ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={videoSrc} type="video/mp4" />
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

      {/* Overlay — 40% for video, darker for images */}
      <div className={`absolute inset-0 z-[1] ${hasVideo ? 'bg-roiba-verde/40' : 'bg-roiba-verde/60'}`} />

      {/* Content — NO logo superpuesto */}
      <div className="text-center z-[2] relative px-6 max-w-[900px] mx-auto">
        <p className="font-sans text-[11px] font-medium tracking-[0.4em] uppercase text-roiba-dorado mb-8 animate-fade-in [animation-delay:0.3s]">
          Ingeniería y Construcción en el Caribe
        </p>

        <h1 className="font-serif text-[clamp(32px,5.5vw,68px)] font-light text-white leading-[1.1] tracking-tight animate-fade-up [animation-delay:0.5s]">
          Servicios técnicos integrales{' '}
          <span className="italic text-roiba-dorado-light">para proyectos</span>
          <br />residenciales de alta gama
        </h1>

        <div className="w-[60px] h-px bg-roiba-dorado mx-auto my-8 animate-line-grow [animation-delay:0.8s]" />

        <p className="font-sans text-[15px] font-light text-white/80 max-w-[580px] mx-auto mb-10 leading-[1.7] tracking-wide animate-fade-in [animation-delay:1s]">
          Dirección técnica, supervisión de obra y construcción llave en mano.
          <br />
          Del concepto al mantenimiento, con un equipo que responde directamente ante usted.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center animate-fade-up [animation-delay:1.2s]">
          <a
            href="/servicios"
            className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase px-10 py-4 bg-roiba-dorado text-roiba-verde hover:bg-roiba-dorado-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,169,110,0.25)] transition-all duration-300"
          >
            Explorar servicios
          </a>
          <a
            href="/contacto"
            className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase px-10 py-4 bg-transparent text-white border border-white/25 hover:border-roiba-dorado hover:text-roiba-dorado-light transition-all duration-300"
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
