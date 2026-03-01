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
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-serif text-slate-900">Ajustes del sitio</h1>
        <p className="text-slate-500 mt-1">Configura los datos globales de la web</p>
      </div>

      <div className="space-y-8">
        {/* Hero settings */}
        <SettingsForm
          settingKey="hero"
          title="Hero principal"
          description="Textos que aparecen en el hero de la página de inicio"
          fields={[
            { name: 'title', label: 'Título' },
            { name: 'subtitle', label: 'Subtítulo' },
            { name: 'cta_text', label: 'Texto del botón CTA' },
            { name: 'cta_link', label: 'Enlace del CTA', placeholder: '/contacto' },
          ]}
          values={settingsMap['hero'] || {}}
        />

        {/* Contact info */}
        <SettingsForm
          settingKey="contact"
          title="Datos de contacto"
          description="Información de contacto que aparece en el footer y la página de contacto"
          fields={[
            { name: 'email', label: 'Email', placeholder: 'info@gruporoiba.com' },
            { name: 'phone', label: 'Teléfono' },
            { name: 'instagram', label: 'Instagram', placeholder: '@grupo_roiba' },
            { name: 'address', label: 'Dirección', placeholder: 'Punta Cana, República Dominicana' },
          ]}
          values={settingsMap['contact'] || {}}
        />

        {/* SEO global */}
        <SettingsForm
          settingKey="seo"
          title="SEO global"
          description="Título y descripción por defecto del sitio"
          fields={[
            { name: 'site_title', label: 'Título del sitio' },
            { name: 'site_description', label: 'Descripción del sitio', type: 'textarea' },
          ]}
          values={settingsMap['seo'] || {}}
        />
      </div>
    </div>
  )
}
