import { Hero } from '@/components/sections/Hero'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { VillaGrid } from '@/components/sections/VillaGrid'
import { TrustCenter } from '@/components/sections/TrustCenter'
import { WhyPuntaCana } from '@/components/sections/WhyPuntaCana'
import { ContactForm } from '@/components/sections/ContactForm'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />
      
      {/* Intro section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
                Nuestra Filosofía
              </span>
              <h2 className="text-display-md font-serif text-roiba-verde mb-6">
                Construcción Boutique.<br />
                Control Total.
              </h2>
              <p className="text-body-lg text-roiba-verde/70 font-light mb-8 leading-relaxed">
                Grupo Roiba nace de una premisa simple: la inversión inmobiliaria en el Caribe 
                no debería ser una apuesta. Cada proyecto que desarrollamos es una colaboración 
                directa entre nuestro equipo y el inversor, eliminando intermediarios y garantizando 
                transparencia absoluta en cada fase del proceso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/proceso">
                  <Button variant="primary">
                    <span>Conocer Proceso</span>
                  </Button>
                </Link>
                <Link href="/nosotros">
                  <Button variant="text">
                    <span>Sobre Nosotros</span>
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-roiba-verde/5 relative">
                {/* Placeholder for image */}
                <div className="absolute inset-0 flex items-center justify-center text-roiba-verde/20">
                  <span className="text-caption">Imagen arquitectónica</span>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-2 border-roiba-dorado/30 -z-10" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Process Timeline */}
      <ProcessTimeline />
      
      {/* Villa Grid */}
      <VillaGrid />
      
      {/* Why Punta Cana */}
      <WhyPuntaCana />
      
      {/* Trust Center */}
      <TrustCenter />
      
      {/* Contact CTA Section */}
      <section className="py-24 md:py-32 bg-roiba-arena">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
                Primer Paso
              </span>
              <h2 className="text-display-md font-serif text-roiba-verde mb-6">
                Solicite su Análisis Personalizado
              </h2>
              <p className="text-body-lg text-roiba-verde/70 font-light mb-8">
                Complete el formulario y nuestro equipo preparará un informe inicial 
                adaptado a sus objetivos de inversión. Sin compromiso.
              </p>
              
              <div className="space-y-6 mb-8">
                {[
                  'Análisis de viabilidad según su presupuesto',
                  'Opciones de terreno disponibles',
                  'Proyección de rentabilidad personalizada',
                  'Estructura fiscal óptima (Confotur)',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-6 h-6 flex-shrink-0 rounded-full bg-roiba-verde/10 flex items-center justify-center">
                      <svg className="w-3 h-3 text-roiba-dorado" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-body text-roiba-verde/80">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-white border-l-2 border-roiba-dorado">
                <p className="text-caption text-roiba-verde/60 mb-2">
                  Tiempo de respuesta
                </p>
                <p className="text-subheading font-serif text-roiba-verde">
                  24-48 horas hábiles
                </p>
              </div>
            </div>
            
            <div className="bg-white p-8 md:p-10 shadow-sm">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
