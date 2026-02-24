import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combina clases de Tailwind de forma inteligente
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formatea moneda para inversores
 */
export function formatCurrency(
  amount: number,
  currency: 'USD' | 'EUR' = 'USD',
  locale: string = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Formatea área en metros cuadrados
 */
export function formatArea(sqm: number): string {
  return `${sqm.toLocaleString()} m²`
}

/**
 * Genera slug desde string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

/**
 * Constantes del proyecto
 */
export const COLORS = {
  verde: '#122620',
  verdeLight: '#1A3830',
  verdeDark: '#0A1A15',
  arena: '#F4EBD0',
  arenaLight: '#FAF7EE',
  arenaDark: '#E5DCC0',
  dorado: '#B68D40',
  doradoClaro: '#FFCC53',
  doradoOscuro: '#8B6914',
} as const

export const INVESTMENT_RANGES = [
  { value: '500k-1m', label: '$500K - $1M USD', labelEN: '$500K - $1M USD' },
  { value: '1m-2m', label: '$1M - $2M USD', labelEN: '$1M - $2M USD' },
  { value: '2m-5m', label: '$2M - $5M USD', labelEN: '$2M - $5M USD' },
  { value: '5m+', label: '+$5M USD', labelEN: '$5M+ USD' },
] as const

export const TIMELINES = [
  { value: 'immediate', label: 'Inmediato (0-3 meses)', labelEN: 'Immediate (0-3 months)' },
  { value: '3-6months', label: '3-6 meses', labelEN: '3-6 months' },
  { value: '6-12months', label: '6-12 meses', labelEN: '6-12 months' },
  { value: 'exploring', label: 'Explorando opciones', labelEN: 'Exploring options' },
] as const

export const LOCATIONS = [
  { value: 'cap-cana', label: 'Cap Cana' },
  { value: 'punta-cana', label: 'Punta Cana Village' },
  { value: 'bavaro', label: 'Bávaro' },
  { value: 'other', label: 'Otra ubicación' },
] as const

/**
 * Breakpoints para responsive
 */
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

/**
 * Configuración de la empresa
 */
export const COMPANY = {
  name: 'Grupo Roiba',
  tagline: 'Arquitectura, control y confianza en cada proyecto',
  taglineEN: 'Architecture, control and confidence in every project',
  email: 'inversiones@gruporoiba.com',
  phone: '+1 809 000 0000',
  whatsapp: '+18090000000',
  website: 'www.gruporoiba.com',
  address: 'Punta Cana, República Dominicana',
} as const
