import { ContactForm } from '@/components/sections/ContactForm'

export default function ContactoPage() {
  return (
    <main className="pt-20">
      <section className="bg-roiba-verde text-roiba-arena py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Contacto</h1>
          <p className="text-xl opacity-80">Solicite su análisis personalizado</p>
        </div>
      </section>
      <ContactForm />
    </main>
  )
}
