import ContentForm from '@/components/admin/ContentForm'
import { attractionFields } from '@/lib/admin/field-definitions'
import { createAttractionAction } from '@/lib/admin/content-actions'

export default function NewAttractionPage() {
  return (
    <ContentForm
      title="Nueva atracción"
      fields={attractionFields}
      action={createAttractionAction}
      backPath="/admin/atracciones"
      initialData={{ visible: true, sort_order: 0 }}
    />
  )
}
