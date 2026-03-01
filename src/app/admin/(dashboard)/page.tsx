import { createClient } from '@/lib/supabase/server'
import { requireAdmin } from '@/lib/admin/auth'
import Link from 'next/link'

export default async function AdminDashboardPage() {
  const admin = await requireAdmin()
  const supabase = await createClient()

  const [
    { count: villasCount },
    { count: villasPublished },
    { count: villasDraft },
    { count: projectsCount },
    { count: projectsVisible },
  ] = await Promise.all([
    supabase.from('villas').select('*', { count: 'exact', head: true }),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'published'),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'draft'),
    supabase.from('projects').select('*', { count: 'exact', head: true }),
    supabase.from('projects').select('*', { count: 'exact', head: true }).not('status', 'eq', 'hidden'),
  ])

  const firstName = admin.display_name?.split(' ')[0] || admin.email.split('@')[0]

  return (
    <div className="max-w-5xl">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="text-2xl font-serif text-slate-900">
          Hola, {firstName}
        </h1>
        <p className="text-slate-500 mt-1">
          Bienvenido al panel de gestión de Grupo Roiba. Desde aquí puedes administrar todo el contenido de la web.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          href="/admin/villas"
          value={villasPublished ?? 0}
          label="Villas publicadas"
          sublabel={`${villasCount ?? 0} en total`}
          color="green"
        />
        <StatCard
          href="/admin/villas"
          value={villasDraft ?? 0}
          label="Borradores"
          sublabel="Pendientes de publicar"
          color="amber"
        />
        <StatCard
          href="/admin/projects"
          value={projectsVisible ?? 0}
          label="Proyectos visibles"
          sublabel={`${projectsCount ?? 0} en total`}
          color="blue"
        />
        <StatCard
          href="/admin/settings"
          value={0}
          label="Ajustes"
          sublabel="Hero, contacto, SEO"
          color="slate"
          isIcon
        />
      </div>

      {/* Quick actions */}
      <div className="bg-white rounded-sm border border-slate-200 p-6 mb-8">
        <h2 className="text-base font-semibold text-slate-800 mb-4">Acciones rápidas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Link
            href="/admin/villas/new"
            className="flex items-center gap-3 px-5 py-4 bg-roiba-verde/5 border border-roiba-verde/10 rounded-sm hover:bg-roiba-verde/10 transition-colors group"
          >
            <span className="w-10 h-10 rounded-full bg-roiba-verde/10 flex items-center justify-center text-roiba-verde text-lg group-hover:bg-roiba-verde group-hover:text-white transition-colors">+</span>
            <div>
              <p className="text-sm font-medium text-roiba-verde">Nueva villa</p>
              <p className="text-xs text-slate-400">Añadir al portfolio</p>
            </div>
          </Link>
          <Link
            href="/admin/projects/new"
            className="flex items-center gap-3 px-5 py-4 bg-blue-50/50 border border-blue-100 rounded-sm hover:bg-blue-50 transition-colors group"
          >
            <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">+</span>
            <div>
              <p className="text-sm font-medium text-blue-700">Nuevo proyecto</p>
              <p className="text-xs text-slate-400">Añadir proyecto futuro</p>
            </div>
          </Link>
          <Link
            href="/admin/settings"
            className="flex items-center gap-3 px-5 py-4 bg-slate-50 border border-slate-200 rounded-sm hover:bg-slate-100 transition-colors group"
          >
            <span className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 group-hover:bg-slate-600 group-hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
            </span>
            <div>
              <p className="text-sm font-medium text-slate-700">Ajustes del sitio</p>
              <p className="text-xs text-slate-400">Hero, contacto, SEO</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Help section */}
      <div className="bg-amber-50/50 border border-amber-200/60 rounded-sm p-5">
        <h3 className="text-sm font-semibold text-amber-800 mb-2">Consejos</h3>
        <ul className="space-y-2 text-sm text-amber-700/80">
          <li className="flex items-start gap-2">
            <span className="text-amber-400 mt-0.5">&#8226;</span>
            Para que una villa aparezca en la web, su estado debe ser <strong>&laquo;Publicada&raquo;</strong>.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 mt-0.5">&#8226;</span>
            Las imágenes se suben automáticamente. Formatos admitidos: JPG, PNG, WebP. Máx. 10 MB.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-amber-400 mt-0.5">&#8226;</span>
            Los cambios pueden tardar hasta 1 hora en reflejarse en la web pública por la caché.
          </li>
        </ul>
      </div>
    </div>
  )
}

/* ─── Stat card component ─────────────────────────────── */

function StatCard({
  href,
  value,
  label,
  sublabel,
  color,
  isIcon,
}: {
  href: string
  value: number
  label: string
  sublabel: string
  color: 'green' | 'amber' | 'blue' | 'slate'
  isIcon?: boolean
}) {
  const colorMap = {
    green: 'border-l-green-500',
    amber: 'border-l-amber-400',
    blue: 'border-l-blue-500',
    slate: 'border-l-slate-400',
  }

  return (
    <Link
      href={href}
      className={`bg-white rounded-sm border border-slate-200 border-l-4 ${colorMap[color]} p-5 hover:shadow-sm transition-all`}
    >
      {isIcon ? (
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center mb-2">
          <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4" /></svg>
        </div>
      ) : (
        <p className="text-3xl font-serif text-roiba-verde">{value}</p>
      )}
      <p className="text-sm font-medium text-slate-700 mt-1">{label}</p>
      <p className="text-xs text-slate-400">{sublabel}</p>
    </Link>
  )
}
