import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description:
    'Conozca Grupo Roiba: experiencia consolidada, visión contemporánea. Profesionales con más de 20 años en construcción residencial y hotelera en España y el Caribe.',
}

/* ─────────────────────── icon helpers ─────────────────────── */

function IconTransparencia() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function IconControl() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
}

function IconRigor() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function IconCalidad() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

function IconCompromiso() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function IconConfianza() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

/* ─────────────────────── data ─────────────────────── */

const values = [
  {
    title: 'Transparencia',
    description:
      'Información clara y decisiones fundamentadas. Mantenemos una comunicación directa y continua con el cliente, proporcionando información clara sobre el avance del proyecto, los costes y las decisiones técnicas.',
    Icon: IconTransparencia,
  },
  {
    title: 'Control',
    description:
      'Supervisión técnica en cada fase. El control es la base de un proyecto bien ejecutado. Supervisamos cada fase de la obra, integrando planificación, ejecución y seguimiento económico.',
    Icon: IconControl,
  },
  {
    title: 'Rigor técnico',
    description:
      'Decisiones basadas en conocimiento. Aplicamos criterios técnicos en cada decisión, desde el diseño hasta la ejecución, asegurando soluciones constructivas adecuadas y durabilidad.',
    Icon: IconRigor,
  },
  {
    title: 'Calidad',
    description:
      'Ejecución conforme a estándares exigentes. Trabajamos con materiales y sistemas constructivos adecuados al nivel del proyecto, supervisando la ejecución para garantizar acabados de primer nivel.',
    Icon: IconCalidad,
  },
  {
    title: 'Compromiso',
    description:
      'Implicación directa en cada proyecto. Nos involucramos en cada proyecto de forma directa, asumiendo la responsabilidad de su correcta ejecución.',
    Icon: IconCompromiso,
  },
  {
    title: 'Confianza',
    description:
      'Relaciones basadas en resultados. Entendemos cada proyecto como una relación a largo plazo. La confianza se construye a través del cumplimiento, la transparencia y la calidad.',
    Icon: IconConfianza,
  },
]

const enfoqueItems = [
  'Planificación técnica rigurosa',
  'Control económico y de plazos',
  'Supervisión continua de la ejecución',
  'Coordinación eficiente de todos los agentes',
  'Implicación directa en cada proyecto',
]

/* ─────────────────────── page ─────────────────────── */

export default function NosotrosPage() {
  return (
    <>
      {/* ── 1. HERO ─────────────────────────────────────── */}
      <section className="relative bg-roiba-verde pt-32 pb-24 md:pt-40 md:pb-32 px-6">
        {/* subtle grain overlay */}
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-block text-roiba-dorado text-micro uppercase tracking-[0.2em] mb-6">
            Grupo Roiba
          </span>
          <h1 className="text-display-lg md:text-display-xl font-serif text-white mb-6">
            Sobre Grupo Roiba
          </h1>
          <p className="text-subheading text-white/70 max-w-2xl mx-auto font-light">
            Experiencia consolidada, visión contemporánea
          </p>
          {/* gold accent line */}
          <div className="mt-10 mx-auto w-20 h-px bg-roiba-dorado" />
        </div>
      </section>

      {/* ── 2. NUESTRA HISTORIA ─────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto">
            <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
              Trayectoria
            </span>
            <h2 className="text-display-md font-serif text-roiba-verde mt-4 mb-3">
              Nuestra Historia
            </h2>
            <p className="text-subheading text-roiba-verde/60 font-light mb-10">
              Experiencia consolidada, visión contemporánea
            </p>
            <div className="w-16 h-px bg-roiba-dorado mb-10" />
            <div className="space-y-6 text-body-lg text-roiba-verde/80 leading-relaxed">
              <p>
                Grupo Roiba nace con el objetivo de aportar un nuevo nivel de rigor, control y
                transparencia al desarrollo de proyectos residenciales en Punta Cana.
              </p>
              <p>
                La firma se sustenta en la trayectoria de profesionales con una dilatada experiencia
                en el sector de la construcción, que han participado durante décadas en la ejecución
                de proyectos residenciales, hoteleros y urbanísticos de alta complejidad, tanto en
                España como en el Caribe.
              </p>
              <p>
                Esta base permite abordar cada proyecto con una visión técnica sólida, un criterio
                constructivo contrastado y una gestión orientada al control de costes, calidad y
                plazos.
              </p>
              <p>
                Grupo Roiba integra experiencia acumulada y conocimiento del mercado local para
                ofrecer un servicio estructurado, preciso y alineado con las expectativas de un
                cliente exigente.
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
      <section className="py-20 md:py-28 px-6 bg-roiba-arena-light">
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
              residencial como hotelero. La combinación de especialización técnica y conocimiento
              práctico de la ejecución permite gestionar cada proyecto con un alto nivel de control,
              anticipación y capacidad de resolución.
            </p>
          </div>

          {/* profiles grid */}
          <div className="grid md:grid-cols-2 gap-10 lg:gap-14">
            {/* Profile 1 */}
            <div className="bg-white rounded-sm shadow-sm border border-roiba-arena-dark/40 overflow-hidden">
              {/* Photo */}
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
                Dirección Técnica
              </span>
              <h3 className="text-heading font-serif text-roiba-verde mt-3 mb-1">
                Iván Barrios Martín
              </h3>
              <p className="text-caption text-roiba-dorado mb-6">Dirección Técnica</p>
              <div className="w-10 h-px bg-roiba-dorado/50 mb-6" />
              <div className="space-y-4 text-body text-roiba-verde/75 leading-relaxed">
                <p>
                  Ingeniero con más de 20 años de experiencia en el sector de la construcción, con
                  una trayectoria orientada a la planificación, dirección técnica y gestión integral
                  de proyectos, tanto en el ámbito de infraestructuras como en edificación
                  residencial y hotelera.
                </p>
                <p>
                  Inicia su carrera en España, con diez años de experiencia como jefe de obra de la
                  compañía Elecnor S.A., donde participa en proyectos de infraestructuras e
                  instalaciones, adquiriendo una base sólida en ejecución, control técnico y gestión
                  de obra, que posteriormente traslada a proyectos de mayor escala y complejidad.
                </p>
                <p>
                  Posteriormente desarrolla su actividad en el sector hotelero en el Caribe para la
                  firma The Excellence Collection, donde participa en la dirección de obra y
                  supervisión de instalaciones MEP en proyectos de alta exigencia técnica,
                  incluyendo desarrollos como hotel Excellence El Carmen, Finest Punta Cana y
                  Excellence Punta Cana en República Dominicana y Excellence Oyster Bay en Jamaica.
                </p>
                <p>
                  En etapas posteriores, asume posiciones de responsabilidad en el ámbito de la
                  gestión y operación de activos, desempeñando funciones como Maintenance Manager en
                  The Excellence Collection, donde lidera la planificación y optimización de
                  recursos, el control de inversiones y la gestión técnica de infraestructuras
                  complejas.
                </p>
                <p>
                  Más adelante, asume la dirección técnica del departamento de construcción de Cana
                  Rock compañía promotora de apartamentos turísticos residenciales en Punta Cana,
                  participando en la planificación, coordinación y control de proyectos de gran
                  escala, como Universe y el proyecto Star fase II.
                </p>
                <p>
                  Su perfil se caracteriza por una fuerte especialización en instalaciones (MEP),
                  integrando sistemas eléctricos, mecánicos y sanitarios dentro del proceso
                  constructivo, así como por su capacidad de planificación, control económico y
                  coordinación de equipos multidisciplinares en grandes proyectos.
                </p>
              </div>
              </div>
            </div>

            {/* Profile 2 */}
            <div className="bg-white rounded-sm shadow-sm border border-roiba-arena-dark/40 overflow-hidden">
              {/* Photo */}
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
                Gerencia de Obras
              </span>
              <h3 className="text-heading font-serif text-roiba-verde mt-3 mb-1">
                Ramón Ojeda González
              </h3>
              <p className="text-caption text-roiba-dorado mb-6">Gerencia de Obras</p>
              <div className="w-10 h-px bg-roiba-dorado/50 mb-6" />
              <div className="space-y-4 text-body text-roiba-verde/75 leading-relaxed">
                <p>
                  Profesional con más de 25 años de experiencia en ejecución de proyectos de
                  edificación, con una trayectoria estrechamente vinculada a la obra y al desarrollo
                  completo de proyectos, desde fases iniciales hasta la entrega final.
                </p>
                <p>
                  Su carrera se inicia desde edades tempranas en el ámbito de la construcción, lo
                  que le ha permitido desarrollar un conocimiento profundo y práctico de los procesos
                  constructivos, consolidado a lo largo de décadas de experiencia en obra.
                </p>
                <p>
                  Entre 2003 y 2020 desempeña funciones de gerente de obras en España, participando
                  en proyectos residenciales y comerciales como la construcción de 57 viviendas y
                  locales en Ayamonte, la sede regional de Seguros Ocaso en Sevilla, y diversas
                  promociones de viviendas unifamiliares y desarrollos comerciales.
                </p>
                <p>
                  Posteriormente, dirige proyectos residenciales y turísticos de mayor escala,
                  incluyendo desarrollos como Terrazas de Cortesín (Málaga), promociones de vivienda
                  en Huelva, y el complejo hotelero 5 estrellas Live Aqua Beach Resort en Punta
                  Cana.
                </p>
                <p>
                  En los últimos años ha liderado la ejecución de proyectos residenciales de gran
                  envergadura, como Mar de Pulpí Fase 7 (Almería), Banús Bay (villas en Marbella),
                  Atalaya Emotion (Málaga), así como desarrollos en República Dominicana como
                  Secrets Garden, Tropical Garden y el proyecto Universe en Punta Cana.
                </p>
                <p>
                  Su perfil aporta un dominio completo de la ejecución, control directo de la obra,
                  gestión de subcontratas y planificación, garantizando el correcto desarrollo de
                  cada proyecto.
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

      {/* ── 4. VISIÓN COMPLETA ──────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
            Sinergia
          </span>
          <h2 className="text-display-md font-serif text-roiba-verde mt-4 mb-6">
            Una visión completa del proceso constructivo
          </h2>
          <div className="w-16 h-px bg-roiba-dorado mb-10" />
          <div className="space-y-6 text-body-lg text-roiba-verde/80 leading-relaxed">
            <p>
              La combinación de ambos perfiles permite cubrir de forma integral todas las fases del
              proceso constructivo, desde la planificación técnica hasta la ejecución en obra.
            </p>
            <p>
              Esta estructura garantiza un control real del proyecto, al integrar en una misma
              dirección tanto la gestión, planificación y control económico, como el conocimiento
              detallado de la ejecución y los procesos constructivos.
            </p>
            <p>
              El resultado es un modelo de trabajo basado en la anticipación, la toma de decisiones
              fundamentadas y el control continuo de cada fase del proyecto.
            </p>
          </div>
        </div>
      </section>

      {/* gold divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-roiba-dorado/30" />
      </div>

      {/* ── 5. NUESTRO ENFOQUE ──────────────────────────── */}
      <section className="py-20 md:py-28 px-6 bg-roiba-arena-light">
        <div className="max-w-3xl mx-auto">
          <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em]">
            Metodología
          </span>
          <h2 className="text-display-md font-serif text-roiba-verde mt-4 mb-6">
            Nuestro Enfoque
          </h2>
          <div className="w-16 h-px bg-roiba-dorado mb-10" />
          <p className="text-body-lg text-roiba-verde/80 leading-relaxed mb-8">
            Grupo Roiba aplica esta experiencia a cada proyecto con un objetivo claro: garantizar
            control, calidad y transparencia en todo el proceso constructivo. Cada desarrollo se
            aborda con un enfoque estructurado, basado en:
          </p>
          <ul className="space-y-4 mb-10">
            {enfoqueItems.map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="mt-1.5 block w-2 h-2 rounded-full bg-roiba-dorado flex-shrink-0" />
                <span className="text-body-lg text-roiba-verde/80">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-body-lg text-roiba-verde/80 leading-relaxed">
            Este enfoque permite reducir la incertidumbre y asegurar que cada proyecto se ejecuta
            conforme a lo previsto.
          </p>
        </div>
      </section>

      {/* ── 6. NUESTROS VALORES ─────────────────────────── */}
      <section className="relative py-20 md:py-28 px-6 bg-roiba-verde">
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
              responsabilidad. Estos son los principios que definen nuestra forma de trabajar en cada
              proyecto.
            </p>
          </div>

          {/* values grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="bg-white/[0.04] border border-white/10 rounded-sm p-8 hover:bg-white/[0.07] transition-colors duration-300"
              >
                <div className="text-roiba-dorado mb-5">
                  <Icon />
                </div>
                <h3 className="text-heading font-serif text-white mb-3">{title}</h3>
                <p className="text-body text-white/60 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA ──────────────────────────────────────── */}
      <section className="relative py-20 md:py-28 px-6 bg-roiba-verde-dark">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto text-center">
          <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em] mb-6 block">
            Hablemos
          </span>
          <h2 className="text-display-md font-serif text-white mb-6">
            ¿Tiene un proyecto en mente?
          </h2>
          <p className="text-body-lg text-white/70 leading-relaxed mb-10">
            Cuéntenos su visión. Nuestro equipo técnico le asesorará sin compromiso.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-roiba-dorado hover:bg-roiba-dorado-light text-roiba-verde font-semibold px-10 py-4 rounded-sm text-body tracking-wide transition-colors duration-300"
          >
            Solicitar consulta
          </Link>
        </div>
      </section>
    </>
  )
}
