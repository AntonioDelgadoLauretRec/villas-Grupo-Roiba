'use client'

import { FC } from 'react'
import Image from 'next/image'

const PRIVILEGES = [
  {
    id: 'golf',
    title: 'Sede del PGA Tour',
    subtitle: 'Golf de Clase Mundial',
    description: 'Corales Puntacana Championship. Acceso a campos diseñados por Jack Nicklaus, Tom Fazio y P.B. Dye.',
    image: '/images/privileges/golf.jpg',
    size: 'large',
  },
  {
    id: 'marina',
    title: 'Capital del Marlin Azul',
    subtitle: 'Náutica Premium',
    description: 'Marina Cap Cana: la marina más grande del Caribe. Certificación Blue Flag.',
    image: '/images/privileges/marina.jpg',
    size: 'medium',
  },
  {
    id: 'ecuestre',
    title: 'Los Establos & Polo',
    subtitle: 'Cultura Ecuestre',
    description: 'Instalaciones ecuestres de primer nivel para salto, doma y polo.',
    image: '/images/privileges/ecuestre.jpg',
    size: 'medium',
  },
  {
    id: 'fbo',
    title: 'Llegada sin Esperas',
    subtitle: 'FBO Privado',
    description: 'Terminal de aviación privada. De su jet a su villa en 15 minutos.',
    image: '/images/privileges/fbo.jpg',
    size: 'small',
  },
  {
    id: 'beach',
    title: 'Playas Privadas',
    subtitle: 'Exclusividad Total',
    description: 'Acceso a las mejores playas del Caribe con servicios de concierge.',
    image: '/images/privileges/beach.jpg',
    size: 'small',
  },
]

export const WhyPuntaCana: FC = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container-editorial">
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado mb-4 block">
            El Destino
          </span>
          <h2 className="text-display-md md:text-display-lg font-serif text-roiba-verde mb-6">
            The Punta Cana Privileges
          </h2>
          <p className="text-body-lg text-roiba-verde/70 font-light">
            No solo una inversión inmobiliaria. Un estilo de vida diseñado para quienes 
            exigen lo extraordinario.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large card - Golf */}
          <div className="col-span-12 lg:col-span-7 group">
            <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-roiba-verde/5">
              <Image
                src={PRIVILEGES[0].image}
                alt={PRIVILEGES[0].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/90 via-roiba-verde/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado-light mb-2 block">
                  {PRIVILEGES[0].subtitle}
                </span>
                <h3 className="text-heading md:text-display-md font-serif text-roiba-arena mb-3">
                  {PRIVILEGES[0].title}
                </h3>
                <p className="text-body text-roiba-arena/80 max-w-md">
                  {PRIVILEGES[0].description}
                </p>
              </div>
            </div>
          </div>

          {/* Medium cards column */}
          <div className="col-span-12 lg:col-span-5 flex flex-col gap-4 md:gap-6">
            {/* Marina */}
            <div className="group flex-1">
              <div className="relative h-[200px] md:h-[238px] overflow-hidden bg-roiba-verde/5">
                <Image
                  src={PRIVILEGES[1].image}
                  alt={PRIVILEGES[1].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/80 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="text-micro font-sans tracking-widest uppercase text-roiba-dorado-light/80 block mb-1">
                    {PRIVILEGES[1].subtitle}
                  </span>
                  <h3 className="text-subheading font-serif text-roiba-arena">
                    {PRIVILEGES[1].title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Ecuestre */}
            <div className="group flex-1">
              <div className="relative h-[200px] md:h-[238px] overflow-hidden bg-roiba-verde/5">
                <Image
                  src={PRIVILEGES[2].image}
                  alt={PRIVILEGES[2].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/80 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <span className="text-micro font-sans tracking-widest uppercase text-roiba-dorado-light/80 block mb-1">
                    {PRIVILEGES[2].subtitle}
                  </span>
                  <h3 className="text-subheading font-serif text-roiba-arena">
                    {PRIVILEGES[2].title}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Small cards row */}
          <div className="col-span-12 sm:col-span-6 group">
            <div className="relative h-[200px] overflow-hidden bg-roiba-verde/5">
              <Image
                src={PRIVILEGES[3].image}
                alt={PRIVILEGES[3].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/80 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="text-micro font-sans tracking-widest uppercase text-roiba-dorado-light/80 block mb-1">
                  {PRIVILEGES[3].subtitle}
                </span>
                <h3 className="text-subheading font-serif text-roiba-arena">
                  {PRIVILEGES[3].title}
                </h3>
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-6 group">
            <div className="relative h-[200px] overflow-hidden bg-roiba-verde/5">
              <Image
                src={PRIVILEGES[4].image}
                alt={PRIVILEGES[4].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-roiba-verde/80 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <span className="text-micro font-sans tracking-widest uppercase text-roiba-dorado-light/80 block mb-1">
                  {PRIVILEGES[4].subtitle}
                </span>
                <h3 className="text-subheading font-serif text-roiba-arena">
                  {PRIVILEGES[4].title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 md:mt-20 pt-16 border-t border-roiba-verde/10">
          {[
            { value: '340', label: 'Días de sol al año' },
            { value: '15', label: 'Min. al aeropuerto' },
            { value: '8-12%', label: 'ROI proyectado' },
            { value: '0%', label: 'Impuesto transferencia*' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center md:text-left">
              <p className="text-display-md font-serif text-roiba-verde mb-2">
                {stat.value}
              </p>
              <p className="text-caption text-roiba-verde/60">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
        
        <p className="text-micro text-roiba-verde/40 mt-4">
          *Bajo régimen Confotur. Consulte condiciones.
        </p>
      </div>
    </section>
  )
}
