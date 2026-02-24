'use client'

import { FC } from 'react'
import Image from 'next/image'

const ATTRACTIONS = [
  {
    id: 'playas',
    subtitle: 'Costa Caribeña',
    title: 'Playas de Arena Blanca',
    description:
      'Las playas de Punta Cana y Cap Cana figuran de forma recurrente entre las mejores del mundo según Condé Nast Traveler, Travel + Leisure y TripAdvisor. Arena blanca de coral, aguas turquesa cristalinas y palmeras de cocotero componen un paisaje costero de belleza excepcional. Los residentes de comunidades como Cap Cana y Puntacana Resort disfrutan de acceso a tramos de playa privados con servicios de concierge, restauración gourmet y deportes acuáticos de primer nivel. Playa Juanillo, Playa Blanca y Cabeza de Toro son algunas de las joyas que adornan esta costa única de 48 kilómetros.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=85&fit=crop',
  },
  {
    id: 'golf',
    subtitle: 'Golf de Clase Mundial',
    title: 'Sede del PGA Tour',
    description:
      'Punta Cana alberga el Corales Puntacana Championship, parada oficial del PGA Tour, consolidando la región como uno de los destinos de golf más prestigiosos del mundo. Los campos, diseñados por leyendas como Jack Nicklaus, Tom Fazio y P.B. Dye, se integran en paisajes naturales espectaculares entre acantilados, manglares y la línea costera del Caribe. Corales Golf Club, Punta Espada y La Cana Golf Course ofrecen entre todos más de 54 hoyos de nivel de campeonato. Acceso exclusivo a instalaciones de competición internacional, membresías de club con servicios de primer nivel y un entorno que combina deporte de élite y estilo de vida al más alto estándar.',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=85&fit=crop',
  },
  {
    id: 'gastronomia',
    subtitle: 'Alta Cocina',
    title: 'Gastronomía de Autor',
    description:
      'Punta Cana y Cap Cana albergan una escena gastronómica de nivel internacional que rivaliza con las grandes capitales culinarias. El Restaurante SBG, firmado por el chef con 3 estrellas Michelin Nandu Jubany, eleva la cocina mediterránea a una experiencia sensorial única en el Caribe. La Palapa by Eden Roc, con su privilegiada ubicación frente al Atlántico, fusiona técnica europea con ingredientes del trópico. El concepto Platea transforma la cena en un espectáculo de alta cultura gastronómica. Junto a estos referentes de alta cocina, el destino cuenta con una vibrante oferta de restaurantes de playa, ceviicherías de pescadores locales y steakhouses de primer nivel.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=85&fit=crop',
  },
  {
    id: 'marina',
    subtitle: 'Náutica Premium',
    title: 'Capital del Marlin Azul',
    description:
      'Marina Cap Cana es la marina de mayor capacidad de todo el Caribe, con certificación Blue Flag y más de 150 amarres para embarcaciones de hasta 150 pies. Reconocida internacionalmente como uno de los mejores destinos de pesca de altura del mundo —especialmente para el marlin azul—, la marina organiza torneos de categoría internacional que atraen a los mejores pescadores deportivos del planeta. Los restaurantes frente al agua, boutiques náuticas y acceso directo a las rutas del Caribe completan una experiencia donde el mar se convierte en extensión natural de su estilo de vida.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=85&fit=crop',
  },
  {
    id: 'clubes',
    subtitle: 'Vida Social Exclusiva',
    title: 'Clubes Sociales de Primer Nivel',
    description:
      'Cap Cana y Punta Cana cuentan con una red de clubes sociales y beach clubs que definen un estilo de vida diferente al de cualquier otro destino caribeño. El Eden Roc Cap Cana, con su icónica arquitectura sobre los acantilados del Atlántico, combina piscina de borde infinito, restaurante de autor y acceso exclusivo a Playa Juanillo. El Blue Marlin Cap Cana, en plena marina, es el epicentro del social life náutico. Puntacana Resort & Club ofrece a sus residentes acceso a uno de los country clubs más completos del Caribe, con canchas de tenis, piscinas, spa de lujo y programación social de alto nivel durante todo el año.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=85&fit=crop',
  },
  {
    id: 'naturaleza',
    subtitle: 'Patrimonio Natural',
    title: 'Parques Naturales y Ecología',
    description:
      'A escasos kilómetros de Cap Cana, la República Dominicana custodia algunos de los ecosistemas más privilegiados del Caribe. El Parque Nacional del Este protege 420 km² de bosques tropicales, manglares y arrecifes de coral, con la mítica Isla Saona como joya de su interior. El Indigenous Eyes Ecological Park, dentro de Puntacana Resort & Club, alberga 12 lagunas de agua dulce y jardines botánicos de flora nativa. El Hoyo Azul, un cenote de aguas turquesas de impactante belleza, se ha convertido en uno de los rincones naturales más fotografiados del Caribe. Esta riqueza natural equilibra la sofisticación del lujo con la pureza del trópico.',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1920&q=85&fit=crop',
  },
  {
    id: 'buceo',
    subtitle: 'Mundo Submarino',
    title: 'Buceo y Vida Marina',
    description:
      'Las aguas del Caribe dominicano albergan un ecosistema submarino de extraordinaria riqueza: arrecifes de coral vivos repletos de vida tropical, naufragios convertidos en arrecifes artificiales y cuevas submarinas únicas. Los centros de buceo de Cap Cana y Bávaro ofrecen inmersiones para todos los niveles, desde snorkel en aguas someras hasta dives técnicos a más de 30 metros de profundidad. Entre diciembre y marzo, la Bahía de Samaná ofrece el espectáculo único de las ballenas jorobadas migrando para reproducirse en las cálidas aguas dominicanas. Uno de los mejores destinos de buceo de todo el hemisferio occidental.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=85&fit=crop',
  },
  {
    id: 'clima',
    subtitle: 'Perfección Climática',
    title: 'El Clima Ideal Todo el Año',
    description:
      'Con 340 días de sol al año y una temperatura media de 27°C, Punta Cana goza de uno de los climas más estables y benignos del mundo. La región se beneficia de la brisa constante del Caribe, que suaviza el calor tropical y crea unas condiciones de confort excepcionales tanto en exteriores como en interiores. La temporada seca, de noviembre a abril, coincide con el invierno del hemisferio norte, convirtiendo a Punta Cana en el refugio perfecto para residentes que escapan del frío europeo o norteamericano. Un clima que invita a vivir en exteriores y que convierte cada día en una oportunidad para disfrutar del jardín, la piscina, el golf o la playa.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85&fit=crop',
  },
  {
    id: 'nocturna',
    subtitle: 'Entretenimiento',
    title: 'Vida Nocturna y Ocio',
    description:
      'Cuando cae el sol en Punta Cana, la vida nocturna despliega una oferta de ocio que sorprende por su variedad y nivel. Imagine Punta Cana es uno de los clubes más singulares del mundo: una discoteca construida en el interior de una cueva natural de estalactitas y estalagmitas con capacidad para 2.000 personas. Coco Bongo lleva décadas siendo referencia de entretenimiento en vivo con espectáculos de acróbatas y efectos especiales. Para quienes prefieren un ambiente más íntimo, los beach clubs de Cap Cana ofrecen noches con DJ residente, cócteles de autor y puesta de sol sobre el Atlántico.',
    image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1920&q=85&fit=crop',
  },
  {
    id: 'ecuestre',
    subtitle: 'Cultura Ecuestre',
    title: 'Los Establos & Polo',
    description:
      'Cap Cana cuenta con instalaciones ecuestres de primer nivel que incluyen un club de polo con canchas reglamentarias, escuelas de equitación para salto y doma clásica, y establos gestionados con estándares internacionales. Los torneos de polo que se celebran en la temporada alta congregan a jugadores de Argentina, México, España y Estados Unidos, convirtiendo el campo en escenario de un deporte que combina velocidad, elegancia y tradición social. Para las familias residentes, las escuelas de hípica ofrecen programas para niños y adultos durante todo el año.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&q=85&fit=crop',
  },
]

export const WhyPuntaCana: FC = () => {
  return (
    <>
      {/* ── ATTRACTIONS SECTION ── */}
      <section className="py-24 md:py-32 bg-roiba-arena-light">
        <div className="container-editorial">
          {/* Header */}
          <div className="max-w-3xl mb-20 md:mb-24">
            <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
              El Destino
            </span>
            <h2 className="text-display-md md:text-display-lg font-serif text-roiba-verde mb-6">
              Punta Cana —{' '}
              <span className="italic">Un estilo de vida excepcional</span>
            </h2>
            <div className="w-12 h-px bg-roiba-dorado mb-6" />
            <p className="text-body-lg text-roiba-verde/65 font-light leading-relaxed">
              Más allá de la construcción de una villa, vivir en Punta Cana significa acceder a
              un ecosistema de privilegios únicos en el Caribe: playas de categoría mundial,
              gastronomía de autor, golf del PGA Tour, naturaleza virgen y un clima perfecto
              los 365 días del año.
            </p>
          </div>

          {/* Alternating attraction cards */}
          <div className="space-y-20 md:space-y-28">
            {ATTRACTIONS.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={item.id}
                  className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image with zoom on hover */}
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
              principal polo turístico del Caribe. Cap Cana, su comunidad cerrada más
              exclusiva, ofrece 30.000 acres de desarrollo planificado con marina, campos
              de golf, playas privadas y servicios de primer nivel. A 15 minutos del
              aeropuerto internacional con vuelos directos desde 85 ciudades.
            </p>
          </div>

          {/* Map */}
          <div className="relative w-full aspect-[16/7] md:aspect-[21/9] overflow-hidden border border-roiba-verde/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241406.19339!2d-68.72!3d18.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea85e5f6c5b5f45%3A0x4e7f8c3d5f4a2b1c!2sCap%20Cana%2C%20Punta%20Cana%2C%20La%20Altagracia!5e0!3m2!1ses!2sdo!4v1700000000000!5m2!1ses!2sdo"
              width="100%"
              height="100%"
              style={{ border: 0, position: 'absolute', inset: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Cap Cana, Punta Cana"
            />
          </div>

          {/* Location stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 pt-12 border-t border-roiba-verde/10">
            {[
              { value: '340', label: 'Días de sol al año' },
              { value: '15 min', label: 'Al aeropuerto PUJ' },
              { value: '85+', label: 'Ciudades con vuelo directo' },
              { value: '27°C', label: 'Temperatura media anual' },
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
        </div>
      </section>
    </>
  )
}
