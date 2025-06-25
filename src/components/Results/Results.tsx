"use client"

import { Container } from "../Container/Container"
import { MovieCard } from "../MovieCard/MovieCard"
import { MovieCardPlaceholder } from "../MovieCardPlaceholder/MovieCardPlaceholder"
import classes from "./Results.module.css"

type Movie = {
  Title: string
  Year: string
  imdbID: string
  Poster: string
  Type: string
}

type Props = {
  results: Movie[]
  loading: boolean
  error?: string | null
  isLastPage?: boolean
}

export const Results = ({
  results,
  loading = true,
  error,
  isLastPage,
}: Props) => (
  <Container className={classes.root}>
    {loading ? (
      Array(12)
        .fill(0)
        .map((_, index) => (
          <MovieCardPlaceholder
            className={index > 9 ? classes.spacer : undefined}
            key={index}
          />
        ))
    ) : error || results.length === 0 ? (
      <div className={classes.message}>
        {error && error != "Movie not found!" ? error : "No movies found"}
      </div>
    ) : (
      <>
        {results.map(({ Title, Year, imdbID, Poster, Type }) => (
          <MovieCard
            imdbID={imdbID}
            title={Title}
            year={Year}
            poster={Poster !== "N/A" ? Poster : undefined}
            type={Type}
            key={imdbID}
          />
        ))}
        {
          // Because of the "10 results per page" pagination,
          // we need to add two extra cards on certain screen sizes
          // to fill the space and maintain a consistent layout.
          // Hopefully this will be fixed in the future when the API
          // supports the choosing of results per page so we can choose
          // 12 which works better on multiple grids.
          !isLastPage && (
            <>
              <MovieCardPlaceholder className={classes.spacer} />
              <MovieCardPlaceholder className={classes.spacer} />
            </>
          )
        }
      </>
    )}
  </Container>
)
