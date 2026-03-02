import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import ContentForm from '@/components/admin/ContentForm'
import { attractionFields } from '@/lib/admin/field-definitions'
import { updateAttractionAction } from '@/lib/admin/content-actions'

export default async function EditAttractionPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data } = await supabase.from('attractions').select('*').eq('id', params.id).single()
  if (!data) notFound()

  return (
    <ContentForm
      title={`Editar: ${data.title}`}
      fields={attractionFields}
      initialData={data}
      action={updateAttractionAction}
      backPath="/admin/atracciones"
      isEdit
    />
  )
}
