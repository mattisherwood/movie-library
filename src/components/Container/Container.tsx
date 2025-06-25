import clsx from "clsx"
import { ReactNode } from "react"
import classes from "./Container.module.css"

type Props = {
  children: ReactNode
  size?: "small" | "medium" | "large"
  className?: string
}

export const Container = ({ children, size = "large", className }: Props) => (
  <div className={clsx(classes.container, classes[size], className)}>
    {children}
  </div>
)
