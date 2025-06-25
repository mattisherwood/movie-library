"use client"

import clsx from "clsx"
import { useEffect, useState } from "react"
import { Filters } from "../Filters/Filters"
import { Results } from "../Results/Results"
import { Search } from "../Search/Search"
import classes from "./MovieFinder.module.css"

export const MovieFinder = () => {
  const [search, setSearch] = useState<string>("")
  const [results, setResults] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const [filterType, setFilterType] = useState<"movie" | "series" | "episode">()
  const [filterYear, setFilterYear] = useState<number | undefined>()
  const totalPages = Math.ceil(totalResults / 10)
  const activeFilterCount = Number(!!filterYear) + Number(!!filterType)

  const updateFilterType = (type?: "movie" | "series" | "episode") => {
    setFilterType(type)
    setPage(1) // Reset to first page when filter changes
  }
  const updateFilterYear = (year?: number) => {
    setFilterYear(year)
    setPage(1) // Reset to first page when filter changes
  }
  useEffect(() => {
    if (!search) {
      setResults([])
      setTotalResults(0)
      setError(null)
      return
    }
    setLoading(true)
    setError(null)
    const url = new URL("/api/movies", window.location.origin)
    url.searchParams.set("s", search)
    if (filterType) url.searchParams.set("type", filterType)
    if (filterYear) url.searchParams.set("year", String(filterYear))
    url.searchParams.set("page", String(page))
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setResults(data.Search)
          setTotalResults(data.totalResults)
        } else {
          setError(data.Error || "No results found.")
          setResults([])
          setTotalResults(0)
        }
      })
      .catch(() => setError("Failed to fetch results."))
      .finally(() => setLoading(false))
  }, [search, page, filterType, filterYear])

  return (
    <div className={classes.root}>
      <div className={clsx(classes.inputStage, search && classes.active)}>
        <div className={classes.searchHolder}>
          <div className={classes.filterToggle}>
            <button
              className={clsx(
                classes.filterButton,
                showFilters && classes.active
              )}
              aria-label='toggle filters'
              onClick={() => setShowFilters(!showFilters)}
            >
              <i className='icon-equalizer' />
            </button>
            {activeFilterCount > 0 && (
              <span className={classes.activeFilterCount}>
                {activeFilterCount}
              </span>
            )}
          </div>

          <Search search={search} setSearch={setSearch} />

          <span className={classes.totalResults}>
            {totalResults > 0 && `${totalResults} Results`}
          </span>
        </div>
        <Filters
          showFilters={showFilters}
          filterType={filterType}
          setFilterType={updateFilterType}
          filterYear={filterYear}
          setFilterYear={updateFilterYear}
        />
        {Array(20)
          .fill(0)
          .map((_, index) => (
            <span key={index} className={classes.bokeh} />
          ))}
      </div>

      {search && (
        <Results
          results={results}
          loading={loading}
          error={error}
          isLastPage={page === totalPages}
        />
      )}

      {totalPages > 1 && (
        <div className={classes.footer}>
          <div className={classes.pagination}>
            <button
              className={clsx(classes.paginationButton, classes.prev)}
              disabled={page <= 1}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            />
            {page} of {totalPages}
            <button
              className={clsx(classes.paginationButton, classes.next)}
              disabled={page >= totalPages}
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            />
          </div>
        </div>
      )}
    </div>
  )
}
