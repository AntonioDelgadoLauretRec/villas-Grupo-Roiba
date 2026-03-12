'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface AboutData {
  title?: string
  paragraph1?: string
  paragraph2?: string
}

export default function AboutSection({ dbAbout }: { dbAbout?: AboutData }) {
  const { t } = useLanguage()

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-roiba-fondo-alt">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text */}
        <div>
          <span className="scroll-reveal block font-sans text-micro font-semibold tracking-[0.3em] uppercase text-roiba-dorado mb-4">
            {t.about.eyebrow}
          </span>
          <h2 className="scroll-reveal delay-1 font-serif text-[clamp(28px,4vw,48px)] font-normal leading-[1.15] text-roiba-verde mb-6">
            {t.about.title1}
            <br />
            <span className="italic text-roiba-dorado">{t.about.titleAccent}</span>
          </h2>
          <div className="scroll-reveal delay-2 w-12 h-0.5 bg-roiba-dorado mb-6" />
          <p className="scroll-reveal delay-3 font-sans text-sm leading-[1.85] text-roiba-texto-suave mb-5">
            {dbAbout?.paragraph1 || t.about.p1}
          </p>
          <p className="scroll-reveal delay-4 font-sans text-sm leading-[1.85] text-roiba-texto-suave">
            {dbAbout?.paragraph2 || t.about.p2}
          </p>
        </div>

        {/* Visual — White card with navy blue logo, same height as text */}
        <div className="scroll-reveal delay-2 relative hidden md:block">
          <div className="bg-white border border-roiba-arena-dark shadow-xl relative overflow-hidden flex items-center justify-center py-12 px-8">
            <div className="absolute inset-6 border border-roiba-dorado/[0.1]" />
            <Image
              src="/images/LOGO_GRUPOROIBA_navy.svg"
              alt="Grupo Roiba"
              width={280}
              height={150}
              className="w-3/5 max-w-[280px] h-auto relative z-10"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-[100px] h-[100px] bg-roiba-dorado/10 -z-10" />
        </div>
      </div>
    </section>
  )
}
