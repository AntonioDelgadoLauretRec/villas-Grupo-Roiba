'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'

interface ArticleData {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  content: string
}

const TEXT = {
  es: {
    back: 'Volver al blog',
    cta: 'Hablemos de su proyecto',
    ctaButton: 'Solicitar información',
    notFound: 'Artículo no encontrado',
    notFoundDesc: 'El artículo que busca no existe o ha sido retirado.',
  },
  en: {
    back: 'Back to blog',
    cta: 'Let\'s talk about your project',
    ctaButton: 'Request information',
    notFound: 'Article not found',
    notFoundDesc: 'The article you are looking for does not exist or has been removed.',
  },
}

// Contextual images to enrich article bodies
const ARTICLE_IMAGES: Record<string, { src: string; alt: { es: string; en: string } }[]> = {
  'por-que-invertir-punta-cana-2025': [
    { src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&q=80&fit=crop', alt: { es: 'Playa de Punta Cana', en: 'Punta Cana beach' } },
    { src: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80&fit=crop', alt: { es: 'Inversión inmobiliaria', en: 'Real estate investment' } },
  ],
  'guia-legal-comprar-propiedad-republica-dominicana': [
    { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80&fit=crop', alt: { es: 'Documentación legal', en: 'Legal documentation' } },
    { src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=900&q=80&fit=crop', alt: { es: 'Acuerdo de compraventa', en: 'Purchase agreement' } },
  ],
  'proceso-construccion-villa-lujo-caribe': [
    { src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80&fit=crop', alt: { es: 'Construcción en el Caribe', en: 'Construction in the Caribbean' } },
    { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80&fit=crop', alt: { es: 'Villa terminada', en: 'Completed villa' } },
  ],
  'fiscalidad-inversores-extranjeros-rd': [
    { src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80&fit=crop', alt: { es: 'Planificación fiscal', en: 'Tax planning' } },
  ],
  'cap-cana-vs-bavaro-donde-construir': [
    { src: 'https://images.unsplash.com/photo-1580541631950-7282082b53ce?w=900&q=80&fit=crop', alt: { es: 'Cap Cana', en: 'Cap Cana' } },
    { src: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=900&q=80&fit=crop', alt: { es: 'Bávaro', en: 'Bavaro' } },
  ],
  'materiales-construccion-tropical-caribe': [
    { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80&fit=crop', alt: { es: 'Materiales de construcción', en: 'Construction materials' } },
  ],
}

export default function BlogArticlePage({
  slug,
  dbArticle,
  staticArticle,
}: {
  slug: string
  dbArticle: ArticleData | null
  staticArticle?: { es: ArticleData; en: ArticleData }
}) {
  const { locale } = useLanguage()
  const tx = TEXT[locale]

  const article = dbArticle || (staticArticle ? staticArticle[locale] : null)
  const inlineImages = ARTICLE_IMAGES[slug] || []

  if (!article) {
    return (
      <main>
        <section className="relative py-24 md:py-32 bg-roiba-verde overflow-hidden">
          <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-6 text-center z-10">
            <h1 className="font-serif text-display-md text-white mb-6">{tx.notFound}</h1>
            <p className="text-white/70 text-body-lg mb-10">{tx.notFoundDesc}</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-roiba-dorado hover:text-roiba-dorado-light transition-colors font-medium"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 4l-4 4 4 4"/></svg>
              {tx.back}
            </Link>
          </div>
        </section>
      </main>
    )
  }

  // Split content at first </h2> to insert an image after the first section
  const insertImageInContent = () => {
    if (inlineImages.length === 0) return article.content

    const parts = article.content.split('</h2>')
    if (parts.length < 3) return article.content

    // Insert first image after 2nd section heading
    const imgTag1 = `<figure class="my-8 rounded-sm overflow-hidden"><img src="${inlineImages[0].src}" alt="${inlineImages[0].alt[locale]}" class="w-full h-auto rounded-sm" loading="lazy" /><figcaption class="text-center text-xs text-roiba-verde/40 mt-3 italic">${inlineImages[0].alt[locale]}</figcaption></figure>`

    let result = parts[0] + '</h2>' + parts[1] + '</h2>' + imgTag1

    // Insert second image after 4th section if available
    if (inlineImages.length > 1 && parts.length >= 5) {
      const imgTag2 = `<figure class="my-8 rounded-sm overflow-hidden"><img src="${inlineImages[1].src}" alt="${inlineImages[1].alt[locale]}" class="w-full h-auto rounded-sm" loading="lazy" /><figcaption class="text-center text-xs text-roiba-verde/40 mt-3 italic">${inlineImages[1].alt[locale]}</figcaption></figure>`
      result += parts[2] + '</h2>' + parts[3] + '</h2>' + imgTag2
      result += parts.slice(4).join('</h2>')
    } else {
      result += parts.slice(2).join('</h2>')
    }

    return result
  }

  const enrichedContent = insertImageInContent()

  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-roiba-verde overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-roiba-verde/80" />
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="px-3 py-1 bg-roiba-dorado/20 text-roiba-dorado text-[10px] font-semibold tracking-wider uppercase rounded-sm">
              {article.category}
            </span>
          </div>
          <h1 className="font-serif text-display-md md:text-display-lg text-white mb-6 leading-tight">
            {article.title}
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
          <div className="flex items-center justify-center gap-4 text-white/50 text-sm">
            <span>{article.date}</span>
            <span>&middot;</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="bg-roiba-arena-light border-b border-roiba-verde/[0.06]">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-roiba-verde/50 hover:text-roiba-dorado transition-colors text-sm font-medium"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3l-4 4 4 4"/></svg>
            {tx.back}
          </Link>
        </div>
      </div>

      {/* Excerpt highlight */}
      <section className="py-8 md:py-10 bg-roiba-arena-light border-b border-roiba-verde/[0.06]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-body-lg text-roiba-verde/60 leading-relaxed italic font-serif border-l-2 border-roiba-dorado pl-6">
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Article content */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-roiba-verde prose-headings:mt-10 prose-headings:mb-4
              prose-h2:text-[clamp(1.4rem,2.5vw,1.75rem)] prose-h2:leading-tight prose-h2:border-b prose-h2:border-roiba-dorado/20 prose-h2:pb-3
              prose-p:text-roiba-verde/70 prose-p:leading-[1.85] prose-p:text-[1.05rem]
              prose-li:text-roiba-verde/70 prose-li:leading-relaxed
              prose-strong:text-roiba-verde prose-strong:font-semibold
              prose-ul:my-4 prose-li:my-1.5
              prose-figure:my-8
              prose-img:rounded-sm
              prose-figcaption:text-center prose-figcaption:text-xs prose-figcaption:text-roiba-verde/40"
            dangerouslySetInnerHTML={{ __html: enrichedContent }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14 md:py-20 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-display-md text-white mb-8">{tx.cta}</h2>
          <Link
            href="/contacto"
            className="group relative inline-flex items-center justify-center px-10 py-4 bg-roiba-dorado text-roiba-verde font-semibold tracking-wider uppercase text-sm rounded-sm overflow-hidden transition-all duration-500"
          >
            <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" aria-hidden="true" />
            <span className="relative z-10">{tx.ctaButton}</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
