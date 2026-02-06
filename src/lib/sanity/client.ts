import { createClient as createSanityClient } from '@sanity/client'

let sanityClient: ReturnType<typeof createSanityClient> | null = null

export function getSanityClient() {
  if (!sanityClient) {
    const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
    
    if (!projectId) {
      throw new Error('NEXT_PUBLIC_SANITY_PROJECT_ID is not configured')
    }

    sanityClient = createSanityClient({
      projectId,
      dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
      apiVersion: '2024-01-01',
      useCdn: process.env.NODE_ENV === 'production',
    })
  }
  return sanityClient
}

export const villaQuery = `
  *[_type == "villa" && published == true] | order(_createdAt desc) {
    "id": _id,
    "slug": slug.current,
    title,
    description,
    price_usd,
    bedrooms,
    bathrooms,
    area_sqm,
    "image_url": mainImage.asset->url,
    location,
    status
  }
`
