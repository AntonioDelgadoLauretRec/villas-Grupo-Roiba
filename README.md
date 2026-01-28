# 🏝️ Grupo Roiba Villas

**Plataforma de Inversión Inmobiliaria Premium en Punta Cana**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/roiba-villas)

## 🎯 Descripción

Sitio web corporativo para Grupo Roiba, empresa especializada en construcción boutique de villas de lujo en Punta Cana, República Dominicana. Diseñado para inversores de alto patrimonio (>$500K USD) que buscan inversión patrimonial con seguridad jurídica.

## ✨ Características

- **Sistema de Diseño "Lujo Tropical"** - Paleta premium con colores Arena, Verde Profundo y Dorado Mate
- **Formulario Inteligente de Leads** - Con lead scoring automático y lógica condicional
- **Bento Grid Asimétrico** - Sección "Punta Cana Privileges" con diseño editorial
- **Optimizado para Conversión** - CTAs estratégicos y flujos de usuario optimizados
- **Seguridad Enterprise** - Headers de seguridad, CSP, rate limiting, validación Zod
- **SEO Optimizado** - Meta tags, Schema.org ready, Core Web Vitals

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|------------|-----|
| **Next.js 13.5.6** | Framework React (App Router) |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Estilos utility-first |
| **Supabase** | Base de datos + Auth (SSR) |
| **Sanity.io** | CMS Headless |
| **Zod** | Validación de schemas |
| **Vercel** | Deployment |

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── (public)/           # Páginas públicas
│   │   ├── page.tsx        # Homepage
│   │   ├── proceso/        # Método Roiba
│   │   ├── coleccion/      # Catálogo villas
│   │   ├── contacto/       # Formulario leads
│   │   ├── inversores/     # Centro de confianza
│   │   └── por-que-punta-cana/  # Lifestyle
│   ├── api/
│   │   └── leads/          # API endpoints
│   └── layout.tsx
├── components/
│   ├── ui/                 # Componentes base
│   ├── sections/           # Secciones de página
│   └── layouts/            # Layouts
├── lib/
│   ├── utils/              # Utilidades
│   └── validation/         # Schemas Zod
└── middleware.ts           # Security headers
```

## 🚀 Instalación

```bash
# Clonar repositorio
git clone https://github.com/YOUR_USERNAME/roiba-villas.git
cd roiba-villas

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales

# Iniciar servidor de desarrollo
npm run dev
```

## ⚙️ Variables de Entorno

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=4yudb2wo
NEXT_PUBLIC_SANITY_DATASET=production

# Cloudflare Stream
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_API_TOKEN=

# Resend (Email)
RESEND_API_KEY=
```

## 📊 Páginas Implementadas

| Página | Ruta | Estado |
|--------|------|--------|
| Homepage | `/` | ✅ |
| Proceso Roiba | `/proceso` | ✅ |
| Colección Villas | `/coleccion` | ✅ |
| Contacto | `/contacto` | ✅ |
| Centro Inversores | `/inversores` | ✅ |
| Por Qué Punta Cana | `/por-que-punta-cana` | ✅ |

## 🔒 Seguridad

- ✅ Auth Server-Side Only (@supabase/ssr)
- ✅ RLS Ready en todas las tablas
- ✅ Validación Zod en API routes
- ✅ Rate Limiting (5 req/min)
- ✅ Honeypot anti-spam
- ✅ Headers de seguridad (CSP, HSTS, X-Frame-Options)

## 📈 Deployment

El proyecto está configurado para deployment automático en Vercel:

1. Conectar repositorio en Vercel
2. Configurar variables de entorno
3. Deploy automático en cada push a `main`

## 🎨 Design System

**Colores:**
- Verde Profundo: `#122620`
- Arena: `#F5E6D3`
- Dorado Mate: `#C9A95A`
- Océano: `#1A4D5C`
- Carbón: `#2B2B2B`

**Tipografía:**
- Títulos: Playfair Display (Serif)
- Cuerpo: Lato (Sans-serif)

## 📝 Licencia

Proyecto privado - Grupo Roiba © 2026

---

**Desarrollado con ❤️ por el AI Squad:**
- 🧠 Gemini (Estratega UX)
- 🛡️ DeepSeek (Auditor Seguridad)
- 🏗️ Claude (Constructor)
- 👤 Antonio Delgado (PM)
