import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Navbar } from '@/components/layouts/Navbar'
import { Footer } from '@/components/layouts/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Grupo Roiba | Construcción Premium en Punta Cana',
    template: '%s | Grupo Roiba',
  },
  description: 'Construcción boutique de villas premium en Punta Cana. Dirección técnica, control total y transparencia garantizada en cada proyecto.',
  keywords: [
    'villas Punta Cana',
    'construcción premium Caribe',
    'construcción villas lujo',
    'real estate Dominican Republic',
    'Cap Cana villas',
    'luxury villa construction',
    'dirección técnica obra',
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
        <meta name="theme-color" content="#0C2340" />
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
