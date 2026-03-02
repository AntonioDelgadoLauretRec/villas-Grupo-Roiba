import Image from 'next/image'

export default function AboutSection() {
  return (
    <section className="py-[clamp(80px,10vw,140px)] px-[clamp(24px,8vw,120px)] bg-roiba-arena-light">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Text */}
        <div>
          <span className="scroll-reveal block font-sans text-micro font-semibold tracking-[0.3em] uppercase text-roiba-dorado mb-4">
            Quiénes Somos
          </span>
          <h2 className="scroll-reveal delay-1 font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] text-roiba-verde mb-8">
            Precisión constructiva,
            <br />
            <span className="italic text-roiba-dorado">visión integral</span>
          </h2>
          <div className="scroll-reveal delay-2 w-12 h-0.5 bg-roiba-dorado mb-8" />
          <p className="scroll-reveal delay-3 font-sans text-sm leading-[1.85] text-slate-500 mb-5">
            Grupo Roiba es una firma especializada en dirección técnica y supervisión de obra, así como en la construcción de villas premium en la zona este de República Dominicana, con especial enfoque en Punta Cana.
          </p>
          <p className="scroll-reveal delay-4 font-sans text-sm leading-[1.85] text-slate-500">
            Paralelamente, desarrollamos y construimos villas premium totalmente personalizadas, definiendo cada proyecto en función de los requerimientos técnicos, funcionales y estéticos del cliente, bajo un modelo de ejecución basado en precisión constructiva, planificación rigurosa y altos estándares de acabado.
          </p>
        </div>

        {/* Visual */}
        <div className="scroll-reveal delay-2 relative hidden md:block">
          <div className="aspect-[4/5] bg-roiba-verde relative overflow-hidden">
            <div className="absolute inset-6 border border-roiba-dorado/[0.15] flex items-center justify-center">
              <Image
                src="/images/logo-white.png"
                alt="Grupo Roiba"
                width={220}
                height={100}
                className="w-3/5 max-w-[220px] h-auto opacity-90"
              />
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-[100px] h-[100px] bg-roiba-dorado/15 -z-10" />
        </div>
      </div>
    </section>
  )
}
