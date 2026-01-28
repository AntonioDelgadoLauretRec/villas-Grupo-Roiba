// ============================================
// MOCK DATA - VILLAS
// Datos de desarrollo hasta que Sanity esté configurado
// ============================================

import { Villa, Amenity } from '@/types'

// Amenidades comunes
export const AMENITIES: Amenity[] = [
  { id: 'pool', name: 'Piscina privada', icon: '🏊', category: 'exterior' },
  { id: 'garden', name: 'Jardín tropical', icon: '🌴', category: 'exterior' },
  { id: 'terrace', name: 'Terraza panorámica', icon: '🌅', category: 'exterior' },
  { id: 'parking', name: 'Garaje 2 autos', icon: '🚗', category: 'exterior' },
  { id: 'ac', name: 'Aire acondicionado', icon: '❄️', category: 'interior' },
  { id: 'kitchen', name: 'Cocina equipada', icon: '👨‍🍳', category: 'interior' },
  { id: 'laundry', name: 'Área de lavado', icon: '🧺', category: 'interior' },
  { id: 'fiber', name: 'Fibra óptica', icon: '📶', category: 'servicios' },
  { id: 'cctv', name: 'CCTV 24/7', icon: '📹', category: 'seguridad' },
  { id: 'gated', name: 'Comunidad cerrada', icon: '🔒', category: 'seguridad' },
  { id: 'gym', name: 'Gimnasio', icon: '🏋️', category: 'servicios' },
  { id: 'beach', name: 'Acceso a playa', icon: '🏖️', category: 'servicios' },
]

// Mock villas
export const MOCK_VILLAS: Villa[] = [
  {
    id: 'villa-coral-bay',
    slug: 'coral-bay',
    title: 'Villa Coral Bay',
    description: `Exclusiva villa de lujo ubicada en la prestigiosa zona de Punta Cana Village. Esta propiedad excepcional ofrece 4 amplias habitaciones con vistas al mar Caribe, perfecta para familias o como inversión de renta vacacional.

La villa cuenta con acabados de primera calidad, incluyendo pisos de mármol italiano, carpintería de cedro y herrajes de diseño europeo. La cocina está completamente equipada con electrodomésticos de alta gama.

El área exterior es un verdadero oasis tropical con piscina infinity, jardines exuberantes y múltiples áreas de entretenimiento ideales para disfrutar del clima caribeño durante todo el año.`,
    shortDescription: 'Villa de lujo con 4 habitaciones, piscina infinity y vistas al mar Caribe.',
    priceUsd: 895000,
    priceEur: 825000,
    bedrooms: 4,
    bathrooms: 4,
    areaM2: 320,
    lotM2: 850,
    status: 'disponible',
    featured: true,
    mainImage: {
      _type: 'image',
      asset: { _ref: 'placeholder-coral-bay', _type: 'reference' },
      alt: 'Villa Coral Bay - Fachada principal',
    },
    gallery: [],
    amenities: AMENITIES.filter(a => 
      ['pool', 'garden', 'terrace', 'ac', 'kitchen', 'cctv', 'gated', 'beach'].includes(a.id)
    ),
    location: {
      address: 'Punta Cana Village, Sector A-12',
      zone: 'Punta Cana Village',
      coordinates: { lat: 18.5820, lng: -68.4055 },
      nearbyAttractions: ['Playa Bávaro', 'Marina Cap Cana', 'Downtown Punta Cana'],
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 'villa-palm-paradise',
    slug: 'palm-paradise',
    title: 'Villa Palm Paradise',
    description: `Impresionante villa de estilo contemporáneo en Cap Cana, una de las zonas más exclusivas del Caribe. Con 5 habitaciones y más de 400m² de construcción, esta propiedad redefine el concepto de lujo tropical.

Diseñada por reconocidos arquitectos internacionales, la villa integra perfectamente espacios interiores y exteriores, maximizando la luz natural y las brisas del océano.

La propiedad incluye casa de huéspedes independiente, ideal para personal de servicio o visitas, y amplio garaje para 3 vehículos.`,
    shortDescription: 'Villa contemporánea de 5 habitaciones en Cap Cana con casa de huéspedes.',
    priceUsd: 1450000,
    priceEur: 1340000,
    bedrooms: 5,
    bathrooms: 6,
    areaM2: 420,
    lotM2: 1200,
    status: 'disponible',
    featured: true,
    mainImage: {
      _type: 'image',
      asset: { _ref: 'placeholder-palm-paradise', _type: 'reference' },
      alt: 'Villa Palm Paradise - Vista aérea',
    },
    gallery: [],
    amenities: AMENITIES.filter(a => 
      ['pool', 'garden', 'parking', 'ac', 'kitchen', 'fiber', 'cctv', 'gated', 'gym'].includes(a.id)
    ),
    location: {
      address: 'Cap Cana, Las Iguanas Golf Resort',
      zone: 'Cap Cana',
      coordinates: { lat: 18.4583, lng: -68.3931 },
      nearbyAttractions: ['Punta Espada Golf', 'Marina Cap Cana', 'Juanillo Beach'],
    },
    createdAt: '2024-02-20T10:00:00Z',
    updatedAt: '2024-02-20T10:00:00Z',
  },
  {
    id: 'villa-ocean-breeze',
    slug: 'ocean-breeze',
    title: 'Villa Ocean Breeze',
    description: `Encantadora villa frente al mar en la exclusiva comunidad de Tortuga Bay. Esta propiedad de 3 habitaciones es perfecta para quienes buscan la combinación ideal de intimidad, lujo y acceso directo a la playa.

Los interiores han sido decorados con un elegante estilo caribeño contemporáneo, utilizando materiales naturales y una paleta de colores que complementa el entorno tropical.

La terraza principal ofrece vistas panorámicas al océano Atlántico, perfectas para disfrutar de atardeceres inolvidables.`,
    shortDescription: 'Villa frente al mar en Tortuga Bay con acceso directo a playa privada.',
    priceUsd: 750000,
    priceEur: 695000,
    bedrooms: 3,
    bathrooms: 3,
    areaM2: 240,
    lotM2: 600,
    status: 'reservada',
    featured: false,
    mainImage: {
      _type: 'image',
      asset: { _ref: 'placeholder-ocean-breeze', _type: 'reference' },
      alt: 'Villa Ocean Breeze - Vista al mar',
    },
    gallery: [],
    amenities: AMENITIES.filter(a => 
      ['pool', 'terrace', 'ac', 'kitchen', 'cctv', 'gated', 'beach'].includes(a.id)
    ),
    location: {
      address: 'Tortuga Bay, Puntacana Resort',
      zone: 'Puntacana Resort',
      coordinates: { lat: 18.5141, lng: -68.3685 },
      nearbyAttractions: ['La Cana Golf Course', 'Puntacana Marina', 'Six Senses Spa'],
    },
    createdAt: '2024-03-10T10:00:00Z',
    updatedAt: '2024-03-10T10:00:00Z',
  },
  {
    id: 'villa-sunset-estate',
    slug: 'sunset-estate',
    title: 'Villa Sunset Estate',
    description: `Majestuosa propiedad de inversión en Cocotal Golf & Country Club. Con 6 habitaciones distribuidas en 2 niveles, esta villa es ideal tanto para residencia familiar como para operación de alquiler vacacional de alto rendimiento.

El diseño arquitectónico maximiza las vistas al campo de golf y las montañas circundantes. Cada habitación cuenta con baño en suite y amplios vestidores.

La propiedad genera actualmente un ROI del 8.5% anual en el programa de renta.`,
    shortDescription: 'Villa de inversión de 6 habitaciones con 8.5% ROI en programa de renta.',
    priceUsd: 1850000,
    priceEur: 1710000,
    bedrooms: 6,
    bathrooms: 7,
    areaM2: 520,
    lotM2: 1500,
    status: 'disponible',
    featured: true,
    mainImage: {
      _type: 'image',
      asset: { _ref: 'placeholder-sunset-estate', _type: 'reference' },
      alt: 'Villa Sunset Estate - Atardecer',
    },
    gallery: [],
    amenities: AMENITIES,
    location: {
      address: 'Cocotal Golf & Country Club, Sector Premium',
      zone: 'Bávaro',
      coordinates: { lat: 18.6892, lng: -68.4381 },
      nearbyAttractions: ['Cocotal Golf Course', 'Playa Bávaro', 'Dolphin Explorer'],
    },
    createdAt: '2024-04-05T10:00:00Z',
    updatedAt: '2024-04-05T10:00:00Z',
  },
  {
    id: 'villa-azul-marino',
    slug: 'azul-marino',
    title: 'Villa Azul Marino',
    description: `Elegante villa de estilo mediterráneo en la comunidad privada de Hacienda. Con 4 habitaciones y amplios espacios sociales, esta propiedad combina el encanto del diseño clásico con comodidades modernas.

Los jardines cuentan con iluminación paisajística, sistema de riego automatizado y una selección de árboles frutales tropicales.

Ubicación privilegiada a solo 5 minutos de Playa Bávaro y 15 minutos del aeropuerto internacional.`,
    shortDescription: 'Villa mediterránea de 4 habitaciones en comunidad privada de Hacienda.',
    priceUsd: 680000,
    priceEur: 628000,
    bedrooms: 4,
    bathrooms: 4,
    areaM2: 280,
    lotM2: 700,
    status: 'disponible',
    featured: false,
    mainImage: {
      _type: 'image',
      asset: { _ref: 'placeholder-azul-marino', _type: 'reference' },
      alt: 'Villa Azul Marino - Jardín',
    },
    gallery: [],
    amenities: AMENITIES.filter(a => 
      ['pool', 'garden', 'parking', 'ac', 'kitchen', 'laundry', 'cctv', 'gated'].includes(a.id)
    ),
    location: {
      address: 'Hacienda, Bávaro',
      zone: 'Bávaro',
      coordinates: { lat: 18.6756, lng: -68.4128 },
      nearbyAttractions: ['Playa Bávaro', 'Palma Real Shopping', 'Hard Rock Hotel'],
    },
    createdAt: '2024-05-12T10:00:00Z',
    updatedAt: '2024-05-12T10:00:00Z',
  },
  {
    id: 'villa-tropical-haven',
    slug: 'tropical-haven',
    title: 'Villa Tropical Haven',
    description: `Nueva construcción en pre-venta con precio de lanzamiento. Esta villa de 3 habitaciones en la emergente zona de Uvero Alto representa una oportunidad única de inversión con alto potencial de plusvalía.

El proyecto cuenta con certificación eco-friendly y tecnología de casa inteligente incluida. Entrega estimada: Q4 2025.

Financiamiento disponible con 30% de inicial y hasta 10 años plazo.`,
    shortDescription: 'Pre-venta de villa eco-friendly en Uvero Alto con financiamiento.',
    priceUsd: 520000,
    priceEur: 480000,
    bedrooms: 3,
    bathrooms: 3,
    areaM2: 200,
    lotM2: 500,
    status: 'en-construccion',
    featured: false,
    mainImage: {
      _type: 'image',
      asset: { _ref: 'placeholder-tropical-haven', _type: 'reference' },
      alt: 'Villa Tropical Haven - Render',
    },
    gallery: [],
    amenities: AMENITIES.filter(a => 
      ['pool', 'garden', 'ac', 'kitchen', 'fiber', 'cctv'].includes(a.id)
    ),
    location: {
      address: 'Uvero Alto, Proyecto Green Paradise',
      zone: 'Uvero Alto',
      coordinates: { lat: 18.7501, lng: -68.4956 },
      nearbyAttractions: ['Playa Uvero Alto', 'Excellence Resort', 'Zoëtry Agua'],
    },
    createdAt: '2024-06-01T10:00:00Z',
    updatedAt: '2024-06-01T10:00:00Z',
  },
]

// Helper para obtener villas filtradas
export function getFilteredVillas(options?: {
  status?: Villa['status']
  minPrice?: number
  maxPrice?: number
  bedrooms?: number
  zone?: string
  featured?: boolean
}): Villa[] {
  let filtered = [...MOCK_VILLAS]

  if (options?.status) {
    filtered = filtered.filter(v => v.status === options.status)
  }
  if (options?.minPrice) {
    filtered = filtered.filter(v => v.priceUsd >= options.minPrice!)
  }
  if (options?.maxPrice) {
    filtered = filtered.filter(v => v.priceUsd <= options.maxPrice!)
  }
  if (options?.bedrooms) {
    filtered = filtered.filter(v => v.bedrooms >= options.bedrooms!)
  }
  if (options?.zone) {
    filtered = filtered.filter(v => v.location.zone === options.zone)
  }
  if (options?.featured !== undefined) {
    filtered = filtered.filter(v => v.featured === options.featured)
  }

  return filtered
}

// Helper para obtener villa por slug
export function getVillaBySlug(slug: string): Villa | undefined {
  return MOCK_VILLAS.find(v => v.slug === slug)
}

// Zonas disponibles
export const ZONES = [
  'Punta Cana Village',
  'Cap Cana',
  'Puntacana Resort',
  'Bávaro',
  'Uvero Alto',
]

// Rangos de precio para filtros
export const PRICE_RANGES = [
  { label: 'Hasta $700K', min: 0, max: 700000 },
  { label: '$700K - $1M', min: 700000, max: 1000000 },
  { label: '$1M - $1.5M', min: 1000000, max: 1500000 },
  { label: 'Más de $1.5M', min: 1500000, max: Infinity },
]
