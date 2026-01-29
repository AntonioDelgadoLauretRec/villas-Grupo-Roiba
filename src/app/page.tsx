export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F4EBD0]">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-[#122620] text-[#F4EBD0]">
        <div className="text-center px-6">
          <p className="text-sm tracking-[0.3em] uppercase mb-4 text-[#B68D40]">
            Grupo Roiba
          </p>
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Construcción Boutique
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-2xl mx-auto mb-8">
            Villas de lujo en Punta Cana. Control total del proceso.
            Sin intermediarios. Sin sorpresas.
          </p>
          <a 
            href="#contacto"
            className="inline-block bg-[#B68D40] text-[#122620] px-8 py-4 font-medium hover:bg-[#FFCC53] transition-colors"
          >
            Solicitar Análisis
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-[#122620] mb-6">
            The Roiba Method
          </h2>
          <p className="text-lg text-[#122620]/70 leading-relaxed">
            Cada villa es un proyecto único, supervisado personalmente 
            desde la selección del terreno hasta la entrega de llaves.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="py-24 px-6 bg-[#122620]">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-[#F4EBD0] mb-6">
            Hablemos
          </h2>
          <p className="text-[#F4EBD0]/70 mb-8">
            inversiones@gruporoiba.com
          </p>
          <p className="text-[#B68D40]">
            +1 (809) 555-1234
          </p>
        </div>
      </section>
    </main>
  )
}
