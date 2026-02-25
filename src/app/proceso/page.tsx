import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Roiba Method | Grupo Roiba',
  description: 'Seis fases que transforman su inversión en un proceso controlado. Control, transparencia y previsibilidad en cada etapa del proyecto.',
}

export default function ProcesoPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-roiba-verde py-20 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            Nuestro Proceso
          </p>
          <h1 className="text-display-lg md:text-display-xl font-serif text-white mb-6">
            The Roiba Method
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Seis fases que transforman su inversión en un proceso controlado
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-body-lg text-roiba-verde/70 leading-relaxed">
            The Roiba Method estructura cada proyecto en seis fases definidas, diseñadas para
            eliminar la incertidumbre y garantizar control, transparencia y previsibilidad en
            todo el proceso constructivo. Cada etapa cuenta con entregables claros, supervisión
            técnica y toma de decisiones fundamentadas, permitiendo al cliente mantener visibilidad
            y control desde el inicio hasta la entrega y gestión de la propiedad.
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
            Siguiente paso
          </p>
          <h2 className="text-display-md font-serif text-white mb-6">
            ¿Listo para empezar?
          </h2>
          <p className="text-white/60 text-body-lg mb-12 leading-relaxed">
            Solicite una consulta inicial sin compromiso y descubra cómo podemos ayudarle.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-roiba-dorado text-roiba-verde font-semibold hover:bg-roiba-dorado-light transition-all duration-300 text-micro uppercase tracking-widest"
          >
            Solicitar Análisis
          </Link>
        </div>
      </section>
    </main>
  )
}
