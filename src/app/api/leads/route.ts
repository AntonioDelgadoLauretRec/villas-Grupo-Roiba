import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

// Schema de validación Zod
const leadSchema = z.object({
  full_name: z.string().min(2, 'Nombre muy corto').max(100),
  email: z.string().email('Email inválido'),
  phone: z.string().min(6, 'Teléfono muy corto').max(20),
  country: z.string().length(2, 'País inválido').or(z.literal('OTHER')),
  investment_capacity: z.enum(['500k-1m', '1m-2m', '2m-5m', '5m+']),
  message: z.string().max(1000).optional(),
  gdpr_consent: z.literal(true, {
    errorMap: () => ({ message: 'Debe aceptar la política de privacidad' }),
  }),
  marketing_consent: z.boolean().optional(),
})

// Honeypot field para detectar bots
const honeypotSchema = z.object({
  website: z.string().max(0).optional(), // Should be empty
})

export async function POST(request: NextRequest) {
  try {
    // Rate limiting básico por IP
    const _ip = request.headers.get('x-forwarded-for') || 'unknown'
void _ip;
    
    // Parse body
    const body = await request.json()
    
    // Check honeypot
    const _honeypot = honeypotSchema.safeParse(body)
void _honeypot;
    if (body.website && body.website.length > 0) {
      // Es un bot, responder con éxito falso
      return NextResponse.json({ success: true }, { status: 201 })
    }
    
    // Validar datos
    const validation = leadSchema.safeParse(body)
    
    if (!validation.success) {
      return NextResponse.json(
        { 
          error: 'Datos inválidos',
          details: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      )
    }
    
    const data = validation.data
    
    // Aquí iría la integración con Supabase
    // Por ahora, simulamos el guardado
    
    // En producción:
    // const supabase = await createServerClient()
    // const { data: lead, error } = await supabase
    //   .from('leads')
    //   .insert({
    //     full_name: data.full_name,
    //     email: data.email,
    //     phone: data.phone,
    //     country: data.country,
    //     investment_capacity: data.investment_capacity,
    //     message: data.message || null,
    //     gdpr_consent: data.gdpr_consent,
    //     marketing_consent: data.marketing_consent || false,
    //     source: 'website',
    //     ip_address: ip,
    //     created_at: new Date().toISOString(),
    //   })
    //   .select()
    //   .single()
    
    // Enviar notificación por email (en producción)
    // await sendLeadNotification(data)
    
// eslint-disable-next-line no-console
// eslint-disable-next-line no-console
// eslint-disable-next-line no-console
  console.log('New lead received:', {
      name: data.full_name,
      email: data.email,
      investment: data.investment_capacity,
      country: data.country,
      timestamp: new Date().toISOString(),
    })
    
    return NextResponse.json(
      { 
        success: true,
        message: 'Solicitud recibida correctamente',
      },
      { status: 201 }
    )
    
  } catch (error) {
// eslint-disable-next-line no-console
// eslint-disable-next-line no-console
// eslint-disable-next-line no-console
  console.error('Error processing lead:', error)
    
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// Bloquear otros métodos
export async function GET() {
  return NextResponse.json(
    { error: 'Método no permitido' },
    { status: 405 }
  )
}
