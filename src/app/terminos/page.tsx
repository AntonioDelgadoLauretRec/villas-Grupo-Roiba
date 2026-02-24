import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos de Uso | Grupo Roiba',
}

export default function TerminosPage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative bg-roiba-verde py-24 md:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-roiba-dorado uppercase tracking-[0.25em] text-micro font-medium mb-6">
            Legal
          </p>
          <h1 className="text-display-lg font-serif text-white mb-6">
            Términos de Uso
          </h1>
          <div className="w-16 h-px bg-roiba-dorado mx-auto" />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-caption text-roiba-verde/50 mb-10 uppercase tracking-widest font-medium">
            Última actualización: Enero 2026
          </p>

          <div className="space-y-10">
            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">1. Aceptación de Términos</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Al acceder y utilizar este sitio web, usted acepta estar sujeto a estos términos de uso.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">2. Uso del Sitio</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Este sitio web es propiedad de Grupo Roiba y está destinado a proporcionar información sobre nuestros servicios de construcción e inversión inmobiliaria.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">3. Propiedad Intelectual</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Todo el contenido de este sitio, incluyendo textos, gráficos, logos, imágenes y software, es propiedad de Grupo Roiba y está protegido por las leyes de propiedad intelectual.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">4. Limitación de Responsabilidad</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Las visualizaciones y renders mostrados son conceptualizaciones arquitectónicas y pueden variar del resultado final. Consulte los planos oficiales para especificaciones técnicas.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">5. Contacto</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Para cualquier consulta sobre estos términos, contacte a{' '}
                <a href="mailto:inversiones@gruporoiba.com" className="text-roiba-dorado hover:text-roiba-verde transition-colors">
                  inversiones@gruporoiba.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
