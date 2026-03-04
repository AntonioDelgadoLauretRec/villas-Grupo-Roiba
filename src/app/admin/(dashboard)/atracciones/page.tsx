import { getAllAttractions } from '@/lib/data'
import { deleteAttractionAction, toggleAttractionVisibilityAction } from '@/lib/admin/content-actions'
import ContentList from '@/components/admin/ContentList'

export default async function AdminAtraccionesPage() {
  const items = await getAllAttractions()

  return (
    <ContentList
      title="Atracciones"
      items={items as unknown as Record<string, unknown>[]}
      basePath="/admin/atracciones"
      createLabel="Nueva atracción"
      emptyMessage="No hay atracciones todavía."
      deleteAction={deleteAttractionAction}
      toggleAction={toggleAttractionVisibilityAction}
      columns={[
        { key: 'title', label: 'Título', render: (v) => <strong className="text-slate-900">{String(v)}</strong> },
        { key: 'subtitle', label: 'Subtítulo', render: (v) => <span className="text-slate-500">{String(v)}</span> },
        { key: 'sort_order', label: 'Orden', render: (v) => <span className="text-slate-400 text-xs">Pos. {String(v)}</span> },
      ]}
    />
  )
}
