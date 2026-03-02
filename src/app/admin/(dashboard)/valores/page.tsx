import { getAllCompanyValues } from '@/lib/data'
import { deleteCompanyValueAction, toggleCompanyValueVisibilityAction } from '@/lib/admin/content-actions'
import ContentList from '@/components/admin/ContentList'

export default async function AdminValoresPage() {
  const items = await getAllCompanyValues()

  return (
    <ContentList
      title="Valores"
      items={items as unknown as Record<string, unknown>[]}
      basePath="/admin/valores"
      createLabel="Nuevo valor"
      emptyMessage="No hay valores todavía."
      deleteAction={deleteCompanyValueAction}
      toggleAction={toggleCompanyValueVisibilityAction}
      columns={[
        { key: 'title', label: 'Título', render: (v) => <strong className="text-slate-900">{String(v)}</strong> },
        { key: 'sort_order', label: 'Orden', render: (v) => <span className="text-slate-400 text-xs">Pos. {String(v)}</span> },
      ]}
    />
  )
}
