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
        <label htmlFor="email" className="block text-white/70 text-caption mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="w-full px-4 py-3 bg-white/[0.06] border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-roiba-dorado/50 transition-colors"
          placeholder="admin@gruporoiba.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="block text-white/70 text-caption mb-2">
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoComplete="current-password"
          className="w-full px-4 py-3 bg-white/[0.06] border border-white/15 text-white placeholder:text-white/30 focus:outline-none focus:border-roiba-dorado/50 transition-colors"
          placeholder="Tu contraseña"
        />
      </div>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 px-4 py-3 text-red-300 text-caption">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full py-3.5 bg-roiba-dorado text-roiba-verde font-semibold text-caption uppercase tracking-widest hover:bg-roiba-dorado-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {pending ? 'Verificando...' : 'Acceder'}
      </button>
    </form>
  )
}
