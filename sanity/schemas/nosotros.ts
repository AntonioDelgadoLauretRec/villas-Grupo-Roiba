export default {
  name: 'nosotros',
  title: 'Sobre Nosotros',
  type: 'document',
  fields: [
    {name: 'title', title: 'Título', type: 'string'},
    {name: 'subtitle', title: 'Subtítulo', type: 'string'},
    {name: 'history', title: 'Historia', type: 'text'},
    {name: 'values', title: 'Valores', type: 'array', of: [{
      type: 'object',
      fields: [
        {name: 'name', title: 'Nombre', type: 'string'},
        {name: 'description', title: 'Descripción', type: 'text'},
      ]
    }]},
    {name: 'teamImage', title: 'Foto Equipo', type: 'image'},
  ]
}
