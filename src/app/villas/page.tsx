import type { Metadata } from 'next'
import { getPublishedVillas } from '@/lib/data'
import VillasContent from './VillasContent'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Proyectos | Grupo Roiba',
  description: 'Proyectos en los que participamos como constructores, directores técnicos o supervisores en Punta Cana. Cada proyecto responde a un briefing único del cliente.',
  alternates: { canonical: 'https://gruporoiba.com/villas' },
}

export default async function VillasPage() {
  const villas = await getPublishedVillas()
  return <VillasContent villas={villas} />
}
