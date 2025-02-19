import type { Prisma } from '@prisma/client'
import type { reviewWithSyllabus } from './schema'

export type ReviewWithSyllabus = Prisma.ReviewGetPayload<
  typeof reviewWithSyllabus
>
