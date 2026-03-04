'use client'

const CERTIFICATIONS = [
  { name: 'ISO 9001', desc: 'Gestión de Calidad' },
  { name: 'ISO 14001', desc: 'Gestión Ambiental' },
  { name: 'BREEAM', desc: 'Sostenibilidad' },
  { name: 'LEED', desc: 'Eficiencia Energética' },
  { name: 'PMP', desc: 'Project Management' },
  { name: 'CTE', desc: 'Código Técnico' },
]

export default function Certifications() {
  return (
    <section className="py-14 md:py-20 bg-roiba-arena-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-roiba-dorado text-micro uppercase tracking-[0.2em] block mb-4">
            Estándares
          </span>
          <h2 className="text-display-md font-serif text-roiba-verde mb-4">
            Certificaciones y <span className="italic text-roiba-dorado">estándares</span>
          </h2>
          <p className="text-body-lg text-roiba-verde/60 max-w-xl mx-auto">
            Trabajamos conforme a las normativas y estándares de calidad más exigentes del sector.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="group flex flex-col items-center justify-center p-6 bg-white border border-roiba-verde/[0.06] rounded-sm transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:border-roiba-dorado/30"
            >
              {/* Seal icon */}
              <div className="w-16 h-16 rounded-full bg-roiba-verde/[0.04] flex items-center justify-center mb-4 group-hover:bg-roiba-dorado/10 transition-colors duration-500">
                <span className="font-serif text-lg font-semibold text-roiba-verde/30 group-hover:text-roiba-dorado transition-colors duration-500">
                  {cert.name.split(' ')[0]}
                </span>
              </div>
              <span className="font-sans text-xs font-semibold tracking-wider uppercase text-roiba-verde/70 text-center">
                {cert.name}
              </span>
              <span className="font-sans text-[10px] text-roiba-verde/40 mt-1 text-center">
                {cert.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
