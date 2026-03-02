import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import ContentForm from '@/components/admin/ContentForm'
import { blogPostFields } from '@/lib/admin/field-definitions'
import { updateBlogPostAction } from '@/lib/admin/content-actions'

export default async function EditBlogPostPage({ params }: { params: { id: string } }) {
  const supabase = await createClient()
  const { data } = await supabase.from('blog_posts').select('*').eq('id', params.id).single()
  if (!data) notFound()

  return (
    <ContentForm
      title={`Editar: ${data.title}`}
      fields={blogPostFields}
      initialData={data}
      action={updateBlogPostAction}
      backPath="/admin/blog"
      isEdit
    />
  )
}
