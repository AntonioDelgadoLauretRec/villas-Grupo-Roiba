import { Metadata } from 'next'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { TrustCenter } from '@/components/sections/TrustCenter'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Nuestro Proceso | The Roiba Method',
  description: 'Descubra las 6 fases de The Roiba Method: desde el análisis de terreno hasta la gestión post-entrega. Transparencia total en cada etapa de su inversión.',
}

export default function ProcesoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-roiba-arena">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
              Metodología
            </span>
            <h1 className="text-display-lg md:text-display-xl font-serif text-roiba-verde mb-6">
              The Roiba Method
            </h1>
            <p className="text-body-lg text-roiba-verde/70 font-light">
              Un proceso estructurado que transforma la incertidumbre de construir en el Caribe 
              en una experiencia predecible y controlada. Seis fases diseñadas para proteger 
              su inversión y garantizar resultados excepcionales.
            </p>
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <ProcessTimeline />
      
      {/* Dashboard Preview */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
                Control en Tiempo Real
              </span>
              <h2 className="text-display-md font-serif text-roiba-verde mb-6">
                Su Portal Privado de Inversor
              </h2>
              <p className="text-body-lg text-roiba-verde/70 font-light mb-8">
                Acceda a toda la información de su proyecto desde cualquier lugar del mundo. 
                Fotos de avance, cronograma financiero, documentación legal y comunicación 
                directa con el equipo de obra.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Reportes semanales con fotos y vídeos',
                  'Cronograma actualizado en tiempo real',
                  'Documentación legal descargable',
                  'Chat directo con el director de obra',
                  'Histórico completo del proyecto',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-body text-roiba-verde/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-roiba-dorado" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <Link href="/contacto">
                <Button variant="primary">
                  <span>Solicitar Demo</span>
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-roiba-verde/5 rounded-lg overflow-hidden border border-roiba-verde/10">
                {/* Dashboard mockup placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-roiba-verde/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-roiba-verde/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="2" />
                        <path d="M3 9h18" />
                        <path d="M9 21V9" />
                      </svg>
                    </div>
                    <p className="text-caption text-roiba-verde/40">
                      Vista previa del dashboard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Center */}
      <TrustCenter />
      
      {/* CTA */}
      <section className="py-24 md:py-32 bg-roiba-arena">
        <div className="container-editorial text-center">
          <h2 className="text-display-md font-serif text-roiba-verde mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-body-lg text-roiba-verde/70 font-light max-w-2xl mx-auto mb-8">
            Solicite su análisis personalizado y descubra cómo The Roiba Method 
            puede hacer realidad su proyecto de inversión en el Caribe.
          </p>
          <Link href="/contacto">
            <Button variant="primary" size="lg">
              <span>Solicitar Análisis</span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
