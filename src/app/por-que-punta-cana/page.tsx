import type { Metadata } from 'next'
import PuntaCanaContent from './PuntaCanaContent'

export const metadata: Metadata = {
  title: '¿Por qué Punta Cana? | Grupo Roiba',
  description: 'Infraestructura de primer nivel, marco legal estable y potencial de revalorización sostenido. Descubre por qué Punta Cana es el destino ideal para tu inversión.',
  alternates: { canonical: 'https://gruporoiba.com/por-que-punta-cana' },
}

export default function PuntaCanaPage() {
  return (
    <main className="pt-20">
      <PuntaCanaContent />
    </main>
  )
}
