'use client'

import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const FOOTER_LINKS = {
  empresa: [
    { href: '/proceso', label: 'Nuestro Proceso' },
    { href: '/nosotros', label: 'Sobre Nosotros' },
    { href: '/contacto', label: 'Contacto' },
    { href: '/blog', label: 'Blog' },
  ],
  servicios: [
    { href: '/villas', label: 'Proyectos' },
    { href: '/inversores', label: 'Inversores' },
    { href: '/servicios', label: 'Servicios' },
  ],
  legal: [
    { href: '/privacidad', label: 'Política de Privacidad' },
    { href: '/terminos', label: 'Términos de Uso' },
    { href: '/cookies', label: 'Política de Cookies' },
  ],
}

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-roiba-verde text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] border border-white/[0.02] rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border border-white/[0.02] rounded-full translate-y-1/2 -translate-x-1/3" />

      {/* Gold top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-roiba-dorado/40 to-transparent" />

      {/* Main footer */}
      <div className="container-editorial py-14 md:py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="mb-8">
              <Image
                src="/images/LOGO_GRUPOROIBA_path1-5-9_Color.svg"
                alt="Grupo Roiba"
                width={160}
                height={88}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>

            <p className="text-body text-white/50 font-light mb-8 max-w-sm leading-relaxed">
              Servicios técnicos especializados para proyectos residenciales de alta gama en Punta Cana:
              dirección técnica, supervisión de obra, construcción llave en mano y gestión integral.
            </p>

            <div className="space-y-3 text-caption text-white/40">
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-roiba-dorado/60 flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span>Punta Cana, República Dominicana</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-roiba-dorado/60 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <a
                  href="mailto:info@gruporoiba.com"
                  className="hover:text-roiba-dorado-light transition-colors"
                >
                  info@gruporoiba.com
                </a>
              </div>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-2">
            <h4 className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado/60 mb-5">
              Empresa
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body text-white/50 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado/60 mb-5">
              Servicios
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body text-white/50 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado/60 mb-5">
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body text-white/50 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Newsletter */}
          <div className="lg:col-span-2">
            <h4 className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado/60 mb-5">
              Conectar
            </h4>
            <div className="flex gap-3 mb-8">
              <a
                href="https://linkedin.com/company/gruporoiba"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:border-roiba-dorado hover:text-roiba-dorado-light hover:bg-roiba-dorado/10 transition-all duration-300 rounded-sm"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/grupo_roiba/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/40 hover:border-roiba-dorado hover:text-roiba-dorado-light hover:bg-roiba-dorado/10 transition-all duration-300 rounded-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Mini CTA */}
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-roiba-dorado hover:text-roiba-dorado-light transition-colors"
            >
              Hablemos
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 7h8M8 4l3 3-3 3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container-editorial py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-caption text-white/30">
              © {currentYear} Grupo Roiba. Todos los derechos reservados.
            </p>
            <p className="text-caption text-white/20 text-center md:text-right max-w-lg">
              Las imágenes de proyectos pueden corresponder a visualizaciones, obras en proceso o proyectos completados según se indica en cada caso.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
