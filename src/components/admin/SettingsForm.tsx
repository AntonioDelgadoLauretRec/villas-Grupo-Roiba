'use client'

import { useState, type FormEvent } from 'react'
import { FormInput, FormTextarea, FormError, FormSuccess, SubmitButton } from './FormFields'
import { updateSettingAction, type ActionResult } from '@/lib/admin/actions'

interface SettingsFormProps {
  settingKey: string
  title: string
  description?: string
  fields: {
    name: string
    label: string
    type?: 'text' | 'textarea'
    placeholder?: string
  }[]
  values: Record<string, string>
}

export default function SettingsForm({
  settingKey,
  title,
  description,
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
    } else if (result.error) {
      setError(result.error)
    }
    setPending(false)
  }

  return (
    <fieldset className="bg-white border border-slate-200 rounded-sm p-6">
      <legend className="text-sm font-medium text-slate-900 px-2">{title}</legend>
      {description && (
        <p className="text-xs text-slate-500 mt-1 mb-4">{description}</p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <input type="hidden" name="key" value={settingKey} />

        <FormError message={error} />
        {success && <FormSuccess message="Ajustes guardados correctamente" />}

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

        <SubmitButton label="Guardar ajustes" pending={pending} />
      </form>
    </fieldset>
  )
}
