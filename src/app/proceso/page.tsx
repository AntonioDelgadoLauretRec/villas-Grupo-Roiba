import { ProcessTimeline } from '@/components/sections/ProcessTimeline'

export default function ProcesoPage() {
  return (
    <main className="pt-20">
      <section className="bg-roiba-verde text-roiba-arena py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">The Roiba Method</h1>
          <p className="text-xl opacity-80">Seis fases que transforman su visión en realidad</p>
        </div>
      </section>
      <ProcessTimeline />
    </main>
  )
}
