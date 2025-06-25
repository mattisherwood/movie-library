import { MovieDetails } from "@/components/MovieDetails/MovieDetails"
import { headers } from "next/headers"
import classes from "../page.module.css"

type Props = {
  params: Promise<{ id: string }>
}

export default async function Home({ params }: Props) {
  const headersList = await headers()
  const protocol = headersList.get("x-forwarded-proto") || "http"
  const host = headersList.get("host")
  const baseUrl = `${protocol}://${host}`

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
