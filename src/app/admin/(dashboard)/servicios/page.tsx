import { getAllServices } from '@/lib/data'
import { deleteServiceAction, toggleServiceVisibilityAction } from '@/lib/admin/content-actions'
import ContentList from '@/components/admin/ContentList'

export default async function AdminServiciosPage() {
  const items = await getAllServices()

  return (
    <ContentList
      title="Servicios"
      items={items as unknown as Record<string, unknown>[]}
      basePath="/admin/servicios"
      createLabel="Nuevo servicio"
      emptyMessage="No hay servicios todavía."
      deleteAction={deleteServiceAction}
      toggleAction={toggleServiceVisibilityAction}
      columns={[
        { key: 'title', label: 'Título', render: (v) => <strong className="text-slate-900">{String(v)}</strong> },
        { key: 'page', label: 'Página', render: (v) => <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] uppercase rounded">{String(v)}</span> },
        { key: 'sort_order', label: 'Orden', render: (v) => <span className="text-slate-400 text-xs">Pos. {String(v)}</span> },
      ]}
    />
  )
}
