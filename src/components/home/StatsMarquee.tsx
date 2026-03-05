'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

function AnimatedCounter({ end, suffix = '', prefix = '', duration = 2000 }: { end: number; suffix?: string; prefix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const startTime = performance.now()
    const animate = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate)
  }, [started, end, duration])

  return (
    <span ref={ref} className="font-serif text-[32px] md:text-[40px] font-semibold text-roiba-dorado-light tabular-nums">
      {prefix}{count}{suffix}
    </span>
  )
}

export default function StatsMarquee({ dbStats }: { dbStats?: { value: string; label: string }[] }) {
  const { t } = useLanguage()

  const DEFAULT_STATS = [
    { value: 20, suffix: '+', label: t.stats.proyectos },
    { value: 15, prefix: '', suffix: 'M\u20AC', label: t.stats.satisfaccion },
    { value: 2, suffix: '', label: t.stats.paises },
    { value: 100, suffix: '%', label: t.stats.retrasos },
  ]

  const parsedStats = dbStats
    ? dbStats.map(s => {
        const numMatch = s.value.match(/(\d+)/)
        const num = numMatch ? parseInt(numMatch[1]) : 0
        const suffix = s.value.replace(/\d+/g, '').trim()
        return { value: num, suffix, prefix: '', label: s.label }
      })
    : DEFAULT_STATS

  return (
    <section className="bg-roiba-verde py-12 md:py-16 border-y border-roiba-dorado/[0.12] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, rgba(201,169,110,0.3) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {parsedStats.map((s, i) => (
            <div key={i} className="text-center group">
              <AnimatedCounter end={s.value} suffix={s.suffix} prefix={s.prefix} duration={2000 + i * 200} />
              <div className="w-8 h-px bg-roiba-dorado/30 mx-auto my-3 group-hover:w-12 group-hover:bg-roiba-dorado transition-all duration-500" />
              <span className="font-sans text-[11px] font-normal tracking-wider text-white/50 uppercase leading-relaxed block max-w-[200px] mx-auto">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
