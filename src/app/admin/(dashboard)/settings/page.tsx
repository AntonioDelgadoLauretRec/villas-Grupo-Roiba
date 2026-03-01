import { createClient } from '@/lib/supabase/server'
import SettingsForm from '@/components/admin/SettingsForm'
import type { SiteSetting } from '@/types/admin'

export default async function AdminSettingsPage() {
  const supabase = await createClient()

  const { data: settings } = await supabase
    .from('site_settings')
    .select('*')
    .order('key')

  // Convert array to map
  const settingsMap: Record<string, Record<string, string>> = {}
  if (settings) {
    for (const s of settings as SiteSetting[]) {
      settingsMap[s.key] = s.value as unknown as Record<string, string>
    }
  }

  return (
    <div className="max-w-4xl">
      <div className="mb-8">
        <h1 className="text-2xl font-serif text-slate-900">Ajustes del sitio</h1>
        <p className="text-slate-500 mt-1 text-sm">
          Configura los datos globales de la web. Los cambios se aplicarán en toda la web pública.
        </p>
      </div>

      <div className="space-y-6">
        {/* Hero settings */}
        <SettingsForm
          settingKey="hero"
          title="Hero principal"
          description="Textos que aparecen en la sección destacada de la página de inicio."
          icon="hero"
          fields={[
            { name: 'title', label: 'Título', placeholder: 'Arquitectura, control y confianza' },
            { name: 'subtitle', label: 'Subtítulo', placeholder: 'Construimos villas de lujo...' },
            { name: 'cta_text', label: 'Texto del botón', placeholder: 'Solicitar consulta' },
            { name: 'cta_link', label: 'Enlace del botón', placeholder: '/contacto' },
          ]}
          values={settingsMap['hero'] || {}}
        />

        {/* Contact info */}
        <SettingsForm
          settingKey="contact"
          title="Datos de contacto"
          description="Información que aparece en el pie de página y la página de contacto."
          icon="contact"
          fields={[
            { name: 'email', label: 'Email de contacto', placeholder: 'info@gruporoiba.com' },
            { name: 'phone', label: 'Teléfono', placeholder: '+1 (809) 000-0000' },
            { name: 'instagram', label: 'Instagram', placeholder: '@grupo_roiba' },
            { name: 'address', label: 'Dirección', placeholder: 'Punta Cana, República Dominicana' },
          ]}
          values={settingsMap['contact'] || {}}
        />

        {/* SEO global */}
        <SettingsForm
          settingKey="seo"
          title="SEO global"
          description="Título y descripción que aparecen en los resultados de búsqueda de Google."
          icon="seo"
          fields={[
            { name: 'site_title', label: 'Título del sitio', placeholder: 'Grupo Roiba | Ingeniería y Construcción' },
            { name: 'site_description', label: 'Descripción del sitio', type: 'textarea', placeholder: 'Estudio de ingeniería y arquitectura especializado en construcción premium en Punta Cana...' },
          ]}
          values={settingsMap['seo'] || {}}
        />
      </div>

      {/* Help note */}
      <div className="mt-8 bg-slate-50 border border-slate-200 rounded-sm p-5">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
          <div className="text-sm text-slate-500">
            <p className="font-medium text-slate-700 mb-1">Ten en cuenta</p>
            <p>Los cambios en los ajustes pueden tardar hasta 1 hora en reflejarse en la web pública debido a la caché. Si necesitas que se apliquen de inmediato, contacta al equipo técnico.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
