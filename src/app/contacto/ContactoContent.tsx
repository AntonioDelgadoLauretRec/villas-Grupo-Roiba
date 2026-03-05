'use client'

import PageHero from '@/components/ui/PageHero'
import { ContactForm } from '@/components/sections/ContactForm'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function ContactoContent() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrowKey="contactoPage.heroEyebrow"
        titleKey="contactoPage.heroTitle"
        descKey="contactoPage.heroDesc"
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=85&fit=crop"
      />

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
            <p className="text-micro font-medium tracking-widest uppercase text-roiba-dorado mb-2">{t.contactoPage.email}</p>
            <a href="mailto:info@gruporoiba.com" className="text-roiba-verde text-body hover:text-roiba-dorado transition-colors block">info@gruporoiba.com</a>
          </div>
          <div>
            <p className="text-micro font-medium tracking-widest uppercase text-roiba-dorado mb-2">{t.contactoPage.ubicacion}</p>
            <p className="text-roiba-verde text-body">Punta Cana, Rep. Dominicana</p>
          </div>
          <div>
            <p className="text-micro font-medium tracking-widest uppercase text-roiba-dorado mb-2">{t.contactoPage.horario}</p>
            <p className="text-roiba-verde text-body">{t.contactoPage.horarioValue}</p>
          </div>
        </div>
      </section>
    </>
  )
}
