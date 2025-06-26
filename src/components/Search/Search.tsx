"use client"

import clsx from "clsx"
import { useEffect, useState } from "react"

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
    <div className='relative'>
      <span
        className='absolute left-0 top-1/2 -translate-y-1/2 pl-2 text-[16px] pointer-events-none font-icons'
        style={{
          fontFamily: "icons",
          fontStyle: "normal",
          fontWeight: "normal",
          fontVariant: "normal",
          textTransform: "none",
          lineHeight: 1,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
          content: '"\\e986"',
        }}
        aria-hidden='true'
      >
        {"\ue986"}
      </span>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Search...'
        className={clsx(
          "w-full pl-5 pr-1 py-1 rounded-full border border-[var(--darkGray)] bg-[rgba(var(--black-rgb),0.8)] text-base transition-colors",
          "focus:outline-none focus:ring-1 focus:ring-[var(--primary)]",
          "hover:bg-[rgba(var(--black-rgb),0.7)]"
        )}
      />
      {inputValue.length > 0 && (
        <button
          aria-label='clear'
          className={clsx(
            "absolute right-[var(--spacing)] top-1/2 -translate-y-1/2 cursor-pointer border-0 bg-none rounded-r-full p-[var(--spacing)] flex justify-center items-center min-w-[44px] icon-cross",
            "hover:bg-[rgba(var(--white-rgb),0.21)]"
          )}
          onClick={() => setInputValue("")}
        />
      )}
    </div>
  )
}
