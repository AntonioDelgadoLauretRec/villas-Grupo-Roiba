import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

// Schema base compartido entre ambos tipos de lead
const baseFields = {
  full_name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(6).max(20),
  country: z.string().length(2).or(z.literal('OTHER')),
  message: z.string().max(1000).optional(),
  gdpr_consent: z.literal(true),
  marketing_consent: z.boolean().optional(),
}

// Schema para inversores
const investmentLeadSchema = z.object({
  ...baseFields,
  lead_type: z.literal('inversion'),
  investment_capacity: z.enum(['250k-500k', '500k-1m', '1m-2m', '2m-5m', '5m+']),
})

// Schema para solicitud de servicios
const serviceLeadSchema = z.object({
  ...baseFields,
  lead_type: z.literal('servicios'),
  service_type: z.enum([
    'direccion-tecnica',
    'construccion-villa',
    'interiorismo',
    'project-management',
    'seguridad-juridica',
    'roiba-care',
    'otro',
  ]),
})

// Schema legacy (sin lead_type, retrocompatible)
const legacyLeadSchema = z.object({
  ...baseFields,
  investment_capacity: z.enum(['250k-500k', '500k-1m', '1m-2m', '2m-5m', '5m+']),
})

const leadSchema = z.discriminatedUnion('lead_type', [
  investmentLeadSchema,
  serviceLeadSchema,
]).or(legacyLeadSchema)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Honeypot anti-spam
    if (body.website && body.website.length > 0) {
      return NextResponse.json({ success: true }, { status: 201 })
    }

    const validation = leadSchema.safeParse(body)
    if (!validation.success) {
      console.error('Validation error:', validation.error.errors)
      return NextResponse.json(
        { error: 'Datos inválidos' },
        { status: 400 }
      )
    }

    const data = validation.data
    const supabase = await createClient()

    // Determinar lead_type y campos específicos
    const leadType = 'lead_type' in data ? data.lead_type : 'inversion'
    const investmentCapacity = 'investment_capacity' in data ? data.investment_capacity : null
    const serviceType = 'service_type' in data ? data.service_type : null

    // NOTA: Las columnas lead_type y service_type deben existir en la tabla leads de Supabase.
    // Si no existen, crear con: ALTER TABLE leads ADD COLUMN lead_type text DEFAULT 'inversion';
    // ALTER TABLE leads ADD COLUMN service_type text;
    const { data: lead, error } = await supabase
      .from('leads')
      .insert({
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        country: data.country,
        investment_capacity: investmentCapacity,
        message: data.message || null,
        gdpr_consent: data.gdpr_consent,
        marketing_consent: data.marketing_consent || false,
        lead_type: leadType,
        service_type: serviceType,
        source: 'website',
        created_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Error guardando lead' },
        { status: 500 }
      )
    }

    console.log('Lead guardado:', lead)

    return NextResponse.json(
      { success: true, message: 'Lead recibido' },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Error interno' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  )
}
