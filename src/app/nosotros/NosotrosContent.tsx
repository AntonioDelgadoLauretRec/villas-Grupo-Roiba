'use client'

import Link from 'next/link'
import Image from 'next/image'
import ValueFlipCard from '@/components/ui/ValueFlipCard'
import ProjectCarousel from '@/components/ui/ProjectCarousel'
import { useLanguage } from '@/lib/i18n/LanguageContext'

/* ─────────────────────── i18n text ─────────────────────── */

const TEXT = {
  es: {
    heroTag: 'Quiénes Somos',
    heroTitle: 'El equipo detrás de cada proyecto',
    heroDesc:
      'Más de 20 años ejecutando y supervisando proyectos residenciales y hoteleros en España y el Caribe',

    origenTag: 'Origen',
    origenTitle: 'Cómo nace Grupo Roiba',
    origenP1:
      'Grupo Roiba nace de la experiencia de dos ingenieros que, tras décadas gestionando proyectos residenciales y hoteleros complejos, identificaron una necesidad clara en el mercado de Punta Cana: servicios técnicos profesionales con implicación directa.',
    origenP2:
      'La firma reúne experiencia en dirección técnica, ejecución de obra y gestión de proyectos desde la fase de diseño hasta la operación. Esa base permite abordar cada proyecto —sea supervisión independiente o construcción completa— con criterio técnico contrastado y control de costes, calidad y plazos.',

    enfoqueTag: 'Cómo Trabajamos',
    enfoqueTitle: 'Enfoque de Trabajo',
    enfoqueIntro: 'Cada proyecto se aborda con un enfoque estructurado basado en:',
    enfoqueItems: [
      'Planificación técnica rigurosa',
      'Control económico y de plazos',
      'Supervisión continua de la ejecución',
      'Coordinación eficiente de todos los agentes',
      'Implicación directa de los fundadores en cada proyecto',
    ],

    equipoTag: 'Profesionales',
    equipoTitle: 'El Equipo',
    equipoDesc:
      'Grupo Roiba está dirigido por profesionales con una sólida experiencia en el desarrollo de proyectos de edificación en España y el Caribe, tanto en el ámbito residencial como hotelero.',

    ivanRole: 'Socio Director',
    ivanCaption: 'Socio Director · Ingeniero · 20+ años',
    ivanP1:
      'Ingeniero con más de 20 años de experiencia en planificación, dirección técnica y gestión integral de proyectos residenciales y hoteleros.',
    ivanP2:
      'Desarrolló su carrera en España como jefe de obra en Elecnor S.A. entre 2003 y 2013, antes de trasladarse al Caribe, donde dirigió proyectos para The Excellence Collection y, posteriormente, como director técnico de construcción en Cana Rock, compañía promotora especializada en desarrollos residenciales de alta gama.',
    ivanP3:
      'Su experiencia en instalaciones MEP, control económico y coordinación de equipos multidisciplinares aporta capacidad de anticipación y rigor técnico a cada proyecto que supervisa.',

    ramonRole: 'Socio Director',
    ramonCaption: 'Socio Director · 25+ años en ejecución',
    ramonP1:
      'Profesional con más de 25 años en ejecución y dirección de obras, desde replanteo hasta recepción final.',
    ramonP2:
      'Gerente de obras en España entre 2003 y 2020, con participación en promociones residenciales, comerciales y hoteleras como Terrazas de Cortesín (Málaga), promociones en Marbella y Costa del Sol, y Live Aqua Beach Resort 5* en Punta Cana.',
    ramonP3:
      'Su dominio de la ejecución en campo, gestión de subcontratas y planificación de recursos garantiza control directo en cada fase constructiva y resolución efectiva de imprevistos.',

    valoresTag: 'Principios',
    valoresTitle: 'Nuestros Valores',
    valoresSubtitle: 'Los principios que guían cada proyecto',
    valoresDesc:
      'En Grupo Roiba entendemos la construcción como un proceso que requiere rigor, método y responsabilidad. Estos son los principios que definen nuestra forma de trabajar.',

    values: [
      {
        title: 'Transparencia',
        description:
          'Comunicación directa y continua. El cliente tiene acceso al estado del proyecto, costes actualizados y justificación de cada decisión técnica en cualquier momento.',
      },
      {
        title: 'Control',
        description:
          'Supervisión técnica en cada fase bajo una misma dirección. Integramos planificación, ejecución en campo y seguimiento económico para detectar desviaciones antes de que escalen.',
      },
      {
        title: 'Rigor técnico',
        description:
          'Criterio profesional en cada decisión. Desde la selección de sistemas constructivos hasta los materiales de acabado, priorizamos durabilidad, eficiencia y adecuación al entorno.',
      },
      {
        title: 'Calidad',
        description:
          'Materiales y sistemas constructivos seleccionados conforme al estándar del proyecto. Supervisión de acabados en cada partida antes de dar la fase por cerrada.',
      },
      {
        title: 'Compromiso',
        description:
          'Los fundadores participan personalmente en la dirección o supervisión de cada obra, asumiendo responsabilidad directa sobre su correcta ejecución.',
      },
      {
        title: 'Confianza',
        description:
          'Cada proyecto es el inicio de una relación a largo plazo. La confianza se construye entregando lo acordado, en plazo, sin excepciones ni excusas.',
      },
    ],

    portfolioDesc:
      'Proyectos en los que los socios de Grupo Roiba han participado a lo largo de su trayectoria profesional previa, en distintas empresas y roles. No son proyectos exclusivos de Grupo Roiba, sino referencias de la experiencia acumulada por el equipo fundador.',

    ctaTag: '¿Preparado para empezar?',
    ctaTitle: 'Explíquenos qué necesita',
    ctaDesc:
      'Supervisión, construcción completa o asesoramiento técnico. Le respondemos en 48 horas.',
    ctaButton: 'Hablar con el equipo',
  },
  en: {
    heroTag: 'About Us',
    heroTitle: 'The team behind every project',
    heroDesc:
      'Over 20 years executing and supervising residential and hospitality projects in Spain and the Caribbean',

    origenTag: 'Origin',
    origenTitle: 'How Grupo Roiba was born',
    origenP1:
      'Grupo Roiba was born from the experience of two engineers who, after decades managing complex residential and hospitality projects, identified a clear need in the Punta Cana market: professional technical services with direct involvement.',
    origenP2:
      'The firm brings together expertise in technical management, construction execution, and project management from the design phase through to operations. This foundation allows us to approach every project — whether independent supervision or full construction — with proven technical criteria and control over costs, quality, and timelines.',

    enfoqueTag: 'How We Work',
    enfoqueTitle: 'Work Approach',
    enfoqueIntro: 'Each project is approached with a structured methodology based on:',
    enfoqueItems: [
      'Rigorous technical planning',
      'Budget and schedule control',
      'Continuous execution supervision',
      'Efficient coordination of all stakeholders',
      'Direct involvement of the founders in every project',
    ],

    equipoTag: 'Professionals',
    equipoTitle: 'The Team',
    equipoDesc:
      'Grupo Roiba is led by professionals with solid experience in building development projects in Spain and the Caribbean, in both the residential and hospitality sectors.',

    ivanRole: 'Managing Partner',
    ivanCaption: 'Managing Partner · Engineer · 20+ years',
    ivanP1:
      'Engineer with over 20 years of experience in planning, technical management, and comprehensive management of residential and hospitality projects.',
    ivanP2:
      'He developed his career in Spain as a site manager at Elecnor S.A. between 2003 and 2013, before relocating to the Caribbean, where he led projects for The Excellence Collection and later served as technical construction director at Cana Rock, a development company specialising in high-end residential projects.',
    ivanP3:
      'His experience in MEP installations, cost control, and coordination of multidisciplinary teams brings foresight and technical rigour to every project he supervises.',

    ramonRole: 'Managing Partner',
    ramonCaption: 'Managing Partner · 25+ years in execution',
    ramonP1:
      'Professional with over 25 years in construction execution and site management, from setting out to final handover.',
    ramonP2:
      'Construction manager in Spain between 2003 and 2020, involved in residential, commercial, and hospitality developments such as Terrazas de Cortesín (Malaga), projects in Marbella and the Costa del Sol, and Live Aqua Beach Resort 5* in Punta Cana.',
    ramonP3:
      'His command of field execution, subcontractor management, and resource planning ensures direct control at every construction phase and effective resolution of unforeseen issues.',

    valoresTag: 'Principles',
    valoresTitle: 'Our Values',
    valoresSubtitle: 'The principles that guide every project',
    valoresDesc:
      'At Grupo Roiba we understand construction as a process that demands rigour, method, and responsibility. These are the principles that define how we work.',

    values: [
      {
        title: 'Transparency',
        description:
          'Direct and continuous communication. The client has access to the project status, updated costs, and the rationale behind every technical decision at any time.',
      },
      {
        title: 'Control',
        description:
          'Technical supervision at every phase under a single management structure. We integrate planning, field execution, and financial tracking to detect deviations before they escalate.',
      },
      {
        title: 'Technical Rigour',
        description:
          'Professional judgement in every decision. From the selection of construction systems to finishing materials, we prioritise durability, efficiency, and suitability to the environment.',
      },
      {
        title: 'Quality',
        description:
          'Materials and construction systems selected according to the project standard. Finish inspection in every trade before closing the phase.',
      },
      {
        title: 'Commitment',
        description:
          'The founders personally participate in the management or supervision of every project, assuming direct responsibility for its proper execution.',
      },
      {
        title: 'Trust',
        description:
          'Every project is the start of a long-term relationship. Trust is built by delivering what was agreed, on time, with no exceptions or excuses.',
      },
    ],

    portfolioDesc:
      'Projects in which the partners of Grupo Roiba have participated throughout their prior professional careers, in different companies and roles. These are not exclusive Grupo Roiba projects, but references of the experience accumulated by the founding team.',

    ctaTag: 'Ready to get started?',
    ctaTitle: 'Tell us what you need',
    ctaDesc:
      'Supervision, full construction, or technical advisory. We will respond within 48 hours.',
    ctaButton: 'Talk to the team',
  },
}

/* ─────────────────────── icons ─────────────────────── */

const valueIcons = [
  // Transparencia / Transparency
  <svg key="eye" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>,
  // Control
  <svg key="bar" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20V10M18 20V4M6 20v-4" />
  </svg>,
  // Rigor técnico / Technical Rigour
  <svg key="wrench" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>,
  // Calidad / Quality
  <svg key="star" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>,
  // Compromiso / Commitment
  <svg key="heart" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>,
  // Confianza / Trust
  <svg key="shield" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>,
]

/* ─────────────────────── component ─────────────────────── */

export default function NosotrosContent() {
  const { locale } = useLanguage()
  const tx = TEXT[locale]

  return (
    <>
      {/* -- 1. HERO -- */}
      <section className="relative bg-roiba-verde py-24 md:py-32 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=85&fit=crop"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-roiba-verde/75" />
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center z-10">
          <span className="inline-block text-roiba-dorado text-micro uppercase tracking-[0.2em] mb-6">
            {tx.heroTag}
          </span>
          <h1 className="text-display-lg md:text-display-xl font-serif text-white mb-6">
            {tx.heroTitle}
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            {tx.heroDesc}
          </p>
        </div>
      </section>

      {/* -- 2. ORIGEN + ENFOQUE en dos columnas -- */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Columna izquierda: Origen */}
            <div>
              <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
                {tx.origenTag}
              </span>
              <h2 className="text-display-md font-serif text-roiba-verde mt-4 mb-3">
                {tx.origenTitle}
              </h2>
              <div className="w-16 h-px bg-roiba-dorado mb-8" />
              <div className="space-y-6 text-body-lg text-roiba-verde/80 leading-relaxed">
                <p>{tx.origenP1}</p>
                <p>{tx.origenP2}</p>
              </div>
            </div>

            {/* Columna derecha: Enfoque de Trabajo */}
            <div>
              <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
                {tx.enfoqueTag}
              </span>
              <h2 className="text-display-md font-serif text-roiba-verde mt-4 mb-3">
                {tx.enfoqueTitle}
              </h2>
              <div className="w-16 h-px bg-roiba-dorado mb-8" />
              <p className="text-body-lg text-roiba-verde/80 leading-relaxed mb-8">
                {tx.enfoqueIntro}
              </p>
              <ul className="space-y-4">
                {tx.enfoqueItems.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-1.5 block w-2 h-2 rounded-full bg-roiba-dorado flex-shrink-0" />
                    <span className="text-body-lg text-roiba-verde/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* gold divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-roiba-dorado/30" />
      </div>

      {/* -- 3. EL EQUIPO -- */}
      <section className="py-12 md:py-16 px-6 bg-roiba-arena-light">
        <div className="max-w-7xl mx-auto">
          {/* section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
              {tx.equipoTag}
            </span>
            <h2 className="text-display-md font-serif text-roiba-verde mt-4 mb-6">
              {tx.equipoTitle}
            </h2>
            <div className="w-16 h-px bg-roiba-dorado mx-auto mb-8" />
            <p className="text-body-lg text-roiba-verde/80 leading-relaxed">
              {tx.equipoDesc}
            </p>
          </div>

          {/* profiles grid */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {/* Profile 1 — Iván */}
            <div className="bg-white rounded-sm shadow-sm border border-roiba-arena-dark/40 overflow-hidden">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=85&fit=crop&crop=face,top"
                  alt="Iván Barrios Martín"
                  fill
                  className="object-cover object-top grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/30 to-transparent" />
              </div>
              <div className="p-8 md:p-10">
              <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
                {tx.ivanRole}
              </span>
              <h3 className="text-heading font-serif text-roiba-verde mt-3 mb-1">
                Iván Barrios Martín
              </h3>
              <p className="text-caption text-roiba-dorado mb-6">{tx.ivanCaption}</p>
              <div className="w-10 h-px bg-roiba-dorado/50 mb-6" />
              <div className="space-y-4 text-body text-roiba-verde/75 leading-relaxed">
                <p>{tx.ivanP1}</p>
                <p>{tx.ivanP2}</p>
                <p>{tx.ivanP3}</p>
              </div>
              </div>
            </div>

            {/* Profile 2 — Ramón */}
            <div className="bg-white rounded-sm shadow-sm border border-roiba-arena-dark/40 overflow-hidden">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=85&fit=crop&crop=face,top"
                  alt="Ramón Ojeda González"
                  fill
                  className="object-cover object-top grayscale"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/30 to-transparent" />
              </div>
              <div className="p-8 md:p-10">
              <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
                {tx.ramonRole}
              </span>
              <h3 className="text-heading font-serif text-roiba-verde mt-3 mb-1">
                Ramón Ojeda González
              </h3>
              <p className="text-caption text-roiba-dorado mb-6">{tx.ramonCaption}</p>
              <div className="w-10 h-px bg-roiba-dorado/50 mb-6" />
              <div className="space-y-4 text-body text-roiba-verde/75 leading-relaxed">
                <p>{tx.ramonP1}</p>
                <p>{tx.ramonP2}</p>
                <p>{tx.ramonP3}</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gold divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-roiba-dorado/30" />
      </div>

      {/* -- 4. NUESTROS VALORES -- */}
      <section className="relative py-12 md:py-16 px-6 bg-roiba-verde">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          {/* section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
              {tx.valoresTag}
            </span>
            <h2 className="text-display-md font-serif text-white mt-4 mb-4">
              {tx.valoresTitle}
            </h2>
            <p className="text-subheading text-white/60 font-light mb-6">
              {tx.valoresSubtitle}
            </p>
            <div className="w-16 h-px bg-roiba-dorado mx-auto mb-8" />
            <p className="text-body-lg text-white/70 leading-relaxed">
              {tx.valoresDesc}
            </p>
          </div>

          {/* values grid — hover flip cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tx.values.map(({ title, description }) => (
              <ValueFlipCard key={title} title={title} description={description} />
            ))}
          </div>
        </div>
      </section>

      {/* -- 5. PORTFOLIO / PROYECTOS QUE TRASCIENDEN -- */}
      <section className="py-12 md:py-16 bg-roiba-arena-light overflow-hidden">
        {/* Updated intro copy */}
        <div className="max-w-7xl mx-auto px-6 mb-4">
          <p className="text-body text-roiba-verde/60 max-w-2xl leading-relaxed">
            {tx.portfolioDesc}
          </p>
        </div>
        <ProjectCarousel />
      </section>

      {/* -- 6. CTA -- */}
      <section className="relative py-12 md:py-16 px-6 bg-roiba-verde-dark">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em] mb-6 block">
            {tx.ctaTag}
          </span>
          <h2 className="text-display-md font-serif text-white mb-6">
            {tx.ctaTitle}
          </h2>
          <p className="text-body-lg text-white/70 leading-relaxed mb-10">
            {tx.ctaDesc}
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-roiba-dorado hover:bg-roiba-dorado-light text-roiba-verde font-semibold px-10 py-4 rounded-sm text-body tracking-wide transition-colors duration-300"
          >
            {tx.ctaButton}
          </Link>
        </div>
      </section>
    </>
  )
}
