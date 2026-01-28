import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Bed, Bath, Maximize } from 'lucide-react'
import { Button, Card, CardImage, CardContent, CardTitle, CardDescription, CardFooter } from '@/components/ui'
import { formatCurrency, formatArea } from '@/lib/utils'

// Placeholder data - will be replaced with Sanity data
const FEATURED_VILLAS = [
  {
    id: '1',
    slug: 'villa-coral-bay',
    title: 'Villa Coral Bay',
    shortDescription: 'Espectacular villa frente al mar con infinity pool y acceso directo a la playa privada.',
    priceUsd: 1250000,
    bedrooms: 5,
    bathrooms: 6,
    areaM2: 450,
    mainImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075',
    status: 'disponible',
  },
  {
    id: '2',
    slug: 'villa-palma-real',
    title: 'Villa Palma Real',
    shortDescription: 'Diseño contemporáneo con amplios espacios abiertos y jardín tropical privado.',
    priceUsd: 890000,
    bedrooms: 4,
    bathrooms: 4,
    areaM2: 380,
    mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070',
    status: 'disponible',
  },
  {
    id: '3',
    slug: 'villa-ocean-view',
    title: 'Villa Ocean View',
    shortDescription: 'Ubicación privilegiada con vistas panorámicas al océano desde cada habitación.',
    priceUsd: 1580000,
    bedrooms: 6,
    bathrooms: 7,
    areaM2: 520,
    mainImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053',
    status: 'disponible',
  },
]

export function FeaturedVillas() {
  return (
    <section className="section bg-arena-light">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-dorado font-medium text-sm uppercase tracking-wider">
            Propiedades Destacadas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-carbon mt-2 mb-4">
            Nuestras Villas Premium
          </h2>
          <p className="text-gray-600">
            Selección exclusiva de propiedades de inversión con las mejores ubicaciones 
            y potencial de rentabilidad en Punta Cana.
          </p>
        </div>

        {/* Villas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_VILLAS.map((villa) => (
            <Card key={villa.id} href={`/villas/${villa.slug}`}>
              <CardImage>
                <Image
                  src={villa.mainImage}
                  alt={villa.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    Disponible
                  </span>
                </div>
              </CardImage>
              
              <CardContent>
                <CardTitle>{villa.title}</CardTitle>
                <CardDescription>{villa.shortDescription}</CardDescription>
                
                {/* Features */}
                <div className="flex items-center gap-4 mt-4 text-gray-500 text-sm">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{villa.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{villa.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="w-4 h-4" />
                    <span>{formatArea(villa.areaM2)}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <div className="font-serif font-bold text-xl text-oceano">
                  {formatCurrency(villa.priceUsd)}
                </div>
                <span className="text-dorado font-medium text-sm flex items-center gap-1">
                  Ver detalles
                  <ArrowRight className="w-4 h-4" />
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link href="/villas">
            <Button variant="secondary" size="lg">
              Ver Todas las Propiedades
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
