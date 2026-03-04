import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import ContentForm from '@/components/admin/ContentForm'
import { companyValueFields } from '@/lib/admin/field-definitions'
import { updateCompanyValueAction } from '@/lib/admin/content-actions'

export default async function EditCompanyValuePage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data } = await supabase.from('company_values').select('*').eq('id', params.id).single()
  if (!data) notFound()

  return (
    <ContentForm
      title={`Editar: ${data.title}`}
      fields={companyValueFields}
      initialData={data}
      action={updateCompanyValueAction}
      backPath="/admin/valores"
      isEdit
    />
  )
}
