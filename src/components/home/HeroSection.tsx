'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const DEFAULT_HERO_IMAGES = [
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90&fit=crop',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=90&fit=crop',
]

// Videos ordered by priority. The component will try them sequentially.
// Mix of local files and free CDN sources (Pexels license / Mixkit / Coverr).
// From the browser, these URLs load correctly — server-side curl may fail.
const VIDEO_SOURCES = [
  // Local videos (if uploaded by the user)
  '/videos/hero-drone.mp4',
  '/videos/hero-bg.mp4',
  // Mixkit – free stock video, no CORS restrictions
  'https://assets.mixkit.co/videos/4816/4816-720.mp4',
  'https://assets.mixkit.co/videos/4883/4883-720.mp4',
  'https://assets.mixkit.co/videos/1171/1171-720.mp4',
  // Pexels – aerial tropical beach / Caribbean
  'https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4',
  // Pexels – luxury pool villa drone
  'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4',
  // Pexels – turquoise beach aerial
  'https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4',
]

export default function HeroSection({ dbImages }: { dbImages?: string[] }) {
  const HERO_IMAGES = dbImages && dbImages.length > 0 ? dbImages : DEFAULT_HERO_IMAGES
  const [imgIdx, setImgIdx] = useState(0)
  const [videoReady, setVideoReady] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const attemptRef = useRef(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const loadedRef = useRef(false)
  const { t } = useLanguage()

  // Try loading videos one at a time via JS — more reliable than <source> elements
  // because we get per-source error feedback and can control the flow.
  // Includes a timeout per attempt: HTTP 403 sometimes doesn't fire onError.
  const tryNext = useCallback(() => {
    if (loadedRef.current) return
    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    const vid = videoRef.current
    if (!vid) return

    attemptRef.current += 1
    const idx = attemptRef.current
    if (idx >= VIDEO_SOURCES.length) {
      setVideoFailed(true)
      return
    }

    vid.src = VIDEO_SOURCES[idx]
    vid.load()

    // Timeout: if this source doesn't fire canplaythrough in 6s, try next
    timeoutRef.current = setTimeout(() => {
      if (!loadedRef.current) tryNext()
    }, 6000)
  }, [])

  // Handle video successfully loaded
  const handleCanPlay = useCallback(() => {
    if (loadedRef.current) return
    loadedRef.current = true
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setVideoReady(true)
    const vid = videoRef.current
    if (vid) {
      vid.play().catch(() => { /* autoplay blocked */ })
    }
  }, [])

  // Handle video error — try next source immediately
  const handleError = useCallback(() => {
    if (loadedRef.current) return
    tryNext()
  }, [tryNext])

  // Start loading the first video on mount
  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    const idx = 0
    attemptRef.current = idx
    vid.src = VIDEO_SOURCES[idx]
    vid.load()

    // Timeout for the first attempt
    timeoutRef.current = setTimeout(() => {
      if (!loadedRef.current) tryNext()
    }, 6000)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [tryNext])

  // Image carousel fallback
  useEffect(() => {
    if (videoReady) return
    const timer = setInterval(() => setImgIdx((p) => (p + 1) % HERO_IMAGES.length), 6000)
    return () => clearInterval(timer)
  }, [videoReady, HERO_IMAGES.length])

  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-roiba-verde overflow-hidden">
      {/* Background — Video */}
      {!videoFailed && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlayThrough={handleCanPlay}
          onError={handleError}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-1000 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
        />
      )}

      {/* Background — Image Slideshow (visible until video loads, or permanently if video fails) */}
      {!videoReady &&
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
        ))}

      {/* Overlay */}
      <div className={`absolute inset-0 z-[1] ${videoReady ? 'bg-roiba-verde/35' : 'bg-roiba-verde/50'}`} />

      {/* Content — Split layout */}
      <div className="relative z-[2] w-full max-w-7xl mx-auto px-6 lg:px-16
                       flex flex-col lg:flex-row items-center min-h-[100dvh] pt-24 pb-16">

        {/* Columna izquierda — texto */}
        <div className="lg:w-1/2 lg:pr-16 text-center lg:text-left">
          {/* eyebrow */}
          <p className="font-sans text-[9px] font-medium tracking-[0.45em] uppercase
                         text-roiba-dorado mb-8 animate-fade-in [animation-delay:0.3s] opacity-0">
            {t.hero.eyebrow}
          </p>

          {/* headline con reveal por líneas */}
          <h1 className="font-serif text-[clamp(44px,5.5vw,76px)] font-light text-white
                          leading-[1.06] tracking-tight mb-0">
            <span className="block overflow-hidden">
              <span className="block animate-fade-up [animation-delay:0.5s] opacity-0">
                {t.hero.title1}
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-fade-up [animation-delay:0.7s] opacity-0">
                <span className="italic text-roiba-dorado-light font-light">
                  {t.hero.titleAccent}
                </span>
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-fade-up [animation-delay:0.9s] opacity-0">
                {t.hero.title2}
              </span>
            </span>
          </h1>

          {/* línea dorada */}
          <div className="w-16 h-px bg-roiba-dorado my-8 mx-auto lg:mx-0
                           animate-line-grow [animation-delay:1.1s] scale-x-0 origin-left" />

          {/* subtítulo */}
          <p className="font-sans text-[14px] font-light text-white/65
                         max-w-md mb-10 leading-[1.8] tracking-wide mx-auto lg:mx-0
                        animate-fade-in [animation-delay:1.2s] opacity-0">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start
                           animate-fade-up [animation-delay:1.4s] opacity-0">
            {/* Botón primario */}
            <a href="/servicios" className="
              group relative overflow-hidden
              font-sans text-[10px] font-semibold tracking-[0.18em] uppercase
              px-10 py-4 bg-roiba-dorado text-roiba-verde
              hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,169,110,0.30)]
              transition-all duration-300
            ">
              <span className="relative z-10">{t.hero.cta}</span>
              <span className="absolute inset-0 bg-roiba-dorado-light
                                translate-x-[-100%] group-hover:translate-x-0
                                transition-transform duration-300 ease-out" />
            </a>

            {/* Botón secundario ghost */}
            <a href="/contacto" className="
              font-sans text-[10px] font-medium tracking-[0.18em] uppercase
              px-10 py-4 bg-transparent text-white/75
              border border-white/20
              hover:border-roiba-dorado hover:text-roiba-dorado-light
              hover:bg-roiba-dorado/5
              transition-all duration-300
            ">
              {t.hero.ctaSecondary}
            </a>
          </div>

          {/* Stats row */}
          <div className="flex gap-10 mt-12 pt-8
                           border-t border-white/10
                          animate-fade-in [animation-delay:1.6s] opacity-0
                          justify-center lg:justify-start">
            <div>
              <p className="font-serif text-[32px] font-light text-white leading-none tracking-tight">
                15+
              </p>
              <p className="font-sans text-[8px] tracking-[0.28em] uppercase text-white/40 mt-2">
                Proyectos
              </p>
            </div>
            <div>
              <p className="font-serif text-[32px] font-light text-white leading-none tracking-tight">
                98%
              </p>
              <p className="font-sans text-[8px] tracking-[0.28em] uppercase text-white/40 mt-2">
                Satisfacción
              </p>
            </div>
            <div>
              <p className="font-serif text-[32px] font-light
                             text-[#F4EBD0] leading-none tracking-tight">
                0
              </p>
              <p className="font-sans text-[8px] tracking-[0.28em] uppercase text-white/40 mt-2">
                Retrasos
              </p>
              <p className="font-sans text-[8px] tracking-[0.15em] text-roiba-dorado mt-1 opacity-70">
                en entrega
              </p>
            </div>
          </div>
        </div>

        {/* Columna derecha — vacía en mobile, decorativa en desktop */}
        <div className="hidden lg:block lg:w-1/2" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-opacity z-[2]">
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/35">{t.hero.scroll}</span>
        <div className="w-px h-[30px] bg-gradient-to-b from-roiba-dorado/40 to-transparent" />
      </div>
    </section>
  )
}
