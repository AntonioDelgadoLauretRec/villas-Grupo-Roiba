'use client'

import PageHero from '@/components/ui/PageHero'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const ENFOQUE_TEXT = {
  es: {
    title: 'Nuestro enfoque',
    content:
      'En Grupo Roiba, creemos que la construcción de excelencia requiere una comprensión profunda de tus necesidades. Nuestro enfoque integra tres pilares fundamentales: escucha activa con tus requerimientos, análisis exhaustivo de viabilidad técnica y ejecución rigurosa en cada etapa. Cada proyecto es único, y nosotros adaptamos nuestra metodología para garantizar que tus visiones se materialicen con precisión.',
    content2:
      'La planificación técnica rigurosa, el control económico y de plazos, la supervisión continua de la ejecución y la coordinación eficiente de todos los agentes son los principios que guían nuestro trabajo diario. Los fundadores participan directamente en cada proyecto, asegurando que el nivel de exigencia se mantenga en todo momento.',
  },
  en: {
    title: 'Our approach',
    content:
      'At Grupo Roiba, we believe that construction excellence requires a deep understanding of your needs. Our approach integrates three fundamental pillars: active listening to your requirements, exhaustive analysis of technical feasibility, and rigorous execution at every stage. Every project is unique, and we adapt our methodology to ensure your vision materialises with precision.',
    content2:
      'Rigorous technical planning, budget and schedule control, continuous execution supervision, and efficient coordination of all stakeholders are the principles that guide our daily work. The founders participate directly in every project, ensuring that the level of demand is maintained at all times.',
  },
}

export default function ProcesoContent() {
  const { locale, t } = useLanguage()
  const enfoque = ENFOQUE_TEXT[locale]

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
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-body-lg text-roiba-verde/70 leading-relaxed">
            {t.procesoPage.intro}
          </p>
        </div>
      </section>

      {/* Nuestro Enfoque — moved from Nosotros */}
      <section className="py-12 md:py-16 px-6 bg-roiba-fondo-alt">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-display-md font-serif text-roiba-texto mb-3 text-center">
            {enfoque.title}
          </h2>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-8" />
          <div className="space-y-6 font-sans text-[18px] text-roiba-texto-suave leading-[1.8]">
            <p>{enfoque.content}</p>
            <p>{enfoque.content2}</p>
          </div>
        </div>
      </section>
    </>
  )
}
