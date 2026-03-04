'use client'

import { useState, type FormEvent } from 'react'
import { FormInput, FormTextarea, FormError, FormSuccess, SubmitButton } from './FormFields'
import { updateSettingAction, type ActionResult } from '@/lib/admin/actions'

interface SettingsFormProps {
  settingKey: string
  title: string
  description?: string
  icon?: 'hero' | 'contact' | 'seo'
  fields: {
    name: string
    label: string
    type?: 'text' | 'textarea'
    placeholder?: string
  }[]
  values: Record<string, string>
}

function SectionIcon({ icon }: { icon?: string }) {
  if (icon === 'hero') {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    )
  }
  if (icon === 'contact') {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.574 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }
  if (icon === 'seo') {
    return (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    )
  }
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4" />
    </svg>
  )
}

export default function SettingsForm({
  settingKey,
  title,
  description,
  icon,
  fields,
  values,
}: SettingsFormProps) {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [pending, setPending] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setError('')
    setSuccess(false)

    const formData = new FormData(e.currentTarget)
    const result: ActionResult = await updateSettingAction({ success: false }, formData)

    if (result.success) {
      setSuccess(true)
      setTimeout(() => setSuccess(false), 4000)
    } else if (result.error) {
      setError(result.error)
    }
    setPending(false)
  }

  return (
    <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3">
          <span className="text-slate-400">
            <SectionIcon icon={icon} />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
            {description && <p className="text-xs text-slate-400 mt-0.5">{description}</p>}
          </div>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6">
        <input type="hidden" name="key" value={settingKey} />

        {error && (
          <div className="mb-4">
            <FormError message={error} />
          </div>
        )}
        {success && (
          <div className="mb-4">
            <FormSuccess message="Ajustes guardados correctamente" />
          </div>
        )}

        <div className="space-y-4">
          {fields.map((field) =>
            field.type === 'textarea' ? (
              <FormTextarea
                key={field.name}
                name={field.name}
                label={field.label}
                defaultValue={values[field.name] || ''}
                rows={3}
                placeholder={field.placeholder}
              />
            ) : (
              <FormInput
                key={field.name}
                name={field.name}
                label={field.label}
                defaultValue={values[field.name] || ''}
                placeholder={field.placeholder}
              />
            )
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100">
          <SubmitButton label="Guardar ajustes" pendingLabel="Guardando..." pending={pending} />
        </div>
      </form>
    </div>
  )
}
