'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { z } from 'zod'
import { getAdminProfile } from './auth'
import type { ActionResult } from './actions'

async function ensureAdmin() {
  const profile = await getAdminProfile()
  if (!profile) throw new Error('No autorizado')
  return profile
}

// ─── Validation schemas ──────────────────────────────────

const serviceSchema = z.object({
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/),
  title: z.string().min(1, 'El título es obligatorio'),
  description: z.string().default(''),
  image: z.string().default(''),
  page: z.enum(['homepage', 'servicios']).default('homepage'),
  sort_order: z.coerce.number().default(0),
  visible: z.coerce.boolean().default(true),
})

const subServiceSchema = z.object({
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/),
  label: z.string().default(''),
  title: z.string().min(1, 'El título es obligatorio'),
  description: z.string().default(''),
  includes: z.string().default(''),
  note: z.string().default(''),
  sort_order: z.coerce.number().default(0),
  visible: z.coerce.boolean().default(true),
})

const processStepSchema = z.object({
  num: z.string().default('01'),
  title: z.string().min(1, 'El título es obligatorio'),
  subtitle: z.string().default(''),
  description: z.string().default(''),
  detail: z.string().default(''),
  duration: z.string().default(''),
  sort_order: z.coerce.number().default(0),
  visible: z.coerce.boolean().default(true),
})

const testimonialSchema = z.object({
  quote: z.string().min(1, 'El testimonio es obligatorio'),
  name: z.string().min(1, 'El nombre es obligatorio'),
  role: z.string().default(''),
  location: z.string().default(''),
  sort_order: z.coerce.number().default(0),
  visible: z.coerce.boolean().default(true),
})

const teamMemberSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  role: z.string().default(''),
  bio: z.string().default(''),
  image: z.string().default(''),
  sort_order: z.coerce.number().default(0),
  visible: z.coerce.boolean().default(true),
})

const companyValueSchema = z.object({
  title: z.string().min(1, 'El título es obligatorio'),
  description: z.string().default(''),
  image: z.string().default(''),
  sort_order: z.coerce.number().default(0),
  visible: z.coerce.boolean().default(true),
})

const blogPostSchema = z.object({
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/),
  title: z.string().min(1, 'El título es obligatorio'),
  excerpt: z.string().default(''),
  content: z.string().default(''),
  image: z.string().default(''),
  category: z.string().default(''),
  date: z.string().default(''),
  read_time: z.string().default(''),
  published: z.coerce.boolean().default(false),
  sort_order: z.coerce.number().default(0),
})

const poiSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  description: z.string().default(''),
  category: z.string().default('resort'),
  lat: z.coerce.number(),
  lng: z.coerce.number(),
  sort_order: z.coerce.number().default(0),
  visible: z.coerce.boolean().default(true),
})

const attractionSchema = z.object({
  slug: z.string().min(1).regex(/^[a-z0-9-]+$/),
  subtitle: z.string().default(''),
  title: z.string().min(1, 'El título es obligatorio'),
  description: z.string().default(''),
  image: z.string().default(''),
  sort_order: z.coerce.number().default(0),
  visible: z.coerce.boolean().default(true),
})

// ─── Generic CRUD helper ─────────────────────────────────

type SchemaType = z.ZodObject<z.ZodRawShape>

async function createItem(
  table: string,
  schema: SchemaType,
  formData: FormData,
  revalidatePaths: string[],
  redirectTo: string,
): Promise<ActionResult> {
  await ensureAdmin()

  const raw = Object.fromEntries(formData.entries())
  raw.visible = formData.has('visible') ? 'true' : 'false'
  raw.published = formData.has('published') ? 'true' : 'false'

  const parsed = schema.safeParse(raw)
  if (!parsed.success) {
    return { success: false, error: parsed.error.errors[0].message }
  }

  const supabase = await createClient()
  const { error } = await supabase.from(table).insert(parsed.data)

  if (error) {
    if (error.code === '23505') return { success: false, error: 'Ya existe un elemento con ese slug' }
    return { success: false, error: error.message }
  }

  for (const p of revalidatePaths) revalidatePath(p)
  return { success: true, redirectTo }
}

async function updateItem(
  table: string,
  schema: SchemaType,
  formData: FormData,
  revalidatePaths: string[],
  redirectTo: string,
): Promise<ActionResult> {
  await ensureAdmin()

  const id = formData.get('id') as string
  if (!id) return { success: false, error: 'ID no proporcionado' }

  const raw = Object.fromEntries(formData.entries())
  raw.visible = formData.has('visible') ? 'true' : 'false'
  raw.published = formData.has('published') ? 'true' : 'false'

  const parsed = schema.safeParse(raw)
  if (!parsed.success) {
    return { success: false, error: parsed.error.errors[0].message }
  }

  const supabase = await createClient()
  const { error } = await supabase.from(table).update(parsed.data).eq('id', id)

  if (error) {
    if (error.code === '23505') return { success: false, error: 'Ya existe un elemento con ese slug' }
    return { success: false, error: error.message }
  }

  for (const p of revalidatePaths) revalidatePath(p)
  return { success: true, redirectTo }
}

async function deleteItem(
  table: string,
  formData: FormData,
  revalidatePaths: string[],
): Promise<ActionResult> {
  await ensureAdmin()

  const id = formData.get('id') as string
  if (!id) return { success: false, error: 'ID no proporcionado' }

  const supabase = await createClient()
  const { error } = await supabase.from(table).delete().eq('id', id)

  if (error) return { success: false, error: error.message }

  for (const p of revalidatePaths) revalidatePath(p)
  return { success: true }
}

async function toggleVisibility(
  table: string,
  formData: FormData,
  revalidatePaths: string[],
): Promise<ActionResult> {
  await ensureAdmin()

  const id = formData.get('id') as string
  const current = formData.get('visible') === 'true'

  const supabase = await createClient()
  const { error } = await supabase.from(table).update({ visible: !current }).eq('id', id)

  if (error) return { success: false, error: error.message }

  for (const p of revalidatePaths) revalidatePath(p)
  return { success: true }
}

// ─── Service actions ─────────────────────────────────────

const servicePaths = ['/', '/servicios', '/admin/servicios']

export async function createServiceAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return createItem('services', serviceSchema, formData, servicePaths, '/admin/servicios')
}

export async function updateServiceAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return updateItem('services', serviceSchema, formData, servicePaths, '/admin/servicios')
}

export async function deleteServiceAction(formData: FormData): Promise<ActionResult> {
  return deleteItem('services', formData, servicePaths)
}

export async function toggleServiceVisibilityAction(formData: FormData): Promise<ActionResult> {
  return toggleVisibility('services', formData, servicePaths)
}

// ─── Sub-service actions ─────────────────────────────────

const subServicePaths = ['/servicios', '/admin/sub-servicios']

export async function createSubServiceAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const raw = Object.fromEntries(formData.entries())
  raw.visible = formData.has('visible') ? 'true' : 'false'

  const parsed = subServiceSchema.safeParse(raw)
  if (!parsed.success) return { success: false, error: parsed.error.errors[0].message }

  await ensureAdmin()
  const supabase = await createClient()

  const includesArr = (parsed.data.includes as string).split('\n').map(s => s.trim()).filter(Boolean)
  const { error } = await supabase.from('sub_services').insert({
    ...parsed.data,
    includes: includesArr,
  })

  if (error) {
    if (error.code === '23505') return { success: false, error: 'Ya existe un sub-servicio con ese slug' }
    return { success: false, error: error.message }
  }

  for (const p of subServicePaths) revalidatePath(p)
  return { success: true, redirectTo: '/admin/sub-servicios' }
}

export async function updateSubServiceAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  const id = formData.get('id') as string
  if (!id) return { success: false, error: 'ID no proporcionado' }

  const raw = Object.fromEntries(formData.entries())
  raw.visible = formData.has('visible') ? 'true' : 'false'

  const parsed = subServiceSchema.safeParse(raw)
  if (!parsed.success) return { success: false, error: parsed.error.errors[0].message }

  await ensureAdmin()
  const supabase = await createClient()

  const includesArr = (parsed.data.includes as string).split('\n').map(s => s.trim()).filter(Boolean)
  const { error } = await supabase.from('sub_services').update({
    ...parsed.data,
    includes: includesArr,
  }).eq('id', id)

  if (error) {
    if (error.code === '23505') return { success: false, error: 'Ya existe un sub-servicio con ese slug' }
    return { success: false, error: error.message }
  }

  for (const p of subServicePaths) revalidatePath(p)
  return { success: true, redirectTo: '/admin/sub-servicios' }
}

export async function deleteSubServiceAction(formData: FormData): Promise<ActionResult> {
  return deleteItem('sub_services', formData, subServicePaths)
}

export async function toggleSubServiceVisibilityAction(formData: FormData): Promise<ActionResult> {
  return toggleVisibility('sub_services', formData, subServicePaths)
}

// ─── Process step actions ────────────────────────────────

const processPaths = ['/', '/proceso', '/admin/proceso']

export async function createProcessStepAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return createItem('process_steps', processStepSchema, formData, processPaths, '/admin/proceso')
}

export async function updateProcessStepAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return updateItem('process_steps', processStepSchema, formData, processPaths, '/admin/proceso')
}

export async function deleteProcessStepAction(formData: FormData): Promise<ActionResult> {
  return deleteItem('process_steps', formData, processPaths)
}

export async function toggleProcessStepVisibilityAction(formData: FormData): Promise<ActionResult> {
  return toggleVisibility('process_steps', formData, processPaths)
}

// ─── Testimonial actions ─────────────────────────────────

const testimonialPaths = ['/', '/admin/testimonios']

export async function createTestimonialAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return createItem('testimonials', testimonialSchema, formData, testimonialPaths, '/admin/testimonios')
}

export async function updateTestimonialAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return updateItem('testimonials', testimonialSchema, formData, testimonialPaths, '/admin/testimonios')
}

export async function deleteTestimonialAction(formData: FormData): Promise<ActionResult> {
  return deleteItem('testimonials', formData, testimonialPaths)
}

export async function toggleTestimonialVisibilityAction(formData: FormData): Promise<ActionResult> {
  return toggleVisibility('testimonials', formData, testimonialPaths)
}

// ─── Team member actions ─────────────────────────────────

const teamPaths = ['/nosotros', '/admin/equipo']

export async function createTeamMemberAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return createItem('team_members', teamMemberSchema, formData, teamPaths, '/admin/equipo')
}

export async function updateTeamMemberAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return updateItem('team_members', teamMemberSchema, formData, teamPaths, '/admin/equipo')
}

export async function deleteTeamMemberAction(formData: FormData): Promise<ActionResult> {
  return deleteItem('team_members', formData, teamPaths)
}

export async function toggleTeamMemberVisibilityAction(formData: FormData): Promise<ActionResult> {
  return toggleVisibility('team_members', formData, teamPaths)
}

// ─── Company value actions ───────────────────────────────

const valuePaths = ['/nosotros', '/admin/valores']

export async function createCompanyValueAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return createItem('company_values', companyValueSchema, formData, valuePaths, '/admin/valores')
}

export async function updateCompanyValueAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return updateItem('company_values', companyValueSchema, formData, valuePaths, '/admin/valores')
}

export async function deleteCompanyValueAction(formData: FormData): Promise<ActionResult> {
  return deleteItem('company_values', formData, valuePaths)
}

export async function toggleCompanyValueVisibilityAction(formData: FormData): Promise<ActionResult> {
  return toggleVisibility('company_values', formData, valuePaths)
}

// ─── Blog post actions ───────────────────────────────────

const blogPaths = ['/blog', '/admin/blog']

export async function createBlogPostAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return createItem('blog_posts', blogPostSchema, formData, blogPaths, '/admin/blog')
}

export async function updateBlogPostAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return updateItem('blog_posts', blogPostSchema, formData, blogPaths, '/admin/blog')
}

export async function deleteBlogPostAction(formData: FormData): Promise<ActionResult> {
  return deleteItem('blog_posts', formData, blogPaths)
}

export async function toggleBlogPostPublishedAction(formData: FormData): Promise<ActionResult> {
  await ensureAdmin()
  const id = formData.get('id') as string
  const current = formData.get('published') === 'true'
  const supabase = await createClient()
  const { error } = await supabase.from('blog_posts').update({ published: !current }).eq('id', id)
  if (error) return { success: false, error: error.message }
  for (const p of blogPaths) revalidatePath(p)
  return { success: true }
}

// ─── POI actions ─────────────────────────────────────────

const poiPaths = ['/punta-cana', '/admin/pois']

export async function createPoiAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return createItem('pois', poiSchema, formData, poiPaths, '/admin/pois')
}

export async function updatePoiAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return updateItem('pois', poiSchema, formData, poiPaths, '/admin/pois')
}

export async function deletePoiAction(formData: FormData): Promise<ActionResult> {
  return deleteItem('pois', formData, poiPaths)
}

export async function togglePoiVisibilityAction(formData: FormData): Promise<ActionResult> {
  return toggleVisibility('pois', formData, poiPaths)
}

// ─── Attraction actions ──────────────────────────────────

const attractionPaths = ['/punta-cana', '/admin/atracciones']

export async function createAttractionAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return createItem('attractions', attractionSchema, formData, attractionPaths, '/admin/atracciones')
}

export async function updateAttractionAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  return updateItem('attractions', attractionSchema, formData, attractionPaths, '/admin/atracciones')
}

export async function deleteAttractionAction(formData: FormData): Promise<ActionResult> {
  return deleteItem('attractions', formData, attractionPaths)
}

export async function toggleAttractionVisibilityAction(formData: FormData): Promise<ActionResult> {
  return toggleVisibility('attractions', formData, attractionPaths)
}

// ─── Site settings (upsert) ─────────────────────────────

export async function upsertSiteSettingAction(_prev: ActionResult, formData: FormData): Promise<ActionResult> {
  await ensureAdmin()

  const key = formData.get('setting_key') as string
  if (!key) return { success: false, error: 'Clave no proporcionada' }

  const rawValue = formData.get('setting_value') as string
  if (!rawValue) return { success: false, error: 'Valor no proporcionado' }

  let value: unknown
  try {
    value = JSON.parse(rawValue)
  } catch {
    return { success: false, error: 'JSON inválido' }
  }

  const supabase = await createClient()
  const { error } = await supabase
    .from('site_settings')
    .upsert({ key, value }, { onConflict: 'key' })

  if (error) return { success: false, error: error.message }

  revalidatePath('/')
  revalidatePath('/admin/contenido')
  return { success: true }
}
