import { Metadata } from 'next'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto | Solicitar Análisis',
  description: 'Contacte con Grupo Roiba para solicitar un análisis personalizado de inversión. Respuesta en 24-48 horas hábiles.',
}

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-roiba-verde">
        <div className="container-editorial">
          <div className="max-w-3xl">
            <span className="text-micro font-sans font-medium tracking-widest uppercase text-roiba-dorado-light mb-4 block">
              Primer Paso
            </span>
            <h1 className="text-display-lg md:text-display-xl font-serif text-roiba-arena mb-6">
              Hablemos de su Proyecto
            </h1>
            <p className="text-body-lg text-roiba-arena/70 font-light">
              Complete el formulario y nuestro equipo preparará un análisis inicial 
              adaptado a sus objetivos de inversión. Sin compromiso.
            </p>
          </div>
        </div>
      </section>
      
      {/* Form Section */}
      <section className="py-16 md:py-24 bg-roiba-arena">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Info Column */}
            <div className="lg:col-span-5">
              <h2 className="text-heading font-serif text-roiba-verde mb-6">
                ¿Qué incluye el análisis?
              </h2>
              
              <div className="space-y-6 mb-12">
                {[
                  {
                    title: 'Evaluación de viabilidad',
                    description: 'Análisis de opciones según su presupuesto y objetivos.',
                  },
                  {
                    title: 'Opciones de terreno',
                    description: 'Selección de parcelas disponibles que cumplan sus criterios.',
                  },
                  {
                    title: 'Proyección financiera',
                    description: 'Estimación de costos, tiempos y rentabilidad esperada.',
                  },
                  {
                    title: 'Estructura fiscal',
                    description: 'Optimización bajo régimen Confotur y otras ventajas fiscales.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 flex-shrink-0 rounded-full bg-roiba-verde/10 flex items-center justify-center">
                      <span className="text-caption font-medium text-roiba-dorado">
                        {idx + 1}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-body font-medium text-roiba-verde mb-1">
                        {item.title}
                      </h3>
                      <p className="text-caption text-roiba-verde/60">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 bg-white border-l-2 border-roiba-dorado mb-8">
                <p className="text-caption text-roiba-verde/60 mb-2">
                  Tiempo de respuesta
                </p>
                <p className="text-subheading font-serif text-roiba-verde">
                  24-48 horas hábiles
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-body font-medium text-roiba-verde">
                  Contacto directo
                </h3>
                <div className="space-y-2 text-caption text-roiba-verde/70">
                  <p>
                    <a href="mailto:inversiones@gruporoiba.com" className="hover:text-roiba-dorado transition-colors">
                      inversiones@gruporoiba.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+18095551234" className="hover:text-roiba-dorado transition-colors">
                      +1 (809) 555-1234
                    </a>
                  </p>
                  <p>Punta Cana, República Dominicana</p>
                </div>
              </div>
            </div>
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10 shadow-sm">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
