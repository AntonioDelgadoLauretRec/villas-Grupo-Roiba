import ContentForm from '@/components/admin/ContentForm'
import { testimonialFields } from '@/lib/admin/field-definitions'
import { createTestimonialAction } from '@/lib/admin/content-actions'

export default function NewTestimonialPage() {
  return (
    <ContentForm
      title="Nuevo testimonio"
      fields={testimonialFields}
      action={createTestimonialAction}
      backPath="/admin/testimonios"
      initialData={{ visible: true, sort_order: 0 }}
    />
  )
}
