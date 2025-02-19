import type { ReviewWithSyllabus } from '@/type'

export default function ReviewList({
  reviews,
}: { reviews: ReviewWithSyllabus[] }) {
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.reviewId}>
          <div>{review.syllabus.name}</div>
          <div>{review.comment}</div>
          <div>{review.rating}</div>
          <div>{String(review.createdAt)}</div>
        </div>
      ))}
    </div>
  )
}
