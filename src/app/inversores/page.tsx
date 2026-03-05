import type { Metadata } from 'next'
import InversoresContent from './InversoresContent'

export const metadata: Metadata = {
  title: 'Inversores | Grupo Roiba',
  description: 'Datos de mercado, marco legal y garantías técnicas para invertir con criterio en Punta Cana. Beneficios fiscales, seguridad jurídica y asesoramiento técnico.',
  alternates: { canonical: 'https://gruporoiba.com/inversores' },
}

export default function InversoresPage() {
  return (
    <main className="pt-20">
      <InversoresContent />
    </main>
  )
}
