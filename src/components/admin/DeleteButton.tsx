'use client'

import { useState } from 'react'

interface DeleteButtonProps {
  action: (formData: FormData) => Promise<void>
  id: string
  itemName: string
}

export default function DeleteButton({ action, id, itemName }: DeleteButtonProps) {
  const [confirming, setConfirming] = useState(false)
  const [deleting, setDeleting] = useState(false)

  if (!confirming) {
    return (
      <button
        type="button"
        onClick={() => setConfirming(true)}
        title="Eliminar"
        className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-sm transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="3 6 5 6 21 6" />
          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      </button>
    )
  }

  async function handleDelete() {
    setDeleting(true)
    const formData = new FormData()
    formData.set('id', id)
    await action(formData)
    setDeleting(false)
  }

  return (
    <div className="absolute inset-0 z-10 flex items-center bg-white/95 backdrop-blur-sm px-4 rounded-sm">
      <div className="flex items-center gap-3 w-full">
        <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <p className="text-sm text-slate-700 flex-1 min-w-0">
          ¿Eliminar <strong className="truncate">&ldquo;{itemName}&rdquo;</strong>?
        </p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            type="button"
            onClick={() => setConfirming(false)}
            disabled={deleting}
            className="px-3 py-1.5 text-xs text-slate-600 border border-slate-300 rounded-sm hover:bg-slate-50 transition-colors font-medium"
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleDelete}
            disabled={deleting}
            className="px-3 py-1.5 text-xs bg-red-600 text-white rounded-sm hover:bg-red-700 transition-colors disabled:opacity-50 font-medium"
          >
            {deleting ? 'Eliminando...' : 'Eliminar'}
          </button>
        </div>
      </div>
    </div>
  )
}
