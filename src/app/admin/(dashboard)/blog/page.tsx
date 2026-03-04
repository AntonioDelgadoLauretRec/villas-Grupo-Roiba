import { getAllBlogPosts } from '@/lib/data'
import { deleteBlogPostAction, toggleBlogPostPublishedAction } from '@/lib/admin/content-actions'
import ContentList from '@/components/admin/ContentList'

export default async function AdminBlogPage() {
  const items = await getAllBlogPosts()

  return (
    <ContentList
      title="Blog"
      items={items as unknown as Record<string, unknown>[]}
      basePath="/admin/blog"
      createLabel="Nuevo artículo"
      emptyMessage="No hay artículos todavía."
      deleteAction={deleteBlogPostAction}
      toggleAction={toggleBlogPostPublishedAction}
      toggleField="published"
      columns={[
        { key: 'title', label: 'Título', render: (v) => <strong className="text-slate-900">{String(v)}</strong> },
        { key: 'category', label: 'Categoría', render: (v) => <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-[10px] uppercase rounded">{String(v)}</span> },
        { key: 'date', label: 'Fecha', render: (v) => <span className="text-slate-400 text-xs">{String(v)}</span> },
      ]}
    />
  )
}
