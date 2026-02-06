import { VillaGrid } from '@/components/sections/VillaGrid'

export default function VillasPage() {
  return (
    <main className="pt-20">
      <section className="bg-roiba-verde text-roiba-arena py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Colección de Villas</h1>
          <p className="text-xl opacity-80">Proyectos exclusivos en Punta Cana</p>
        </div>
      </section>
      <VillaGrid />
    </main>
  )
}
