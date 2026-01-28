import { Metadata } from 'next'
import Link from 'next/link'
import { 
  Award, Shield, Users, Target, Heart, Building2,
  CheckCircle, Globe, Palmtree, TrendingUp
} from 'lucide-react'
import { Button } from '@/components/ui'

export const metadata: Metadata = {
  title: 'Nosotros | Grupo Roiba Villas',
  description: 'Conozca a Grupo Roiba: más de 15 años desarrollando villas de lujo en Punta Cana. Compromiso, calidad y confianza.',
  openGraph: {
    title: 'Nosotros | Grupo Roiba Villas',
    description: 'Conozca a Grupo Roiba: más de 15 años desarrollando villas de lujo en Punta Cana.',
  },
}

const COMPANY_VALUES = [
  {
    icon: Shield,
    title: 'Integridad',
    description: 'Transparencia total en cada transacción. Sin costes ocultos, sin sorpresas.',
  },
  {
    icon: Award,
    title: 'Excelencia',
    description: 'Estándares de construcción superiores con materiales premium importados.',
  },
  {
    icon: Heart,
    title: 'Compromiso',
    description: 'Relaciones a largo plazo con nuestros clientes, más allá de la venta.',
  },
  {
    icon: Target,
    title: 'Innovación',
    description: 'Diseños arquitectónicos vanguardistas con tecnología sostenible.',
  },
]

const MILESTONES = [
  { year: '2009', event: 'Fundación de Grupo Roiba en República Dominicana' },
  { year: '2012', event: 'Primer desarrollo: Villa Resort Bávaro (50 unidades)' },
  { year: '2015', event: 'Expansión a Cap Cana: Complejo Los Corales' },
  { year: '2018', event: 'Alianza estratégica con inversores europeos' },
  { year: '2021', event: 'Certificación CONFOTUR para todos nuestros proyectos' },
  { year: '2024', event: '+400 villas entregadas, presencia en 4 zonas premium' },
]

const TEAM_MEMBERS = [
  {
    name: 'Ramón Roiba',
    role: 'CEO & Fundador',
    bio: 'Visionario del desarrollo inmobiliario en Punta Cana con 20+ años de experiencia.',
    image: '/images/team/placeholder.jpg',
  },
  {
    name: 'Iván Roiba',
    role: 'Director de Operaciones',
    bio: 'Experto en gestión de proyectos y control de calidad en construcción.',
    image: '/images/team/placeholder.jpg',
  },
  {
    name: 'María García',
    role: 'Directora Comercial',
    bio: 'Especialista en relaciones con inversores internacionales.',
    image: '/images/team/placeholder.jpg',
  },
  {
    name: 'Carlos Méndez',
    role: 'Director de Arquitectura',
    bio: 'Arquitecto premiado con enfoque en diseño tropical sostenible.',
    image: '/images/team/placeholder.jpg',
  },
]

const STATS = [
  { value: '400+', label: 'Villas Entregadas' },
  { value: '15+', label: 'Años de Experiencia' },
  { value: '98%', label: 'Clientes Satisfechos' },
  { value: '4', label: 'Zonas Premium' },
]

export default function NosotrosPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-oceano via-oceano/95 to-oceano-dark py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/images/pattern-tropical.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-dorado/20 text-dorado rounded-full text-sm font-medium mb-6">
              Desde 2009
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Construyendo Sueños en el{' '}
              <span className="text-gradient-gold">Caribe</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Grupo Roiba es sinónimo de desarrollo inmobiliario de lujo en Punta Cana. 
              Más de 15 años creando hogares excepcionales para inversores exigentes.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b border-arena py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-dorado mb-2">
                  {stat.value}
                </div>
                <p className="text-carbon/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-arena/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-oceano/10 text-oceano rounded-full text-sm font-medium mb-4">
                Nuestra Historia
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl text-carbon mb-6">
                De la Visión a la Realidad
              </h2>
              <div className="space-y-4 text-carbon/70 leading-relaxed">
                <p>
                  En 2009, Ramón Roiba identificó una oportunidad única: desarrollar 
                  viviendas de lujo que combinaran la belleza natural del Caribe con 
                  los estándares de construcción europeos.
                </p>
                <p>
                  Lo que comenzó como un pequeño proyecto familiar ha crecido hasta 
                  convertirse en uno de los desarrolladores más respetados de Punta Cana, 
                  con más de 400 villas entregadas a inversores de todo el mundo.
                </p>
                <p>
                  Hoy, Grupo Roiba continúa su misión de crear comunidades residenciales 
                  excepcionales, donde cada detalle refleja nuestro compromiso con la 
                  excelencia y la satisfacción del cliente.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-oceano/10 rounded-2xl flex items-center justify-center">
                <Building2 className="w-24 h-24 text-oceano/30" />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-dorado/20 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-dorado" />
                  </div>
                  <span className="font-semibold text-carbon">Certificados</span>
                </div>
                <p className="text-sm text-carbon/60">
                  Todos nuestros proyectos cuentan con certificación CONFOTUR 
                  y garantía de construcción de 10 años.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-oceano/10 text-oceano rounded-full text-sm font-medium mb-4">
              Trayectoria
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-carbon">
              Hitos de Nuestro Crecimiento
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-dorado/30 transform md:-translate-x-1/2" />
              
              <div className="space-y-8">
                {MILESTONES.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-center gap-6 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Year */}
                    <div className="flex-shrink-0 w-24 text-right md:w-1/2 md:text-center">
                      <span className="inline-block px-4 py-2 bg-dorado text-white font-bold rounded-lg">
                        {milestone.year}
                      </span>
                    </div>
                    
                    {/* Dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-oceano rounded-full transform md:-translate-x-1/2 z-10" />
                    
                    {/* Content */}
                    <div className="flex-1 md:w-1/2">
                      <div className="bg-arena/30 rounded-xl p-4 ml-6 md:ml-0">
                        <p className="text-carbon">{milestone.event}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-oceano text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-dorado/20 text-dorado rounded-full text-sm font-medium mb-4">
              Lo Que Nos Define
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl">
              Nuestros Valores
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COMPANY_VALUES.map((value) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-dorado" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24 bg-arena/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-oceano/10 text-oceano rounded-full text-sm font-medium mb-4">
              El Equipo
            </span>
            <h2 className="font-serif text-3xl lg:text-4xl text-carbon mb-4">
              Liderazgo Experimentado
            </h2>
            <p className="text-carbon/60 max-w-2xl mx-auto">
              Un equipo multidisciplinario comprometido con la excelencia 
              y la satisfacción de nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                {/* Photo Placeholder */}
                <div className="aspect-square bg-oceano/10 flex items-center justify-center">
                  <Users className="w-16 h-16 text-oceano/30" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-carbon">{member.name}</h3>
                  <p className="text-dorado text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-carbon/60 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-oceano/10 text-oceano rounded-full text-sm font-medium mb-4">
                Diferenciadores
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl text-carbon mb-6">
                Por Qué Elegir Grupo Roiba
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Globe,
                    title: 'Alcance Internacional',
                    text: 'Oficinas en Miami, Madrid, Frankfurt y Londres para atender a inversores globales.',
                  },
                  {
                    icon: Shield,
                    title: 'Garantía Total',
                    text: '10 años de garantía estructural y servicio post-venta personalizado.',
                  },
                  {
                    icon: TrendingUp,
                    title: 'Rentabilidad Probada',
                    text: 'Historial de apreciación del 8-12% anual en nuestras propiedades.',
                  },
                  {
                    icon: Palmtree,
                    title: 'Ubicaciones Premium',
                    text: 'Solo desarrollamos en las zonas más exclusivas de Punta Cana.',
                  },
                ].map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-oceano/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-oceano" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-carbon mb-1">{item.title}</h3>
                        <p className="text-carbon/60 text-sm">{item.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-arena rounded-2xl flex items-center justify-center">
                <Award className="w-24 h-24 text-dorado/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-oceano via-oceano/95 to-oceano-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl mb-6">
            ¿Listo para Conocernos?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Descubra en persona por qué cientos de inversores han confiado 
            en Grupo Roiba para su inversión en el Caribe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/villas">
              <Button variant="primary" size="lg">
                Ver Nuestras Villas
              </Button>
            </Link>
            <Link href="/contacto">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                Agendar Visita
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
