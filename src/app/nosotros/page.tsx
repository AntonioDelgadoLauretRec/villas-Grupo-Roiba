import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ValuesCard from '@/components/ui/ValuesCard'
import ProjectCarousel from '@/components/ui/ProjectCarousel'

export const metadata: Metadata = {
  title: 'Sobre Nosotros | Grupo Roiba',
  description:
    'Conozca Grupo Roiba: más de 20 años ejecutando y supervisando proyectos residenciales y hoteleros en España y el Caribe. Dirección técnica y construcción de alta gama.',
  alternates: { canonical: 'https://gruporoiba.com/nosotros' },
}

/* ─────────────────────── data ─────────────────────── */

const values = [
  {
    title: 'Transparencia',
    description:
      'Comunicación directa y continua. El cliente tiene acceso al estado del proyecto, costes actualizados y justificación de cada decisión técnica en cualquier momento.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&fit=crop',
  },
  {
    title: 'Control',
    description:
      'Supervisión técnica en cada fase bajo una misma dirección. Integramos planificación, ejecución en campo y seguimiento económico para detectar desviaciones antes de que escalen.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80&fit=crop',
  },
  {
    title: 'Rigor técnico',
    description:
      'Criterio profesional en cada decisión. Desde la selección de sistemas constructivos hasta los materiales de acabado, priorizamos durabilidad, eficiencia y adecuación al entorno.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80&fit=crop',
  },
  {
    title: 'Calidad',
    description:
      'Materiales y sistemas constructivos seleccionados conforme al estándar del proyecto. Supervisión de acabados en cada partida antes de dar la fase por cerrada.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80&fit=crop',
  },
  {
    title: 'Compromiso',
    description:
      'Los fundadores participan personalmente en la dirección o supervisión de cada obra, asumiendo responsabilidad directa sobre su correcta ejecución.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80&fit=crop',
  },
  {
    title: 'Confianza',
    description:
      'Cada proyecto es el inicio de una relación a largo plazo. La confianza se construye entregando lo acordado, en plazo, sin excepciones ni excusas.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&fit=crop',
  },
]

const enfoqueItems = [
  'Planificación técnica rigurosa',
  'Control económico y de plazos',
  'Supervisión continua de la ejecución',
  'Coordinación eficiente de todos los agentes',
  'Implicación directa de los fundadores en cada proyecto',
]

/* ─────────────────────── page ─────────────────────── */

export default function NosotrosPage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section className="relative bg-roiba-verde pt-24 pb-14 md:pt-28 md:pb-20 px-6">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block text-roiba-dorado text-micro uppercase tracking-[0.2em] mb-6">
            Quiénes Somos
          </span>
          <h1 className="text-display-lg md:text-display-xl font-serif text-white mb-6">
            El equipo detrás de cada proyecto
          </h1>
          <p className="text-subheading text-white/70 max-w-2xl mx-auto font-light">
            Más de 20 años ejecutando y supervisando proyectos residenciales y hoteleros en España y el Caribe
          </p>
          <div className="mt-10 mx-auto w-20 h-px bg-roiba-dorado" />
        </div>
      </section>

      {/* ── 2. NUESTRA HISTORIA ─────────────────────────── */}
      <section className="py-12 md:py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
              Origen
            </span>
            <h2 className="text-display-md font-serif text-roiba-verde mt-4 mb-3">
              Cómo nace Grupo Roiba
            </h2>
            <div className="w-16 h-px bg-roiba-dorado mb-10" />
            <div className="space-y-6 text-body-lg text-roiba-verde/80 leading-relaxed">
              <p>
                Grupo Roiba nace de la experiencia de dos ingenieros que, tras décadas
                gestionando proyectos residenciales y hoteleros complejos, identificaron
                una necesidad clara en el mercado de Punta Cana: servicios técnicos
                profesionales con implicación directa.
              </p>
              <p>
                La firma reúne experiencia en dirección técnica, ejecución de obra y
                gestión de proyectos desde la fase de diseño hasta la operación. Esa base
                permite abordar cada proyecto —sea supervisión independiente o construcción
                completa— con criterio técnico contrastado y control de costes, calidad y
                plazos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* gold divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-roiba-dorado/30" />
      </div>

      {/* ── 3. EL EQUIPO ────────────────────────────────── */}
      <section className="py-12 md:py-16 px-6 bg-roiba-arena-light">
        <div className="max-w-7xl mx-auto">
          {/* section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
              Profesionales
            </span>
            <h2 className="text-display-md font-serif text-roiba-verde mt-4 mb-6">
              El Equipo
            </h2>
            <div className="w-16 h-px bg-roiba-dorado mx-auto mb-8" />
            <p className="text-body-lg text-roiba-verde/80 leading-relaxed">
              Grupo Roiba está dirigido por profesionales con una sólida experiencia en el
              desarrollo de proyectos de edificación en España y el Caribe, tanto en el ámbito
              residencial como hotelero.
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
                Socio Fundador
              </span>
              <h3 className="text-heading font-serif text-roiba-verde mt-3 mb-1">
                Iván Barrios Martín
              </h3>
              <p className="text-caption text-roiba-dorado mb-6">Director Técnico · Ingeniero · 20+ años</p>
              <div className="w-10 h-px bg-roiba-dorado/50 mb-6" />
              <div className="space-y-4 text-body text-roiba-verde/75 leading-relaxed">
                <p>
                  Ingeniero con más de 20 años de experiencia en planificación, dirección técnica
                  y gestión integral de proyectos residenciales y hoteleros.
                </p>
                <p>
                  Desarrolló su carrera en España como jefe de obra en Elecnor S.A. entre 2003
                  y 2013, antes de trasladarse al Caribe, donde dirigió proyectos para The
                  Excellence Collection y, posteriormente, como director técnico de construcción
                  en Cana Rock, compañía promotora especializada en desarrollos residenciales de
                  alta gama.
                </p>
                <p>
                  Su experiencia en instalaciones MEP, control económico y coordinación de
                  equipos multidisciplinares aporta capacidad de anticipación y rigor técnico
                  a cada proyecto que supervisa.
                </p>
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
                Socio Fundador
              </span>
              <h3 className="text-heading font-serif text-roiba-verde mt-3 mb-1">
                Ramón Ojeda González
              </h3>
              <p className="text-caption text-roiba-dorado mb-6">Gerente de Obras · 25+ años en ejecución</p>
              <div className="w-10 h-px bg-roiba-dorado/50 mb-6" />
              <div className="space-y-4 text-body text-roiba-verde/75 leading-relaxed">
                <p>
                  Profesional con más de 25 años en ejecución y dirección de obras, desde
                  replanteo hasta recepción final.
                </p>
                <p>
                  Gerente de obras en España entre 2003 y 2020, con participación en
                  promociones residenciales, comerciales y hoteleras como Terrazas de Cortesín
                  (Málaga), promociones en Marbella y Costa del Sol, y Live Aqua Beach Resort
                  5* en Punta Cana.
                </p>
                <p>
                  Su dominio de la ejecución en campo, gestión de subcontratas y planificación
                  de recursos garantiza control directo en cada fase constructiva y resolución
                  efectiva de imprevistos.
                </p>
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

      {/* ── 4. NUESTRO ENFOQUE ──────────────────────────── */}
      <section className="py-12 md:py-16 px-6 bg-roiba-arena-light">
        <div className="max-w-3xl mx-auto">
          <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
            Cómo Trabajamos
          </span>
          <h2 className="text-display-md font-serif text-roiba-verde mt-4 mb-6">
            Enfoque de Trabajo
          </h2>
          <div className="w-16 h-px bg-roiba-dorado mb-10" />
          <p className="text-body-lg text-roiba-verde/80 leading-relaxed mb-8">
            Cada proyecto se aborda con un enfoque estructurado basado en:
          </p>
          <ul className="space-y-4 mb-10">
            {enfoqueItems.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-roiba-dorado flex-shrink-0" />
                <span className="text-body-lg text-roiba-verde/80">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 4.5 PORTFOLIO / PROYECTOS REALIZADOS ────────── */}
      <section className="py-12 md:py-16 bg-roiba-arena-light overflow-hidden">
        <ProjectCarousel />
      </section>

      {/* gold divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-roiba-dorado/30" />
      </div>

      {/* ── 5. NUESTROS VALORES ─────────────────────────── */}
      <section className="relative py-12 md:py-16 px-6 bg-roiba-verde">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          {/* section header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
              Principios
            </span>
            <h2 className="text-display-md font-serif text-white mt-4 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-subheading text-white/60 font-light mb-6">
              Los principios que guían cada proyecto
            </p>
            <div className="w-16 h-px bg-roiba-dorado mx-auto mb-8" />
            <p className="text-body-lg text-white/70 leading-relaxed">
              En Grupo Roiba entendemos la construcción como un proceso que requiere rigor, método y
              responsabilidad. Estos son los principios que definen nuestra forma de trabajar.
            </p>
          </div>

          {/* values grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {values.map(({ title, description, image }) => (
              <ValuesCard
                key={title}
                title={title}
                description={description}
                image={image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ──────────────────────────────────────── */}
      <section className="relative py-12 md:py-16 px-6 bg-roiba-verde-dark">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em] mb-6 block">
            ¿Preparado para empezar?
          </span>
          <h2 className="text-display-md font-serif text-white mb-6">
            Explíquenos qué necesita
          </h2>
          <p className="text-body-lg text-white/70 leading-relaxed mb-10">
            Supervisión, construcción completa o asesoramiento técnico. Le respondemos en 48 horas.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-roiba-dorado hover:bg-roiba-dorado-light text-roiba-verde font-semibold px-10 py-4 rounded-sm text-body tracking-wide transition-colors duration-300"
          >
            Hablar con el equipo
          </Link>
        </div>
      </section>
    </>
  )
}
