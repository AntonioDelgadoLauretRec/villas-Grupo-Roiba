export default {
  name: 'puntaCana',
  title: 'Por Qué Punta Cana',
  type: 'document',
  fields: [
    {name: 'title', title: 'Título', type: 'string'},
    {name: 'subtitle', title: 'Subtítulo', type: 'text'},
    {name: 'privileges', title: 'Privilegios', type: 'array', of: [{
      type: 'object',
      fields: [
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'subtitle', title: 'Subtítulo', type: 'string'},
        {name: 'description', title: 'Descripción', type: 'text'},
        {name: 'image', title: 'Imagen', type: 'image'},
      ]
    }]},
    {name: 'stats', title: 'Estadísticas', type: 'array', of: [{
      type: 'object',
      fields: [
        {name: 'value', title: 'Valor', type: 'string'},
        {name: 'label', title: 'Etiqueta', type: 'string'},
      ]
    }]}
  ]
}
