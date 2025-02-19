import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const user = await prisma.user.findFirst()
  console.log(user)

  if (!user) {
    console.log('Seeding already done.')
    return
  }
  await prisma.syllabus.create({
    data: {
      year: 2021,
      offering: '前期',
      period: '月',
      day: '4',
      name: 'Introduction to Computer Science',
      instructor: 'John Doe',
      facultyId: 1,
      departmentId: 1,
    },
  })

  await prisma.review.createMany({
    data: [
      {
        syllabusId: 1,
        userId: user.id,
        rating: 5,
        comment: 'Great course! Learned a lot.',
      },
      {
        syllabusId: 1,
        userId: user.id,
        rating: 4,
        comment: 'Interesting content, but a bit fast-paced.',
      },
      {
        syllabusId: 1,
        userId: user.id,
        rating: 3,
        comment: 'Average course, could be more engaging.',
      },
      {
        syllabusId: 1,
        userId: user.id,
        rating: 5,
        comment: 'Excellent instructor and well-structured syllabus.',
      },
      {
        syllabusId: 1,
        userId: user.id,
        rating: 2,
        comment: 'Too difficult to follow, needs better explanations.',
      },
      {
        syllabusId: 1,
        userId: user.id,
        rating: 4,
        comment: 'Enjoyed the hands-on projects in this course.',
      },
      {
        syllabusId: 1,
        userId: user.id,
        rating: 3,
        comment: 'Good content but lacks real-world examples.',
      },
      {
        syllabusId: 1,
        userId: user.id,
        rating: 5,
        comment: 'One of the best courses I’ve taken! Highly recommended.',
      },
      {
        syllabusId: 1,
        userId: user.id,
        rating: 4,
        comment: 'Very informative, but the assignments were quite tough.',
      },
      {
        syllabusId: 1,
        userId: user.id,
        rating: 3,
        comment: 'Decent course but could use more interactive elements.',
      },
    ],
  })

  console.log('Seeding finished.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
