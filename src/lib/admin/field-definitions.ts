import type { FormField } from '@/components/admin/ContentForm'

export const serviceFields: FormField[] = [
  { name: 'slug', label: 'Slug', required: true, placeholder: 'diseno-arquitectonico', help: 'Identificador único (letras minúsculas, números y guiones)' },
  { name: 'title', label: 'Título', required: true, placeholder: 'Diseño arquitectónico' },
  { name: 'description', label: 'Descripción', type: 'textarea', placeholder: 'Descripción del servicio...' },
  { name: 'image', label: 'URL de imagen', type: 'url', placeholder: 'https://...' },
  { name: 'page', label: 'Página', type: 'select', options: [{ value: 'homepage', label: 'Homepage' }, { value: 'servicios', label: 'Servicios' }] },
  { name: 'sort_order', label: 'Orden', type: 'number' },
  { name: 'visible', label: 'Visibilidad', type: 'checkbox', placeholder: 'Visible en la web' },
]

export const subServiceFields: FormField[] = [
  { name: 'slug', label: 'Slug', required: true, placeholder: 'villas-premium' },
  { name: 'label', label: 'Etiqueta', placeholder: 'Premium' },
  { name: 'title', label: 'Título', required: true, placeholder: 'Villas Premium' },
  { name: 'description', label: 'Descripción', type: 'textarea', rows: 4 },
  { name: 'includes', label: 'Incluye (uno por línea)', type: 'textarea', rows: 5, help: 'Escribe cada elemento en una línea separada' },
  { name: 'note', label: 'Nota adicional', type: 'textarea', rows: 2 },
  { name: 'sort_order', label: 'Orden', type: 'number' },
  { name: 'visible', label: 'Visibilidad', type: 'checkbox', placeholder: 'Visible en la web' },
]

export const processStepFields: FormField[] = [
  { name: 'num', label: 'Número', placeholder: '01' },
  { name: 'title', label: 'Título', required: true, placeholder: 'Consulta inicial' },
  { name: 'subtitle', label: 'Subtítulo', placeholder: 'Primera toma de contacto' },
  { name: 'description', label: 'Descripción', type: 'textarea', rows: 3 },
  { name: 'detail', label: 'Detalle / Entregables', type: 'textarea', rows: 3 },
  { name: 'duration', label: 'Duración estimada', placeholder: '1-2 semanas' },
  { name: 'sort_order', label: 'Orden', type: 'number' },
  { name: 'visible', label: 'Visibilidad', type: 'checkbox', placeholder: 'Visible en la web' },
]

export const testimonialFields: FormField[] = [
  { name: 'quote', label: 'Testimonio', type: 'textarea', required: true, rows: 4, placeholder: 'Lo que dijo el cliente...' },
  { name: 'name', label: 'Nombre', required: true, placeholder: 'Juan Pérez' },
  { name: 'role', label: 'Rol / Relación', placeholder: 'Propietario, Villa Aurora' },
  { name: 'location', label: 'Ubicación', placeholder: 'Madrid, España' },
  { name: 'sort_order', label: 'Orden', type: 'number' },
  { name: 'visible', label: 'Visibilidad', type: 'checkbox', placeholder: 'Visible en la web' },
]

export const teamMemberFields: FormField[] = [
  { name: 'name', label: 'Nombre', required: true, placeholder: 'Antonio García' },
  { name: 'role', label: 'Cargo', placeholder: 'Director Técnico' },
  { name: 'bio', label: 'Biografía', type: 'textarea', rows: 4 },
  { name: 'image', label: 'URL de imagen', type: 'url', placeholder: 'https://...' },
  { name: 'sort_order', label: 'Orden', type: 'number' },
  { name: 'visible', label: 'Visibilidad', type: 'checkbox', placeholder: 'Visible en la web' },
]

export const companyValueFields: FormField[] = [
  { name: 'title', label: 'Título', required: true, placeholder: 'Transparencia' },
  { name: 'description', label: 'Descripción', type: 'textarea', rows: 3 },
  { name: 'image', label: 'URL de imagen', type: 'url', placeholder: 'https://...' },
  { name: 'sort_order', label: 'Orden', type: 'number' },
  { name: 'visible', label: 'Visibilidad', type: 'checkbox', placeholder: 'Visible en la web' },
]

export const blogPostFields: FormField[] = [
  { name: 'slug', label: 'Slug', required: true, placeholder: 'invertir-en-punta-cana' },
  { name: 'title', label: 'Título', required: true, placeholder: 'Por qué invertir en Punta Cana' },
  { name: 'excerpt', label: 'Extracto', type: 'textarea', rows: 2, placeholder: 'Breve resumen del artículo...' },
  { name: 'content', label: 'Contenido', type: 'textarea', rows: 10, placeholder: 'Contenido completo del artículo...' },
  { name: 'image', label: 'URL de imagen', type: 'url', placeholder: 'https://...' },
  { name: 'category', label: 'Categoría', placeholder: 'Inversión' },
  { name: 'date', label: 'Fecha', placeholder: '15 Mar 2025' },
  { name: 'read_time', label: 'Tiempo de lectura', placeholder: '5 min' },
  { name: 'sort_order', label: 'Orden', type: 'number' },
  { name: 'published', label: 'Publicación', type: 'checkbox', placeholder: 'Publicado en la web' },
]

export const poiFields: FormField[] = [
  { name: 'name', label: 'Nombre', required: true, placeholder: 'Cap Cana Marina' },
  { name: 'description', label: 'Descripción', placeholder: 'Puerto deportivo de lujo' },
  { name: 'category', label: 'Categoría', type: 'select', options: [
    { value: 'resort', label: 'Resort' },
    { value: 'playa', label: 'Playa' },
    { value: 'golf', label: 'Golf' },
    { value: 'marina', label: 'Marina' },
    { value: 'aeropuerto', label: 'Aeropuerto' },
    { value: 'ocio', label: 'Ocio' },
    { value: 'naturaleza', label: 'Naturaleza' },
    { value: 'gastronomia', label: 'Gastronomía' },
  ]},
  { name: 'lat', label: 'Latitud', type: 'number', placeholder: '18.5' },
  { name: 'lng', label: 'Longitud', type: 'number', placeholder: '-68.3' },
  { name: 'sort_order', label: 'Orden', type: 'number' },
  { name: 'visible', label: 'Visibilidad', type: 'checkbox', placeholder: 'Visible en el mapa' },
]

export const attractionFields: FormField[] = [
  { name: 'slug', label: 'Slug', required: true, placeholder: 'cap-cana' },
  { name: 'subtitle', label: 'Subtítulo', placeholder: 'Destino exclusivo' },
  { name: 'title', label: 'Título', required: true, placeholder: 'Cap Cana' },
  { name: 'description', label: 'Descripción', type: 'textarea', rows: 4 },
  { name: 'image', label: 'URL de imagen', type: 'url', placeholder: 'https://...' },
  { name: 'sort_order', label: 'Orden', type: 'number' },
  { name: 'visible', label: 'Visibilidad', type: 'checkbox', placeholder: 'Visible en la web' },
]
