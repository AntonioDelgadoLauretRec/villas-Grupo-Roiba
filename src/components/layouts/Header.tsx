'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { cn } from '@/lib/utils'
import { NAV_LINKS, SITE_CONFIG } from '@/lib/utils/constants'
import { Button } from '@/components/ui'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-wide">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-ocean rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">R</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-serif font-semibold text-xl text-carbon">
                Grupo Roiba
              </span>
              <span className="block text-xs text-gray-500 -mt-1">
                Inversión Patrimonial
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-carbon hover:text-dorado transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-carbon hover:text-dorado transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">{SITE_CONFIG.phone}</span>
            </a>
            <Button variant="primary" size="sm">
              Solicitar Información
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-carbon"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-x-0 top-20 bg-white border-b border-gray-100 shadow-lg transition-all duration-300',
          isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        )}
      >
        <div className="container-wide py-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2 text-carbon hover:text-dorado transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <hr className="border-gray-200" />
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-2 py-2 text-carbon"
          >
            <Phone className="w-4 h-4" />
            <span>{SITE_CONFIG.phone}</span>
          </a>
          <Button variant="primary" fullWidth>
            Solicitar Información
          </Button>
        </div>
      </div>
    </header>
  )
}
