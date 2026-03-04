'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { getAdminProfile } from './auth'

// ─── Validation schemas ──────────────────────────────────

const villaSchema = z.object({
  slug: z
    .string()
    .min(1, 'El slug es obligatorio')
    .regex(/^[a-z0-9-]+$/, 'Solo letras minúsculas, números y guiones'),
  title: z.string().min(1, 'El título es obligatorio'),
  short_description: z.string().default(''),
  long_description: z.string().default(''),
  location: z.string().default('Punta Cana'),
  main_image: z.string().default(''),
  year: z.string().default(''),
  status: z.enum(['published', 'draft', 'hidden']).default('draft'),
  sort_order: z.coerce.number().default(0),
  featured: z.coerce.boolean().default(false),
  bedrooms: z.coerce.number().default(0),
  bathrooms: z.coerce.number().default(0),
  area_sqm: z.coerce.number().default(0),
  price_usd: z.coerce.number().default(0),
  seo_title: z.string().default(''),
  seo_description: z.string().default(''),
})

const projectSchema = z.object({
  slug: z
    .string()
    .min(1, 'El slug es obligatorio')
    .regex(/^[a-z0-9-]+$/, 'Solo letras minúsculas, números y guiones'),
  title: z.string().min(1, 'El título es obligatorio'),
  description: z.string().default(''),
  location: z.string().default('Punta Cana'),
  main_image: z.string().default(''),
  status: z.enum(['published', 'future', 'in_development', 'hidden']).default('future'),
  estimated_date: z.string().default(''),
  sort_order: z.coerce.number().default(0),
  featured: z.coerce.boolean().default(false),
  seo_title: z.string().default(''),
  seo_description: z.string().default(''),
})

// ─── Helper: ensure admin ────────────────────────────────

async function ensureAdmin() {
  const profile = await getAdminProfile()
  if (!profile) throw new Error('No autorizado')
  return profile
}

// ─── Return type ─────────────────────────────────────────

export type ActionResult = {
  success: boolean
  error?: string
  redirectTo?: string
}

// ─── Auth actions ────────────────────────────────────────

export async function loginAction(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { success: false, error: 'Email y contraseña son obligatorios' }
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({ email, password })

  if (error) {
    return { success: false, error: 'Credenciales incorrectas' }
  }

  // Verify they have an admin profile
  const { data: profile } = await supabase
    .from('admin_profiles')
    .select('id')
    .single()

  if (!profile) {
    await supabase.auth.signOut()
    return { success: false, error: 'No tienes permisos de administrador' }
  }

  return { success: true }
}

export async function logoutAction(): Promise<void> {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}

// ─── Villa actions ───────────────────────────────────────

export async function createVillaAction(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  await ensureAdmin()

  const raw = Object.fromEntries(formData.entries())
  raw.featured = formData.has('featured') ? 'true' : 'false'

  const parsed = villaSchema.safeParse(raw)
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]
    return { success: false, error: firstError.message }
  }

  const supabase = await createClient()
  const { error } = await supabase.from('villas').insert(parsed.data)

  if (error) {
    if (error.code === '23505') {
      return { success: false, error: 'Ya existe una villa con ese slug' }
    }
    return { success: false, error: error.message }
  }

  revalidatePath('/villas')
  revalidatePath('/')
  return { success: true, redirectTo: '/admin/villas' }
}

export async function updateVillaAction(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  await ensureAdmin()

  const id = formData.get('id') as string
  if (!id) return { success: false, error: 'ID de villa no proporcionado' }

  const raw = Object.fromEntries(formData.entries())
  raw.featured = formData.has('featured') ? 'true' : 'false'

  const parsed = villaSchema.safeParse(raw)
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]
    return { success: false, error: firstError.message }
  }

  const supabase = await createClient()
  const { error } = await supabase
    .from('villas')
    .update(parsed.data)
    .eq('id', id)

  if (error) {
    if (error.code === '23505') {
      return { success: false, error: 'Ya existe una villa con ese slug' }
    }
    return { success: false, error: error.message }
  }

  revalidatePath('/villas')
  revalidatePath(`/villas/${parsed.data.slug}`)
  revalidatePath('/')
  return { success: true, redirectTo: '/admin/villas' }
}

export async function deleteVillaAction(formData: FormData): Promise<void> {
  await ensureAdmin()

  const id = formData.get('id') as string
  if (!id) return

  const supabase = await createClient()

  // Delete images from storage first
  const { data: images } = await supabase
    .from('villa_images')
    .select('image_url')
    .eq('villa_id', id)

  if (images && images.length > 0) {
    const paths = images
      .map((img) => {
        const url = img.image_url
        const match = url.match(/\/media\/(.+)$/)
        return match ? match[1] : null
      })
      .filter(Boolean) as string[]

    if (paths.length > 0) {
      await supabase.storage.from('media').remove(paths)
    }
  }

  await supabase.from('villas').delete().eq('id', id)

  revalidatePath('/villas')
  revalidatePath('/')
  redirect('/admin/villas')
}

export async function toggleVillaVisibilityAction(formData: FormData): Promise<void> {
  await ensureAdmin()

  const id = formData.get('id') as string
  const currentStatus = formData.get('currentStatus') as string

  const newStatus = currentStatus === 'published' ? 'hidden' : 'published'

  const supabase = await createClient()
  await supabase.from('villas').update({ status: newStatus }).eq('id', id)

  revalidatePath('/villas')
  revalidatePath('/')
  revalidatePath('/admin/villas')
}

// ─── Project actions ─────────────────────────────────────

export async function createProjectAction(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  await ensureAdmin()

  const raw = Object.fromEntries(formData.entries())
  raw.featured = formData.has('featured') ? 'true' : 'false'

  const parsed = projectSchema.safeParse(raw)
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]
    return { success: false, error: firstError.message }
  }

  const supabase = await createClient()
  const { error } = await supabase.from('projects').insert(parsed.data)

  if (error) {
    if (error.code === '23505') {
      return { success: false, error: 'Ya existe un proyecto con ese slug' }
    }
    return { success: false, error: error.message }
  }

  revalidatePath('/')
  return { success: true, redirectTo: '/admin/projects' }
}

export async function updateProjectAction(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  await ensureAdmin()

  const id = formData.get('id') as string
  if (!id) return { success: false, error: 'ID de proyecto no proporcionado' }

  const raw = Object.fromEntries(formData.entries())
  raw.featured = formData.has('featured') ? 'true' : 'false'

  const parsed = projectSchema.safeParse(raw)
  if (!parsed.success) {
    const firstError = parsed.error.errors[0]
    return { success: false, error: firstError.message }
  }

  const supabase = await createClient()
  const { error } = await supabase
    .from('projects')
    .update(parsed.data)
    .eq('id', id)

  if (error) {
    if (error.code === '23505') {
      return { success: false, error: 'Ya existe un proyecto con ese slug' }
    }
    return { success: false, error: error.message }
  }

  revalidatePath('/')
  return { success: true, redirectTo: '/admin/projects' }
}

export async function deleteProjectAction(formData: FormData): Promise<void> {
  await ensureAdmin()

  const id = formData.get('id') as string
  if (!id) return

  const supabase = await createClient()
  await supabase.from('projects').delete().eq('id', id)

  revalidatePath('/')
  redirect('/admin/projects')
}

export async function toggleProjectVisibilityAction(formData: FormData): Promise<void> {
  await ensureAdmin()

  const id = formData.get('id') as string
  const currentStatus = formData.get('currentStatus') as string

  const newStatus = currentStatus === 'hidden' ? 'published' : 'hidden'

  const supabase = await createClient()
  await supabase.from('projects').update({ status: newStatus }).eq('id', id)

  revalidatePath('/')
  revalidatePath('/admin/projects')
}

// ─── Settings actions ────────────────────────────────────

export async function updateSettingAction(
  _prevState: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  await ensureAdmin()

  const key = formData.get('key') as string
  if (!key) return { success: false, error: 'Clave no proporcionada' }

  // Collect all fields except 'key' into the value JSON
  const entries = Object.fromEntries(formData.entries())
  const { key: _key, ...value } = entries
  void _key

  const supabase = await createClient()
  const { error } = await supabase
    .from('site_settings')
    .update({ value })
    .eq('key', key)

  if (error) {
    return { success: false, error: error.message }
  }

  revalidatePath('/')
  revalidatePath('/admin/settings')
  return { success: true }
}

// ─── Image upload action ─────────────────────────────────

export async function uploadImageAction(formData: FormData): Promise<{
  success: boolean
  url?: string
  error?: string
}> {
  await ensureAdmin()

  const file = formData.get('file') as File
  if (!file || file.size === 0) {
    return { success: false, error: 'No se ha seleccionado ningún archivo' }
  }

  // Validate file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif']
  if (!allowedTypes.includes(file.type)) {
    return { success: false, error: 'Formato no permitido. Usa JPG, PNG, WebP o AVIF.' }
  }

  // Max 10MB
  if (file.size > 10 * 1024 * 1024) {
    return { success: false, error: 'El archivo no puede superar los 10 MB' }
  }

  const folder = (formData.get('folder') as string) || 'general'
  const ext = file.name.split('.').pop() || 'jpg'
  const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`

  const supabase = await createClient()
  const { error } = await supabase.storage
    .from('media')
    .upload(fileName, file, {
      cacheControl: '3600',
      upsert: false,
    })

  if (error) {
    return { success: false, error: error.message }
  }

  const { data: urlData } = supabase.storage.from('media').getPublicUrl(fileName)

  return { success: true, url: urlData.publicUrl }
}

// ─── Gallery image actions ───────────────────────────────

export async function addVillaImageAction(formData: FormData): Promise<ActionResult> {
  await ensureAdmin()

  const villaId = formData.get('villa_id') as string
  const imageUrl = formData.get('image_url') as string
  const altText = (formData.get('alt_text') as string) || ''

  if (!villaId || !imageUrl) {
    return { success: false, error: 'Datos incompletos' }
  }

  const supabase = await createClient()

  // Get max sort order
  const { data: existing } = await supabase
    .from('villa_images')
    .select('sort_order')
    .eq('villa_id', villaId)
    .order('sort_order', { ascending: false })
    .limit(1)

  const nextOrder = existing && existing.length > 0 ? existing[0].sort_order + 1 : 0

  const { error } = await supabase.from('villa_images').insert({
    villa_id: villaId,
    image_url: imageUrl,
    alt_text: altText,
    sort_order: nextOrder,
  })

  if (error) return { success: false, error: error.message }

  revalidatePath(`/admin/villas/${villaId}`)
  revalidatePath('/villas')
  return { success: true }
}

export async function deleteVillaImageAction(formData: FormData): Promise<void> {
  await ensureAdmin()

  const id = formData.get('id') as string
  const villaId = formData.get('villa_id') as string

  if (!id) return

  const supabase = await createClient()
  await supabase.from('villa_images').delete().eq('id', id)

  revalidatePath(`/admin/villas/${villaId}`)
  revalidatePath('/villas')
}
