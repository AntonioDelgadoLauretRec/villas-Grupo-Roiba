'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Servicios', href: '/servicios' },
  { name: 'Proceso', href: '/proceso' },
  { name: 'Villas', href: '/villas' },
  { name: 'Destino', href: '/por-que-punta-cana' },
  { name: 'Nosotros', href: '/nosotros' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#122620]/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/images/logo.png"
            alt="Grupo Roiba"
            width={40}
            height={40}
            className="transition-transform group-hover:scale-105"
          />
          <span className="text-[#F4EBD0] font-bold text-lg tracking-wide">
            Grupo<span className="text-[#FFCC53]">Roiba</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                pathname === item.href
                  ? 'text-[#FFCC53]'
                  : 'text-[#F4EBD0]/80 hover:text-[#FFCC53]'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <Link
          href="/contacto"
          className="hidden md:inline-block px-6 py-2.5 bg-[#FFCC53] text-[#122620] text-sm font-semibold rounded-lg hover:bg-[#B68D40] transition-all duration-300"
        >
          Contactar
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-[#F4EBD0] p-2"
          aria-label="Menú"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
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
        className={`md:hidden fixed inset-0 top-0 bg-[#122620] z-40 transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl font-medium transition-colors ${
                pathname === item.href
                  ? 'text-[#FFCC53]'
                  : 'text-[#F4EBD0] hover:text-[#FFCC53]'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-4 px-8 py-3 bg-[#FFCC53] text-[#122620] font-semibold rounded-lg"
          >
            Contactar
          </Link>
        </div>
      </div>
    </header>
  )
}
