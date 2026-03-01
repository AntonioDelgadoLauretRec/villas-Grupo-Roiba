import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Image from 'next/image'
import { toggleVillaVisibilityAction, deleteVillaAction } from '@/lib/admin/actions'
import DeleteButton from '@/components/admin/DeleteButton'

export default async function AdminVillasPage() {
  const supabase = await createClient()

  const { data: villas, count } = await supabase
    .from('villas')
    .select('*', { count: 'exact' })
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false })

  const published = villas?.filter((v) => v.status === 'published').length ?? 0
  const drafts = villas?.filter((v) => v.status === 'draft').length ?? 0

  return (
    <div>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-serif text-slate-900">Villas</h1>
          <p className="text-slate-500 mt-1 text-sm">
            {count ?? 0} villas en total
            {published > 0 && <> &middot; <span className="text-green-600">{published} publicadas</span></>}
            {drafts > 0 && <> &middot; <span className="text-amber-600">{drafts} borradores</span></>}
          </p>
        </div>
        <Link
          href="/admin/villas/new"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-roiba-verde text-white text-sm font-medium hover:bg-roiba-verde-light transition-colors rounded-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
          Nueva villa
        </Link>
      </div>

      {!villas || villas.length === 0 ? (
        /* Empty state */
        <div className="bg-white border border-dashed border-slate-300 rounded-sm p-16 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" />
            </svg>
          </div>
          <h3 className="text-lg font-serif text-slate-700 mb-2">Todavía no hay villas</h3>
          <p className="text-slate-400 text-sm mb-6 max-w-sm mx-auto">
            Crea la primera villa para que aparezca en el portfolio de la web pública.
          </p>
          <Link
            href="/admin/villas/new"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-roiba-verde text-white text-sm font-medium hover:bg-roiba-verde-light transition-colors rounded-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>
            Crear primera villa
          </Link>
        </div>
      ) : (
        /* Villa cards — mobile-friendly alternative to table */
        <div className="space-y-3">
          {villas.map((villa) => (
            <div
              key={villa.id}
              className="bg-white border border-slate-200 rounded-sm overflow-hidden hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-4 p-4">
                {/* Thumbnail */}
                {villa.main_image ? (
                  <div className="relative w-16 h-16 rounded-sm overflow-hidden bg-slate-100 flex-shrink-0">
                    <Image src={villa.main_image} alt={villa.title} fill className="object-cover" sizes="64px" />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-sm bg-slate-50 border border-dashed border-slate-200 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                  </div>
                )}

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium text-slate-900 truncate">{villa.title}</h3>
                    {villa.featured && (
                      <span className="px-1.5 py-0.5 bg-roiba-dorado/10 text-roiba-dorado text-[10px] uppercase tracking-wider rounded font-medium flex-shrink-0">
                        Destacada
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span>{villa.location}</span>
                    {villa.year && <span>{villa.year}</span>}
                    <span>Pos. {villa.sort_order}</span>
                  </div>
                </div>

                {/* Status */}
                <StatusBadge status={villa.status} />

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <form action={toggleVillaVisibilityAction}>
                    <input type="hidden" name="id" value={villa.id} />
                    <input type="hidden" name="currentStatus" value={villa.status} />
                    <button
                      type="submit"
                      title={villa.status === 'published' ? 'Ocultar de la web' : 'Publicar en la web'}
                      className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-sm transition-colors"
                    >
                      {villa.status === 'published' ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </form>
                  <Link
                    href={`/admin/villas/${villa.id}`}
                    title="Editar villa"
                    className="p-2 text-slate-400 hover:text-roiba-verde hover:bg-slate-100 rounded-sm transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                    </svg>
                  </Link>
                  <DeleteButton action={deleteVillaAction} id={villa.id} itemName={villa.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const config: Record<string, { bg: string; dot: string; label: string }> = {
    published: { bg: 'bg-green-50 text-green-700', dot: 'bg-green-500', label: 'Publicada' },
    draft: { bg: 'bg-amber-50 text-amber-700', dot: 'bg-amber-400', label: 'Borrador' },
    hidden: { bg: 'bg-slate-100 text-slate-500', dot: 'bg-slate-400', label: 'Oculta' },
  }
  const c = config[status] || config.draft

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-sm font-medium ${c.bg}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
      {c.label}
    </span>
  )
}
