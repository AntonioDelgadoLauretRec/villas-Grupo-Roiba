'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function StatsMarquee({ dbStats }: { dbStats?: { value: string; label: string }[] }) {
  const { t } = useLanguage()

  const DEFAULT_STATS = [
    { value: '20+', label: t.stats.proyectos },
    { value: '15M\u20AC', label: t.stats.satisfaccion },
    { value: '2', label: t.stats.paises },
    { value: '100%', label: t.stats.retrasos },
  ]

  const stats = dbStats || DEFAULT_STATS

  // Duplicate items for seamless marquee loop
  const items = [...stats, ...stats, ...stats]

  return (
    <section className="bg-roiba-verde h-[120px] border-y border-roiba-dorado/[0.12] relative overflow-hidden flex items-center">
      <div className="animate-marquee flex whitespace-nowrap gap-12 md:gap-16">
        {items.map((s, i) => (
          <div key={i} className="flex items-center gap-3 px-6 py-3 bg-white/[0.04] rounded-lg border border-white/[0.06] flex-shrink-0">
            <span className="font-serif text-[32px] font-semibold text-roiba-dorado-light tabular-nums leading-none">
              {s.value}
            </span>
            <span className="font-sans text-[14px] font-normal text-white/50 leading-snug max-w-[200px]">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
