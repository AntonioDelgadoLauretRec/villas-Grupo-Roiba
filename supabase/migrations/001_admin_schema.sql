-- ============================================================
-- Grupo Roiba Admin Schema
-- Run this in Supabase SQL Editor (Dashboard > SQL Editor)
-- ============================================================

-- 1. Admin profiles (links to auth.users)
CREATE TABLE IF NOT EXISTS admin_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  display_name TEXT NOT NULL DEFAULT '',
  role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('superadmin', 'editor')),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- 2. Villas
CREATE TABLE IF NOT EXISTS villas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  short_description TEXT NOT NULL DEFAULT '',
  long_description TEXT NOT NULL DEFAULT '',
  location TEXT NOT NULL DEFAULT 'Punta Cana',
  main_image TEXT NOT NULL DEFAULT '',
  year TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('published', 'draft', 'hidden')),
  sort_order INTEGER NOT NULL DEFAULT 0,
  featured BOOLEAN NOT NULL DEFAULT false,
  bedrooms INTEGER NOT NULL DEFAULT 0,
  bathrooms INTEGER NOT NULL DEFAULT 0,
  area_sqm NUMERIC NOT NULL DEFAULT 0,
  price_usd NUMERIC NOT NULL DEFAULT 0,
  seo_title TEXT NOT NULL DEFAULT '',
  seo_description TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_villas_status ON villas(status);
CREATE INDEX IF NOT EXISTS idx_villas_sort ON villas(sort_order);
CREATE INDEX IF NOT EXISTS idx_villas_slug ON villas(slug);

-- 3. Villa images
CREATE TABLE IF NOT EXISTS villa_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  villa_id UUID NOT NULL REFERENCES villas(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_villa_images_villa ON villa_images(villa_id);

-- 4. Projects
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  location TEXT NOT NULL DEFAULT 'Punta Cana',
  main_image TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'future' CHECK (status IN ('published', 'future', 'in_development', 'hidden')),
  estimated_date TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  featured BOOLEAN NOT NULL DEFAULT false,
  seo_title TEXT NOT NULL DEFAULT '',
  seo_description TEXT NOT NULL DEFAULT '',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_sort ON projects(sort_order);
CREATE INDEX IF NOT EXISTS idx_projects_slug ON projects(slug);

-- 5. Project images
CREATE TABLE IF NOT EXISTS project_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  alt_text TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_project_images_project ON project_images(project_id);

-- 6. Site settings (key-value store for global config)
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT NOT NULL UNIQUE,
  value JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Insert default settings
INSERT INTO site_settings (key, value) VALUES
  ('hero', '{"title": "Grupo Roiba", "subtitle": "Ingeniería y arquitectura de villas premium en Punta Cana", "cta_text": "Solicitar consulta", "cta_link": "/contacto"}'::jsonb),
  ('contact', '{"email": "info@gruporoiba.com", "phone": "", "instagram": "@grupo_roiba", "address": "Punta Cana, República Dominicana"}'::jsonb),
  ('seo', '{"site_title": "Grupo Roiba | Villas Premium Punta Cana", "site_description": "Estudio de ingeniería y arquitectura especializado en villas de lujo en Punta Cana"}'::jsonb)
ON CONFLICT (key) DO NOTHING;

-- ============================================================
-- RLS POLICIES
-- ============================================================

-- Enable RLS on all tables
ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE villas ENABLE ROW LEVEL SECURITY;
ALTER TABLE villa_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Helper function: check if user is admin
CREATE OR REPLACE FUNCTION is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM admin_profiles
    WHERE id = auth.uid()
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Admin profiles: only the user themselves can read their profile
CREATE POLICY "admins_read_own" ON admin_profiles
  FOR SELECT USING (id = auth.uid());

-- Villas: public can read published, admins can do everything
CREATE POLICY "villas_public_read" ON villas
  FOR SELECT USING (status = 'published' OR is_admin());

CREATE POLICY "villas_admin_insert" ON villas
  FOR INSERT WITH CHECK (is_admin());

CREATE POLICY "villas_admin_update" ON villas
  FOR UPDATE USING (is_admin());

CREATE POLICY "villas_admin_delete" ON villas
  FOR DELETE USING (is_admin());

-- Villa images: public can read if villa is published, admins all
CREATE POLICY "villa_images_public_read" ON villa_images
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM villas WHERE villas.id = villa_images.villa_id AND (villas.status = 'published' OR is_admin()))
  );

CREATE POLICY "villa_images_admin_insert" ON villa_images
  FOR INSERT WITH CHECK (is_admin());

CREATE POLICY "villa_images_admin_update" ON villa_images
  FOR UPDATE USING (is_admin());

CREATE POLICY "villa_images_admin_delete" ON villa_images
  FOR DELETE USING (is_admin());

-- Projects: same pattern
CREATE POLICY "projects_public_read" ON projects
  FOR SELECT USING (status = 'published' OR status = 'future' OR status = 'in_development' OR is_admin());

CREATE POLICY "projects_admin_insert" ON projects
  FOR INSERT WITH CHECK (is_admin());

CREATE POLICY "projects_admin_update" ON projects
  FOR UPDATE USING (is_admin());

CREATE POLICY "projects_admin_delete" ON projects
  FOR DELETE USING (is_admin());

-- Project images
CREATE POLICY "project_images_public_read" ON project_images
  FOR SELECT USING (
    EXISTS (SELECT 1 FROM projects WHERE projects.id = project_images.project_id AND (projects.status != 'hidden' OR is_admin()))
  );

CREATE POLICY "project_images_admin_insert" ON project_images
  FOR INSERT WITH CHECK (is_admin());

CREATE POLICY "project_images_admin_update" ON project_images
  FOR UPDATE USING (is_admin());

CREATE POLICY "project_images_admin_delete" ON project_images
  FOR DELETE USING (is_admin());

-- Site settings: public read, admin write
CREATE POLICY "settings_public_read" ON site_settings
  FOR SELECT USING (true);

CREATE POLICY "settings_admin_insert" ON site_settings
  FOR INSERT WITH CHECK (is_admin());

CREATE POLICY "settings_admin_update" ON site_settings
  FOR UPDATE USING (is_admin());

-- ============================================================
-- STORAGE BUCKETS
-- ============================================================

-- Create storage buckets (run these separately if needed)
INSERT INTO storage.buckets (id, name, public)
VALUES ('media', 'media', true)
ON CONFLICT (id) DO NOTHING;

-- Storage policies: admins can upload/delete, public can read
CREATE POLICY "media_public_read" ON storage.objects
  FOR SELECT USING (bucket_id = 'media');

CREATE POLICY "media_admin_upload" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'media' AND is_admin());

CREATE POLICY "media_admin_update" ON storage.objects
  FOR UPDATE USING (bucket_id = 'media' AND is_admin());

CREATE POLICY "media_admin_delete" ON storage.objects
  FOR DELETE USING (bucket_id = 'media' AND is_admin());

-- ============================================================
-- UPDATED_AT TRIGGER
-- ============================================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER villas_updated_at BEFORE UPDATE ON villas
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER projects_updated_at BEFORE UPDATE ON projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER site_settings_updated_at BEFORE UPDATE ON site_settings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER admin_profiles_updated_at BEFORE UPDATE ON admin_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
