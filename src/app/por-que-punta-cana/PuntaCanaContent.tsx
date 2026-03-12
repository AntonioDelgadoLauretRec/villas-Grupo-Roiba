'use client'

import Link from 'next/link'
import { WhyPuntaCana } from '@/components/sections/WhyPuntaCana'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function PuntaCanaContent() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <section className="relative bg-roiba-verde py-20 md:py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            {t.puntaCanaPage.heroEyebrow}
          </p>
          <h1 className="text-display-lg md:text-display-xl font-serif text-white mb-6">
            {t.puntaCanaPage.heroTitle}
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {t.puntaCanaPage.heroDesc}
          </p>
        </div>
      </section>

      <WhyPuntaCana />

      {/* CTA */}
      <section className="relative py-14 md:py-20 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            {t.puntaCanaPage.ctaEyebrow}
          </p>
          <h2 className="text-display-md font-serif text-white mb-6">
            {t.puntaCanaPage.ctaTitle}
          </h2>
          <p className="text-white/60 text-body-lg mb-12 leading-relaxed">
            {t.puntaCanaPage.ctaDesc}
          </p>
          <Link
            href="/contacto"
            className="btn-roiba-primary px-10 inline-block"
          >
            <span>{t.puntaCanaPage.ctaButton}</span>
          </Link>
        </div>
      </section>
    </>
  )
}
