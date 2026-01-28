import { Metadata } from 'next'
import { VillaGrid } from '@/components/sections/VillaGrid'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Colección de Villas | Proyectos Disponibles',
  description: 'Explore nuestra colección de villas de lujo disponibles en Punta Cana y Cap Cana. Diseño personalizado, construcción supervisada, entrega garantizada.',
}

export default function VillasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-roiba-arena">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
              Colección
            </span>
            <h1 className="text-display-lg md:text-display-xl font-serif text-roiba-verde mb-6">
              Proyectos Disponibles
            </h1>
            <p className="text-body-lg text-roiba-verde/70 font-light">
              Cada villa es una comisión única, diseñada para maximizar tanto 
              el confort como el potencial de inversión. Explore nuestras opciones 
              disponibles o consulte por un proyecto completamente personalizado.
            </p>
          </div>
        </div>
      </section>
      
      {/* Filter notice */}
      <section className="py-8 bg-roiba-verde/5">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-caption text-roiba-verde/70">
              Mostrando proyectos con inversión desde $500,000 USD
            </p>
            <div className="flex items-center gap-4">
              <span className="text-caption text-roiba-verde/50">Ordenar por:</span>
              <select className="bg-transparent border-none text-caption text-roiba-verde font-medium focus:outline-none cursor-pointer">
                <option>Más recientes</option>
                <option>Precio: menor a mayor</option>
                <option>Precio: mayor a menor</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Villa Grid */}
      <VillaGrid />
      
      {/* Custom Project CTA */}
      <section className="py-24 md:py-32 bg-roiba-verde text-roiba-arena">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado-light mb-4 block">
                Proyecto a Medida
              </span>
              <h2 className="text-display-md font-serif mb-6">
                ¿No encuentra lo que busca?
              </h2>
              <p className="text-body-lg text-roiba-arena/70 font-light mb-8">
                Diseñamos y construimos villas completamente personalizadas según sus 
                especificaciones exactas. Desde la selección del terreno hasta los 
                acabados finales, su visión guía cada decisión.
              </p>
              <Link href="/contacto">
                <Button 
                  variant="secondary" 
                  className="border-roiba-arena text-roiba-arena hover:bg-roiba-arena hover:text-roiba-verde"
                >
                  <span>Consultar Proyecto Personalizado</span>
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '100%', label: 'Diseño personalizado' },
                { value: '24/7', label: 'Supervisión de obra' },
                { value: '12-18', label: 'Meses de construcción' },
                { value: '∞', label: 'Posibilidades' },
              ].map((stat, idx) => (
                <div key={idx} className="p-6 bg-roiba-arena/5 border border-roiba-arena/10">
                  <p className="text-display-md font-serif text-roiba-dorado-light mb-2">
                    {stat.value}
                  </p>
                  <p className="text-caption text-roiba-arena/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
