'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function ProcesoCTA() {
  const { t } = useLanguage()

  return (
    <section className="relative py-14 md:py-20 bg-roiba-verde overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
          {t.procesoPage.ctaEyebrow}
        </p>
        <h2 className="text-display-md font-serif text-white mb-6">
          {t.procesoPage.ctaTitle}
        </h2>
        <p className="text-white/60 text-body-lg mb-12 leading-relaxed">
          {t.procesoPage.ctaDesc}
        </p>
        <Link
          href="/contacto"
          className="inline-block px-10 py-4 bg-roiba-dorado text-roiba-verde font-semibold hover:bg-roiba-dorado-light transition-all duration-300 text-micro uppercase tracking-widest"
        >
          {t.procesoPage.ctaButton}
        </Link>
      </div>
    </section>
  )
}
