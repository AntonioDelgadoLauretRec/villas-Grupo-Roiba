import { type Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Grupo Roiba | Villas de Lujo en Punta Cana',
    template: '%s | Grupo Roiba',
  },
  description: 'Construcción boutique de villas de lujo en Punta Cana. Inversión patrimonial con seguridad jurídica, diseño personalizado y gestión integral. Desde $500,000 USD.',
  keywords: [
    'villas punta cana',
    'inversión inmobiliaria caribe',
    'construcción lujo dominicana',
    'real estate punta cana',
    'luxury villas caribbean',
    'grupo roiba',
  ],
  authors: [{ name: 'Grupo Roiba' }],
  creator: 'Grupo Roiba',
  publisher: 'Grupo Roiba',
  metadataBase: new URL('https://gruporoiba.com'),
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: 'https://gruporoiba.com',
    siteName: 'Grupo Roiba',
    title: 'Grupo Roiba | Villas de Lujo en Punta Cana',
    description: 'Construcción boutique de villas de lujo en Punta Cana. Inversión patrimonial con seguridad jurídica y diseño personalizado.',
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
    title: 'Grupo Roiba | Villas de Lujo en Punta Cana',
    description: 'Construcción boutique de villas de lujo en Punta Cana. Inversión patrimonial con seguridad jurídica.',
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
    // google: 'your-google-verification-code',
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
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Theme color */}
        <meta name="theme-color" content="#122620" />
      </head>
      <body className="bg-roiba-arena text-roiba-verde antialiased">
        {children}
      </body>
    </html>
  )
}
