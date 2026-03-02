-- ============================================================
-- Grupo Roiba Content Schema
-- Adds tables for all editable website content
-- Run this in Supabase SQL Editor AFTER 001_admin_schema.sql
-- ============================================================

-- 1. Services (homepage grid + servicios page grid)
CREATE TABLE IF NOT EXISTS services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  page TEXT NOT NULL DEFAULT 'homepage' CHECK (page IN ('homepage', 'servicios')),
  sort_order INTEGER NOT NULL DEFAULT 0,
  visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_services_page ON services(page);
CREATE INDEX IF NOT EXISTS idx_services_sort ON services(sort_order);

-- 2. Sub-services (detailed services on servicios page)
CREATE TABLE IF NOT EXISTS sub_services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  label TEXT NOT NULL DEFAULT '',
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  includes JSONB NOT NULL DEFAULT '[]',
  note TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_sub_services_sort ON sub_services(sort_order);

-- 3. Process steps (homepage tabs + proceso page)
CREATE TABLE IF NOT EXISTS process_steps (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  num TEXT NOT NULL DEFAULT '01',
  title TEXT NOT NULL,
  subtitle TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  detail TEXT NOT NULL DEFAULT '',
  duration TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_process_steps_sort ON process_steps(sort_order);

-- 4. Testimonials
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT '',
  location TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_testimonials_sort ON testimonials(sort_order);

-- 5. Team members
CREATE TABLE IF NOT EXISTS team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT '',
  bio TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_team_members_sort ON team_members(sort_order);

-- 6. Company values
CREATE TABLE IF NOT EXISTS company_values (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_company_values_sort ON company_values(sort_order);

-- 7. Blog posts
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL DEFAULT '',
  content TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT '',
  date TEXT NOT NULL DEFAULT '',
  read_time TEXT NOT NULL DEFAULT '',
  published BOOLEAN NOT NULL DEFAULT false,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_sort ON blog_posts(sort_order);

-- 8. Points of interest (Why Punta Cana map)
CREATE TABLE IF NOT EXISTS pois (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'resort',
  lat NUMERIC NOT NULL DEFAULT 0,
  lng NUMERIC NOT NULL DEFAULT 0,
  sort_order INTEGER NOT NULL DEFAULT 0,
  visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_pois_category ON pois(category);

-- 9. Attractions (Why Punta Cana cards)
CREATE TABLE IF NOT EXISTS attractions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  subtitle TEXT NOT NULL DEFAULT '',
  title TEXT NOT NULL,
  description TEXT NOT NULL DEFAULT '',
  image TEXT NOT NULL DEFAULT '',
  sort_order INTEGER NOT NULL DEFAULT 0,
  visible BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_attractions_sort ON attractions(sort_order);

-- ============================================================
-- RLS POLICIES
-- ============================================================

ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE sub_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE process_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE company_values ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE pois ENABLE ROW LEVEL SECURITY;
ALTER TABLE attractions ENABLE ROW LEVEL SECURITY;

-- Services
CREATE POLICY "services_public_read" ON services
  FOR SELECT USING (visible = true OR is_admin());
CREATE POLICY "services_admin_insert" ON services
  FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "services_admin_update" ON services
  FOR UPDATE USING (is_admin());
CREATE POLICY "services_admin_delete" ON services
  FOR DELETE USING (is_admin());

-- Sub-services
CREATE POLICY "sub_services_public_read" ON sub_services
  FOR SELECT USING (visible = true OR is_admin());
CREATE POLICY "sub_services_admin_insert" ON sub_services
  FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "sub_services_admin_update" ON sub_services
  FOR UPDATE USING (is_admin());
CREATE POLICY "sub_services_admin_delete" ON sub_services
  FOR DELETE USING (is_admin());

-- Process steps
CREATE POLICY "process_steps_public_read" ON process_steps
  FOR SELECT USING (visible = true OR is_admin());
CREATE POLICY "process_steps_admin_insert" ON process_steps
  FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "process_steps_admin_update" ON process_steps
  FOR UPDATE USING (is_admin());
CREATE POLICY "process_steps_admin_delete" ON process_steps
  FOR DELETE USING (is_admin());

-- Testimonials
CREATE POLICY "testimonials_public_read" ON testimonials
  FOR SELECT USING (visible = true OR is_admin());
CREATE POLICY "testimonials_admin_insert" ON testimonials
  FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "testimonials_admin_update" ON testimonials
  FOR UPDATE USING (is_admin());
CREATE POLICY "testimonials_admin_delete" ON testimonials
  FOR DELETE USING (is_admin());

-- Team members
CREATE POLICY "team_members_public_read" ON team_members
  FOR SELECT USING (visible = true OR is_admin());
CREATE POLICY "team_members_admin_insert" ON team_members
  FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "team_members_admin_update" ON team_members
  FOR UPDATE USING (is_admin());
CREATE POLICY "team_members_admin_delete" ON team_members
  FOR DELETE USING (is_admin());

-- Company values
CREATE POLICY "company_values_public_read" ON company_values
  FOR SELECT USING (visible = true OR is_admin());
CREATE POLICY "company_values_admin_insert" ON company_values
  FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "company_values_admin_update" ON company_values
  FOR UPDATE USING (is_admin());
CREATE POLICY "company_values_admin_delete" ON company_values
  FOR DELETE USING (is_admin());

-- Blog posts
CREATE POLICY "blog_posts_public_read" ON blog_posts
  FOR SELECT USING (published = true OR is_admin());
CREATE POLICY "blog_posts_admin_insert" ON blog_posts
  FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "blog_posts_admin_update" ON blog_posts
  FOR UPDATE USING (is_admin());
CREATE POLICY "blog_posts_admin_delete" ON blog_posts
  FOR DELETE USING (is_admin());

-- POIs
CREATE POLICY "pois_public_read" ON pois
  FOR SELECT USING (visible = true OR is_admin());
CREATE POLICY "pois_admin_insert" ON pois
  FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "pois_admin_update" ON pois
  FOR UPDATE USING (is_admin());
CREATE POLICY "pois_admin_delete" ON pois
  FOR DELETE USING (is_admin());

-- Attractions
CREATE POLICY "attractions_public_read" ON attractions
  FOR SELECT USING (visible = true OR is_admin());
CREATE POLICY "attractions_admin_insert" ON attractions
  FOR INSERT WITH CHECK (is_admin());
CREATE POLICY "attractions_admin_update" ON attractions
  FOR UPDATE USING (is_admin());
CREATE POLICY "attractions_admin_delete" ON attractions
  FOR DELETE USING (is_admin());

-- ============================================================
-- UPDATED_AT TRIGGERS
-- ============================================================

CREATE TRIGGER services_updated_at BEFORE UPDATE ON services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER sub_services_updated_at BEFORE UPDATE ON sub_services
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER process_steps_updated_at BEFORE UPDATE ON process_steps
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER testimonials_updated_at BEFORE UPDATE ON testimonials
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER team_members_updated_at BEFORE UPDATE ON team_members
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER company_values_updated_at BEFORE UPDATE ON company_values
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER blog_posts_updated_at BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER pois_updated_at BEFORE UPDATE ON pois
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER attractions_updated_at BEFORE UPDATE ON attractions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- ADDITIONAL SITE SETTINGS KEYS
-- ============================================================

INSERT INTO site_settings (key, value) VALUES
  ('hero_images', '["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80","https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920&q=80","https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=80","https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?w=1920&q=80"]'::jsonb),
  ('stats', '[{"value":"15+","label":"Proyectos entregados"},{"value":"98%","label":"Clientes satisfechos"},{"value":"25+","label":"Años de experiencia"},{"value":"100%","label":"Entrega garantizada"}]'::jsonb),
  ('about', '{"title":"Precisión constructiva, visión integral","paragraph1":"Grupo Roiba es un estudio de ingeniería y arquitectura con más de 25 años de experiencia en el sector de la construcción. Especializados en la dirección técnica, desarrollo y ejecución de proyectos residenciales de alto nivel en el Caribe.","paragraph2":"Nuestra filosofía combina el rigor técnico europeo con un profundo conocimiento del entorno caribeño, ofreciendo a inversores internacionales un proceso constructivo transparente, controlado y con los más altos estándares de calidad."}'::jsonb),
  ('enfoque', '["Planificación exhaustiva antes de iniciar cualquier obra","Control económico permanente del proyecto","Supervisión técnica continua de la ejecución","Coordinación integral de todos los agentes involucrados","Implicación directa del equipo directivo en cada proyecto"]'::jsonb),
  ('footer', '{"company_description":"Estudio de ingeniería y arquitectura especializado en villas de lujo en Punta Cana.","social":{"instagram":"@grupo_roiba","linkedin":"","facebook":""}}'::jsonb)
ON CONFLICT (key) DO NOTHING;
