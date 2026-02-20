import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { createClient } from '@/lib/supabase/server'

const leadSchema = z.object({
  full_name: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().min(6).max(20),
  country: z.string().length(2).or(z.literal('OTHER')),
  investment_capacity: z.enum(['250k-500k', '500k-1m', '1m-2m', '2m-5m', '5m+']),
  message: z.string().max(1000).optional(),
  gdpr_consent: z.literal(true),
  marketing_consent: z.boolean().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    if (body.website && body.website.length > 0) {
      return NextResponse.json({ success: true }, { status: 201 })
    }
    
    const validation = leadSchema.safeParse(body)
    if (!validation.success) {
      return NextResponse.json(
        { error: 'Datos inválidos' },
        { status: 400 }
      )
    }
    
    const data = validation.data
    const supabase = await createClient()
    
    const { data: lead, error } = await supabase
      .from('leads')
      .insert({
        full_name: data.full_name,
        email: data.email,
        phone: data.phone,
        country: data.country,
        investment_capacity: data.investment_capacity,
        message: data.message || null,
        gdpr_consent: data.gdpr_consent,
        marketing_consent: data.marketing_consent || false,
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
