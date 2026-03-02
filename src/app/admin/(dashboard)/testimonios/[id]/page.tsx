import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import ContentForm from '@/components/admin/ContentForm'
import { testimonialFields } from '@/lib/admin/field-definitions'
import { updateTestimonialAction } from '@/lib/admin/content-actions'

export default async function EditTestimonialPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data } = await supabase.from('testimonials').select('*').eq('id', params.id).single()
  if (!data) notFound()

  return (
    <ContentForm
      title={`Editar: ${data.name}`}
      fields={testimonialFields}
      initialData={data}
      action={updateTestimonialAction}
      backPath="/admin/testimonios"
      isEdit
    />
  )
}
