'use client'

import PageHero from '@/components/ui/PageHero'
import { TrustSignals } from '@/components/sections/TrustSignals'
import { ContactForm } from '@/components/sections/ContactForm'
import InvestorsCarousel from '@/components/sections/InvestorsCarousel'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function InversoresContent() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrowKey="inversoresPage.heroEyebrow"
        titleKey="inversoresPage.heroTitle"
        descKey="inversoresPage.heroDesc"
        backgroundImage="https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1920&q=85&fit=crop"
      />

      <TrustSignals />

      {/* Por qué Punta Cana — Carousel */}
      <InvestorsCarousel />

      {/* Formulario */}
      <section className="py-12 px-6 bg-roiba-arena-light">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-display-md font-serif text-roiba-verde mb-4 text-center">
            {t.inversoresPage.soliciteInfo}
          </h2>
          <p className="text-roiba-verde/60 text-body text-center mb-10">
            {t.inversoresPage.soliciteDesc}
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
