import { NextResponse } from 'next/server'
import { z } from 'zod'

// Zod schema para validación server-side (NON-NEGOTIABLE)
const leadSchema = z.object({
  email: z.string().email('Email inválido'),
  full_name: z.string().min(2, 'Nombre muy corto').max(100, 'Nombre muy largo'),
  phone: z.string().optional(),
  country: z.string().length(2, 'Código país inválido').optional(),
  investment_capacity: z.enum(['500k-1m', '1m-2m', '2m+'], {
    errorMap: () => ({ message: 'Capacidad de inversión inválida' }),
  }),
  message: z.string().max(1000, 'Mensaje muy largo').optional(),
  preferred_contact: z.enum(['email', 'phone', 'whatsapp']).optional(),
  gdpr_consent: z.literal(true, {
    errorMap: () => ({ message: 'Debe aceptar la política de privacidad' }),
  }),
  marketing_consent: z.boolean().optional(),
})

export type LeadFormData = z.infer<typeof leadSchema>

export async function POST(request: Request) {
  try {
    // 1. Parse request body
    const body = await request.json()

    // 2. Validate with Zod
    const validatedData = leadSchema.parse(body)

    // 3. TODO: Cuando Supabase esté configurado, descomentar:
    // const supabase = await createClient()
    // const { data, error } = await supabase
    //   .from('leads')
    //   .insert({
    //     email: validatedData.email,
    //     full_name: validatedData.full_name,
    //     phone: validatedData.phone,
    //     country: validatedData.country,
    //     investment_capacity: validatedData.investment_capacity,
    //     message: validatedData.message,
    //     preferred_contact: validatedData.preferred_contact,
    //     gdpr_consent: validatedData.gdpr_consent,
    //     marketing_consent: validatedData.marketing_consent,
    //     source: 'website',
    //     status: 'new',
    //   })
    //   .select()
    //   .single()
    //
    // if (error) throw error

    // 4. TODO: Cuando Resend esté configurado, enviar notificación:
    // await sendLeadNotification(validatedData)

    // 5. Mock response para desarrollo
    console.log('[LEAD CAPTURED]', {
      timestamp: new Date().toISOString(),
      data: {
        ...validatedData,
        email: validatedData.email.replace(/(.{3}).*@/, '$1***@'), // Ofuscar email en logs
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Gracias por su interés. Nuestro equipo le contactará pronto.',
        // En producción, no retornar datos sensibles
      },
      { status: 201 }
    )
  } catch (error) {
    // Zod validation error
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Datos inválidos',
          details: error.errors.map((e) => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      )
    }

    // Unexpected error - log pero no exponer detalles al cliente
    console.error('[LEAD ERROR]', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Error procesando solicitud. Por favor intente más tarde.',
      },
      { status: 500 }
    )
  }
}

// GET method - no permitido para leads
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
