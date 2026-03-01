import ProjectForm from '@/components/admin/ProjectForm'
import { createProjectAction } from '@/lib/admin/actions'
import Link from 'next/link'

export default function NewProjectPage() {
  return (
    <div>
      <div className="mb-8">
        <Link href="/admin/projects" className="text-sm text-roiba-dorado hover:underline">
          &larr; Volver a proyectos
        </Link>
        <h1 className="text-2xl font-serif text-slate-900 mt-2">Nuevo Proyecto</h1>
        <p className="text-slate-500 mt-1">Crea un nuevo proyecto futuro o en desarrollo</p>
      </div>
      <ProjectForm action={createProjectAction} />
    </div>
  )
}
