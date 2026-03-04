import Image from 'next/image'

interface AboutData {
  title?: string
  paragraph1?: string
  paragraph2?: string
}

export default function AboutSection({ dbAbout }: { dbAbout?: AboutData }) {
  return (
    <section className="py-[clamp(80px,10vw,140px)] px-[clamp(24px,8vw,120px)] bg-roiba-arena-light">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
        {/* Text */}
        <div>
          <span className="scroll-reveal block font-sans text-micro font-semibold tracking-[0.3em] uppercase text-roiba-dorado mb-4">
            Sobre Grupo Roiba
          </span>
          <h2 className="scroll-reveal delay-1 font-serif text-[clamp(32px,4vw,52px)] font-normal leading-[1.15] text-roiba-verde mb-8">
            Ingeniería aplicada a proyectos
            <br />
            <span className="italic text-roiba-dorado">residenciales de alto nivel</span>
          </h2>
          <div className="scroll-reveal delay-2 w-12 h-0.5 bg-roiba-dorado mb-8" />
          <p className="scroll-reveal delay-3 font-sans text-sm leading-[1.85] text-slate-500 mb-5">
            {dbAbout?.paragraph1 || 'Grupo Roiba es una firma de servicios técnicos especializados para proyectos residenciales de alta gama en el Caribe. Ofrecemos dirección técnica independiente, supervisión de obra, gestión integral de proyecto y construcción llave en mano.'}
          </p>
          <p className="scroll-reveal delay-4 font-sans text-sm leading-[1.85] text-slate-500">
            {dbAbout?.paragraph2 || 'Nuestro modelo combina la experiencia técnica de profesionales con más de 20 años en proyectos residenciales y hoteleros en España y República Dominicana, con un enfoque de trabajo directo: cada proyecto está supervisado personalmente por los fundadores.'}
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
