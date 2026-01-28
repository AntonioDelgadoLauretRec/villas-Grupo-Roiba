import { Metadata } from 'next'
import Link from 'next/link'
import { 
  TrendingUp, Shield, Sun, Plane, Building, Users, 
  BadgeCheck, Palmtree, DollarSign, MapPin, BarChart3, Globe
} from 'lucide-react'
import { Button } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Por Qué Invertir en Punta Cana | Grupo Roiba Villas',
  description: 'Descubra por qué Punta Cana es el destino ideal para inversión inmobiliaria de lujo. Datos de mercado, rentabilidad y beneficios fiscales.',
  openGraph: {
    title: 'Por Qué Invertir en Punta Cana | Grupo Roiba Villas',
    description: 'Descubra por qué Punta Cana es el destino ideal para inversión inmobiliaria de lujo.',
  },
}

const MARKET_STATS = [
  {
    icon: TrendingUp,
    value: '12%',
    label: 'Apreciación Anual',
    description: 'Promedio últimos 5 años en zonas premium',
  },
  {
    icon: BarChart3,
    value: '6-9%',
    label: 'Rentabilidad Neta',
    description: 'Por alquiler vacacional anual',
  },
  {
    icon: Plane,
    value: '8M+',
    label: 'Turistas Anuales',
    description: 'Récord histórico en 2024',
  },
  {
    icon: Building,
    value: '+25%',
    label: 'Desarrollo Inmobiliario',
    description: 'Crecimiento proyectos premium 2023-2025',
  },
]

const INVESTMENT_REASONS = [
  {
    icon: Sun,
    title: 'Clima Excepcional',
    description: 'Más de 300 días de sol al año. Temperatura promedio de 26°C durante todo el año, ideal para alquiler vacacional los 12 meses.',
  },
  {
    icon: Shield,
    title: 'Seguridad Jurídica',
    description: 'República Dominicana ofrece un marco legal sólido para inversores extranjeros, con protección de propiedad y títulos claros.',
  },
  {
    icon: DollarSign,
    title: 'Beneficios Fiscales',
    description: 'Ley CONFOTUR: exención de impuestos de transferencia, ITBIS y patrimonio durante 15 años para proyectos turísticos.',
  },
  {
    icon: Globe,
    title: 'Conectividad Global',
    description: 'Aeropuerto internacional con vuelos directos desde 100+ ciudades de Europa, Norteamérica y Latinoamérica.',
  },
  {
    icon: Users,
    title: 'Mercado en Crecimiento',
    description: 'Demanda sostenida de alojamiento premium. Ocupación hotelera promedio del 80% con tendencia al alza.',
  },
  {
    icon: Palmtree,
    title: 'Estilo de Vida Premium',
    description: 'Campos de golf de clase mundial, marinas, restaurantes gourmet y acceso a las mejores playas del Caribe.',
  },
]

const CONFOTUR_BENEFITS = [
  {
    benefit: 'Exención de Impuesto de Transferencia Inmobiliaria',
    detail: '3% del valor de la propiedad',
    savings: 'Ahorro: $15,000 - $60,000+',
  },
  {
    benefit: 'Exención de ITBIS en Construcción',
    detail: '18% en materiales y servicios',
    savings: 'Incluido en precio final',
  },
  {
    benefit: 'Exención de Impuesto al Patrimonio',
    detail: '1% anual sobre propiedades',
    savings: 'Ahorro continuo por 15 años',
  },
  {
    benefit: 'Exención de Impuesto sobre la Renta',
    detail: 'Sobre ingresos por alquiler',
    savings: 'Durante período CONFOTUR',
  },
]

const ZONES_DATA = [
  {
    name: 'Cap Cana',
    type: 'Ultra Lujo',
    avgPrice: '$1.2M - $5M+',
    roi: '7-9%',
    highlight: 'Marina, golf Jack Nicklaus',
  },
  {
    name: 'Punta Cana Village',
    type: 'Premium',
    avgPrice: '$600K - $1.5M',
    roi: '6-8%',
    highlight: 'Cercanía a playa y aeropuerto',
  },
  {
    name: 'Bávaro',
    type: 'Turístico',
    avgPrice: '$400K - $900K',
    roi: '8-10%',
    highlight: 'Alta demanda de alquiler',
  },
  {
    name: 'Uvero Alto',
    type: 'Emergente',
    avgPrice: '$350K - $700K',
    roi: '7-9%',
    highlight: 'Desarrollo en expansión',
  },
]

const PURCHASE_STEPS = [
  {
    step: 1,
    title: 'Consulta Inicial',
    description: 'Evaluación de sus objetivos de inversión y selección de propiedades acordes.',
    duration: '1-2 días',
  },
  {
    step: 2,
    title: 'Visita Guiada',
    description: 'Tour privado por las propiedades seleccionadas con nuestros asesores.',
    duration: '2-3 días',
  },
  {
    step: 3,
    title: 'Due Diligence',
    description: 'Verificación legal, títulos y condiciones de la propiedad.',
    duration: '7-14 días',
  },
  {
    step: 4,
    title: 'Reserva',
    description: 'Contrato de reserva con depósito del 10% (reembolsable bajo condiciones).',
    duration: '1 día',
  },
  {
    step: 5,
    title: 'Contrato de Compra',
    description: 'Firma de contrato definitivo. Pago del 30% adicional.',
    duration: '15-30 días',
  },
  {
    step: 6,
    title: 'Escrituración',
    description: 'Transferencia de título y pago del balance. Entrega de llaves.',
    duration: '30-45 días',
  },
]

export default function PorQuePuntaCanaPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-oceano via-oceano/95 to-oceano-dark py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-tropical.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-dorado/20 text-dorado rounded-full text-sm font-medium mb-6">
              Inversión Inteligente en el Caribe
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Por Qué Invertir en{' '}
              <span className="text-gradient-gold">Punta Cana</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed mb-8">
              El destino turístico más dinámico del Caribe ofrece oportunidades únicas 
              de inversión inmobiliaria con rentabilidades superiores al 6% anual 
              y beneficios fiscales excepcionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/villas">
                <Button variant="primary" size="lg">
                  Ver Propiedades Disponibles
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Agendar Consulta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 bg-white border-b border-arena">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {MARKET_STATS.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-16 h-16 bg-oceano/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-oceano" />
                  </div>
                  <div className="text-4xl font-bold text-dorado mb-2">{stat.value}</div>
                  <h3 className="font-semibold text-carbon mb-1">{stat.label}</h3>
                  <p className="text-sm text-carbon/60">{stat.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Investment Reasons */}
      <section className="py-16 lg:py-24 bg-arena/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-oceano/10 text-oceano rounded-full text-sm font-medium mb-4">
              Ventajas Competitivas
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-carbon mb-4">
              6 Razones para Invertir en Punta Cana
            </h2>
            <p className="text-carbon/60 max-w-2xl mx-auto">
              Un mercado maduro con fundamentos sólidos que atrae inversores 
              institucionales y particulares de todo el mundo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INVESTMENT_REASONS.map((reason) => {
              const Icon = reason.icon
              return (
                <div
                  key={reason.title}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-oceano to-oceano-dark rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-serif text-xl text-carbon mb-3">{reason.title}</h3>
                  <p className="text-carbon/60 leading-relaxed">{reason.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CONFOTUR Benefits */}
      <section className="py-16 lg:py-24 bg-oceano text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-dorado/20 text-dorado rounded-full text-sm font-medium mb-4">
                Ley CONFOTUR
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl mb-6">
                Beneficios Fiscales Exclusivos
              </h2>
              <p className="text-white/80 leading-relaxed mb-8">
                La Ley de Fomento al Desarrollo Turístico (CONFOTUR) ofrece exenciones 
                fiscales significativas a inversores en proyectos turísticos aprobados, 
                durante un período de hasta 15 años.
              </p>
              <div className="flex items-center gap-3 p-4 bg-white/10 rounded-xl">
                <BadgeCheck className="w-8 h-8 text-dorado flex-shrink-0" />
                <div>
                  <p className="font-semibold">100% de nuestros proyectos</p>
                  <p className="text-sm text-white/70">están aprobados bajo Ley CONFOTUR</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {CONFOTUR_BENEFITS.map((item) => (
                <div
                  key={item.benefit}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-sm"
                >
                  <h3 className="font-semibold mb-1">{item.benefit}</h3>
                  <p className="text-white/70 text-sm mb-2">{item.detail}</p>
                  <span className="inline-block px-3 py-1 bg-dorado/20 text-dorado text-sm rounded-full">
                    {item.savings}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zones Comparison */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-oceano/10 text-oceano rounded-full text-sm font-medium mb-4">
              Análisis de Mercado
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-carbon mb-4">
              Zonas de Inversión en Punta Cana
            </h2>
            <p className="text-carbon/60 max-w-2xl mx-auto">
              Cada zona ofrece un perfil de inversión único. Nuestros asesores 
              le ayudarán a encontrar la opción perfecta para sus objetivos.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-oceano">
                  <th className="text-left py-4 px-4 font-semibold text-carbon">Zona</th>
                  <th className="text-left py-4 px-4 font-semibold text-carbon">Segmento</th>
                  <th className="text-left py-4 px-4 font-semibold text-carbon">Rango Precio</th>
                  <th className="text-left py-4 px-4 font-semibold text-carbon">ROI Esperado</th>
                  <th className="text-left py-4 px-4 font-semibold text-carbon">Destacado</th>
                </tr>
              </thead>
              <tbody>
                {ZONES_DATA.map((zone) => (
                  <tr key={zone.name} className="border-b border-arena hover:bg-arena/20 transition-colors">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-oceano" />
                        <span className="font-medium text-carbon">{zone.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-3 py-1 bg-oceano/10 text-oceano text-sm rounded-full">
                        {zone.type}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-carbon/70">{zone.avgPrice}</td>
                    <td className="py-4 px-4">
                      <span className="text-dorado font-semibold">{zone.roi}</span>
                    </td>
                    <td className="py-4 px-4 text-carbon/60 text-sm">{zone.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-sm text-carbon/50 mt-6">
            * Datos basados en análisis de mercado 2024. La rentabilidad pasada no garantiza resultados futuros.
          </p>
        </div>
      </section>

      {/* Purchase Process */}
      <section className="py-16 lg:py-24 bg-arena/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-oceano/10 text-oceano rounded-full text-sm font-medium mb-4">
              Proceso Transparente
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-carbon mb-4">
              Cómo Funciona la Compra
            </h2>
            <p className="text-carbon/60 max-w-2xl mx-auto">
              Un proceso estructurado y seguro, con acompañamiento legal 
              y asesoría personalizada en cada paso.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-oceano/20 hidden md:block" />
              
              <div className="space-y-8">
                {PURCHASE_STEPS.map((item) => (
                  <div key={item.step} className="flex gap-6">
                    {/* Step number */}
                    <div className="flex-shrink-0 w-12 h-12 bg-oceano rounded-full flex items-center justify-center text-white font-bold text-lg relative z-10">
                      {item.step}
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-md">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <h3 className="font-semibold text-lg text-carbon">{item.title}</h3>
                        <span className="text-sm text-oceano font-medium">{item.duration}</span>
                      </div>
                      <p className="text-carbon/60">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-carbon/60 mb-4">
              Tiempo total estimado: 60-90 días desde la reserva hasta la entrega
            </p>
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                Iniciar Mi Proceso de Inversión
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-oceano via-oceano/95 to-oceano-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl mb-6">
            ¿Listo para Invertir en el Caribe?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Nuestros asesores están disponibles para resolver todas sus dudas 
            y ayudarle a encontrar la propiedad perfecta para sus objetivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/villas">
              <Button variant="primary" size="lg">
                Explorar Propiedades
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Agendar Consulta Gratuita
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
