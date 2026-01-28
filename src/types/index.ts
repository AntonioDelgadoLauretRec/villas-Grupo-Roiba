// ============================================
// GRUPO ROIBA VILLAS - TYPE DEFINITIONS
// ============================================

// --- VILLA TYPES ---
export interface Villa {
  id: string
  slug: string
  title: string
  description: string
  shortDescription: string
  priceUsd: number
  priceEur?: number
  bedrooms: number
  bathrooms: number
  areaM2: number
  lotM2?: number
  status: VillaStatus
  featured: boolean
  mainImage: SanityImage
  gallery: SanityImage[]
  amenities: Amenity[]
  location: Location
  floorPlan?: SanityImage
  videoUrl?: string
  createdAt: string
  updatedAt: string
}

export type VillaStatus = 
  | 'disponible' 
  | 'reservada' 
  | 'vendida' 
  | 'en-construccion'

export interface Amenity {
  id: string
  name: string
  icon: string
  category: AmenityCategory
}

export type AmenityCategory = 
  | 'interior' 
  | 'exterior' 
  | 'seguridad' 
  | 'servicios'

export interface Location {
  address: string
  zone: string
  coordinates?: {
    lat: number
    lng: number
  }
  nearbyAttractions?: string[]
}

// --- SANITY TYPES ---
export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
  caption?: string
}

// --- LEAD TYPES ---
export interface Lead {
  id: string
  email: string
  fullName: string
  phone?: string
  country: string
  investmentCapacity: InvestmentCapacity
  message?: string
  preferredContact: ContactMethod
  interestedVillas?: string[]
  gdprConsent: boolean
  marketingConsent: boolean
  source: LeadSource
  status: LeadStatus
  createdAt: string
  updatedAt: string
}

export type InvestmentCapacity = 
  | '500k-1m' 
  | '1m-2m' 
  | '2m-5m' 
  | '5m+'

export type ContactMethod = 
  | 'email' 
  | 'phone' 
  | 'whatsapp'

export type LeadSource = 
  | 'website' 
  | 'referral' 
  | 'social' 
  | 'broker'

export type LeadStatus = 
  | 'nuevo' 
  | 'contactado' 
  | 'cualificado' 
  | 'en-negociacion' 
  | 'cerrado' 
  | 'descartado'

// --- FORM TYPES ---
export interface ContactFormData {
  email: string
  fullName: string
  phone?: string
  country: string
  investmentCapacity: InvestmentCapacity
  message?: string
  preferredContact: ContactMethod
  gdprConsent: boolean
  marketingConsent: boolean
}

// --- USER TYPES (for Dashboard) ---
export interface User {
  id: string
  email: string
  fullName: string
  role: UserRole
  createdAt: string
}

export type UserRole = 
  | 'investor' 
  | 'admin' 
  | 'broker'

// --- API RESPONSE TYPES ---
export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    pageSize: number
    totalPages: number
    totalItems: number
  }
}

// --- COMPONENT PROP TYPES ---
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  className?: string
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  href?: string
}

export interface InputProps {
  label?: string
  error?: string
  helperText?: string
  required?: boolean
}

// --- SEO TYPES ---
export interface SeoData {
  title: string
  description: string
  canonical?: string
  ogImage?: string
  noIndex?: boolean
}
