'use client'

import { useState, type FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { loginAction, type ActionResult } from '@/lib/admin/actions'

export function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [pending, setPending] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const result: ActionResult = await loginAction({ success: false }, formData)

    if (result.success) {
      router.push('/admin')
      return
    }
    if (result.error) {
      setError(result.error)
    }
    setPending(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-white/70 text-sm mb-2">
          Email
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </span>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full pl-11 pr-4 py-3 bg-white/[0.06] border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-roiba-dorado/50 focus:ring-1 focus:ring-roiba-dorado/20 transition-all rounded-sm"
            placeholder="admin@gruporoiba.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-white/70 text-sm mb-2">
          Contraseña
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </span>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full pl-11 pr-4 py-3 bg-white/[0.06] border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-roiba-dorado/50 focus:ring-1 focus:ring-roiba-dorado/20 transition-all rounded-sm"
            placeholder="Tu contraseña"
          />
        </div>
      </div>

      {error && (
        <div className="flex items-center gap-2.5 bg-red-500/10 border border-red-500/30 px-4 py-3 rounded-sm">
          <svg className="w-4 h-4 text-red-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          <span className="text-red-300 text-sm">{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full py-3.5 bg-roiba-dorado text-roiba-verde font-semibold text-sm uppercase tracking-widest hover:bg-roiba-dorado-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm flex items-center justify-center gap-2"
      >
        {pending && (
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {pending ? 'Verificando...' : 'Acceder'}
      </button>
    </form>
  )
}
