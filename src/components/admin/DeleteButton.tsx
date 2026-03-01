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
        className="px-4 py-2 border border-red-300 text-red-600 text-sm hover:bg-red-50 transition-colors rounded-sm"
      >
        Eliminar
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
    <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-sm">
      <p className="text-sm text-red-700 flex-1">
        ¿Eliminar &ldquo;{itemName}&rdquo;? Esta acción no se puede deshacer.
      </p>
      <button
        type="button"
        onClick={handleDelete}
        disabled={deleting}
        className="px-4 py-2 bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors rounded-sm disabled:opacity-50"
      >
        {deleting ? 'Eliminando...' : 'Confirmar eliminación'}
      </button>
      <button
        type="button"
        onClick={() => setConfirming(false)}
        className="px-4 py-2 border border-slate-300 text-slate-600 text-sm hover:bg-slate-50 transition-colors rounded-sm"
      >
        Cancelar
      </button>
    </div>
  )
}
