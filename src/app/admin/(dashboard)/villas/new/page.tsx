import VillaForm from '@/components/admin/VillaForm'
import { createVillaAction } from '@/lib/admin/actions'
import Link from 'next/link'

export default function NewVillaPage() {
  return (
    <div>
      <div className="mb-8">
        <Link href="/admin/villas" className="text-sm text-roiba-dorado hover:underline">
          &larr; Volver a villas
        </Link>
        <h1 className="text-2xl font-serif text-slate-900 mt-2">Nueva Villa</h1>
        <p className="text-slate-500 mt-1">Crea una nueva villa para el portfolio</p>
      </div>
      <VillaForm action={createVillaAction} />
    </div>
  )
}
