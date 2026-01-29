import { WhyPuntaCana } from '@/components/sections/WhyPuntaCana'

export default function PuntaCanaPage() {
  return (
    <main className="pt-20">
      <section className="bg-roiba-verde text-roiba-arena py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">¿Por qué Punta Cana?</h1>
          <p className="text-xl opacity-80">El destino de inversión más atractivo del Caribe</p>
        </div>
      </section>
      <WhyPuntaCana />
    </main>
  )
}
