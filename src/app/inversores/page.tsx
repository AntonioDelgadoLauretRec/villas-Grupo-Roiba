import { TrustSignals } from '@/components/sections/TrustSignals'
import { ContactForm } from '@/components/sections/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Centro de Inversores | Grupo Roiba',
  description: 'Información exclusiva para inversores cualificados. Beneficios fiscales, seguridad jurídica y retorno de inversión en Punta Cana.',
}

export default function InversoresPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-roiba-verde py-24 md:py-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.3em] text-xs font-medium mb-6">
            Inversores
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Centro de Inversores
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Información exclusiva para inversores cualificados
          </p>
        </div>
      </section>

      <TrustSignals />

      {/* Beneficios Fiscales */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-roiba-dorado uppercase tracking-[0.2em] text-xs font-medium mb-4 text-center">
            Ventajas
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-roiba-verde mb-12 text-center">
            Beneficios Fiscales
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-roiba-arena-light p-8 border border-roiba-verde/5">
              <h3 className="text-xl font-serif text-roiba-verde mb-3">Ley Confotur</h3>
              <p className="text-roiba-verde/70 leading-relaxed">
                Exención de impuestos de transferencia y beneficios fiscales durante 15 años
                para proyectos turísticos en República Dominicana.
              </p>
            </div>
            <div className="bg-roiba-arena-light p-8 border border-roiba-verde/5">
              <h3 className="text-xl font-serif text-roiba-verde mb-3">Residencia por Inversión</h3>
              <p className="text-roiba-verde/70 leading-relaxed">
                Acceso a residencia dominicana con inversión inmobiliaria desde $200,000 USD.
                Proceso simplificado y asesoría completa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-20 px-6 bg-roiba-arena-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-roiba-verde mb-4 text-center">
            Solicite información
          </h2>
          <p className="text-roiba-verde/60 text-center mb-10">
            Complete el formulario y nuestro equipo se pondrá en contacto en 24-48 horas.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
