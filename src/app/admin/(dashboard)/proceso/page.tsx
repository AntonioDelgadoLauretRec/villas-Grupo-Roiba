import { getAllProcessSteps } from '@/lib/data'
import { deleteProcessStepAction, toggleProcessStepVisibilityAction } from '@/lib/admin/content-actions'
import ContentList from '@/components/admin/ContentList'

export default async function AdminProcesoPage() {
  const items = await getAllProcessSteps()

  return (
    <ContentList
      title="Proceso"
      items={items as unknown as Record<string, unknown>[]}
      basePath="/admin/proceso"
      createLabel="Nuevo paso"
      emptyMessage="No hay pasos de proceso todavía."
      deleteAction={deleteProcessStepAction}
      toggleAction={toggleProcessStepVisibilityAction}
      columns={[
        { key: 'num', label: 'Nº', render: (v) => <span className="text-roiba-dorado font-mono font-bold">{String(v)}</span> },
        { key: 'title', label: 'Título', render: (v) => <strong className="text-slate-900">{String(v)}</strong> },
        { key: 'duration', label: 'Duración', render: (v) => <span className="text-slate-400 text-xs">{String(v)}</span> },
      ]}
    />
  )
}
