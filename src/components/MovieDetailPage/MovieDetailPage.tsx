import { MovieDetails } from "../MovieDetails/MovieDetails"
import { RecentlyRated } from "../RecentlyRated/RecentlyRated"
import { RelatedMovies } from "../RelatedMovies/RelatedMovies"

type Props = {
  movie: {
    Title: string
    Year: string
    Rated: string
    Released: string
    Runtime: string
    Genre: string
    Director: string
    Writer: string
    Actors: string
    Plot: string
    Language: string
    Country: string
    Awards: string
    Poster: string
    Ratings: Array<{
      Source: string
      Value: string
    }>
    Metascore: string
    imdbRating: string
    imdbVotes: string
    imdbID: string
    Type: string
    DVD: string
    BoxOffice: string
    Production: string
    Website: string
    Response: string
  }
}

export const MovieDetailPage = ({ movie }: Props) => (
  <>
    <MovieDetails movie={movie} />

    <RelatedMovies searchTerm={movie.Title} currentMovie={movie.imdbID} />

    <RecentlyRated />
  </>
)
