import ContentForm from '@/components/admin/ContentForm'
import { processStepFields } from '@/lib/admin/field-definitions'
import { createProcessStepAction } from '@/lib/admin/content-actions'

export default function NewProcessStepPage() {
  return (
    <ContentForm
      title="Nuevo paso de proceso"
      fields={processStepFields}
      action={createProcessStepAction}
      backPath="/admin/proceso"
      initialData={{ visible: true, sort_order: 0, num: '01' }}
    />
  )
}
