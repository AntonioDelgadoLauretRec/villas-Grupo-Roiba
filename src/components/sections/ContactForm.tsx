'use client'

import { FC, useState } from 'react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { trackFormSubmit } from '@/lib/analytics'

type LeadType = 'inversion' | 'servicios'

interface FormData {
  lead_type: LeadType
  full_name: string
  email: string
  phone: string
  country: string
  investment_capacity: string
  service_type: string
  message: string
  gdpr_consent: boolean
  marketing_consent: boolean
}

const INVESTMENT_OPTIONS = [
  { value: '250k-500k', label: '$250,000 - $500,000 USD' },
  { value: '500k-1m', label: '$500,000 - $1,000,000 USD' },
  { value: '1m-2m', label: '$1,000,000 - $2,000,000 USD' },
  { value: '2m-5m', label: '$2,000,000 - $5,000,000 USD' },
]

const COUNTRIES = [
  { value: 'ES', label: { es: 'España', en: 'Spain' } },
  { value: 'US', label: { es: 'Estados Unidos', en: 'United States' } },
  { value: 'DE', label: { es: 'Alemania', en: 'Germany' } },
  { value: 'FR', label: { es: 'Francia', en: 'France' } },
  { value: 'UK', label: { es: 'Reino Unido', en: 'United Kingdom' } },
  { value: 'MX', label: { es: 'México', en: 'Mexico' } },
  { value: 'AR', label: { es: 'Argentina', en: 'Argentina' } },
  { value: 'CO', label: { es: 'Colombia', en: 'Colombia' } },
  { value: 'OTHER', label: { es: 'Otro', en: 'Other' } },
]

export const ContactForm: FC = () => {
  const { locale, t } = useLanguage()
  const cf = t.contactForm

  const SERVICE_OPTIONS = [
    { value: 'direccion-tecnica', label: cf.direccionTecnica },
    { value: 'construccion-villa', label: cf.construccionLlaveEnMano },
    { value: 'project-management', label: cf.gestionProyecto },
    { value: 'due-diligence', label: cf.dueDiligence },
    { value: 'interiorismo', label: cf.interiorismo },
    { value: 'roiba-care', label: cf.roibaCare },
    { value: 'orientacion', label: cf.orientacion },
  ]

  const [formData, setFormData] = useState<FormData>({
    lead_type: 'inversion',
    full_name: '',
    email: '',
    phone: '',
    country: '',
    investment_capacity: '',
    service_type: '',
    message: '',
    gdpr_consent: false,
    marketing_consent: false,
  })

  const [errors, setErrors] = useState<Partial<Record<string, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<string, string>> = {}

    if (!formData.full_name.trim() || formData.full_name.length < 2) {
      newErrors.full_name = cf.nombreRequerido
    }

    if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      newErrors.email = cf.emailInvalido
    }

    if (!formData.phone.trim()) {
      newErrors.phone = cf.telefonoRequerido
    }

    if (!formData.country) {
      newErrors.country = cf.paisRequerido
    }

    if (formData.lead_type === 'inversion' && !formData.investment_capacity) {
      newErrors.investment_capacity = cf.inversionRequerida
    }

    if (formData.lead_type === 'servicios' && !formData.service_type) {
      newErrors.service_type = cf.servicioRequerido
    }

    if (!formData.gdpr_consent) {
      newErrors.gdpr_consent = cf.gdprRequerido
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const payload: Record<string, unknown> = {
        lead_type: formData.lead_type,
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        message: formData.message,
        gdpr_consent: formData.gdpr_consent,
        marketing_consent: formData.marketing_consent,
      }

      if (formData.lead_type === 'inversion') {
        payload.investment_capacity = formData.investment_capacity
      } else {
        payload.service_type = formData.service_type
      }

      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Error')

      trackFormSubmit('contact_form', formData.lead_type)
      setSubmitStatus('success')
      setFormData({
        lead_type: 'inversion',
        full_name: '',
        email: '',
        phone: '',
        country: '',
        investment_capacity: '',
        service_type: '',
        message: '',
        gdpr_consent: false,
        marketing_consent: false,
      })
    } catch {
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

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const setLeadType = (type: LeadType) => {
    setFormData(prev => ({
      ...prev,
      lead_type: type,
      investment_capacity: '',
      service_type: '',
    }))
    setErrors({})
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
          {cf.solicitudRecibida}
        </h3>
        <p className="text-body text-roiba-verde/70 mb-6">
          {cf.solicitudRecibidaDesc}
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="text-caption font-medium text-roiba-dorado hover:text-roiba-verde transition-colors"
        >
          {cf.enviarOtra}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-caption font-medium text-roiba-verde mb-3">
          {cf.tipoSolicitud}
        </label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setLeadType('inversion')}
            className={cn(
              'px-4 py-4 border text-sm font-medium transition-all duration-300 text-center',
              formData.lead_type === 'inversion'
                ? 'bg-roiba-verde text-white border-roiba-verde'
                : 'bg-white text-roiba-verde/70 border-roiba-verde/20 hover:border-roiba-dorado hover:text-roiba-verde'
            )}
          >
            <span className="block font-semibold mb-1">{cf.inversionVilla}</span>
            <span className="block text-xs opacity-70">{cf.inversionDesc}</span>
          </button>
          <button
            type="button"
            onClick={() => setLeadType('servicios')}
            className={cn(
              'px-4 py-4 border text-sm font-medium transition-all duration-300 text-center',
              formData.lead_type === 'servicios'
                ? 'bg-roiba-verde text-white border-roiba-verde'
                : 'bg-white text-roiba-verde/70 border-roiba-verde/20 hover:border-roiba-dorado hover:text-roiba-verde'
            )}
          >
            <span className="block font-semibold mb-1">{cf.solicitudServicios}</span>
            <span className="block text-xs opacity-70">{cf.serviciosDesc}</span>
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-caption font-medium text-roiba-verde mb-2">
            {cf.nombreCompleto} *
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
            placeholder={cf.suNombre}
          />
          {errors.full_name && (
            <p className="mt-1 text-micro text-red-500">{errors.full_name}</p>
          )}
        </div>

        <div>
          <label className="block text-caption font-medium text-roiba-verde mb-2">
            {cf.emailLabel} *
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

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-caption font-medium text-roiba-verde mb-2">
            {cf.telefono} *
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
            {cf.paisResidencia} *
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
            <option value="">{cf.seleccionarPais}</option>
            {COUNTRIES.map(country => (
              <option key={country.value} value={country.value}>
                {country.label[locale]}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="mt-1 text-micro text-red-500">{errors.country}</p>
          )}
        </div>
      </div>

      {formData.lead_type === 'inversion' ? (
        <div>
          <label className="block text-caption font-medium text-roiba-verde mb-2">
            {cf.capacidadInversion} *
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
            <option value="">{cf.seleccionarRango}</option>
            {INVESTMENT_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
            <option value="5m+">{cf.masDE5M}</option>
          </select>
          {errors.investment_capacity && (
            <p className="mt-1 text-micro text-red-500">{errors.investment_capacity}</p>
          )}
        </div>
      ) : (
        <div>
          <label className="block text-caption font-medium text-roiba-verde mb-2">
            {cf.tipoServicio} *
          </label>
          <select
            name="service_type"
            value={formData.service_type}
            onChange={handleChange}
            className={cn(
              'w-full px-4 py-3 bg-white border text-roiba-verde appearance-none',
              'focus:outline-none focus:border-roiba-dorado transition-colors',
              errors.service_type ? 'border-red-500' : 'border-roiba-verde/20'
            )}
          >
            <option value="">{cf.seleccionarServicio}</option>
            {SERVICE_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.service_type && (
            <p className="mt-1 text-micro text-red-500">{errors.service_type}</p>
          )}
        </div>
      )}

      <div>
        <label className="block text-caption font-medium text-roiba-verde mb-2">
          {cf.mensaje}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-white border border-roiba-verde/20 text-roiba-verde focus:outline-none focus:border-roiba-dorado transition-colors resize-none"
          placeholder={formData.lead_type === 'inversion' ? cf.placeholderInversion : cf.placeholderServicios}
        />
      </div>

      <div className="space-y-4">
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="gdpr_consent" checked={formData.gdpr_consent} onChange={handleChange} className="mt-1 w-4 h-4 accent-roiba-dorado" />
          <span className="text-caption text-roiba-verde/70">
            {cf.gdprText}{' '}
            <a href="/privacidad" className="text-roiba-dorado hover:underline">
              {cf.politicaPrivacidad}
            </a>
            . *
          </span>
        </label>
        {errors.gdpr_consent && (
          <p className="text-micro text-red-500">{errors.gdpr_consent}</p>
        )}

        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" name="marketing_consent" checked={formData.marketing_consent} onChange={handleChange} className="mt-1 w-4 h-4 accent-roiba-dorado" />
          <span className="text-caption text-roiba-verde/70">
            {cf.marketingText}
          </span>
        </label>
      </div>

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-50 border border-red-200 text-red-600 text-caption">
          {cf.errorSubmit}
        </div>
      )}

      <Button type="submit" variant="primary" size="lg" isLoading={isSubmitting} className="w-full">
        <span>{formData.lead_type === 'inversion' ? cf.enviarInversion : cf.enviarServicios}</span>
      </Button>

      <p className="text-micro text-roiba-verde/50 text-center">
        {cf.gdprNote}
      </p>
    </form>
  )
}
