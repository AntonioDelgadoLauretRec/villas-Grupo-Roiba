import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import ContentForm from '@/components/admin/ContentForm'
import { teamMemberFields } from '@/lib/admin/field-definitions'
import { updateTeamMemberAction } from '@/lib/admin/content-actions'

export default async function EditTeamMemberPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data } = await supabase.from('team_members').select('*').eq('id', params.id).single()
  if (!data) notFound()

  return (
    <ContentForm
      title={`Editar: ${data.name}`}
      fields={teamMemberFields}
      initialData={data}
      action={updateTeamMemberAction}
      backPath="/admin/equipo"
      isEdit
    />
  )
}
