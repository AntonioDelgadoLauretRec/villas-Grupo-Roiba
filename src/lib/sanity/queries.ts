import { sanityClient } from './client'

export async function getVillas() {
  return sanityClient.fetch(`
    *[_type == "villa"] | order(_createdAt desc) {
      _id, title, slug, location, priceMin, priceMax,
      bedrooms, area, status, mainImage, description
    }
  `)
}

export async function getHomepage() {
  return sanityClient.fetch(`*[_type == "homepage"][0]`)
}

export async function getProceso() {
  return sanityClient.fetch(`*[_type == "proceso"][0]`)
}

export async function getPuntaCana() {
  return sanityClient.fetch(`*[_type == "puntaCana"][0]`)
}

export async function getNosotros() {
  return sanityClient.fetch(`*[_type == "nosotros"][0]`)
}

export async function getContacto() {
  return sanityClient.fetch(`*[_type == "contacto"][0]`)
}
