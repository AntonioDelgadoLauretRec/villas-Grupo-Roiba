'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'

export default function CTASection() {
  const { t } = useLanguage()

  return (
    <section id="contacto" className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-roiba-verde relative overflow-hidden text-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-roiba-dorado/[0.08] to-transparent" />

      <div className="max-w-[640px] mx-auto relative z-[2]">
        <span className="scroll-reveal block font-sans text-micro font-semibold tracking-[0.3em] uppercase text-roiba-dorado mb-6">
          {t.cta.eyebrow}
        </span>

        <h2 className="scroll-reveal delay-1 font-serif text-[clamp(32px,5vw,52px)] font-normal text-white leading-[1.15] mb-6">
          {t.cta.title}{' '}
          <span className="italic text-roiba-dorado-light">{t.cta.titleAccent}</span>
        </h2>

        <p className="scroll-reveal delay-2 font-sans text-sm leading-[1.8] text-white/65 mb-12">
          {t.cta.subtitle}
        </p>

        <div className="scroll-reveal delay-3 flex gap-4 justify-center flex-wrap">
          <a href="/contacto" className="btn-roiba-primary px-12">
            <span>{t.cta.primary}</span>
          </a>
          <a href="mailto:info@gruporoiba.com" className="btn-roiba-ghost-dark px-12">
            {t.cta.secondary}
          </a>
        </div>
      </div>
    </section>
  )
}
