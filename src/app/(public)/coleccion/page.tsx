import { VillaGrid } from '@/components/sections'
import { Button } from '@/components/ui'
import Link from 'next/link'

export const metadata = {
  title: 'Colección de Villas | Grupo Roiba',
  description: 'Explora nuestra colección exclusiva de villas de lujo en Punta Cana. Diseños personalizados desde $500,000 USD.',
}

export default function ColeccionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-gradient-luxury opacity-90" />
        <div className="absolute top-0 right-0 w-1/3 h-1 bg-gradient-to-l from-roiba-dorado to-transparent" />
        
        <div className="relative z-10 container-wide text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm text-roiba-dorado font-semibold uppercase tracking-wider bg-roiba-dorado/10 rounded-full">
            Desde $500,000 USD
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-roiba-arena mb-6">
            Colección Exclusiva
          </h1>
          <p className="text-lg text-roiba-arena/80 max-w-2xl mx-auto">
            Villas diseñadas para el inversor exigente. Cada proyecto es único, 
            adaptado al terreno y a tus objetivos.
          </p>
        </div>
      </section>

      {/* Villa Grid */}
      <VillaGrid 
        locale="es" 
        showFilters={true}
        columns={3}
      />

      {/* Custom Project CTA */}
      <section className="section bg-white">
        <div className="container-narrow">
          <div className="bg-roiba-verde p-8 md:p-12 rounded-sm text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-roiba-arena mb-4">
              ¿No encuentras lo que buscas?
            </h2>
            <p className="text-roiba-arena/70 max-w-lg mx-auto mb-8">
              Diseñamos villas 100% a medida. Cuéntanos tu visión y 
              la haremos realidad con nuestro equipo de arquitectos.
            </p>
            <Link href="/contacto">
              <Button variant="primary" size="lg">
                Diseñar Villa Personalizada
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-roiba-arena py-6">
        <div className="container-wide">
          <p className="text-center text-xs text-roiba-verde/50 max-w-3xl mx-auto">
            <strong>Nota:</strong> Las imágenes mostradas son visualizaciones conceptuales 
            generadas mediante Inteligencia Artificial con fines ilustrativos. Los acabados 
            finales, paisajismo y entorno pueden variar según el proyecto ejecutivo y la 
            ubicación real de cada villa.
          </p>
        </div>
      </div>
    </>
  )
}
