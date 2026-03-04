import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios | Grupo Roiba',
  description:
    'Dirección técnica, construcción llave en mano y gestión integral de proyectos residenciales de alta gama en Punta Cana. Servicios técnicos independientes, construcción y gestión post-entrega.',
  alternates: { canonical: 'https://gruporoiba.com/servicios' },
}

/* ─── Client Scenarios ─── */
const scenarios = [
  {
    id: 'construir-desde-cero',
    situation: 'Tengo terreno, necesito construir desde cero',
    services: [
      'Construcción llave en mano',
      'Dirección técnica integral',
      'Interiorismo y equipamiento',
      'Roiba Care (post-entrega)',
    ],
    result:
      'Su villa lista para habitar, con supervisión directa de ingeniero.',
    cta: 'Ver el proceso completo',
    ctaHref: '/proceso',
  },
  {
    id: 'supervision',
    situation:
      'Ya tengo arquitecto y constructor, necesito que alguien vigile que se haga bien',
    services: [
      'Dirección técnica independiente',
      'Gestión de proyecto',
      'Control de costes',
    ],
    result:
      'Supervisión semanal in-situ con informes técnicos directos.',
    cta: 'Ver cómo supervisamos',
    ctaHref: '/contacto',
  },
  {
    id: 'evaluando',
    situation:
      'Estoy evaluando invertir pero necesito asesoramiento técnico antes de decidir',
    services: [
      'Asesoramiento técnico',
      'Due diligence de terrenos',
      'Seguridad jurídica',
      'Análisis de viabilidad',
    ],
    result:
      'Informe técnico de viabilidad antes de comprometerse.',
    cta: 'Solicitar análisis',
    ctaHref: '/contacto',
  },
  {
    id: 'gestion-post',
    situation:
      'Mi propiedad ya está construida, necesito gestión y mantenimiento profesional',
    services: [
      'Roiba Care',
      'Mantenimiento preventivo',
      'Gestión operativa de la propiedad',
    ],
    result:
      'Su inversión protegida y operativa todo el año.',
    cta: 'Ver planes de mantenimiento',
    ctaHref: '/contacto',
  },
]

/* ─── Business Lines ─── */
interface ServiceLine {
  id: string
  lineTag: string
  lineTitle: string
  lineIntro: string
  services: {
    title: string
    includes: string[]
    forWhom: string
    duration: string
    ctaLabel: string
  }[]
}

const businessLines: ServiceLine[] = [
  {
    id: 'servicios-tecnicos',
    lineTag: 'Para clientes con equipo propio',
    lineTitle: 'Servicios Técnicos Independientes',
    lineIntro:
      'Si ya tiene arquitecto, constructor o promotor, pero necesita supervisión técnica independiente para proteger su inversión.',
    services: [
      {
        title: 'Dirección Técnica',
        includes: [
          'Supervisión semanal in-situ por ingeniero',
          'Validación de calidad de materiales y ejecución',
          'Informes técnicos fotográficos mensuales',
          'Interlocución directa con constructor',
        ],
        forWhom: 'Inversores que construyen con equipo local',
        duration: 'Desde fase de cimentación hasta entrega',
        ctaLabel: 'Solicitar información',
      },
      {
        title: 'Gestión de Proyecto',
        includes: [
          'Coordinación de todos los agentes (arquitecto, constructor, ingenierías)',
          'Control de plazos y presupuesto',
          'Gestión de cambios y extras',
          'Reporting semanal al cliente',
        ],
        forWhom: 'Clientes que no pueden estar presencialmente',
        duration: 'Desde diseño hasta recepción de llaves',
        ctaLabel: 'Solicitar información',
      },
      {
        title: 'Asesoramiento Técnico y Due Diligence',
        includes: [
          'Análisis de viabilidad técnica de terrenos',
          'Revisión de proyectos existentes',
          'Detección de riesgos constructivos',
          'Estimación de costes realista',
        ],
        forWhom: 'Inversores en fase de evaluación',
        duration: '1-2 semanas',
        ctaLabel: 'Solicitar análisis de terreno',
      },
    ],
  },
  {
    id: 'construccion-llave-en-mano',
    lineTag: 'Para clientes que delegan la ejecución completa',
    lineTitle: 'Construcción Llave en Mano',
    lineIntro:
      'Asumimos la responsabilidad total del proyecto: desde el diseño arquitectónico hasta la entrega de llaves, con supervisión directa de los fundadores.',
    services: [
      {
        title: 'Construcción de Villas a Medida',
        includes: [
          'Desarrollo del proyecto arquitectónico',
          'Tramitación de permisos',
          'Ejecución de obra con equipo propio y subcontratas supervisadas',
          'Control de calidad en cada fase',
          'Garantía estructural',
        ],
        forWhom: 'Rango de proyecto: 250 m² a 800 m²',
        duration: '12-18 meses desde diseño',
        ctaLabel: 'Ver proceso de construcción',
      },
      {
        title: 'Interiorismo y Equipamiento',
        includes: [
          'Diseño de interiores coherente con arquitectura',
          'Selección de acabados y materiales',
          'Mobiliario fijo y equipamiento',
          'Coordinación de instalaciones especiales (domótica, AV)',
        ],
        forWhom: 'Proyectos llave en mano o reformas integrales',
        duration: 'Según alcance del proyecto',
        ctaLabel: 'Solicitar información',
      },
    ],
  },
  {
    id: 'gestion-post-entrega',
    lineTag: 'Para propietarios que necesitan gestión continua',
    lineTitle: 'Gestión Post-Entrega',
    lineIntro:
      'Su villa es una inversión que requiere mantenimiento profesional para preservar su valor y operatividad a lo largo del tiempo.',
    services: [
      {
        title: 'Roiba Care (Mantenimiento Integral)',
        includes: [
          'Inspecciones técnicas trimestrales',
          'Mantenimiento preventivo de instalaciones',
          'Gestión de incidencias',
          'Renovación de acabados según desgaste',
        ],
        forWhom: 'Propietarios no residentes',
        duration: 'Servicio permanente',
        ctaLabel: 'Ver planes de mantenimiento',
      },
      {
        title: 'Seguridad Jurídica en la Inversión',
        includes: [
          'Verificación de títulos de propiedad',
          'Due diligence legal previo a compra',
          'Asesoramiento en estructura de tenencia',
        ],
        forWhom: 'Inversores extranjeros',
        duration: '2-4 semanas',
        ctaLabel: 'Hablar con el equipo legal',
      },
    ],
  },
]

export default function ServiciosPage() {
  return (
    <main>
      {/* ============================================ */}
      {/* 1. HERO                                       */}
      {/* ============================================ */}
      <section className="relative pt-28 pb-14 md:pt-32 md:pb-20 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            Capacidades Técnicas
          </p>
          <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-8">
            Dirección técnica, construcción
            <br />
            y gestión integral
          </h1>
          <p className="text-white/60 text-body-lg max-w-2xl mx-auto leading-relaxed">
            Trabajamos en proyectos residenciales de alta gama desde tres líneas
            principales: servicios técnicos independientes, construcción llave
            en mano y gestión post-entrega.
          </p>
          <div className="mt-12 mx-auto w-16 h-px bg-roiba-dorado/40" />
        </div>
      </section>

      {/* ============================================ */}
      {/* 2. CLIENT SCENARIOS                           */}
      {/* ============================================ */}
      <section className="py-14 md:py-20 bg-roiba-arena-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
              Su Punto de Partida
            </p>
            <h2 className="font-serif text-display-md text-roiba-verde mb-4">
              Cómo podemos ayudarle
            </h2>
            <p className="text-roiba-verde/60 text-body-lg max-w-xl mx-auto">
              Cada proyecto es distinto. Elija su situación:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarios.map((scenario) => (
              <div
                key={scenario.id}
                className="bg-white p-8 md:p-10 border border-roiba-verde/[0.06] hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              >
                <h3 className="font-serif text-xl text-roiba-verde mb-5 leading-tight">
                  &ldquo;{scenario.situation}&rdquo;
                </h3>
                <ul className="space-y-2 mb-6">
                  {scenario.services.map((svc, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-roiba-dorado mt-0.5 flex-shrink-0">
                        &#10003;
                      </span>
                      <span className="text-roiba-verde/70 text-body">
                        {svc}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-body text-roiba-verde/50 italic mb-6">
                  Resultado: {scenario.result}
                </p>
                <Link
                  href={scenario.ctaHref}
                  className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-roiba-dorado hover:text-roiba-verde transition-colors"
                >
                  {scenario.cta}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M3 7h8M8 4l3 3-3 3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 3. BUSINESS LINES — Detailed                  */}
      {/* ============================================ */}
      {businessLines.map((line, lineIdx) => {
        const bgColor = lineIdx % 2 === 0 ? 'bg-white' : 'bg-roiba-arena-light'

        return (
          <section
            key={line.id}
            id={line.id}
            className={`py-14 md:py-20 ${bgColor}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Line Header */}
              <div className="max-w-3xl mb-12">
                <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-4">
                  {line.lineTag}
                </p>
                <h2 className="font-serif text-display-md text-roiba-verde mb-4">
                  {line.lineTitle}
                </h2>
                <div className="w-12 h-px bg-roiba-dorado mb-6" />
                <p className="text-roiba-verde/60 text-body-lg leading-relaxed">
                  {line.lineIntro}
                </p>
              </div>

              {/* Services within this line */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {line.services.map((svc, svcIdx) => (
                  <div
                    key={svcIdx}
                    className="bg-white rounded-sm p-8 md:p-10 shadow-sm border border-roiba-verde/[0.06]"
                  >
                    <h3 className="font-serif text-xl text-roiba-verde mb-5 font-medium">
                      {svc.title}
                    </h3>
                    <ul className="space-y-3 mb-6">
                      {svc.includes.map((item, i) => (
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

                    <div className="grid grid-cols-2 gap-4 pt-5 border-t border-roiba-verde/10 mb-6">
                      <div>
                        <p className="text-micro font-medium tracking-widest uppercase text-roiba-verde/35 mb-1">
                          Para quién
                        </p>
                        <p className="text-caption text-roiba-verde/70">
                          {svc.forWhom}
                        </p>
                      </div>
                      <div>
                        <p className="text-micro font-medium tracking-widest uppercase text-roiba-verde/35 mb-1">
                          Duración
                        </p>
                        <p className="text-caption text-roiba-verde/70">
                          {svc.duration}
                        </p>
                      </div>
                    </div>

                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-roiba-dorado hover:text-roiba-verde transition-colors"
                    >
                      {svc.ctaLabel}
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      >
                        <path d="M3 7h8M8 4l3 3-3 3" />
                      </svg>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* ============================================ */}
      {/* 4. CTA SECTION                                */}
      {/* ============================================ */}
      <section className="relative py-14 md:py-20 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            ¿Qué necesita?
          </p>
          <h2 className="font-serif text-display-md text-white mb-6">
            Explíquenos su proyecto y le proponemos un enfoque
          </h2>
          <p className="text-white/60 text-body-lg mb-12 leading-relaxed">
            Podemos trabajar solo en la fase que necesite o asumir el proyecto
            completo. Respuesta del equipo técnico en 48 horas.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-roiba-dorado-light text-roiba-verde font-semibold rounded-sm hover:bg-roiba-dorado transition-colors duration-300 text-lg"
          >
            Contactar al equipo
          </Link>
        </div>
      </section>
    </main>
  )
}
