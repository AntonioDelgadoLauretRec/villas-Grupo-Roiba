'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const COOKIE_KEY = 'roiba_cookie_consent'

export default function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY)
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted')
    setShow(false)
  }

  const reject = () => {
    localStorage.setItem(COOKIE_KEY, 'rejected')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6 animate-slide-up">
      <div className="max-w-4xl mx-auto bg-white border border-[#E2E8F0] rounded-sm shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <div className="flex-1 text-sm text-[#0C2340]/80 leading-relaxed">
          Utilizamos cookies propias y de terceros para mejorar su experiencia de navegación y analizar el tráfico del sitio.
          Consulte nuestra{' '}
          <Link href="/cookies" className="text-[#C9A96E] underline underline-offset-2 hover:text-[#0C2340] transition-colors">
            Política de Cookies
          </Link>{' '}
          para más información.
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-5 py-2.5 text-sm font-medium text-[#0C2340]/70 border border-[#0C2340]/20 rounded-sm hover:bg-[#F5F7FA] transition-all duration-200"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="px-5 py-2.5 text-sm font-semibold bg-[#C9A96E] text-[#0C2340] rounded-sm hover:bg-[#E8C877] transition-all duration-200"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
