import { z } from 'zod'

/**
 * Schema base para datos de contacto
 */
const contactBaseSchema = z.object({
  full_name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(100, 'El nombre no puede exceder 100 caracteres'),
  email: z
    .string()
    .email('Por favor, introduce un email válido'),
  phone: z
    .string()
    .min(8, 'El teléfono debe tener al menos 8 dígitos')
    .regex(/^[\d\s\+\-\(\)]+$/, 'Formato de teléfono inválido'),
  country: z
    .string()
    .length(2, 'Código de país debe ser ISO 2 caracteres')
    .default('ES'),
})

/**
 * Schema para lead con terreno (busca constructor)
 */
export const leadWithLandSchema = contactBaseSchema.extend({
  situation: z.literal('has_land'),
  land_location: z
    .string()
    .min(3, 'Por favor, indica la ubicación del terreno'),
  land_size: z
    .string()
    .optional(),
  project_description: z
    .string()
    .max(1000, 'La descripción no puede exceder 1000 caracteres')
    .optional(),
  gdpr_consent: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }),
  }),
  aml_consent: z.literal(true, {
    errorMap: () => ({ message: 'Debes confirmar el origen lícito de fondos' }),
  }),
  marketing_consent: z.boolean().optional(),
})

/**
 * Schema para lead sin terreno (busca inversión completa)
 */
export const leadFullInvestmentSchema = contactBaseSchema.extend({
  situation: z.literal('full_investment'),
  investment_capacity: z.enum(['500k-1m', '1m-2m', '2m-5m', '5m+'], {
    errorMap: () => ({ message: 'Selecciona un rango de inversión' }),
  }),
  preferred_location: z
    .enum(['cap-cana', 'punta-cana', 'bavaro', 'other'])
    .optional(),
  timeline: z
    .enum(['immediate', '3-6months', '6-12months', 'exploring'])
    .optional(),
  gdpr_consent: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }),
  }),
  aml_consent: z.literal(true, {
    errorMap: () => ({ message: 'Debes confirmar el origen lícito de fondos' }),
  }),
  marketing_consent: z.boolean().optional(),
})

/**
 * Schema para lead informativo (soft lead - solo descarga dossier)
 */
export const leadInfoOnlySchema = contactBaseSchema.extend({
  situation: z.literal('info_only'),
  gdpr_consent: z.literal(true, {
    errorMap: () => ({ message: 'Debes aceptar la política de privacidad' }),
  }),
  marketing_consent: z.boolean().optional(),
})

/**
 * Schema unificado con discriminador
 */
export const leadSchema = z.discriminatedUnion('situation', [
  leadWithLandSchema,
  leadFullInvestmentSchema,
  leadInfoOnlySchema,
])

/**
 * Schema simplificado para newsletter/lead magnet
 */
export const newsletterSchema = z.object({
  email: z.string().email('Email inválido'),
  gdpr_consent: z.literal(true),
})

/**
 * Tipos inferidos
 */
export type LeadWithLand = z.infer<typeof leadWithLandSchema>
export type LeadFullInvestment = z.infer<typeof leadFullInvestmentSchema>
export type LeadInfoOnly = z.infer<typeof leadInfoOnlySchema>
export type Lead = z.infer<typeof leadSchema>
export type NewsletterSubscription = z.infer<typeof newsletterSchema>

/**
 * Función para calcular lead score (cualificación)
 */
export function calculateLeadScore(lead: Lead): {
  score: number
  tier: 'hot' | 'warm' | 'cold'
  priority: 'P1' | 'P2' | 'P3'
} {
  let score = 0

  // Base score por situación
  if (lead.situation === 'has_land') {
    score += 40 // Ya tiene terreno = muy cualificado
  } else if (lead.situation === 'full_investment') {
    score += 30
    
    // Bonus por capacidad de inversión
    if ('investment_capacity' in lead) {
      switch (lead.investment_capacity) {
        case '5m+': score += 30; break
        case '2m-5m': score += 25; break
        case '1m-2m': score += 20; break
        case '500k-1m': score += 15; break
      }
    }
    
    // Bonus por timeline
    if ('timeline' in lead) {
      switch (lead.timeline) {
        case 'immediate': score += 20; break
        case '3-6months': score += 15; break
        case '6-12months': score += 10; break
        case 'exploring': score += 5; break
      }
    }
  } else {
    score += 10 // Solo información
  }

  // Determinar tier y prioridad
  let tier: 'hot' | 'warm' | 'cold'
  let priority: 'P1' | 'P2' | 'P3'

  if (score >= 70) {
    tier = 'hot'
    priority = 'P1'
  } else if (score >= 40) {
    tier = 'warm'
    priority = 'P2'
  } else {
    tier = 'cold'
    priority = 'P3'
  }

  return { score, tier, priority }
}
