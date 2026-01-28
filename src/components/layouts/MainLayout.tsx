'use client'

import { type FC, type ReactNode, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui'
import { COMPANY } from '@/lib/utils'

export interface MainLayoutProps {
  children: ReactNode
  locale?: 'es' | 'en'
}

const navigation = {
  es: [
    { href: '/proceso', label: 'Proceso' },
    { href: '/coleccion', label: 'Colección' },
    { href: '/inversores', label: 'Inversores' },
    { href: '/por-que-punta-cana', label: 'Por qué Punta Cana' },
  ],
  en: [
    { href: '/proceso', label: 'Process' },
    { href: '/coleccion', label: 'Collection' },
    { href: '/inversores', label: 'Investors' },
    { href: '/por-que-punta-cana', label: 'Why Punta Cana' },
  ],
}

export const MainLayout: FC<MainLayoutProps> = ({ children, locale = 'es' }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  )
}

/* ===== HEADER ===== */
const Header: FC<{ locale: 'es' | 'en' }> = ({ locale }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const nav = navigation[locale]

  // Handle scroll effect
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50)
    })
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-roiba-verde/95 backdrop-blur-sm shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-roiba-dorado rounded-sm flex items-center justify-center">
              <span className="font-serif text-roiba-verde font-bold text-xl">R</span>
            </div>
            <div>
              <span className="text-roiba-arena text-xs uppercase tracking-widest">Grupo</span>
              <span className="block font-serif text-roiba-arena text-xl -mt-1">Roiba</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-roiba-arena/80 hover:text-roiba-dorado transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/contacto">
              <Button variant="primary" size="sm">
                {locale === 'es' ? 'Empezar Proyecto' : 'Start Project'}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={cn(
                  'w-full h-0.5 bg-roiba-arena transition-all',
                  isMenuOpen && 'rotate-45 translate-y-2'
                )}
              />
              <span
                className={cn(
                  'w-full h-0.5 bg-roiba-arena transition-all',
                  isMenuOpen && 'opacity-0'
                )}
              />
              <span
                className={cn(
                  'w-full h-0.5 bg-roiba-arena transition-all',
                  isMenuOpen && '-rotate-45 -translate-y-2'
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300',
            isMenuOpen ? 'max-h-96 mt-6' : 'max-h-0'
          )}
        >
          <nav className="flex flex-col gap-4 pb-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-roiba-arena/80 hover:text-roiba-dorado transition-colors text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contacto" onClick={() => setIsMenuOpen(false)}>
              <Button variant="primary" className="w-full mt-4">
                {locale === 'es' ? 'Empezar Proyecto' : 'Start Project'}
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

/* ===== FOOTER ===== */
const Footer: FC<{ locale: 'es' | 'en' }> = ({ locale }) => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    es: {
      company: 'Empresa',
      links: [
        { href: '/proceso', label: 'Nuestro Proceso' },
        { href: '/inversores', label: 'Para Inversores' },
        { href: '/por-que-punta-cana', label: 'Por qué Punta Cana' },
        { href: '/contacto', label: 'Contacto' },
      ],
      legal: 'Legal',
      legalLinks: [
        { href: '/privacidad', label: 'Política de Privacidad' },
        { href: '/terminos', label: 'Términos y Condiciones' },
        { href: '/cookies', label: 'Política de Cookies' },
      ],
      disclaimer: 'Nota: Las imágenes mostradas son visualizaciones conceptuales generadas mediante IA. Los acabados finales, paisajismo y entorno pueden variar según el proyecto ejecutivo y la ubicación real.',
      rights: 'Todos los derechos reservados.',
    },
    en: {
      company: 'Company',
      links: [
        { href: '/proceso', label: 'Our Process' },
        { href: '/inversores', label: 'For Investors' },
        { href: '/por-que-punta-cana', label: 'Why Punta Cana' },
        { href: '/contacto', label: 'Contact' },
      ],
      legal: 'Legal',
      legalLinks: [
        { href: '/privacidad', label: 'Privacy Policy' },
        { href: '/terminos', label: 'Terms & Conditions' },
        { href: '/cookies', label: 'Cookie Policy' },
      ],
      disclaimer: 'Disclaimer: Images shown are AI-generated conceptual visualizations. Final finishes, landscaping, and surroundings may vary based on the executive project and actual location.',
      rights: 'All rights reserved.',
    },
  }

  const t = footerLinks[locale]

  return (
    <footer className="bg-roiba-verde text-roiba-arena">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-roiba-dorado rounded-sm flex items-center justify-center">
                <span className="font-serif text-roiba-verde font-bold text-2xl">R</span>
              </div>
              <div>
                <span className="text-roiba-arena/60 text-xs uppercase tracking-widest">Grupo</span>
                <span className="block font-serif text-roiba-arena text-2xl -mt-1">Roiba</span>
              </div>
            </Link>
            <p className="text-roiba-arena/70 max-w-md mb-6">
              {COMPANY.tagline}
            </p>
            <div className="space-y-2 text-sm text-roiba-arena/60">
              <p>{COMPANY.email}</p>
              <p>{COMPANY.phone}</p>
              <p>{COMPANY.address}</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-roiba-arena mb-4">{t.company}</h4>
            <ul className="space-y-3">
              {t.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-roiba-arena/70 hover:text-roiba-dorado transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-roiba-arena mb-4">{t.legal}</h4>
            <ul className="space-y-3">
              {t.legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-roiba-arena/70 hover:text-roiba-dorado transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-roiba-arena/10">
        <div className="container-wide py-6">
          <p className="text-xs text-roiba-arena/40 text-center max-w-4xl mx-auto">
            {t.disclaimer}
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-roiba-arena/10">
        <div className="container-wide py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-roiba-arena/50">
              © {currentYear} {COMPANY.name}. {t.rights}
            </p>
            {/* Social Links Placeholder */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="text-roiba-arena/50 hover:text-roiba-dorado transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-roiba-arena/50 hover:text-roiba-dorado transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-5 h-5" />
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                className="text-roiba-arena/50 hover:text-roiba-dorado transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ===== ICONS ===== */
const InstagramIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const LinkedInIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const WhatsAppIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default MainLayout
