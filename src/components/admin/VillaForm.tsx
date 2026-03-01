'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import {
  FormInput,
  FormTextarea,
  FormSelect,
  FormCheckbox,
  FormError,
  SubmitButton,
} from './FormFields'
import ImageUploader from './ImageUploader'
import type { ActionResult } from '@/lib/admin/actions'
import type { Villa } from '@/types/admin'

interface VillaFormProps {
  action: (state: ActionResult, formData: FormData) => Promise<ActionResult>
  villa?: Villa
}

export default function VillaForm({ action, villa }: VillaFormProps) {
  const router = useRouter()
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const result = await action({ success: false }, formData)

    if (result.success && result.redirectTo) {
      router.push(result.redirectTo)
      return
    }
    if (result.error) {
      setError(result.error)
    }
    setPending(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {villa && <input type="hidden" name="id" value={villa.id} />}

      <FormError message={error} />

      {/* Basic info */}
      <fieldset className="bg-white border border-slate-200 rounded-sm p-6">
        <legend className="text-sm font-medium text-slate-900 px-2">Información básica</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <FormInput name="title" label="Título" defaultValue={villa?.title} required placeholder="Villa Excellence" />
          <FormInput name="slug" label="Slug (URL)" defaultValue={villa?.slug} required placeholder="villa-excellence" />
          <FormInput name="location" label="Ubicación" defaultValue={villa?.location || 'Punta Cana'} placeholder="Punta Cana" />
          <FormInput name="year" label="Año" defaultValue={villa?.year} placeholder="2024" />
          <FormInput name="sort_order" label="Orden de aparición" type="number" defaultValue={String(villa?.sort_order ?? 0)} />
          <FormSelect
            name="status"
            label="Estado"
            defaultValue={villa?.status || 'draft'}
            options={[
              { value: 'draft', label: 'Borrador' },
              { value: 'published', label: 'Publicada' },
              { value: 'hidden', label: 'Oculta' },
            ]}
          />
        </div>
        <div className="mt-4">
          <FormCheckbox name="featured" label="Villa destacada" defaultChecked={villa?.featured} />
        </div>
      </fieldset>

      {/* Specs */}
      <fieldset className="bg-white border border-slate-200 rounded-sm p-6">
        <legend className="text-sm font-medium text-slate-900 px-2">Características</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <FormInput name="bedrooms" label="Habitaciones" type="number" defaultValue={String(villa?.bedrooms ?? 0)} />
          <FormInput name="bathrooms" label="Baños" type="number" defaultValue={String(villa?.bathrooms ?? 0)} />
          <FormInput name="area_sqm" label="Superficie (m²)" type="number" defaultValue={String(villa?.area_sqm ?? 0)} />
          <FormInput name="price_usd" label="Precio (USD)" type="number" defaultValue={String(villa?.price_usd ?? 0)} />
        </div>
      </fieldset>

      {/* Description */}
      <fieldset className="bg-white border border-slate-200 rounded-sm p-6">
        <legend className="text-sm font-medium text-slate-900 px-2">Descripción</legend>
        <div className="space-y-4 mt-4">
          <FormTextarea name="short_description" label="Descripción corta" defaultValue={villa?.short_description} rows={2} placeholder="Breve resumen de la villa..." />
          <FormTextarea name="long_description" label="Descripción completa" defaultValue={villa?.long_description} rows={6} placeholder="Descripción detallada..." />
        </div>
      </fieldset>

      {/* Main image */}
      <fieldset className="bg-white border border-slate-200 rounded-sm p-6">
        <legend className="text-sm font-medium text-slate-900 px-2">Imagen principal</legend>
        <div className="mt-4">
          <ImageUploader name="main_image" label="Imagen principal" defaultValue={villa?.main_image} folder="villas" />
        </div>
      </fieldset>

      {/* SEO */}
      <fieldset className="bg-white border border-slate-200 rounded-sm p-6">
        <legend className="text-sm font-medium text-slate-900 px-2">SEO (opcional)</legend>
        <div className="space-y-4 mt-4">
          <FormInput name="seo_title" label="Título SEO" defaultValue={villa?.seo_title} placeholder="Título para buscadores" />
          <FormTextarea name="seo_description" label="Meta descripción" defaultValue={villa?.seo_description} rows={2} placeholder="Descripción para buscadores (max 160 caracteres)" />
        </div>
      </fieldset>

      {/* Submit */}
      <div className="flex items-center gap-4">
        <SubmitButton label={villa ? 'Actualizar villa' : 'Crear villa'} pending={pending} />
        <a href="/admin/villas" className="text-sm text-slate-500 hover:text-slate-700">
          Cancelar
        </a>
      </div>
    </form>
  )
}
