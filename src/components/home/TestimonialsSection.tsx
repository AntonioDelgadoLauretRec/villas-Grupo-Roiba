'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import type { Testimonial } from '@/types/admin'

const TESTIMONIALS_ES = [
  { quote: 'Grupo Roiba nos ofreció algo que no habíamos encontrado en ningún otro constructor en Punta Cana: transparencia real. Cada semana recibíamos informes detallados con fotos, costes actualizados y un cronograma que se cumplió al día. La villa superó todas nuestras expectativas.', name: 'Carlos & Lucía M.', role: 'Propietarios de villa', location: 'Madrid, España' },
  { quote: 'Construir nuestra villa desde Miami con un equipo en el Caribe parecía un reto enorme. Iván y Ramón lo hicieron simple. Su dominio técnico, la comunicación constante y el respeto escrupuloso al presupuesto nos dieron una confianza total desde el primer día.', name: 'James & Patricia W.', role: 'Propietarios de villa en Cap Cana', location: 'Miami, Florida, EE.UU.' },
  { quote: 'Buscábamos un equipo que entendiera nuestras expectativas de calidad y las trasladara al Caribe. Roiba lo consiguió. La atención al detalle en los acabados, la selección de materiales y el control de calidad fueron impecables. Recomendamos Grupo Roiba sin reservas.', name: 'Elena & Roberto V.', role: 'Propietarios de villa', location: 'Marbella, España' },
  { quote: 'Construir en el Caribe desde Colombia parecía un proceso incierto, pero Grupo Roiba nos guió en cada etapa con profesionalismo y honestidad. La gestión de permisos, los arquitectos locales, la calidad de los materiales... todo fue exactamente como nos prometieron.', name: 'Andrés & Camila R.', role: 'Propietarios de villa en Punta Cana', location: 'Bogotá, Colombia' },
  { quote: 'El servicio Roiba Care fue decisivo en nuestra decisión. Saber que nuestra propiedad estará supervisada y mantenida profesionalmente cuando estamos en Nueva York nos da una tranquilidad absoluta. Es un servicio post-entrega que realmente marca la diferencia.', name: 'David & Lauren Chen', role: 'Propietarios de villa', location: 'New York, EE.UU.' },
]

const TESTIMONIALS_EN = [
  { quote: 'Grupo Roiba offered us something we hadn\'t found with any other builder in Punta Cana: real transparency. Every week we received detailed reports with photos, updated costs and a schedule that was met to the day. The villa exceeded all our expectations.', name: 'Carlos & Lucía M.', role: 'Villa owners', location: 'Madrid, Spain' },
  { quote: 'Building our villa from Miami with a team in the Caribbean seemed like a huge challenge. Iván and Ramón made it simple. Their technical expertise, constant communication and strict respect for the budget gave us total confidence from day one.', name: 'James & Patricia W.', role: 'Villa owners in Cap Cana', location: 'Miami, Florida, USA' },
  { quote: 'We were looking for a team that understood our quality expectations and could deliver them in the Caribbean. Roiba did it. The attention to detail in the finishes, material selection and quality control were impeccable. We recommend Grupo Roiba without reservation.', name: 'Elena & Roberto V.', role: 'Villa owners', location: 'Marbella, Spain' },
  { quote: 'Building in the Caribbean from Colombia seemed uncertain, but Grupo Roiba guided us at every stage with professionalism and honesty. Permits, local architects, material quality... everything was exactly as promised.', name: 'Andrés & Camila R.', role: 'Villa owners in Punta Cana', location: 'Bogotá, Colombia' },
  { quote: 'The Roiba Care service was decisive in our decision. Knowing that our property will be supervised and professionally maintained when we\'re in New York gives us absolute peace of mind. It\'s a post-delivery service that truly makes a difference.', name: 'David & Lauren Chen', role: 'Villa owners', location: 'New York, USA' },
]

export default function TestimonialsSection({ dbTestimonials }: { dbTestimonials?: Testimonial[] }) {
  const { locale } = useLanguage()
  const DEFAULT_TESTIMONIALS = locale === 'en' ? TESTIMONIALS_EN : TESTIMONIALS_ES
  const TESTIMONIALS = dbTestimonials
    ? dbTestimonials.map(t => ({ quote: t.quote, name: t.name, role: t.role, location: t.location }))
    : DEFAULT_TESTIMONIALS
  const [idx, setIdx] = useState(0)
  const touchRef = useRef<{ x: number; y: number } | null>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => setIdx((p) => (p + 1) % TESTIMONIALS.length), 6000)
    return () => clearInterval(timer)
  }, [])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchRef.current) return
    const dx = e.changedTouches[0].clientX - touchRef.current.x
    const dy = e.changedTouches[0].clientY - touchRef.current.y
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) setIdx((p) => (p + 1) % TESTIMONIALS.length)
      else setIdx((p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
    }
    touchRef.current = null
  }, [])

  const item = TESTIMONIALS[idx]

  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-white relative overflow-hidden">
      <div className="absolute top-[10%] left-[8%] font-serif text-[clamp(200px,25vw,400px)] font-light text-roiba-verde/[0.03] leading-none select-none pointer-events-none">
        &ldquo;
      </div>

      <div className="max-w-[900px] mx-auto relative z-[2]">
        <div className="scroll-reveal text-center mb-14">
          <span className="block font-sans text-micro font-semibold tracking-[0.3em] uppercase text-roiba-dorado mb-4">{t.testimonials.eyebrow}</span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-normal text-roiba-verde">
            {t.testimonials.title}{' '}
            <span className="italic text-roiba-dorado">{t.testimonials.titleAccent}</span>
          </h2>
        </div>

        <div className="scroll-reveal delay-1 touch-pan-y relative min-h-[280px]" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
          {TESTIMONIALS.map((testimonial, i) => (
            <div
              key={i}
              className={`text-center transition-all duration-800 ease-out ${
                i === idx
                  ? 'relative opacity-100 translate-y-0'
                  : 'absolute top-0 left-0 right-0 opacity-0 translate-y-5 pointer-events-none'
              }`}
            >
              <div className="mb-6 flex justify-center gap-1">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="18" height="18" viewBox="0 0 24 24" fill="#C9A96E">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
              <p className="font-serif text-[clamp(18px,2.5vw,24px)] font-normal italic text-roiba-verde/85 leading-[1.65] max-w-[720px] mx-auto mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="w-10 h-px bg-roiba-dorado/40 mx-auto mb-6" />
              <p className="font-sans text-[13px] font-semibold text-roiba-verde tracking-wide mb-1">{testimonial.name}</p>
              <p className="font-sans text-[11px] text-roiba-dorado mb-0.5">{testimonial.role}</p>
              <p className="font-sans text-[11px] text-roiba-verde/30">{testimonial.location}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Testimonio ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-400 ${idx === i ? 'w-8 bg-roiba-dorado' : 'w-2 bg-roiba-verde/[0.12] hover:bg-roiba-verde/25'}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
