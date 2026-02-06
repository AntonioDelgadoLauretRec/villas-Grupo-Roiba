# Grupo Roiba - Villas Website

Plataforma web para Grupo Roiba, especializada en inversión patrimonial y construcción boutique de villas en Punta Cana.

## Stack Tecnológico

- **Framework:** Next.js 13.5.6 (App Router)
- **Lenguaje:** TypeScript (Strict Mode)
- **Estilos:** Tailwind CSS
- **Base de Datos:** Supabase (PostgreSQL)
- **CMS:** Sanity.io
- **Validación:** Zod
- **Hosting:** Vercel

## Estructura del Proyecto

```
src/
├── app/                    # App Router pages
│   ├── api/               # API Routes
│   ├── contacto/          # Página de contacto
│   ├── proceso/           # The Roiba Method
│   ├── villas/            # Colección de villas
│   └── page.tsx           # Homepage
├── components/
│   ├── layouts/           # Navbar, Footer
│   ├── sections/          # Hero, ProcessTimeline, etc.
│   └── ui/                # Button, Card, etc.
├── lib/
│   └── utils.ts           # Utilidades
└── styles/
    └── globals.css        # Estilos globales
```

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/grupo-roiba/roiba-villas.git
cd roiba-villas

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus credenciales

# Iniciar desarrollo
npm run dev
```

## Variables de Entorno

Copiar `.env.example` a `.env.local` y configurar:

- **Supabase:** URL y keys de tu proyecto
- **Sanity:** Project ID (4yudb2wo) y token
- **Cloudflare:** Credenciales para Stream
- **Resend:** API key para emails

## Scripts Disponibles

```bash
npm run dev       # Desarrollo (localhost:3000)
npm run build     # Build de producción
npm run start     # Iniciar build de producción
npm run lint      # ESLint
npm run type-check # Verificar tipos TypeScript
```

## Despliegue en Vercel

1. Conectar repositorio en [vercel.com](https://vercel.com)
2. Configurar variables de entorno en Vercel Dashboard
3. Deploy automático en cada push a `main`

## Design System

### Colores (Manual de Marca)

- **Verde Profundo:** `#122620` (primario)
- **Arena Clara:** `#F4EBD0` (base)
- **Dorado Arena:** `#B68D40` (acento)
- **Dorado Claro:** `#FFCC53` (CTA)

### Tipografía

- **Títulos:** Cormorant Garamond (serif)
- **Cuerpo:** Inter (sans-serif)

## Seguridad

- Auth server-side con `@supabase/ssr`
- Validación con Zod en API routes
- Headers de seguridad en `next.config.js`
- RLS activo en Supabase

## Contacto

- **PM:** Antonio Delgado
- **Email:** inversiones@gruporoiba.com

---

© 2026 Grupo Roiba. Todos los derechos reservados.
