import { type SchemaTypeDefinition } from 'sanity'
import gallery from './schemas/gallery'
import services from './schemas/services'
import testimonials from './schemas/testimonials'
import branches from './schemas/branches'
import about from './schemas/about'
import teams from './schemas/teams'
import artists from './schemas/artists'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
  about,
  artists,
  teams,
  gallery,
  services,
  testimonials,
  branches,
  ],
}
