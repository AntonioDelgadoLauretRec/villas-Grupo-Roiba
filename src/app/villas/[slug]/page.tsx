import { getVillaBySlug } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const revalidate = 3600

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const villa = await getVillaBySlug(params.slug)
  if (!villa) return { title: 'Villa no encontrada' }

  return {
    title: villa.seo_title || `${villa.title} | Grupo Roiba`,
    description: villa.seo_description || villa.short_description,
    alternates: { canonical: `https://gruporoiba.com/villas/${villa.slug}` },
    openGraph: {
      title: villa.seo_title || villa.title,
      description: villa.seo_description || villa.short_description,
      images: villa.main_image ? [{ url: villa.main_image }] : [],
    },
  }
}

// Dynamic paths are generated on-demand with ISR (cookies() not available at build time)
export const dynamicParams = true

export default async function VillaDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const villa = await getVillaBySlug(params.slug)
  if (!villa) notFound()

  const allImages = [
    ...(villa.main_image ? [villa.main_image] : []),
    ...(villa.images?.map((img) => img.image_url) || []),
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-roiba-verde py-16 md:py-20 px-6">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            href="/villas"
            className="text-roiba-dorado/70 text-caption hover:text-roiba-dorado transition-colors"
          >
            &larr; Volver a la colección
          </Link>
          <h1 className="text-display-lg md:text-display-xl font-serif text-white mt-6 mb-4">
            {villa.title}
          </h1>
          <p className="text-roiba-dorado text-body-lg">{villa.location}</p>
          {villa.year && (
            <p className="text-white/50 text-caption mt-2">{villa.year}</p>
          )}
        </div>
      </section>

      {/* Main image */}
      {villa.main_image && (
        <section className="relative aspect-[16/9] md:aspect-[21/9] max-h-[600px] overflow-hidden">
          <Image
            src={villa.main_image}
            alt={villa.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </section>
      )}

      {/* Content */}
      <section className="py-14 md:py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Specs bar */}
          {(villa.bedrooms > 0 || villa.area_sqm > 0 || villa.price_usd > 0) && (
            <div className="flex flex-wrap items-center gap-6 mb-10 pb-8 border-b border-roiba-arena-dark">
              {villa.bedrooms > 0 && (
                <div>
                  <p className="text-2xl font-serif text-roiba-verde">{villa.bedrooms}</p>
                  <p className="text-caption text-roiba-verde/50">Habitaciones</p>
                </div>
              )}
              {villa.bathrooms > 0 && (
                <div>
                  <p className="text-2xl font-serif text-roiba-verde">{villa.bathrooms}</p>
                  <p className="text-caption text-roiba-verde/50">Baños</p>
                </div>
              )}
              {villa.area_sqm > 0 && (
                <div>
                  <p className="text-2xl font-serif text-roiba-verde">{villa.area_sqm} m²</p>
                  <p className="text-caption text-roiba-verde/50">Superficie</p>
                </div>
              )}
              {villa.price_usd > 0 && (
                <div className="ml-auto">
                  <p className="text-2xl font-serif text-roiba-dorado">
                    ${villa.price_usd.toLocaleString('en-US')}
                  </p>
                  <p className="text-caption text-roiba-verde/50">USD</p>
                </div>
              )}
            </div>
          )}

          {/* Description */}
          {villa.short_description && (
            <p className="text-subheading text-roiba-verde/70 font-light mb-8 leading-relaxed">
              {villa.short_description}
            </p>
          )}
          {villa.long_description && (
            <div className="prose prose-lg max-w-none text-roiba-verde/80 leading-relaxed whitespace-pre-line">
              {villa.long_description}
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      {allImages.length > 1 && (
        <section className="py-14 md:py-20 px-6 bg-roiba-arena-light">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-display-md font-serif text-roiba-verde mb-10 text-center">
              Galería
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allImages.map((url, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden bg-slate-100 ${
                    i === 0 ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <Image
                    src={url}
                    alt={`${villa.title} - Imagen ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes={i === 0 ? '100vw' : '50vw'}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative py-14 md:py-20 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-display-md font-serif text-white mb-6">
            ¿Interesado en este proyecto?
          </h2>
          <p className="text-white/60 text-body-lg mb-10 leading-relaxed">
            Nuestro equipo le proporcionará toda la información que necesite.
          </p>
          <Link href="/contacto" className="btn-roiba-primary px-10 inline-block">
            <span>Solicitar información</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
