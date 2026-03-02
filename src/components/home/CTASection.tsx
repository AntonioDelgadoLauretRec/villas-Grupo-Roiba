export default function CTASection() {
  return (
    <section id="contacto" className="py-[clamp(80px,10vw,120px)] px-[clamp(24px,8vw,120px)] bg-roiba-verde relative overflow-hidden text-center">
      {/* Vertical accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-roiba-dorado/[0.08] to-transparent" />

      <div className="max-w-[640px] mx-auto relative z-[2]">
        <span className="scroll-reveal block font-sans text-micro font-semibold tracking-[0.3em] uppercase text-roiba-dorado mb-6">
          Siguiente Paso
        </span>

        <h2 className="scroll-reveal delay-1 font-serif text-[clamp(32px,5vw,52px)] font-normal text-white leading-[1.15] mb-6">
          Hablemos de{' '}
          <span className="italic text-roiba-dorado-light">su proyecto</span>
        </h2>

        <p className="scroll-reveal delay-2 font-sans text-sm leading-[1.8] text-white/65 mb-12">
          Solicite un análisis personalizado sin compromiso. Nuestro equipo evaluará
          la viabilidad técnica y financiera de su proyecto en 48 horas.
        </p>

        <div className="scroll-reveal delay-3 flex gap-4 justify-center flex-wrap">
          <a
            href="/contacto"
            className="font-sans text-[11px] font-semibold tracking-[0.15em] uppercase px-12 py-[18px] bg-roiba-dorado text-roiba-verde hover:bg-roiba-dorado-light hover:-translate-y-0.5 hover:shadow-[0_16px_48px_rgba(201,169,110,0.2)] transition-all duration-400"
          >
            Contáctanos
          </a>
          <a
            href="mailto:info@gruporoiba.com"
            className="font-sans text-[11px] font-medium tracking-[0.15em] uppercase px-12 py-[18px] bg-transparent text-white border border-white/20 hover:border-roiba-dorado hover:text-roiba-dorado-light transition-all duration-400"
          >
            Escribir Email
          </a>
        </div>
      </div>
    </section>
  )
}
