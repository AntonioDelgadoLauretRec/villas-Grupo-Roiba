import ContentForm from '@/components/admin/ContentForm'
import { teamMemberFields } from '@/lib/admin/field-definitions'
import { createTeamMemberAction } from '@/lib/admin/content-actions'

export default function NewTeamMemberPage() {
  return (
    <ContentForm
      title="Nuevo miembro del equipo"
      fields={teamMemberFields}
      action={createTeamMemberAction}
      backPath="/admin/equipo"
      initialData={{ visible: true, sort_order: 0 }}
    />
  )
}
