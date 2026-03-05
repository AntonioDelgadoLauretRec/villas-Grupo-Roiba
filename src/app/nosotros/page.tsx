import type { Metadata } from 'next'
import NosotrosContent from './NosotrosContent'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Grupo Roiba',
  description:
    'Conozca Grupo Roiba: más de 20 años ejecutando y supervisando proyectos residenciales y hoteleros en España y el Caribe. Dirección técnica y construcción exclusiva.',
  alternates: { canonical: 'https://gruporoiba.com/nosotros' },
}

export default function NosotrosPage() {
  return <NosotrosContent />
}
