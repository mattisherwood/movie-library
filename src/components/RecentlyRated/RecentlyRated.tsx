"use client"

import { useEffect, useState } from "react"
import { Carousel } from "../Carousel/Carousel"
import { Container } from "../Container/Container"
import { FetchedMovieCard } from "../FetchedMovieCard/FetchedMovieCard"
import classes from "./RecentlyRated.module.css"

const LOCAL_STORAGE_KEY = "movie-rating"

export const RecentlyRated = () => {
  const [recentlyRatedMovies, setRecentlyRatedMovies] = useState<string[]>([])

  useEffect(() => {
    const ids: string[] = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key && key.startsWith(`${LOCAL_STORAGE_KEY}-`)) {
        const movieId = key.replace(`${LOCAL_STORAGE_KEY}-`, "")
        ids.push(movieId)
      }
    }
    setRecentlyRatedMovies(ids)
  }, [])

  if (recentlyRatedMovies.length === 0) return null

  return (
    <Container className={classes.root}>
      <h2>Recently Rated</h2>
      <Carousel counteractGutter>
        {recentlyRatedMovies.map((imdbID) => (
          <FetchedMovieCard imdbID={imdbID} key={imdbID} />
        ))}
      </Carousel>
    </Container>
  )
}
