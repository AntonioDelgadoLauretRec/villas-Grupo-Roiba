import { TrustSignals } from '@/components/sections/TrustSignals'
import { ContactForm } from '@/components/sections/ContactForm'

export default function InversoresPage() {
  return (
    <main className="pt-20">
      <section className="bg-roiba-verde text-roiba-arena py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Centro de Inversores</h1>
          <p className="text-xl opacity-80">Información exclusiva para inversores cualificados</p>
        </div>
      </section>
      <TrustSignals />
      <section className="py-20 px-6 bg-roiba-arena">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif text-roiba-verde mb-8 text-center">Beneficios Fiscales</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-roiba-verde mb-3">Ley Confotur</h3>
              <p className="text-roiba-verde/70">Exención de impuestos de transferencia y beneficios fiscales durante 15 años.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-roiba-verde mb-3">Residencia por Inversión</h3>
              <p className="text-roiba-verde/70">Acceso a residencia dominicana con inversión inmobiliaria desde $200,000 USD.</p>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
    </main>
  )
}
