import type { Metadata } from 'next'
import ContactoContent from './ContactoContent'

export const metadata: Metadata = {
  title: 'Contacto | Grupo Roiba',
  description: 'Cuéntenos qué necesita: supervisión técnica, construcción completa o asesoramiento. Le respondemos en 24-48 horas laborables.',
  alternates: { canonical: 'https://gruporoiba.com/contacto' },
}

export default function ContactoPage() {
  return (
    <main className="pt-20">
      <ContactoContent />
    </main>
  )
}
