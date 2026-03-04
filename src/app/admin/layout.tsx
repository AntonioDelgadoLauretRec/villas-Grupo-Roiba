import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Admin Grupo Roiba',
    default: 'Admin | Grupo Roiba',
  },
  robots: { index: false, follow: false },
}

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
