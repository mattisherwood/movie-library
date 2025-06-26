import { MovieFinder } from "@/components/MovieFinder/MovieFinder"
import { RecentlyRated } from "@/components/RecentlyRated/RecentlyRated"

export default function Home() {
  return (
    <main>
      <MovieFinder />
      <RecentlyRated />
    </main>
  )
}
