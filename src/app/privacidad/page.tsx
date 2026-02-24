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
            Última actualización: Febrero 2026
          </p>

          <div className="space-y-10">

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">1. Responsable del Tratamiento</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                En cumplimiento de la <strong>Ley 172-13 sobre Protección de Datos Personales de la República Dominicana</strong> y del artículo 44 de la Constitución dominicana, le informamos que el responsable del tratamiento de sus datos personales es:
              </p>
              <div className="mt-4 p-5 bg-roiba-arena-light border border-roiba-verde/10 space-y-2">
                <p className="text-body text-roiba-verde/70"><strong className="text-roiba-verde">Razón social:</strong> Grupo Roiba, S.R.L.</p>
                <p className="text-body text-roiba-verde/70"><strong className="text-roiba-verde">Actividad:</strong> Construcción y dirección técnica de proyectos residenciales</p>
                <p className="text-body text-roiba-verde/70"><strong className="text-roiba-verde">Domicilio:</strong> Punta Cana, Higüey, La Altagracia, República Dominicana</p>
                <p className="text-body text-roiba-verde/70"><strong className="text-roiba-verde">Correo electrónico:</strong>{' '}
                  <a href="mailto:info@gruporoiba.com" className="text-roiba-dorado hover:text-roiba-verde transition-colors">
                    info@gruporoiba.com
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">2. Datos Personales que Recopilamos</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed mb-4">
                Grupo Roiba recopila únicamente los datos personales que usted nos proporciona de manera voluntaria a través de los formularios de contacto disponibles en este sitio web. Los datos que podemos tratar incluyen:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-roiba-verde/70 leading-relaxed">
                <li>Nombre y apellidos</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono de contacto</li>
                <li>País o ciudad de residencia</li>
                <li>Información sobre el proyecto o servicio solicitado</li>
                <li>Cualquier otra información que usted decida facilitarnos en su mensaje</li>
              </ul>
              <p className="text-body text-roiba-verde/70 leading-relaxed mt-4">
                No recopilamos datos especialmente protegidos (salud, ideología, religión, origen racial) ni datos de menores de edad. No realizamos tratamiento de datos de manera automatizada que produzca efectos significativos sobre los interesados.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">3. Base Legal del Tratamiento</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed mb-4">
                El tratamiento de sus datos personales se realiza bajo las siguientes bases legales contempladas en la Ley 172-13:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-roiba-verde/70 leading-relaxed">
                <li><strong>Consentimiento del interesado:</strong> cuando envía un formulario de contacto o solicita información sobre nuestros servicios.</li>
                <li><strong>Ejecución de un contrato o precontrato:</strong> cuando sus datos son necesarios para atender una solicitud de presupuesto o formalizar una relación contractual.</li>
                <li><strong>Interés legítimo:</strong> para el mantenimiento de comunicaciones comerciales con personas que han manifestado interés en nuestros servicios.</li>
                <li><strong>Cumplimiento de obligaciones legales:</strong> cuando la normativa dominicana nos obligue a conservar o comunicar determinados datos.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">4. Finalidad del Tratamiento</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed mb-4">
                Sus datos personales serán tratados con las siguientes finalidades:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-roiba-verde/70 leading-relaxed">
                <li>Gestionar y dar respuesta a su consulta o solicitud de información</li>
                <li>Elaborar y remitir presupuestos o propuestas técnicas solicitadas</li>
                <li>Enviarle información sobre nuestros servicios de construcción y proyectos cuando haya prestado su consentimiento</li>
                <li>Cumplir con las obligaciones contractuales derivadas de la prestación de nuestros servicios</li>
                <li>Mejorar la calidad de nuestro servicio y la experiencia del usuario en este sitio web</li>
              </ul>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">5. Destinatarios de los Datos</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Grupo Roiba no vende, alquila ni cede sus datos personales a terceros con fines comerciales. Únicamente podremos comunicar sus datos a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-roiba-verde/70 leading-relaxed mt-4">
                <li><strong>Proveedores de servicios tecnológicos</strong> que actúan como encargados del tratamiento (alojamiento web, plataformas de correo electrónico), siempre bajo acuerdo de confidencialidad.</li>
                <li><strong>Asesores jurídicos o notariales</strong> cuando sea necesario para la formalización de contratos o el cumplimiento de obligaciones legales.</li>
                <li><strong>Autoridades públicas dominicanas</strong> cuando la normativa vigente así lo exija.</li>
              </ul>
              <p className="text-body text-roiba-verde/70 leading-relaxed mt-4">
                No realizamos transferencias internacionales de datos fuera de la República Dominicana salvo cuando sea necesario para la prestación del servicio y siempre con las garantías adecuadas.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">6. Plazo de Conservación</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Sus datos serán conservados durante el tiempo necesario para la gestión de su consulta y, en caso de formalización de una relación contractual, durante toda la vigencia del contrato y los plazos legales de prescripción aplicables bajo la legislación dominicana. Los datos tratados con base en su consentimiento serán eliminados cuando usted retire dicho consentimiento. Los datos necesarios para el cumplimiento de obligaciones contables, fiscales o legales se conservarán durante los plazos exigidos por la normativa de la República Dominicana.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">7. Sus Derechos</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed mb-4">
                De conformidad con la Ley 172-13 y la Constitución de la República Dominicana, usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside space-y-2 text-body text-roiba-verde/70 leading-relaxed">
                <li><strong>Acceso:</strong> conocer qué datos personales tratamos sobre usted.</li>
                <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
                <li><strong>Supresión (derecho al olvido):</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
                <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos para determinadas finalidades.</li>
                <li><strong>Limitación del tratamiento:</strong> solicitar que suspendamos el tratamiento de sus datos mientras se resuelve una controversia.</li>
                <li><strong>Portabilidad:</strong> recibir sus datos en un formato estructurado y legible por máquina.</li>
                <li><strong>Revocación del consentimiento:</strong> retirar su consentimiento en cualquier momento, sin efecto retroactivo.</li>
              </ul>
              <p className="text-body text-roiba-verde/70 leading-relaxed mt-4">
                Para ejercer cualquiera de estos derechos, puede contactarnos en{' '}
                <a href="mailto:info@gruporoiba.com" className="text-roiba-dorado hover:text-roiba-verde transition-colors">
                  info@gruporoiba.com
                </a>{' '}
                indicando en el asunto &ldquo;Ejercicio de derechos — Ley 172-13&rdquo; y adjuntando una copia de su documento de identidad. Le responderemos en un plazo máximo de 30 días hábiles.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">8. Medidas de Seguridad</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Grupo Roiba ha implementado las medidas técnicas y organizativas necesarias para garantizar la seguridad de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos almacenados y los riesgos inherentes a su tratamiento. Entre estas medidas se incluyen: cifrado de las comunicaciones mediante protocolo HTTPS, acceso restringido a los datos mediante autenticación segura, acuerdos de confidencialidad con los encargados del tratamiento y auditorías periódicas de seguridad.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">9. Modificaciones de esta Política</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Grupo Roiba se reserva el derecho de actualizar esta Política de Privacidad para adaptarla a cambios legislativos, jurisprudenciales o de las prácticas del sector. Le recomendamos consultar esta página periódicamente. La fecha de la última actualización figura al inicio del documento. En caso de cambios sustanciales que afecten a sus derechos, se lo notificaremos por los medios que correspondan.
              </p>
            </div>

            <div>
              <h2 className="text-heading font-serif text-roiba-verde mb-4">10. Reclamaciones</h2>
              <div className="w-8 h-px bg-roiba-dorado/40 mb-4" />
              <p className="text-body text-roiba-verde/70 leading-relaxed">
                Si considera que el tratamiento de sus datos no se ajusta a la normativa vigente, puede presentar una reclamación ante el <strong>Instituto Dominicano de las Telecomunicaciones (INDOTEL)</strong>, autoridad de supervisión competente en materia de protección de datos personales en la República Dominicana, con sede en Santo Domingo, o dirigirse a los tribunales competentes de La Altagracia. Sin perjuicio de ello, le invitamos a contactarnos previamente en{' '}
                <a href="mailto:info@gruporoiba.com" className="text-roiba-dorado hover:text-roiba-verde transition-colors">
                  info@gruporoiba.com
                </a>{' '}
                para intentar resolver cualquier discrepancia de manera amistosa.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
