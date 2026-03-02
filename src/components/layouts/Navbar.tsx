'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { locale, setLocale, t } = useLanguage()

  const navigation = [
    { name: t.nav.servicios, href: '/servicios' },
    { name: t.nav.proceso, href: '/proceso' },
    { name: t.nav.villas, href: '/villas' },
    { name: t.nav.destino, href: '/por-que-punta-cana' },
    { name: t.nav.nosotros, href: '/nosotros' },
    { name: t.nav.blog, href: '/blog' },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const toggleLang = () => setLocale(locale === 'es' ? 'en' : 'es')

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0C2340] backdrop-blur-md shadow-xl py-3 border-b border-[#C9A96E]/20'
          : 'bg-gradient-to-b from-[#0C2340]/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/LOGO_GRUPOROIBA_path1-5-9_Color.svg"
            alt="Grupo Roiba"
            width={140}
            height={76}
            className="h-9 md:h-10 w-auto brightness-0 invert transition-transform group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === item.href
                  ? 'text-[#E8C877]'
                  : 'text-white/80 hover:text-[#E8C877]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA + Lang Switcher Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="text-xs font-semibold tracking-wider uppercase text-white/60 hover:text-[#E8C877] transition-colors px-2 py-1 border border-white/15 rounded"
            aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </button>
          <Link
            href="/contacto"
            className="px-6 py-2.5 bg-[#E8C877] text-[#0C2340] text-sm font-semibold rounded-lg hover:bg-[#C9A96E] transition-all duration-300"
          >
            {t.nav.contactar}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Menú"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-0 bg-[#0C2340] z-40 transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl font-medium transition-colors ${
                pathname === item.href
                  ? 'text-[#E8C877]'
                  : 'text-white hover:text-[#E8C877]'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={toggleLang}
            className="text-sm font-semibold tracking-wider uppercase text-white/60 hover:text-[#E8C877] transition-colors px-4 py-2 border border-white/20 rounded"
          >
            {locale === 'es' ? 'English' : 'Español'}
          </button>
          <Link
            href="/contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 bg-[#E8C877] text-[#0C2340] font-semibold rounded-lg"
          >
            {t.nav.contactar}
          </Link>
        </div>
      </div>
    </header>
  )
}
