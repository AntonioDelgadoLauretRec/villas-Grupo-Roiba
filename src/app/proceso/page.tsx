import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import type { Metadata } from 'next'
import ProcesoContent from './ProcesoContent'
import ProcesoCTA from './ProcesoCTA'

export const metadata: Metadata = {
  title: 'El Método Roiba | Grupo Roiba',
  description: 'Seis fases definidas para avanzar sin incertidumbre. Entregables claros, supervisión técnica directa y puntos de decisión en cada etapa del proyecto.',
  alternates: { canonical: 'https://gruporoiba.com/proceso' },
}

export default function ProcesoPage() {
  return (
    <main className="pt-20">
      <ProcesoContent />
      <ProcessTimeline />
      <ProcesoCTA />
    </main>
  )
}
