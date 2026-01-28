import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react'
import { SITE_CONFIG, NAV_LINKS, SOCIAL_LINKS } from '@/lib/utils/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-carbon text-white">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-sunset rounded-lg flex items-center justify-center">
                <span className="text-carbon font-serif font-bold text-xl">R</span>
              </div>
              <span className="font-serif font-semibold text-xl">Grupo Roiba</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              {SITE_CONFIG.tagline}. Más de 400 propiedades de lujo en el 
              Caribe para inversores de alto patrimonio.
            </p>
            <div className="flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dorado transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dorado transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dorado transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-dorado transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Enlaces</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-dorado transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Investment Info */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Inversión</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/data-room" className="hover:text-dorado transition-colors">
                  Data Room
                </Link>
              </li>
              <li>
                <Link href="/roi-calculator" className="hover:text-dorado transition-colors">
                  Calculadora ROI
                </Link>
              </li>
              <li>
                <Link href="/legal" className="hover:text-dorado transition-colors">
                  Marco Legal
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-dorado transition-colors">
                  FAQ Inversores
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-dorado flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">{SITE_CONFIG.address}</span>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-dorado transition-colors"
                >
                  <Phone className="w-5 h-5 text-dorado" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-dorado transition-colors"
                >
                  <Mail className="w-5 h-5 text-dorado" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} {SITE_CONFIG.name}. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link href="/privacidad" className="text-gray-500 hover:text-dorado transition-colors">
              Privacidad
            </Link>
            <Link href="/terminos" className="text-gray-500 hover:text-dorado transition-colors">
              Términos
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-dorado transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
