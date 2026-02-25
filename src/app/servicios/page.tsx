import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios | Grupo Roiba',
  description:
    'Servicios integrales de diseño, construcción y gestión de proyectos residenciales de alta gama. Control integral del proceso constructivo con más de 20 años de experiencia.',
}

const serviciosGrid = [
  {
    num: '01',
    title: 'Diseño Arquitectónico',
    description:
      'Proyectos exclusivos que integran estética contemporánea con funcionalidad y eficiencia constructiva. Cada diseño nace de su terreno, su visión y nuestro rigor técnico.',
  },
  {
    num: '02',
    title: 'Construcción',
    description:
      'Ejecución integral con materiales premium y control en cada fase.',
  },
  {
    num: '03',
    title: 'Dirección Técnica',
    description:
      'Supervisión que garantiza plazos, calidad y normativa.',
  },
  {
    num: '04',
    title: 'Gestión Llave en Mano',
    description:
      'Un solo interlocutor. Desde el concepto hasta la entrega.',
  },
  {
    num: '05',
    title: 'Desarrollo de Proyectos',
    description:
      'Viabilidad técnica y económica para su inversión.',
  },
  {
    num: '06',
    title: 'Control de Calidad',
    description:
      'Protocolos de inspección. Estándares medibles.',
  },
  {
    num: '07',
    title: 'Gestión de Instalaciones',
    description:
      'Sistemas eléctricos, hidráulicos, climatización y domótica.',
  },
  {
    num: '08',
    title: 'Control de Costes',
    description:
      'Presupuestos detallados y seguimiento en tiempo real.',
  },
]

interface SubService {
  id: string
  label: string
  title: string
  description: string
  includes: string[]
  note?: string
}

const subServices: SubService[] = [
  {
    id: 'villas-premium',
    label: 'CONSTRUCCIÓN DE VILLAS PREMIUM',
    title: 'Proyectos únicos, ejecución precisa',
    description:
      'Desarrollamos y construimos villas premium totalmente personalizadas, adaptando cada proyecto a los requerimientos técnicos, funcionales y estéticos del cliente. Cada obra se ejecuta bajo un modelo basado en planificación rigurosa, control técnico y altos estándares de acabado, garantizando calidad, control de costes y cumplimiento de plazos.',
    includes: [
      'Dirección de obra y jefatura de proyecto',
      'Ejecución integral de la construcción',
      'Control de calidad en cada fase',
      'Selección y coordinación de subcontratistas premium',
      'Seguimiento técnico y económico de la obra',
      'Informes periódicos de avance',
    ],
  },
  {
    id: 'interiorismo',
    label: 'INTERIORISMO Y EQUIPAMIENTO',
    title: 'Coherencia en diseño, precisión en la ejecución',
    description:
      'Como parte del desarrollo de nuestras villas premium, ofrecemos un servicio de interiorismo orientado a dar continuidad al concepto arquitectónico y constructivo del proyecto, garantizando coherencia en diseño, materiales y ejecución.',
    includes: [
      'Definición del concepto de diseño interior',
      'Selección de materiales, acabados y equipamiento',
      'Diseño de iluminación técnica y decorativa',
      'Asesoramiento en mobiliario y elementos a medida',
      'Integración de paisajismo y áreas exteriores',
      'Coordinación con la ejecución de la obra',
    ],
  },
  {
    id: 'seguridad-juridica',
    label: 'SEGURIDAD JURÍDICA EN LA INVERSIÓN',
    title: 'Protección desde el origen del proyecto',
    description:
      'La adquisición del terreno es una de las fases más críticas de cualquier desarrollo. Por ello, Grupo Roiba trabaja con un equipo de profesionales especializados en seguridad jurídica inmobiliaria en República Dominicana, encargado de verificar la situación legal de cada propiedad antes de su adquisición.',
    includes: [
      'Due diligence legal del terreno',
      'Verificación de titularidad y cargas',
      'Revisión de documentación registral',
      'Acompañamiento en la adquisición',
      'Apoyo en la obtención de licencias y permisos',
      'Coordinación de aspectos legales durante el desarrollo del proyecto',
    ],
  },
  {
    id: 'roiba-care',
    label: 'ROIBA CARE',
    title: 'Gestión y mantenimiento para proteger su inversión',
    description:
      'En Grupo Roiba, el proyecto no finaliza con la entrega de la vivienda. A través de Roiba Care, ofrecemos un servicio de gestión y mantenimiento orientado a preservar el valor de la propiedad y garantizar su correcto funcionamiento a lo largo del tiempo. Este servicio está especialmente diseñado para propietarios que no residen de forma permanente.',
    includes: [
      'Mantenimiento preventivo y correctivo de la propiedad',
      'Supervisión periódica del estado de la vivienda',
      'Coordinación de personal de servicio y proveedores',
      'Gestión operativa de la propiedad',
      'Informes periódicos de estado',
    ],
    note: 'Los servicios serán contratados directamente por el cliente con empresas externas especializadas. Grupo Roiba actúa únicamente como facilitador de contactos de confianza en la zona.',
  },
  {
    id: 'project-management',
    label: 'PROJECT MANAGEMENT',
    title: 'Coordinación y control del proyecto',
    description:
      'Ofrecemos servicios de Project Management para clientes que requieren una gestión profesional e independiente de su proyecto de construcción. Coordinamos los diferentes agentes implicados, optimizando recursos y asegurando el cumplimiento de plazos, costes y objetivos definidos.',
    includes: [
      'Planificación y cronograma del proyecto',
      'Control presupuestario y seguimiento de costes',
      'Coordinación de contratistas y proveedores',
      'Seguimiento del avance de obra',
      'Identificación y gestión de riesgos',
    ],
  },
]

export default function ServiciosPage() {
  return (
    <main>
      {/* ============================================ */}
      {/* 1. HERO — Dark navy background               */}
      {/* ============================================ */}
      <section className="relative pt-28 pb-14 md:pt-32 md:pb-20 bg-roiba-verde overflow-hidden">
        {/* Subtle grain overlay */}
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            Nuestros Servicios
          </p>
          <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-8">
            Ingeniería aplicada.
            <br />
            Proyectos bajo control
          </h1>
          <p className="text-white/60 text-body-lg max-w-2xl mx-auto leading-relaxed">
            Control integral del proceso constructivo. Cada servicio responde a
            una necesidad real del proyecto.
          </p>
          {/* Decorative line */}
          <div className="mt-12 mx-auto w-16 h-px bg-roiba-dorado/40" />
        </div>
      </section>

      {/* ============================================ */}
      {/* 2. SERVICES GRID — 8 services, light bg       */}
      {/* ============================================ */}
      <section className="py-14 md:py-20 bg-roiba-arena-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {serviciosGrid.map((servicio) => (
              <div
                key={servicio.num}
                className="group bg-white rounded-xl p-8 border border-roiba-verde/10 hover:border-roiba-dorado/30 transition-colors duration-300"
              >
                <span className="block font-serif text-display-md text-roiba-dorado/30 mb-4 leading-none">
                  {servicio.num}
                </span>
                <h3 className="font-serif text-heading text-roiba-verde mb-3">
                  {servicio.title}
                </h3>
                <p className="text-roiba-verde/60 text-body leading-relaxed">
                  {servicio.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 3. INTRO SECTION — "Todo lo que necesita"     */}
      {/* ============================================ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            Nuestras Líneas de Servicio
          </p>
          <h2 className="font-serif text-display-md text-roiba-verde mb-8">
            Todo lo que necesita su proyecto
          </h2>
          <p className="text-roiba-verde/60 text-body-lg leading-relaxed max-w-3xl mx-auto">
            Estructuramos nuestra actividad en dos líneas principales: dirección
            técnica y supervisión de obra, y construcción de villas premium. Cada
            servicio responde a una necesidad concreta del cliente, con un
            objetivo común: garantizar control, calidad y transparencia en todo
            el proceso constructivo con un equipo con más de 20 años de
            experiencia en el sector.
          </p>
          <div className="mt-10 mx-auto w-16 h-px bg-roiba-dorado/40" />
        </div>
      </section>

      {/* ============================================ */}
      {/* 4. SUB-SERVICES — Alternating layout          */}
      {/* ============================================ */}
      {subServices.map((service, index) => {
        const isEven = index % 2 === 0
        const bgColor = isEven ? 'bg-roiba-arena-light' : 'bg-white'

        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-14 md:py-20 ${bgColor}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Service Label */}
              <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-4">
                {service.label}
              </p>

              <div
                className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-start ${
                  !isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Text Content */}
                <div className="flex-1 lg:max-w-xl">
                  <h2 className="font-serif text-display-md text-roiba-verde mb-6">
                    {service.title}
                  </h2>
                  <p className="text-roiba-verde/60 text-body-lg leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <Link
                    href="/contacto"
                    className="inline-block px-8 py-4 bg-roiba-verde text-white font-medium rounded-lg hover:bg-roiba-verde-light transition-colors duration-300"
                  >
                    Solicitar información
                  </Link>
                </div>

                {/* Features Card */}
                <div className="flex-1 w-full">
                  <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-roiba-verde/10">
                    <h3 className="font-serif text-subheading text-roiba-verde mb-6 font-semibold">
                      Incluye
                    </h3>
                    <ul className="space-y-4">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-roiba-dorado mt-0.5 text-lg font-bold flex-shrink-0">
                            &#10003;
                          </span>
                          <span className="text-roiba-verde/70 text-body leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {service.note && (
                      <div className="mt-8 pt-6 border-t border-roiba-verde/10">
                        <p className="text-roiba-verde/50 text-caption italic leading-relaxed">
                          {service.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ============================================ */}
      {/* 5. CTA SECTION — Dark navy                    */}
      {/* ============================================ */}
      <section className="relative py-14 md:py-20 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-display-md text-white mb-6">
            ¿Tiene un proyecto en mente?
          </h2>
          <p className="text-white/60 text-body-lg mb-12 leading-relaxed">
            Cuéntenos su idea. Nuestro equipo técnico le asesorará sin
            compromiso.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-roiba-dorado-light text-roiba-verde font-semibold rounded-lg hover:bg-roiba-dorado transition-colors duration-300 text-lg"
          >
            Solicitar consulta gratuita
          </Link>
        </div>
      </section>
    </main>
  )
}
