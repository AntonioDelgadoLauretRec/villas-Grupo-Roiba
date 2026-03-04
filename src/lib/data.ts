import { createClient } from '@/lib/supabase/server'
import type {
  Villa, Project, SiteSetting,
  Service, SubService, ProcessStep, Testimonial,
  TeamMember, CompanyValue, BlogPost, Poi, Attraction,
} from '@/types/admin'

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

// ─── Services ───────────────────────────────────────────

export async function getServices(page: 'homepage' | 'servicios'): Promise<Service[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('services')
    .select('*')
    .eq('page', page)
    .eq('visible', true)
    .order('sort_order', { ascending: true })

  return (data as Service[]) || []
}

export async function getAllServices(): Promise<Service[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('services')
    .select('*')
    .order('page', { ascending: true })
    .order('sort_order', { ascending: true })

  return (data as Service[]) || []
}

// ─── Sub-services ───────────────────────────────────────

export async function getSubServices(): Promise<SubService[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('sub_services')
    .select('*')
    .eq('visible', true)
    .order('sort_order', { ascending: true })

  return (data as SubService[]) || []
}

export async function getAllSubServices(): Promise<SubService[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('sub_services')
    .select('*')
    .order('sort_order', { ascending: true })

  return (data as SubService[]) || []
}

// ─── Process steps ──────────────────────────────────────

export async function getProcessSteps(): Promise<ProcessStep[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('process_steps')
    .select('*')
    .eq('visible', true)
    .order('sort_order', { ascending: true })

  return (data as ProcessStep[]) || []
}

export async function getAllProcessSteps(): Promise<ProcessStep[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('process_steps')
    .select('*')
    .order('sort_order', { ascending: true })

  return (data as ProcessStep[]) || []
}

// ─── Testimonials ───────────────────────────────────────

export async function getTestimonials(): Promise<Testimonial[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('testimonials')
    .select('*')
    .eq('visible', true)
    .order('sort_order', { ascending: true })

  return (data as Testimonial[]) || []
}

export async function getAllTestimonials(): Promise<Testimonial[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('testimonials')
    .select('*')
    .order('sort_order', { ascending: true })

  return (data as Testimonial[]) || []
}

// ─── Team members ───────────────────────────────────────

export async function getTeamMembers(): Promise<TeamMember[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('team_members')
    .select('*')
    .eq('visible', true)
    .order('sort_order', { ascending: true })

  return (data as TeamMember[]) || []
}

export async function getAllTeamMembers(): Promise<TeamMember[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('team_members')
    .select('*')
    .order('sort_order', { ascending: true })

  return (data as TeamMember[]) || []
}

// ─── Company values ─────────────────────────────────────

export async function getCompanyValues(): Promise<CompanyValue[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('company_values')
    .select('*')
    .eq('visible', true)
    .order('sort_order', { ascending: true })

  return (data as CompanyValue[]) || []
}

export async function getAllCompanyValues(): Promise<CompanyValue[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('company_values')
    .select('*')
    .order('sort_order', { ascending: true })

  return (data as CompanyValue[]) || []
}

// ─── Blog posts ─────────────────────────────────────────

export async function getPublishedBlogPosts(): Promise<BlogPost[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('sort_order', { ascending: true })

  return (data as BlogPost[]) || []
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .order('sort_order', { ascending: true })

  return (data as BlogPost[]) || []
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  return (data as BlogPost) || null
}

// ─── POIs ───────────────────────────────────────────────

export async function getPois(): Promise<Poi[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('pois')
    .select('*')
    .eq('visible', true)
    .order('sort_order', { ascending: true })

  return (data as Poi[]) || []
}

export async function getAllPois(): Promise<Poi[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('pois')
    .select('*')
    .order('sort_order', { ascending: true })

  return (data as Poi[]) || []
}

// ─── Attractions ────────────────────────────────────────

export async function getAttractions(): Promise<Attraction[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('attractions')
    .select('*')
    .eq('visible', true)
    .order('sort_order', { ascending: true })

  return (data as Attraction[]) || []
}

export async function getAllAttractions(): Promise<Attraction[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from('attractions')
    .select('*')
    .order('sort_order', { ascending: true })

  return (data as Attraction[]) || []
}
