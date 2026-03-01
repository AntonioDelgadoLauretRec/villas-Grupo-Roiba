'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import {
  FormInput,
  FormTextarea,
  FormSelect,
  FormCheckbox,
  FormError,
  FormSection,
  SubmitButton,
  SlugInput,
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
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setPending(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
      {villa && <input type="hidden" name="id" value={villa.id} />}

      <FormError message={error} />

      {/* Basic info */}
      <FormSection title="Información básica" description="Datos principales que identifican la villa">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormInput
            name="title"
            label="Nombre de la villa"
            defaultValue={villa?.title}
            required
            placeholder="Ej: Villa Excellence Oyster Bay"
            helpText="El nombre tal y como aparecerá en la web"
          />
          <SlugInput
            defaultValue={villa?.slug}
          />
          <FormInput
            name="location"
            label="Ubicación"
            defaultValue={villa?.location || 'Punta Cana'}
            placeholder="Punta Cana"
            helpText="Ciudad o zona donde se ubica la villa"
          />
          <FormInput
            name="year"
            label="Año de finalización"
            defaultValue={villa?.year}
            placeholder="2024"
            helpText="Año en que se completó o se completará el proyecto"
          />
          <FormInput
            name="sort_order"
            label="Posición en el listado"
            type="number"
            defaultValue={String(villa?.sort_order ?? 0)}
            helpText="Número menor = aparece primero. Usa 0, 1, 2..."
          />
          <FormSelect
            name="status"
            label="Estado de publicación"
            defaultValue={villa?.status || 'draft'}
            options={[
              { value: 'draft', label: 'Borrador — no visible en la web' },
              { value: 'published', label: 'Publicada — visible para todos' },
              { value: 'hidden', label: 'Oculta — guardada pero no visible' },
            ]}
            helpText="Solo las villas &laquo;Publicadas&raquo; aparecen en la web"
          />
        </div>
        <div className="mt-5 pt-4 border-t border-slate-100">
          <FormCheckbox
            name="featured"
            label="Marcar como villa destacada"
            defaultChecked={villa?.featured}
            helpText="Las villas destacadas aparecen de forma prominente en la página principal"
          />
        </div>
      </FormSection>

      {/* Specs */}
      <FormSection title="Características" description="Datos técnicos de la villa (déjalos a 0 si no aplican)">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          <FormInput name="bedrooms" label="Habitaciones" type="number" defaultValue={String(villa?.bedrooms ?? 0)} />
          <FormInput name="bathrooms" label="Baños" type="number" defaultValue={String(villa?.bathrooms ?? 0)} />
          <FormInput name="area_sqm" label="Superficie (m²)" type="number" defaultValue={String(villa?.area_sqm ?? 0)} />
          <FormInput name="price_usd" label="Precio (USD)" type="number" defaultValue={String(villa?.price_usd ?? 0)} helpText="Sin puntos ni comas" />
        </div>
      </FormSection>

      {/* Description */}
      <FormSection title="Textos descriptivos" description="Los textos que aparecerán en la ficha de la villa">
        <div className="space-y-5">
          <FormTextarea
            name="short_description"
            label="Descripción breve"
            defaultValue={villa?.short_description}
            rows={2}
            placeholder="Un resumen de 1-2 frases que capture la esencia de la villa..."
            helpText="Aparece en las tarjetas del listado de villas. Máx. 200 caracteres recomendados."
            maxLength={300}
          />
          <FormTextarea
            name="long_description"
            label="Descripción completa"
            defaultValue={villa?.long_description}
            rows={8}
            placeholder="Descripción detallada de la villa: materiales, acabados, distribución, entorno..."
            helpText="Aparece en la página individual de la villa. Puedes escribir todo lo necesario."
          />
        </div>
      </FormSection>

      {/* Main image */}
      <FormSection title="Imagen principal" description="La imagen destacada que representa esta villa">
        <ImageUploader
          name="main_image"
          label="Selecciona o sube la imagen principal"
          defaultValue={villa?.main_image}
          folder="villas"
        />
      </FormSection>

      {/* SEO */}
      <FormSection title="SEO — Posicionamiento en buscadores" description="Opcional. Si lo dejas vacío, se usará el título y descripción de la villa">
        <div className="space-y-5">
          <FormInput
            name="seo_title"
            label="Título SEO"
            defaultValue={villa?.seo_title}
            placeholder="Título que aparecerá en Google"
            helpText="Máx. 60 caracteres recomendados"
          />
          <FormTextarea
            name="seo_description"
            label="Meta descripción"
            defaultValue={villa?.seo_description}
            rows={2}
            placeholder="Texto que aparece debajo del título en los resultados de Google"
            helpText="Máx. 160 caracteres recomendados"
            maxLength={200}
          />
        </div>
      </FormSection>

      {/* Submit */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
        <SubmitButton
          label={villa ? 'Guardar cambios' : 'Crear villa'}
          pendingLabel={villa ? 'Guardando...' : 'Creando...'}
          pending={pending}
        />
        <a
          href="/admin/villas"
          className="px-5 py-2.5 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-sm transition-colors"
        >
          Cancelar
        </a>
      </div>
    </form>
  )
}
