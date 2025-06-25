import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
  const searchTerm = req.nextUrl.searchParams.get("s")
  const type = req.nextUrl.searchParams.get("type")
  const year = req.nextUrl.searchParams.get("year")
  const page = req.nextUrl.searchParams.get("page") || "1"
  if (!searchTerm) {
    return NextResponse.json({ error: "Missing searchTerm" }, { status: 400 })
  }

  const apiKey = process.env.OMDB_API_KEY
  const url = `https://www.omdbapi.com/?s=${searchTerm}&type=${type}&y=${year}&page=${page}&apikey=${apiKey}`

  const res = await fetch(url)
  const data = await res.json()

  return NextResponse.json(data)
}
