'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { logoutAction } from '@/lib/admin/actions'
import { useState } from 'react'

const navItems = [
  { href: '/admin', label: 'Dashboard', icon: '/' },
  { href: '/admin/villas', label: 'Villas', icon: 'V' },
  { href: '/admin/projects', label: 'Proyectos', icon: 'P' },
  { href: '/admin/settings', label: 'Ajustes', icon: 'A' },
]

interface AdminShellProps {
  children: React.ReactNode
  adminName: string
  adminRole: string
}

export default function AdminShell({ children, adminName, adminRole }: AdminShellProps) {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64 bg-roiba-verde transform transition-transform duration-300
          lg:relative lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Brand */}
          <div className="p-6 border-b border-white/10">
            <Link href="/admin" className="block">
              <h2 className="text-white font-serif text-xl">Grupo Roiba</h2>
              <p className="text-roiba-dorado text-micro uppercase tracking-[0.15em] mt-1">
                Admin Panel
              </p>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.href === '/admin'
                  ? pathname === '/admin'
                  : pathname.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-sm text-sm transition-colors
                    ${
                      isActive
                        ? 'bg-white/10 text-white font-medium'
                        : 'text-white/60 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <span className="w-7 h-7 flex items-center justify-center bg-white/10 rounded-sm text-xs font-bold text-roiba-dorado">
                    {item.icon}
                  </span>
                  {item.label}
                </Link>
              )
            })}
          </nav>

          {/* User info + logout */}
          <div className="p-4 border-t border-white/10">
            <div className="px-4 py-2 mb-3">
              <p className="text-white text-sm font-medium truncate">{adminName}</p>
              <p className="text-white/40 text-xs uppercase tracking-wider">{adminRole}</p>
            </div>
            <form action={logoutAction}>
              <button
                type="submit"
                className="w-full px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-sm transition-colors text-left"
              >
                Cerrar sesión
              </button>
            </form>
          </div>

          {/* Link back to site */}
          <div className="p-4 border-t border-white/10">
            <Link
              href="/"
              target="_blank"
              className="block px-4 py-2 text-sm text-roiba-dorado/70 hover:text-roiba-dorado transition-colors"
            >
              Ver web pública &rarr;
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-slate-200 px-4 lg:px-8 py-4 flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex-1" />
          <span className="text-xs text-slate-400 uppercase tracking-wider hidden sm:block">
            Panel de administración
          </span>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
