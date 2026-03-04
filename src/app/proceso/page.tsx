import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'El Método Roiba | Grupo Roiba',
  description: 'Seis fases definidas para avanzar sin incertidumbre. Entregables claros, supervisión técnica directa y puntos de decisión en cada etapa del proyecto.',
  alternates: { canonical: 'https://gruporoiba.com/proceso' },
}

export default function ProcesoPage() {
  return (
    <main className="pt-20">
      {/* Hero with background image */}
      <section className="relative bg-roiba-verde py-24 md:py-32 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85&fit=crop"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-roiba-verde/80" />
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            Metodología Roiba
          </p>
          <h1 className="text-display-lg md:text-display-xl font-serif text-white mb-6">
            El Método Roiba
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Seis fases. Un objetivo: avanzar sin incertidumbre.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-body-lg text-roiba-verde/70 leading-relaxed">
            Este proceso aplica cuando gestionamos un proyecto de principio a fin. Si interviene
            en una fase intermedia (por ejemplo, solo supervisión de obra ya iniciada), adaptamos
            las etapas relevantes. Cada fase tiene entregables definidos, puntos de decisión claros
            y supervisión técnica directa.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <ProcessTimeline />

      {/* CTA */}
      <section className="relative py-14 md:py-20 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            ¿En qué fase está su proyecto?
          </p>
          <h2 className="text-display-md font-serif text-white mb-6">
            Cuéntenos dónde está y le proponemos cómo intervenir
          </h2>
          <p className="text-white/60 text-body-lg mb-12 leading-relaxed">
            Si tiene terreno, proyecto iniciado o solo necesita supervisión, explíquenos su situación.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-roiba-dorado text-roiba-verde font-semibold hover:bg-roiba-dorado-light transition-all duration-300 text-micro uppercase tracking-widest"
          >
            Describir mi situación
          </Link>
        </div>
      </section>
    </main>
  )
}
