import { NextResponse } from 'next/server'
import { getAllSiteSettings } from '@/lib/data'

export async function GET() {
  const settings = await getAllSiteSettings()
  return NextResponse.json(settings)
}
