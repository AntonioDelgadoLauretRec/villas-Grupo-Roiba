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

const VIDEO_SOURCES = [
  '/videos/hero-drone.mp4',
  '/videos/hero-bg.mp4',
  'https://assets.mixkit.co/videos/4816/4816-720.mp4',
  'https://assets.mixkit.co/videos/4883/4883-720.mp4',
  'https://assets.mixkit.co/videos/1171/1171-720.mp4',
  'https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4',
]

export default function HeroSection({ dbImages }: { dbImages?: string[] }) {
  const HERO_IMAGES = dbImages && dbImages.length > 0 ? dbImages : DEFAULT_HERO_IMAGES
  const [imgIdx, setImgIdx] = useState(0)
  const [videoReady, setVideoReady] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const [showSubtitle, setShowSubtitle] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const attemptRef = useRef(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const loadedRef = useRef(false)
  const { t } = useLanguage()

  // Show subtitle with scroll or after delay
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) setShowSubtitle(true)
    }
    const timer = setTimeout(() => setShowSubtitle(true), 2500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [])

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

    timeoutRef.current = setTimeout(() => {
      if (!loadedRef.current) tryNext()
    }, 6000)
  }, [])

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

  const handleError = useCallback(() => {
    if (loadedRef.current) return
    tryNext()
  }, [tryNext])

  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    const idx = 0
    attemptRef.current = idx
    vid.src = VIDEO_SOURCES[idx]
    vid.load()

    timeoutRef.current = setTimeout(() => {
      if (!loadedRef.current) tryNext()
    }, 6000)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [tryNext])

  // Image carousel — crossfade 800ms
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
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-[800ms] ease-in-out ${videoReady ? 'opacity-100' : 'opacity-0'}`}
        />
      )}

      {/* Background — Image Slideshow (crossfade 800ms) */}
      {!videoReady &&
        HERO_IMAGES.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-[800ms] ease-in-out z-0 ${imgIdx === i ? 'opacity-100' : 'opacity-0'}`}
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

      {/* Content */}
      <div className="relative z-[2] w-full max-w-7xl mx-auto px-6 lg:px-16
                       flex flex-col lg:flex-row items-center min-h-[100dvh] pt-24 pb-16">

        {/* Left column — text */}
        <div className="lg:w-1/2 lg:pr-16 text-center lg:text-left">
          {/* Main headline — slide from left, single line */}
          <h1 className="font-display text-[clamp(32px,5.5vw,52px)] font-bold text-white
                          leading-[1.1] tracking-tight mb-0 whitespace-nowrap
                          animate-slide-in-left [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]">
            {t.hero.title}
          </h1>

          {/* Gold line */}
          <div className="w-16 h-px bg-roiba-dorado my-8 mx-auto lg:mx-0
                           animate-line-grow [animation-delay:0.8s] scale-x-0 origin-left" />

          {/* Subtitle — appears with scroll/delay */}
          <div className={`transition-all duration-700 ease-out ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <p className="font-sans text-[clamp(14px,1.5vw,18px)] font-light text-white/80
                           max-w-lg mb-10 leading-[1.7] tracking-wide mx-auto lg:mx-0
                           line-clamp-2">
              {t.hero.subtitle}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start
                           animate-fade-up [animation-delay:1.4s] opacity-0">
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
        </div>

        {/* Right column — decorative on desktop */}
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
