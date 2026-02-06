'use client'

import Link from 'next/link'

const services = [
  {
    icon: '📐',
    title: 'Diseño Arquitectónico',
    description:
      'Proyectos personalizados que combinan funcionalidad, estética y normativa local.',
    href: '/servicios#diseno',
  },
  {
    icon: '🏗️',
    title: 'Construcción Integral',
    description:
      'Ejecución completa de obra con supervisión técnica permanente y control de calidad.',
    href: '/servicios#construccion',
  },
  {
    icon: '📋',
    title: 'Gestión de Proyecto',
    description:
      'Coordinación de plazos, presupuestos y proveedores con reporting periódico al cliente.',
    href: '/servicios#gestion',
  },
  {
    icon: '⚖️',
    title: 'Asesoría Legal y Fiscal',
    description:
      'Due diligence, verificación de títulos y optimización fiscal en cada jurisdicción.',
    href: '/servicios#legal',
  },
  {
    icon: '🏠',
    title: 'Interiorismo',
    description:
      'Diseño de interiores llave en mano con selección de materiales y mobiliario premium.',
    href: '/servicios#interiorismo',
  },
  {
    icon: '🔧',
    title: 'Roiba Care',
    description:
      'Mantenimiento post-entrega, gestión de propiedades y atención al propietario.',
    href: '/servicios#care',
  },
]

export function ServicesOverview() {
  return (
    <section className="py-20 md:py-28 bg-[#F4EBD0]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#B68D40] uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#122620] mb-6">
            Soluciones integrales de construcción
          </h2>
          <p className="text-[#122620]/70 text-lg max-w-2xl mx-auto">
            Acompañamos cada proyecto desde la concepción hasta la entrega,
            con un equipo multidisciplinar y más de 38 años de experiencia.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#122620]/5"
            >
              <span className="text-4xl block mb-5">{service.icon}</span>
              <h3 className="text-xl font-bold text-[#122620] mb-3 group-hover:text-[#B68D40] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#122620]/60 leading-relaxed">
                {service.description}
              </p>
              <span className="inline-block mt-4 text-[#B68D40] text-sm font-medium group-hover:translate-x-1 transition-transform">
                Ver más →
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/servicios"
            className="inline-block px-8 py-4 bg-[#122620] text-[#F4EBD0] font-semibold rounded-lg hover:bg-[#122620]/90 transition-all duration-300"
          >
            Ver todos los servicios
          </Link>
        </div>
      </div>
    </section>
  )
}
