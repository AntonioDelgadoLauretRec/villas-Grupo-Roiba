import { getAllSubServices } from '@/lib/data'
import { deleteSubServiceAction, toggleSubServiceVisibilityAction } from '@/lib/admin/content-actions'
import ContentList from '@/components/admin/ContentList'

export default async function AdminSubServiciosPage() {
  const items = await getAllSubServices()

  return (
    <ContentList
      title="Sub-servicios"
      items={items as unknown as Record<string, unknown>[]}
      basePath="/admin/sub-servicios"
      createLabel="Nuevo sub-servicio"
      emptyMessage="No hay sub-servicios todavía."
      deleteAction={deleteSubServiceAction}
      toggleAction={toggleSubServiceVisibilityAction}
      columns={[
        { key: 'title', label: 'Título', render: (v) => <strong className="text-slate-900">{String(v)}</strong> },
        { key: 'label', label: 'Etiqueta', render: (v) => <span className="text-slate-500">{String(v)}</span> },
        { key: 'sort_order', label: 'Orden', render: (v) => <span className="text-slate-400 text-xs">Pos. {String(v)}</span> },
      ]}
    />
  )
}
