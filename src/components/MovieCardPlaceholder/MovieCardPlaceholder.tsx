"use client"

import clsx from "clsx"
import classes from "./MovieCardPlaceholder.module.css"

type Props = {
  className?: string
}

export const MovieCardPlaceholder = ({ className }: Props) => (
  <div className={clsx(classes.root, className)}>
    <div className={classes.placeholder} />
  </div>
)
