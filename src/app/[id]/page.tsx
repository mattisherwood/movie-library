import { MovieDetails } from "@/components/MovieDetails/MovieDetails"
import classes from "../page.module.css"

type Props = {
  params: Promise<{ id: string }>
}

export default async function Home({ params }: Props) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  const { id } = await params
  const res = await fetch(`${baseUrl}/api/movie?i=${id}`, {
    // cache: "no-store",
  })
  const movie = await res.json()

  return (
    <div className={classes.root}>
      <MovieDetails movie={movie} />
    </div>
  )
}
