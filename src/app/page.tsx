import { MovieFinder } from "@/components/MovieFinder/MovieFinder"
import { RecentlyRated } from "@/components/RecentlyRated/RecentlyRated"
import { Suspense } from "react"

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <MovieFinder />
      </Suspense>
      <RecentlyRated />
    </main>
  )
}
