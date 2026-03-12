'use client'

import { FC, useEffect, useState, useCallback, useRef } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'

// ─── POI CATEGORIES ───
type PoiCategory = 'playa' | 'golf' | 'marina' | 'resort' | 'aeropuerto' | 'ocio' | 'naturaleza' | 'gastronomia'

const CATEGORY_META_ES: Record<PoiCategory, { color: string; label: string }> = {
  resort:       { color: '#C9A96E', label: 'Resorts & Comunidades' },
  playa:        { color: '#0EA5E9', label: 'Playas' },
  golf:         { color: '#22C55E', label: 'Golf' },
  marina:       { color: '#3B82F6', label: 'Marina & Náutica' },
  aeropuerto:   { color: '#94A3B8', label: 'Transporte' },
  ocio:         { color: '#A855F7', label: 'Ocio' },
  naturaleza:   { color: '#10B981', label: 'Naturaleza' },
  gastronomia:  { color: '#F59E0B', label: 'Gastronomía' },
}

const CATEGORY_META_EN: Record<PoiCategory, { color: string; label: string }> = {
  resort:       { color: '#C9A96E', label: 'Resorts & Communities' },
  playa:        { color: '#0EA5E9', label: 'Beaches' },
  golf:         { color: '#22C55E', label: 'Golf' },
  marina:       { color: '#3B82F6', label: 'Marina & Sailing' },
  aeropuerto:   { color: '#94A3B8', label: 'Transport' },
  ocio:         { color: '#A855F7', label: 'Leisure' },
  naturaleza:   { color: '#10B981', label: 'Nature' },
  gastronomia:  { color: '#F59E0B', label: 'Gastronomy' },
}

// Category order for sorted legend
const CAT_ORDER: PoiCategory[] = ['resort', 'playa', 'golf', 'marina', 'gastronomia', 'ocio', 'naturaleza', 'aeropuerto']

function CatDot({ cat, size = 10 }: { cat: PoiCategory; size?: number }) {
  return (
    <span
      className="inline-block rounded-full flex-shrink-0"
      style={{ width: size, height: size, background: CATEGORY_META_ES[cat].color }}
    />
  )
}

// ─── POINTS OF INTEREST with coordinates ───
interface POI {
  name: string
  desc: string
  cat: PoiCategory
  lat: number
  lng: number
}

const POIS: POI[] = [
  // Resorts & Comunidades
  { name: 'Cap Cana', desc: 'Comunidad exclusiva, 30.000 acres', cat: 'resort', lat: 18.4567, lng: -68.3946 },
  { name: 'Puntacana Resort & Club', desc: 'Resort residencial de referencia', cat: 'resort', lat: 18.5815, lng: -68.3685 },
  // Playas
  { name: 'Playa Juanillo', desc: 'Top 10 playas del Caribe', cat: 'playa', lat: 18.4530, lng: -68.3890 },
  { name: 'Playa Bávaro', desc: 'Bandera Azul, 4 km arena blanca', cat: 'playa', lat: 18.6885, lng: -68.4365 },
  { name: 'Playa Blanca', desc: 'Acceso exclusivo Cap Cana', cat: 'playa', lat: 18.4621, lng: -68.3918 },
  // Golf
  { name: 'Punta Espada Golf', desc: 'Jack Nicklaus, PGA Tour', cat: 'golf', lat: 18.4497, lng: -68.3877 },
  { name: 'Corales Golf Club', desc: 'Sede PGA Championship', cat: 'golf', lat: 18.5098, lng: -68.3630 },
  { name: 'La Cana Golf Course', desc: 'P.B. Dye, vistas al Atlántico', cat: 'golf', lat: 18.5865, lng: -68.3700 },
  // Marina
  { name: 'Marina Cap Cana', desc: 'Mayor marina del Caribe', cat: 'marina', lat: 18.4550, lng: -68.3932 },
  // Gastronomía
  { name: 'SBG by Nandu Jubany', desc: '3 estrellas Michelin', cat: 'gastronomia', lat: 18.4540, lng: -68.3912 },
  { name: 'La Palapa by Eden Roc', desc: 'Fusión europea–tropical', cat: 'gastronomia', lat: 18.4495, lng: -68.3895 },
  // Ocio
  { name: 'Eden Roc Cap Cana', desc: 'Hotel & beach club', cat: 'ocio', lat: 18.4501, lng: -68.3897 },
  { name: 'Imagine Punta Cana', desc: 'Discoteca en cueva natural', cat: 'ocio', lat: 18.6699, lng: -68.4287 },
  // Naturaleza
  { name: 'Indigenous Eyes Park', desc: '12 lagunas, jardín botánico', cat: 'naturaleza', lat: 18.5680, lng: -68.3840 },
  { name: 'Hoyo Azul', desc: 'Cenote turquesa icónico', cat: 'naturaleza', lat: 18.4540, lng: -68.3880 },
  // Transporte
  { name: 'Aeropuerto Int. PUJ', desc: 'Vuelos desde 85+ ciudades', cat: 'aeropuerto', lat: 18.5675, lng: -68.3636 },
]

// ─── Build Google Maps embed URL with marker for exact location ───
function buildMapUrl(lat: number, lng: number, zoom: number, marker = false) {
  if (marker) {
    // Use q= parameter to show a marker pin at exact location
    return `https://maps.google.com/maps?q=${lat},${lng}&t=k&z=${zoom}&output=embed`
  }
  // Overview: center without marker
  return `https://maps.google.com/maps?ll=${lat},${lng}&t=k&z=${zoom}&output=embed`
}

const DEFAULT_MAP_URL = buildMapUrl(18.54, -68.39, 11)

const ATTRACTIONS_ES = [
  {
    id: 'playas', subtitle: 'Costa Caribeña', title: 'Playas de Arena Blanca',
    description: 'Las playas de Punta Cana y Cap Cana figuran de forma recurrente entre las mejores del mundo según Condé Nast Traveler, Travel + Leisure y TripAdvisor. Arena blanca de coral, aguas turquesa cristalinas y palmeras de cocotero componen un paisaje costero de belleza excepcional. Playa Juanillo, Playa Blanca y Cabeza de Toro son algunas de las joyas que adornan esta costa única de 48 kilómetros.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=85&fit=crop',
  },
  {
    id: 'golf', subtitle: 'Golf de Clase Mundial', title: 'Sede del PGA Tour',
    description: 'Punta Cana alberga el Corales Puntacana Championship, parada oficial del PGA Tour. Los campos, diseñados por Jack Nicklaus, Tom Fazio y P.B. Dye, se integran en paisajes espectaculares entre acantilados, manglares y la línea costera del Caribe. Más de 54 hoyos de nivel de campeonato.',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=85&fit=crop',
  },
  {
    id: 'gastronomia', subtitle: 'Alta Cocina', title: 'Gastronomía de Autor',
    description: 'El Restaurante SBG, firmado por el chef con 3 estrellas Michelin Nandu Jubany, eleva la cocina mediterránea a una experiencia sensorial única. La Palapa by Eden Roc fusiona técnica europea con ingredientes del trópico. El concepto Platea transforma la cena en un espectáculo de alta cultura gastronómica.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=85&fit=crop',
  },
  {
    id: 'marina', subtitle: 'Náutica Premium', title: 'Capital del Marlin Azul',
    description: 'Marina Cap Cana es la marina de mayor capacidad de todo el Caribe, con certificación Blue Flag y más de 150 amarres para embarcaciones de hasta 150 pies. Reconocida como uno de los mejores destinos de pesca de altura del mundo.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=85&fit=crop',
  },
  {
    id: 'clubes', subtitle: 'Vida Social Exclusiva', title: 'Clubes Sociales de Primer Nivel',
    description: 'Eden Roc Cap Cana combina piscina de borde infinito, restaurante de autor y acceso exclusivo a Playa Juanillo. Puntacana Resort & Club ofrece a sus residentes uno de los country clubs más completos del Caribe, con canchas de tenis, piscinas y spa de lujo.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=85&fit=crop',
  },
  {
    id: 'naturaleza', subtitle: 'Patrimonio Natural', title: 'Parques Naturales y Ecología',
    description: 'El Parque Nacional del Este protege 420 km² de bosques tropicales, manglares y arrecifes de coral, con la mítica Isla Saona. El Indigenous Eyes Ecological Park alberga 12 lagunas de agua dulce. El Hoyo Azul, un cenote turquesa, es uno de los rincones más fotografiados del Caribe.',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1920&q=85&fit=crop',
  },
  {
    id: 'buceo', subtitle: 'Mundo Submarino', title: 'Buceo y Vida Marina',
    description: 'Arrecifes de coral vivos, naufragios convertidos en arrecifes artificiales y cuevas submarinas únicas. Entre diciembre y marzo, la Bahía de Samaná ofrece el espectáculo de las ballenas jorobadas. Uno de los mejores destinos de buceo del hemisferio occidental.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=85&fit=crop',
  },
  {
    id: 'clima', subtitle: 'Perfección Climática', title: 'El Clima Ideal Todo el Año',
    description: 'Con 340 días de sol al año y 27°C de media, Punta Cana goza de uno de los climas más estables del mundo. La temporada seca coincide con el invierno europeo, convirtiendo el destino en el refugio perfecto para residentes internacionales.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85&fit=crop',
  },
  {
    id: 'nocturna', subtitle: 'Entretenimiento', title: 'Vida Nocturna y Ocio',
    description: 'Imagine Punta Cana es una discoteca construida en una cueva natural con capacidad para 2.000 personas. Coco Bongo es referencia de entretenimiento en vivo. Los beach clubs de Cap Cana ofrecen noches con DJ residente y cócteles de autor.',
    image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1920&q=85&fit=crop',
  },
  {
    id: 'ecuestre', subtitle: 'Cultura Ecuestre', title: 'Los Establos & Polo',
    description: 'Club de polo con canchas reglamentarias, escuelas de equitación y establos con estándares internacionales. Los torneos congregan jugadores de Argentina, México, España y Estados Unidos.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&q=85&fit=crop',
  },
]

const ATTRACTIONS_EN = [
  {
    id: 'playas', subtitle: 'Caribbean Coast', title: 'White Sand Beaches',
    description: 'Punta Cana and Cap Cana beaches consistently rank among the world\'s best according to Condé Nast Traveler, Travel + Leisure and TripAdvisor. White coral sand, crystal turquoise waters and coconut palms create a coastal landscape of exceptional beauty. Playa Juanillo, Playa Blanca and Cabeza de Toro are some of the gems along this unique 48-kilometre coastline.',
    image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=1920&q=85&fit=crop',
  },
  {
    id: 'golf', subtitle: 'World-Class Golf', title: 'PGA Tour Venue',
    description: 'Punta Cana hosts the Corales Puntacana Championship, an official PGA Tour event. The courses, designed by Jack Nicklaus, Tom Fazio and P.B. Dye, are set in spectacular landscapes among cliffs, mangroves and the Caribbean coastline. Over 54 championship-level holes.',
    image: 'https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?w=1920&q=85&fit=crop',
  },
  {
    id: 'gastronomia', subtitle: 'Fine Dining', title: 'Signature Gastronomy',
    description: 'The SBG Restaurant, by 3-Michelin-star chef Nandu Jubany, elevates Mediterranean cuisine to a unique sensory experience. La Palapa by Eden Roc fuses European technique with tropical ingredients. The Platea concept transforms dinner into a high gastronomic culture show.',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920&q=85&fit=crop',
  },
  {
    id: 'marina', subtitle: 'Premium Sailing', title: 'Blue Marlin Capital',
    description: 'Marina Cap Cana is the largest-capacity marina in the Caribbean, with Blue Flag certification and over 150 berths for vessels up to 150 feet. Recognised as one of the world\'s top deep-sea fishing destinations.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1920&q=85&fit=crop',
  },
  {
    id: 'clubes', subtitle: 'Exclusive Social Life', title: 'Premier Social Clubs',
    description: 'Eden Roc Cap Cana combines an infinity pool, signature restaurant and exclusive access to Playa Juanillo. Puntacana Resort & Club offers residents one of the most complete country clubs in the Caribbean, with tennis courts, pools and a luxury spa.',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&q=85&fit=crop',
  },
  {
    id: 'naturaleza', subtitle: 'Natural Heritage', title: 'Nature Parks and Ecology',
    description: 'East National Park protects 420 km² of tropical forests, mangroves and coral reefs, including the legendary Saona Island. Indigenous Eyes Ecological Park houses 12 freshwater lagoons. Hoyo Azul, a turquoise cenote, is one of the most photographed spots in the Caribbean.',
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1920&q=85&fit=crop',
  },
  {
    id: 'buceo', subtitle: 'Underwater World', title: 'Diving and Marine Life',
    description: 'Living coral reefs, shipwrecks turned into artificial reefs and unique underwater caves. Between December and March, Samaná Bay offers the spectacle of humpback whales. One of the best diving destinations in the Western Hemisphere.',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=85&fit=crop',
  },
  {
    id: 'clima', subtitle: 'Perfect Climate', title: 'The Ideal Climate Year-Round',
    description: 'With 340 sunny days a year and an average of 27°C, Punta Cana enjoys one of the most stable climates in the world. The dry season coincides with the European winter, making it the perfect refuge for international residents.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85&fit=crop',
  },
  {
    id: 'nocturna', subtitle: 'Entertainment', title: 'Nightlife and Leisure',
    description: 'Imagine Punta Cana is a nightclub built inside a natural cave with capacity for 2,000 people. Coco Bongo is a benchmark for live entertainment. Cap Cana\'s beach clubs offer evenings with resident DJs and signature cocktails.',
    image: 'https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?w=1920&q=85&fit=crop',
  },
  {
    id: 'ecuestre', subtitle: 'Equestrian Culture', title: 'Stables & Polo',
    description: 'Polo club with regulation-size fields, riding schools and stables with international standards. Tournaments attract players from Argentina, Mexico, Spain and the United States.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=1920&q=85&fit=crop',
  },
]

// ─── i18n text for UI labels ───
const UI_TEXT = {
  es: {
    liveLabel: 'Punta Cana — En directo',
    sensation: 'Sensación',
    humidity: 'Humedad',
    wind: 'Viento',
    status: 'Estado',
    locationTag: 'Ubicación',
    locationTitle: 'Punta Cana & Cap Cana',
    locationP1: 'Situado en el extremo oriental de República Dominicana, Punta Cana es el principal polo turístico y residencial del Caribe. Cap Cana, su comunidad cerrada más exclusiva, ofrece 30.000 acres de desarrollo planificado con marina, campos de golf de campeonato, playas privadas y servicios de primer nivel internacional.',
    locationP2: 'A tan solo 15 minutos del Aeropuerto Internacional de Punta Cana (PUJ) — el de mayor tráfico del Caribe, con vuelos directos desde más de 85 ciudades de Europa, Norteamérica y Sudamérica—, la zona combina accesibilidad global con la privacidad y exclusividad que demanda el comprador internacional.',
    viewAll: 'Ver todo',
    filterByCategory: 'Filtrar por categoría',
    allPoints: 'Todos los puntos',
    clearFilter: 'Limpiar filtro',
    destinationTag: 'El Destino',
    destinationTitle: 'Un estilo de vida excepcional',
    destinationDesc: 'Más allá de la construcción de una villa, vivir en Punta Cana significa acceder a un ecosistema de privilegios únicos en el Caribe: playas de categoría mundial, gastronomía de autor, golf del PGA Tour, naturaleza virgen y un clima perfecto los 365 días del año.',
    weatherClear: 'Despejado',
    weatherMostlyClear: 'Mayormente despejado',
    weatherPartlyCloudy: 'Parcialmente nublado',
    weatherCloudy: 'Nublado',
    weatherDrizzle: 'Llovizna',
    weatherRain: 'Lluvia',
    weatherStorm: 'Tormenta',
    weatherVariable: 'Variable',
  },
  en: {
    liveLabel: 'Punta Cana — Live',
    sensation: 'Feels like',
    humidity: 'Humidity',
    wind: 'Wind',
    status: 'Conditions',
    locationTag: 'Location',
    locationTitle: 'Punta Cana & Cap Cana',
    locationP1: 'Located on the eastern tip of the Dominican Republic, Punta Cana is the Caribbean\'s leading tourist and residential hub. Cap Cana, its most exclusive gated community, offers 30,000 acres of planned development with a marina, championship golf courses, private beaches and world-class amenities.',
    locationP2: 'Just 15 minutes from Punta Cana International Airport (PUJ) — the busiest in the Caribbean, with direct flights from over 85 cities in Europe, North America and South America — the area combines global accessibility with the privacy and exclusivity that international buyers demand.',
    viewAll: 'View all',
    filterByCategory: 'Filter by category',
    allPoints: 'All points',
    clearFilter: 'Clear filter',
    destinationTag: 'The Destination',
    destinationTitle: 'An exceptional lifestyle',
    destinationDesc: 'Beyond building a villa, living in Punta Cana means accessing a unique ecosystem of privileges in the Caribbean: world-class beaches, signature gastronomy, PGA Tour golf, pristine nature and perfect climate 365 days a year.',
    weatherClear: 'Clear',
    weatherMostlyClear: 'Mostly clear',
    weatherPartlyCloudy: 'Partly cloudy',
    weatherCloudy: 'Cloudy',
    weatherDrizzle: 'Drizzle',
    weatherRain: 'Rain',
    weatherStorm: 'Storm',
    weatherVariable: 'Variable',
  },
}

// ─── WEATHER ───
function SunIcon() {
  return (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v2M4.93 4.93l1.41 1.41M20 12h2M17.66 6.34l1.41-1.41" />
      <path d="M16 16a4 4 0 10-8 0H6a3 3 0 100 6h12a4 4 0 000-8z" />
    </svg>
  )
}
function RainIcon() {
  return (
    <svg className="w-10 h-10 md:w-12 md:h-12" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
function getWeatherLabel(code: number, tx: typeof UI_TEXT.es): string {
  if (code === 0) return tx.weatherClear
  if (code === 1) return tx.weatherMostlyClear
  if (code === 2) return tx.weatherPartlyCloudy
  if (code === 3) return tx.weatherCloudy
  if (code <= 59) return tx.weatherDrizzle
  if (code <= 69) return tx.weatherRain
  if (code <= 99) return tx.weatherStorm
  return tx.weatherVariable
}

function usePuntaCanaWeather() {
  const [weather, setWeather] = useState<{
    temp: number; feelsLike: number; humidity: number; windSpeed: number; weatherCode: number
  } | null>(null)
  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=18.58&longitude=-68.37&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code&timezone=America%2FSanto_Domingo')
      .then((r) => r.json())
      .then((data) => {
        if (data?.current) setWeather({
          temp: Math.round(data.current.temperature_2m),
          feelsLike: Math.round(data.current.apparent_temperature),
          humidity: data.current.relative_humidity_2m,
          windSpeed: Math.round(data.current.wind_speed_10m),
          weatherCode: data.current.weather_code,
        })
      })
      .catch(() => setWeather({ temp: 28, feelsLike: 30, humidity: 75, windSpeed: 18, weatherCode: 1 }))
  }, [])
  return weather
}

// ═══════════════════════════════════════════
// COMPONENT
// ═══════════════════════════════════════════
export const WhyPuntaCana: FC = () => {
  const { locale } = useLanguage()
  const tx = UI_TEXT[locale]
  const CATEGORY_META = locale === 'en' ? CATEGORY_META_EN : CATEGORY_META_ES
  const ATTRACTIONS = locale === 'en' ? ATTRACTIONS_EN : ATTRACTIONS_ES
  const weather = usePuntaCanaWeather()
  const [activePoi, setActivePoi] = useState<number | null>(null)
  const [mapUrl, setMapUrl] = useState(DEFAULT_MAP_URL)
  const [activeFilter, setActiveFilter] = useState<PoiCategory | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handlePoiClick = useCallback((idx: number) => {
    if (activePoi === idx) {
      setActivePoi(null)
      setMapUrl(DEFAULT_MAP_URL)
    } else {
      const poi = POIS[idx]
      setActivePoi(idx)
      // Use zoom 16 with marker for exact POI location
      setMapUrl(buildMapUrl(poi.lat, poi.lng, 16, true))
    }
  }, [activePoi])

  const filteredPois = activeFilter ? POIS.filter((p) => p.cat === activeFilter) : POIS
  // Sort POIs by category order
  const sortedPois = [...filteredPois].sort((a, b) => CAT_ORDER.indexOf(a.cat) - CAT_ORDER.indexOf(b.cat))

  const handleFilterSelect = useCallback((cat: PoiCategory | null) => {
    setActiveFilter(cat)
    setActivePoi(null)
    setMapUrl(DEFAULT_MAP_URL)
    setDropdownOpen(false)
  }, [])

  return (
    <>
      {/* ═══ 1. LIVE WEATHER BAR ═══ */}
      <section className="bg-roiba-verde relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="container-editorial py-8 md:py-10 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {weather ? getWeatherIcon(weather.weatherCode) : <SunIcon />}
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-serif text-white leading-none text-5xl md:text-6xl">
                    {weather?.temp ?? '—'}
                  </span>
                  <span className="font-serif text-white/30 text-xl">°C</span>
                </div>
                <p className="text-micro font-sans font-medium tracking-[0.2em] uppercase text-roiba-dorado mt-1">
                  {tx.liveLabel}
                </p>
              </div>
            </div>
            <div className="hidden md:block w-px h-14 bg-white/10" />
            <div className="grid grid-cols-4 gap-x-8 gap-y-2 text-center md:text-left">
              {[
                { l: tx.sensation, v: `${weather?.feelsLike ?? '—'}°C` },
                { l: tx.humidity, v: `${weather?.humidity ?? '—'}%` },
                { l: tx.wind, v: `${weather?.windSpeed ?? '—'} km/h` },
                { l: tx.status, v: weather ? getWeatherLabel(weather.weatherCode, tx) : '—' },
              ].map((d) => (
                <div key={d.l}>
                  <p className="text-[10px] font-sans uppercase tracking-widest text-white/30 mb-0.5">{d.l}</p>
                  <p className="text-sm md:text-base font-serif text-white">{d.v}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. LOCATION — Description + Map + POIs ═══ */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-editorial">
          {/* Centered header */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-14">
            <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
              {tx.locationTag}
            </span>
            <h2 className="text-display-md md:text-display-lg font-serif text-roiba-verde mb-5">
              {tx.locationTitle}
            </h2>
            <div className="w-12 h-px bg-roiba-dorado mx-auto mb-5" />
            <p className="text-body-lg text-roiba-verde/60 font-light leading-relaxed text-justify mb-3">
              {tx.locationP1}
            </p>
            <p className="text-body text-roiba-verde/45 leading-relaxed text-justify">
              {tx.locationP2}
            </p>
          </div>

          {/* MAP — reduced height */}
          <div className="mb-6">
            <div className="relative w-full overflow-hidden border border-roiba-verde/10" style={{ height: 'clamp(260px, 35vw, 420px)' }}>
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vista satélite de Punta Cana"
              />
              {/* Reset button when zoomed */}
              {activePoi !== null && (
                <button
                  onClick={() => { setActivePoi(null); setMapUrl(DEFAULT_MAP_URL) }}
                  className="absolute top-3 right-3 z-10 bg-white/95 backdrop-blur-sm text-roiba-verde text-micro font-sans font-semibold uppercase tracking-wider px-3 py-1.5 border border-roiba-verde/15 hover:bg-roiba-dorado hover:text-roiba-verde hover:border-roiba-dorado transition-colors"
                >
                  {tx.viewAll}
                </button>
              )}
            </div>
          </div>

          {/* CATEGORY FILTER — Premium dropdown */}
          <div className="mb-5 flex items-center gap-3">
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-white border border-roiba-verde/15 hover:border-roiba-dorado/40 transition-all duration-200 text-[12px] font-sans font-medium tracking-wider uppercase text-roiba-verde"
              >
                {activeFilter ? (
                  <>
                    <CatDot cat={activeFilter} size={8} />
                    {CATEGORY_META[activeFilter].label}
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4 text-roiba-dorado" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 4h12M4 8h8M6 12h4" strokeLinecap="round" />
                    </svg>
                    {tx.filterByCategory}
                  </>
                )}
                <svg className={`w-3 h-3 ml-1 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 4.5l3 3 3-3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dropdown panel */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-1 z-20 bg-white border border-roiba-verde/10 shadow-lg min-w-[240px]">
                  <button
                    onClick={() => handleFilterSelect(null)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left text-[12px] font-sans tracking-wider uppercase transition-colors duration-150 ${
                      activeFilter === null
                        ? 'bg-roiba-verde text-white'
                        : 'text-roiba-verde/70 hover:bg-roiba-arena-light'
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-roiba-verde/40 flex-shrink-0" />
                    {tx.allPoints}
                  </button>
                  <div className="h-px bg-roiba-verde/8" />
                  {CAT_ORDER.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => handleFilterSelect(cat)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left text-[12px] font-sans tracking-wider uppercase transition-colors duration-150 ${
                        activeFilter === cat
                          ? 'bg-roiba-verde text-white'
                          : 'text-roiba-verde/70 hover:bg-roiba-arena-light'
                      }`}
                    >
                      <CatDot cat={cat} size={8} />
                      <span className="flex-1">{CATEGORY_META[cat].label}</span>
                      <span className={`text-[10px] tabular-nums ${activeFilter === cat ? 'text-white/50' : 'text-roiba-verde/30'}`}>
                        {POIS.filter(p => p.cat === cat).length}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Active filter chip (quick clear) */}
            {activeFilter && (
              <button
                onClick={() => handleFilterSelect(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-roiba-verde/5 text-roiba-verde/60 text-[11px] font-sans tracking-wider uppercase border border-roiba-verde/10 hover:bg-roiba-verde/10 transition-colors"
              >
                {tx.clearFilter}
                <svg className="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 3l6 6M9 3l-6 6" strokeLinecap="round" />
                </svg>
              </button>
            )}
          </div>

          {/* POI GRID — premium cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {sortedPois.map((poi) => {
              const globalIdx = POIS.indexOf(poi)
              const isActive = activePoi === globalIdx
              return (
                <button
                  key={poi.name}
                  onClick={() => handlePoiClick(globalIdx)}
                  className={`group text-left flex items-start gap-3 px-4 py-3 border transition-all duration-200 ${
                    isActive
                      ? 'bg-roiba-verde text-white border-roiba-verde'
                      : 'bg-roiba-arena-light border-roiba-verde/8 hover:border-roiba-dorado/40 hover:shadow-sm'
                  }`}
                >
                  <CatDot cat={poi.cat} size={8} />
                  <div className="min-w-0 flex-1">
                    <p className={`text-[13px] font-semibold leading-tight truncate ${isActive ? 'text-white' : 'text-roiba-verde'}`}>
                      {poi.name}
                    </p>
                    <p className={`text-[11px] mt-0.5 leading-snug ${isActive ? 'text-white/60' : 'text-roiba-verde/45'}`}>
                      {poi.desc}
                    </p>
                  </div>
                  <svg className={`w-3.5 h-3.5 flex-shrink-0 mt-0.5 transition-colors ${isActive ? 'text-roiba-dorado' : 'text-roiba-verde/20 group-hover:text-roiba-dorado/60'}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3v10M4 6l4-3 4 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══ 3. ATTRACTIONS ═══ */}
      <section className="py-14 md:py-20 bg-roiba-arena-light">
        <div className="container-editorial">
          <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
            <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
              {tx.destinationTag}
            </span>
            <h2 className="text-display-md md:text-display-lg font-serif text-roiba-verde mb-5">
              Punta Cana —{' '}
              <span className="italic">{tx.destinationTitle}</span>
            </h2>
            <div className="w-12 h-px bg-roiba-dorado mx-auto mb-5" />
            <p className="text-body-lg text-roiba-verde/60 font-light leading-relaxed text-justify">
              {tx.destinationDesc}
            </p>
          </div>

          <div className="space-y-14 md:space-y-20">
            {ATTRACTIONS.map((item, index) => (
              <div
                key={item.id}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-14 items-center ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 w-full">
                  <div className="relative aspect-[16/10] overflow-hidden group">
                    <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 1024px) 100vw, 50vw" />
                  </div>
                </div>
                <div className="flex-1">
                  <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-2 block">{item.subtitle}</span>
                  <h3 className="text-heading font-serif text-roiba-verde mb-3">{item.title}</h3>
                  <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
                  <p className="text-body text-roiba-verde/60 leading-relaxed text-justify">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
