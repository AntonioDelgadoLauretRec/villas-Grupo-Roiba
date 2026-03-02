import ContentForm from '@/components/admin/ContentForm'
import { subServiceFields } from '@/lib/admin/field-definitions'
import { createSubServiceAction } from '@/lib/admin/content-actions'

export default function NewSubServicePage() {
  return (
    <ContentForm
      title="Nuevo sub-servicio"
      fields={subServiceFields}
      action={createSubServiceAction}
      backPath="/admin/sub-servicios"
      initialData={{ visible: true, sort_order: 0 }}
    />
  )
}
