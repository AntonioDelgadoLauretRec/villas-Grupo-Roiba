import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import ContentForm from '@/components/admin/ContentForm'
import { poiFields } from '@/lib/admin/field-definitions'
import { updatePoiAction } from '@/lib/admin/content-actions'

export default async function EditPoiPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data } = await supabase.from('pois').select('*').eq('id', params.id).single()
  if (!data) notFound()

  return (
    <ContentForm
      title={`Editar: ${data.name}`}
      fields={poiFields}
      initialData={data}
      action={updatePoiAction}
      backPath="/admin/pois"
      isEdit
    />
  )
}
