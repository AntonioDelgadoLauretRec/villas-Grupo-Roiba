'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { uploadImageAction } from '@/lib/admin/actions'

interface ImageUploaderProps {
  name: string
  label: string
  defaultValue?: string
  folder?: string
  helpText?: string
}

export default function ImageUploader({
  name,
  label,
  defaultValue = '',
  folder = 'general',
  helpText,
}: ImageUploaderProps) {
  const [url, setUrl] = useState(defaultValue)
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

    const formData = new FormData()
    formData.set('file', file)
    formData.set('folder', folder)

    const result = await uploadImageAction(formData)

    if (result.success && result.url) {
      setUrl(result.url)
    } else {
      setError(result.error || 'Error al subir la imagen')
    }

    setUploading(false)
  }

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    await handleFile(file)
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault()
    setDragActive(false)
    const file = e.dataTransfer.files?.[0]
    if (file) handleFile(file)
  }

  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>

      {/* Hidden input for the form value */}
      <input type="hidden" name={name} value={url} />

      {/* Preview or dropzone */}
      {url ? (
        <div className="relative w-full max-w-sm aspect-video mb-3 border border-slate-200 rounded-sm overflow-hidden bg-slate-100 group">
          <Image
            src={url}
            alt="Preview"
            fill
            className="object-cover"
            sizes="384px"
          />
          {/* Overlay actions */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="px-3 py-1.5 bg-white text-slate-700 text-xs rounded-sm hover:bg-slate-100 transition-colors font-medium"
            >
              Cambiar
            </button>
            <button
              type="button"
              onClick={() => {
                setUrl('')
                if (fileRef.current) fileRef.current.value = ''
              }}
              className="px-3 py-1.5 bg-red-600 text-white text-xs rounded-sm hover:bg-red-700 transition-colors font-medium"
            >
              Eliminar
            </button>
          </div>
        </div>
      ) : (
        <div
          onDragOver={(e) => { e.preventDefault(); setDragActive(true) }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          onClick={() => !uploading && fileRef.current?.click()}
          className={`
            w-full max-w-sm border-2 border-dashed rounded-sm p-8 text-center cursor-pointer transition-colors
            ${dragActive ? 'border-roiba-dorado bg-roiba-dorado/5' : 'border-slate-300 hover:border-slate-400 bg-slate-50'}
            ${uploading ? 'opacity-50 cursor-not-allowed' : ''}
          `}
        >
          {uploading ? (
            <>
              <svg className="w-8 h-8 mx-auto text-slate-400 animate-spin mb-3" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <p className="text-sm text-slate-500">Subiendo imagen...</p>
            </>
          ) : (
            <>
              <svg className="w-8 h-8 mx-auto text-slate-300 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-slate-600 font-medium mb-1">
                Haz clic o arrastra una imagen
              </p>
              <p className="text-xs text-slate-400">
                JPG, PNG, WebP o AVIF &middot; Máx. 10 MB
              </p>
            </>
          )}
        </div>
      )}

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
        <div className="flex items-center gap-2 mt-2 text-red-600 text-xs">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
            <line x1="15" y1="9" x2="9" y2="15" />
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {helpText && (
        <p className="mt-1.5 text-xs text-slate-400">{helpText}</p>
      )}
    </div>
  )
}
