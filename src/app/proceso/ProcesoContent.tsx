'use client'

import PageHero from '@/components/ui/PageHero'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function ProcesoContent() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrowKey="procesoPage.heroEyebrow"
        titleKey="procesoPage.heroTitle"
        descKey="procesoPage.heroSubtitle"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=85&fit=crop"
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-body-lg text-roiba-verde/70 leading-relaxed">
            {t.procesoPage.intro}
          </p>
        </div>
      </section>
    </>
  )
}
