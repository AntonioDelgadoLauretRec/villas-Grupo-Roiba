'use client'

import { useState, useRef } from 'react'
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
  const [dragActive, setDragActive] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  async function handleFile(file: File) {
    if (!file.type.startsWith('image/')) {
      setError('El archivo seleccionado no es una imagen válida')
      return
    }
    if (file.size > 10 * 1024 * 1024) {
      setError('La imagen supera el límite de 10 MB')
      return
    }

    setUploading(true)
    setError('')

    // 1. Upload to storage
    const uploadData = new FormData()
    uploadData.set('file', file)
    uploadData.set('folder', `${entityType}s`)

    const result = await uploadImageAction(uploadData)

    if (!result.success || !result.url) {
      setError(result.error || 'Error al subir la imagen')
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
      setError(addResult.error || 'Error al guardar en la galería')
    }

    setUploading(false)
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    await handleFile(file)
    e.target.value = ''
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragActive(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  return (
    <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              Galería de imágenes
              <span className="font-normal text-slate-400 ml-1">({images.length})</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">Añade imágenes adicionales para la galería.</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Image grid */}
        {images.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
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
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <form action={deleteVillaImageAction} className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <input type="hidden" name="id" value={img.id} />
                    <input type="hidden" name="villa_id" value={entityId} />
                    <button
                      type="submit"
                      title="Eliminar imagen"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 text-white text-xs rounded-sm hover:bg-red-700 transition-colors font-medium"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <polyline points="3 6 5 6 21 6" />
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      </svg>
                      Eliminar
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Upload dropzone */}
        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          onClick={() => !uploading && fileRef.current?.click()}
          className={`
            border-2 border-dashed rounded-sm p-6 text-center cursor-pointer transition-colors
            ${dragActive ? 'border-roiba-dorado bg-roiba-dorado/5' : 'border-slate-300 hover:border-slate-400 bg-slate-50'}
            ${uploading ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {uploading ? (
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-slate-400 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <span className="text-sm text-slate-500">Subiendo imagen...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-3">
              <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span className="text-sm text-slate-600 font-medium">Añadir imagen</span>
              <span className="text-xs text-slate-400">&middot; Haz clic o arrastra</span>
            </div>
          )}
        </div>

        {/* Hidden file input */}
        <input
          ref={fileRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/avif"
          onChange={handleUpload}
          disabled={uploading}
          className="hidden"
        />

        {error && (
          <div className="flex items-center gap-2 mt-3 text-red-600 text-xs">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <line x1="15" y1="9" x2="9" y2="15" />
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            <span>{error}</span>
          </div>
        )}
      </div>
    </div>
  )
}
