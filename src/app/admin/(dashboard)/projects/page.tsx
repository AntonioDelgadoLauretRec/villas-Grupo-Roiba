import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Image from 'next/image'
import { toggleProjectVisibilityAction, deleteProjectAction } from '@/lib/admin/actions'
import DeleteButton from '@/components/admin/DeleteButton'

export default async function AdminProjectsPage() {
  const supabase = await createClient()

  const { data: projects } = await supabase
    .from('projects')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif text-slate-900">Proyectos</h1>
          <p className="text-slate-500 mt-1">Gestiona los proyectos futuros y en desarrollo</p>
        </div>
        <Link
          href="/admin/projects/new"
          className="px-5 py-2.5 bg-roiba-verde text-white text-sm font-medium hover:bg-roiba-verde-light transition-colors rounded-sm"
        >
          + Nuevo proyecto
        </Link>
      </div>

      {!projects || projects.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-sm p-12 text-center">
          <p className="text-slate-500 mb-4">No hay proyectos todavía</p>
          <Link
            href="/admin/projects/new"
            className="text-roiba-dorado hover:underline text-sm"
          >
            Crear el primer proyecto
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Proyecto</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Ubicación</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Estado</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Fecha</th>
                  <th className="text-right px-4 py-3 font-medium text-slate-600">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-slate-50/50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {project.main_image ? (
                          <div className="relative w-12 h-12 rounded-sm overflow-hidden bg-slate-100 flex-shrink-0">
                            <Image
                              src={project.main_image}
                              alt={project.title}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-sm bg-slate-100 flex items-center justify-center text-slate-400 text-xs flex-shrink-0">
                            IMG
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-slate-900">{project.title}</p>
                          <p className="text-slate-400 text-xs">/{project.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{project.location}</td>
                    <td className="px-4 py-3">
                      <ProjectStatusBadge status={project.status} />
                    </td>
                    <td className="px-4 py-3 text-slate-500">{project.estimated_date || '—'}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <form action={toggleProjectVisibilityAction}>
                          <input type="hidden" name="id" value={project.id} />
                          <input type="hidden" name="currentStatus" value={project.status} />
                          <button
                            type="submit"
                            className="px-3 py-1.5 text-xs border border-slate-300 rounded-sm hover:bg-slate-50 transition-colors"
                          >
                            {project.status === 'hidden' ? 'Mostrar' : 'Ocultar'}
                          </button>
                        </form>
                        <Link
                          href={`/admin/projects/${project.id}`}
                          className="px-3 py-1.5 text-xs bg-slate-100 rounded-sm hover:bg-slate-200 transition-colors"
                        >
                          Editar
                        </Link>
                        <DeleteButton
                          action={deleteProjectAction}
                          id={project.id}
                          itemName={project.title}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

function ProjectStatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    published: 'bg-green-50 text-green-700 border-green-200',
    future: 'bg-blue-50 text-blue-700 border-blue-200',
    in_development: 'bg-amber-50 text-amber-700 border-amber-200',
    hidden: 'bg-slate-50 text-slate-500 border-slate-200',
  }
  const labels: Record<string, string> = {
    published: 'Publicado',
    future: 'Futuro',
    in_development: 'En desarrollo',
    hidden: 'Oculto',
  }

  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs border rounded-sm ${styles[status] || styles.future}`}
    >
      {labels[status] || status}
    </span>
  )
}
