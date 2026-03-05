'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const TEXT = {
  es: {
    heroEyebrow: 'Publicaciones',
    heroTitle1: 'Ideas, análisis y',
    heroTitle2: 'guías de inversión',
    heroDesc: 'Análisis de mercado, marco legal, proceso constructivo y vida en Punta Cana desde la perspectiva de quien ejecuta proyectos aquí.',
    leerArticulo: 'Leer artículo',
    ctaEyebrow: '¿Le resulta útil este contenido?',
    ctaTitle: 'Reciba análisis y guías técnicas por email',
    ctaDesc: 'Suscríbase al boletín y reciba análisis, guías técnicas y actualizaciones de mercado antes de su publicación.',
    ctaButton: 'Suscribirse al boletín',
  },
  en: {
    heroEyebrow: 'Publications',
    heroTitle1: 'Ideas, analysis and',
    heroTitle2: 'investment guides',
    heroDesc: 'Market analysis, legal framework, construction process and life in Punta Cana from the perspective of those who execute projects here.',
    leerArticulo: 'Read article',
    ctaEyebrow: 'Is this content useful?',
    ctaTitle: 'Receive technical analysis and guides by email',
    ctaDesc: 'Subscribe to our newsletter and receive analysis, technical guides and market updates before publication.',
    ctaButton: 'Subscribe to newsletter',
  },
}

const ARTICLES_ES = [
  { slug: 'por-que-invertir-punta-cana-2025', title: 'Por qué invertir en Punta Cana en 2025', excerpt: 'Analizamos el mercado inmobiliario de Punta Cana: rentabilidad, demanda turística, marco fiscal favorable y las zonas con mayor proyección de crecimiento.', image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80&fit=crop', category: 'Inversión', date: '15 Feb 2025', readTime: '8 min' },
  { slug: 'guia-legal-comprar-propiedad-republica-dominicana', title: 'Guía legal: comprar propiedad en República Dominicana', excerpt: 'Todo lo que necesita saber sobre el marco legal, permisos, titularidad y due diligence para adquirir terreno o propiedad en la República Dominicana como extranjero.', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&fit=crop', category: 'Legal', date: '28 Ene 2025', readTime: '12 min' },
  { slug: 'proceso-construccion-villa-lujo-caribe', title: 'El proceso de construir una villa de lujo en el Caribe', excerpt: 'Desde la selección del terreno hasta la entrega llave en mano: las fases, plazos, presupuestos y decisiones clave que todo inversor debe conocer.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&fit=crop', category: 'Construcción', date: '10 Ene 2025', readTime: '10 min' },
  { slug: 'fiscalidad-inversores-extranjeros-rd', title: 'Fiscalidad para inversores extranjeros en RD', excerpt: 'Impuestos, exenciones, Ley Confotur y beneficios fiscales disponibles para inversores internacionales que construyen en zonas turísticas de República Dominicana.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fit=crop', category: 'Fiscal', date: '5 Dic 2024', readTime: '7 min' },
  { slug: 'cap-cana-vs-bavaro-donde-construir', title: 'Cap Cana vs Bávaro: ¿dónde construir su villa?', excerpt: 'Comparativa detallada entre las dos zonas más demandadas de Punta Cana: accesibilidad, servicios, precios de terreno, plusvalía y estilo de vida.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&fit=crop', category: 'Destino', date: '20 Nov 2024', readTime: '9 min' },
  { slug: 'materiales-construccion-tropical-caribe', title: 'Materiales de construcción para clima tropical', excerpt: 'Cómo seleccionar materiales que resistan la humedad, salinidad y condiciones climáticas del Caribe sin comprometer el diseño ni la durabilidad.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&fit=crop', category: 'Construcción', date: '8 Nov 2024', readTime: '6 min' },
]

const ARTICLES_EN = [
  { slug: 'por-que-invertir-punta-cana-2025', title: 'Why invest in Punta Cana in 2025', excerpt: 'We analyze the Punta Cana real estate market: profitability, tourism demand, favorable tax framework and the areas with the greatest growth potential.', image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80&fit=crop', category: 'Investment', date: '15 Feb 2025', readTime: '8 min' },
  { slug: 'guia-legal-comprar-propiedad-republica-dominicana', title: 'Legal guide: buying property in the Dominican Republic', excerpt: 'Everything you need to know about the legal framework, permits, title and due diligence for acquiring land or property in the Dominican Republic as a foreigner.', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&fit=crop', category: 'Legal', date: '28 Jan 2025', readTime: '12 min' },
  { slug: 'proceso-construccion-villa-lujo-caribe', title: 'The process of building a luxury villa in the Caribbean', excerpt: 'From site selection to turnkey delivery: the phases, timelines, budgets and key decisions every investor should know.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&fit=crop', category: 'Construction', date: '10 Jan 2025', readTime: '10 min' },
  { slug: 'fiscalidad-inversores-extranjeros-rd', title: 'Taxation for foreign investors in DR', excerpt: 'Taxes, exemptions, Confotur Law and tax benefits available for international investors building in tourism areas of the Dominican Republic.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fit=crop', category: 'Tax', date: '5 Dec 2024', readTime: '7 min' },
  { slug: 'cap-cana-vs-bavaro-donde-construir', title: 'Cap Cana vs Bávaro: where to build your villa?', excerpt: 'Detailed comparison between the two most sought-after areas in Punta Cana: accessibility, services, land prices, appreciation and lifestyle.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&fit=crop', category: 'Destination', date: '20 Nov 2024', readTime: '9 min' },
  { slug: 'materiales-construccion-tropical-caribe', title: 'Construction materials for tropical climates', excerpt: 'How to select materials that withstand humidity, salinity and Caribbean climate conditions without compromising design or durability.', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&fit=crop', category: 'Construction', date: '8 Nov 2024', readTime: '6 min' },
]

interface Article {
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  date: string
  readTime: string
}

export default function BlogContent({ dbArticles }: { dbArticles?: Article[] }) {
  const { locale } = useLanguage()
  const tx = TEXT[locale]
  const defaultArticles = locale === 'en' ? ARTICLES_EN : ARTICLES_ES
  const articles = dbArticles && dbArticles.length > 0 ? dbArticles : defaultArticles

  return (
    <main>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-roiba-verde overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1920&q=85&fit=crop"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-roiba-verde/75" />
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">{tx.heroEyebrow}</p>
          <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-8">
            {tx.heroTitle1}<br />{tx.heroTitle2}
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto mb-6" />
          <p className="text-white/70 text-body-lg max-w-2xl mx-auto leading-relaxed">{tx.heroDesc}</p>
        </div>
      </section>

      {/* Articles grid */}
      <section className="py-14 md:py-20 bg-roiba-arena-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="group bg-white rounded-sm overflow-hidden border border-roiba-verde/[0.06] hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-roiba-verde/80 text-white text-[10px] font-semibold tracking-wider uppercase rounded-sm">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-[11px] text-roiba-verde/40 font-sans">
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="font-serif text-xl text-roiba-verde leading-tight mb-3 group-hover:text-roiba-dorado transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-roiba-verde/60 leading-relaxed mb-4">{article.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-roiba-dorado group-hover:gap-3 transition-all">
                    {tx.leerArticulo}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-14 md:py-20 bg-roiba-verde overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">{tx.ctaEyebrow}</p>
          <h2 className="font-serif text-display-md text-white mb-6">{tx.ctaTitle}</h2>
          <p className="text-white/60 text-body-lg mb-12 leading-relaxed">{tx.ctaDesc}</p>
          <Link
            href="/contacto"
            className="inline-block px-10 py-4 bg-roiba-dorado-light text-roiba-verde font-semibold rounded-sm hover:bg-roiba-dorado transition-colors duration-300 text-lg"
          >
            {tx.ctaButton}
          </Link>
        </div>
      </section>
    </main>
  )
}
