'use client'

const PRESS_MENTIONS = [
  { name: 'Forbes', initials: 'F' },
  { name: 'El País', initials: 'EP' },
  { name: 'Architectural Digest', initials: 'AD' },
  { name: 'Bloomberg', initials: 'BB' },
  { name: 'Expansión', initials: 'EX' },
  { name: 'Robb Report', initials: 'RR' },
]

export default function PressLogos() {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-roiba-verde/[0.06]">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-micro font-sans font-medium tracking-[0.3em] uppercase text-roiba-verde/30 mb-10">
          Medios que han hablado de nosotros
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {PRESS_MENTIONS.map((press) => (
            <div
              key={press.name}
              className="group flex items-center gap-2 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 cursor-default"
            >
              <span className="font-serif text-2xl md:text-3xl font-semibold text-roiba-verde group-hover:text-roiba-dorado transition-colors duration-500">
                {press.initials}
              </span>
              <span className="hidden md:block font-sans text-xs tracking-wider uppercase text-roiba-verde/60 group-hover:text-roiba-verde transition-colors duration-500">
                {press.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
