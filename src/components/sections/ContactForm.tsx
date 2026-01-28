'use client'

import { useState, FormEvent } from 'react'
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { Button, Input, Textarea, Select } from '@/components/ui'

// Tipos alineados con el schema del API
type InvestmentCapacity = '500k-1m' | '1m-2m' | '2m+'
type PreferredContact = 'email' | 'phone' | 'whatsapp'

interface FormData {
  email: string
  full_name: string
  phone: string
  country: string
  investment_capacity: InvestmentCapacity | ''
  message: string
  preferred_contact: PreferredContact
  gdpr_consent: boolean
  marketing_consent: boolean
}

interface FormErrors {
  [key: string]: string
}

const COUNTRY_OPTIONS = [
  { value: '', label: 'Seleccione país' },
  { value: 'ES', label: '🇪🇸 España' },
  { value: 'US', label: '🇺🇸 Estados Unidos' },
  { value: 'DE', label: '🇩🇪 Alemania' },
  { value: 'FR', label: '🇫🇷 Francia' },
  { value: 'UK', label: '🇬🇧 Reino Unido' },
  { value: 'IT', label: '🇮🇹 Italia' },
  { value: 'NL', label: '🇳🇱 Países Bajos' },
  { value: 'BE', label: '🇧🇪 Bélgica' },
  { value: 'CH', label: '🇨🇭 Suiza' },
  { value: 'AT', label: '🇦🇹 Austria' },
  { value: 'CA', label: '🇨🇦 Canadá' },
  { value: 'MX', label: '🇲🇽 México' },
  { value: 'BR', label: '🇧🇷 Brasil' },
  { value: 'AR', label: '🇦🇷 Argentina' },
  { value: 'CO', label: '🇨🇴 Colombia' },
  { value: 'OTHER', label: 'Otro' },
]

const INVESTMENT_OPTIONS = [
  { value: '', label: 'Capacidad de inversión *' },
  { value: '500k-1m', label: '$500,000 - $1,000,000' },
  { value: '1m-2m', label: '$1,000,000 - $2,000,000' },
  { value: '2m+', label: 'Más de $2,000,000' },
]

const CONTACT_OPTIONS = [
  { value: 'email', label: 'Email' },
  { value: 'phone', label: 'Teléfono' },
  { value: 'whatsapp', label: 'WhatsApp' },
]

interface ContactFormProps {
  className?: string
  variant?: 'default' | 'compact'
  sourceContext?: string // e.g., "villa-coral-bay" para tracking
}

export function ContactForm({ 
  className = '', 
  variant = 'default',
  sourceContext 
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    full_name: '',
    phone: '',
    country: '',
    investment_capacity: '',
    message: '',
    preferred_contact: 'email',
    gdpr_consent: false,
    marketing_consent: false,
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [serverMessage, setServerMessage] = useState('')

  // Validación client-side básica
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.email) {
      newErrors.email = 'Email es obligatorio'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email inválido'
    }

    if (!formData.full_name || formData.full_name.length < 2) {
      newErrors.full_name = 'Nombre es obligatorio (mínimo 2 caracteres)'
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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setStatus('loading')
    setServerMessage('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          country: formData.country || undefined,
          phone: formData.phone || undefined,
          message: formData.message || undefined,
          // Tracking opcional
          ...(sourceContext && { source_context: sourceContext }),
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setStatus('success')
        setServerMessage(data.message || 'Solicitud enviada correctamente')
        // Reset form
        setFormData({
          email: '',
          full_name: '',
          phone: '',
          country: '',
          investment_capacity: '',
          message: '',
          preferred_contact: 'email',
          gdpr_consent: false,
          marketing_consent: false,
        })
      } else {
        setStatus('error')
        if (data.details) {
          // Map server errors to form fields
          const serverErrors: FormErrors = {}
          data.details.forEach((err: { field: string; message: string }) => {
            serverErrors[err.field] = err.message
          })
          setErrors(serverErrors)
        }
        setServerMessage(data.error || 'Error al enviar solicitud')
      }
    } catch (error) {
      setStatus('error')
      setServerMessage('Error de conexión. Por favor intente más tarde.')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    
    setFormData(prev => ({ ...prev, [name]: newValue }))
    
    // Clear field error on change
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  // Success state
  if (status === 'success') {
    return (
      <div className={`bg-green-50 border border-green-200 rounded-2xl p-8 text-center ${className}`}>
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-serif font-bold text-green-800 mb-2">
          ¡Solicitud Recibida!
        </h3>
        <p className="text-green-700 mb-6">
          {serverMessage}
        </p>
        <Button 
          variant="outline" 
          onClick={() => setStatus('idle')}
          className="border-green-500 text-green-700 hover:bg-green-100"
        >
          Enviar otra consulta
        </Button>
      </div>
    )
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className={`space-y-6 ${className}`}
      noValidate
    >
      {/* Error banner */}
      {status === 'error' && serverMessage && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-red-700 text-sm">{serverMessage}</p>
        </div>
      )}

      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          name="full_name"
          label="Nombre completo *"
          placeholder="Juan García López"
          value={formData.full_name}
          onChange={handleChange}
          error={errors.full_name}
          disabled={status === 'loading'}
          required
        />
        <Input
          name="email"
          type="email"
          label="Email *"
          placeholder="juan@ejemplo.com"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          disabled={status === 'loading'}
          required
        />
      </div>

      {/* Phone & Country */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          name="phone"
          type="tel"
          label="Teléfono"
          placeholder="+34 612 345 678"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          disabled={status === 'loading'}
        />
        <Select
          name="country"
          label="País de residencia"
          value={formData.country}
          onChange={handleChange}
          options={COUNTRY_OPTIONS}
          disabled={status === 'loading'}
        />
      </div>

      {/* Investment & Preferred Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Select
          name="investment_capacity"
          label="Capacidad de inversión *"
          value={formData.investment_capacity}
          onChange={handleChange}
          options={INVESTMENT_OPTIONS}
          error={errors.investment_capacity}
          disabled={status === 'loading'}
          required
        />
        <Select
          name="preferred_contact"
          label="Contacto preferido"
          value={formData.preferred_contact}
          onChange={handleChange}
          options={CONTACT_OPTIONS}
          disabled={status === 'loading'}
        />
      </div>

      {/* Message */}
      {variant === 'default' && (
        <Textarea
          name="message"
          label="Mensaje (opcional)"
          placeholder="Cuéntenos sobre sus intereses de inversión, propiedades que le interesan, fechas de visita..."
          value={formData.message}
          onChange={handleChange}
          rows={4}
          maxLength={1000}
          disabled={status === 'loading'}
        />
      )}

      {/* Consent Checkboxes */}
      <div className="space-y-3">
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="gdpr_consent"
            checked={formData.gdpr_consent}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="mt-1 w-4 h-4 rounded border-gray-300 text-dorado focus:ring-dorado"
          />
          <span className={`text-sm ${errors.gdpr_consent ? 'text-red-600' : 'text-gray-600'}`}>
            * Acepto la{' '}
            <a href="/privacidad" className="text-oceano hover:underline" target="_blank">
              Política de Privacidad
            </a>
            {' '}y el tratamiento de mis datos para recibir información sobre propiedades de inversión.
          </span>
        </label>

        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            name="marketing_consent"
            checked={formData.marketing_consent}
            onChange={handleChange}
            disabled={status === 'loading'}
            className="mt-1 w-4 h-4 rounded border-gray-300 text-dorado focus:ring-dorado"
          />
          <span className="text-sm text-gray-600">
            Deseo recibir comunicaciones comerciales y novedades del mercado inmobiliario.
          </span>
        </label>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={status === 'loading'}
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Solicitar Información
          </>
        )}
      </Button>

      <p className="text-xs text-center text-gray-500">
        Sus datos están protegidos y nunca serán compartidos con terceros.
      </p>
    </form>
  )
}
