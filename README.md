# Grupo Roiba — Servicios Técnicos Especializados

Plataforma web para Grupo Roiba, firma de servicios técnicos especializados para proyectos residenciales de alta gama en Punta Cana, República Dominicana. Dirección técnica, construcción llave en mano y gestión post-entrega.

## Stack Tecnológico

- **Framework:** Next.js 13.5.6 (App Router)
- **Lenguaje:** TypeScript (Strict Mode)
- **Estilos:** Tailwind CSS
- **Base de Datos:** Supabase (PostgreSQL + RLS)
- **Validación:** Zod
- **Hosting:** Vercel
- **Analytics:** Google Analytics
- **Email:** Resend
- **i18n:** ES / EN (diccionarios propios)

## Estructura del Proyecto

```
src/
├── app/                        # App Router pages
│   ├── admin/                  # Panel de administración (CMS propio)
│   ├── api/                    # API Routes (leads, villas, settings)
│   ├── contacto/               # Página de contacto
│   ├── servicios/              # Capacidades técnicas (escenarios + líneas de negocio)
│   ├── nosotros/               # Equipo y enfoque de trabajo
│   ├── proceso/                # El Método Roiba (6 fases)
│   ├── inversores/             # Inversión con criterio técnico
│   ├── por-que-punta-cana/     # Destino: mapa, POIs, atracciones, clima
│   ├── villas/                 # Proyectos en desarrollo
│   ├── blog/                   # Publicaciones
│   ├── cookies/                # Política de cookies
│   ├── privacidad/             # Política de privacidad
│   ├── terminos/               # Términos y condiciones
│   └── page.tsx                # Homepage
├── components/
│   ├── home/                   # HeroSection, StatsMarquee, AboutSection,
│   │                           # ServicesGrid, ProcessTabs, CTASection, BrochureSection
│   ├── layouts/                # Navbar, Footer
│   ├── sections/               # TrustSignals, ProcessTimeline, ContactForm,
│   │                           # WhyPuntaCana, CookieConsent, WhatsAppWidget
│   └── ui/                     # Button, Card, etc.
├── lib/
│   ├── i18n/
│   │   └── dictionaries.ts     # Diccionarios ES/EN
│   ├── supabase/               # Cliente Supabase (server + client)
│   └── utils.ts                # Utilidades
└── docs/
    └── manual-admin.md         # Manual del panel de administración
```

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/AntonioDelgadoLauretRec/villas-Grupo-Roiba.git
cd villas-Grupo-Roiba

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con las credenciales

# Iniciar desarrollo
npm run dev
```

## Variables de Entorno

Copiar `.env.example` a `.env.local` y configurar:

- **Supabase:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
- **Resend:** `RESEND_API_KEY` (envío de emails)
- **Google Analytics:** `NEXT_PUBLIC_GA_ID`

## Scripts Disponibles

```bash
npm run dev         # Desarrollo (localhost:3000)
npm run build       # Build de producción
npm run start       # Iniciar build de producción
npm run lint        # ESLint
npm run type-check  # Verificar tipos TypeScript
```

## Design System

### Paleta de Colores

La identidad visual se basa en una combinación de **azul marino, blanco y dorado** que transmite autoridad, limpieza y premium.

| Token                  | Hex       | Uso                                      |
|------------------------|-----------|------------------------------------------|
| `roiba-verde`          | `#0C2340` | Azul marino profundo — color primario    |
| `roiba-verde-light`    | `#1B4B7A` | Azul medio — hover, acentos secundarios  |
| `roiba-verde-dark`     | `#061525` | Azul muy oscuro — fondos hero, contraste |
| `roiba-arena`          | `#FFFFFF` | Blanco — fondo base                      |
| `roiba-arena-light`    | `#F5F7FA` | Gris muy claro — secciones alternas      |
| `roiba-arena-dark`     | `#E2E8F0` | Gris medio — bordes, separadores         |
| `roiba-dorado`         | `#C9A96E` | Dorado refinado mate — acento secundario |
| `roiba-dorado-light`   | `#E8C877` | Dorado claro — botones CTA, highlights   |
| `roiba-negro`          | `#0A0A0A` | Negro — texto máximo contraste           |
| `roiba-blanco`         | `#FFFFFF` | Blanco — texto sobre fondos oscuros      |

> **Nota:** Los tokens usan el prefijo `roiba-verde` por herencia del diseño original (que usaba verde). El color real implementado es azul marino (`#0C2340`).

### Tipografía

| Rol         | Fuente              | Fallback              | Uso                              |
|-------------|---------------------|-----------------------|----------------------------------|
| **Display** | Cormorant Garamond  | Georgia, serif        | Títulos hero, encabezados (h1-h6)|
| **Serif**   | Cormorant Garamond  | Georgia, serif        | Subtítulos editoriales           |
| **Sans**    | Inter               | system-ui, sans-serif | Cuerpo, UI, botones, formularios |

### Escala Tipográfica

Todas las medidas usan `clamp()` para escalado fluido entre breakpoints:

| Token         | Tamaño                          | Line-Height | Tracking   |
|---------------|----------------------------------|-------------|------------|
| `display-xl`  | `clamp(3rem, 8vw, 7rem)`       | 0.95        | -0.03em    |
| `display-lg`  | `clamp(2.5rem, 6vw, 5rem)`     | 1.0         | -0.02em    |
| `display-md`  | `clamp(2rem, 4vw, 3.5rem)`     | 1.1         | -0.02em    |
| `heading`     | `clamp(1.5rem, 3vw, 2.25rem)`  | 1.2         | -0.01em    |
| `subheading`  | `clamp(1.125rem, 2vw, 1.5rem)` | 1.4         | —          |
| `body-lg`     | `1.125rem`                      | 1.7         | —          |
| `body`        | `1rem`                          | 1.7         | —          |
| `caption`     | `0.875rem`                      | 1.5         | —          |
| `micro`       | `0.75rem`                       | 1.4         | 0.05em     |

### Animaciones

| Clase CSS       | Efecto                    | Duración |
|-----------------|---------------------------|----------|
| `animate-fade-in`  | Fade in                | 0.8s     |
| `animate-fade-up`  | Fade in + slide up 30px| 0.8s     |
| `animate-slide-in` | Fade in + slide left   | 0.6s     |
| `animate-reveal`   | Clip-path reveal       | 1.2s     |
| `animate-line-grow` | Scale X (0→1)         | 0.8s     |

### Componentes de Estilo

Definidos en `globals.css` como clases utilitarias:

- **Botones:** `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`
- **Cards:** `.card`, `.card-dark` (con sombra y efecto lift en hover)
- **Formularios:** `.input`, `.input-dark`, `.select`, `.label` (focus dorado)
- **Secciones:** `.section`, `.section-dark`
- **Contenedores:** `.container-narrow` (max-w-4xl), `.container-wide` (max-w-7xl)
- **Decorativos:** `.gold-line`, `.divider`, `.text-gradient-gold`
- **Overlays:** `.overlay-dark`, `.overlay-gradient`
- **Aspect ratios:** `.aspect-villa` (4/3), `.aspect-hero` (16/9)
- **Scrollbar:** `.scrollbar-luxury` (dorado sobre blanco)

### Filosofía de Diseño

- Estética **luxury/premium** con espacios amplios y tipografía editorial
- Azul marino como color de autoridad y confianza
- Dorado como acento de calidad y exclusividad
- Textura grain sutil sobre fondos oscuros
- Transiciones suaves con easing personalizado (`cubic-bezier(0.16, 1, 0.3, 1)`)
- Sistema de espaciado base de 8px
- Mobile-first con optimizaciones táctiles (`touch-pan-y`, `touch-pan-x`)
- Focus visible con outline dorado para accesibilidad

## Panel de Administración

Accesible en `/admin` con autenticación Supabase. Permite gestionar:

- Proyectos (villas) con galería de imágenes
- Servicios y sub-servicios
- Fases del proceso constructivo
- Valores corporativos
- Testimonios
- POIs del mapa interactivo
- Atracciones de Punta Cana
- Blog (artículos)
- Configuración general del sitio

Documentación completa en [`docs/manual-admin.md`](docs/manual-admin.md).

## Páginas del Sitio

| Ruta                   | Página                        | Descripción                                              |
|------------------------|-------------------------------|----------------------------------------------------------|
| `/`                    | Home                          | Hero, stats, servicios, proceso, CTA, brochure           |
| `/servicios`           | Capacidades Técnicas          | 4 escenarios de cliente + 3 líneas de negocio            |
| `/nosotros`            | Equipo                        | Historia, equipo fundador, valores, enfoque              |
| `/proceso`             | El Método Roiba               | 6 fases del proceso técnico                              |
| `/inversores`          | Para Inversores               | Datos de mercado, beneficios fiscales, formulario         |
| `/por-que-punta-cana`  | El Destino                    | Mapa interactivo, POIs, atracciones, clima en vivo       |
| `/villas`              | Proyectos en Desarrollo       | Portfolio dinámico desde Supabase                         |
| `/blog`                | Publicaciones                 | Artículos técnicos desde Supabase                        |
| `/contacto`            | Hablemos                      | Formulario de contacto con selector de servicio           |

## Seguridad

- Auth server-side con `@supabase/ssr`
- Row Level Security (RLS) activo en Supabase
- Validación con Zod en API routes
- Headers de seguridad en `next.config.js`
- CSP configurado para Google Maps, Analytics y recursos externos

## Contacto

- **PM:** Antonio Delgado
- **Email:** inversiones@gruporoiba.com
- **Web:** [gruporoiba.com](https://gruporoiba.com)

---

© 2026 Grupo Roiba. Todos los derechos reservados.
