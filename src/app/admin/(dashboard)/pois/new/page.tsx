import ContentForm from '@/components/admin/ContentForm'
import { poiFields } from '@/lib/admin/field-definitions'
import { createPoiAction } from '@/lib/admin/content-actions'

export default function NewPoiPage() {
  return (
    <ContentForm
      title="Nuevo punto de interés"
      fields={poiFields}
      action={createPoiAction}
      backPath="/admin/pois"
      initialData={{ visible: true, sort_order: 0, category: 'resort', lat: 18.5, lng: -68.3 }}
    />
  )
}
