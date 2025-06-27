"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import classes from "./SecondarySearch.module.css"

export const SecondarySearch = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()

  return (
    <div className={classes.search}>
      <input
        value={search || ""}
        type='text'
        className={classes.input}
        placeholder='Search...'
        onChange={(e) => setSearch(e.target.value)}
        onKeyUp={(e) => {
          if (e.key !== "Enter") return
          const searchQuery = search.trim()
          if (searchQuery) {
            router.push(`/?s=${encodeURIComponent(searchQuery)}`)
            setSearch("")
          }
          e.currentTarget.blur()
        }}
      />
    </div>
  )
}
