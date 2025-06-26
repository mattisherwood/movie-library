import clsx from "clsx"
import { useEffect, useState } from "react"
import classes from "./Search.module.css"

type Props = {
  search: string
  setSearch: (search: string) => void
}

export const Search = ({ search, setSearch }: Props) => {
  const [inputValue, setInputValue] = useState(search)

  useEffect(() => {
    const handler = setTimeout(() => setSearch(inputValue), 300)
    return () => clearTimeout(handler)
  }, [inputValue, setSearch])

  useEffect(() => {
    setInputValue(search)
  }, [search])

  return (
    <div className={classes.root}>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Search...'
        className={classes.input}
      />
      {inputValue.length > 0 && (
        <button
          aria-label='clear'
          className={clsx(classes.clear, "icon-cross")}
          onClick={() => setInputValue("")}
        />
      )}
    </div>
  )
}
