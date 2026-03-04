export interface AdminProfile {
  id: string
  email: string
  display_name: string
  role: 'superadmin' | 'editor'
  created_at: string
  updated_at: string
}

export interface Villa {
  id: string
  slug: string
  title: string
  short_description: string
  long_description: string
  location: string
  main_image: string
  year: string
  status: 'published' | 'draft' | 'hidden'
  sort_order: number
  featured: boolean
  bedrooms: number
  bathrooms: number
  area_sqm: number
  price_usd: number
  seo_title: string
  seo_description: string
  created_at: string
  updated_at: string
  images?: VillaImage[]
}

export interface VillaImage {
  id: string
  villa_id: string
  image_url: string
  alt_text: string
  sort_order: number
  created_at: string
}

export interface Project {
  id: string
  slug: string
  title: string
  description: string
  location: string
  main_image: string
  status: 'published' | 'future' | 'in_development' | 'hidden'
  estimated_date: string
  sort_order: number
  featured: boolean
  seo_title: string
  seo_description: string
  created_at: string
  updated_at: string
  images?: ProjectImage[]
}

export interface ProjectImage {
  id: string
  project_id: string
  image_url: string
  alt_text: string
  sort_order: number
  created_at: string
}

export interface SiteSetting {
  id: string
  key: string
  value: Record<string, unknown>
  updated_at: string
}

// ─── Content types ──────────────────────────────────────

export interface Service {
  id: string
  slug: string
  title: string
  description: string
  image: string
  page: 'homepage' | 'servicios'
  sort_order: number
  visible: boolean
  created_at: string
  updated_at: string
}

export interface SubService {
  id: string
  slug: string
  label: string
  title: string
  description: string
  includes: string[]
  note: string
  sort_order: number
  visible: boolean
  created_at: string
  updated_at: string
}

export interface ProcessStep {
  id: string
  num: string
  title: string
  subtitle: string
  description: string
  detail: string
  duration: string
  sort_order: number
  visible: boolean
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  location: string
  sort_order: number
  visible: boolean
  created_at: string
  updated_at: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image: string
  sort_order: number
  visible: boolean
  created_at: string
  updated_at: string
}

export interface CompanyValue {
  id: string
  title: string
  description: string
  image: string
  sort_order: number
  visible: boolean
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  read_time: string
  published: boolean
  sort_order: number
  created_at: string
  updated_at: string
}

export interface Poi {
  id: string
  name: string
  description: string
  category: string
  lat: number
  lng: number
  sort_order: number
  visible: boolean
  created_at: string
  updated_at: string
}

export interface Attraction {
  id: string
  slug: string
  subtitle: string
  title: string
  description: string
  image: string
  sort_order: number
  visible: boolean
  created_at: string
  updated_at: string
}
