import { Hero, TrustSignals, VillaGrid } from '@/components/sections'
import { Button } from '@/components/ui'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero locale="es" />

      {/* Trust Signals */}
      <TrustSignals locale="es" variant="cards" />

      {/* Villa Showcase - Limited to 3 */}
      <VillaGrid 
        locale="es" 
        limit={3} 
        showFilters={false}
        columns={3}
      />

      {/* Comparison Section - "Inversión sin Caja Negra" */}
      <section className="section bg-roiba-verde">
        <div className="container-wide">
          <div className="text-center mb-12">
            <span className="text-roiba-dorado text-sm font-semibold uppercase tracking-wider">
              La Diferencia
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-roiba-arena mt-3 mb-4">
              Inversión sin Caja Negra
            </h2>
            <div className="w-16 h-1 bg-roiba-dorado mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Others */}
            <div className="p-8 bg-roiba-verde-light rounded-sm border border-roiba-arena/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <XIcon className="w-5 h-5 text-red-400" />
                </div>
                <h3 className="font-serif text-xl text-roiba-arena">Otros</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Costos ocultos y variaciones frecuentes',
                  'Diseños estándar sin personalización',
                  'Comunicación a través de intermediarios',
                  'Reportes esporádicos sin transparencia',
                  'Comisiones de broker del 5-10%',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-roiba-arena/70">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-red-400/50 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Roiba */}
            <div className="p-8 bg-roiba-dorado/10 rounded-sm border border-roiba-dorado/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-roiba-dorado/20 flex items-center justify-center">
                  <CheckIcon className="w-5 h-5 text-roiba-dorado" />
                </div>
                <h3 className="font-serif text-xl text-roiba-arena">Grupo Roiba</h3>
              </div>
              <ul className="space-y-4">
                {[
                  'Presupuesto cerrado desde el día 1',
                  'Villa 100% a medida según tus necesidades',
                  'Trato directo con fundadores y arquitectos',
                  'Dashboard de obra con reportes mensuales',
                  '0% comisiones de intermediarios',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-roiba-arena">
                    <span className="w-1.5 h-1.5 mt-2 rounded-full bg-roiba-dorado flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/proceso">
              <Button variant="primary" size="lg">
                Ver Nuestro Proceso
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="section bg-roiba-arena">
        <div className="container-narrow">
          <div className="bg-white p-8 md:p-12 rounded-sm shadow-luxury text-center">
            <span className="text-roiba-dorado text-sm font-semibold uppercase tracking-wider">
              Datos de Mercado 2026
            </span>
            <h2 className="font-serif text-2xl md:text-3xl text-roiba-verde mt-3 mb-4">
              Informe de Rentabilidad en Punta Cana
            </h2>
            <p className="text-roiba-verde/70 max-w-lg mx-auto mb-8">
              Descarga nuestro análisis exclusivo con datos de apreciación, 
              rentabilidad de alquiler y proyecciones de mercado para 2026.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contacto?situation=info_only">
                <Button variant="primary" size="lg">
                  Acceder al Dossier de Inversor
                </Button>
              </Link>
            </div>
            <p className="text-xs text-roiba-verde/50 mt-4">
              Gratis · Sin compromiso · Información verificada
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-roiba-verde">
          <div className="absolute inset-0 bg-gradient-verde opacity-90" />
        </div>
        <div className="relative z-10 container-wide text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-roiba-arena mb-6">
            ¿Listo para construir tu legado en el Caribe?
          </h2>
          <p className="text-roiba-arena/70 text-lg max-w-2xl mx-auto mb-10">
            Agenda una llamada sin compromiso con nuestro equipo y descubre 
            cómo podemos hacer realidad tu proyecto de inversión.
          </p>
          <Link href="/contacto">
            <Button variant="primary" size="lg">
              Iniciar Proyecto Personalizado
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}

/* ===== ICONS ===== */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  )
}
