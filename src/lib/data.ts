import { createClient } from '@/lib/supabase/server'
import type { Villa, Project, SiteSetting } from '@/types/admin'

/**
 * Fetch published villas, ordered by sort_order.
 */
export async function getPublishedVillas(): Promise<Villa[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('villas')
    .select('*')
    .eq('status', 'published')
    .order('sort_order', { ascending: true })

  return (data as Villa[]) || []
}

/**
 * Fetch featured villas for the homepage.
 */
export async function getFeaturedVillas(): Promise<Villa[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('villas')
    .select('*')
    .eq('status', 'published')
    .eq('featured', true)
    .order('sort_order', { ascending: true })
    .limit(6)

  return (data as Villa[]) || []
}

/**
 * Fetch a single villa by slug (published only for public).
 */
export async function getVillaBySlug(slug: string): Promise<Villa | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('villas')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (!data) return null

  // Also fetch gallery images
  const { data: images } = await supabase
    .from('villa_images')
    .select('*')
    .eq('villa_id', data.id)
    .order('sort_order', { ascending: true })

  return { ...(data as Villa), images: images || [] }
}

/**
 * Fetch visible projects.
 */
export async function getVisibleProjects(): Promise<Project[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('projects')
    .select('*')
    .neq('status', 'hidden')
    .order('sort_order', { ascending: true })

  return (data as Project[]) || []
}

/**
 * Fetch a single project by slug.
 */
export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .neq('status', 'hidden')
    .single()

  if (!data) return null

  const { data: images } = await supabase
    .from('project_images')
    .select('*')
    .eq('project_id', data.id)
    .order('sort_order', { ascending: true })

  return { ...(data as Project), images: images || [] }
}

/**
 * Fetch a site setting by key.
 */
export async function getSiteSetting(key: string): Promise<Record<string, unknown> | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('site_settings')
    .select('value')
    .eq('key', key)
    .single()

  return data ? (data as SiteSetting).value : null
}

/**
 * Fetch all site settings.
 */
export async function getAllSiteSettings(): Promise<Record<string, Record<string, unknown>>> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('site_settings')
    .select('*')

  const result: Record<string, Record<string, unknown>> = {}
  if (data) {
    for (const s of data as SiteSetting[]) {
      result[s.key] = s.value
    }
  }
  return result
}
