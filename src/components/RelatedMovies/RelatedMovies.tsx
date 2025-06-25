"use client"

import { Container } from "../Container/Container"
import { MovieCard } from "../MovieCard/MovieCard"

import { useEffect, useState } from "react"
import { Carousel } from "../Carousel/Carousel"
import { MovieCardPlaceholder } from "../MovieCardPlaceholder/MovieCardPlaceholder"
import classes from "./RelatedMovies.module.css"

type Props = {
  searchTerm: string
  currentMovie?: string
}

type Movie = {
  Title: string
  Year: string
  imdbID: string
  Poster: string
  Type: string
}

export const RelatedMovies = ({ searchTerm, currentMovie }: Props) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [results, setResults] = useState<Movie[]>([])

  const resultsToShow = currentMovie
    ? results.filter((movie) => movie.imdbID !== currentMovie)
    : results

  useEffect(() => {
    if (!searchTerm) {
      setResults([])
      setError(null)
      return
    }
    setLoading(true)
    setError(null)
    const url = new URL("/api/movies", window.location.origin)
    url.searchParams.set("s", searchTerm)
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setResults(data.Search)
        } else {
          setError(data.Error || "No results found.")
          setResults([])
        }
      })
      .catch(() => setError("Failed to fetch results."))
      .finally(() => setLoading(false))
  }, [searchTerm])

  if ((resultsToShow.length === 0 && !loading) || error) return null

  return (
    <Container className={classes.root}>
      <h2>You may also like</h2>
      <Carousel counteractGutter>
        {loading
          ? Array(10)
              .fill(0)
              .map((_, index) => <MovieCardPlaceholder key={index} />)
          : resultsToShow.map((movie) => (
              <MovieCard
                title={movie.Title}
                year={movie.Year}
                imdbID={movie.imdbID}
                poster={movie.Poster !== "N/A" ? movie.Poster : undefined}
                type={movie.Type}
                key={movie.imdbID}
              />
            ))}
      </Carousel>
    </Container>
  )
}
