'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { locale, setLocale, t } = useLanguage()
  const lastScrollY = useRef(0)

  const navigation = [
    { name: t.nav.servicios, href: '/servicios' },
    { name: t.nav.proceso, href: '/proceso' },
    { name: t.nav.villas, href: '/villas' },
    { name: t.nav.destino, href: '/inversores' },
    { name: t.nav.nosotros, href: '/nosotros' },
    { name: t.nav.blog, href: '/blog' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setScrolled(currentY > 50)
      // Hide on scroll down, show on scroll up (only after 200px)
      if (currentY > 200) {
        setVisible(currentY < lastScrollY.current || currentY < 100)
      } else {
        setVisible(true)
      }
      lastScrollY.current = currentY
    }
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
        !visible && !mobileOpen ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'bg-[#0C2340]/95 backdrop-blur-md shadow-xl py-3 border-b border-[#C9A96E]/20'
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
        <nav className="hidden lg:flex items-center gap-7">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium tracking-wide transition-colors group/link ${
                pathname === item.href
                  ? 'text-[#E8C877]'
                  : 'text-white/80 hover:text-[#E8C877]'
              }`}
            >
              {item.name}
              {/* Animated underline */}
              <span className={`absolute -bottom-1 left-0 h-px bg-[#C9A96E] transition-all duration-300 ${
                pathname === item.href ? 'w-full' : 'w-0 group-hover/link:w-full'
              }`} />
            </Link>
          ))}
        </nav>

        {/* CTA + Lang Switcher Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="text-xs font-semibold tracking-wider uppercase text-white/60 hover:text-[#E8C877] transition-colors px-2 py-1 border border-white/15 rounded"
            aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
          >
            {locale === 'es' ? 'EN' : 'ES'}
          </button>
          <Link
            href="/contacto"
            className="px-6 py-2.5 bg-[#E8C877] text-[#0C2340] text-sm font-semibold rounded-sm hover:bg-[#C9A96E] hover:shadow-[0_8px_24px_rgba(201,169,110,0.3)] transition-all duration-300"
          >
            {t.nav.contactar}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-white p-2 relative z-50"
          aria-label="Menú"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? 'rotate-45 translate-y-[9px]' : ''}`} />
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${mobileOpen ? 'opacity-0 scale-0' : ''}`} />
            <span className={`block w-full h-0.5 bg-white transition-all duration-300 origin-center ${mobileOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu — slide from right with staggered links */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-[#0C2340] z-40 transition-all duration-500 ease-out-expo ${
          mobileOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        {/* Decorative elements */}
        <div className="absolute top-[15%] right-[10%] w-[200px] h-[200px] border border-[#C9A96E]/[0.06] rounded-full" />
        <div className="absolute bottom-[20%] left-[5%] w-[150px] h-[150px] border border-[#C9A96E]/[0.04] rotate-45" />

        <div className="flex flex-col items-center justify-center h-full gap-6 px-8">
          {navigation.map((item, idx) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl font-serif font-medium transition-all duration-300 ${
                pathname === item.href
                  ? 'text-[#E8C877]'
                  : 'text-white hover:text-[#E8C877]'
              }`}
              style={{
                transitionDelay: mobileOpen ? `${idx * 50 + 100}ms` : '0ms',
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              {item.name}
            </Link>
          ))}

          <div className="w-12 h-px bg-[#C9A96E]/30 my-2" />

          <button
            onClick={toggleLang}
            className="text-sm font-semibold tracking-wider uppercase text-white/60 hover:text-[#E8C877] transition-colors px-4 py-2 border border-white/20 rounded"
          >
            {locale === 'es' ? 'English' : 'Español'}
          </button>
          <Link
            href="/contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 bg-[#E8C877] text-[#0C2340] font-semibold rounded-sm hover:bg-[#C9A96E] transition-colors"
          >
            {t.nav.contactar}
          </Link>
        </div>
      </div>
    </header>
  )
}
