'use client'

import { type FC, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Input, Select, Checkbox, Textarea } from '@/components/ui'
import { 
  leadSchema, 
  type Lead,
  calculateLeadScore 
} from '@/lib/validation/schemas'
import { INVESTMENT_RANGES, TIMELINES, LOCATIONS } from '@/lib/utils'
import { cn } from '@/lib/utils'

type Situation = 'has_land' | 'full_investment' | 'info_only'

export interface ContactFormProps {
  locale?: 'es' | 'en'
  defaultSituation?: Situation
  variant?: 'light' | 'dark'
  onSuccess?: (data: Lead) => void
}

const content = {
  es: {
    title: 'Empezar Proyecto',
    subtitle: '¿Cuál es tu situación actual?',
    situations: {
      has_land: 'Tengo terreno, busco constructor',
      full_investment: 'Busco terreno y proyecto llave en mano',
      info_only: 'Solo busco información / Estudio de mercado',
    },
    fields: {
      full_name: 'Nombre completo',
      email: 'Email',
      phone: 'Teléfono (con código país)',
      country: 'País de residencia',
      land_location: 'Ubicación del terreno',
      land_size: 'Superficie aproximada (m²)',
      project_description: 'Descripción del proyecto (opcional)',
      investment_capacity: 'Rango de inversión',
      preferred_location: 'Ubicación preferida',
      timeline: 'Plazo de inversión',
    },
    consents: {
      gdpr: 'Acepto la política de privacidad y el tratamiento de mis datos.',
      aml: 'Confirmo que los fondos de inversión tienen origen lícito.',
      marketing: 'Acepto recibir comunicaciones comerciales (opcional).',
    },
    submit: {
      has_land: 'Cotizar Construcción de Villa',
      full_investment: 'Solicitar Asesoría de Inversión',
      info_only: 'Acceder al Dossier de Inversor',
    },
    success: {
      title: '¡Solicitud enviada!',
      message: 'Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.',
    },
    error: 'Ha ocurrido un error. Por favor, inténtalo de nuevo.',
  },
  en: {
    title: 'Start Project',
    subtitle: "What's your current situation?",
    situations: {
      has_land: 'I have land, looking for a builder',
      full_investment: 'Looking for land and turnkey project',
      info_only: 'Just looking for information / Market study',
    },
    fields: {
      full_name: 'Full name',
      email: 'Email',
      phone: 'Phone (with country code)',
      country: 'Country of residence',
      land_location: 'Land location',
      land_size: 'Approximate area (sqm)',
      project_description: 'Project description (optional)',
      investment_capacity: 'Investment range',
      preferred_location: 'Preferred location',
      timeline: 'Investment timeline',
    },
    consents: {
      gdpr: 'I accept the privacy policy and data processing.',
      aml: 'I confirm that investment funds are from legitimate sources.',
      marketing: 'I agree to receive commercial communications (optional).',
    },
    submit: {
      has_land: 'Quote Villa Construction',
      full_investment: 'Request Investment Advisory',
      info_only: 'Access Investor Dossier',
    },
    success: {
      title: 'Request sent!',
      message: 'Our team will contact you within 24 hours.',
    },
    error: 'An error occurred. Please try again.',
  },
}

export const ContactForm: FC<ContactFormProps> = ({
  locale = 'es',
  defaultSituation,
  variant = 'light',
  onSuccess,
}) => {
  const t = content[locale]
  const [situation, setSituation] = useState<Situation | null>(defaultSituation || null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Lead>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      situation: defaultSituation,
      country: 'ES',
      gdpr_consent: false,
      marketing_consent: false,
    },
  })

  const onSubmit = async (data: Lead) => {
    setIsSubmitting(true)
    setError(null)

    try {
      // Calculate lead score for prioritization
      const { score, tier, priority } = calculateLeadScore(data)
      
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          lead_score: score,
          lead_tier: tier,
          lead_priority: priority,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      setIsSuccess(true)
      reset()
      onSuccess?.(data)
    } catch (err) {
      setError(t.error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Success State
  if (isSuccess) {
    return (
      <div className={cn(
        'p-8 rounded-sm text-center',
        variant === 'dark' ? 'bg-roiba-verde-light' : 'bg-white'
      )}>
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
          <CheckIcon className="w-8 h-8 text-green-600" />
        </div>
        <h3 className={cn(
          'font-serif text-2xl mb-2',
          variant === 'dark' ? 'text-roiba-arena' : 'text-roiba-verde'
        )}>
          {t.success.title}
        </h3>
        <p className={cn(
          variant === 'dark' ? 'text-roiba-arena/70' : 'text-roiba-verde/70'
        )}>
          {t.success.message}
        </p>
      </div>
    )
  }

  return (
    <div className={cn(
      'rounded-sm overflow-hidden',
      variant === 'dark' ? 'bg-roiba-verde' : 'bg-white shadow-luxury'
    )}>
      {/* Header */}
      <div className={cn(
        'p-6 border-b',
        variant === 'dark' ? 'border-roiba-arena/10' : 'border-roiba-verde/10'
      )}>
        <h3 className={cn(
          'font-serif text-2xl',
          variant === 'dark' ? 'text-roiba-arena' : 'text-roiba-verde'
        )}>
          {t.title}
        </h3>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
        {/* Situation Selector */}
        <div>
          <p className={cn(
            'text-sm font-medium mb-3',
            variant === 'dark' ? 'text-roiba-arena' : 'text-roiba-verde'
          )}>
            {t.subtitle}
          </p>
          <div className="space-y-2">
            {(['has_land', 'full_investment', 'info_only'] as Situation[]).map((option) => (
              <label
                key={option}
                className={cn(
                  'flex items-center gap-3 p-4 rounded-sm border-2 cursor-pointer transition-all',
                  situation === option
                    ? 'border-roiba-dorado bg-roiba-dorado/10'
                    : variant === 'dark'
                      ? 'border-roiba-arena/20 hover:border-roiba-arena/40'
                      : 'border-roiba-verde/20 hover:border-roiba-verde/40'
                )}
              >
                <input
                  type="radio"
                  {...register('situation')}
                  value={option}
                  checked={situation === option}
                  onChange={() => setSituation(option)}
                  className="sr-only"
                />
                <div className={cn(
                  'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                  situation === option
                    ? 'border-roiba-dorado bg-roiba-dorado'
                    : variant === 'dark'
                      ? 'border-roiba-arena/40'
                      : 'border-roiba-verde/40'
                )}>
                  {situation === option && (
                    <div className="w-2 h-2 rounded-full bg-white" />
                  )}
                </div>
                <span className={variant === 'dark' ? 'text-roiba-arena' : 'text-roiba-verde'}>
                  {t.situations[option]}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Dynamic Fields Based on Situation */}
        {situation && (
          <>
            {/* Base Contact Fields */}
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                {...register('full_name')}
                label={t.fields.full_name}
                placeholder="Juan García"
                error={errors.full_name?.message}
                variant={variant}
              />
              <Input
                {...register('email')}
                type="email"
                label={t.fields.email}
                placeholder="juan@empresa.com"
                error={errors.email?.message}
                variant={variant}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                {...register('phone')}
                type="tel"
                label={t.fields.phone}
                placeholder="+34 600 000 000"
                error={errors.phone?.message}
                variant={variant}
              />
              <Select
                {...register('country')}
                label={t.fields.country}
                options={[
                  { value: 'ES', label: 'España' },
                  { value: 'US', label: 'Estados Unidos' },
                  { value: 'MX', label: 'México' },
                  { value: 'CO', label: 'Colombia' },
                  { value: 'AR', label: 'Argentina' },
                  { value: 'DO', label: 'República Dominicana' },
                  { value: 'OTHER', label: locale === 'es' ? 'Otro' : 'Other' },
                ]}
                error={errors.country?.message}
                variant={variant}
              />
            </div>

            {/* Has Land - Extra Fields */}
            {situation === 'has_land' && (
              <>
                <Input
                  {...register('land_location' as any)}
                  label={t.fields.land_location}
                  placeholder="Cap Cana, Punta Cana"
                  error={(errors as any).land_location?.message}
                  variant={variant}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    {...register('land_size' as any)}
                    label={t.fields.land_size}
                    placeholder="1,500"
                    error={(errors as any).land_size?.message}
                    variant={variant}
                  />
                </div>
                <Textarea
                  {...(register('project_description' as any) as any)}
                  label={t.fields.project_description}
                  placeholder={locale === 'es' 
                    ? 'Cuéntanos sobre tu proyecto ideal...'
                    : 'Tell us about your ideal project...'}
                  rows={3}
                  variant={variant}
                />
              </>
            )}

            {/* Full Investment - Extra Fields */}
            {situation === 'full_investment' && (
              <>
                <Select
                  {...register('investment_capacity' as any)}
                  label={t.fields.investment_capacity}
                  placeholder={locale === 'es' ? 'Seleccionar rango' : 'Select range'}
                  options={INVESTMENT_RANGES.map(r => ({
                    value: r.value,
                    label: locale === 'es' ? r.label : r.labelEN,
                  }))}
                  error={(errors as any).investment_capacity?.message}
                  variant={variant}
                />
                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    {...register('preferred_location' as any)}
                    label={t.fields.preferred_location}
                    placeholder={locale === 'es' ? 'Seleccionar ubicación' : 'Select location'}
                    options={LOCATIONS.map(l => ({ value: l.value, label: l.label }))}
                    variant={variant}
                  />
                  <Select
                    {...register('timeline' as any)}
                    label={t.fields.timeline}
                    placeholder={locale === 'es' ? 'Seleccionar plazo' : 'Select timeline'}
                    options={TIMELINES.map(t => ({
                      value: t.value,
                      label: locale === 'es' ? t.label : t.labelEN,
                    }))}
                    variant={variant}
                  />
                </div>
              </>
            )}

            {/* Consents */}
            <div className="space-y-3 pt-4 border-t border-roiba-verde/10">
              <Checkbox
                {...register('gdpr_consent')}
                label={t.consents.gdpr}
                error={errors.gdpr_consent?.message}
                variant={variant}
              />
              {situation !== 'info_only' && (
                <Checkbox
                  {...register('aml_consent' as any)}
                  label={t.consents.aml}
                  error={(errors as any).aml_consent?.message}
                  variant={variant}
                />
              )}
              <Checkbox
                {...register('marketing_consent')}
                label={t.consents.marketing}
                variant={variant}
              />
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
              isLoading={isSubmitting}
            >
              {t.submit[situation]}
            </Button>
          </>
        )}
      </form>
    </div>
  )
}

/* ===== ICONS ===== */
const CheckIcon: FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 6L9 17l-5-5" />
  </svg>
)

export default ContactForm
