import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { 
  ArrowLeft, 
  Bed, 
  Bath, 
  Maximize, 
  MapPin, 
  Share2,
  Heart,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  CheckCircle,
  Building2,
  Trees
} from 'lucide-react'
import { Navbar, Footer } from '@/components/sections'
import { Button } from '@/components/ui'
import { getVillaBySlug, MOCK_VILLAS } from '@/lib/data/mock-villas'
import { formatCurrency, formatArea } from '@/lib/utils/format'
import { Villa, VillaStatus } from '@/types'

// Generate static params for all villas
export async function generateStaticParams() {
  return MOCK_VILLAS.map((villa) => ({
    slug: villa.slug,
  }))
}

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const villa = getVillaBySlug(params.slug)
  
  if (!villa) {
    return {
      title: 'Villa no encontrada | Grupo Roiba',
    }
  }

  return {
    title: `${villa.title} | Villas de Lujo en Punta Cana`,
    description: villa.shortDescription,
    openGraph: {
      title: `${villa.title} - ${formatCurrency(villa.priceUsd, 'USD')}`,
      description: villa.shortDescription,
      images: [
        {
          url: '/images/placeholder-villa.jpg', // Replace with actual image URL
          width: 1200,
          height: 630,
          alt: villa.title,
        },
      ],
    },
  }
}

// Status badge configuration
const STATUS_CONFIG: Record<VillaStatus, { label: string; className: string }> = {
  disponible: { label: 'Disponible', className: 'bg-green-100 text-green-700 border-green-200' },
  reservada: { label: 'Reservada', className: 'bg-amber-100 text-amber-700 border-amber-200' },
  vendida: { label: 'Vendida', className: 'bg-red-100 text-red-700 border-red-200' },
  'en-construccion': { label: 'Pre-venta', className: 'bg-blue-100 text-blue-700 border-blue-200' },
}

// Group amenities by category
function groupAmenitiesByCategory(amenities: Villa['amenities']) {
  const grouped: Record<string, typeof amenities> = {}
  
  for (const amenity of amenities) {
    if (!grouped[amenity.category]) {
      grouped[amenity.category] = []
    }
    grouped[amenity.category].push(amenity)
  }
  
  return grouped
}

const CATEGORY_LABELS: Record<string, string> = {
  interior: 'Interior',
  exterior: 'Exterior',
  seguridad: 'Seguridad',
  servicios: 'Servicios',
}

export default function VillaDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const villa = getVillaBySlug(params.slug)
  
  if (!villa) {
    notFound()
  }

  const statusConfig = STATUS_CONFIG[villa.status]
  const groupedAmenities = groupAmenitiesByCategory(villa.amenities)
  
  // Get related villas (same zone or similar price, excluding current)
  const relatedVillas = MOCK_VILLAS
    .filter(v => v.id !== villa.id)
    .filter(v => v.location.zone === villa.location.zone || 
                 Math.abs(v.priceUsd - villa.priceUsd) < 300000)
    .slice(0, 3)

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen bg-arena/30">
        {/* Breadcrumb & Back */}
        <div className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link 
                href="/villas"
                className="flex items-center gap-2 text-gray-600 hover:text-oceano transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Volver al catálogo</span>
              </Link>
              
              <div className="flex items-center gap-2">
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                  aria-label="Compartir"
                >
                  <Share2 className="w-5 h-5" />
                </button>
                <button 
                  className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                  aria-label="Guardar favorito"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section - Image Gallery */}
        <section className="relative bg-gray-900">
          {/* Main Image Placeholder */}
          <div className="aspect-[21/9] md:aspect-[3/1] bg-gradient-to-br from-oceano/90 to-oceano flex items-center justify-center">
            <div className="text-center text-white">
              <Building2 className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg opacity-75">Imagen de {villa.title}</p>
              <p className="text-sm opacity-50">(Conectar Sanity para ver imágenes reales)</p>
            </div>
          </div>
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${statusConfig.className}`}>
              {statusConfig.label}
            </span>
          </div>
          
          {/* Gallery Button Placeholder */}
          <button className="absolute bottom-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg text-sm font-medium text-carbon hover:bg-white transition-colors shadow-lg">
            Ver galería completa
          </button>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              
              {/* Left Column - Villa Info */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Title & Location */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-carbon">
                      {villa.title}
                    </h1>
                    {villa.featured && (
                      <span className="flex-shrink-0 px-3 py-1 bg-dorado text-white text-xs font-bold rounded-full">
                        DESTACADA
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <MapPin className="w-4 h-4" />
                    <span>{villa.location.address}</span>
                  </div>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                    <Bed className="w-6 h-6 mx-auto mb-2 text-oceano" />
                    <p className="text-2xl font-bold text-carbon">{villa.bedrooms}</p>
                    <p className="text-sm text-gray-500">Habitaciones</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                    <Bath className="w-6 h-6 mx-auto mb-2 text-oceano" />
                    <p className="text-2xl font-bold text-carbon">{villa.bathrooms}</p>
                    <p className="text-sm text-gray-500">Baños</p>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                    <Building2 className="w-6 h-6 mx-auto mb-2 text-oceano" />
                    <p className="text-2xl font-bold text-carbon">{formatArea(villa.areaM2)}</p>
                    <p className="text-sm text-gray-500">Construcción</p>
                  </div>
                  {villa.lotM2 && (
                    <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100">
                      <Trees className="w-6 h-6 mx-auto mb-2 text-oceano" />
                      <p className="text-2xl font-bold text-carbon">{formatArea(villa.lotM2)}</p>
                      <p className="text-sm text-gray-500">Terreno</p>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-carbon mb-4">
                    Descripción
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    {villa.description.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed mb-4 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Amenities */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-carbon mb-6">
                    Características y Amenidades
                  </h2>
                  <div className="space-y-6">
                    {Object.entries(groupedAmenities).map(([category, amenities]) => (
                      <div key={category}>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                          {CATEGORY_LABELS[category] || category}
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                          {amenities.map((amenity) => (
                            <div 
                              key={amenity.id}
                              className="flex items-center gap-3 p-3 bg-arena/50 rounded-lg"
                            >
                              <span className="text-xl">{amenity.icon}</span>
                              <span className="text-sm text-carbon">{amenity.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
                  <h2 className="text-xl font-semibold text-carbon mb-4">
                    Ubicación
                  </h2>
                  
                  {/* Map Placeholder */}
                  <div className="aspect-video bg-gray-100 rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <MapPin className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">Mapa interactivo</p>
                      <p className="text-xs">(Integrar Google Maps)</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">Zona</h3>
                      <p className="text-carbon">{villa.location.zone}</p>
                    </div>
                    
                    {villa.location.nearbyAttractions && villa.location.nearbyAttractions.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-gray-500 mb-2">Lugares cercanos</h3>
                        <div className="flex flex-wrap gap-2">
                          {villa.location.nearbyAttractions.map((attraction) => (
                            <span 
                              key={attraction}
                              className="px-3 py-1 bg-arena rounded-full text-sm text-carbon"
                            >
                              {attraction}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right Column - Contact Card (Sticky) */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  
                  {/* Price Card */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="mb-6">
                      <p className="text-sm text-gray-500 mb-1">Precio</p>
                      <p className="text-3xl md:text-4xl font-bold text-carbon">
                        {formatCurrency(villa.priceUsd, 'USD')}
                      </p>
                      {villa.priceEur && (
                        <p className="text-lg text-gray-500 mt-1">
                          ≈ {formatCurrency(villa.priceEur, 'EUR')}
                        </p>
                      )}
                    </div>
                    
                    {villa.status === 'disponible' && (
                      <div className="space-y-3">
                        <Button variant="primary" fullWidth size="lg">
                          <Calendar className="w-4 h-4 mr-2" />
                          Agendar Visita
                        </Button>
                        <Button variant="outline" fullWidth>
                          <Mail className="w-4 h-4 mr-2" />
                          Solicitar Información
                        </Button>
                      </div>
                    )}
                    
                    {villa.status === 'en-construccion' && (
                      <div className="space-y-3">
                        <Button variant="primary" fullWidth size="lg">
                          Reservar en Pre-venta
                        </Button>
                        <p className="text-xs text-center text-gray-500">
                          30% inicial, financiamiento disponible
                        </p>
                      </div>
                    )}
                    
                    {(villa.status === 'reservada' || villa.status === 'vendida') && (
                      <div className="text-center py-4">
                        <p className="text-gray-500 mb-3">
                          Esta propiedad ya no está disponible
                        </p>
                        <Button variant="secondary" fullWidth>
                          Ver propiedades similares
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Contact Options */}
                  <div className="bg-oceano rounded-2xl p-6 text-white">
                    <h3 className="font-semibold mb-4">¿Tiene preguntas?</h3>
                    <div className="space-y-3">
                      <a 
                        href="tel:+18095551234"
                        className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Phone className="w-5 h-5" />
                        <span>+1 (809) 555-1234</span>
                      </a>
                      <a 
                        href="https://wa.me/18095551234"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>WhatsApp</span>
                      </a>
                      <a 
                        href="mailto:inversiones@gruporoiba.com"
                        className="flex items-center gap-3 p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                        <span>inversiones@gruporoiba.com</span>
                      </a>
                    </div>
                  </div>

                  {/* Trust Signals */}
                  <div className="bg-white rounded-2xl p-6 border border-gray-100">
                    <h3 className="font-semibold text-carbon mb-4">
                      ¿Por qué Grupo Roiba?
                    </h3>
                    <ul className="space-y-3">
                      {[
                        '15+ años de experiencia',
                        '400+ propiedades vendidas',
                        'Asesoría legal incluida',
                        'Due diligence completo',
                      ].map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Villas */}
        {relatedVillas.length > 0 && (
          <section className="py-12 bg-white border-t border-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-carbon mb-8">
                Propiedades Similares
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedVillas.map((relatedVilla) => (
                  <Link 
                    key={relatedVilla.id}
                    href={`/villas/${relatedVilla.slug}`}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-dorado/30 transition-all"
                  >
                    {/* Image Placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-oceano/80 to-oceano flex items-center justify-center">
                      <Building2 className="w-12 h-12 text-white/50" />
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-carbon group-hover:text-dorado transition-colors mb-1">
                        {relatedVilla.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{relatedVilla.location.zone}</p>
                      <p className="text-lg font-bold text-oceano">
                        {formatCurrency(relatedVilla.priceUsd, 'USD')}
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Bed className="w-4 h-4" /> {relatedVilla.bedrooms}
                        </span>
                        <span className="flex items-center gap-1">
                          <Bath className="w-4 h-4" /> {relatedVilla.bathrooms}
                        </span>
                        <span className="flex items-center gap-1">
                          <Maximize className="w-4 h-4" /> {formatArea(relatedVilla.areaM2)}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link href="/villas">
                  <Button variant="outline" size="lg">
                    Ver todas las propiedades
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-oceano to-oceano/90 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              ¿Listo para invertir en el Caribe?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Nuestros asesores de inversión están disponibles para guiarle en cada paso del proceso de adquisición.
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
                Descargar Brochure
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
