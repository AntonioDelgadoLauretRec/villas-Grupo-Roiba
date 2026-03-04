import { ContactForm } from '@/components/sections/ContactForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto | Grupo Roiba',
  description: 'Cuéntenos qué necesita: supervisión técnica, construcción completa o asesoramiento. Le respondemos en 24-48 horas laborables.',
  alternates: { canonical: 'https://gruporoiba.com/contacto' },
}

export default function ContactoPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-roiba-verde py-20 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            Hablemos
          </p>
          <h1 className="text-display-lg md:text-display-xl font-serif text-white mb-6">
            Cuéntenos qué necesita
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Complete el formulario con su situación (supervisión, construcción completa, due diligence...)
            y le respondemos en 24-48 horas laborables con un enfoque específico.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-10 px-6 bg-roiba-arena-light">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-micro font-medium tracking-widest uppercase text-roiba-dorado mb-2">Email</p>
            <a href="mailto:info@gruporoiba.com" className="text-roiba-verde text-body hover:text-roiba-dorado transition-colors block">info@gruporoiba.com</a>
          </div>
          <div>
            <p className="text-micro font-medium tracking-widest uppercase text-roiba-dorado mb-2">Ubicación</p>
            <p className="text-roiba-verde text-body">Punta Cana, República Dominicana</p>
          </div>
          <div>
            <p className="text-micro font-medium tracking-widest uppercase text-roiba-dorado mb-2">Horario</p>
            <p className="text-roiba-verde text-body">Lun - Vie, 9:00 - 18:00 (AST)</p>
          </div>
        </div>
      </section>
    </main>
  )
}
