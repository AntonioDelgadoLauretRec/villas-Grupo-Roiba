'use client'

import Image from 'next/image'
import { TrustSignals } from '@/components/sections/TrustSignals'
import { ContactForm } from '@/components/sections/ContactForm'
import InvestorsCarousel from '@/components/sections/InvestorsCarousel'
import BrochureSection from '@/components/home/BrochureSection'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function InversoresContent() {
  const { locale, t } = useLanguage()

  return (
    <>
      {/* Hero — custom to control line breaks (3.2) */}
      <section className="relative bg-roiba-verde py-24 md:py-32 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1460472178825-e5240623afd5?w=1920&q=85&fit=crop"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-roiba-verde/75" />
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            {t.inversoresPage.heroEyebrow}
          </p>
          <h1 className="text-display-lg md:text-display-xl font-serif text-white mb-6">
            {locale === 'es' ? (
              <>Invertir con criterio técnico<br />en Punta Cana</>
            ) : (
              <>Invest with technical criteria<br />in Punta Cana</>
            )}
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t.inversoresPage.heroDesc}
          </p>
        </div>
      </section>

      <TrustSignals />

      {/* Por qué Punta Cana — Carousel (Razones para invertir) */}
      <InvestorsCarousel />

      {/* Formulario — Solicitar información */}
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

      {/* CTA Guía para inversores — relocated from Homepage (3.5) */}
      <BrochureSection />
    </>
  )
}
