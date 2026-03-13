'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { trackBlogView } from '@/lib/analytics'

interface ArticleData {
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
  content: string
}

interface RelatedArticleMeta {
  slug: string
  es: { title: string; excerpt: string; image: string; category: string; date: string; readTime: string }
  en: { title: string; excerpt: string; image: string; category: string; date: string; readTime: string }
}

const TEXT = {
  es: {
    back: 'Volver al blog',
    cta: 'Hablemos de su proyecto',
    ctaButton: 'Solicitar información',
    notFound: 'Artículo no encontrado',
    notFoundDesc: 'El artículo que busca no existe o ha sido retirado.',
    relatedTitle: 'Continúe explorando',
    relatedRead: 'Leer artículo',
  },
  en: {
    back: 'Back to blog',
    cta: 'Let\'s talk about your project',
    ctaButton: 'Request information',
    notFound: 'Article not found',
    notFoundDesc: 'The article you are looking for does not exist or has been removed.',
    relatedTitle: 'Continue exploring',
    relatedRead: 'Read article',
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
  relatedArticles = [],
}: {
  slug: string
  dbArticle: ArticleData | null
  staticArticle?: { es: ArticleData; en: ArticleData }
  relatedArticles?: RelatedArticleMeta[]
}) {
  const { locale } = useLanguage()
  const tx = TEXT[locale]

  const article = dbArticle || (staticArticle ? staticArticle[locale] : null)
  const inlineImages = ARTICLE_IMAGES[slug] || []

  // Track blog view
  useEffect(() => {
    if (article) {
      trackBlogView(slug, article.title)
    }
  }, [slug, article])

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

  // Split content at </h2> tags to insert images between sections
  const insertImageInContent = () => {
    if (inlineImages.length === 0) return article.content

    const parts = article.content.split('</h2>')
    if (parts.length < 3) return article.content

    const imgTag1 = `<figure class="my-12 -mx-4 md:-mx-8"><img src="${inlineImages[0].src}" alt="${inlineImages[0].alt[locale]}" class="w-full h-auto" loading="lazy" /><figcaption class="text-center text-xs text-roiba-verde/40 mt-4 italic font-sans tracking-wide">${inlineImages[0].alt[locale]}</figcaption></figure>`

    let result = parts[0] + '</h2>' + parts[1] + '</h2>' + imgTag1

    if (inlineImages.length > 1 && parts.length >= 5) {
      const imgTag2 = `<figure class="my-12 -mx-4 md:-mx-8"><img src="${inlineImages[1].src}" alt="${inlineImages[1].alt[locale]}" class="w-full h-auto" loading="lazy" /><figcaption class="text-center text-xs text-roiba-verde/40 mt-4 italic font-sans tracking-wide">${inlineImages[1].alt[locale]}</figcaption></figure>`
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
      {/* Hero — Full-width editorial cover */}
      <section className="relative py-28 md:py-36 lg:py-44 bg-roiba-verde overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde via-roiba-verde/70 to-roiba-verde/40" />
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <span className="inline-block px-4 py-1.5 bg-roiba-dorado/15 text-roiba-dorado text-[10px] font-semibold tracking-[0.2em] uppercase mb-8 backdrop-blur-sm">
            {article.category}
          </span>
          <h1 className="font-serif text-[clamp(28px,5vw,52px)] text-white leading-[1.15] mb-8 text-balance">
            {article.title}
          </h1>
          <div className="w-20 h-px bg-roiba-dorado mx-auto mb-8" />
          <div className="flex items-center justify-center gap-4 text-white/45 text-[13px] font-sans tracking-wide">
            <time>{article.date}</time>
            <span className="w-1 h-1 bg-roiba-dorado/40 rounded-full" />
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb navigation */}
      <nav className="bg-white border-b border-roiba-verde/[0.06]">
        <div className="max-w-[680px] mx-auto px-6 py-5">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2.5 text-roiba-verde/35 hover:text-roiba-dorado transition-colors text-[12px] font-sans font-medium tracking-[0.1em] uppercase"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3l-4 4 4 4"/></svg>
            {tx.back}
          </Link>
        </div>
      </nav>

      {/* Excerpt — editorial pull quote */}
      <section className="pt-14 pb-12 md:pt-20 md:pb-16 bg-white">
        <div className="max-w-[680px] mx-auto px-6">
          <blockquote className="relative pl-8 md:pl-12 py-2">
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-roiba-dorado via-roiba-dorado/60 to-roiba-dorado/10 rounded-full" />
            <p className="text-[clamp(19px,2.2vw,24px)] text-roiba-verde/50 leading-[1.7] font-serif italic tracking-[-0.01em]">
              {article.excerpt}
            </p>
          </blockquote>
          <div className="w-16 h-px bg-roiba-dorado/25 mt-12 md:mt-16" />
        </div>
      </section>

      {/* Article body — premium editorial typography */}
      <article className="pb-16 md:pb-24 bg-white">
        <div className="max-w-[680px] mx-auto px-6 blog-article-prose">
          <div
            className="
              prose prose-lg max-w-none

              prose-headings:font-serif prose-headings:text-roiba-verde prose-headings:font-normal prose-headings:tracking-[-0.01em]
              prose-h2:text-[clamp(1.6rem,3.2vw,2rem)] prose-h2:leading-[1.2] prose-h2:mt-16 prose-h2:mb-6
              prose-h2:relative prose-h2:pb-5
              prose-h3:text-[clamp(1.2rem,2.2vw,1.45rem)] prose-h3:leading-[1.3] prose-h3:mt-12 prose-h3:mb-4 prose-h3:font-medium prose-h3:text-roiba-verde/90

              prose-p:text-[#3D4A5C] prose-p:text-[1.06rem] prose-p:leading-[1.85] prose-p:mb-7
              prose-p:font-sans prose-p:font-light

              prose-li:text-[#3D4A5C] prose-li:text-[1.04rem] prose-li:leading-[1.8] prose-li:font-sans prose-li:font-light
              prose-li:mb-3 prose-li:pl-2
              prose-ul:my-8 prose-ol:my-8
              prose-ul:pl-5 prose-ol:pl-5

              prose-strong:text-roiba-verde prose-strong:font-semibold
              prose-a:text-roiba-dorado prose-a:underline prose-a:underline-offset-4 prose-a:decoration-roiba-dorado/30 hover:prose-a:decoration-roiba-dorado

              prose-blockquote:border-l-[3px] prose-blockquote:border-roiba-dorado/40
              prose-blockquote:bg-[#F8F9FB] prose-blockquote:py-6 prose-blockquote:px-8 prose-blockquote:rounded-r-sm
              prose-blockquote:text-roiba-verde/55 prose-blockquote:font-serif prose-blockquote:italic
              prose-blockquote:text-[1.1rem] prose-blockquote:leading-[1.8]
              prose-blockquote:my-10

              prose-figure:my-14 prose-figure:-mx-4 md:prose-figure:-mx-8
              prose-img:rounded-none prose-img:w-full
              prose-figcaption:text-center prose-figcaption:text-[11px] prose-figcaption:text-roiba-verde/30 prose-figcaption:mt-5 prose-figcaption:font-sans prose-figcaption:tracking-[0.08em] prose-figcaption:uppercase

              [&_h2]:after:content-[''] [&_h2]:after:block [&_h2]:after:w-10 [&_h2]:after:h-[2px] [&_h2]:after:bg-roiba-dorado/30 [&_h2]:after:mt-4
              [&_ul]:list-none [&_ul_li]:relative [&_ul_li]:before:content-[''] [&_ul_li]:before:absolute [&_ul_li]:before:left-[-16px] [&_ul_li]:before:top-[0.7em] [&_ul_li]:before:w-[5px] [&_ul_li]:before:h-[5px] [&_ul_li]:before:bg-roiba-dorado/50 [&_ul_li]:before:rounded-full
            "
            dangerouslySetInnerHTML={{ __html: enrichedContent }}
          />
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 md:py-24 bg-[#F7F8FA]">
          <div className="max-w-7xl mx-auto px-6">
            {/* Section header */}
            <div className="text-center mb-14">
              <div className="w-10 h-px bg-roiba-dorado/40 mx-auto mb-8" />
              <h2 className="font-serif text-[clamp(24px,3.5vw,36px)] text-roiba-verde leading-[1.2]">
                {tx.relatedTitle}
              </h2>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {relatedArticles.map((ra) => {
                const r = ra[locale]
                return (
                  <Link
                    key={ra.slug}
                    href={`/blog/${ra.slug}`}
                    className="group bg-white rounded-sm overflow-hidden border border-roiba-verde/[0.06] hover:shadow-lg hover:-translate-y-1 transition-all duration-500 block"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={r.image}
                        alt={r.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        loading="lazy"
                      />
                      <span className="absolute top-4 left-4 px-3 py-1 bg-roiba-verde/80 text-white text-[10px] font-semibold tracking-wider uppercase rounded-sm">
                        {r.category}
                      </span>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3 text-[11px] text-roiba-verde/40 font-sans">
                        <span>{r.date}</span>
                        <span>·</span>
                        <span>{r.readTime}</span>
                      </div>
                      <h3 className="font-serif text-lg text-roiba-verde leading-tight mb-3 group-hover:text-roiba-dorado transition-colors">
                        {r.title}
                      </h3>
                      <p className="text-sm text-roiba-verde/55 leading-relaxed mb-4 line-clamp-2">
                        {r.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-roiba-dorado group-hover:gap-3 transition-all">
                        {tx.relatedRead}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA — matching gold shimmer */}
      <section className="relative py-16 md:py-24 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-roiba-dorado/[0.08] to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6 text-center z-10">
          <div className="w-12 h-px bg-roiba-dorado/40 mx-auto mb-8" />
          <h2 className="font-serif text-[clamp(26px,4vw,42px)] text-white leading-[1.2] mb-10">{tx.cta}</h2>
          <Link
            href="/contacto"
            className="btn-roiba-primary px-12"
          >
            <span>{tx.ctaButton}</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
