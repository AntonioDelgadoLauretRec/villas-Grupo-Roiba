'use client'

import { FC, useEffect, useState } from 'react'
import type { Villa } from '@/types/sanity'
import { VillaCard } from '@/components/ui/Card'

export const VillaGrid: FC = () => {
  const [villas, setVillas] = useState<Villa[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/villas')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then((data) => {
        // Validar que sea array
        if (Array.isArray(data)) {
          setVillas(data)
        } else {
          setError('Invalid villas data format')
          console.error('Expected array, got:', data)
        }
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error fetching villas:', err)
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="text-center py-12">Cargando...</div>
  if (error) return <div className="text-center py-12 text-red-600">Error: {error}</div>
  if (villas.length === 0) return <div className="text-center py-12">No villas found</div>

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {villas.map((villa) => (
        <VillaCard
          key={villa.id}
          villa={villa}
          onSelect={() => {
            window.location.href = `/villas/${villa.slug}`
          }}
        />
      ))}
    </div>
  )
}
