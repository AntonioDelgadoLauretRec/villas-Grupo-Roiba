import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { AdminProfile } from '@/types/admin'

/**
 * Get the current admin profile. Returns null if not authenticated or not an admin.
 */
export async function getAdminProfile(): Promise<AdminProfile | null> {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return null

  const { data: profile } = await supabase
    .from('admin_profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  return profile as AdminProfile | null
}

/**
 * Require admin access. Redirects to /admin/login if not authenticated.
 */
export async function requireAdmin(): Promise<AdminProfile> {
  const profile = await getAdminProfile()
  if (!profile) {
    redirect('/admin/login')
  }
  return profile
}

/**
 * Require superadmin access.
 */
export async function requireSuperAdmin(): Promise<AdminProfile> {
  const profile = await requireAdmin()
  if (profile.role !== 'superadmin') {
    redirect('/admin')
  }
  return profile
}
