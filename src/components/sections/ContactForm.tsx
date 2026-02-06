'use client'

import { FC, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface FormData {
  full_name: string
  email: string
  phone: string
  country: string
  investment_capacity: string
  message: string
  gdpr_consent: boolean
  marketing_consent: boolean
}

const INVESTMENT_OPTIONS = [
  { value: '250k-500k', label: '$250,000 - $500,000 USD' },
  { value: '500k-1m', label: '$500,000 - $1,000,000 USD' },
  { value: '1m-2m', label: '$1,000,000 - $2,000,000 USD' },
  { value: '2m-5m', label: '$2,000,000 - $5,000,000 USD' },
  { value: '5m+', label: 'Más de $5,000,000 USD' },
]

const COUNTRIES = [
  { value: 'ES', label: 'España' },
  { value: 'US', label: 'Estados Unidos' },
  { value: 'DE', label: 'Alemania' },
  { value: 'FR', label: 'Francia' },
  { value: 'UK', label: 'Reino Unido' },
  { value: 'MX', label: 'México' },
  { value: 'AR', label: 'Argentina' },
  { value: 'CO', label: 'Colombia' },
  { value: 'OTHER', label: 'Otro' },
]

export const ContactForm: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: '',
    email: '',
    phone: '',
    country: '',
    investment_capacity: '',
    message: '',
    gdpr_consent: false,
    marketing_consent: false,
  })
  
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}
    
    if (!formData.full_name.trim() || formData.full_name.length < 2) {
      newErrors.full_name = 'Nombre completo requerido'
    }
    
    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = 'Email inválido'
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Teléfono requerido'
    }
    
    if (!formData.country) {
      newErrors.country = 'Seleccione un país'
    }
    
    if (!formData.investment_capacity) {
      newErrors.investment_capacity = 'Seleccione capacidad de inversión'
    }
    
    if (!formData.gdpr_consent) {
      newErrors.gdpr_consent = 'Debe aceptar la política de privacidad'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) throw new Error('Error al enviar')
      
      setSubmitStatus('success')
      setFormData({
        full_name: '',
        email: '',
        phone: '',
        country: '',
        investment_capacity: '',
        message: '',
        gdpr_consent: false,
        marketing_consent: false,
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
    
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="p-8 md:p-12 bg-roiba-verde/5 text-center">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-roiba-verde/10 flex items-center justify-center">
          <svg className="w-8 h-8 text-roiba-verde" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="text-heading font-serif text-roiba-verde mb-3">
          Solicitud Recibida
        </h3>
        <p className="text-body text-roiba-verde/70 mb-6">
          Nuestro equipo revisará su información y se pondrá en contacto 
          en las próximas 24-48 horas hábiles.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-caption font-medium text-roiba-dorado hover:text-roiba-verde transition-colors"
        >
          Enviar otra solicitud
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nombre y Email */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-caption font-medium text-roiba-verde mb-2">
            Nombre completo *
          </label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-3 bg-white border text-roiba-verde',
              'focus:outline-none focus:border-roiba-dorado transition-colors',
              errors.full_name ? 'border-red-500' : 'border-roiba-verde/20'
            )}
            placeholder="Su nombre"
          />
          {errors.full_name && (
            <p className="mt-1 text-micro text-red-500">{errors.full_name}</p>
          )}
        </div>
        
        <div>
          <label className="block text-caption font-medium text-roiba-verde mb-2">
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-3 bg-white border text-roiba-verde',
              'focus:outline-none focus:border-roiba-dorado transition-colors',
              errors.email ? 'border-red-500' : 'border-roiba-verde/20'
            )}
            placeholder="correo@ejemplo.com"
          />
          {errors.email && (
            <p className="mt-1 text-micro text-red-500">{errors.email}</p>
          )}
        </div>
      </div>

      {/* Teléfono y País */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-caption font-medium text-roiba-verde mb-2">
            Teléfono *
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-3 bg-white border text-roiba-verde',
              'focus:outline-none focus:border-roiba-dorado transition-colors',
              errors.phone ? 'border-red-500' : 'border-roiba-verde/20'
            )}
            placeholder="+34 600 000 000"
          />
          {errors.phone && (
            <p className="mt-1 text-micro text-red-500">{errors.phone}</p>
          )}
        </div>
        
        <div>
          <label className="block text-caption font-medium text-roiba-verde mb-2">
            País de residencia *
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-3 bg-white border text-roiba-verde appearance-none',
              'focus:outline-none focus:border-roiba-dorado transition-colors',
              errors.country ? 'border-red-500' : 'border-roiba-verde/20'
            )}
          >
            <option value="">Seleccionar país</option>
            {COUNTRIES.map(country => (
              <option key={country.value} value={country.value}>
                {country.label}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="mt-1 text-micro text-red-500">{errors.country}</p>
          )}
        </div>
      </div>

      {/* Capacidad de inversión */}
      <div>
        <label className="block text-caption font-medium text-roiba-verde mb-2">
          Capacidad de inversión *
        </label>
        <select
          name="investment_capacity"
          value={formData.investment_capacity}
          onChange={handleChange}
          className={cn(
            'w-full px-4 py-3 bg-white border text-roiba-verde appearance-none',
            'focus:outline-none focus:border-roiba-dorado transition-colors',
            errors.investment_capacity ? 'border-red-500' : 'border-roiba-verde/20'
          )}
        >
          <option value="">Seleccionar rango</option>
          {INVESTMENT_OPTIONS.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.investment_capacity && (
          <p className="mt-1 text-micro text-red-500">{errors.investment_capacity}</p>
        )}
      </div>

      {/* Mensaje */}
      <div>
        <label className="block text-caption font-medium text-roiba-verde mb-2">
          Mensaje (opcional)
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-white border border-roiba-verde/20 text-roiba-verde focus:outline-none focus:border-roiba-dorado transition-colors resize-none"
          placeholder="Cuéntenos sobre su proyecto o consulta..."
        />
      </div>

      {/* Consentimientos */}
      <div className="space-y-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="gdpr_consent"
            checked={formData.gdpr_consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 accent-roiba-dorado"
          />
          <span className="text-caption text-roiba-verde/70">
            He leído y acepto la{' '}
            <a href="/privacidad" className="text-roiba-dorado hover:underline">
              Política de Privacidad
            </a>
            . *
          </span>
        </label>
        {errors.gdpr_consent && (
          <p className="text-micro text-red-500">{errors.gdpr_consent}</p>
        )}
        
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="marketing_consent"
            checked={formData.marketing_consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 accent-roiba-dorado"
          />
          <span className="text-caption text-roiba-verde/70">
            Deseo recibir información sobre nuevos proyectos y oportunidades de inversión.
          </span>
        </label>
      </div>

      {/* Submit */}
      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-caption">
          Ha ocurrido un error. Por favor, inténtelo de nuevo o contacte directamente a inversiones@gruporoiba.com
        </div>
      )}
      
      <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting} className="w-full">
        <span>Solicitar Análisis Personalizado</span>
      </Button>
      
      <p className="text-micro text-roiba-verde/50 text-center">
        Su información es confidencial y está protegida bajo estándares GDPR.
      </p>
    </form>
  )
}
