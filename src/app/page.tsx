import { Hero } from '@/components/sections/Hero'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { VillaGrid } from '@/components/sections/VillaGrid'
import { WhyPuntaCana } from '@/components/sections/WhyPuntaCana'
import { TrustCenter } from '@/components/sections/TrustCenter'
import { ContactForm } from '@/components/sections/ContactForm'

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section-padding bg-roiba-arena">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-caption uppercase tracking-[0.3em] text-roiba-dorado mb-6 block">
              Construcción Boutique
            </span>
            <h2 className="text-display-sm text-roiba-verde mb-8">
              Construcción Boutique.
              <br />
              <span className="text-roiba-dorado">Control Total.</span>
            </h2>
            <p className="text-body-lg text-roiba-verde/80 leading-relaxed mb-12">
              No construimos en masa. Cada villa es un proyecto único, supervisado
              personalmente desde la selección del terreno hasta la entrega de llaves.
            </p>
          </div>
        </div>
      </section>

      <ProcessTimeline />
      <VillaGrid />
      <WhyPuntaCana />
      <TrustCenter />

      <section id="contacto" className="section-padding bg-roiba-arena">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-display-sm text-roiba-verde mb-8">
                Solicite su Análisis
              </h2>
              <p className="text-body-lg text-roiba-verde/80 mb-8">
                Reciba un estudio completo adaptado a sus objetivos de inversión.
              </p>
            </div>
            <div className="bg-white p-8 lg:p-12 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
