'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const DEFAULT_HERO_IMAGES = [
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=90&fit=crop',
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=90&fit=crop',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=90&fit=crop',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=90&fit=crop',
]

// Free-to-use video candidates – try local first, then remote CDNs.
// Each remote entry lists several resolution variants since Pexels/Pixabay
// file names are not 100% predictable.
const LOCAL_VIDEOS = ['/videos/hero-drone.mp4', '/videos/hero-bg.mp4']

const REMOTE_VIDEOS = [
  // Pexels – aerial tropical beach / Caribbean
  'https://videos.pexels.com/video-files/1093662/1093662-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/1093662/1093662-uhd_2560_1440_30fps.mp4',
  'https://videos.pexels.com/video-files/1093662/1093662-uhd_2560_1440_25fps.mp4',
  // Pexels – luxury pool villa drone
  'https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4',
  'https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_25fps.mp4',
  // Pexels – turquoise beach aerial
  'https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_30fps.mp4',
  'https://videos.pexels.com/video-files/2169880/2169880-uhd_2560_1440_25fps.mp4',
  // Pexels – Maldives island drone
  'https://videos.pexels.com/video-files/4010941/4010941-hd_1920_1080_25fps.mp4',
  'https://videos.pexels.com/video-files/4010941/4010941-uhd_2560_1440_25fps.mp4',
  // Pexels – beach aerial drone
  'https://videos.pexels.com/video-files/854218/854218-hd_1920_1080_30fps.mp4',
  'https://videos.pexels.com/video-files/854218/854218-hd_1920_1080_25fps.mp4',
]

export default function HeroSection({ dbImages }: { dbImages?: string[] }) {
  const HERO_IMAGES = dbImages && dbImages.length > 0 ? dbImages : DEFAULT_HERO_IMAGES
  const [imgIdx, setImgIdx] = useState(0)
  const [videoReady, setVideoReady] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)
  const [currentVideoIdx, setCurrentVideoIdx] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const allVideos = [...LOCAL_VIDEOS, ...REMOTE_VIDEOS]
  const { t } = useLanguage()

  // Try loading the next video source when one fails
  const tryNextVideo = () => {
    const next = currentVideoIdx + 1
    if (next < allVideos.length) {
      setCurrentVideoIdx(next)
    } else {
      setVideoFailed(true)
    }
  }

  // When video source changes, update the video element
  useEffect(() => {
    if (videoFailed || videoReady) return
    const vid = videoRef.current
    if (!vid) return

    vid.src = allVideos[currentVideoIdx]
    vid.load()
  }, [currentVideoIdx, videoFailed, videoReady])

  // Image carousel fallback
  useEffect(() => {
    if (videoReady) return
    const timer = setInterval(() => setImgIdx((p) => (p + 1) % HERO_IMAGES.length), 6000)
    return () => clearInterval(timer)
  }, [videoReady, HERO_IMAGES.length])

  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center items-center bg-roiba-verde overflow-hidden">
      {/* Background — Video (always rendered, hidden until ready) */}
      {!videoFailed && (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onCanPlayThrough={() => setVideoReady(true)}
          onError={tryNextVideo}
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
      <div className={`absolute inset-0 z-[1] ${videoReady ? 'bg-roiba-verde/40' : 'bg-roiba-verde/60'}`} />

      {/* Content */}
      <div className="text-center z-[2] relative px-6 max-w-[900px] mx-auto">
        <p className="font-sans text-[11px] font-medium tracking-[0.4em] uppercase text-roiba-dorado mb-8 animate-fade-in [animation-delay:0.3s]">
          {t.hero.eyebrow}
        </p>

        <h1 className="font-serif text-[clamp(32px,5.5vw,68px)] font-light text-white leading-[1.1] tracking-tight animate-fade-up [animation-delay:0.5s]">
          {t.hero.title1}{' '}
          <span className="italic text-roiba-dorado-light">{t.hero.titleAccent}</span>
          <br />{t.hero.title2}
        </h1>

        <div className="w-[60px] h-px bg-roiba-dorado mx-auto my-8 animate-line-grow [animation-delay:0.8s]" />

        <p className="font-sans text-[15px] font-light text-white/80 max-w-[580px] mx-auto mb-10 leading-[1.7] tracking-wide animate-fade-in [animation-delay:1s]">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center animate-fade-up [animation-delay:1.2s]">
          <a
            href="/servicios"
            className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase px-10 py-4 bg-roiba-dorado text-roiba-verde hover:bg-roiba-dorado-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(201,169,110,0.25)] transition-all duration-300"
          >
            {t.hero.cta}
          </a>
          <a
            href="/contacto"
            className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase px-10 py-4 bg-transparent text-white border border-white/25 hover:border-roiba-dorado hover:text-roiba-dorado-light transition-all duration-300"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse-opacity z-[2]">
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-white/40">{t.hero.scroll}</span>
        <div className="w-px h-[30px] bg-gradient-to-b from-roiba-dorado/40 to-transparent" />
      </div>
    </section>
  )
}
