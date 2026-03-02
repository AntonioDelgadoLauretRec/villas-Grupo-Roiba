import { getAllPois } from '@/lib/data'
import { deletePoiAction, togglePoiVisibilityAction } from '@/lib/admin/content-actions'
import ContentList from '@/components/admin/ContentList'

export default async function AdminPoisPage() {
  const items = await getAllPois()

  return (
    <ContentList
      title="Puntos de interés"
      items={items as unknown as Record<string, unknown>[]}
      basePath="/admin/pois"
      createLabel="Nuevo POI"
      emptyMessage="No hay puntos de interés todavía."
      deleteAction={deletePoiAction}
      toggleAction={togglePoiVisibilityAction}
      columns={[
        { key: 'name', label: 'Nombre', render: (v) => <strong className="text-slate-900">{String(v)}</strong> },
        { key: 'category', label: 'Categoría', render: (v) => <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] uppercase rounded">{String(v)}</span> },
        { key: 'lat', label: 'Coords', render: (_v, item) => <span className="text-slate-400 text-xs">{String(item.lat)}, {String(item.lng)}</span> },
      ]}
    />
  )
}
