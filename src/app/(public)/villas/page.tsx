import { Metadata } from 'next'
import { Suspense } from 'react'
import { Grid, List } from 'lucide-react'
import { Navbar, Footer } from '@/components/sections'
import { VillaCard } from '@/components/sections/VillaCard'
import { Button, Select } from '@/components/ui'
import { MOCK_VILLAS, ZONES, PRICE_RANGES } from '@/lib/data/mock-villas'
import { VillaStatus } from '@/types'

export const metadata: Metadata = {
  title: 'Villas de Lujo en Punta Cana',
  description: 'Descubra nuestra colección de más de 400 villas de lujo en Punta Cana. Propiedades exclusivas para inversión patrimonial desde $500K USD.',
  openGraph: {
    title: 'Villas de Lujo en Punta Cana | Grupo Roiba',
    description: 'Colección exclusiva de villas para inversores de alto patrimonio.',
  },
}

// Filtros disponibles
const STATUS_OPTIONS = [
  { value: '', label: 'Todos los estados' },
  { value: 'disponible', label: 'Disponibles' },
  { value: 'reservada', label: 'Reservadas' },
  { value: 'en-construccion', label: 'Pre-venta' },
]

const BEDROOM_OPTIONS = [
  { value: '', label: 'Habitaciones' },
  { value: '2', label: '2+ habitaciones' },
  { value: '3', label: '3+ habitaciones' },
  { value: '4', label: '4+ habitaciones' },
  { value: '5', label: '5+ habitaciones' },
]

const ZONE_OPTIONS = [
  { value: '', label: 'Todas las zonas' },
  ...ZONES.map(z => ({ value: z, label: z })),
]

const PRICE_OPTIONS = [
  { value: '', label: 'Todos los precios' },
  ...PRICE_RANGES.map((r, i) => ({ value: String(i), label: r.label })),
]

const SORT_OPTIONS = [
  { value: 'price-asc', label: 'Precio: menor a mayor' },
  { value: 'price-desc', label: 'Precio: mayor a menor' },
  { value: 'newest', label: 'Más recientes' },
  { value: 'bedrooms', label: 'Más habitaciones' },
]

// Server Component - filtrado en servidor
async function VillasGrid({
  status,
  zone,
  bedrooms,
  priceRange,
  sortBy,
}: {
  status?: string
  zone?: string
  bedrooms?: string
  priceRange?: string
  sortBy?: string
}) {
  // En producción: fetch desde Sanity/Supabase
  let villas = [...MOCK_VILLAS]

  // Aplicar filtros
  if (status) {
    villas = villas.filter(v => v.status === status as VillaStatus)
  }
  if (zone) {
    villas = villas.filter(v => v.location.zone === zone)
  }
  if (bedrooms) {
    const minBeds = parseInt(bedrooms)
    villas = villas.filter(v => v.bedrooms >= minBeds)
  }
  if (priceRange) {
    const range = PRICE_RANGES[parseInt(priceRange)]
    if (range) {
      villas = villas.filter(v => v.priceUsd >= range.min && v.priceUsd <= range.max)
    }
  }

  // Ordenar
  switch (sortBy) {
    case 'price-asc':
      villas.sort((a, b) => a.priceUsd - b.priceUsd)
      break
    case 'price-desc':
      villas.sort((a, b) => b.priceUsd - a.priceUsd)
      break
    case 'newest':
      villas.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      break
    case 'bedrooms':
      villas.sort((a, b) => b.bedrooms - a.bedrooms)
      break
    default:
      // Featured first, then by price
      villas.sort((a, b) => {
        if (a.featured && !b.featured) return -1
        if (!a.featured && b.featured) return 1
        return b.priceUsd - a.priceUsd
      })
  }

  if (villas.length === 0) {
    return (
      <div className="col-span-full text-center py-16">
        <div className="text-6xl mb-4">🏠</div>
        <h3 className="text-xl font-semibold text-carbon mb-2">
          No encontramos villas con estos criterios
        </h3>
        <p className="text-gray-500 mb-6">
          Intente ajustar los filtros o contacte con nosotros para una búsqueda personalizada.
        </p>
        <Button variant="primary" onClick={() => window.location.href = '/contacto'}>
          Solicitar Búsqueda Personalizada
        </Button>
      </div>
    )
  }

  return (
    <>
      {villas.map(villa => (
        <VillaCard key={villa.id} villa={villa} />
      ))}
    </>
  )
}

// Loading skeleton
function VillasSkeleton() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
          <div className="aspect-[4/3] bg-gray-200" />
          <div className="p-5 space-y-3">
            <div className="h-6 bg-gray-200 rounded w-3/4" />
            <div className="h-4 bg-gray-200 rounded w-1/2" />
            <div className="flex gap-4">
              <div className="h-4 bg-gray-200 rounded w-16" />
              <div className="h-4 bg-gray-200 rounded w-16" />
              <div className="h-4 bg-gray-200 rounded w-16" />
            </div>
            <div className="h-10 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </>
  )
}

export default function VillasPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Extract search params (server-side)
  const status = typeof searchParams.status === 'string' ? searchParams.status : undefined
  const zone = typeof searchParams.zone === 'string' ? searchParams.zone : undefined
  const bedrooms = typeof searchParams.bedrooms === 'string' ? searchParams.bedrooms : undefined
  const priceRange = typeof searchParams.price === 'string' ? searchParams.price : undefined
  const sortBy = typeof searchParams.sort === 'string' ? searchParams.sort : 'featured'

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-arena/30">
        {/* Hero Section */}
        <section className="bg-oceano text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Villas de Lujo en Punta Cana
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              Más de 400 propiedades exclusivas seleccionadas para inversores exigentes.
              Encuentre su villa ideal en el Caribe.
            </p>
          </div>
        </section>

        {/* Filters Bar */}
        <section className="bg-white shadow-md sticky top-16 z-20 border-b border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <form className="flex flex-wrap items-center gap-3">
              {/* Status Filter */}
              <Select
                name="status"
                defaultValue={status || ''}
                options={STATUS_OPTIONS}
                className="w-full sm:w-auto"
              />

              {/* Zone Filter */}
              <Select
                name="zone"
                defaultValue={zone || ''}
                options={ZONE_OPTIONS}
                className="w-full sm:w-auto"
              />

              {/* Bedrooms Filter */}
              <Select
                name="bedrooms"
                defaultValue={bedrooms || ''}
                options={BEDROOM_OPTIONS}
                className="w-full sm:w-auto"
              />

              {/* Price Filter */}
              <Select
                name="price"
                defaultValue={priceRange || ''}
                options={PRICE_OPTIONS}
                className="w-full sm:w-auto"
              />

              {/* Sort */}
              <div className="hidden md:block ml-auto">
                <Select
                  name="sort"
                  defaultValue={sortBy}
                  options={SORT_OPTIONS}
                  className="w-48"
                />
              </div>

              {/* Apply Button - for JS-disabled */}
              <noscript>
                <Button type="submit" variant="primary" size="sm">
                  Aplicar Filtros
                </Button>
              </noscript>
            </form>
          </div>
        </section>

        {/* Results */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-gray-500">
                  Mostrando <span className="font-semibold text-carbon">{MOCK_VILLAS.length}</span> villas
                </p>
              </div>
              
              {/* View Toggle - future enhancement */}
              <div className="hidden md:flex items-center gap-2 border border-gray-200 rounded-lg p-1">
                <button 
                  className="p-2 rounded bg-oceano text-white"
                  aria-label="Vista de cuadrícula"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button 
                  className="p-2 rounded text-gray-400 hover:text-gray-600"
                  aria-label="Vista de lista"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Villas Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <Suspense fallback={<VillasSkeleton />}>
                <VillasGrid
                  status={status}
                  zone={zone}
                  bedrooms={bedrooms}
                  priceRange={priceRange}
                  sortBy={sortBy}
                />
              </Suspense>
            </div>

            {/* Load More - future enhancement */}
            <div className="text-center mt-12">
              <p className="text-gray-500 mb-4">
                ¿No encuentra lo que busca?
              </p>
              <Button variant="outline" size="lg">
                Solicitar Búsqueda Personalizada
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-oceano text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              ¿Interesado en alguna propiedad?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Nuestros asesores de inversión están disponibles para guiarle en cada paso del proceso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Agendar Consulta Gratuita
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-oceano"
              >
                +1 (809) 555-1234
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
