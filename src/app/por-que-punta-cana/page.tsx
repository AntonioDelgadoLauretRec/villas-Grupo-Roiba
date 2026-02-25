import { WhyPuntaCana } from '@/components/sections/WhyPuntaCana'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '¿Por qué Punta Cana? | Grupo Roiba',
  description: 'El destino de inversión más atractivo del Caribe. Descubra por qué Punta Cana es el lugar ideal para su villa premium.',
}

export default function PuntaCanaPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-roiba-verde py-20 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            Destino
          </p>
          <h1 className="text-display-lg md:text-display-xl font-serif text-white mb-6">
            ¿Por qué Punta Cana?
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            El destino de inversión más atractivo del Caribe
          </p>
        </div>
      </section>

      <WhyPuntaCana />

      {/* CTA */}
      <section className="relative py-14 md:py-20 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            Siguiente paso
          </p>
          <h2 className="text-display-md font-serif text-white mb-6">
            Invierta en el Caribe
          </h2>
          <p className="text-white/60 text-body-lg mb-12 leading-relaxed">
            Descubra las oportunidades de inversión en Punta Cana con la seguridad de un equipo experto.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-roiba-dorado text-roiba-verde font-semibold hover:bg-roiba-dorado-light transition-all duration-300 text-micro uppercase tracking-widest"
          >
            Solicitar información
          </Link>
        </div>
      </section>
    </main>
  )
}
