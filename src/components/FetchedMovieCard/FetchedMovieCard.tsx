"use client"

import { useEffect, useState } from "react"
import { MovieCard } from "../MovieCard/MovieCard"
import { MovieCardPlaceholder } from "../MovieCardPlaceholder/MovieCardPlaceholder"

type Movie = {
  Title: string
  Year: string
  imdbID: string
  Poster: string
  Type: string
}

type Props = {
  imdbID: string
}

export const FetchedMovieCard = ({ imdbID }: Props) => {
  const [movie, setMovie] = useState<Movie>()

  useEffect(() => {
    fetch(`/api/movie?i=${imdbID}`)
      .then((res) => res.json())
      .then(setMovie)
  }, [imdbID])

  if (!movie) return <MovieCardPlaceholder />

  return (
    <MovieCard
      imdbID={movie.imdbID}
      title={movie.Title}
      year={movie.Year}
      poster={movie.Poster}
      type={movie.Type}
    />
  )
}
