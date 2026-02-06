import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Verificar que exista projectId ANTES de importar client
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    
    if (!projectId) {
      console.warn('NEXT_PUBLIC_SANITY_PROJECT_ID not configured')
      // Retornar array vacío en lugar de error (evita crash en build)
      return NextResponse.json([])
    }

    const { getSanityClient, villaQuery } = await import('@/lib/sanity/client')
    const client = getSanityClient()
    const villas = await client.fetch(villaQuery)
    
    return NextResponse.json(villas)
  } catch (error) {
    console.error('Error fetching villas:', error)
    // Retornar array vacío en lugar de error
    return NextResponse.json([])
  }
}
