'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { uploadImageAction } from '@/lib/admin/actions'

interface ImageUploaderProps {
  name: string
  label: string
  defaultValue?: string
  folder?: string
}

export default function ImageUploader({
  name,
  label,
  defaultValue = '',
  folder = 'general',
}: ImageUploaderProps) {
  const [url, setUrl] = useState(defaultValue)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef<HTMLInputElement>(null)

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

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

  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 mb-2">{label}</label>

      {/* Hidden input for the form value */}
      <input type="hidden" name={name} value={url} />

      {/* Preview */}
      {url && (
        <div className="relative w-full max-w-xs aspect-video mb-3 border border-slate-200 rounded-sm overflow-hidden bg-slate-100">
          <Image
            src={url}
            alt="Preview"
            fill
            className="object-cover"
            sizes="320px"
          />
          <button
            type="button"
            onClick={() => {
              setUrl('')
              if (fileRef.current) fileRef.current.value = ''
            }}
            className="absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full text-xs flex items-center justify-center hover:bg-red-600"
          >
            x
          </button>
        </div>
      )}

      {/* Upload button */}
      <div className="flex items-center gap-3">
        <label className="cursor-pointer px-4 py-2 border border-slate-300 rounded-sm text-sm text-slate-700 hover:bg-slate-50 transition-colors">
          {uploading ? 'Subiendo...' : 'Seleccionar imagen'}
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            onChange={handleUpload}
            disabled={uploading}
            className="hidden"
          />
        </label>
        {url && <span className="text-xs text-green-600">Imagen cargada</span>}
      </div>

      {/* Manual URL input as fallback */}
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="O pega una URL de imagen"
        className="w-full mt-2 px-3 py-1.5 border border-slate-200 rounded-sm text-xs text-slate-500 focus:outline-none focus:border-roiba-dorado transition-colors"
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
