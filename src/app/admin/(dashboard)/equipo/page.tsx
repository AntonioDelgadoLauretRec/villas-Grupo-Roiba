import { getAllTeamMembers } from '@/lib/data'
import { deleteTeamMemberAction, toggleTeamMemberVisibilityAction } from '@/lib/admin/content-actions'
import ContentList from '@/components/admin/ContentList'

export default async function AdminEquipoPage() {
  const items = await getAllTeamMembers()

  return (
    <ContentList
      title="Equipo"
      items={items as unknown as Record<string, unknown>[]}
      basePath="/admin/equipo"
      createLabel="Nuevo miembro"
      emptyMessage="No hay miembros del equipo todavía."
      deleteAction={deleteTeamMemberAction}
      toggleAction={toggleTeamMemberVisibilityAction}
      columns={[
        { key: 'name', label: 'Nombre', render: (v) => <strong className="text-slate-900">{String(v)}</strong> },
        { key: 'role', label: 'Cargo', render: (v) => <span className="text-slate-500">{String(v)}</span> },
        { key: 'sort_order', label: 'Orden', render: (v) => <span className="text-slate-400 text-xs">Pos. {String(v)}</span> },
      ]}
    />
  )
}
