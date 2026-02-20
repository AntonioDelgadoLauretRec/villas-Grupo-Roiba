import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios | Grupo Roiba',
  description:
    'Servicios integrales de diseño, construcción y gestión de proyectos residenciales de alta gama. Más de 38 años de experiencia en España y el Caribe.',
}

const servicios = [
  {
    id: 'diseno',
    icon: '📐',
    title: 'Diseño Arquitectónico',
    subtitle: 'Proyectos a medida',
    description:
      'Nuestro equipo de arquitectos desarrolla proyectos personalizados que combinan funcionalidad, estética contemporánea y cumplimiento normativo en cada jurisdicción. Trabajamos con el cliente en un proceso de co-diseño para materializar su visión.',
    features: [
      'Estudio de viabilidad y análisis del terreno',
      'Anteproyecto y proyecto básico',
      'Proyecto de ejecución con detalles constructivos',
      'Renders fotorrealistas y recorridos virtuales 3D',
      'Tramitación de licencias y permisos',
    ],
  },
  {
    id: 'construccion',
    icon: '🏗️',
    title: 'Construcción Integral',
    subtitle: 'Ejecución con supervisión técnica permanente',
    description:
      'Asumimos la dirección completa de la obra con equipos propios y subcontratistas certificados. Control de calidad en cada fase, cumplimiento riguroso de plazos y transparencia total en costes.',
    features: [
      'Dirección de obra y jefatura de proyecto',
      'Control de calidad con protocolos ISO',
      'Supervisión 24/7 vía dashboard del cliente',
      'Gestión de subcontratistas certificados',
      'Reportes semanales con fotografías y avance',
    ],
  },
  {
    id: 'gestion',
    icon: '📋',
    title: 'Gestión de Proyecto',
    subtitle: 'Coordinación integral de plazos y presupuestos',
    description:
      'Ofrecemos servicios de Project Management para clientes que requieren coordinación profesional de sus proyectos de construcción. Optimizamos recursos, controlamos presupuestos y garantizamos el cumplimiento de plazos.',
    features: [
      'Planificación y cronograma detallado',
      'Control presupuestario con alertas',
      'Coordinación de proveedores y logística',
      'Reporting periódico al cliente',
      'Gestión de riesgos y contingencias',
    ],
  },
  {
    id: 'legal',
    icon: '⚖️',
    title: 'Asesoría Legal y Fiscal',
    subtitle: 'Seguridad jurídica en cada operación',
    description:
      'Red de profesionales jurídicos en España y República Dominicana que garantizan la seguridad de cada operación. Due diligence completa, verificación de títulos y optimización fiscal adaptada a cada jurisdicción.',
    features: [
      'Due diligence inmobiliaria completa',
      'Verificación de títulos y cargas',
      'Estructuración fiscal optimizada',
      'Asesoramiento en régimen Confotur (RD)',
      'Contratos y escrituración',
    ],
  },
  {
    id: 'interiorismo',
    icon: '🏠',
    title: 'Interiorismo',
    subtitle: 'Diseño de interiores llave en mano',
    description:
      'Servicio integral de interiorismo que abarca desde el concepto hasta la instalación final. Selección de materiales premium, mobiliario a medida y coordinación de todos los oficios para una entrega impecable.',
    features: [
      'Concepto y moodboards personalizados',
      'Selección de materiales y acabados premium',
      'Mobiliario a medida y de diseñador',
      'Iluminación técnica y decorativa',
      'Paisajismo y áreas exteriores',
    ],
  },
  {
    id: 'care',
    icon: '🔧',
    title: 'Roiba Care',
    subtitle: 'Servicio post-entrega integral',
    description:
      'Nuestro compromiso no termina con la entrega de llaves. Roiba Care ofrece un servicio completo de mantenimiento, gestión de propiedades y atención al propietario para que su inversión esté siempre en las mejores condiciones.',
    features: [
      'Mantenimiento preventivo programado',
      'Gestión de alquileres y rendimientos',
      'Atención al propietario 24/7',
      'Supervisión de personal de servicio',
      'Informes trimestrales de estado',
    ],
  },
]

const diferenciadores = [
  {
    stat: '38+',
    label: 'Años de experiencia',
    detail: 'Desde 1986 en el sector de la construcción',
  },
  {
    stat: '100%',
    label: 'Control directo',
    detail: 'Sin intermediarios ni subcontratas opacas',
  },
  {
    stat: '2',
    label: 'Territorios',
    detail: 'Operaciones en España y República Dominicana',
  },
  {
    stat: '360°',
    label: 'Servicio integral',
    detail: 'Del diseño a la gestión post-entrega',
  },
]

export default function ServiciosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-[#122620]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#B68D40] uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Nuestros Servicios
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4EBD0] mb-6">
            Todo lo que necesita su proyecto
          </h1>
          <p className="text-[#F4EBD0]/70 text-lg max-w-2xl mx-auto">
            Un equipo multidisciplinar con más de 38 años de experiencia
            acompañando cada proyecto desde la concepción hasta más allá de la
            entrega.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-[#F4EBD0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {servicios.map((servicio, index) => (
              <div
                key={servicio.id}
                id={servicio.id}
                className={`flex flex-col lg:flex-row gap-12 items-start ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Info */}
                <div className="flex-1">
                  <span className="text-5xl block mb-4">{servicio.icon}</span>
                  <p className="text-[#B68D40] uppercase tracking-wider text-sm font-medium mb-2">
                    {servicio.subtitle}
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#122620] mb-4">
                    {servicio.title}
                  </h2>
                  <p className="text-[#122620]/70 text-lg leading-relaxed mb-8">
                    {servicio.description}
                  </p>
                  <Link
                    href="/contacto"
                    className="inline-block px-6 py-3 bg-[#122620] text-[#F4EBD0] font-medium rounded-lg hover:bg-[#122620]/90 transition-all"
                  >
                    Solicitar información
                  </Link>
                </div>

                {/* Features Card */}
                <div className="flex-1 w-full">
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-[#122620]/5">
                    <h3 className="text-lg font-bold text-[#122620] mb-6">
                      Incluye
                    </h3>
                    <ul className="space-y-4">
                      {servicio.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-[#FFCC53] mt-0.5 text-lg">
                            ✓
                          </span>
                          <span className="text-[#122620]/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="py-20 bg-[#122620]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#F4EBD0] mb-4">
              Nuestro valor diferencial
            </h2>
            <p className="text-[#F4EBD0]/60 text-lg max-w-xl mx-auto">
              Lo que nos distingue después de casi cuatro décadas en el sector.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciadores.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-[#FFCC53] mb-2">
                  {item.stat}
                </p>
                <p className="text-[#F4EBD0] font-semibold mb-1">
                  {item.label}
                </p>
                <p className="text-[#F4EBD0]/50 text-sm">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#B68D40] uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#122620] mb-4">
              Presencia internacional
            </h2>
            <p className="text-[#122620]/60 text-lg max-w-xl mx-auto">
              Proyectos ejecutados en dos continentes con los mismos estándares
              de calidad.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#F4EBD0] rounded-xl p-8 border border-[#122620]/5">
              <h3 className="text-2xl font-bold text-[#122620] mb-2">
                🇪🇸 España
              </h3>
              <p className="text-[#B68D40] font-medium mb-4">Sede central</p>
              <p className="text-[#122620]/60 leading-relaxed">
                Más de tres décadas de trayectoria en el mercado español.
                Proyectos residenciales, reformas integrales y rehabilitación de
                edificios singulares.
              </p>
            </div>
            <div className="bg-[#F4EBD0] rounded-xl p-8 border border-[#122620]/5">
              <h3 className="text-2xl font-bold text-[#122620] mb-2">
                🇩🇴 República Dominicana
              </h3>
              <p className="text-[#B68D40] font-medium mb-4">
                Punta Cana
              </p>
              <p className="text-[#122620]/60 leading-relaxed">
                Construcción de villas de lujo en la zona más exclusiva del
                Caribe. Beneficios fiscales bajo régimen Confotur y gestión
                integral del proyecto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#122620]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F4EBD0] mb-6">
            ¿Tiene un proyecto en mente?
          </h2>
          <p className="text-[#F4EBD0]/60 text-lg mb-10">
            Cuéntenos su idea. Nuestro equipo técnico le asesorará sin
            compromiso sobre la mejor manera de materializarla.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-[#FFCC53] text-[#122620] font-semibold rounded-lg hover:bg-[#B68D40] transition-all duration-300 text-lg"
          >
            Solicitar consulta gratuita
          </Link>
        </div>
      </section>
    </main>
  )
}
