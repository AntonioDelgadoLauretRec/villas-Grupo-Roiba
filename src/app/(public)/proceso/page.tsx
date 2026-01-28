import { ProcessTimeline } from '@/components/sections'
import { Button } from '@/components/ui'
import Link from 'next/link'

export const metadata = {
  title: 'Nuestro Proceso | Grupo Roiba',
  description: 'Descubre el método Roiba: 6 fases para construir tu villa de lujo en Punta Cana con total transparencia y control.',
}

export default function ProcesoPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luxury opacity-90" />
        <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-roiba-dorado to-transparent" />
        
        <div className="relative z-10 container-wide text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm text-roiba-dorado font-semibold uppercase tracking-wider bg-roiba-dorado/10 rounded-full">
            The Roiba Method
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-roiba-arena mb-6">
            Un proceso diseñado para{' '}
            <span className="text-roiba-dorado">tu tranquilidad</span>
          </h1>
          <p className="text-lg text-roiba-arena/80 max-w-2xl mx-auto">
            6 fases estructuradas que transforman la complejidad de la construcción 
            en el Caribe en una experiencia predecible y transparente.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section bg-roiba-arena">
        <div className="container-wide">
          <ProcessTimeline locale="es" variant="vertical" />
        </div>
      </section>

      {/* Horizontal Variant for Mobile Alternative */}
      <section className="section bg-roiba-arena-light py-16">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl text-roiba-verde">
              Vista rápida del proceso
            </h2>
          </div>
          <ProcessTimeline locale="es" variant="horizontal" />
        </div>
      </section>

      {/* Why This Process */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="text-center mb-12">
            <span className="text-roiba-dorado text-sm font-semibold uppercase tracking-wider">
              Por qué este enfoque
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-roiba-verde mt-3 mb-4">
              Construido desde la experiencia
            </h2>
            <div className="divider" />
          </div>

          <div className="prose prose-lg max-w-none text-roiba-verde/80">
            <p>
              Después de más de 38 años en el sector de la construcción, hemos identificado 
              los principales puntos de fricción que enfrentan los inversores extranjeros 
              al construir en el Caribe: <strong>falta de información</strong>, 
              <strong>costos imprevistos</strong> y <strong>comunicación deficiente</strong>.
            </p>
            <p>
              El Método Roiba nace como respuesta directa a estos problemas. Cada fase 
              está diseñada para eliminar incertidumbre y darte el control que mereces 
              sobre tu inversión.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: 'Presupuesto Cerrado',
                description: 'Sin sorpresas. El precio acordado es el precio final.',
                icon: '💰',
              },
              {
                title: 'Reportes Mensuales',
                description: 'Fotos, videos y cronograma actualizado cada mes.',
                icon: '📊',
              },
              {
                title: 'Trato Directo',
                description: 'Comunicación directa con los fundadores, sin filtros.',
                icon: '🤝',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 bg-roiba-arena-light rounded-sm text-center"
              >
                <span className="text-4xl mb-4 block">{item.icon}</span>
                <h3 className="font-serif text-lg text-roiba-verde mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-roiba-verde/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-roiba-verde">
        <div className="container-narrow text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-roiba-arena mb-6">
            ¿Preparado para empezar?
          </h2>
          <p className="text-roiba-arena/70 max-w-lg mx-auto mb-8">
            Agenda una llamada con nuestro equipo y te guiaremos a través de cada 
            fase adaptada a tu proyecto específico.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                Iniciar Proyecto Personalizado
              </Button>
            </Link>
            <Link href="/coleccion">
              <Button variant="ghost" size="lg">
                Ver Colección de Villas
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
