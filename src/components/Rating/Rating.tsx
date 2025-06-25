"use client"

import { useEffect, useState } from "react"
import classes from "./Rating.module.css"

const LOCAL_STORAGE_KEY = "movie-rating"

type Props = {
  movieId: string
}

export const Rating = ({ movieId }: Props) => {
  const [rating, setRating] = useState(0)

  useEffect(() => {
    const stored = localStorage.getItem(`${LOCAL_STORAGE_KEY}-${movieId}`)
    if (stored) setRating(Number(stored))
  }, [])

  const handleRating = (value: number) => {
    const newRating = value === rating ? 0 : value
    setRating(newRating)
    localStorage.setItem(`${LOCAL_STORAGE_KEY}-${movieId}`, String(newRating))
  }

  return (
    <div className={classes.root}>
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={`${classes.star} ${rating >= value ? classes.filled : ""}`}
          onClick={() => handleRating(value)}
        >
          {rating >= value ? "★" : "☆"}
        </span>
      ))}
    </div>
  )
}
