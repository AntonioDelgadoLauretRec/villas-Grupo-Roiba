import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Grupo Roiba',
}

export default function PrivacidadPage() {
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
            Política de Privacidad
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
              <h2 className="text-heading font-serif text-roiba-verde mb-4">1. Responsable del Tratamiento</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Grupo Roiba es responsable del tratamiento de sus datos personales.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">2. Datos que Recopilamos</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Recopilamos información que usted nos proporciona directamente: nombre, email, teléfono y capacidad de inversión.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">3. Finalidad</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Sus datos serán utilizados exclusivamente para gestionar su consulta y enviarle información sobre oportunidades de inversión.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">4. Sus Derechos</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Puede ejercer sus derechos de acceso, rectificación, supresión y portabilidad escribiendo a{' '}
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
