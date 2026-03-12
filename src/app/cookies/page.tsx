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
            Última actualización: Marzo 2026
          </p>

          <div className="space-y-10">

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">¿Qué son las cookies?</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Las cookies son pequeños archivos de texto que los sitios web almacenan en su dispositivo (ordenador, teléfono, tablet) cuando los visita. Sirven para que el sitio web recuerde información sobre su visita, como el idioma preferido o sus ajustes de navegación. Esto puede facilitar su próxima visita y hacer que el sitio le resulte más útil.
              </p>
              <p className="text-body text-roiba-verde/70 leading-relaxed mt-4">
                En la República Dominicana, el uso de cookies en sitios web está regulado por la <strong>Ley 126-02 sobre Comercio Electrónico, Documentos y Firmas Digitales</strong> y complementado por los principios de la <strong>Ley 172-13 sobre Protección de Datos Personales</strong>. En virtud de estas normas, le informamos detalladamente sobre las cookies que utilizamos y le otorgamos el control sobre las mismas.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">Tipos de Cookies que Utilizamos</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <div className="space-y-6">

                <div className="p-5 bg-roiba-arena-light border border-roiba-verde/10">
                  <h3 className="text-subheading font-serif text-roiba-verde mb-2">Cookies Técnicas o Estrictamente Necesarias</h3>
                  <p className="text-body text-roiba-verde/70 leading-relaxed mb-3">
                    Son imprescindibles para el funcionamiento básico del sitio web. Sin estas cookies, el sitio no puede funcionar correctamente. No requieren su consentimiento.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-caption text-roiba-verde/70">
                      <thead>
                        <tr className="border-b border-roiba-verde/10">
                          <th className="text-left py-2 pr-4 font-semibold text-roiba-verde">Cookie</th>
                          <th className="text-left py-2 pr-4 font-semibold text-roiba-verde">Propósito</th>
                          <th className="text-left py-2 font-semibold text-roiba-verde">Duración</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-roiba-verde/5">
                          <td className="py-2 pr-4">session_id</td>
                          <td className="py-2 pr-4">Mantiene la sesión del usuario durante la navegación</td>
                          <td className="py-2">Sesión</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">cookie_consent</td>
                          <td className="py-2 pr-4">Almacena las preferencias de cookies del usuario</td>
                          <td className="py-2">1 año</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-5 bg-roiba-arena-light border border-roiba-verde/10">
                  <h3 className="text-subheading font-serif text-roiba-verde mb-2">Cookies Analíticas o de Medición</h3>
                  <p className="text-body text-roiba-verde/70 leading-relaxed mb-3">
                    Nos permiten contar las visitas y las fuentes de tráfico para medir y mejorar el rendimiento del sitio. Nos ayudan a saber qué páginas son las más y las menos populares y cómo se mueven los visitantes por el sitio. Toda información que recogen es agregada y, por tanto, anónima. Requieren su consentimiento.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-caption text-roiba-verde/70">
                      <thead>
                        <tr className="border-b border-roiba-verde/10">
                          <th className="text-left py-2 pr-4 font-semibold text-roiba-verde">Cookie</th>
                          <th className="text-left py-2 pr-4 font-semibold text-roiba-verde">Proveedor</th>
                          <th className="text-left py-2 font-semibold text-roiba-verde">Duración</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-roiba-verde/5">
                          <td className="py-2 pr-4">_ga</td>
                          <td className="py-2 pr-4">Google Analytics — distingue usuarios únicos</td>
                          <td className="py-2">2 años</td>
                        </tr>
                        <tr className="border-b border-roiba-verde/5">
                          <td className="py-2 pr-4">_ga_*</td>
                          <td className="py-2 pr-4">Google Analytics — mantiene el estado de sesión</td>
                          <td className="py-2">2 años</td>
                        </tr>
                        <tr>
                          <td className="py-2 pr-4">_gid</td>
                          <td className="py-2 pr-4">Google Analytics — distingue usuarios por día</td>
                          <td className="py-2">24 horas</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-5 bg-roiba-arena-light border border-roiba-verde/10">
                  <h3 className="text-subheading font-serif text-roiba-verde mb-2">Cookies de Google Maps</h3>
                  <p className="text-body text-roiba-verde/70 leading-relaxed mb-3">
                    Este sitio web incorpora mapas de Google Maps para mostrar la ubicación de nuestros proyectos. El uso de este servicio puede implicar la instalación de cookies propias de Google. Para más información sobre las cookies de Google, puede consultar la{' '}
                    <a
                      href="https://policies.google.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-roiba-dorado hover:text-roiba-verde transition-colors"
                    >
                      Política de Privacidad de Google
                    </a>.
                  </p>
                </div>

              </div>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">Gestión y Desactivación de Cookies</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed mb-4">
                Puede configurar su navegador para aceptar o rechazar todas las cookies, o para recibir una notificación cada vez que se envíe una cookie. Tenga en cuenta que si rechaza o elimina las cookies técnicas necesarias, es posible que no pueda utilizar todas las funciones de nuestro sitio web. A continuación le indicamos cómo gestionar las cookies en los principales navegadores:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-roiba-verde/70 leading-relaxed">
                <li>
                  <strong>Google Chrome:</strong> Configuración → Privacidad y seguridad → Cookies y otros datos de sitios
                </li>
                <li>
                  <strong>Mozilla Firefox:</strong> Opciones → Privacidad y seguridad → Cookies y datos del sitio
                </li>
                <li>
                  <strong>Safari:</strong> Preferencias → Privacidad → Gestionar datos de sitios web
                </li>
                <li>
                  <strong>Microsoft Edge:</strong> Configuración → Privacidad, búsqueda y servicios → Cookies
                </li>
                <li>
                  <strong>Opera:</strong> Configuración → Avanzado → Privacidad y seguridad → Configuración del sitio → Cookies
                </li>
              </ul>
              <p className="text-body text-roiba-verde/70 leading-relaxed mt-4">
                Para dispositivos móviles, puede gestionar las cookies desde los ajustes de privacidad del navegador instalado en su dispositivo (Safari en iOS, Chrome en Android, etc.).
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">Actualizaciones de esta Política</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Grupo Roiba puede actualizar esta Política de Cookies cuando sea necesario, por ejemplo al añadir nuevas funcionalidades al sitio web que requieran el uso de nuevas cookies, o cuando cambie la legislación aplicable. Le recomendamos consultar esta página periódicamente para mantenerse informado sobre cualquier cambio. La fecha de la última revisión figura al inicio del documento.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">Contacto</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Si tiene alguna pregunta sobre nuestra Política de Cookies o sobre cómo tratamos sus datos personales en relación con las cookies, puede contactarnos en:{' '}
                <a href="mailto:info@gruporoiba.com" className="text-roiba-dorado hover:text-roiba-verde transition-colors">
                  info@gruporoiba.com
                </a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
