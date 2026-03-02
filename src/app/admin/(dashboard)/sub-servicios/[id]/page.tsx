import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import ContentForm from '@/components/admin/ContentForm'
import { subServiceFields } from '@/lib/admin/field-definitions'
import { updateSubServiceAction } from '@/lib/admin/content-actions'

export default async function EditSubServicePage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data } = await supabase.from('sub_services').select('*').eq('id', params.id).single()
  if (!data) notFound()

  // Convert includes array to newline-separated string for the textarea
  const initialData = {
    ...data,
    includes: Array.isArray(data.includes) ? data.includes.join('\n') : '',
  }

  return (
    <ContentForm
      title={`Editar: ${data.title}`}
      fields={subServiceFields}
      initialData={initialData}
      action={updateSubServiceAction}
      backPath="/admin/sub-servicios"
      isEdit
    />
  )
}
