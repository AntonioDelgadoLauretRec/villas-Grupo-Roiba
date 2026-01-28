'use client'

import { useSearchParams } from 'next/navigation'
import { ContactForm } from '@/components/sections'
import { TrustSignals } from '@/components/sections'
import { COMPANY } from '@/lib/utils'

export default function ContactoPage() {
  const searchParams = useSearchParams()
  const hasLand = searchParams.get('has_land')
  const situation = searchParams.get('situation')

  // Determine default situation based on URL params
  let defaultSituation: 'has_land' | 'full_investment' | 'info_only' | undefined
  if (hasLand === 'true') {
    defaultSituation = 'has_land'
  } else if (hasLand === 'false') {
    defaultSituation = 'full_investment'
  } else if (situation === 'info_only') {
    defaultSituation = 'info_only'
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luxury opacity-90" />
        <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-roiba-dorado to-transparent" />
        
        <div className="relative z-10 container-wide text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-roiba-arena mb-4">
            Empezar Proyecto
          </h1>
          <p className="text-lg text-roiba-arena/80 max-w-2xl mx-auto">
            Cuéntanos sobre tu situación y objetivos. Un asesor de inversión 
            se pondrá en contacto contigo en las próximas 24 horas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section bg-roiba-arena">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div className="order-2 lg:order-1">
              <ContactForm 
                locale="es" 
                defaultSituation={defaultSituation}
                variant="light"
              />
            </div>

            {/* Info Sidebar */}
            <div className="order-1 lg:order-2 lg:sticky lg:top-32">
              {/* Trust Stats */}
              <div className="bg-roiba-verde p-8 rounded-sm mb-8">
                <h3 className="font-serif text-xl text-roiba-arena mb-6">
                  Por qué confiar en nosotros
                </h3>
                <TrustSignals locale="es" variant="stats" />
              </div>

              {/* Direct Contact */}
              <div className="bg-white p-8 rounded-sm shadow-card">
                <h3 className="font-serif text-xl text-roiba-verde mb-6">
                  Contacto directo
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-roiba-dorado/10 flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-5 h-5 text-roiba-dorado" />
                    </div>
                    <div>
                      <p className="text-sm text-roiba-verde/60">Teléfono</p>
                      <p className="text-roiba-verde font-medium">{COMPANY.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-roiba-dorado/10 flex items-center justify-center flex-shrink-0">
                      <EmailIcon className="w-5 h-5 text-roiba-dorado" />
                    </div>
                    <div>
                      <p className="text-sm text-roiba-verde/60">Email</p>
                      <p className="text-roiba-verde font-medium">{COMPANY.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-roiba-dorado/10 flex items-center justify-center flex-shrink-0">
                      <WhatsAppIcon className="w-5 h-5 text-roiba-dorado" />
                    </div>
                    <div>
                      <p className="text-sm text-roiba-verde/60">WhatsApp</p>
                      <a 
                        href={`https://wa.me/${COMPANY.whatsapp}`}
                        className="text-roiba-dorado hover:text-roiba-dorado-oscuro font-medium"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Hablar con un Arquitecto →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-roiba-dorado/10 flex items-center justify-center flex-shrink-0">
                      <LocationIcon className="w-5 h-5 text-roiba-dorado" />
                    </div>
                    <div>
                      <p className="text-sm text-roiba-verde/60">Ubicación</p>
                      <p className="text-roiba-verde font-medium">{COMPANY.address}</p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="mt-8 pt-6 border-t border-roiba-verde/10">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <p className="text-sm text-roiba-verde/70">
                      Tiempo de respuesta: <strong className="text-roiba-verde">menos de 24 horas</strong>
                    </p>
                  </div>
                </div>
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-roiba-verde/50 mt-6 text-center">
                Tus datos están protegidos. Cumplimos con GDPR y la Ley 172-13 
                de Protección de Datos de República Dominicana.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

/* ===== ICONS ===== */
function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  )
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  )
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
