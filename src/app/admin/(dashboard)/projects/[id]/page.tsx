import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import ProjectForm from '@/components/admin/ProjectForm'
import { updateProjectAction } from '@/lib/admin/actions'
import Link from 'next/link'
import type { Project } from '@/types/admin'

export default async function EditProjectPage({
  params,
}: {
  params: { id: string }
}) {
  const supabase = await createClient()

  const { data: project } = await supabase
    .from('projects')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!project) notFound()

  return (
    <div>
      <div className="mb-8">
        <Link href="/admin/projects" className="text-sm text-roiba-dorado hover:underline">
          &larr; Volver a proyectos
        </Link>
        <h1 className="text-2xl font-serif text-slate-900 mt-2">
          Editar: {project.title}
        </h1>
        <p className="text-slate-500 mt-1">Modifica los datos del proyecto</p>
      </div>

      <ProjectForm action={updateProjectAction} project={project as Project} />
    </div>
  )
}
