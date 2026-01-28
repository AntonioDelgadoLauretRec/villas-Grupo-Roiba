import { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle, Building2 } from 'lucide-react'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto | Grupo Roiba Villas',
  description: 'Contáctenos para invertir en villas de lujo en Punta Cana. Asesoramiento personalizado para inversores de alto patrimonio.',
  openGraph: {
    title: 'Contacto | Grupo Roiba Villas',
    description: 'Contáctenos para invertir en villas de lujo en Punta Cana.',
  },
}

const CONTACT_INFO = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+1 (809) 555-0123',
    href: 'tel:+18095550123',
    description: 'Línea directa de inversiones',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+1 (809) 555-0124',
    href: 'https://wa.me/18095550124',
    description: 'Respuesta en menos de 2 horas',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'inversiones@gruporoiba.com',
    href: 'mailto:inversiones@gruporoiba.com',
    description: 'Para consultas detalladas',
  },
  {
    icon: MapPin,
    label: 'Oficina Principal',
    value: 'Punta Cana Village, Cap Cana',
    href: 'https://maps.google.com/?q=Cap+Cana+Punta+Cana',
    description: 'República Dominicana',
  },
]

const OFFICE_HOURS = [
  { day: 'Lunes - Viernes', hours: '9:00 AM - 6:00 PM' },
  { day: 'Sábado', hours: '10:00 AM - 2:00 PM' },
  { day: 'Domingo', hours: 'Cita previa' },
]

const FAQ_ITEMS = [
  {
    question: '¿Cuál es la inversión mínima requerida?',
    answer: 'Nuestras villas están diseñadas para inversores con capacidad desde $500,000 USD. Ofrecemos opciones de financiamiento flexibles.',
  },
  {
    question: '¿Cuánto tiempo tarda el proceso de compra?',
    answer: 'El proceso completo, desde la reserva hasta la escrituración, toma aproximadamente 60-90 días, dependiendo de la modalidad de pago.',
  },
  {
    question: '¿Puedo visitar las propiedades antes de comprar?',
    answer: 'Absolutamente. Organizamos tours privados con recogida en aeropuerto, alojamiento cortesía y visita guiada a todas las propiedades de interés.',
  },
  {
    question: '¿Qué rentabilidad puedo esperar?',
    answer: 'Nuestras villas en zonas premium de Punta Cana generan entre 6% y 9% de rentabilidad anual neta por alquiler vacacional.',
  },
  {
    question: '¿Ofrecen gestión de alquileres?',
    answer: 'Sí, contamos con un servicio integral de property management que incluye mantenimiento, limpieza, marketing y gestión de reservas.',
  },
]

export default function ContactoPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-oceano via-oceano/95 to-oceano-dark py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('/images/pattern-tropical.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-dorado/20 text-dorado rounded-full text-sm font-medium mb-6">
              Estamos aquí para ayudarle
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
              Contáctenos
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Nuestro equipo de asesores de inversión está listo para guiarle 
              en su camino hacia la propiedad perfecta en el Caribe.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-arena/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <h2 className="font-serif text-2xl lg:text-3xl text-carbon mb-2">
                  Solicite Información
                </h2>
                <p className="text-carbon/60 mb-8">
                  Complete el formulario y un asesor le contactará en menos de 24 horas.
                </p>
                <ContactForm sourceContext="pagina-contacto" />
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2 space-y-8">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {CONTACT_INFO.map((info) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
                    >
                      <div className="w-12 h-12 bg-oceano/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-oceano/20 transition-colors">
                        <Icon className="w-6 h-6 text-oceano" />
                      </div>
                      <h3 className="font-semibold text-carbon mb-1">{info.label}</h3>
                      <p className="text-oceano font-medium mb-1">{info.value}</p>
                      <p className="text-sm text-carbon/50">{info.description}</p>
                    </a>
                  )
                })}
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-dorado/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-dorado" />
                  </div>
                  <h3 className="font-semibold text-carbon">Horario de Atención</h3>
                </div>
                <div className="space-y-3">
                  {OFFICE_HOURS.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center">
                      <span className="text-carbon/70">{schedule.day}</span>
                      <span className="font-medium text-carbon">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-carbon/50 mt-4 pt-4 border-t border-arena">
                  * Horario Eastern Standard Time (EST/UTC-4)
                </p>
              </div>

              {/* International Offices */}
              <div className="bg-gradient-to-br from-oceano to-oceano-dark rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold">Oficinas Internacionales</h3>
                </div>
                <p className="text-white/80 text-sm mb-4">
                  Contamos con representantes en las principales ciudades europeas y americanas.
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-white/70">🇪🇸 Madrid</span>
                  <span className="text-white/70">🇺🇸 Miami</span>
                  <span className="text-white/70">🇩🇪 Frankfurt</span>
                  <span className="text-white/70">🇬🇧 Londres</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] bg-arena/50 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-oceano/30 mx-auto mb-4" />
            <p className="text-carbon/50">
              Mapa interactivo
              <br />
              <span className="text-sm">(Integración Google Maps pendiente)</span>
            </p>
          </div>
        </div>
        {/* TODO: Integrar Google Maps con marcadores de oficinas y propiedades */}
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-oceano/10 text-oceano rounded-full text-sm font-medium mb-4">
                Resolvemos sus dudas
              </span>
              <h2 className="font-serif text-3xl lg:text-4xl text-carbon">
                Preguntas Frecuentes
              </h2>
            </div>

            <div className="space-y-4">
              {FAQ_ITEMS.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-arena/30 rounded-xl overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-arena/50 transition-colors">
                    <h3 className="font-medium text-carbon pr-4">{faq.question}</h3>
                    <span className="flex-shrink-0 w-8 h-8 bg-oceano/10 rounded-full flex items-center justify-center group-open:bg-oceano group-open:text-white transition-colors">
                      <svg
                        className="w-4 h-4 transform group-open:rotate-180 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-carbon/70 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            <div className="text-center mt-12 pt-8 border-t border-arena">
              <p className="text-carbon/60 mb-4">
                ¿Tiene más preguntas? Estamos aquí para ayudarle.
              </p>
              <a
                href="https://wa.me/18095550124"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#20BD5A] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chatear por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-oceano text-white">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-dorado mb-2">400+</div>
              <p className="text-white/70">Villas Desarrolladas</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-dorado mb-2">15+</div>
              <p className="text-white/70">Años de Experiencia</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-dorado mb-2">98%</div>
              <p className="text-white/70">Clientes Satisfechos</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-dorado mb-2">8.5%</div>
              <p className="text-white/70">Rentabilidad Promedio</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
