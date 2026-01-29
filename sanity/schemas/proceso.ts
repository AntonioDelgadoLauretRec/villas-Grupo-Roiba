export default {
  name: 'proceso',
  title: 'Proceso (6 Fases)',
  type: 'document',
  fields: [
    {name: 'phases', title: 'Fases', type: 'array', of: [{
      type: 'object',
      fields: [
        {name: 'number', title: 'Número', type: 'number'},
        {name: 'title', title: 'Título', type: 'string'},
        {name: 'subtitle', title: 'Subtítulo', type: 'string'},
        {name: 'description', title: 'Descripción', type: 'text'},
        {name: 'duration', title: 'Duración', type: 'string'},
        {name: 'deliverable', title: 'Entregable', type: 'string'},
      ]
    }]}
  ]
}
