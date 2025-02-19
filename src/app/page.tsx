import ReviewList from '@/components/reviews/ReviewList'
import fetchLatestReviews from '@/model/review'

export default async function TopPage() {
  const latestReviews = await fetchLatestReviews()
  return <ReviewList reviews={latestReviews} />
}
