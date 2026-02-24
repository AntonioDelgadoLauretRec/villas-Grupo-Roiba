import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Cookies | Grupo Roiba',
}

export default function CookiesPage() {
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
            Política de Cookies
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
              <h2 className="text-heading font-serif text-roiba-verde mb-4">¿Qué son las cookies?</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita nuestro sitio web.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">Cookies que utilizamos</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <div className="space-y-6">
                <div>
                  <h3 className="text-subheading font-serif text-roiba-verde mb-2">Cookies esenciales</h3>
                  <p className="text-body text-roiba-verde/70 leading-relaxed">
                    Necesarias para el funcionamiento básico del sitio. No requieren consentimiento.
                  </p>
                </div>
                <div>
                  <h3 className="text-subheading font-serif text-roiba-verde mb-2">Cookies analíticas</h3>
                  <p className="text-body text-roiba-verde/70 leading-relaxed">
                    Nos ayudan a entender cómo los visitantes interactúan con el sitio (Google Analytics).
                  </p>
                </div>
                <div>
                  <h3 className="text-subheading font-serif text-roiba-verde mb-2">Cookies de marketing</h3>
                  <p className="text-body text-roiba-verde/70 leading-relaxed">
                    Utilizadas para mostrar anuncios relevantes basados en sus intereses.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">Gestión de cookies</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Puede configurar su navegador para rechazar cookies o eliminar las existentes. Tenga en cuenta que esto puede afectar la funcionalidad del sitio.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">Contacto</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Para consultas sobre cookies:{' '}
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
