'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface PageHeroProps {
  eyebrowKey: string
  titleKey: string
  descKey?: string
  backgroundImage: string
  children?: React.ReactNode
}

export default function PageHero({ eyebrowKey, titleKey, descKey, backgroundImage, children }: PageHeroProps) {
  const { t } = useLanguage()

  // Navigate nested dictionary keys like "procesoPage.heroEyebrow"
  const getText = (key: string): string => {
    const parts = key.split('.')
    let result: unknown = t
    for (const part of parts) {
      if (result && typeof result === 'object') {
        result = (result as Record<string, unknown>)[part]
      }
    }
    return typeof result === 'string' ? result : key
  }

  return (
    <section className="relative bg-roiba-verde py-24 md:py-32 px-6 overflow-hidden">
      <Image
        src={backgroundImage}
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
          {getText(eyebrowKey)}
        </p>
        <h1 className="text-display-lg md:text-display-xl font-serif text-white mb-6">
          {getText(titleKey)}
        </h1>
        <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
        {descKey && (
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {getText(descKey)}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}
