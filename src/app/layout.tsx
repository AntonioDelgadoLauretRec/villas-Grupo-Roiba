import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Navbar } from '@/components/layouts/Navbar'
import { Footer } from '@/components/layouts/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Grupo Roiba | Inversión Patrimonial en el Caribe',
    template: '%s | Grupo Roiba',
  },
  description: 'Construcción boutique de villas de lujo en Punta Cana. Inversión inmobiliaria con control total, transparencia y seguridad jurídica garantizada. Tickets desde $500,000 USD.',
  keywords: [
    'villas Punta Cana',
    'inversión inmobiliaria Caribe',
    'construcción villas lujo',
    'real estate Dominican Republic',
    'Cap Cana investment',
    'luxury villa construction',
    'Confotur benefits',
  ],
  authors: [{ name: 'Grupo Roiba' }],
  creator: 'Grupo Roiba',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: 'https://gruporoiba.com',
    siteName: 'Grupo Roiba',
    title: 'Grupo Roiba | Inversión Patrimonial en el Caribe',
    description: 'Construcción boutique de villas de lujo en Punta Cana. Sin intermediarios. Control total. Seguridad jurídica.',
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
    title: 'Grupo Roiba | Inversión Patrimonial en el Caribe',
    description: 'Construcción boutique de villas de lujo en Punta Cana.',
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
  verification: {
    google: 'your-google-verification-code',
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
        <meta name="theme-color" content="#122620" />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Grain overlay for texture */}
        <div className="grain-overlay" aria-hidden="true" />
        
        <Navbar />
        
        <main className="flex-1">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
