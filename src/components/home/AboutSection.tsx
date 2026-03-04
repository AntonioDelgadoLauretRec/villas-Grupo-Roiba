import Image from 'next/image'

interface AboutData {
  title?: string
  paragraph1?: string
  paragraph2?: string
}

export default function AboutSection({ dbAbout }: { dbAbout?: AboutData }) {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-roiba-arena-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* Text */}
        <div>
          <span className="scroll-reveal block font-sans text-micro font-semibold tracking-[0.3em] uppercase text-roiba-dorado mb-4">
            Sobre Grupo Roiba
          </span>
          <h2 className="scroll-reveal delay-1 font-serif text-[clamp(28px,4vw,48px)] font-normal leading-[1.15] text-roiba-verde mb-6">
            Ingeniería aplicada a proyectos
            <br />
            <span className="italic text-roiba-dorado">residenciales de alto nivel</span>
          </h2>
          <div className="scroll-reveal delay-2 w-12 h-0.5 bg-roiba-dorado mb-6" />
          <p className="scroll-reveal delay-3 font-sans text-sm leading-[1.85] text-slate-500 mb-5">
            {dbAbout?.paragraph1 || 'Grupo Roiba es una firma de servicios técnicos especializados para proyectos residenciales de alta gama en el Caribe. Ofrecemos dirección técnica independiente, supervisión de obra, gestión integral de proyecto y construcción llave en mano.'}
          </p>
          <p className="scroll-reveal delay-4 font-sans text-sm leading-[1.85] text-slate-500">
            {dbAbout?.paragraph2 || 'Nuestro modelo combina la experiencia técnica de profesionales con más de 20 años en proyectos residenciales y hoteleros en España y República Dominicana, con un enfoque de trabajo directo: cada proyecto está supervisado personalmente por los fundadores.'}
          </p>
        </div>

        {/* Visual — White card with logo */}
        <div className="scroll-reveal delay-2 relative hidden md:block">
          <div className="aspect-[4/5] bg-white border border-roiba-arena-dark shadow-xl relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-6 border border-roiba-dorado/[0.1]" />
            <Image
              src="/images/LOGO_GRUPOROIBA_path1-5-9_Color.svg"
              alt="Grupo Roiba"
              width={220}
              height={100}
              className="w-3/5 max-w-[220px] h-auto relative z-10"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-[100px] h-[100px] bg-roiba-dorado/10 -z-10" />
        </div>
      </div>
    </section>
  )
}
