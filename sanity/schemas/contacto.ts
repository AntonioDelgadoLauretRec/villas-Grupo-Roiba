export default {
  name: 'contacto',
  title: 'Contacto',
  type: 'document',
  fields: [
    {name: 'email', title: 'Email', type: 'string'},
    {name: 'phone', title: 'Teléfono', type: 'string'},
    {name: 'whatsapp', title: 'WhatsApp', type: 'string'},
    {name: 'address', title: 'Dirección', type: 'text'},
    {name: 'mapUrl', title: 'URL Google Maps', type: 'url'},
  ]
}
