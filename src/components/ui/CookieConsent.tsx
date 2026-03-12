'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { updateConsent } from '@/lib/analytics'

const COOKIE_KEY = 'roiba_cookie_consent'

const texts = {
  es: {
    message: 'Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación y analizar el tráfico del sitio. Consulte nuestra',
    policy: 'Política de Cookies',
    moreInfo: 'para más información.',
    reject: 'Rechazar',
    accept: 'Aceptar',
  },
  en: {
    message: 'We use our own and third-party cookies to improve your browsing experience and analyze site traffic. See our',
    policy: 'Cookie Policy',
    moreInfo: 'for more information.',
    reject: 'Reject',
    accept: 'Accept',
  },
}

export default function CookieConsent() {
  const [show, setShow] = useState(false)
  const { locale } = useLanguage()
  const t = texts[locale] || texts.es

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    updateConsent(true)
    setShow(false)
  }

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected')
    updateConsent(false)
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white border border-[#E2E8F0] rounded-sm shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1 text-sm text-[#0C2340]/80 leading-relaxed">
          {t.message}{' '}
          <Link href="/cookies" className="text-[#C9A96E] underline underline-offset-2 hover:text-[#0C2340] transition-colors">
            {t.policy}
          </Link>{' '}
          {t.moreInfo}
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-5 py-2.5 text-sm font-medium text-[#0C2340]/70 border border-[#0C2340]/20 rounded-sm hover:bg-[#F5F7FA] transition-all duration-200"
          >
            {t.reject}
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 text-sm font-semibold bg-[#C9A96E] text-[#0C2340] rounded-sm hover:bg-[#E8C877] transition-all duration-200"
          >
            {t.accept}
          </button>
        </div>
      </div>
    </div>
  )
}
