import { BentoGridSection } from '@/components/sections/BentoGridSection'
import { TrustSignals } from '@/components/sections'
import { Button } from '@/components/ui'
import Link from 'next/link'

export const metadata = {
  title: 'Por Qué Punta Cana | Inversión Inmobiliaria Premium',
  description: 'Descubre por qué Punta Cana es el destino líder para inversión inmobiliaria de lujo en el Caribe. Golf de clase mundial, marinas, aviación privada y rentabilidad comprobada.',
  keywords: [
    'inversión punta cana',
    'real estate caribe',
    'villas lujo dominicana',
    'PGA tour corales',
    'cap cana marina',
    'golf real estate',
  ],
}

export default function PorQuePuntaCanaPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-roiba-verde overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-luxury opacity-95" />
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-roiba-dorado to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/4 h-px bg-gradient-to-r from-roiba-dorado/30 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10 container-wide">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 mb-6 text-sm text-roiba-dorado font-semibold uppercase tracking-wider bg-roiba-dorado/10 rounded-full animate-fade-in">
              Destino de Inversión Premium
            </span>
            
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-roiba-arena mb-6 animate-fade-up">
              El Caribe que{' '}
              <span className="text-roiba-dorado">genera patrimonio</span>
            </h1>
            
            <p className="text-lg md:text-xl text-roiba-arena/80 mb-8 max-w-2xl animate-fade-up animate-delay-100">
              Punta Cana no es solo un destino turístico. Es un ecosistema de inversión 
              maduro con infraestructura de primer mundo, seguridad jurídica y una demanda 
              creciente de propiedades de lujo.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-200">
              <Link href="/contacto">
                <Button variant="primary" size="lg">
                  Explorar Oportunidades
                </Button>
              </Link>
              <Link href="/inversores">
                <Button variant="ghost" size="lg">
                  Ver Datos de Mercado
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-roiba-verde-light py-8 border-t border-roiba-arena/10">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '8M+', label: 'Visitantes/año' },
              { value: '#1', label: 'Destino Caribe' },
              { value: '8-12%', label: 'Plusvalía anual' },
              { value: '365', label: 'Días de sol' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-3xl md:text-4xl text-roiba-dorado-claro mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-roiba-arena/60 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid - The Punta Cana Privileges */}
      <BentoGridSection locale="es" />

      {/* Why Invest Here - Detailed */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div>
              <span className="text-roiba-dorado text-sm font-semibold uppercase tracking-wider">
                Fundamentos de Inversión
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-roiba-oceano mt-3 mb-6">
                ¿Por qué los inversores eligen Punta Cana?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Estabilidad Económica',
                    description: 'República Dominicana: PIB más estable del Caribe con crecimiento promedio del 5% en la última década.',
                  },
                  {
                    title: 'Incentivos Fiscales (Ley Confotur)',
                    description: 'Exención de impuestos sobre la renta y transferencia inmobiliaria durante 15 años en proyectos turísticos calificados.',
                  },
                  {
                    title: 'Demanda Sostenida',
                    description: 'Ocupación hotelera >75%. Déficit de oferta de villas de lujo frente a demanda de alquiler premium.',
                  },
                  {
                    title: 'Conectividad Global',
                    description: 'Aeropuerto internacional con vuelos directos desde 120+ ciudades. Terminal FBO para aviación privada.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-1 h-full bg-roiba-dorado rounded-full" />
                    <div>
                      <h3 className="font-serif text-lg text-roiba-oceano mb-1">
                        {item.title}
                      </h3>
                      <p className="text-roiba-carbon/70 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Visual placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm bg-roiba-verde overflow-hidden">
                <div className="absolute inset-0 bg-gradient-luxury" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-roiba-dorado/20 flex items-center justify-center">
                      <MapIcon className="w-10 h-10 text-roiba-dorado" />
                    </div>
                    <p className="text-roiba-arena/60 text-sm">
                      [Mapa interactivo de zonas de inversión]
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-sm shadow-luxury max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-roiba-dorado/10 flex items-center justify-center">
                    <TrendUpIcon className="w-6 h-6 text-roiba-dorado" />
                  </div>
                  <div>
                    <div className="font-serif text-2xl text-roiba-oceano">+47%</div>
                    <div className="text-xs text-roiba-carbon/60">Apreciación 5 años (Cap Cana)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Zones */}
      <section className="section bg-roiba-arena">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-roiba-oceano mb-4">
              Zonas Premium de Inversión
            </h2>
            <p className="text-roiba-carbon/70 max-w-2xl mx-auto">
              Cada zona ofrece un perfil de inversión diferente. Te ayudamos a 
              identificar la que mejor se adapta a tus objetivos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Cap Cana',
                profile: 'Ultra Premium',
                price: 'Desde $1.2M USD',
                highlights: ['Marina exclusiva', 'Punta Espada Golf', 'Máxima plusvalía'],
                roi: '10-14%',
              },
              {
                name: 'Punta Cana Village',
                profile: 'Premium Consolidado',
                price: 'Desde $600K USD',
                highlights: ['Alta ocupación', 'Zona madura', 'Servicios completos'],
                roi: '8-11%',
              },
              {
                name: 'Bávaro',
                profile: 'Alto Rendimiento',
                price: 'Desde $400K USD',
                highlights: ['Máxima demanda', 'Playa icónica', 'Entrada accesible'],
                roi: '7-10%',
              },
            ].map((zone) => (
              <div
                key={zone.name}
                className="bg-white p-8 rounded-sm shadow-card hover:shadow-luxury transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-serif text-xl text-roiba-oceano">{zone.name}</h3>
                  <span className="px-3 py-1 text-xs font-semibold text-roiba-dorado-oscuro bg-roiba-dorado/10 rounded-full">
                    {zone.profile}
                  </span>
                </div>
                
                <div className="text-2xl font-serif text-roiba-verde mb-4">
                  {zone.price}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {zone.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-roiba-carbon/70">
                      <CheckIcon className="w-4 h-4 text-roiba-dorado" />
                      {h}
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-roiba-arena">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-roiba-carbon/50 uppercase tracking-wider">
                      ROI Proyectado
                    </span>
                    <span className="font-serif text-lg text-roiba-dorado">{zone.roi}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <TrustSignals variant="cards" locale="es" />

      {/* Final CTA */}
      <section className="section bg-roiba-verde">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-roiba-arena mb-6">
            Tu inversión comienza con una conversación
          </h2>
          <p className="text-roiba-arena/70 max-w-lg mx-auto mb-8">
            Agenda una consulta sin compromiso con nuestro equipo. 
            Analizamos tu perfil y te presentamos las oportunidades que mejor se adaptan a ti.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                Agendar Consulta Gratuita
              </Button>
            </Link>
            <Link href="/coleccion">
              <Button variant="secondary" size="lg">
                Ver Modelos de Villas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ===== ICONS ===== */
function MapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>
  )
}

function TrendUpIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M23 6l-9.5 9.5-5-5L1 18" />
      <path d="M17 6h6v6" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}
