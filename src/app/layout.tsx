import type { Metadata } from 'next'
import '@/styles/globals.css'
import { DEFAULT_SEO, SITE_CONFIG } from '@/lib/utils/constants'

// NOTE: Google Fonts disabled due to network restrictions in dev environment
// When deploying to production with internet access, uncomment the Google Fonts import:
// import { Lato, Playfair_Display } from 'next/font/google'
// const lato = Lato({ subsets: ['latin'], weight: ['300', '400', '700'], variable: '--font-lato', display: 'swap' })
// const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-playfair', display: 'swap' })

// System font fallbacks configured in tailwind.config.ts and globals.css

export const metadata: Metadata = {
  metadataBase: new URL('https://gruporoiba.com'),
  title: {
    default: DEFAULT_SEO.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: DEFAULT_SEO.description,
  keywords: [
    'villas punta cana',
    'inversión inmobiliaria república dominicana',
    'propiedades de lujo caribe',
    'real estate punta cana',
    'luxury villas caribbean',
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: [
      {
        url: DEFAULT_SEO.ogImage,
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_SEO.title,
    description: DEFAULT_SEO.description,
    images: [DEFAULT_SEO.ogImage],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
