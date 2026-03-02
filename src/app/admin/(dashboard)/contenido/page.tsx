'use client'

import { useState, useEffect } from 'react'
import { upsertSiteSettingAction } from '@/lib/admin/content-actions'
import type { ActionResult } from '@/lib/admin/actions'

const SETTING_KEYS = [
  { key: 'hero', label: 'Hero (portada)', description: 'Título, subtítulo y CTA de la portada' },
  { key: 'hero_images', label: 'Imágenes Hero', description: 'Array JSON de URLs de imágenes para el slideshow' },
  { key: 'stats', label: 'Estadísticas', description: 'Array JSON de estadísticas (value, label)' },
  { key: 'about', label: 'Sección Nosotros (homepage)', description: 'Título y párrafos de la sección About' },
  { key: 'contact', label: 'Contacto', description: 'Email, teléfono, Instagram, dirección' },
  { key: 'seo', label: 'SEO', description: 'Título y descripción del sitio para buscadores' },
  { key: 'enfoque', label: 'Enfoque (nosotros)', description: 'Array JSON de items de enfoque' },
  { key: 'footer', label: 'Footer', description: 'Descripción de la empresa y redes sociales' },
]

export default function AdminContenidoPage() {
  const [settings, setSettings] = useState<Record<string, string>>({})
  const [activeKey, setActiveKey] = useState(SETTING_KEYS[0].key)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/api/admin/settings')
        if (res.ok) {
          const data = await res.json()
          const mapped: Record<string, string> = {}
          for (const [k, v] of Object.entries(data)) {
            mapped[k] = JSON.stringify(v, null, 2)
          }
          setSettings(mapped)
        }
      } catch {
        // Settings not loaded, will use empty
      }
      setLoading(false)
    }
    load()
  }, [])

  async function handleSave() {
    setSaving(true)
    setMessage('')

    const fd = new FormData()
    fd.set('setting_key', activeKey)
    fd.set('setting_value', settings[activeKey] || '{}')

    const result: ActionResult = await upsertSiteSettingAction({ success: false }, fd)
    if (result.success) {
      setMessage('Guardado correctamente')
    } else {
      setMessage(`Error: ${result.error}`)
    }
    setSaving(false)
    setTimeout(() => setMessage(''), 3000)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-6 h-6 border-2 border-roiba-verde/30 border-t-roiba-verde rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div>
      <h1 className="text-2xl font-serif text-slate-900 mb-2">Contenido del sitio</h1>
      <p className="text-slate-500 text-sm mb-8">Edita las configuraciones globales del sitio en formato JSON.</p>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar with keys */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
            {SETTING_KEYS.map((item) => (
              <button
                key={item.key}
                onClick={() => setActiveKey(item.key)}
                className={`w-full text-left px-4 py-3 border-b border-slate-100 last:border-0 transition-colors ${
                  activeKey === item.key
                    ? 'bg-roiba-verde/5 border-l-2 border-l-roiba-verde'
                    : 'hover:bg-slate-50'
                }`}
              >
                <p className={`text-sm font-medium ${activeKey === item.key ? 'text-roiba-verde' : 'text-slate-700'}`}>
                  {item.label}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">{item.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Editor */}
        <div className="flex-1">
          <div className="bg-white border border-slate-200 rounded-sm">
            <div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
              <div>
                <h2 className="font-medium text-slate-900">{SETTING_KEYS.find(s => s.key === activeKey)?.label}</h2>
                <p className="text-xs text-slate-400 mt-0.5">Clave: <code className="bg-slate-100 px-1 rounded">{activeKey}</code></p>
              </div>
              {message && (
                <span className={`text-sm ${message.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>
                  {message}
                </span>
              )}
            </div>
            <div className="p-4">
              <textarea
                value={settings[activeKey] || '{}'}
                onChange={(e) => setSettings(prev => ({ ...prev, [activeKey]: e.target.value }))}
                rows={16}
                className="w-full px-3 py-2 border border-slate-300 rounded-sm font-mono text-sm text-slate-900 focus:outline-none focus:border-roiba-verde focus:ring-1 focus:ring-roiba-verde/20"
                spellCheck={false}
              />
            </div>
            <div className="border-t border-slate-200 px-4 py-3 flex justify-end">
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-5 py-2 text-sm bg-roiba-verde text-white rounded-sm hover:bg-roiba-verde-light font-medium disabled:opacity-50 transition-colors"
              >
                {saving ? 'Guardando...' : 'Guardar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
