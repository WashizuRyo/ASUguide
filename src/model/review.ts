import { prisma } from '@/prisma'
import { reviewWithSyllabus } from '@/type/review/schema'

export default async function fetchLatestReviews() {
  try {
    return await prisma.review.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 5,
      include: reviewWithSyllabus.include,
    })
  } catch (err) {
    console.error(err)
    throw new Error('Database Error: failed to fetch latest reviews')
  }
}
