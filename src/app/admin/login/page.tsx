import { LoginForm } from '@/components/admin/LoginForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Iniciar sesión',
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-roiba-verde flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-center mb-10">
          <h1 className="text-display-md font-serif text-white mb-2">Grupo Roiba</h1>
          <p className="text-white/50 text-caption uppercase tracking-[0.2em]">
            Panel de Administración
          </p>
          <div className="w-12 h-px bg-roiba-dorado mx-auto mt-6" />
        </div>

        {/* Login form */}
        <div className="bg-white/[0.06] border border-white/10 rounded-sm p-8">
          <LoginForm />
        </div>

        <p className="text-white/30 text-center text-micro mt-8">
          Acceso restringido a usuarios autorizados
        </p>
      </div>
    </div>
  )
}
