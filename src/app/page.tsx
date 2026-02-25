import HomePage from '@/components/HomePage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grupo Roiba | Construcción de Villas de Lujo en Punta Cana',
  description:
    'Construcción boutique de villas premium en Punta Cana y Cap Cana, República Dominicana. Dirección técnica, diseño arquitectónico y gestión integral llave en mano. Más de 20 años de experiencia.',
  alternates: {
    canonical: 'https://gruporoiba.com',
  },
}

export default function Page() {
  return <HomePage />
}
