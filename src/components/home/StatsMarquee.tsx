const DEFAULT_STATS = [
  { value: '15+', label: 'Proyectos entregados' },
  { value: '98%', label: 'Satisfacción cliente' },
  { value: '2', label: 'Países operativos' },
  { value: '0', label: 'Retrasos en entrega' },
]

export default function StatsMarquee({ dbStats }: { dbStats?: { value: string; label: string }[] }) {
  const STATS = dbStats && dbStats.length > 0 ? dbStats : DEFAULT_STATS
  return (
    <section className="bg-roiba-verde py-5 overflow-hidden border-y border-roiba-dorado/[0.12]">
      <div className="animate-marquee flex w-fit">
        {[...STATS, ...STATS, ...STATS, ...STATS].map((s, i) => (
          <div key={i} className="flex items-center gap-3 px-12 whitespace-nowrap">
            <span className="font-serif text-[28px] font-semibold text-roiba-dorado-light">{s.value}</span>
            <span className="font-sans text-[11px] font-normal tracking-wider text-white/60 uppercase">{s.label}</span>
            <span className="text-roiba-dorado/20 mx-6">&#9670;</span>
          </div>
        ))}
      </div>
    </section>
  )
}
