import { MovieFinder } from "@/components/MovieFinder/MovieFinder"
import { RecentlyRated } from "@/components/RecentlyRated/RecentlyRated"
import classes from "./page.module.css"

export default function Home() {
  return (
    <div className={classes.root}>
      <MovieFinder />
      <RecentlyRated />
    </div>
  )
}
