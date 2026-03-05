import type { Metadata } from 'next'
import ServiciosContent from './ServiciosContent'

export const metadata: Metadata = {
  title: 'Servicios | Grupo Roiba',
  description:
    'Dirección técnica, construcción llave en mano y gestión integral de proyectos residenciales exclusivos en Punta Cana. Servicios técnicos independientes, construcción y gestión post-entrega.',
  alternates: { canonical: 'https://gruporoiba.com/servicios' },
}

export default function ServiciosPage() {
  return <ServiciosContent />
}
