import { Prisma } from '@prisma/client'

export const reviewWithSyllabus = Prisma.validator<Prisma.ReviewDefaultArgs>()({
  include: {
    syllabus: {
      select: {
        name: true,
      },
    },
  },
})
