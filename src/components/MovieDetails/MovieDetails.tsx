import { AgeRating } from "../AgeRating/AgeRating"
import { Container } from "../Container/Container"
import { MovieCard } from "../MovieCard/MovieCard"
import classes from "./MovieDetails.module.css"

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

export const MovieDetails = ({ movie }: Props) => (
  <Container className={classes.filmDetails}>
    <MovieCard
      title={movie.Title}
      year={movie.Year}
      imdbID={movie.imdbID}
      poster={movie.Poster !== "N/A" ? movie.Poster : undefined}
      type={movie.Type}
      large
      priority
      disableLink
      className={classes.poster}
    />
    <div className={classes.details}>
      <div className={classes.headline}>
        <h1>{movie.Title}</h1>
        <AgeRating ageRating={movie.Rated} />
      </div>
      <div className={classes.topStats}>
        {movie.Genre && (
          <div className={classes.genres}>
            {movie.Genre.split(", ").map((genre) => (
              <span key={genre} className={classes.genre}>
                {genre}
              </span>
            ))}
          </div>
        )}
        <p title={`Released ${movie.Released}`}>
          <i className='icon-calendar' />
          {movie.Year}
        </p>
        <p title={`Running time ${movie.Runtime}`}>
          <i className='icon-clock' />
          {movie.Runtime}
        </p>
        {movie.imdbRating != "N/A" && <p>IMDB: {movie.imdbRating}/10</p>}
        {movie.Metascore != "N/A" && <p>Meta: {movie.Metascore}%</p>}
      </div>
      <p>{movie.Plot}</p>
      <dl>
        {movie.Country !== "N/A" && (
          <>
            <dt>Country</dt>
            <dd>{movie.Country}</dd>
          </>
        )}
        {movie.Language !== "N/A" && (
          <>
            <dt>Language</dt>
            <dd>{movie.Language}</dd>
          </>
        )}
        {movie.Rated !== "N/A" && (
          <>
            <dt>Rated</dt>
            <dd>{movie.Rated}</dd>
          </>
        )}
        {movie.Type !== "N/A" && (
          <>
            <dt>Type</dt>
            <dd>{movie.Type}</dd>
          </>
        )}
        {movie.Released !== "N/A" && (
          <>
            <dt>Released</dt>
            <dd>{movie.Released}</dd>
          </>
        )}
        {movie.Runtime !== "N/A" && (
          <>
            <dt>Runtime</dt>
            <dd>{movie.Runtime}</dd>
          </>
        )}
        {movie.Director !== "N/A" && (
          <>
            <dt>Director</dt>
            <dd>{movie.Director}</dd>
          </>
        )}
        {movie.Writer !== "N/A" && (
          <>
            <dt>Writer</dt>
            <dd>{movie.Writer}</dd>
          </>
        )}
        {movie.Actors !== "N/A" && (
          <>
            <dt>Actors</dt>
            <dd>{movie.Actors}</dd>
          </>
        )}
        {movie.Awards !== "N/A" && (
          <>
            <dt>Awards</dt>
            <dd>{movie.Awards}</dd>
          </>
        )}
        {movie.BoxOffice !== "N/A" && (
          <>
            <dt>Box Office</dt>
            <dd>{movie.BoxOffice}</dd>
          </>
        )}
      </dl>
    </div>
  </Container>
)
