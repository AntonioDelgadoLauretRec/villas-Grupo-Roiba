import { getAllTestimonials } from '@/lib/data'
import { deleteTestimonialAction, toggleTestimonialVisibilityAction } from '@/lib/admin/content-actions'
import ContentList from '@/components/admin/ContentList'

export default async function AdminTestimoniosPage() {
  const items = await getAllTestimonials()

  return (
    <ContentList
      title="Testimonios"
      items={items as unknown as Record<string, unknown>[]}
      basePath="/admin/testimonios"
      createLabel="Nuevo testimonio"
      emptyMessage="No hay testimonios todavía."
      deleteAction={deleteTestimonialAction}
      toggleAction={toggleTestimonialVisibilityAction}
      columns={[
        { key: 'name', label: 'Nombre', render: (v) => <strong className="text-slate-900">{String(v)}</strong> },
        { key: 'role', label: 'Rol', render: (v) => <span className="text-slate-500">{String(v)}</span> },
        { key: 'location', label: 'Ubicación', render: (v) => <span className="text-slate-400 text-xs">{String(v)}</span> },
      ]}
    />
  )
}
