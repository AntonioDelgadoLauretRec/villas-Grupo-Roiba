'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import Image from 'next/image'

const PROJECTS = [
  {
    name: 'Finest Punta Cana',
    location: 'Punta Cana, República Dominicana',
    status: 'Completada',
    type: 'Resort & Residencias',
    year: '2024',
    image: '/images/projects/finest-punta-cana.jpg',
  },
  {
    name: 'Excellence Oyster Bay',
    location: 'Jamaica',
    status: 'Completada',
    type: 'Resort premium',
    year: '2024',
    image: '/images/projects/excellence-oyster-bay.jpg',
  },
  {
    name: 'Excellence El Carmen',
    location: 'República Dominicana',
    status: 'Completada',
    type: 'Resort premium',
    year: '2023',
    image: '/images/projects/excellence-el-carmen.jpg',
  },
  {
    name: 'Excellence Oyster Bay — Fase 2',
    location: 'Jamaica',
    status: 'Completada',
    type: 'Resort premium',
    year: '2024',
    image: '/images/projects/excellence-oyster-bay-2.jpg',
  },
  {
    name: 'Excellence Oyster Bay — Exteriores',
    location: 'Jamaica',
    status: 'Completada',
    type: 'Resort premium',
    year: '2024',
    image: '/images/projects/excellence-oyster-bay-3.jpg',
  },
]

const SWIPE_THRESHOLD = 50

export default function ProjectCarousel() {
  const [idx, setIdx] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchRef = useRef<{ startX: number; startY: number } | null>(null)

  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setIdx((prev) => (prev + 1) % PROJECTS.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [paused])

  const goNext = useCallback(() => {
    setIdx((prev) => (prev + 1) % PROJECTS.length)
  }, [])

  const goPrev = useCallback(() => {
    setIdx((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length)
  }, [])

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchRef.current = {
      startX: e.touches[0].clientX,
      startY: e.touches[0].clientY,
    }
    setPaused(true)
  }, [])

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchRef.current) return
    const deltaX = e.changedTouches[0].clientX - touchRef.current.startX
    const deltaY = e.changedTouches[0].clientY - touchRef.current.startY
    // Only swipe if horizontal movement is dominant
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
      if (deltaX < 0) goNext()
      else goPrev()
    }
    touchRef.current = null
    setPaused(false)
  }, [goNext, goPrev])

  return (
    <div>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between">
        <div>
          <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em] block mb-3">
            Trayectoria
          </span>
          <h2 className="text-display-md font-serif text-roiba-verde">
            Proyectos que{' '}
            <span className="italic text-roiba-dorado">trascienden</span>
          </h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={goPrev}
            aria-label="Proyecto anterior"
            className="w-12 h-12 border border-roiba-verde/20 bg-roiba-verde/80 backdrop-blur-sm text-white flex items-center justify-center hover:bg-roiba-dorado hover:text-roiba-verde hover:border-roiba-dorado transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button
            onClick={goNext}
            aria-label="Proyecto siguiente"
            className="w-12 h-12 border border-roiba-verde/20 bg-roiba-verde/80 backdrop-blur-sm text-white flex items-center justify-center hover:bg-roiba-dorado hover:text-roiba-verde hover:border-roiba-dorado transition-all duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="relative w-full overflow-hidden touch-pan-y"
      >
        <div
          className="flex transition-transform duration-700 ease-out-expo"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {PROJECTS.map((proj, i) => (
            <div key={i} className="min-w-full relative">
              <div className="relative w-full aspect-[21/9] bg-roiba-verde overflow-hidden">
                <Image
                  src={proj.image}
                  alt={proj.name}
                  fill
                  className="object-cover"
                  sizes="100vw"
                  priority={i === 0}
                />
                {/* Gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-roiba-verde/95 via-roiba-verde/50 to-transparent" />

                {/* Project info */}
                <div className="absolute bottom-0 left-0 right-0 px-6 md:px-20 lg:px-28 pb-8 md:pb-12 flex justify-between items-end">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`inline-block px-4 py-1 text-[9px] font-semibold tracking-[0.15em] uppercase ${proj.status === 'Completada' ? 'bg-roiba-dorado text-roiba-verde' : 'bg-white/15 text-white'}`}>
                        {proj.status}
                      </span>
                      <span className="text-white/50 text-xs tracking-wider">{proj.year}</span>
                    </div>
                    <h3 className="font-serif text-white text-heading md:text-display-md font-medium leading-tight mb-1">
                      {proj.name}
                    </h3>
                    <p className="text-white/70 text-caption tracking-wider">{proj.location}</p>
                  </div>
                  <div className="hidden md:block text-right pb-1">
                    <span className="text-roiba-dorado text-[9px] font-semibold tracking-[0.2em] uppercase block mb-1">
                      Tipología
                    </span>
                    <span className="font-serif text-white text-subheading font-medium">
                      {proj.type}
                    </span>
                  </div>
                </div>

                {/* Slide counter */}
                <div className="absolute top-6 right-6 md:top-10 md:right-20 font-serif text-white/40 tracking-wider text-sm">
                  <span className="text-roiba-dorado text-xl font-medium">{String(i + 1).padStart(2, '0')}</span>
                  <span className="mx-1.5">/</span>
                  <span>{String(PROJECTS.length).padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Proyecto ${i + 1}`}
            className={`h-0.5 border-none cursor-pointer transition-all duration-300 ${idx === i ? 'w-12 bg-roiba-dorado' : 'w-8 bg-roiba-dorado/30'}`}
          />
        ))}
      </div>
    </div>
  )
}
