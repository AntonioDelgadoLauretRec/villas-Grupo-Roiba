'use client'

import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

// ─── POI CATEGORIES with distinct icons ───
type PoiCategory = 'playa' | 'golf' | 'marina' | 'resort' | 'aeropuerto' | 'ocio' | 'naturaleza' | 'gastronomia'

const CATEGORY_CONFIG: Record<PoiCategory, { color: string; label: string }> = {
  playa:        { color: '#0EA5E9', label: 'Playas' },
  golf:         { color: '#22C55E', label: 'Golf' },
  marina:       { color: '#3B82F6', label: 'Marina & Náutica' },
  resort:       { color: '#C9A96E', label: 'Resorts & Comunidades' },
  aeropuerto:   { color: '#6B7280', label: 'Transporte' },
  ocio:         { color: '#A855F7', label: 'Ocio & Entretenimiento' },
  naturaleza:   { color: '#10B981', label: 'Naturaleza' },
  gastronomia:  { color: '#F59E0B', label: 'Gastronomía' },
}

// SVG icon per category
function CategoryIcon({ cat, size = 14 }: { cat: PoiCategory; size?: number }) {
  const color = CATEGORY_CONFIG[cat].color
  const s = size
  switch (cat) {
    case 'playa':
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
          <path d="M2 12c2-2 4-2 6 0s4 2 6 0" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M2 8c2-2 4-2 6 0s4 2 6 0" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.5" />
        </svg>
      )
    case 'golf':
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
          <path d="M8 2v10" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 2l5 3-5 3z" fill={color} />
          <ellipse cx="8" cy="14" rx="3" ry="1" stroke={color} strokeWidth="1.2" />
        </svg>
      )
    case 'marina':
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
          <path d="M8 2v6" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
          <path d="M4 8l4 5 4-5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 14c2-1.5 4-1.5 6 0s4 1.5 6 0" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    case 'resort':
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
          <rect x="3" y="6" width="10" height="8" rx="1" stroke={color} strokeWidth="1.5" />
          <path d="M3 6l5-4 5 4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="6.5" y="9" width="3" height="5" rx="0.5" stroke={color} strokeWidth="1.2" />
        </svg>
      )
    case 'aeropuerto':
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
          <path d="M8 2L3 9h3v5h4V9h3z" fill={color} opacity="0.9" />
        </svg>
      )
    case 'ocio':
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
          <polygon points="8,1 9.8,5.8 15,6.2 11,9.5 12.2,14.5 8,11.8 3.8,14.5 5,9.5 1,6.2 6.2,5.8" fill={color} />
        </svg>
      )
    case 'naturaleza':
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
          <path d="M8 1C5 4 3 7 3 10a5 5 0 0010 0c0-3-2-6-5-9z" stroke={color} strokeWidth="1.5" fill={color} opacity="0.2" />
          <path d="M8 6v6M6 9l2-2 2 2" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'gastronomia':
      return (
        <svg width={s} height={s} viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="9" r="5" stroke={color} strokeWidth="1.5" />
          <path d="M6 9h4M8 7v4" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
          <path d="M8 2v2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
  }
}

const POINTS_OF_INTEREST: { name: string; desc: string; cat: PoiCategory }[] = [
  { name: 'Cap Cana', desc: 'Comunidad cerrada de lujo, 30.000 acres', cat: 'resort' },
  { name: 'Puntacana Resort & Club', desc: 'Resort residencial de referencia', cat: 'resort' },
  { name: 'Playa Juanillo', desc: 'Una de las mejores playas del Caribe', cat: 'playa' },
  { name: 'Playa Bávaro', desc: 'Bandera Azul, arena blanca 4 km', cat: 'playa' },
  { name: 'Playa Blanca', desc: 'Acceso exclusivo Cap Cana', cat: 'playa' },
  { name: 'Punta Espada Golf Club', desc: 'Diseño Jack Nicklaus, PGA Tour', cat: 'golf' },
  { name: 'Corales Golf Club', desc: 'Sede del PGA Championship', cat: 'golf' },
  { name: 'La Cana Golf Course', desc: 'P.B. Dye, vistas al Atlántico', cat: 'golf' },
  { name: 'Marina Cap Cana', desc: 'Mayor marina del Caribe, Blue Flag', cat: 'marina' },
  { name: 'Aeropuerto Int. PUJ', desc: 'Vuelos directos desde 85+ ciudades', cat: 'aeropuerto' },
  { name: 'Eden Roc Cap Cana', desc: 'Hotel & beach club sobre acantilados', cat: 'ocio' },
  { name: 'Imagine Punta Cana', desc: 'Discoteca en cueva natural', cat: 'ocio' },
  { name: 'SBG by Nandu Jubany', desc: 'Chef 3 estrellas Michelin', cat: 'gastronomia' },
  { name: 'La Palapa by Eden Roc', desc: 'Fusión europea–tropical', cat: 'gastronomia' },
  { name: 'Indigenous Eyes Park', desc: '12 lagunas, jardín botánico', cat: 'naturaleza' },
  { name: 'Hoyo Azul', desc: 'Cenote turquesa icónico', cat: 'naturaleza' },
]

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
      'Punta Cana alberga el Corales Puntacana Championship, parada oficial del PGA Tour, consolidando la región como uno de los destinos de golf más prestigiosos del mundo. Los campos, diseñados por leyendas como Jack Nicklaus, Tom Fazio y P.B. Dye, se integran en paisajes naturales espectaculares entre acantilados, manglares y la línea costera del Caribe. Corales Golf Club, Punta Espada y La Cana Golf Course ofrecen entre todos más de 54 hoyos de nivel de campeonato.',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=85&fit=crop',
  },
  {
    id: 'gastronomia',
    subtitle: 'Alta Cocina',
    title: 'Gastronomía de Autor',
    description:
      'Punta Cana y Cap Cana albergan una escena gastronómica de nivel internacional que rivaliza con las grandes capitales culinarias. El Restaurante SBG, firmado por el chef con 3 estrellas Michelin Nandu Jubany, eleva la cocina mediterránea a una experiencia sensorial única en el Caribe. La Palapa by Eden Roc fusiona técnica europea con ingredientes del trópico. El concepto Platea transforma la cena en un espectáculo de alta cultura gastronómica.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=85&fit=crop',
  },
  {
    id: 'marina',
    subtitle: 'Náutica Premium',
    title: 'Capital del Marlin Azul',
    description:
      'Marina Cap Cana es la marina de mayor capacidad de todo el Caribe, con certificación Blue Flag y más de 150 amarres para embarcaciones de hasta 150 pies. Reconocida internacionalmente como uno de los mejores destinos de pesca de altura del mundo, la marina organiza torneos de categoría internacional que atraen a los mejores pescadores deportivos del planeta.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=85&fit=crop',
  },
  {
    id: 'clubes',
    subtitle: 'Vida Social Exclusiva',
    title: 'Clubes Sociales de Primer Nivel',
    description:
      'Cap Cana y Punta Cana cuentan con una red de clubes sociales y beach clubs que definen un estilo de vida diferente al de cualquier otro destino caribeño. El Eden Roc Cap Cana combina piscina de borde infinito, restaurante de autor y acceso exclusivo a Playa Juanillo. Puntacana Resort & Club ofrece a sus residentes acceso a uno de los country clubs más completos del Caribe.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=85&fit=crop',
  },
  {
    id: 'naturaleza',
    subtitle: 'Patrimonio Natural',
    title: 'Parques Naturales y Ecología',
    description:
      'A escasos kilómetros de Cap Cana, la República Dominicana custodia algunos de los ecosistemas más privilegiados del Caribe. El Parque Nacional del Este protege 420 km² de bosques tropicales, manglares y arrecifes de coral, con la mítica Isla Saona como joya de su interior. El Indigenous Eyes Ecological Park alberga 12 lagunas de agua dulce y jardines botánicos de flora nativa.',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1920&q=85&fit=crop',
  },
  {
    id: 'buceo',
    subtitle: 'Mundo Submarino',
    title: 'Buceo y Vida Marina',
    description:
      'Las aguas del Caribe dominicano albergan un ecosistema submarino de extraordinaria riqueza: arrecifes de coral vivos, naufragios convertidos en arrecifes artificiales y cuevas submarinas únicas. Entre diciembre y marzo, la Bahía de Samaná ofrece el espectáculo único de las ballenas jorobadas. Uno de los mejores destinos de buceo de todo el hemisferio occidental.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=85&fit=crop',
  },
  {
    id: 'clima',
    subtitle: 'Perfección Climática',
    title: 'El Clima Ideal Todo el Año',
    description:
      'Con 340 días de sol al año y una temperatura media de 27°C, Punta Cana goza de uno de los climas más estables y benignos del mundo. La temporada seca, de noviembre a abril, coincide con el invierno del hemisferio norte, convirtiendo a Punta Cana en el refugio perfecto para residentes que escapan del frío europeo o norteamericano.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85&fit=crop',
  },
  {
    id: 'nocturna',
    subtitle: 'Entretenimiento',
    title: 'Vida Nocturna y Ocio',
    description:
      'Imagine Punta Cana es uno de los clubes más singulares del mundo: una discoteca construida en el interior de una cueva natural con capacidad para 2.000 personas. Coco Bongo es referencia de entretenimiento en vivo con espectáculos de acróbatas. Los beach clubs de Cap Cana ofrecen noches con DJ residente, cócteles de autor y puesta de sol sobre el Atlántico.',
    image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1920&q=85&fit=crop',
  },
  {
    id: 'ecuestre',
    subtitle: 'Cultura Ecuestre',
    title: 'Los Establos & Polo',
    description:
      'Cap Cana cuenta con instalaciones ecuestres de primer nivel que incluyen un club de polo con canchas reglamentarias, escuelas de equitación para salto y doma clásica, y establos gestionados con estándares internacionales. Los torneos de polo congregan a jugadores de Argentina, México, España y Estados Unidos.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&q=85&fit=crop',
  },
]

// ─── WEATHER ICONS ───
function SunIcon() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  )
}
function CloudSunIcon() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M17.66 6.34l1.41-1.41" />
      <path d="M16 16a4 4 0 10-8 0H6a3 3 0 100 6h12a4 4 0 000-8z" />
    </svg>
  )
}
function RainIcon() {
  return (
    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 16.2A5 5 0 0018 7h-1.26A8 8 0 104 15.25" />
      <line x1="8" y1="19" x2="8" y2="21" /><line x1="12" y1="17" x2="12" y2="19" /><line x1="16" y1="19" x2="16" y2="21" />
    </svg>
  )
}

function getWeatherIcon(code: number) {
  if (code <= 1) return <SunIcon />
  if (code <= 3) return <CloudSunIcon />
  return <RainIcon />
}

function getWeatherLabel(code: number): string {
  if (code === 0) return 'Despejado'
  if (code === 1) return 'Mayormente despejado'
  if (code === 2) return 'Parcialmente nublado'
  if (code === 3) return 'Nublado'
  if (code <= 49) return 'Niebla'
  if (code <= 59) return 'Llovizna'
  if (code <= 69) return 'Lluvia'
  if (code <= 79) return 'Nieve'
  if (code <= 99) return 'Tormenta'
  return 'Variable'
}

// ─── LIVE WEATHER (Open-Meteo API — free, no key) ───
function usePuntaCanaWeather() {
  const [weather, setWeather] = useState<{
    temp: number; feelsLike: number; humidity: number; windSpeed: number; weatherCode: number
  } | null>(null)

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=18.58&longitude=-68.37&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=America%2FSanto_Domingo')
      .then((r) => r.json())
      .then((data) => {
        if (data?.current) {
          setWeather({
            temp: Math.round(data.current.temperature_2m),
            feelsLike: Math.round(data.current.apparent_temperature),
            humidity: data.current.relative_humidity_2m,
            windSpeed: Math.round(data.current.wind_speed_10m),
            weatherCode: data.current.weather_code,
          })
        }
      })
      .catch(() => setWeather({ temp: 28, feelsLike: 30, humidity: 75, windSpeed: 18, weatherCode: 1 }))
  }, [])

  return weather
}

export const WhyPuntaCana: FC = () => {
  const weather = usePuntaCanaWeather()

  // Unique categories present in POI list (for legend)
  const uniqueCategories = Array.from(new Set(POINTS_OF_INTEREST.map((p) => p.cat)))

  return (
    <>
      {/* ══════════════════════════════════════════
          1. TEMPERATURA EN DIRECTO — Arriba del todo
          ══════════════════════════════════════════ */}
      <section className="bg-roiba-verde relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="container-editorial py-10 md:py-14 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left — Temp + Icon */}
            <div className="flex items-center gap-6">
              <div className="flex-shrink-0">
                {weather ? getWeatherIcon(weather.weatherCode) : <SunIcon />}
              </div>
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-serif text-white leading-none" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}>
                    {weather?.temp ?? '—'}
                  </span>
                  <span className="font-serif text-white/30 text-heading">°C</span>
                </div>
                <p className="text-micro font-sans font-medium tracking-[0.25em] uppercase text-roiba-dorado mt-1">
                  Punta Cana — En directo
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-20 bg-white/10" />

            {/* Right — Weather details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-4">
              <div>
                <p className="text-micro font-sans uppercase tracking-widest text-white/35 mb-1">Sensación</p>
                <p className="text-subheading font-serif text-white">{weather?.feelsLike ?? '—'}°C</p>
              </div>
              <div>
                <p className="text-micro font-sans uppercase tracking-widest text-white/35 mb-1">Humedad</p>
                <p className="text-subheading font-serif text-white">{weather?.humidity ?? '—'}%</p>
              </div>
              <div>
                <p className="text-micro font-sans uppercase tracking-widest text-white/35 mb-1">Viento</p>
                <p className="text-subheading font-serif text-white">{weather?.windSpeed ?? '—'} km/h</p>
              </div>
              <div>
                <p className="text-micro font-sans uppercase tracking-widest text-white/35 mb-1">Estado</p>
                <p className="text-subheading font-serif text-white">{weather ? getWeatherLabel(weather.weatherCode) : '—'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          2. EXPLICACIÓN DE PUNTA CANA + MAPA + POIs
          ══════════════════════════════════════════ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-editorial">
          {/* Header + Description */}
          <div className="max-w-3xl mb-16 md:mb-20">
            <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
              Ubicación
            </span>
            <h2 className="text-display-md md:text-display-lg font-serif text-roiba-verde mb-6">
              Punta Cana & Cap Cana
            </h2>
            <div className="w-12 h-px bg-roiba-dorado mb-6" />
            <p className="text-body-lg text-roiba-verde/65 font-light leading-relaxed mb-4">
              Situado en el extremo oriental de República Dominicana, Punta Cana es el
              principal polo turístico y residencial del Caribe. Cap Cana, su comunidad
              cerrada más exclusiva, ofrece 30.000 acres de desarrollo planificado con
              marina, campos de golf de campeonato, playas privadas y servicios de primer
              nivel internacional.
            </p>
            <p className="text-body text-roiba-verde/50 leading-relaxed">
              A tan solo 15 minutos del Aeropuerto Internacional de Punta Cana (PUJ) —
              el de mayor tráfico del Caribe, con vuelos directos desde más de 85 ciudades
              de Europa, Norteamérica y Sudamérica—, la zona combina accesibilidad global
              con la privacidad y exclusividad que demanda el comprador internacional.
            </p>
          </div>

          {/* Google Maps — Satellite view */}
          <div className="mb-10">
            <div className="relative w-full aspect-[16/9] md:aspect-[2/1] overflow-hidden border border-roiba-verde/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d120703.0967!2d-68.45!3d18.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sdo!4v1700000000000!5m2!1ses!2sdo"
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vista satélite de Punta Cana y Cap Cana"
              />
            </div>
          </div>

          {/* ── Legend (categories) ── */}
          <div className="flex flex-wrap gap-4 md:gap-6 mb-8 pb-8 border-b border-roiba-verde/10">
            {uniqueCategories.map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <CategoryIcon cat={cat} size={14} />
                <span className="text-caption text-roiba-verde/70 font-medium">
                  {CATEGORY_CONFIG[cat].label}
                </span>
              </div>
            ))}
          </div>

          {/* ── Points of Interest Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
            {POINTS_OF_INTEREST.map((poi, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 border border-roiba-verde/8 bg-roiba-arena-light hover:border-roiba-dorado/30 transition-colors duration-300"
              >
                <div className="mt-0.5 flex-shrink-0">
                  <CategoryIcon cat={poi.cat} size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-caption font-semibold text-roiba-verde leading-tight truncate">
                    {poi.name}
                  </p>
                  <p className="text-micro text-roiba-verde/50 mt-0.5 leading-snug">{poi.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── Stats ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-roiba-verde/10">
            {[
              { value: '340', label: 'Días de sol al año' },
              { value: '15 min', label: 'Al aeropuerto PUJ' },
              { value: '85+', label: 'Ciudades con vuelo directo' },
              { value: '27°C', label: 'Temperatura media anual' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center md:text-left">
                <p className="text-display-md font-serif text-roiba-verde mb-2">{stat.value}</p>
                <p className="text-caption text-roiba-verde/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          3. ATRACTIVOS
          ══════════════════════════════════════════ */}
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
                  <div className="flex-1">
                    <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-3 block">
                      {item.subtitle}
                    </span>
                    <h3 className="text-heading font-serif text-roiba-verde mb-4">{item.title}</h3>
                    <div className="w-8 h-px bg-roiba-dorado/40 mb-5" />
                    <p className="text-body text-roiba-verde/65 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
