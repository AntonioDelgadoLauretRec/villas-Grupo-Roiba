'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'

/* ─── i18n Text ─── */
const TEXT = {
  es: {
    hero: {
      tag: 'Capacidades Técnicas',
      title: 'Dirección, Gestión',
      titleBreak: 'y Calidad',
      description:
        'Trabajamos en proyectos residenciales exclusivos desde tres líneas principales: servicios técnicos independientes, construcción llave en mano y gestión post-entrega.',
    },
    scenarios: {
      tag: 'Tu Punto de Partida',
      title: 'Cómo podemos ayudarte',
      subtitle: 'Cada proyecto es distinto. Elige tu situación:',
      resultLabel: 'Resultado:',
      items: [
        {
          id: 'construir-desde-cero',
          situation: 'Tengo terreno, necesito construir desde cero',
          services: [
            'Construcción llave en mano',
            'Dirección técnica integral',
            'Interiorismo y equipamiento',
            'Roiba Care (post-entrega)',
          ],
          result: 'Tu villa lista para habitar, con supervisión directa de ingeniero.',
          cta: 'Ver el proceso completo',
          ctaHref: '/proceso',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fit=crop',
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
          result: 'Supervisión semanal in-situ con informes técnicos directos.',
          cta: 'Ver cómo supervisamos',
          ctaHref: '/contacto',
          image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop',
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
          result: 'Informe técnico de viabilidad antes de comprometerte.',
          cta: 'Solicitar análisis',
          ctaHref: '/contacto',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fit=crop',
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
          result: 'Tu inversión protegida y operativa todo el año.',
          cta: 'Ver planes de mantenimiento',
          ctaHref: '/contacto',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&fit=crop',
        },
      ],
    },
    businessLines: [
      {
        id: 'servicios-tecnicos',
        lineTag: 'Para clientes con equipo propio',
        lineTitle: 'Servicios Técnicos Independientes',
        lineIntro:
          'Si ya tienes arquitecto, constructor o promotor, pero necesitas supervisión técnica independiente para proteger tu inversión.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&fit=crop',
        services: [
          {
            title: 'Dirección Técnica',
            icon: '\uD83D\uDD0D',
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
            icon: '\uD83D\uDCCB',
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
            icon: '\uD83D\uDCCA',
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
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80&fit=crop',
        services: [
          {
            title: 'Construcción de Villas a Medida',
            icon: '\uD83C\uDFD7\uFE0F',
            includes: [
              'Desarrollo del proyecto arquitectónico',
              'Tramitación de permisos',
              'Ejecución de obra con equipo propio y subcontratas supervisadas',
              'Control de calidad en cada fase',
              'Garantía estructural',
            ],
            forWhom: 'Desde 250 m\u00B2',
            duration: '12-18 meses desde diseño',
            ctaLabel: 'Ver proceso de construcción',
          },
          {
            title: 'Interiorismo y Equipamiento',
            icon: '\uD83C\uDFA8',
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
          'Tu villa es una inversión que requiere mantenimiento profesional para preservar su valor y operatividad a lo largo del tiempo.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&fit=crop',
        services: [
          {
            title: 'Roiba Care (Mantenimiento Integral)',
            icon: '\uD83D\uDEE1\uFE0F',
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
            icon: '\u2696\uFE0F',
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
    ],
    cta: {
      tag: '¿Qué necesitas?',
      title: 'Explícanos tu proyecto y te proponemos un enfoque',
      description:
        'Podemos trabajar solo en la fase que necesites o asumir el proyecto completo. Respuesta del equipo técnico en 48 horas.',
      button: 'Contactar al equipo',
    },
    forWhomLabel: 'Para quién',
    durationLabel: 'Duración',
  },
  en: {
    hero: {
      tag: 'Technical Capabilities',
      title: 'Direction, Management',
      titleBreak: 'and Quality',
      description:
        'We work on exclusive residential projects through three main areas: independent technical services, turnkey construction, and post-delivery management.',
    },
    scenarios: {
      tag: 'Your Starting Point',
      title: 'How we can help you',
      subtitle: 'Every project is different. Choose your situation:',
      resultLabel: 'Result:',
      items: [
        {
          id: 'construir-desde-cero',
          situation: 'I have land, I need to build from scratch',
          services: [
            'Turnkey construction',
            'Comprehensive technical management',
            'Interior design and furnishing',
            'Roiba Care (post-delivery)',
          ],
          result: 'Your villa ready to live in, with direct engineer supervision.',
          cta: 'See the full process',
          ctaHref: '/proceso',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fit=crop',
        },
        {
          id: 'supervision',
          situation:
            'I already have an architect and builder, I need someone to oversee quality',
          services: [
            'Independent technical management',
            'Project management',
            'Cost control',
          ],
          result: 'Weekly on-site supervision with direct technical reports.',
          cta: 'See how we supervise',
          ctaHref: '/contacto',
          image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop',
        },
        {
          id: 'evaluando',
          situation:
            'I am considering investing but need technical advice before deciding',
          services: [
            'Technical advisory',
            'Land due diligence',
            'Legal security',
            'Feasibility analysis',
          ],
          result: 'Technical feasibility report before committing.',
          cta: 'Request analysis',
          ctaHref: '/contacto',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&fit=crop',
        },
        {
          id: 'gestion-post',
          situation:
            'My property is already built, I need professional management and maintenance',
          services: [
            'Roiba Care',
            'Preventive maintenance',
            'Property operations management',
          ],
          result: 'Your investment protected and operational year-round.',
          cta: 'See maintenance plans',
          ctaHref: '/contacto',
          image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&fit=crop',
        },
      ],
    },
    businessLines: [
      {
        id: 'servicios-tecnicos',
        lineTag: 'For clients with their own team',
        lineTitle: 'Independent Technical Services',
        lineIntro:
          'If you already have an architect, builder, or developer, but need independent technical supervision to protect your investment.',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80&fit=crop',
        services: [
          {
            title: 'Technical Management',
            icon: '\uD83D\uDD0D',
            includes: [
              'Weekly on-site supervision by engineer',
              'Material and execution quality validation',
              'Monthly photographic technical reports',
              'Direct communication with builder',
            ],
            forWhom: 'Investors building with a local team',
            duration: 'From foundation phase to delivery',
            ctaLabel: 'Request information',
          },
          {
            title: 'Project Management',
            icon: '\uD83D\uDCCB',
            includes: [
              'Coordination of all parties (architect, builder, engineers)',
              'Schedule and budget control',
              'Change and extras management',
              'Weekly reporting to client',
            ],
            forWhom: 'Clients who cannot be on-site',
            duration: 'From design to key handover',
            ctaLabel: 'Request information',
          },
          {
            title: 'Technical Advisory & Due Diligence',
            icon: '\uD83D\uDCCA',
            includes: [
              'Technical feasibility analysis of land',
              'Review of existing projects',
              'Construction risk detection',
              'Realistic cost estimation',
            ],
            forWhom: 'Investors in evaluation phase',
            duration: '1-2 weeks',
            ctaLabel: 'Request land analysis',
          },
        ],
      },
      {
        id: 'construccion-llave-en-mano',
        lineTag: 'For clients who delegate full execution',
        lineTitle: 'Turnkey Construction',
        lineIntro:
          'We take full responsibility for the project: from architectural design to key handover, with direct supervision by the founders.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80&fit=crop',
        services: [
          {
            title: 'Custom Villa Construction',
            icon: '\uD83C\uDFD7\uFE0F',
            includes: [
              'Architectural project development',
              'Permit processing',
              'Construction with own team and supervised subcontractors',
              'Quality control at every phase',
              'Structural warranty',
            ],
            forWhom: 'From 250 m\u00B2',
            duration: '12-18 months from design',
            ctaLabel: 'See construction process',
          },
          {
            title: 'Interior Design & Furnishing',
            icon: '\uD83C\uDFA8',
            includes: [
              'Interior design consistent with architecture',
              'Finishes and materials selection',
              'Fixed furniture and equipment',
              'Special installations coordination (home automation, AV)',
            ],
            forWhom: 'Turnkey projects or full renovations',
            duration: 'According to project scope',
            ctaLabel: 'Request information',
          },
        ],
      },
      {
        id: 'gestion-post-entrega',
        lineTag: 'For owners who need ongoing management',
        lineTitle: 'Post-Delivery Management',
        lineIntro:
          'Your villa is an investment that requires professional maintenance to preserve its value and operability over time.',
        image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80&fit=crop',
        services: [
          {
            title: 'Roiba Care (Comprehensive Maintenance)',
            icon: '\uD83D\uDEE1\uFE0F',
            includes: [
              'Quarterly technical inspections',
              'Preventive maintenance of installations',
              'Incident management',
              'Finishes renovation based on wear',
            ],
            forWhom: 'Non-resident owners',
            duration: 'Permanent service',
            ctaLabel: 'See maintenance plans',
          },
          {
            title: 'Legal Security for Your Investment',
            icon: '\u2696\uFE0F',
            includes: [
              'Property title verification',
              'Legal due diligence prior to purchase',
              'Ownership structure advisory',
            ],
            forWhom: 'Foreign investors',
            duration: '2-4 weeks',
            ctaLabel: 'Talk to the legal team',
          },
        ],
      },
    ],
    cta: {
      tag: 'What do you need?',
      title: 'Tell us about your project and we will propose an approach',
      description:
        'We can work on just the phase you need or take on the entire project. Technical team response within 48 hours.',
      button: 'Contact the team',
    },
    forWhomLabel: 'For whom',
    durationLabel: 'Duration',
  },
}

export default function ServiciosContent() {
  const { locale } = useLanguage()
  const tx = TEXT[locale]

  return (
    <>
      {/* ============================================ */}
      {/* 1. HERO                                       */}
      {/* ============================================ */}
      <section className="relative py-24 md:py-32 bg-roiba-verde overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85&fit=crop"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-roiba-verde/75" />
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-8">
            {tx.hero.title} {tx.hero.titleBreak}
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
          <p className="text-white/70 text-body-lg max-w-3xl mx-auto leading-relaxed">
            {tx.hero.description}
          </p>
        </div>
      </section>

      {/* ============================================ */}
      {/* 2. CLIENT SCENARIOS                           */}
      {/* ============================================ */}
      <section className="py-14 md:py-20 bg-roiba-fondo-alt">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
              {tx.scenarios.tag}
            </p>
            <h2 className="font-serif text-display-md text-roiba-verde mb-4">
              {tx.scenarios.title}
            </h2>
            <p className="text-roiba-verde/60 text-body-lg max-w-xl mx-auto">
              {tx.scenarios.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tx.scenarios.items.map((scenario) => (
              <div
                key={scenario.id}
                className="group bg-white border border-roiba-verde/[0.06] overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={scenario.image}
                    alt={scenario.situation}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/60 to-transparent" />
                </div>
                <div className="p-8 md:p-10">
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
                    {tx.scenarios.resultLabel} {scenario.result}
                  </p>
                  <Link
                    href={scenario.ctaHref}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-roiba-dorado hover:text-roiba-verde transition-colors"
                  >
                    {scenario.cta}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 7h8M8 4l3 3-3 3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* 3. BUSINESS LINES                             */}
      {/* ============================================ */}
      {tx.businessLines.map((line, lineIdx) => {
        const bgColor = lineIdx % 2 === 0 ? 'bg-white' : 'bg-roiba-fondo-alt'

        return (
          <section
            key={line.id}
            id={line.id}
            className={`py-14 md:py-20 ${bgColor}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Line Header */}
              <div className="relative rounded-sm overflow-hidden mb-12">
                <div className="relative h-56 md:h-64">
                  <Image
                    src={line.image}
                    alt={line.lineTitle}
                    fill
                    className="object-cover"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-roiba-verde/75" />
                  <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-14">
                    <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-3">
                      {line.lineTag}
                    </p>
                    <h2 className="font-serif text-display-md text-white mb-4">
                      {line.lineTitle}
                    </h2>
                    <p className="text-white/70 text-body-lg leading-relaxed max-w-2xl">
                      {line.lineIntro}
                    </p>
                  </div>
                </div>
              </div>

              {/* Services cards — responsive grid (3 cols for servicios-tecnicos, 2 cols when only 2 items) */}
              <div className={`grid grid-cols-1 gap-6 ${line.id === 'servicios-tecnicos' ? 'md:grid-cols-2 lg:grid-cols-3' : line.services.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
                {line.services.map((svc, svcIdx) => (
                  <div
                    key={svcIdx}
                    className="group bg-white rounded-lg p-8 shadow-sm border border-roiba-verde/[0.06] hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
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
                          {tx.forWhomLabel}
                        </p>
                        <p className="text-caption text-roiba-verde/70">
                          {svc.forWhom}
                        </p>
                      </div>
                      <div>
                        <p className="text-micro font-medium tracking-widest uppercase text-roiba-verde/35 mb-1">
                          {tx.durationLabel}
                        </p>
                        <p className="text-caption text-roiba-verde/70">
                          {svc.duration}
                        </p>
                      </div>
                    </div>

                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-roiba-dorado hover:text-roiba-verde transition-colors group-hover:translate-x-1 duration-300"
                    >
                      {svc.ctaLabel}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
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
            {tx.cta.tag}
          </p>
          <h2 className="font-serif text-display-md text-white mb-6">
            {tx.cta.title}
          </h2>
          <p className="text-white/60 text-body-lg mb-12 leading-relaxed">
            {tx.cta.description}
          </p>
          <Link href="/contacto" className="btn-roiba-primary px-10 inline-block">
            <span>{tx.cta.button}</span>
          </Link>
        </div>
      </section>
    </>
  )
}
