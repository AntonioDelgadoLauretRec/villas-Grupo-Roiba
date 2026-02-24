'use client'

import { FC } from 'react'
import Image from 'next/image'

const PRIVILEGES = [
  {
    id: 'golf',
    title: 'Sede del PGA Tour',
    subtitle: 'Golf de Clase Mundial',
    description:
      'Punta Cana alberga el Corales Puntacana Championship, parada oficial del PGA Tour, consolidando la región como uno de los destinos de golf más prestigiosos del mundo. Los campos, diseñados por leyendas como Jack Nicklaus, Tom Fazio y P.B. Dye, se integran en paisajes naturales espectaculares entre acantilados, manglares y la línea costera del Caribe. Para el propietario de una villa premium, esto significa acceso exclusivo a instalaciones de competición internacional, membresías de club con servicios de primer nivel y un entorno que combina deporte, networking y estilo de vida al más alto estándar.',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=85&fit=crop',
    size: 'large' as const,
  },
  {
    id: 'marina',
    title: 'Capital del Marlin Azul',
    subtitle: 'Náutica Premium',
    description:
      'Marina Cap Cana es la marina de mayor capacidad de todo el Caribe, con certificación Blue Flag y más de 150 amarres para embarcaciones de hasta 150 pies. Reconocida internacionalmente como uno de los mejores destinos de pesca de altura del mundo — especialmente para el marlin azul —, la marina ofrece torneos de categoría internacional, servicios de charter privado, restaurantes frente al agua y acceso directo a las rutas náuticas del Caribe. Vivir en Cap Cana significa tener el mar como extensión natural de su propiedad.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=85&fit=crop',
    size: 'medium' as const,
  },
  {
    id: 'ecuestre',
    title: 'Los Establos & Polo',
    subtitle: 'Cultura Ecuestre',
    description:
      'Cap Cana cuenta con instalaciones ecuestres de primer nivel que incluyen un club de polo con canchas reglamentarias, escuelas de equitación para salto y doma, y establos gestionados con estándares internacionales. Este entorno ecuestre, poco habitual en el Caribe, permite disfrutar de una tradición que combina deporte, exclusividad y contacto con la naturaleza tropical. Un privilegio que diferencia a Punta Cana de cualquier otro destino de inversión en la región.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&q=85&fit=crop',
    size: 'medium' as const,
  },
  {
    id: 'fbo',
    title: 'Llegada sin Esperas',
    subtitle: 'FBO Privado',
    description:
      'El aeropuerto internacional de Punta Cana (PUJ) dispone de una terminal FBO (Fixed Base Operations) de aviación privada que permite una llegada directa, discreta y sin colas. Desde su jet privado hasta la puerta de su villa en menos de 15 minutos. El aeropuerto opera vuelos directos desde las principales ciudades de Estados Unidos, Europa y Latinoamérica, convirtiendo a Punta Cana en uno de los destinos mejor conectados del Caribe.',
    image: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1920&q=85&fit=crop',
    size: 'small' as const,
  },
  {
    id: 'beach',
    title: 'Playas Privadas',
    subtitle: 'Exclusividad Total',
    description:
      'Las playas de Punta Cana y Cap Cana figuran de forma recurrente entre las mejores del mundo según Condé Nast Traveler, Travel + Leisure y TripAdvisor. Arena blanca, aguas turquesa cristalinas y un clima con más de 340 días de sol al año definen un entorno costero de belleza excepcional. Los residentes de comunidades como Cap Cana, Puntacana Resort y Bávaro disfrutan de acceso a tramos de playa privados con servicios de concierge, restauración y deportes acuáticos de primer nivel.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=85&fit=crop',
    size: 'small' as const,
  },
]

export const WhyPuntaCana: FC = () => {
  return (
    <>
      {/* ── PRIVILEGES SECTION ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-editorial">
          {/* Header */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
              El Destino
            </span>
            <h2 className="text-display-md md:text-display-lg font-serif text-roiba-verde mb-6">
              The Punta Cana Privileges
            </h2>
            <div className="w-12 h-px bg-roiba-dorado mb-6" />
            <p className="text-body-lg text-roiba-verde/65 font-light leading-relaxed">
              No solo una inversión inmobiliaria. Un estilo de vida diseñado para quienes
              exigen lo extraordinario. Punta Cana y Cap Cana ofrecen un ecosistema de
              privilegios que trasciende lo residencial.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {/* Large card - Golf */}
            <div className="col-span-12 lg:col-span-7 group">
              <div className="relative h-[400px] md:h-[520px] overflow-hidden bg-roiba-verde/5">
                <Image
                  src={PRIVILEGES[0].image}
                  alt={PRIVILEGES[0].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/90 via-roiba-verde/40 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado-light mb-2 block">
                    {PRIVILEGES[0].subtitle}
                  </span>
                  <h3 className="text-heading md:text-display-md font-serif text-white mb-3">
                    {PRIVILEGES[0].title}
                  </h3>
                  <p className="text-body text-white/80 max-w-lg leading-relaxed">
                    {PRIVILEGES[0].description.slice(0, 200)}...
                  </p>
                </div>
              </div>
            </div>

            {/* Medium cards column */}
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 md:gap-6">
              {/* Marina */}
              <div className="group flex-1">
                <div className="relative h-[240px] md:h-[248px] overflow-hidden bg-roiba-verde/5">
                  <Image
                    src={PRIVILEGES[1].image}
                    alt={PRIVILEGES[1].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/80 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <span className="text-micro font-sans tracking-widest uppercase text-roiba-dorado-light/80 block mb-1">
                      {PRIVILEGES[1].subtitle}
                    </span>
                    <h3 className="text-subheading font-serif text-white">
                      {PRIVILEGES[1].title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Ecuestre */}
              <div className="group flex-1">
                <div className="relative h-[240px] md:h-[248px] overflow-hidden bg-roiba-verde/5">
                  <Image
                    src={PRIVILEGES[2].image}
                    alt={PRIVILEGES[2].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/80 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <span className="text-micro font-sans tracking-widest uppercase text-roiba-dorado-light/80 block mb-1">
                      {PRIVILEGES[2].subtitle}
                    </span>
                    <h3 className="text-subheading font-serif text-white">
                      {PRIVILEGES[2].title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Small cards row */}
            <div className="col-span-12 sm:col-span-6 group">
              <div className="relative h-[220px] overflow-hidden bg-roiba-verde/5">
                <Image
                  src={PRIVILEGES[3].image}
                  alt={PRIVILEGES[3].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/80 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="text-micro font-sans tracking-widest uppercase text-roiba-dorado-light/80 block mb-1">
                    {PRIVILEGES[3].subtitle}
                  </span>
                  <h3 className="text-subheading font-serif text-white">
                    {PRIVILEGES[3].title}
                  </h3>
                </div>
              </div>
            </div>

            <div className="col-span-12 sm:col-span-6 group">
              <div className="relative h-[220px] overflow-hidden bg-roiba-verde/5">
                <Image
                  src={PRIVILEGES[4].image}
                  alt={PRIVILEGES[4].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/80 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="text-micro font-sans tracking-widest uppercase text-roiba-dorado-light/80 block mb-1">
                    {PRIVILEGES[4].subtitle}
                  </span>
                  <h3 className="text-subheading font-serif text-white">
                    {PRIVILEGES[4].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 md:mt-20 pt-16 border-t border-roiba-verde/10">
            {[
              { value: '340', label: 'Días de sol al año' },
              { value: '15', label: 'Min. al aeropuerto' },
              { value: '8-12%', label: 'ROI proyectado' },
              { value: '0%', label: 'Impuesto transferencia*' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <p className="text-display-md font-serif text-roiba-verde mb-2">
                  {stat.value}
                </p>
                <p className="text-caption text-roiba-verde/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <p className="text-micro text-roiba-verde/40 mt-4">
            *Bajo régimen Confotur. Consulte condiciones.
          </p>
        </div>
      </section>

      {/* ── DETAILED PRIVILEGES ── */}
      <section className="py-24 md:py-32 bg-roiba-arena-light">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
            <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
              Privilegios exclusivos
            </span>
            <h2 className="text-display-md font-serif text-roiba-verde mb-6">
              Un estilo de vida sin parangón
            </h2>
            <div className="w-12 h-px bg-roiba-dorado mx-auto mb-6" />
            <p className="text-body-lg text-roiba-verde/65 font-light leading-relaxed">
              Cada privilegio de Punta Cana ha sido desarrollado para ofrecer experiencias
              que trascienden lo convencional. Conozca en detalle lo que hace de este destino
              una oportunidad única.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {PRIVILEGES.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={item.id}
                  className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className="flex-1 w-full">
                    <div className="relative aspect-[16/10] overflow-hidden group">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-3 block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-heading font-serif text-roiba-verde mb-4">
                      {item.title}
                    </h3>
                    <div className="w-8 h-px bg-roiba-dorado/40 mb-5" />
                    <p className="text-body text-roiba-verde/65 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ── */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-editorial">
          <div className="max-w-3xl mb-14 md:mb-16">
            <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
              Ubicación
            </span>
            <h2 className="text-display-md font-serif text-roiba-verde mb-5">
              Punta Cana & Cap Cana
            </h2>
            <div className="w-12 h-px bg-roiba-dorado mb-6" />
            <p className="text-body-lg text-roiba-verde/65 font-light leading-relaxed">
              Situado en el extremo oriental de República Dominicana, Punta Cana es el
              principal polo turístico y de inversión del Caribe. Cap Cana, su comunidad
              cerrada más exclusiva, ofrece 30.000 acres de desarrollo planificado con
              marina, campos de golf, playas privadas y servicios de primer nivel.
            </p>
          </div>

          {/* Map */}
          <div className="relative w-full aspect-[16/7] md:aspect-[21/9] overflow-hidden border border-roiba-verde/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121285.01234567890!2d-68.45!3d18.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea85e5f6c5b5f45%3A0x4e7f8c3d5f4a2b1c!2sCap%20Cana%2C%20Punta%20Cana!5e0!3m2!1ses!2sdo!4v1700000000000!5m2!1ses!2sdo"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Cap Cana, Punta Cana"
            />
          </div>

          {/* Location highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { icon: '✈️', label: 'Aeropuerto PUJ', detail: 'Vuelos directos desde 85+ ciudades' },
              { icon: '🏖️', label: 'Costa este', detail: '48 km de playas de arena blanca' },
              { icon: '🏘️', label: 'Cap Cana', detail: 'Comunidad cerrada más exclusiva del Caribe' },
              { icon: '🌡️', label: 'Clima tropical', detail: 'Temperatura media 27°C todo el año' },
            ].map((loc, idx) => (
              <div key={idx} className="p-5 bg-roiba-arena-light border border-roiba-verde/5">
                <span className="text-2xl block mb-3">{loc.icon}</span>
                <p className="text-body font-serif font-medium text-roiba-verde mb-1">{loc.label}</p>
                <p className="text-caption text-roiba-verde/55 leading-relaxed">{loc.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
