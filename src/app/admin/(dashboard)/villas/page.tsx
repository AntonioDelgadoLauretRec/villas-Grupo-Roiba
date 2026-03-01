import { createClient } from '@/lib/supabase/server'
import Link from 'next/link'
import Image from 'next/image'
import { toggleVillaVisibilityAction, deleteVillaAction } from '@/lib/admin/actions'
import DeleteButton from '@/components/admin/DeleteButton'

export default async function AdminVillasPage() {
  const supabase = await createClient()

  const { data: villas } = await supabase
    .from('villas')
    .select('*')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false })

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-serif text-slate-900">Villas</h1>
          <p className="text-slate-500 mt-1">Gestiona las villas finalizadas</p>
        </div>
        <Link
          href="/admin/villas/new"
          className="px-5 py-2.5 bg-roiba-verde text-white text-sm font-medium hover:bg-roiba-verde-light transition-colors rounded-sm"
        >
          + Nueva villa
        </Link>
      </div>

      {!villas || villas.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded-sm p-12 text-center">
          <p className="text-slate-500 mb-4">No hay villas todavía</p>
          <Link
            href="/admin/villas/new"
            className="text-roiba-dorado hover:underline text-sm"
          >
            Crear la primera villa
          </Link>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Villa</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Ubicación</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Estado</th>
                  <th className="text-left px-4 py-3 font-medium text-slate-600">Orden</th>
                  <th className="text-right px-4 py-3 font-medium text-slate-600">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {villas.map((villa) => (
                  <tr key={villa.id} className="hover:bg-slate-50/50">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {villa.main_image ? (
                          <div className="relative w-12 h-12 rounded-sm overflow-hidden bg-slate-100 flex-shrink-0">
                            <Image
                              src={villa.main_image}
                              alt={villa.title}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-sm bg-slate-100 flex items-center justify-center text-slate-400 text-xs flex-shrink-0">
                            IMG
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-slate-900">{villa.title}</p>
                          <p className="text-slate-400 text-xs">/{villa.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-slate-600">{villa.location}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={villa.status} />
                    </td>
                    <td className="px-4 py-3 text-slate-500">{villa.sort_order}</td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <form action={toggleVillaVisibilityAction}>
                          <input type="hidden" name="id" value={villa.id} />
                          <input type="hidden" name="currentStatus" value={villa.status} />
                          <button
                            type="submit"
                            className="px-3 py-1.5 text-xs border border-slate-300 rounded-sm hover:bg-slate-50 transition-colors"
                          >
                            {villa.status === 'published' ? 'Ocultar' : 'Publicar'}
                          </button>
                        </form>
                        <Link
                          href={`/admin/villas/${villa.id}`}
                          className="px-3 py-1.5 text-xs bg-slate-100 rounded-sm hover:bg-slate-200 transition-colors"
                        >
                          Editar
                        </Link>
                        <DeleteButton
                          action={deleteVillaAction}
                          id={villa.id}
                          itemName={villa.title}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    published: 'bg-green-50 text-green-700 border-green-200',
    draft: 'bg-amber-50 text-amber-700 border-amber-200',
    hidden: 'bg-slate-50 text-slate-500 border-slate-200',
  }
  const labels: Record<string, string> = {
    published: 'Publicada',
    draft: 'Borrador',
    hidden: 'Oculta',
  }

  return (
    <span
      className={`inline-block px-2 py-0.5 text-xs border rounded-sm ${styles[status] || styles.draft}`}
    >
      {labels[status] || status}
    </span>
  )
}
