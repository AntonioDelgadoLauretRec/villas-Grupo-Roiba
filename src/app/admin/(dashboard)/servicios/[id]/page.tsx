import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import ContentForm from '@/components/admin/ContentForm'
import { serviceFields } from '@/lib/admin/field-definitions'
import { updateServiceAction } from '@/lib/admin/content-actions'

export default async function EditServicePage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data } = await supabase.from('services').select('*').eq('id', params.id).single()
  if (!data) notFound()

  return (
    <ContentForm
      title={`Editar: ${data.title}`}
      fields={serviceFields}
      initialData={data}
      action={updateServiceAction}
      backPath="/admin/servicios"
      isEdit
    />
  )
}
