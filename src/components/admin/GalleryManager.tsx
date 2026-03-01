'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  uploadImageAction,
  addVillaImageAction,
  deleteVillaImageAction,
} from '@/lib/admin/actions'
import type { VillaImage } from '@/types/admin'

interface GalleryManagerProps {
  entityType: 'villa' | 'project'
  entityId: string
  images: VillaImage[]
}

export default function GalleryManager({
  entityType,
  entityId,
  images,
}: GalleryManagerProps) {
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    setError('')

    // 1. Upload to storage
    const uploadData = new FormData()
    uploadData.set('file', file)
    uploadData.set('folder', `${entityType}s`)

    const result = await uploadImageAction(uploadData)

    if (!result.success || !result.url) {
      setError(result.error || 'Error al subir')
      setUploading(false)
      return
    }

    // 2. Add to gallery table
    const addData = new FormData()
    addData.set(`${entityType}_id`, entityId)
    addData.set('image_url', result.url)
    addData.set('alt_text', file.name.replace(/\.\w+$/, ''))

    const addResult = await addVillaImageAction(addData)

    if (!addResult.success) {
      setError(addResult.error || 'Error al guardar')
    }

    setUploading(false)
    // Reset input
    e.target.value = ''
  }

  return (
    <fieldset className="bg-white border border-slate-200 rounded-sm p-6">
      <legend className="text-sm font-medium text-slate-900 px-2">
        Galería de imágenes ({images.length})
      </legend>

      {/* Image grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-4 mb-6">
          {images.map((img) => (
            <div
              key={img.id}
              className="relative group aspect-video rounded-sm overflow-hidden border border-slate-200 bg-slate-100"
            >
              <Image
                src={img.image_url}
                alt={img.alt_text || ''}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <form action={deleteVillaImageAction} className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <input type="hidden" name="id" value={img.id} />
                  <input type="hidden" name="villa_id" value={entityId} />
                  <button
                    type="submit"
                    className="px-3 py-1.5 bg-red-600 text-white text-xs rounded hover:bg-red-700 transition-colors"
                  >
                    Eliminar
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Upload */}
      <div className="flex items-center gap-4">
        <label className="cursor-pointer px-4 py-2 border border-slate-300 rounded-sm text-sm text-slate-700 hover:bg-slate-50 transition-colors">
          {uploading ? 'Subiendo...' : '+ Añadir imagen'}
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            onChange={handleUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>
        {error && <p className="text-red-500 text-xs">{error}</p>}
      </div>
    </fieldset>
  )
}
