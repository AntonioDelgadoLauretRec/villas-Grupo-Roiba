import { TrustSignals } from '@/components/sections/TrustSignals'
import { ContactForm } from '@/components/sections/ContactForm'
import InvestorsCarousel from '@/components/sections/InvestorsCarousel'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inversores | Grupo Roiba',
  description: 'Datos de mercado, marco legal y garantías técnicas para invertir con criterio en Punta Cana. Beneficios fiscales, seguridad jurídica y asesoramiento técnico.',
  alternates: { canonical: 'https://gruporoiba.com/inversores' },
}

export default function InversoresPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-roiba-verde py-20 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            Para Inversores
          </p>
          <h1 className="text-display-lg md:text-display-xl font-serif text-white mb-6">
            Invertir con criterio técnico en Punta Cana
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Datos de mercado, marco legal y garantías técnicas para tomar una decisión informada antes de comprometerse.
          </p>
        </div>
      </section>

      <TrustSignals />

      {/* Por qué Punta Cana — Carousel */}
      <InvestorsCarousel />

      {/* Beneficios Fiscales */}
      <section className="py-14 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-4 text-center">
            Ventajas
          </p>
          <h2 className="text-display-md font-serif text-roiba-verde mb-12 text-center">
            Beneficios Fiscales
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-roiba-arena-light p-8 border border-roiba-verde/5">
              <h3 className="text-heading font-serif text-roiba-verde mb-3">Ley Confotur</h3>
              <p className="text-roiba-verde/70 text-body leading-relaxed">
                Exención de impuestos de transferencia y beneficios fiscales durante 15 años
                para proyectos turísticos en República Dominicana.
              </p>
            </div>
            <div className="bg-roiba-arena-light p-8 border border-roiba-verde/5">
              <h3 className="text-heading font-serif text-roiba-verde mb-3">Residencia por Inversión</h3>
              <p className="text-roiba-verde/70 text-body leading-relaxed">
                Acceso a residencia dominicana con inversión inmobiliaria desde $200,000 USD.
                Proceso simplificado y asesoría completa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-12 px-6 bg-roiba-arena-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-display-md font-serif text-roiba-verde mb-4 text-center">
            Solicite información
          </h2>
          <p className="text-roiba-verde/60 text-body text-center mb-10">
            Complete el formulario y nuestro equipo se pondrá en contacto en 24-48 horas.
          </p>
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
