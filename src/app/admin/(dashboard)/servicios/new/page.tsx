import ContentForm from '@/components/admin/ContentForm'
import { serviceFields } from '@/lib/admin/field-definitions'
import { createServiceAction } from '@/lib/admin/content-actions'

export default function NewServicePage() {
  return (
    <ContentForm
      title="Nuevo servicio"
      fields={serviceFields}
      action={createServiceAction}
      backPath="/admin/servicios"
      initialData={{ visible: true, page: 'homepage', sort_order: 0 }}
    />
  )
}
