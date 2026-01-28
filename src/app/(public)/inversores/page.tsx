import { Button } from '@/components/ui'
import Link from 'next/link'

export const metadata = {
  title: 'Centro de Inversores | Grupo Roiba',
  description: 'Marco legal, datos de mercado y toda la información que necesitas para invertir con confianza en Punta Cana.',
}

export default function InversoresPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luxury opacity-90" />
        <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-roiba-dorado to-transparent" />
        
        <div className="relative z-10 container-wide text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm text-roiba-dorado font-semibold uppercase tracking-wider bg-roiba-dorado/10 rounded-full">
            Centro de Confianza
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-roiba-arena mb-6">
            Información para el{' '}
            <span className="text-roiba-dorado">inversor exigente</span>
          </h1>
          <p className="text-lg text-roiba-arena/80 max-w-2xl mx-auto">
            Transparencia total: marco legal, datos de mercado verificados y 
            todo lo que necesitas para tomar una decisión informada.
          </p>
        </div>
      </section>

      {/* Marco Legal Section */}
      <section className="section bg-roiba-arena">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-roiba-dorado text-sm font-semibold uppercase tracking-wider">
              Transparencia Radical
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-roiba-verde mt-3 mb-4">
              Marco Legal en República Dominicana
            </h2>
            <div className="divider" />
            <p className="text-roiba-verde/70 max-w-2xl mx-auto mt-6">
              Conocer el entorno legal es fundamental. Te explicamos las leyes clave 
              que protegen tu inversión inmobiliaria en el país.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Confotur */}
            <div className="bg-white p-8 rounded-sm shadow-card">
              <div className="w-14 h-14 mb-6 rounded-full bg-roiba-dorado/10 flex items-center justify-center">
                <TaxIcon className="w-7 h-7 text-roiba-dorado" />
              </div>
              <h3 className="font-serif text-xl text-roiba-verde mb-3">
                Ley Confotur (158-01)
              </h3>
              <p className="text-roiba-verde/70 text-sm leading-relaxed mb-4">
                Beneficios fiscales para proyectos turísticos: exención de impuestos 
                sobre la renta, transferencia inmobiliaria y otros durante 15 años.
              </p>
              <div className="p-4 bg-roiba-arena rounded-sm">
                <p className="text-xs text-roiba-verde/60 italic">
                  <strong>Nota importante:</strong> Analizamos la elegibilidad de tu proyecto. 
                  Aplica generalmente a desarrollos grandes; validamos casos individuales 
                  bajo normativa vigente.
                </p>
              </div>
            </div>

            {/* AML */}
            <div className="bg-white p-8 rounded-sm shadow-card">
              <div className="w-14 h-14 mb-6 rounded-full bg-roiba-dorado/10 flex items-center justify-center">
                <ShieldIcon className="w-7 h-7 text-roiba-dorado" />
              </div>
              <h3 className="font-serif text-xl text-roiba-verde mb-3">
                Ley AML (155-17)
              </h3>
              <p className="text-roiba-verde/70 text-sm leading-relaxed mb-4">
                Prevención de lavado de activos. Cumplimiento estricto que protege 
                tanto al inversor como al desarrollador.
              </p>
              <div className="p-4 bg-roiba-arena rounded-sm">
                <p className="text-xs text-roiba-verde/60 italic">
                  <strong>Nuestro compromiso:</strong> Requerimos documentación de origen 
                  de fondos (KYC) para proteger tu inversión y la nuestra. Es garantía 
                  de seriedad para ambas partes.
                </p>
              </div>
            </div>

            {/* Registro */}
            <div className="bg-white p-8 rounded-sm shadow-card">
              <div className="w-14 h-14 mb-6 rounded-full bg-roiba-dorado/10 flex items-center justify-center">
                <DocumentIcon className="w-7 h-7 text-roiba-dorado" />
              </div>
              <h3 className="font-serif text-xl text-roiba-verde mb-3">
                Registro Inmobiliario (108-05)
              </h3>
              <p className="text-roiba-verde/70 text-sm leading-relaxed mb-4">
                Sistema de registro de propiedad con validez legal plena y 
                protección de derechos del comprador.
              </p>
              <div className="p-4 bg-roiba-arena rounded-sm">
                <p className="text-xs text-roiba-verde/60 italic">
                  <strong>Nuestra garantía:</strong> Solo trabajamos con títulos deslindados 
                  y libres de cargas, verificados antes de cualquier transacción.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Data Section */}
      <section className="section bg-roiba-verde">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="text-roiba-dorado text-sm font-semibold uppercase tracking-wider">
              Datos de Mercado 2026
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-roiba-arena mt-3 mb-4">
              KPIs del mercado inmobiliario
            </h2>
            <div className="w-16 h-1 bg-roiba-dorado mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Plusvalía */}
            <div className="bg-roiba-verde-light p-8 rounded-sm border border-roiba-arena/10 text-center">
              <div className="text-5xl font-bold text-roiba-dorado mb-2">
                8-12%
              </div>
              <p className="text-roiba-arena font-medium mb-2">
                Plusvalía Anual Estimada
              </p>
              <p className="text-roiba-arena/60 text-sm">
                En zonas prime (Cap Cana, Punta Cana Village)
              </p>
            </div>

            {/* ROI */}
            <div className="bg-roiba-verde-light p-8 rounded-sm border border-roiba-arena/10 text-center">
              <div className="text-5xl font-bold text-roiba-dorado mb-2">
                6-10%
              </div>
              <p className="text-roiba-arena font-medium mb-2">
                ROI Neto Proyectado
              </p>
              <p className="text-roiba-arena/60 text-sm">
                Rentabilidad por alquiler vacacional
              </p>
            </div>

            {/* Ocupación */}
            <div className="bg-roiba-verde-light p-8 rounded-sm border border-roiba-arena/10 text-center">
              <div className="text-5xl font-bold text-roiba-dorado mb-2">
                65-75%
              </div>
              <p className="text-roiba-arena font-medium mb-2">
                Ocupación Media Anual
              </p>
              <p className="text-roiba-arena/60 text-sm">
                En propiedades de lujo gestionadas
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-roiba-arena/50 text-xs mb-8">
              * Datos basados en análisis de mercado interno y fuentes del sector. 
              Rendimientos pasados no garantizan resultados futuros.
            </p>
            <Link href="/contacto?situation=info_only">
              <Button variant="primary" size="lg">
                Descargar Informe Completo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Invest Section */}
      <section className="section bg-roiba-arena">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-roiba-verde mb-4">
              ¿Por qué invertir en Punta Cana?
            </h2>
            <div className="divider" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Turismo en crecimiento',
                description: 'Más de 8 millones de visitantes anuales y proyección de crecimiento sostenido.',
                icon: '✈️',
              },
              {
                title: 'Estabilidad económica',
                description: 'República Dominicana: economía más estable del Caribe con crecimiento constante.',
                icon: '📈',
              },
              {
                title: 'Conectividad internacional',
                description: 'Aeropuerto internacional con vuelos directos desde Europa, USA y Latinoamérica.',
                icon: '🌎',
              },
              {
                title: 'Marco legal favorable',
                description: 'Leyes diseñadas para proteger y atraer la inversión extranjera.',
                icon: '⚖️',
              },
              {
                title: 'Demanda creciente',
                description: 'Déficit de oferta de villas de lujo frente a demanda de alquiler premium.',
                icon: '🏠',
              },
              {
                title: 'Calidad de vida',
                description: 'Clima excepcional todo el año, seguridad y servicios de primer nivel.',
                icon: '☀️',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 bg-white rounded-sm shadow-card"
              >
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <h3 className="font-serif text-lg text-roiba-verde mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-roiba-verde/70">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-roiba-verde mb-6">
            ¿Listo para dar el siguiente paso?
          </h2>
          <p className="text-roiba-verde/70 max-w-lg mx-auto mb-8">
            Agenda una consulta sin compromiso con nuestro equipo de inversiones 
            y resuelve todas tus dudas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                Solicitar Asesoría de Inversión
              </Button>
            </Link>
            <Link href="/coleccion">
              <Button variant="secondary" size="lg">
                Explorar Modelos de Villas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

/* ===== ICONS ===== */
function TaxIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M9 14l6-6" />
      <circle cx="9.5" cy="8.5" r="1.5" />
      <circle cx="14.5" cy="13.5" r="1.5" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function DocumentIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M16 13H8M16 17H8M10 9H8" />
    </svg>
  )
}
