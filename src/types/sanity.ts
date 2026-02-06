export interface Villa {
  id: string
  slug: string
  title: string
  description: string
  price_usd: number
  bedrooms: number
  bathrooms: number
  area_sqm: number
  image_url: string
  gallery: string[]
  location: string
  status: 'available' | 'sold' | 'reserved'
}
