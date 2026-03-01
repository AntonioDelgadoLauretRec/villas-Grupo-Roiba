'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { logoutAction } from '@/lib/admin/actions'
import { useState } from 'react'

/* ─── SVG Icons ───────────────────────────────────────── */

function IconDashboard({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  )
}

function IconVilla({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21v-6h6v6" />
      <path d="M10 10h4" />
    </svg>
  )
}

function IconProject({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 20h20" />
      <path d="M5 20V8l3-3h8l3 3v12" />
      <path d="M9 20v-4h6v4" />
      <path d="M9 11h6" />
      <path d="M12 8v3" />
    </svg>
  )
}

function IconSettings({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  )
}

function IconLogout({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  )
}

function IconExternal({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

/* ─── Navigation items ────────────────────────────────── */

const navItems = [
  { href: '/admin', label: 'Inicio', icon: IconDashboard, description: 'Vista general' },
  { href: '/admin/villas', label: 'Villas', icon: IconVilla, description: 'Gestionar villas' },
  { href: '/admin/projects', label: 'Proyectos', icon: IconProject, description: 'Gestionar proyectos' },
  { href: '/admin/settings', label: 'Ajustes', icon: IconSettings, description: 'Configuración del sitio' },
]

/* ─── Breadcrumb helper ───────────────────────────────── */

function getBreadcrumbs(pathname: string) {
  const parts = pathname.replace('/admin', '').split('/').filter(Boolean)
  const crumbs: { label: string; href?: string }[] = [{ label: 'Inicio', href: '/admin' }]

  const labels: Record<string, string> = {
    villas: 'Villas',
    projects: 'Proyectos',
    settings: 'Ajustes',
    new: 'Crear nuevo',
  }

  let path = '/admin'
  for (const part of parts) {
    path += `/${part}`
    const label = labels[part] || (part.length > 8 ? 'Editar' : part)
    crumbs.push({ label, href: path })
  }

  // Last breadcrumb has no link
  if (crumbs.length > 1) {
    delete crumbs[crumbs.length - 1].href
  }

  return crumbs
}

/* ─── Role badge ──────────────────────────────────────── */

function RoleBadge({ role }: { role: string }) {
  const isSuper = role === 'superadmin'
  return (
    <span className={`inline-block px-2 py-0.5 text-[10px] uppercase tracking-wider rounded-sm font-medium ${
      isSuper
        ? 'bg-roiba-dorado/20 text-roiba-dorado'
        : 'bg-white/10 text-white/50'
    }`}>
      {isSuper ? 'Administrador' : 'Editor'}
    </span>
  )
}

/* ─── Component ───────────────────────────────────────── */

interface AdminShellProps {
  children: React.ReactNode
  adminName: string
  adminRole: string
}

export default function AdminShell({ children, adminName, adminRole }: AdminShellProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const breadcrumbs = getBreadcrumbs(pathname)

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-roiba-verde transform transition-transform duration-300
          lg:relative lg:translate-x-0 flex-shrink-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Brand */}
          <div className="p-5 border-b border-white/10">
            <Link href="/admin" className="block" onClick={() => setSidebarOpen(false)}>
              <h2 className="text-white font-serif text-xl tracking-wide">Grupo Roiba</h2>
              <p className="text-roiba-dorado/70 text-[10px] uppercase tracking-[0.2em] mt-1 font-medium">
                Panel de gestión
              </p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
            <p className="px-3 pb-2 text-[10px] text-white/30 uppercase tracking-[0.15em] font-medium">
              Contenido
            </p>
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive =
                item.href === '/admin'
                  ? pathname === '/admin'
                  : pathname.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  title={item.description}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-sm text-sm transition-all duration-200
                    ${
                      isActive
                        ? 'bg-white/10 text-white font-medium shadow-sm'
                        : 'text-white/50 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <span className={`flex-shrink-0 ${isActive ? 'text-roiba-dorado' : ''}`}>
                    <Icon />
                  </span>
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-roiba-dorado" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="border-t border-white/10">
            {/* Profile */}
            <div className="px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-roiba-dorado/20 flex items-center justify-center text-roiba-dorado text-sm font-bold flex-shrink-0">
                  {adminName.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <p className="text-white text-sm font-medium truncate">{adminName}</p>
                  <RoleBadge role={adminRole} />
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="px-3 pb-3 flex flex-col gap-1">
              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-2 px-3 py-2 text-sm text-white/40 hover:text-roiba-dorado transition-colors rounded-sm hover:bg-white/5"
              >
                <IconExternal />
                <span>Ver web pública</span>
              </Link>
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-white/40 hover:text-red-400 transition-colors rounded-sm hover:bg-white/5 text-left"
                >
                  <IconLogout />
                  <span>Cerrar sesión</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </aside>

      {/* ── Main content ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar with breadcrumbs */}
        <header className="bg-white border-b border-slate-200 px-4 lg:px-8 py-3 flex items-center gap-4 sticky top-0 z-30">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 rounded-sm transition-colors"
            aria-label="Abrir menú"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-sm overflow-hidden">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5 min-w-0">
                {i > 0 && <span className="text-slate-300 flex-shrink-0">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="text-slate-400 hover:text-roiba-verde transition-colors truncate">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-slate-700 font-medium truncate">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>

          <div className="flex-1" />

          {/* Mobile user avatar */}
          <div className="lg:hidden w-8 h-8 rounded-full bg-roiba-verde/10 flex items-center justify-center text-roiba-verde text-xs font-bold">
            {adminName.charAt(0).toUpperCase()}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
