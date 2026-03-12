'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { trackFormSubmit } from '@/lib/analytics'

export default function BrochureSection({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { t } = useLanguage()

  const isDark = variant === 'dark'

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus('loading')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Brochure Download',
          email,
          phone: '',
          message: 'Descarga de guía de inversión',
          source: 'brochure',
        }),
      })
      if (res.ok) {
        trackFormSubmit('brochure_download', 'brochure_section')
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className={`py-[clamp(40px,6vw,60px)] px-[clamp(24px,8vw,120px)] relative overflow-hidden ${isDark ? 'bg-roiba-verde' : 'bg-roiba-arena-light'}`}>
      {!isDark && (
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(rgba(201,169,110,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
      )}
      {isDark && (
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
      )}

      <div className="max-w-[900px] mx-auto relative z-[2] text-center">
        <span className={`scroll-reveal block font-sans text-micro font-semibold tracking-[0.3em] uppercase mb-4 ${isDark ? 'text-roiba-dorado' : 'text-roiba-dorado'}`}>
          {t.brochure.eyebrow}
        </span>
        <h2 className={`scroll-reveal delay-1 font-serif text-[clamp(28px,4vw,44px)] font-normal leading-tight mb-4 ${isDark ? 'text-white' : 'text-roiba-verde'}`}>
          {t.brochure.title}
        </h2>
        <p className={`scroll-reveal delay-2 font-sans text-sm max-w-lg mx-auto leading-relaxed mb-8 ${isDark ? 'text-white/60' : 'text-slate-500'}`}>
          {t.brochure.subtitle}
        </p>

        {status === 'success' ? (
          <div className="scroll-reveal delay-3 inline-flex items-center gap-2 px-6 py-3 bg-green-50 text-green-700 rounded-sm font-sans text-sm font-medium">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 10l3 3 5-6"/><circle cx="10" cy="10" r="8"/></svg>
            {t.brochure.success}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="scroll-reveal delay-3 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.brochure.placeholder}
              className={`flex-1 px-5 py-3.5 border rounded-sm text-sm font-sans outline-none transition-all ${
                isDark
                  ? 'border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-roiba-dorado focus:ring-1 focus:ring-roiba-dorado'
                  : 'border-roiba-verde/15 text-roiba-verde placeholder:text-roiba-verde/40 focus:border-roiba-dorado focus:ring-1 focus:ring-roiba-dorado'
              }`}
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="group relative px-8 py-3.5 bg-roiba-dorado text-roiba-verde text-[11px] font-semibold tracking-[0.15em] uppercase overflow-hidden transition-all duration-500 disabled:opacity-60 whitespace-nowrap"
            >
              <span className="absolute inset-0 bg-roiba-dorado-light transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" aria-hidden="true" />
              <span className="relative z-10 transition-colors duration-300">
                {status === 'loading' ? '...' : t.brochure.cta}
              </span>
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="mt-3 text-red-500 text-sm font-sans">{t.brochure.error}</p>
        )}
      </div>
    </section>
  )
}
