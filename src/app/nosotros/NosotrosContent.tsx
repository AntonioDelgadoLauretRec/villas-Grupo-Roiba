'use client'

import Link from 'next/link'
import Image from 'next/image'
import ValueFlipCard from '@/components/ui/ValueFlipCard'
import ProjectCarousel from '@/components/ui/ProjectCarousel'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
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
    enfoqueContent:
      'En Grupo Roiba, creemos que la construcción de excelencia requiere una comprensión profunda de tus necesidades. Nuestro enfoque integra tres pilares fundamentales: escucha activa con tus requerimientos, análisis exhaustivo de viabilidad técnica y ejecución rigurosa en cada etapa. Cada proyecto es único, y nosotros adaptamos nuestra metodología para garantizar que tus visiones se materialicen con precisión.',
    enfoqueContent2:
      'La planificación técnica rigurosa, el control económico y de plazos, la supervisión continua de la ejecución y la coordinación eficiente de todos los agentes son los principios que guían nuestro trabajo diario. Los fundadores participan directamente en cada proyecto, asegurando que el nivel de exigencia se mantenga en todo momento.',

    equipoTag: 'Profesionales',
    equipoTitle: 'Un equipo con años de experiencia',
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

    portfolioTag: 'Trayectoria',
    portfolioTitle: 'Experiencias que dejan huella',
    portfolioDesc:
      'Proyectos en los que los socios de Grupo Roiba han participado a lo largo de su trayectoria profesional previa, en distintas empresas y roles. No son proyectos exclusivos de Grupo Roiba, sino referencias de la experiencia acumulada por el equipo fundador.',

    ctaTag: '¿Preparado para empezar?',
    ctaTitle: 'Cuéntanos qué necesitas',
    ctaDesc:
      'Supervisión, construcción completa o asesoramiento técnico. Te respondemos en 48 horas.',
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
    enfoqueContent:
      'At Grupo Roiba, we believe that construction excellence requires a deep understanding of your needs. Our approach integrates three fundamental pillars: active listening to your requirements, exhaustive analysis of technical feasibility, and rigorous execution at every stage. Every project is unique, and we adapt our methodology to ensure your vision materialises with precision.',
    enfoqueContent2:
      'Rigorous technical planning, budget and schedule control, continuous execution supervision, and efficient coordination of all stakeholders are the principles that guide our daily work. The founders participate directly in every project, ensuring that the level of demand is maintained at all times.',

    equipoTag: 'Professionals',
    equipoTitle: 'A team with years of experience',
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

    portfolioTag: 'Track Record',
    portfolioTitle: 'Experiences That Leave a Mark',
    portfolioDesc:
      'Projects in which the partners of Grupo Roiba have participated throughout their prior professional careers, in different companies and roles. These are not exclusive Grupo Roiba projects, but references of the experience accumulated by the founding team.',

    ctaTag: 'Ready to get started?',
    ctaTitle: 'Tell us what you need',
    ctaDesc:
      'Supervision, full construction, or technical advisory. We will respond within 48 hours.',
    ctaButton: 'Talk to the team',
  },
}

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

      {/* -- 2. ORIGEN + ENFOQUE -- */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Columna izquierda: Origen */}
            <RevealWrapper variant="fade-in">
              <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
                {tx.origenTag}
              </span>
              <h2 className="text-display-md font-serif text-roiba-texto mt-4 mb-3">
                {tx.origenTitle}
              </h2>
              <RevealWrapper variant="line-grow" delay={200} className="w-16 h-px bg-roiba-dorado mb-8">
                <span className="sr-only">decorative line</span>
              </RevealWrapper>
              <div className="space-y-6 text-body-lg text-roiba-texto-suave leading-relaxed">
                <p>{tx.origenP1}</p>
                <p>{tx.origenP2}</p>
              </div>
            </RevealWrapper>

            {/* Columna derecha: Enfoque de Trabajo — prose format */}
            <RevealWrapper variant="slide-left" delay={150}>
              <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
                {tx.enfoqueTag}
              </span>
              <h2 className="text-display-md font-serif text-roiba-texto mt-4 mb-3">
                {tx.enfoqueTitle}
              </h2>
              <div className="w-16 h-px bg-roiba-dorado mb-8" />
              <div className="max-w-[800px] space-y-6 font-sans text-[18px] text-roiba-negro leading-[1.8]">
                <p>{tx.enfoqueContent}</p>
                <p>{tx.enfoqueContent2}</p>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* gold divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-roiba-dorado/30" />
      </div>

      {/* -- 3. EL EQUIPO -- */}
      <section className="py-12 md:py-16 px-6 bg-roiba-fondo-alt">
        <div className="max-w-7xl mx-auto">
          {/* section header */}
          <RevealWrapper variant="fade-up" className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
              {tx.equipoTag}
            </span>
            <h2 className="text-display-md font-serif text-roiba-texto mt-4 mb-6">
              {tx.equipoTitle}
            </h2>
            <div className="w-16 h-px bg-roiba-dorado mx-auto mb-8" />
            <p className="text-body-lg text-roiba-texto-suave leading-relaxed">
              {tx.equipoDesc}
            </p>
          </RevealWrapper>

          {/* profiles grid */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {/* Profile 1 — Iván */}
            <RevealWrapper variant="fade-up" delay={0} className="bg-white rounded-sm shadow-sm border border-roiba-arena-dark/40 overflow-hidden">
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
            </RevealWrapper>

            {/* Profile 2 — Juan Ramón */}
            <RevealWrapper variant="fade-up" delay={200} className="bg-white rounded-sm shadow-sm border border-roiba-arena-dark/40 overflow-hidden">
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&q=85&fit=crop&crop=face,top"
                  alt="Juan Ramón Ojeda González"
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
              <h3 className="text-heading font-serif text-roiba-texto mt-3 mb-1">
                Juan Ramón Ojeda González
              </h3>
              <p className="text-caption text-roiba-dorado mb-6">{tx.ramonCaption}</p>
              <div className="w-10 h-px bg-roiba-dorado/50 mb-6" />
              <div className="space-y-4 text-body text-roiba-texto-suave leading-relaxed">
                <p>{tx.ramonP1}</p>
                <p>{tx.ramonP2}</p>
                <p>{tx.ramonP3}</p>
              </div>
              </div>
            </RevealWrapper>
          </div>
        </div>
      </section>

      {/* gold divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-roiba-dorado/30" />
      </div>

      {/* -- 4. NUESTROS VALORES -- white bg with image overlay cards */}
      <section className="relative py-12 md:py-16 px-6 bg-white">
        <div className="relative max-w-7xl mx-auto">
          {/* section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
              {tx.valoresTag}
            </span>
            <h2 className="text-display-md font-serif text-roiba-texto mt-4 mb-4">
              {tx.valoresTitle}
            </h2>
            <p className="text-subheading text-roiba-texto-suave font-light mb-6">
              {tx.valoresSubtitle}
            </p>
            <div className="w-16 h-px bg-roiba-dorado mx-auto mb-8" />
            <p className="text-body-lg text-roiba-texto-suave leading-relaxed">
              {tx.valoresDesc}
            </p>
          </div>

          {/* values grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {tx.values.map(({ title, description }, i) => (
              <RevealWrapper key={title} variant="slide-left" delay={i * 100}>
                <ValueFlipCard title={title} description={description} />
              </RevealWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* -- 5. PORTFOLIO / EXPERIENCIAS QUE DEJAN HUELLA -- */}
      <section className="py-12 md:py-16 bg-roiba-arena-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8">
          <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em] block mb-4">
            {tx.portfolioTag}
          </span>
          <h2 className="text-display-md font-serif text-roiba-texto mb-4">
            {tx.portfolioTitle}
          </h2>
          <p className="text-body text-roiba-verde/60 max-w-2xl leading-relaxed">
            {tx.portfolioDesc}
          </p>
        </div>
        <ProjectCarousel />
      </section>

      {/* -- 6. CTA -- */}
      <section className="relative py-12 md:py-16 px-6 bg-roiba-verde">
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
          <Link href="/contacto" className="btn-roiba-primary px-10 inline-block">
            <span>{tx.ctaButton}</span>
          </Link>
        </div>
      </section>
    </>
  )
}
