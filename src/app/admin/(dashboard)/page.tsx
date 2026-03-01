import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'

export default async function AdminDashboardPage() {
  const supabase = await createClient()

  const [
    { count: villasCount },
    { count: villasPublished },
    { count: projectsCount },
    { count: projectsPublished },
  ] = await Promise.all([
    supabase.from('villas').select('*', { count: 'exact', head: true }),
    supabase.from('villas').select('*', { count: 'exact', head: true }).eq('status', 'published'),
    supabase.from('projects').select('*', { count: 'exact', head: true }),
    supabase.from('projects').select('*', { count: 'exact', head: true }).not('status', 'eq', 'hidden'),
  ])

  const stats = [
    { label: 'Villas totales', value: villasCount ?? 0, href: '/admin/villas' },
    { label: 'Villas publicadas', value: villasPublished ?? 0, href: '/admin/villas' },
    { label: 'Proyectos totales', value: projectsCount ?? 0, href: '/admin/projects' },
    { label: 'Proyectos visibles', value: projectsPublished ?? 0, href: '/admin/projects' },
  ]

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-serif text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Resumen del contenido de la web</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-sm border border-slate-200 p-6 hover:border-roiba-dorado/40 transition-colors"
          >
            <p className="text-3xl font-serif text-roiba-verde">{stat.value}</p>
            <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="bg-white rounded-sm border border-slate-200 p-6">
        <h2 className="text-lg font-serif text-slate-900 mb-4">Acciones rápidas</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/admin/villas/new"
            className="px-5 py-2.5 bg-roiba-verde text-white text-sm font-medium hover:bg-roiba-verde-light transition-colors rounded-sm"
          >
            + Nueva villa
          </Link>
          <Link
            href="/admin/projects/new"
            className="px-5 py-2.5 bg-roiba-verde text-white text-sm font-medium hover:bg-roiba-verde-light transition-colors rounded-sm"
          >
            + Nuevo proyecto
          </Link>
          <Link
            href="/admin/settings"
            className="px-5 py-2.5 border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors rounded-sm"
          >
            Ajustes del sitio
          </Link>
        </div>
      </div>
    </div>
  )
}
