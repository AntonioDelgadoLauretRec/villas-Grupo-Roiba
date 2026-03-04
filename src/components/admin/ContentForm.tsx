'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import type { ActionResult } from '@/lib/admin/actions'

export interface FormField {
  name: string
  label: string
  type?: 'text' | 'textarea' | 'number' | 'select' | 'checkbox' | 'url'
  placeholder?: string
  required?: boolean
  options?: { value: string; label: string }[]
  rows?: number
  help?: string
}

interface ContentFormProps {
  title: string
  fields: FormField[]
  initialData?: Record<string, unknown>
  action: (prev: ActionResult, formData: FormData) => Promise<ActionResult>
  backPath: string
  isEdit?: boolean
}

export default function ContentForm({
  title,
  fields,
  initialData = {},
  action,
  backPath,
  isEdit = false,
}: ContentFormProps) {
  const router = useRouter()
  const [form, setForm] = useState<Record<string, unknown>>(() => {
    const defaults: Record<string, unknown> = {}
    for (const f of fields) {
      defaults[f.name] = initialData[f.name] ?? (f.type === 'checkbox' ? false : f.type === 'number' ? 0 : '')
    }
    return defaults
  })
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSaving(true)
    setError('')

    const fd = new FormData()
    if (isEdit && initialData.id) fd.set('id', String(initialData.id))

    for (const f of fields) {
      if (f.type === 'checkbox') {
        if (form[f.name]) fd.set(f.name, 'true')
      } else {
        fd.set(f.name, String(form[f.name] ?? ''))
      }
    }

    const result = await action({ success: false }, fd)
    if (result.success) {
      if (result.redirectTo) router.push(result.redirectTo)
      else router.push(backPath)
    } else {
      setError(result.error || 'Error desconocido')
    }
    setSaving(false)
  }

  function onChange(name: string, value: unknown) {
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <Link href={backPath} className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-sm transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" /></svg>
        </Link>
        <h1 className="text-2xl font-serif text-slate-900">{title}</h1>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 text-sm flex items-center gap-2">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-sm">
        <div className="p-6 space-y-5">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">
                {field.label}
                {field.required && <span className="text-red-400 ml-0.5">*</span>}
              </label>

              {field.type === 'textarea' ? (
                <textarea
                  value={String(form[field.name] ?? '')}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  placeholder={field.placeholder}
                  rows={field.rows || 3}
                  className="w-full px-3 py-2 border border-slate-300 rounded-sm text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-roiba-verde focus:ring-1 focus:ring-roiba-verde/20"
                />
              ) : field.type === 'select' ? (
                <select
                  value={String(form[field.name] ?? '')}
                  onChange={(e) => onChange(field.name, e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-sm text-sm text-slate-900 focus:outline-none focus:border-roiba-verde focus:ring-1 focus:ring-roiba-verde/20"
                >
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              ) : field.type === 'checkbox' ? (
                <label className="inline-flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={Boolean(form[field.name])}
                    onChange={(e) => onChange(field.name, e.target.checked)}
                    className="w-4 h-4 rounded border-slate-300 text-roiba-verde focus:ring-roiba-verde/20"
                  />
                  <span className="text-sm text-slate-600">{field.placeholder || 'Activar'}</span>
                </label>
              ) : (
                <input
                  type={field.type === 'number' ? 'number' : 'text'}
                  value={String(form[field.name] ?? '')}
                  onChange={(e) => onChange(field.name, field.type === 'number' ? Number(e.target.value) : e.target.value)}
                  placeholder={field.placeholder}
                  required={field.required}
                  step={field.type === 'number' ? 'any' : undefined}
                  className="w-full px-3 py-2 border border-slate-300 rounded-sm text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-roiba-verde focus:ring-1 focus:ring-roiba-verde/20"
                />
              )}

              {field.help && <p className="mt-1 text-xs text-slate-400">{field.help}</p>}
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 px-6 py-4 flex items-center justify-end gap-3">
          <Link href={backPath} className="px-4 py-2 text-sm text-slate-600 border border-slate-300 rounded-sm hover:bg-slate-50 font-medium">
            Cancelar
          </Link>
          <button
            type="submit"
            disabled={saving}
            className="px-5 py-2 text-sm bg-roiba-verde text-white rounded-sm hover:bg-roiba-verde-light font-medium disabled:opacity-50 transition-colors"
          >
            {saving ? 'Guardando...' : isEdit ? 'Guardar cambios' : 'Crear'}
          </button>
        </div>
      </form>
    </div>
  )
}
