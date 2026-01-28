import { Navbar, Hero, FeaturedVillas, Footer } from '@/components/sections'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedVillas />
        
        {/* Why Punta Cana Section */}
        <section className="section bg-arena">
          <div className="container-wide">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-serif text-heading-1 text-carbon mb-4">
                ¿Por qué Invertir en Punta Cana?
              </h2>
              <p className="text-body-lg text-carbon/70">
                República Dominicana ofrece un entorno fiscal favorable, 
                estabilidad política y un mercado inmobiliario en constante crecimiento.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: '📈',
                  title: 'Rentabilidad Atractiva',
                  description:
                    'Rentabilidad neta proyectada del 6-10% anual en alquiler turístico.',
                },
                {
                  icon: '🏝️',
                  title: 'Destino Premium',
                  description:
                    '7 millones de turistas al año. Aeropuerto internacional con conexiones directas.',
                },
                {
                  icon: '⚖️',
                  title: 'Seguridad Jurídica',
                  description:
                    'Marco legal sólido para inversores extranjeros. Sin restricciones de propiedad.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white p-8 rounded-card shadow-card text-center"
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-serif text-heading-3 text-carbon mb-3">
                    {item.title}
                  </h3>
                  <p className="text-body text-carbon/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-oceano text-white">
          <div className="container-wide text-center">
            <h2 className="font-serif text-display-2 mb-4">
              ¿Listo para dar el siguiente paso?
            </h2>
            <p className="text-body-lg text-white/80 max-w-2xl mx-auto mb-8">
              Nuestro equipo de asesores está disponible para guiarle en 
              cada etapa del proceso de inversión.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contacto"
                className="btn btn-primary btn-lg"
              >
                Agendar Consulta
              </a>
              <a
                href="tel:+18095551234"
                className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-oceano"
              >
                +1 (809) 555-1234
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
