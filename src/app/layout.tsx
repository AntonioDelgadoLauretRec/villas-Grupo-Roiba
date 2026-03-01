import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Navbar } from '@/components/layouts/Navbar'
import { Footer } from '@/components/layouts/Footer'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import CookieConsent from '@/components/ui/CookieConsent'

export const metadata: Metadata = {
  title: {
    default: 'Grupo Roiba | Construcción Premium en Punta Cana',
    template: '%s | Grupo Roiba',
  },
  description: 'Estudio de ingeniería y arquitectura especializado en villas de lujo en Punta Cana. Dirección técnica, diseño arquitectónico y gestión integral llave en mano.',
  keywords: [
    'estudio ingeniería Punta Cana',
    'arquitectura villas lujo Caribe',
    'construcción villas premium',
    'dirección técnica obra Punta Cana',
    'arquitectura Cap Cana',
    'luxury villa architecture Dominican Republic',
    'diseño arquitectónico villas',
    'gestión proyectos construcción Punta Cana',
    'ingeniería construcción República Dominicana',
  ],
  authors: [{ name: 'Grupo Roiba' }],
  creator: 'Grupo Roiba',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: 'https://gruporoiba.com',
    siteName: 'Grupo Roiba',
    title: 'Grupo Roiba | Construcción Premium en Punta Cana',
    description: 'Construcción boutique de villas premium en Punta Cana. Dirección técnica, control total y transparencia.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Grupo Roiba - Villas de Lujo en Punta Cana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grupo Roiba | Construcción Premium en Punta Cana',
    description: 'Construcción boutique de villas premium en Punta Cana.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://gruporoiba.com'),
  alternates: {
    canonical: '/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0C2340" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* JSON-LD Structured Data — Organization + LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': 'https://gruporoiba.com/#organization',
                  name: 'Grupo Roiba',
                  url: 'https://gruporoiba.com',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://gruporoiba.com/images/og-image.jpg',
                    width: 1200,
                    height: 630,
                  },
                  description: 'Estudio de ingeniería y arquitectura especializado en construcción de villas de lujo en Punta Cana y Cap Cana, República Dominicana.',
                  foundingDate: '2003',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    email: 'info@gruporoiba.com',
                    contactType: 'customer service',
                    availableLanguage: ['Spanish', 'English'],
                  },
                  sameAs: [],
                },
                {
                  '@type': ['LocalBusiness', 'ProfessionalService'],
                  '@id': 'https://gruporoiba.com/#localbusiness',
                  name: 'Grupo Roiba',
                  url: 'https://gruporoiba.com',
                  image: 'https://gruporoiba.com/images/og-image.jpg',
                  description: 'Estudio de ingeniería y arquitectura especializado en diseño y construcción de villas de lujo llave en mano en Punta Cana y Cap Cana. Dirección técnica y gestión integral con más de 20 años de experiencia.',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Punta Cana',
                    addressRegion: 'La Altagracia',
                    addressCountry: 'DO',
                  },
                  geo: {
                    '@type': 'GeoCoordinates',
                    latitude: 18.58,
                    longitude: -68.37,
                  },
                  email: 'info@gruporoiba.com',
                  priceRange: '$$$',
                  openingHoursSpecification: {
                    '@type': 'OpeningHoursSpecification',
                    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    opens: '09:00',
                    closes: '18:00',
                  },
                  areaServed: [
                    { '@type': 'Place', name: 'Punta Cana' },
                    { '@type': 'Place', name: 'Cap Cana' },
                    { '@type': 'Place', name: 'Bávaro' },
                    { '@type': 'Place', name: 'República Dominicana' },
                  ],
                  knowsAbout: [
                    'Ingeniería y arquitectura de villas de lujo',
                    'Dirección técnica de obra',
                    'Diseño arquitectónico premium',
                    'Construcción llave en mano Punta Cana',
                    'Gestión integral de proyectos',
                    'Interiorismo y equipamiento de villas',
                    'Control de calidad en construcción',
                  ],
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://gruporoiba.com/#website',
                  url: 'https://gruporoiba.com',
                  name: 'Grupo Roiba',
                  publisher: { '@id': 'https://gruporoiba.com/#organization' },
                  inLanguage: 'es',
                },
              ],
            }),
          }}
        />
        {/* Grain overlay for texture */}
        <div className="grain-overlay" aria-hidden="true" />
        
        <Navbar />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
        <FloatingWhatsApp />
        <CookieConsent />
      </body>
    </html>
  )
}
