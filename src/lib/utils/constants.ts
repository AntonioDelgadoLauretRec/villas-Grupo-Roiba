// ============================================
// GRUPO ROIBA VILLAS - CONSTANTS
// ============================================

export const SITE_CONFIG = {
  name: 'Grupo Roiba',
  tagline: 'Inversión Patrimonial en Punta Cana',
  description: 'Villas de lujo en Punta Cana para inversores de alto patrimonio. ROI proyectado del 8-12% anual.',
  url: 'https://gruporoiba.com',
  email: 'inversiones@gruporoiba.com',
  phone: '+1 809 XXX XXXX',
  address: 'Punta Cana, República Dominicana',
} as const

export const INVESTMENT_CAPACITIES = [
  { value: '500k-1m', label: '$500K - $1M USD' },
  { value: '1m-2m', label: '$1M - $2M USD' },
  { value: '2m-5m', label: '$2M - $5M USD' },
  { value: '5m+', label: '$5M+ USD' },
] as const

export const CONTACT_METHODS = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Teléfono' },
  { value: 'whatsapp', label: 'WhatsApp' },
] as const

export const VILLA_STATUSES = [
  { value: 'disponible', label: 'Disponible', color: 'bg-green-500' },
  { value: 'reservada', label: 'Reservada', color: 'bg-yellow-500' },
  { value: 'vendida', label: 'Vendida', color: 'bg-red-500' },
  { value: 'en-construccion', label: 'En Construcción', color: 'bg-blue-500' },
] as const

export const AMENITY_CATEGORIES = [
  { value: 'interior', label: 'Interior' },
  { value: 'exterior', label: 'Exterior' },
  { value: 'seguridad', label: 'Seguridad' },
  { value: 'servicios', label: 'Servicios' },
] as const

export const COUNTRIES = [
  { code: 'US', name: 'Estados Unidos' },
  { code: 'CA', name: 'Canadá' },
  { code: 'ES', name: 'España' },
  { code: 'DE', name: 'Alemania' },
  { code: 'FR', name: 'Francia' },
  { code: 'UK', name: 'Reino Unido' },
  { code: 'MX', name: 'México' },
  { code: 'CO', name: 'Colombia' },
  { code: 'AR', name: 'Argentina' },
  { code: 'BR', name: 'Brasil' },
  { code: 'CL', name: 'Chile' },
  { code: 'DO', name: 'República Dominicana' },
  { code: 'OTHER', name: 'Otro' },
] as const

// Navigation links
export const NAV_LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/villas', label: 'Villas' },
  { href: '/por-que-punta-cana', label: 'Por qué Punta Cana' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/contacto', label: 'Contacto' },
] as const

// Social media links
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/gruporoiba',
  facebook: 'https://facebook.com/gruporoiba',
  linkedin: 'https://linkedin.com/company/gruporoiba',
  youtube: 'https://youtube.com/@gruporoiba',
} as const

// SEO defaults
export const DEFAULT_SEO = {
  title: 'Grupo Roiba | Villas de Lujo en Punta Cana',
  description: 'Invierta en villas de lujo en Punta Cana con Grupo Roiba. Rentabilidad proyectada 8-12% anual. Más de 400 propiedades disponibles.',
  ogImage: '/images/og-image.jpg',
} as const

// Form validation limits
export const FORM_LIMITS = {
  nameMinLength: 2,
  nameMaxLength: 100,
  messageMaxLength: 1000,
  phoneMinLength: 8,
  phoneMaxLength: 20,
} as const
