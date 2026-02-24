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
            Última actualización: Febrero 2026
          </p>

          <div className="space-y-10">

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">1. Objeto y Aceptación</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Los presentes Términos de Uso regulan el acceso y la utilización del sitio web de Grupo Roiba, S.R.L. (en adelante, &ldquo;Grupo Roiba&rdquo; o &ldquo;la Empresa&rdquo;), empresa especializada en construcción y dirección técnica de proyectos residenciales en la República Dominicana, con domicilio en Punta Cana, La Altagracia.
              </p>
              <p className="text-body text-roiba-verde/70 leading-relaxed mt-4">
                El acceso y la navegación por este sitio web implica la aceptación plena y sin reservas de los presentes Términos de Uso. Si no está de acuerdo con alguna de las condiciones aquí establecidas, le rogamos que se abstenga de utilizar este sitio web. La Empresa se reserva el derecho de modificar estos términos en cualquier momento, siendo publicada la versión actualizada en esta misma página con indicación de la fecha de revisión.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">2. Condiciones de Acceso y Uso del Sitio Web</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed mb-4">
                El usuario se compromete a utilizar el sitio web de conformidad con la legislación vigente de la República Dominicana, los presentes Términos de Uso y las buenas costumbres y el orden público. Queda expresamente prohibido:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-roiba-verde/70 leading-relaxed">
                <li>Utilizar el sitio web con fines ilícitos, lesivos o contrarios a la buena fe.</li>
                <li>Introducir virus, troyanos, gusanos o cualquier otro programa malicioso que pueda dañar los sistemas informáticos de Grupo Roiba o de terceros.</li>
                <li>Intentar acceder a áreas restringidas del sitio web o a los sistemas de la Empresa sin autorización.</li>
                <li>Reproducir, distribuir o comunicar públicamente los contenidos de este sitio web sin el consentimiento previo y por escrito de Grupo Roiba.</li>
                <li>Utilizar el sitio web para enviar comunicaciones comerciales no solicitadas (spam).</li>
                <li>Recopilar datos personales de otros usuarios del sitio web.</li>
              </ul>
              <p className="text-body text-roiba-verde/70 leading-relaxed mt-4">
                El incumplimiento de cualquiera de las condiciones anteriores podrá conllevar la retirada del acceso al sitio web y las acciones legales que procedan conforme a la legislación dominicana.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">3. Propiedad Intelectual e Industrial</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Todo el contenido de este sitio web —incluyendo, a título enunciativo y no limitativo, textos, fotografías, renders arquitectónicos, gráficos, logotipos, iconos, software, bases de datos y diseño gráfico— es propiedad exclusiva de Grupo Roiba, S.R.L. o de terceros que han autorizado su uso, y está protegido por las leyes de propiedad intelectual e industrial vigentes en la República Dominicana y por los tratados internacionales aplicables.
              </p>
              <p className="text-body text-roiba-verde/70 leading-relaxed mt-4">
                Queda expresamente prohibida la reproducción total o parcial de los contenidos de este sitio, su distribución, comunicación pública, transformación o cualquier otra forma de explotación sin el consentimiento previo y por escrito de Grupo Roiba. El incumplimiento de esta prohibición constituirá una infracción de los derechos de propiedad intelectual e industrial de la Empresa, que podrá dar lugar a las acciones civiles y penales previstas en la legislación dominicana.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">4. Exactitud de la Información y Limitación de Responsabilidad</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed mb-4">
                Grupo Roiba realiza sus mejores esfuerzos para garantizar que la información publicada en este sitio web sea precisa y esté actualizada. No obstante, la Empresa no garantiza la exactitud, integridad o actualización de los contenidos publicados y declina toda responsabilidad por los daños o perjuicios que pudieran derivarse de:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-roiba-verde/70 leading-relaxed">
                <li>La utilización de la información contenida en el sitio web para la toma de decisiones sin verificación previa con la Empresa.</li>
                <li>Las interrupciones, errores o problemas técnicos que puedan afectar a la disponibilidad del sitio web.</li>
                <li>Los ataques informáticos o accesos no autorizados que escapen del control razonable de Grupo Roiba.</li>
              </ul>
              <p className="text-body text-roiba-verde/70 leading-relaxed mt-4">
                <strong>Nota sobre visualizaciones arquitectónicas:</strong> Las imágenes, renders y visualizaciones mostradas en este sitio web son recreaciones conceptuales de proyectos arquitectónicos. Los acabados finales, materiales, dimensiones, paisajismo y entorno real pueden diferir de las representaciones gráficas. En ningún caso las imágenes publicadas constituyen una oferta contractual vinculante. Para especificaciones técnicas definitivas, el usuario deberá solicitar la documentación oficial del proyecto.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">5. Cookies y Tecnologías de Seguimiento</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Este sitio web utiliza cookies y tecnologías similares para mejorar la experiencia del usuario y para obtener información estadística sobre el uso del sitio. Para obtener información detallada sobre las cookies que utilizamos, su finalidad y cómo puede gestionarlas, consulte nuestra{' '}
                <a href="/cookies" className="text-roiba-dorado hover:text-roiba-verde transition-colors">Política de Cookies</a>.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">6. Protección de Datos Personales</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                El tratamiento de los datos personales que el usuario facilite a través de los formularios de este sitio web se realizará conforme a lo establecido en la Ley 172-13 sobre Protección de Datos Personales de la República Dominicana y en nuestra{' '}
                <a href="/privacidad" className="text-roiba-dorado hover:text-roiba-verde transition-colors">Política de Privacidad</a>,
                {' '}que forma parte integrante de estos Términos de Uso y a la que el usuario deberá prestar su atención.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">7. Legislación Aplicable y Jurisdicción</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Los presentes Términos de Uso se rigen en todos sus extremos por las leyes de la República Dominicana, incluyendo sin limitación la Ley 126-02 sobre Comercio Electrónico, Documentos y Firmas Digitales, la Ley 172-13 sobre Protección de Datos Personales y demás normativa aplicable.
              </p>
              <p className="text-body text-roiba-verde/70 leading-relaxed mt-4">
                Para la resolución de cualquier controversia que pudiera derivarse del acceso o uso de este sitio web, las partes se someten expresamente a la jurisdicción de los Juzgados y Tribunales de la provincia de La Altagracia, República Dominicana, con renuncia expresa a cualquier otro fuero que pudiera corresponderles.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">8. Modificaciones y Actualizaciones</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Grupo Roiba se reserva el derecho de modificar, en cualquier momento y sin necesidad de previo aviso, la presentación, configuración, contenidos y condiciones de uso de este sitio web, incluyendo los presentes Términos de Uso. El usuario deberá leer atentamente los Términos de Uso en cada ocasión que acceda al sitio web, ya que estos pueden haber sido modificados desde su último acceso.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">9. Contacto</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Para cualquier consulta, reclamación o solicitud relacionada con el uso de este sitio web o con los presentes Términos de Uso, puede contactar con Grupo Roiba a través del correo electrónico:{' '}
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
