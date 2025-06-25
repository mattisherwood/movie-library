import clsx from "clsx"
import classes from "./Search.module.css"

type Props = {
  search: string
  setSearch: (search: string) => void
}

export const Search = ({ search, setSearch }: Props) => (
  <div className={classes.root}>
    <input
      type='text'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder='Search...'
      className={classes.input}
    />
    {search.length > 0 && (
      <button
        aria-label='clear'
        className={clsx(classes.clear, "icon-cross")}
        onClick={() => setSearch("")}
      />
    )}
  </div>
)
