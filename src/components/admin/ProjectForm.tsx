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
import type { Project } from '@/types/admin'

interface ProjectFormProps {
  action: (state: ActionResult, formData: FormData) => Promise<ActionResult>
  project?: Project
}

export default function ProjectForm({ action, project }: ProjectFormProps) {
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
      {project && <input type="hidden" name="id" value={project.id} />}

      <FormError message={error} />

      {/* Basic info */}
      <fieldset className="bg-white border border-slate-200 rounded-sm p-6">
        <legend className="text-sm font-medium text-slate-900 px-2">Información básica</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <FormInput name="title" label="Título" defaultValue={project?.title} required placeholder="Proyecto Marina Bay" />
          <FormInput name="slug" label="Slug (URL)" defaultValue={project?.slug} required placeholder="proyecto-marina-bay" />
          <FormInput name="location" label="Ubicación" defaultValue={project?.location || 'Punta Cana'} placeholder="Punta Cana" />
          <FormInput name="estimated_date" label="Fecha estimada" defaultValue={project?.estimated_date} placeholder="Q2 2025" />
          <FormInput name="sort_order" label="Orden de aparición" type="number" defaultValue={String(project?.sort_order ?? 0)} />
          <FormSelect
            name="status"
            label="Estado"
            defaultValue={project?.status || 'future'}
            options={[
              { value: 'future', label: 'Futuro' },
              { value: 'in_development', label: 'En desarrollo' },
              { value: 'published', label: 'Publicado' },
              { value: 'hidden', label: 'Oculto' },
            ]}
          />
        </div>
        <div className="mt-4">
          <FormCheckbox name="featured" label="Proyecto destacado" defaultChecked={project?.featured} />
        </div>
      </fieldset>

      {/* Description */}
      <fieldset className="bg-white border border-slate-200 rounded-sm p-6">
        <legend className="text-sm font-medium text-slate-900 px-2">Descripción</legend>
        <div className="mt-4">
          <FormTextarea name="description" label="Descripción" defaultValue={project?.description} rows={6} placeholder="Descripción detallada del proyecto..." />
        </div>
      </fieldset>

      {/* Main image */}
      <fieldset className="bg-white border border-slate-200 rounded-sm p-6">
        <legend className="text-sm font-medium text-slate-900 px-2">Imagen principal</legend>
        <div className="mt-4">
          <ImageUploader name="main_image" label="Imagen principal" defaultValue={project?.main_image} folder="projects" />
        </div>
      </fieldset>

      {/* SEO */}
      <fieldset className="bg-white border border-slate-200 rounded-sm p-6">
        <legend className="text-sm font-medium text-slate-900 px-2">SEO (opcional)</legend>
        <div className="space-y-4 mt-4">
          <FormInput name="seo_title" label="Título SEO" defaultValue={project?.seo_title} placeholder="Título para buscadores" />
          <FormTextarea name="seo_description" label="Meta descripción" defaultValue={project?.seo_description} rows={2} placeholder="Descripción para buscadores" />
        </div>
      </fieldset>

      {/* Submit */}
      <div className="flex items-center gap-4">
        <SubmitButton label={project ? 'Actualizar proyecto' : 'Crear proyecto'} pending={pending} />
        <a href="/admin/projects" className="text-sm text-slate-500 hover:text-slate-700">
          Cancelar
        </a>
      </div>
    </form>
  )
}
