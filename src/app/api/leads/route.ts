import { NextResponse } from 'next/server'
import { leadSchema, calculateLeadScore } from '@/lib/validation/schemas'
import { ZodError } from 'zod'

// Rate limiting simple en memoria (en producción usar Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT = 5 // requests
const RATE_WINDOW = 60 * 1000 // 1 minuto

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(ip)

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW })
    return false
  }

  if (record.count >= RATE_LIMIT) {
    return true
  }

  record.count++
  return false
}

// Honeypot field check
function isBot(data: Record<string, unknown>): boolean {
  // Si el campo honeypot está lleno, es un bot
  return Boolean(data._website || data._honeypot)
}

export async function POST(request: Request) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
               request.headers.get('x-real-ip') || 
               'unknown'

    // Rate limit check
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse body
    const body = await request.json()

    // Bot detection
    if (isBot(body)) {
      // Silently reject but return success to fool bots
      return NextResponse.json({ success: true, id: 'fake-id' }, { status: 201 })
    }

    // Validate with Zod
    const validatedData = leadSchema.parse(body)

    // Calculate lead score
    const { score, tier, priority } = calculateLeadScore(validatedData)

    // Prepare lead data for storage
    const leadData = {
      ...validatedData,
      lead_score: score,
      lead_tier: tier,
      lead_priority: priority,
      ip_address: ip,
      user_agent: request.headers.get('user-agent') || 'unknown',
      created_at: new Date().toISOString(),
      source: 'website',
    }

    // TODO: Save to Supabase
    // const supabase = await createClient()
    // const { data, error } = await supabase
    //   .from('leads')
    //   .insert(leadData)
    //   .select('id')
    //   .single()

    // TODO: Send notification email for hot leads
    // if (tier === 'hot') {
    //   await sendLeadNotification(leadData)
    // }

    // For now, log the lead (remove in production)
    console.log('New lead received:', {
      email: validatedData.email,
      situation: validatedData.situation,
      score,
      tier,
      priority,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead submitted successfully',
        tier,
      },
      { status: 201 }
    )

  } catch (error) {
    // Zod validation error
    if (error instanceof ZodError) {
      const formattedErrors = error.errors.map((err) => ({
        field: err.path.join('.'),
        message: err.message,
      }))

      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: formattedErrors 
        },
        { status: 400 }
      )
    }

    // Generic error
    console.error('Lead submission error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Health check
export async function GET() {
  return NextResponse.json({ 
    status: 'ok', 
    endpoint: '/api/leads',
    methods: ['POST'],
  })
}
