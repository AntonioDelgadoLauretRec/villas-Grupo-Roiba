import ContentForm from '@/components/admin/ContentForm'
import { companyValueFields } from '@/lib/admin/field-definitions'
import { createCompanyValueAction } from '@/lib/admin/content-actions'

export default function NewCompanyValuePage() {
  return (
    <ContentForm
      title="Nuevo valor"
      fields={companyValueFields}
      action={createCompanyValueAction}
      backPath="/admin/valores"
      initialData={{ visible: true, sort_order: 0 }}
    />
  )
}
