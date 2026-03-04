import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import ContentForm from '@/components/admin/ContentForm'
import { processStepFields } from '@/lib/admin/field-definitions'
import { updateProcessStepAction } from '@/lib/admin/content-actions'

export default async function EditProcessStepPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data } = await supabase.from('process_steps').select('*').eq('id', params.id).single()
  if (!data) notFound()

  return (
    <ContentForm
      title={`Editar: ${data.title}`}
      fields={processStepFields}
      initialData={data}
      action={updateProcessStepAction}
      backPath="/admin/proceso"
      isEdit
    />
  )
}
