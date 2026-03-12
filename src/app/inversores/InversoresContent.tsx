'use client'

import { useState } from 'react'
import Image from 'next/image'
import { TrustSignals } from '@/components/sections/TrustSignals'
import { ContactForm } from '@/components/sections/ContactForm'
import InvestorsCarousel from '@/components/sections/InvestorsCarousel'
import BrochureSection from '@/components/home/BrochureSection'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { trackFormSubmit } from '@/lib/analytics'

const GUIDE_TEXT = {
  es: {
    tag: 'Para inversores',
    title: 'Guía de análisis estratégico para inversiones en Punta Cana',
    desc: 'Reciba nuestro análisis con datos de mercado, marco fiscal, rentabilidades esperadas y zonas con mayor proyección.',
    placeholder: 'tu@email.com',
    cta: 'Solicitar guía',
    success: '¡Enviado! Revise su correo electrónico.',
    error: 'Error al enviar. Inténtelo de nuevo.',
  },
  en: {
    tag: 'For investors',
    title: 'Strategic analysis guide for investments in Punta Cana',
    desc: 'Receive our analysis with market data, tax framework, expected returns and areas with greatest projection.',
    placeholder: 'you@email.com',
    cta: 'Request guide',
    success: 'Sent! Check your email.',
    error: 'Error sending. Please try again.',
  },
}

export default function InversoresContent() {
  const { locale, t } = useLanguage()
  const guide = GUIDE_TEXT[locale]
  const [guideEmail, setGuideEmail] = useState('')
  const [guideStatus, setGuideStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleGuideSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!guideEmail) return
    setGuideStatus('loading')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Investor Guide Request',
          email: guideEmail,
          phone: '',
          message: 'Solicitud de guía estratégica para inversores',
          source: 'investor-guide',
        }),
      })
      if (res.ok) { trackFormSubmit('investor_guide', 'inversores'); setGuideStatus('success'); setGuideEmail('') }
      else setGuideStatus('error')
    } catch { setGuideStatus('error') }
  }

  return (
    <>
      {/* Hero */}
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

      {/* Por qué Punta Cana — Carousel */}
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

      {/* CTA — Guía estratégica para inversores */}
      <section className="py-12 md:py-16 px-6 bg-white border-t border-roiba-verde/[0.06]">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em] block mb-4">
            {guide.tag}
          </span>
          <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] text-roiba-verde leading-tight mb-4">
            {guide.title}
          </h2>
          <p className="text-sm text-roiba-verde/50 max-w-lg mx-auto leading-relaxed mb-8">
            {guide.desc}
          </p>

          {guideStatus === 'success' ? (
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-sm font-sans text-sm font-medium">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 10l3 3 5-6"/><circle cx="10" cy="10" r="8"/></svg>
              {guide.success}
            </div>
          ) : (
            <form onSubmit={handleGuideSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                value={guideEmail}
                onChange={(e) => setGuideEmail(e.target.value)}
                placeholder={guide.placeholder}
                className="flex-1 px-5 py-3.5 border border-roiba-verde/15 rounded-sm text-sm font-sans text-roiba-verde placeholder:text-roiba-verde/40 focus:border-roiba-dorado focus:ring-1 focus:ring-roiba-dorado outline-none transition-all"
              />
              <button
                type="submit"
                disabled={guideStatus === 'loading'}
                className="group relative px-8 py-3.5 bg-roiba-dorado text-roiba-verde text-[11px] font-semibold tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 disabled:opacity-60 whitespace-nowrap"
              >
                <span className="absolute inset-0 bg-roiba-dorado-light transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" aria-hidden="true" />
                <span className="relative z-10 transition-colors duration-300">
                  {guideStatus === 'loading' ? '...' : guide.cta}
                </span>
              </button>
            </form>
          )}

          {guideStatus === 'error' && (
            <p className="mt-3 text-red-500 text-sm font-sans">{guide.error}</p>
          )}
        </div>
      </section>

      {/* Queremos guiarte — BrochureSection (now with contrasting bg) */}
      <div className="bg-roiba-verde">
        <BrochureSection variant="dark" />
      </div>
    </>
  )
}
