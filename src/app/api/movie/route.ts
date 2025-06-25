import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const imdbID = req.nextUrl.searchParams.get("i")
  if (!imdbID) {
    return NextResponse.json({ error: "Missing imdbID" }, { status: 400 })
  }

  const apiKey = process.env.OMDB_API_KEY
  const url = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`

  const res = await fetch(url)
  const data = await res.json()

  return NextResponse.json(data)
}
