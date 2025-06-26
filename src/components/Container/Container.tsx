import clsx from "clsx"
import { ReactNode } from "react"

type Props = {
  children: ReactNode
  size?: "small" | "medium" | "large"
  className?: string
}

export const Container = ({ children, size = "large", className }: Props) => (
  <div
    className={clsx(
      "w-full max-w-[1200px] mx-auto px-2 sm:px-4",
      size === "small" && "max-w-[800px]",
      size === "large" && "max-w-[1600px]",
      className
    )}
  >
    {children}
  </div>
)
