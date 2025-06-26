import { MovieDetails } from "@/components/MovieDetails/MovieDetails"
import { headers } from "next/headers"

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
    <main>
      <MovieDetails movie={movie} />
    </main>
  )
}
