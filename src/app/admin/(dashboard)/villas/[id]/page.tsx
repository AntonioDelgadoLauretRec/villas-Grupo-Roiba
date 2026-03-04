import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import VillaForm from '@/components/admin/VillaForm'
import { updateVillaAction } from '@/lib/admin/actions'
import GalleryManager from '@/components/admin/GalleryManager'
import Link from 'next/link'
import type { Villa } from '@/types/admin'

export default async function EditVillaPage({
  params,
}: {
  params: { id: string }
}) {
  const supabase = await createClient()

  const { data: villa } = await supabase
    .from('villas')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!villa) notFound()

  const { data: images } = await supabase
    .from('villa_images')
    .select('*')
    .eq('villa_id', params.id)
    .order('sort_order', { ascending: true })

  return (
    <div>
      <div className="mb-8">
        <Link href="/admin/villas" className="text-sm text-roiba-dorado hover:underline">
          &larr; Volver a villas
        </Link>
        <h1 className="text-2xl font-serif text-slate-900 mt-2">
          Editar: {villa.title}
        </h1>
        <p className="text-slate-500 mt-1">Modifica los datos de la villa</p>
      </div>

      <VillaForm action={updateVillaAction} villa={villa as Villa} />

      {/* Gallery manager */}
      <div className="mt-10">
        <GalleryManager
          entityType="villa"
          entityId={params.id}
          images={images || []}
        />
      </div>
    </div>
  )
}
