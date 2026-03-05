import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getPublishedVillas } from '@/lib/data'

export const revalidate = 3600 // ISR: revalidate every hour

export const metadata: Metadata = {
  title: 'Proyectos | Grupo Roiba',
  description: 'Proyectos en los que participamos como constructores, directores técnicos o supervisores en Punta Cana. Cada proyecto responde a un briefing único del cliente.',
  alternates: { canonical: 'https://gruporoiba.com/villas' },
}

export default async function VillasPage() {
  const villas = await getPublishedVillas()

  return (
    <main>
      {/* Hero */}
      <section className="relative bg-roiba-verde py-24 md:py-32 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85&fit=crop"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-roiba-verde/75" />
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            Proyectos
          </p>
          <h1 className="text-display-lg md:text-display-xl font-serif text-white mb-6">
            Proyectos en Desarrollo
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
          <p className="text-body-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Mostramos proyectos en los que participamos como constructores, directores
            técnicos o supervisores. Cada proyecto responde a un briefing único del cliente.
          </p>
        </div>
      </section>

      {/* Villa Grid — Server-rendered from Supabase */}
      <section className="py-16 md:py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          {villas.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-roiba-verde/60 text-body-lg">
                Próximamente publicaremos nuestros proyectos.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {villas.map((villa) => (
                <Link
                  key={villa.id}
                  href={`/villas/${villa.slug}`}
                  className="group block"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-roiba-arena-light mb-4">
                    {villa.main_image ? (
                      <Image
                        src={villa.main_image}
                        alt={villa.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-roiba-verde/20">
                        <svg className="w-16 h-16" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      </div>
                    )}
                    {villa.featured && (
                      <span className="absolute top-3 left-3 px-2.5 py-1 bg-roiba-dorado text-roiba-verde text-micro uppercase tracking-wider font-medium">
                        Destacada
                      </span>
                    )}
                  </div>

                  {/* Info */}
                  <div>
                    <h3 className="text-heading font-serif text-roiba-verde group-hover:text-roiba-verde-light transition-colors">
                      {villa.title}
                    </h3>
                    <p className="text-caption text-roiba-dorado mt-1">{villa.location}</p>
                    {villa.short_description && (
                      <p className="text-body text-roiba-verde/60 mt-2 line-clamp-2">
                        {villa.short_description}
                      </p>
                    )}
                    {(villa.bedrooms > 0 || villa.area_sqm > 0) && (
                      <div className="flex items-center gap-4 mt-3 text-caption text-roiba-verde/50">
                        {villa.bedrooms > 0 && <span>{villa.bedrooms} hab.</span>}
                        {villa.bathrooms > 0 && <span>{villa.bathrooms} baños</span>}
                        {villa.area_sqm > 0 && <span>{villa.area_sqm} m²</span>}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14 md:py-20 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            ¿Su proyecto podría estar aquí?
          </p>
          <h2 className="text-display-md font-serif text-white mb-6">
            Podemos desarrollar algo similar
          </h2>
          <p className="text-white/60 text-body-lg mb-12 leading-relaxed">
            Si tiene terreno o proyecto en fase inicial, podemos adaptarlo a su ubicación y presupuesto.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-roiba-dorado text-roiba-verde font-semibold hover:bg-roiba-dorado-light transition-all duration-300 text-micro uppercase tracking-widest"
          >
            Hablar sobre mi proyecto
          </Link>
        </div>
      </section>
    </main>
  )
}
