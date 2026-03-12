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
    related: 'Artículos relacionados',
    cta: 'Hablemos de su proyecto',
    notFound: 'Artículo no encontrado',
    notFoundDesc: 'El artículo que busca no existe o ha sido retirado.',
  },
  en: {
    back: 'Back to blog',
    related: 'Related articles',
    cta: 'Let\'s talk about your project',
    notFound: 'Article not found',
    notFoundDesc: 'The article you are looking for does not exist or has been removed.',
  },
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
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Back link */}
      <div className="bg-roiba-arena-light border-b border-roiba-verde/[0.06]">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-roiba-verde/50 hover:text-roiba-dorado transition-colors text-sm font-medium"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9 3l-4 4 4 4"/></svg>
            {tx.back}
          </Link>
        </div>
      </div>

      {/* Article content */}
      <section className="py-12 md:py-16 bg-roiba-arena-light">
        <div className="max-w-3xl mx-auto px-6">
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-roiba-verde prose-headings:mt-10 prose-headings:mb-4
              prose-h2:text-heading
              prose-p:text-roiba-verde/70 prose-p:leading-relaxed
              prose-li:text-roiba-verde/70
              prose-strong:text-roiba-verde prose-strong:font-semibold
              prose-ul:my-4 prose-li:my-1"
            dangerouslySetInnerHTML={{ __html: article.content }}
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
            className="inline-block px-10 py-4 bg-roiba-dorado-light text-roiba-verde font-semibold rounded-sm hover:bg-roiba-dorado transition-colors duration-300 text-lg"
          >
            {locale === 'es' ? 'Solicitar información' : 'Request information'}
          </Link>
        </div>
      </section>
    </main>
  )
}
