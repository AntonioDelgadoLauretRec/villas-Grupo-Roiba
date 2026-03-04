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
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setPending(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
      {project && <input type="hidden" name="id" value={project.id} />}

      <FormError message={error} />

      {/* Basic info */}
      <FormSection title="Información del proyecto" description="Datos principales del proyecto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormInput
            name="title"
            label="Nombre del proyecto"
            defaultValue={project?.title}
            required
            placeholder="Ej: Marina Bay Residences"
            helpText="El nombre tal y como aparecerá en la web"
          />
          <SlugInput defaultValue={project?.slug} />
          <FormInput
            name="location"
            label="Ubicación"
            defaultValue={project?.location || 'Punta Cana'}
            placeholder="Punta Cana"
            helpText="Ciudad o zona del proyecto"
          />
          <FormInput
            name="estimated_date"
            label="Fecha estimada"
            defaultValue={project?.estimated_date}
            placeholder="Ej: Q2 2025, Diciembre 2025..."
            helpText="Cuándo se espera completar el proyecto"
          />
          <FormInput
            name="sort_order"
            label="Posición en el listado"
            type="number"
            defaultValue={String(project?.sort_order ?? 0)}
            helpText="Número menor = aparece primero"
          />
          <FormSelect
            name="status"
            label="Estado del proyecto"
            defaultValue={project?.status || 'future'}
            options={[
              { value: 'future', label: 'Futuro — planificado pero no iniciado' },
              { value: 'in_development', label: 'En desarrollo — en construcción' },
              { value: 'published', label: 'Publicado — visible en la web' },
              { value: 'hidden', label: 'Oculto — guardado pero no visible' },
            ]}
            helpText="Los proyectos &laquo;Ocultos&raquo; no se muestran en la web"
          />
        </div>
        <div className="mt-5 pt-4 border-t border-slate-100">
          <FormCheckbox
            name="featured"
            label="Marcar como proyecto destacado"
            defaultChecked={project?.featured}
            helpText="Los proyectos destacados se muestran de forma prominente"
          />
        </div>
      </FormSection>

      {/* Description */}
      <FormSection title="Descripción" description="Texto que aparecerá en la ficha del proyecto">
        <FormTextarea
          name="description"
          label="Descripción del proyecto"
          defaultValue={project?.description}
          rows={8}
          placeholder="Describe el proyecto: concepto, ubicación, características principales, plazos..."
        />
      </FormSection>

      {/* Main image */}
      <FormSection title="Imagen principal" description="La imagen que representa este proyecto">
        <ImageUploader
          name="main_image"
          label="Selecciona o sube la imagen principal"
          defaultValue={project?.main_image}
          folder="projects"
        />
      </FormSection>

      {/* SEO */}
      <FormSection title="SEO — Posicionamiento en buscadores" description="Opcional. Si lo dejas vacío, se usará el título y descripción del proyecto">
        <div className="space-y-5">
          <FormInput
            name="seo_title"
            label="Título SEO"
            defaultValue={project?.seo_title}
            placeholder="Título que aparecerá en Google"
            helpText="Máx. 60 caracteres recomendados"
          />
          <FormTextarea
            name="seo_description"
            label="Meta descripción"
            defaultValue={project?.seo_description}
            rows={2}
            placeholder="Texto debajo del título en Google"
            helpText="Máx. 160 caracteres recomendados"
            maxLength={200}
          />
        </div>
      </FormSection>

      {/* Submit */}
      <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
        <SubmitButton
          label={project ? 'Guardar cambios' : 'Crear proyecto'}
          pendingLabel={project ? 'Guardando...' : 'Creando...'}
          pending={pending}
        />
        <a
          href="/admin/projects"
          className="px-5 py-2.5 text-sm text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-sm transition-colors"
        >
          Cancelar
        </a>
      </div>
    </form>
  )
}
