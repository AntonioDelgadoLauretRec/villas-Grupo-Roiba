'use client'

import { useState } from 'react'
import Link from 'next/link'
import type { ActionResult } from '@/lib/admin/actions'

export interface ContentColumn {
  key: string
  label: string
  render?: (value: unknown, item: Record<string, unknown>) => React.ReactNode
}

interface ContentListProps {
  title: string
  items: Record<string, unknown>[]
  columns: ContentColumn[]
  basePath: string
  createLabel?: string
  emptyMessage?: string
  deleteAction: (formData: FormData) => Promise<ActionResult>
  toggleAction?: (formData: FormData) => Promise<ActionResult>
  toggleField?: string // 'visible' or 'published'
}

export default function ContentList({
  title,
  items,
  columns,
  basePath,
  createLabel = 'Crear nuevo',
  emptyMessage = 'No hay elementos todavía.',
  deleteAction,
  toggleAction,
  toggleField = 'visible',
}: ContentListProps) {
  const [deletingId, setDeletingId] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)

  async function handleDelete(id: string) {
    setProcessing(true)
    const fd = new FormData()
    fd.set('id', id)
    await deleteAction(fd)
    setDeletingId(null)
    setProcessing(false)
  }

  async function handleToggle(id: string, currentValue: boolean) {
    if (!toggleAction) return
    const fd = new FormData()
    fd.set('id', id)
    fd.set(toggleField, String(currentValue))
    await toggleAction(fd)
  }

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-serif text-slate-900">{title}</h1>
          <p className="text-slate-500 mt-1 text-sm">{items.length} elementos</p>
        </div>
        <Link
          href={`${basePath}/new`}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-roiba-verde text-white text-sm font-medium hover:bg-roiba-verde-light transition-colors rounded-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          {createLabel}
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="bg-white border border-dashed border-slate-300 rounded-sm p-16 text-center">
          <p className="text-slate-400 text-sm mb-6">{emptyMessage}</p>
          <Link
            href={`${basePath}/new`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-roiba-verde text-white text-sm font-medium hover:bg-roiba-verde-light transition-colors rounded-sm"
          >
            {createLabel}
          </Link>
        </div>
      ) : (
        <div className="space-y-2">
          {items.map((item) => {
            const id = item.id as string
            const isVisible = item[toggleField] as boolean

            return (
              <div
                key={id}
                className={`relative bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-slate-300 transition-colors ${
                  !isVisible ? 'opacity-60' : ''
                }`}
              >
                {deletingId === id && (
                  <div className="absolute inset-0 z-10 flex items-center bg-white/95 backdrop-blur-sm px-4 rounded-sm">
                    <div className="flex items-center gap-3 w-full">
                      <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                        <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
                      </svg>
                      <p className="text-sm text-slate-700 flex-1">¿Eliminar este elemento?</p>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button onClick={() => setDeletingId(null)} disabled={processing} className="px-3 py-1.5 text-xs text-slate-600 border border-slate-300 rounded-sm hover:bg-slate-50 font-medium">Cancelar</button>
                        <button onClick={() => handleDelete(id)} disabled={processing} className="px-3 py-1.5 text-xs bg-red-600 text-white rounded-sm hover:bg-red-700 disabled:opacity-50 font-medium">
                          {processing ? 'Eliminando...' : 'Eliminar'}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4 p-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 flex-wrap">
                      {columns.map((col) => (
                        <span key={col.key} className="text-sm text-slate-600">
                          {col.render
                            ? col.render(item[col.key], item)
                            : <span><strong className="text-slate-900">{col.label}:</strong> {String(item[col.key] ?? '')}</span>
                          }
                        </span>
                      ))}
                    </div>
                  </div>

                  {!isVisible && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] bg-slate-100 text-slate-500 rounded-sm font-medium uppercase tracking-wider">Oculto</span>
                  )}

                  <div className="flex items-center gap-1 flex-shrink-0">
                    {toggleAction && (
                      <button
                        onClick={() => handleToggle(id, isVisible)}
                        title={isVisible ? 'Ocultar' : 'Mostrar'}
                        className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-sm transition-colors"
                      >
                        {isVisible ? (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                            <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        )}
                      </button>
                    )}
                    <Link
                      href={`${basePath}/${id}`}
                      title="Editar"
                      className="p-2 text-slate-400 hover:text-roiba-verde hover:bg-slate-100 rounded-sm transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                      </svg>
                    </Link>
                    <button
                      onClick={() => setDeletingId(id)}
                      title="Eliminar"
                      className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-sm transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
