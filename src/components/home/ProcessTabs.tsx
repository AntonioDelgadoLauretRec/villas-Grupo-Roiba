'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { RevealWrapper } from '@/components/ui/RevealWrapper'
import type { ProcessStep } from '@/types/admin'

const PROCESS_ES = [
  { num: '01', title: 'Análisis de Terreno', subtitle: 'Seguridad jurídica en la adquisición', desc: 'La adquisición del terreno es el primer paso y uno de los más críticos del proyecto. Verificamos la situación legal de la propiedad antes de su adquisición, confirmando titularidad y detectando posibles cargas.', detail: 'Due diligence legal · Verificación de titularidad · Análisis de viabilidad', duration: '2-4 semanas' },
  { num: '02', title: 'Validación del Proyecto', subtitle: 'Viabilidad técnica y normativa', desc: 'Analizamos el proyecto desde un punto de vista técnico y urbanístico para asegurar su viabilidad antes de avanzar en el desarrollo. Evaluamos condicionantes del terreno y normativa aplicable.', detail: 'Estudio técnico · Normativa urbanística · Criterios constructivos', duration: '1-2 semanas' },
  { num: '03', title: 'Co-Diseño', subtitle: 'Arquitectura e interiorismo a medida', desc: 'Definimos el proyecto junto al cliente, adaptando la vivienda a sus necesidades, estilo de vida y objetivos de inversión. Cada proyecto es único y se desarrolla con un enfoque totalmente personalizado.', detail: 'Arquitectura · Interiorismo · Funcionalidad · Diseño personalizado', duration: '4-6 semanas' },
  { num: '04', title: 'Presupuesto Detallado', subtitle: 'Control económico desde el inicio', desc: 'Desarrollamos un presupuesto desglosado por partidas, que permite conocer el alcance real de la inversión antes del inicio de la obra, aportando transparencia y facilitando la toma de decisiones.', detail: 'Desglose por partidas · Cronograma financiero · Control de costes', duration: '1-2 semanas' },
  { num: '05', title: 'Construcción', subtitle: 'Ejecución bajo control técnico', desc: 'Ejecutamos la obra bajo un modelo basado en planificación rigurosa, supervisión continua y control de calidad en cada fase. El cliente dispone de información periódica sobre el avance.', detail: 'Supervisión continua · Control de calidad · Informes de avance', duration: '12-18 meses' },
  { num: '06', title: 'Roiba Care', subtitle: 'Gestión y mantenimiento post-entrega', desc: 'El proyecto no finaliza con la entrega. Ofrecemos un servicio de gestión y mantenimiento orientado a preservar el valor de la propiedad y garantizar su correcto funcionamiento a lo largo del tiempo.', detail: 'Mantenimiento · Supervisión · Gestión operativa · Informes periódicos', duration: 'Permanente' },
]

const PROCESS_EN = [
  { num: '01', title: 'Land Analysis', subtitle: 'Legal security in acquisition', desc: 'Land acquisition is the first and most critical step of the project. We verify the legal status of the property before purchase, confirming ownership and detecting potential encumbrances.', detail: 'Legal due diligence · Ownership verification · Feasibility analysis', duration: '2-4 weeks' },
  { num: '02', title: 'Project Validation', subtitle: 'Technical and regulatory feasibility', desc: 'We analyze the project from a technical and urban planning perspective to ensure feasibility before development. We evaluate site constraints and applicable regulations.', detail: 'Technical study · Urban regulations · Construction criteria', duration: '1-2 weeks' },
  { num: '03', title: 'Co-Design', subtitle: 'Bespoke architecture and interiors', desc: 'We define the project with the client, adapting the home to their needs, lifestyle and investment goals. Each project is unique and developed with a fully personalized approach.', detail: 'Architecture · Interior design · Functionality · Custom design', duration: '4-6 weeks' },
  { num: '04', title: 'Detailed Budget', subtitle: 'Economic control from the start', desc: 'We develop an itemized budget that allows you to understand the true scope of the investment before construction begins, providing transparency and facilitating decision-making.', detail: 'Itemized breakdown · Financial schedule · Cost control', duration: '1-2 weeks' },
  { num: '05', title: 'Construction', subtitle: 'Execution under technical control', desc: 'We execute construction under a model based on rigorous planning, continuous supervision and quality control at every phase. The client receives periodic progress reports.', detail: 'Continuous supervision · Quality control · Progress reports', duration: '12-18 months' },
  { num: '06', title: 'Roiba Care', subtitle: 'Post-delivery management and maintenance', desc: 'The project doesn\'t end with delivery. We offer a management and maintenance service designed to preserve property value and ensure proper functioning over time.', detail: 'Maintenance · Supervision · Operational management · Periodic reports', duration: 'Permanent' },
]

export default function ProcessTabs({ dbSteps }: { dbSteps?: ProcessStep[] }) {
  const { locale, t } = useLanguage()
  const DEFAULT_PROCESS = locale === 'en' ? PROCESS_EN : PROCESS_ES

  const PROCESS = dbSteps
    ? dbSteps.map(s => ({ num: s.num, title: s.title, subtitle: s.subtitle, desc: s.description, detail: s.detail, duration: s.duration }))
    : DEFAULT_PROCESS
  const [active, setActive] = useState(0)
  const step = PROCESS[active]

  return (
    <section id="proceso" className="py-12 md:py-16 px-4 md:px-8 lg:px-16 bg-roiba-verde relative overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 -right-[5%] w-[400px] h-[400px] border border-white/[0.04] rounded-full -translate-y-1/2" />

      <div className="max-w-[1200px] mx-auto relative z-[2]">
        <RevealWrapper variant="fade-up" className="text-center mb-16 md:mb-[72px]">
          <span className="block font-sans text-micro font-semibold tracking-[0.3em] uppercase text-roiba-dorado mb-4">
            {t.process.eyebrow}
          </span>
          <h2 className="font-serif text-[clamp(32px,4vw,48px)] font-normal text-white">
            {t.process.title}{' '}
            <span className="italic text-roiba-dorado-light">{t.process.titleAccent}</span>
          </h2>
        </RevealWrapper>

        <RevealWrapper variant="fade-up" delay={200} className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-0 lg:gap-12">
          <div className="flex flex-col gap-1 process-tabs-row">
            {PROCESS.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 px-6 py-4 text-left w-full transition-all duration-400 border-l-[3px] ${
                  active === i
                    ? 'border-l-roiba-dorado bg-white/[0.06] active-tab'
                    : 'border-l-transparent hover:bg-white/[0.03]'
                }`}
              >
                <span className={`font-serif text-[28px] font-light min-w-[40px] transition-colors duration-400 ${active === i ? 'text-roiba-dorado-light' : 'text-white/20'}`}>
                  {s.num}
                </span>
                <div>
                  <div className={`font-sans text-[13px] font-semibold tracking-wide transition-colors duration-400 ${active === i ? 'text-white' : 'text-white/60'}`}>
                    {s.title}
                  </div>
                  <div className="font-sans text-[11px] text-white/40 mt-0.5">{s.subtitle}</div>
                </div>
              </button>
            ))}
          </div>

          <div key={active} className="bg-white/[0.07] backdrop-blur-sm border border-white/[0.08] p-8 md:p-12 flex flex-col justify-center animate-fade-in mt-6 lg:mt-0">
            <div className="flex items-baseline gap-5 mb-6">
              <span className="font-serif text-[64px] font-light text-roiba-dorado/30 leading-none">{step.num}</span>
              <div>
                <h3 className="font-serif text-[32px] font-medium text-white">{step.title}</h3>
                <span className="font-sans text-[11px] font-medium text-roiba-dorado tracking-wider uppercase">{step.subtitle}</span>
              </div>
            </div>

            <p className="font-sans text-sm leading-[1.85] text-white/65 mb-8">{step.desc}</p>

            <div className="py-4 px-5 bg-roiba-dorado/[0.08] border-l-2 border-roiba-dorado/40 mb-6">
              <span className="font-sans text-[11px] font-semibold tracking-wider uppercase text-roiba-dorado block mb-1.5">{t.process.deliverables}</span>
              <span className="font-sans text-[13px] text-white/50">{step.detail}</span>
            </div>

            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#C9A96E" strokeWidth="1.5">
                <circle cx="8" cy="8" r="6" /><path d="M8 4 L8 8 L11 10" />
              </svg>
              <span className="font-sans text-xs text-white/50 font-medium">{t.process.duration}: {step.duration}</span>
            </div>

            <div className="flex gap-2 mt-8">
              {PROCESS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Paso ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-400 ${active === i ? 'w-8 bg-roiba-dorado' : 'w-2 bg-white/15 hover:bg-white/25'}`}
                />
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}
