import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Image from 'next/image'
import { toggleProjectVisibilityAction, deleteProjectAction } from '@/lib/admin/actions'
import DeleteButton from '@/components/admin/DeleteButton'

export default async function AdminProjectsPage() {
  const supabase = await createClient()

  const { data: projects, count } = await supabase
    .from('projects')
    .select('*', { count: 'exact' })
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false })

  const visible = projects?.filter((p) => p.status !== 'hidden').length ?? 0
  const hidden = projects?.filter((p) => p.status === 'hidden').length ?? 0

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-serif text-slate-900">Proyectos</h1>
          <p className="text-slate-500 mt-1 text-sm">
            {count ?? 0} proyectos en total
            {visible > 0 && <> &middot; <span className="text-blue-600">{visible} visibles</span></>}
            {hidden > 0 && <> &middot; <span className="text-slate-400">{hidden} ocultos</span></>}
          </p>
        </div>
        <Link
          href="/admin/projects/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-roiba-verde text-white text-sm font-medium hover:bg-roiba-verde-light transition-colors rounded-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          Nuevo proyecto
        </Link>
      </div>

      {!projects || projects.length === 0 ? (
        /* Empty state */
        <div className="bg-white border border-dashed border-slate-300 rounded-sm p-16 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M2 20h20M5 20V8l3-3h8l3 3v12M9 20v-4h6v4M9 11h6M12 8v3" />
            </svg>
          </div>
          <h3 className="text-lg font-serif text-slate-700 mb-2">Todavía no hay proyectos</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto">
            Crea el primer proyecto para que aparezca en la sección de proyectos de la web pública.
          </p>
          <Link
            href="/admin/projects/new"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-roiba-verde text-white text-sm font-medium hover:bg-roiba-verde-light transition-colors rounded-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            Crear primer proyecto
          </Link>
        </div>
      ) : (
        /* Project cards — mobile-friendly */
        <div className="space-y-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-4 p-4">
                {/* Thumbnail */}
                {project.main_image ? (
                  <div className="relative w-16 h-16 rounded-sm overflow-hidden bg-slate-100 flex-shrink-0">
                    <Image src={project.main_image} alt={project.title} fill className="object-cover" sizes="64px" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-sm bg-slate-50 border border-dashed border-slate-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                )}

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-slate-900 truncate">{project.title}</h3>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{project.location}</span>
                    {project.estimated_date && <span>{project.estimated_date}</span>}
                    <span>Pos. {project.sort_order}</span>
                  </div>
                </div>

                {/* Status */}
                <ProjectStatusBadge status={project.status} />

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <form action={toggleProjectVisibilityAction}>
                    <input type="hidden" name="id" value={project.id} />
                    <input type="hidden" name="currentStatus" value={project.status} />
                    <button
                      type="submit"
                      title={project.status === 'hidden' ? 'Hacer visible' : 'Ocultar de la web'}
                      className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-sm transition-colors"
                    >
                      {project.status === 'hidden' ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      )}
                    </button>
                  </form>
                  <Link
                    href={`/admin/projects/${project.id}`}
                    title="Editar proyecto"
                    className="p-2 text-slate-400 hover:text-roiba-verde hover:bg-slate-100 rounded-sm transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </Link>
                  <DeleteButton action={deleteProjectAction} id={project.id} itemName={project.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function ProjectStatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; dot: string; label: string }> = {
    published: { bg: 'bg-green-50 text-green-700', dot: 'bg-green-500', label: 'Publicado' },
    future: { bg: 'bg-blue-50 text-blue-700', dot: 'bg-blue-500', label: 'Futuro' },
    in_development: { bg: 'bg-amber-50 text-amber-700', dot: 'bg-amber-400', label: 'En desarrollo' },
    hidden: { bg: 'bg-slate-100 text-slate-500', dot: 'bg-slate-400', label: 'Oculto' },
  }
  const c = config[status] || config.future

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-sm font-medium ${c.bg}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  )
}
