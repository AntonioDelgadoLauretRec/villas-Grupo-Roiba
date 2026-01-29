export default {
  name: 'villa',
  title: 'Villas',
  type: 'document',
  fields: [
    {name: 'title', title: 'Nombre', type: 'string'},
    {name: 'slug', title: 'URL', type: 'slug', options: {source: 'title'}},
    {name: 'location', title: 'Ubicación', type: 'string'},
    {name: 'priceMin', title: 'Precio Mínimo (USD)', type: 'number'},
    {name: 'priceMax', title: 'Precio Máximo (USD)', type: 'number'},
    {name: 'bedrooms', title: 'Habitaciones', type: 'number'},
    {name: 'area', title: 'Área (m²)', type: 'number'},
    {name: 'status', title: 'Estado', type: 'string', options: {
      list: ['available', 'in_progress', 'sold']
    }},
    {name: 'mainImage', title: 'Imagen Principal', type: 'image'},
    {name: 'gallery', title: 'Galería', type: 'array', of: [{type: 'image'}]},
    {name: 'description', title: 'Descripción', type: 'text'},
  ]
}
