import { type SchemaTypeDefinition } from 'sanity'
import gallery from './schemas/gallery'
import testimonials from './schemas/testimonials'
import branches from './schemas/branches'
import about from './schemas/about'
import team from './schemas/teams'
import artists from './schemas/artists'
import salon from './schemas/salon'
import barbershop from './schemas/barbershop'
import tattoo from './schemas/tattoo'
import products from './schemas/products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
  salon,
  barbershop,
  tattoo,
  about,
  artists,
  team,
  gallery,
  testimonials,
  branches,
  products,
  ],
}
