import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

// Full contact form schema
const contactSchema = z.object({
  full_name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(6).max(20),
  country: z.string().length(2).or(z.literal('OTHER')),
  investment_capacity: z.enum(['250k-500k', '500k-1m', '1m-2m', '2m-5m', '5m+']).optional(),
  service_type: z.string().optional(),
  lead_type: z.enum(['inversion', 'servicios']).optional(),
  message: z.string().max(1000).optional(),
  gdpr_consent: z.literal(true),
  marketing_consent: z.boolean().optional(),
})

// Lightweight email capture schema (guide downloads, brochure)
const emailCaptureSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().max(1000).optional(),
  source: z.string(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Honeypot spam filter
    if (body.website && body.website.length > 0) {
      return NextResponse.json({ success: true }, { status: 201 })
    }

    const supabase = await createClient()

    // Try full contact form first
    const contactValidation = contactSchema.safeParse(body)
    if (contactValidation.success) {
      const data = contactValidation.data

      const { error } = await supabase
        .from('leads')
        .insert({
          full_name: data.full_name,
          email: data.email,
          phone: data.phone,
          country: data.country,
          investment_capacity: data.investment_capacity || null,
          message: data.message || null,
          gdpr_consent: data.gdpr_consent,
          marketing_consent: data.marketing_consent || false,
          source: data.lead_type === 'servicios' ? 'website-servicios' : 'website',
          created_at: new Date().toISOString(),
        })
        .select()
        .single()

      if (error) {
        console.error('Supabase error:', error)
        return NextResponse.json({ error: 'Error guardando lead' }, { status: 500 })
      }

      return NextResponse.json({ success: true, message: 'Lead recibido' }, { status: 201 })
    }

    // Try email capture (guide/brochure downloads)
    const emailValidation = emailCaptureSchema.safeParse(body)
    if (emailValidation.success) {
      const data = emailValidation.data

      const { error } = await supabase
        .from('leads')
        .insert({
          full_name: data.name || 'Email Capture',
          email: data.email,
          phone: data.phone || null,
          message: data.message || null,
          gdpr_consent: true,
          marketing_consent: false,
          source: data.source,
          created_at: new Date().toISOString(),
        })
        .select()
        .single()

      if (error) {
        console.error('Supabase error:', error)
        return NextResponse.json({ error: 'Error guardando lead' }, { status: 500 })
      }

      return NextResponse.json({ success: true, message: 'Lead recibido' }, { status: 201 })
    }

    // Neither schema matched
    return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 })

  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Método no permitido' }, { status: 405 })
}
