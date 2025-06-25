"use client"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { Rating } from "../Rating/Rating"
import classes from "./MovieCard.module.css"

type Props = {
  imdbID: string
  title: string
  year: string
  poster?: string
  type: string
  large?: boolean
  priority?: boolean
  disableLink?: boolean
  className?: string
}

export const MovieCard = ({
  imdbID,
  title,
  year,
  poster,
  type,
  large,
  priority,
  disableLink,
  className,
}: Props) => {
  const isTouchDevice =
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)

  return (
    <div className={clsx(classes.root, large && classes.large, className)}>
      <div
        className={classes.card}
        onMouseMove={(e) => {
          if (isTouchDevice) return
          const card = e.currentTarget
          const rect = card.getBoundingClientRect()
          const x = e.clientX - rect.left - rect.width / 2
          const y = e.clientY - rect.top - rect.height / 2
          card.style.transform = `rotateX(${-y / 20}deg) rotateY(${
            x / 10
          }deg) scale(1.02)`
          card.style.setProperty("--x", `${x}px`)
          card.style.setProperty("--y", `${y}px`)
        }}
        onMouseLeave={(e) => {
          if (isTouchDevice) return
          const card = e.currentTarget
          card.style.transform = "rotateX(0deg) rotateY(0deg)"
        }}
      >
        <OptionalLink
          href={imdbID}
          condition={!disableLink}
          className={classes.link}
        >
          {poster ? (
            <Image
              src={poster}
              alt={title}
              width='378'
              height='567'
              className={classes.image}
              priority={priority}
            />
          ) : (
            <div className={classes.placeholder} />
          )}
          <div className={classes.details}>
            <h3 className={classes.title}>
              {title} <span className={classes.year}>({year})</span>
            </h3>
            <i
              className={clsx(
                classes.type,
                `icon-${type === "movie" ? "video-camera" : "tv"}`
              )}
            />
          </div>
        </OptionalLink>
        <div className={classes.rating}>
          <Rating movieId={imdbID} />
        </div>
      </div>
    </div>
  )
}

const OptionalLink = ({
  children,
  href,
  condition,
  className,
}: {
  children: React.ReactNode
  href: string
  condition?: boolean
  className?: string
}) => {
  return href && condition ? (
    <Link href={href} className={clsx(classes.link, className)}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  )
}
