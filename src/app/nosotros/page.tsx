export default function NosotrosPage() {
  return (
    <main className="pt-20">
      <section className="bg-roiba-verde text-roiba-arena py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-serif mb-6">Sobre Grupo Roiba</h1>
          <p className="text-xl opacity-80">38 años construyendo confianza</p>
        </div>
      </section>
      <section className="py-20 px-6 bg-roiba-arena">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h2 className="text-3xl font-serif text-roiba-verde">Nuestra Historia</h2>
          <p className="text-roiba-verde/80">
            Grupo Roiba nace de la visión de crear un nuevo estándar en la construcción de villas de lujo en el Caribe. 
            Con más de tres décadas de experiencia en el sector inmobiliario español, expandimos nuestra operación 
            a República Dominicana para ofrecer a inversores internacionales la oportunidad de participar en uno 
            de los mercados más dinámicos de América.
          </p>
          <h2 className="text-3xl font-serif text-roiba-verde mt-12">Nuestros Valores</h2>
          <ul className="text-roiba-verde/80">
            <li><strong>Transparencia:</strong> Comunicación clara en cada fase del proyecto</li>
            <li><strong>Calidad:</strong> Materiales premium y acabados de primera</li>
            <li><strong>Control:</strong> Supervisión directa sin intermediarios</li>
            <li><strong>Confianza:</strong> Relaciones a largo plazo con nuestros clientes</li>
          </ul>
        </div>
      </section>
    </main>
  )
}
