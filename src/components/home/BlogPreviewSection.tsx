'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import type { BlogPost } from '@/types/admin'

const POSTS_ES = [
  { slug: 'por-que-invertir-punta-cana-2025', title: 'Por qué invertir en Punta Cana en 2025', excerpt: 'Analizamos el mercado inmobiliario de Punta Cana: rentabilidad, demanda turística y marco fiscal favorable.', image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80&fit=crop', category: 'Inversión', date: '15 Feb 2025' },
  { slug: 'guia-legal-comprar-propiedad-republica-dominicana', title: 'Guía legal: comprar propiedad en República Dominicana', excerpt: 'Todo sobre el marco legal, permisos y due diligence para adquirir propiedad como extranjero.', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&fit=crop', category: 'Legal', date: '28 Ene 2025' },
  { slug: 'proceso-construccion-villa-lujo-caribe', title: 'El proceso de construir una villa de lujo en el Caribe', excerpt: 'Desde la selección del terreno hasta la entrega llave en mano: fases, plazos y decisiones clave.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&fit=crop', category: 'Construcción', date: '10 Ene 2025' },
  { slug: 'fiscalidad-inversores-extranjeros-rd', title: 'Fiscalidad para inversores extranjeros en RD', excerpt: 'Impuestos, exenciones, Ley Confotur y beneficios fiscales para inversores internacionales.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fit=crop', category: 'Fiscal', date: '5 Dic 2024' },
  { slug: 'cap-cana-vs-bavaro-donde-construir', title: 'Cap Cana vs Bávaro: ¿dónde construir su villa?', excerpt: 'Comparativa entre las dos zonas más demandadas de Punta Cana.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&fit=crop', category: 'Destino', date: '20 Nov 2024' },
]

const POSTS_EN = [
  { slug: 'por-que-invertir-punta-cana-2025', title: 'Why invest in Punta Cana in 2025', excerpt: 'We analyze the Punta Cana real estate market: profitability, tourism demand and favorable tax framework.', image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=800&q=80&fit=crop', category: 'Investment', date: '15 Feb 2025' },
  { slug: 'guia-legal-comprar-propiedad-republica-dominicana', title: 'Legal guide: buying property in the Dominican Republic', excerpt: 'Everything about the legal framework, permits and due diligence for purchasing property as a foreigner.', image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80&fit=crop', category: 'Legal', date: '28 Jan 2025' },
  { slug: 'proceso-construccion-villa-lujo-caribe', title: 'The process of building a luxury villa in the Caribbean', excerpt: 'From site selection to turnkey delivery: phases, timelines and key decisions.', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80&fit=crop', category: 'Construction', date: '10 Jan 2025' },
  { slug: 'fiscalidad-inversores-extranjeros-rd', title: 'Taxation for foreign investors in DR', excerpt: 'Taxes, exemptions, Confotur Law and tax benefits for international investors.', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&fit=crop', category: 'Tax', date: '5 Dec 2024' },
  { slug: 'cap-cana-vs-bavaro-donde-construir', title: 'Cap Cana vs Bávaro: where to build your villa?', excerpt: 'Comparison between the two most sought-after areas in Punta Cana.', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80&fit=crop', category: 'Destination', date: '20 Nov 2024' },
]

export default function BlogPreviewSection({ dbPosts }: { dbPosts?: BlogPost[] }) {
  const { t, locale } = useLanguage()
  const DEFAULT_POSTS = locale === 'en' ? POSTS_EN : POSTS_ES

  const posts = dbPosts && dbPosts.length > 0
    ? dbPosts.slice(0, 5).map(p => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        image: p.image,
        category: p.category,
        date: p.date,
      }))
    : DEFAULT_POSTS

  return (
    <section className="py-12 md:py-16 bg-white relative overflow-hidden">
      <div className="px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between mb-10 border-b border-roiba-dorado/[0.12] pb-6">
          <div>
            <span className="scroll-reveal block font-sans text-micro font-semibold tracking-[0.3em] uppercase text-roiba-dorado mb-3">
              {t.blogPreview.eyebrow}
            </span>
            <h2 className="scroll-reveal delay-1 font-serif text-[clamp(28px,4vw,48px)] font-normal text-roiba-verde leading-[1.15]">
              {t.blogPreview.title} <span className="italic text-roiba-dorado">{t.blogPreview.titleAccent}</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="scroll-reveal delay-2 inline-flex items-center gap-2 font-sans text-[11px] font-semibold tracking-wider uppercase text-roiba-dorado hover:text-roiba-dorado-light transition-colors mt-4 md:mt-0"
          >
            {t.blogPreview.viewAll}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
          </Link>
        </div>

        <div className="scroll-reveal overflow-x-auto hide-scrollbar snap-x snap-mandatory touch-pan-x -mx-4 md:-mx-8 lg:-mx-16 px-4 md:px-8 lg:px-16">
          <div className="flex gap-5 w-max">
            {posts.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group snap-start flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[calc(33.333vw-3rem)] bg-white border border-roiba-verde/[0.06] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 33vw"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-roiba-verde/80 text-white text-[10px] font-semibold tracking-wider uppercase rounded-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-5">
                  <span className="text-[11px] text-roiba-verde/40 font-sans">{post.date}</span>
                  <h3 className="font-serif text-lg text-roiba-verde leading-tight mt-2 mb-2 group-hover:text-roiba-dorado transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-roiba-verde/60 leading-relaxed mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-roiba-dorado group-hover:gap-3 transition-all">
                    {t.blogPreview.readMore}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 7h8M8 4l3 3-3 3"/></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
