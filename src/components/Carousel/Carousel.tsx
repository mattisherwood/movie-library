import clsx from "clsx"
import classes from "./Carousel.module.css"

type Props = {
  children: React.ReactNode
  counteractGutter?: boolean
  className?: string
}

export const Carousel = ({ children, counteractGutter, className }: Props) => {
  return (
    <div
      className={clsx(
        classes.root,
        counteractGutter && classes.counteractGutter,
        className
      )}
    >
      <div className={classes.slides}>{children}</div>
    </div>
  )
}
