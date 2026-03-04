import ContentForm from '@/components/admin/ContentForm'
import { blogPostFields } from '@/lib/admin/field-definitions'
import { createBlogPostAction } from '@/lib/admin/content-actions'

export default function NewBlogPostPage() {
  return (
    <ContentForm
      title="Nuevo artículo"
      fields={blogPostFields}
      action={createBlogPostAction}
      backPath="/admin/blog"
      initialData={{ published: false, sort_order: 0 }}
    />
  )
}
