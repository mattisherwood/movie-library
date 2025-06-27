"use client"

import clsx from "clsx"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { Filters } from "../Filters/Filters"
import { Results } from "../Results/Results"
import { Search } from "../Search/Search"

const bokehs = [
  {
    color: "#583c87",
    top: "41%",
    left: "12%",
    animationDuration: "24s",
    animationDelay: "-16s",
    transformOrigin: "12vw 16vh",
    boxShadow: "40vmin 0 12.6726719022vmin currentColor",
  },
  {
    color: "#ffacac",
    top: "99%",
    left: "32%",
    animationDuration: "24.8s",
    animationDelay: "-5.4s",
    transformOrigin: "-19vw -11vh",
    boxShadow: "40vmin 0 8.0159200309vmin currentColor",
  },
  {
    color: "#ffacac",
    top: "98%",
    left: "15%",
    animationDuration: "25.3s",
    animationDelay: "-13.4s",
    transformOrigin: "-23vw -9vh",
    boxShadow: "40vmin 0 14.7059544739vmin currentColor",
  },
  {
    color: "#ffacac",
    top: "65%",
    left: "93%",
    animationDuration: "29.3s",
    animationDelay: "-6s",
    transformOrigin: "13vw -17vh",
    boxShadow: "40vmin 0 14.1147244609vmin currentColor",
  },
  {
    color: "#583c87",
    top: "26%",
    left: "40%",
    animationDuration: "23s",
    animationDelay: "-32.2s",
    transformOrigin: "25vw 15vh",
    boxShadow: "40vmin 0 8.1124979048vmin currentColor",
  },
  {
    color: "#583c87",
    top: "38%",
    left: "90%",
    animationDuration: "29.9s",
    animationDelay: "-18.2s",
    transformOrigin: "-5vw -24vh",
    boxShadow: "40vmin 0 10.9546959064vmin currentColor",
  },
  {
    color: "#e45a84",
    top: "96%",
    left: "59%",
    animationDuration: "30.8s",
    animationDelay: "-26.3s",
    transformOrigin: "-17vw 10vh",
    boxShadow: "-40vmin 0 8.2971011097vmin currentColor",
  },
  {
    color: "#e45a84",
    top: "49%",
    left: "21%",
    animationDuration: "10.5s",
    animationDelay: "-11s",
    transformOrigin: "15vw -16vh",
    boxShadow: "-40vmin 0 13.8690281188vmin currentColor",
  },
  {
    color: "#ffacac",
    top: "32%",
    left: "82%",
    animationDuration: "23.7s",
    animationDelay: "-19.3s",
    transformOrigin: "-7vw -21vh",
    boxShadow: "40vmin 0 12.3556982954vmin currentColor",
  },
  {
    color: "#ffacac",
    top: "76%",
    left: "33%",
    animationDuration: "31.8s",
    animationDelay: "-8.7s",
    transformOrigin: "6vw 7vh",
    boxShadow: "40vmin 0 12.6855668498vmin currentColor",
  },
  {
    color: "#ffacac",
    top: "15%",
    left: "42%",
    animationDuration: "15.4s",
    animationDelay: "-31.9s",
    transformOrigin: "9vw 10vh",
    boxShadow: "40vmin 0 10.6662208739vmin currentColor",
  },
  {
    color: "#e45a84",
    top: "81%",
    left: "54%",
    animationDuration: "16.3s",
    animationDelay: "-5.3s",
    transformOrigin: "23vw -2vh",
    boxShadow: "-40vmin 0 14.5771794857vmin currentColor",
  },
  {
    color: "#ffacac",
    top: "45%",
    left: "9%",
    animationDuration: "29.7s",
    animationDelay: "-19.2s",
    transformOrigin: "-4vw 1vh",
    boxShadow: "-40vmin 0 8.8077587152vmin currentColor",
  },
  {
    color: "#ffacac",
    top: "55%",
    left: "39%",
    animationDuration: "32.7s",
    animationDelay: "-25.9s",
    transformOrigin: "-22vw 10vh",
    boxShadow: "40vmin 0 7.012776817vmin currentColor",
  },
  {
    color: "#ffacac",
    top: "27%",
    left: "34%",
    animationDuration: "33.8s",
    animationDelay: "-20.5s",
    transformOrigin: "3vw -21vh",
    boxShadow: "40vmin 0 5.4733223518vmin currentColor",
  },
  {
    color: "#583c87",
    top: "74%",
    left: "32%",
    animationDuration: "27.6s",
    animationDelay: "-7.5s",
    transformOrigin: "24vw 15vh",
    boxShadow: "-40vmin 0 6.1082448461vmin currentColor",
  },
  {
    color: "#583c87",
    top: "9%",
    left: "68%",
    animationDuration: "11.5s",
    animationDelay: "-25.3s",
    transformOrigin: "16vw -20vh",
    boxShadow: "40vmin 0 13.6969078718vmin currentColor",
  },
  {
    color: "#e45a84",
    top: "57%",
    left: "20%",
    animationDuration: "17.5s",
    animationDelay: "-15.2s",
    transformOrigin: "16vw 1vh",
    boxShadow: "40vmin 0 12.9884570967vmin currentColor",
  },
  {
    color: "#583c87",
    top: "20%",
    left: "45%",
    animationDuration: "29s",
    animationDelay: "-26.8s",
    transformOrigin: "-16vw -8vh",
    boxShadow: "40vmin 0 10.034478888vmin currentColor",
  },
  {
    color: "#ffacac",
    top: "77%",
    left: "27%",
    animationDuration: "24.3s",
    animationDelay: "-3.5s",
    transformOrigin: "-5vw -18vh",
    boxShadow: "-40vmin 0 8.0374777753vmin currentColor",
  },
]

export const MovieFinder = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  // States
  const [search, setSearch] = useState<string>(searchParams.get("s") || "")
  const [results, setResults] = useState([])
  const [totalResults, setTotalResults] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [page, setPage] = useState(
    searchParams.get("p") ? Number(searchParams.get("p")) : 1
  )
  const [showFilters, setShowFilters] = useState(false)
  const [filterType, setFilterType] = useState<
    "movie" | "series" | "episode" | undefined
  >((searchParams.get("type") as "movie" | "series" | "episode") || undefined)
  const [filterYear, setFilterYear] = useState<number | undefined>(
    searchParams.get("year") ? Number(searchParams.get("year")) : undefined
  )
  const totalPages = Math.ceil(totalResults / 10)
  const activeFilterCount = Number(!!filterYear) + Number(!!filterType)

  // Update URL when state changes
  useEffect(() => {
    const params = new URLSearchParams()
    if (search) params.set("s", search)
    if (filterType) params.set("type", filterType)
    if (filterYear) params.set("year", String(filterYear))
    if (page > 1) params.set("p", String(page))
    else params.delete("p")

    router.replace(`?${params.toString()}`, { scroll: false })
  }, [search, filterType, filterYear, page])

  // Update state when URL search params change
  useEffect(() => {
    const newSearch = searchParams.get("s") || ""
    const newType = searchParams.get("type") as
      | "movie"
      | "series"
      | "episode"
      | undefined
    const newYear = searchParams.get("year")
      ? Number(searchParams.get("year"))
      : undefined
    const newPage = searchParams.get("p") ? Number(searchParams.get("p")) : 1
    setSearch(newSearch)
    setFilterType(newType)
    setFilterYear(newYear)
    setPage(newPage)
  }, [searchParams])

  // Update results when search, page, or filters change
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

  const updateFilterType = (type?: "movie" | "series" | "episode") => {
    setFilterType(type)
    setPage(1) // Reset to first page when filter changes
  }
  const updateFilterYear = (year?: number) => {
    setFilterYear(year)
    setPage(1) // Reset to first page when filter changes
  }

  return (
    <div className='relative'>
      <div
        className={clsx(
          "flex sticky top-[73px] flex-col items-center justify-center gap-1 p-2 transition-[min-height] duration-700 ease-[cubic-bezier(0.5,0,0.2,1)] bg-gradient-to-b from-[rgba(var(--gray-rgb),0.5)] to-[var(--darkGray)] backdrop-blur-[10px] bg-cover z-10 overflow-hidden",
          !search && "min-h-[300px]"
        )}
      >
        <div className='relative flex items-center justify-center gap-1'>
          <div className='relative'>
            <button
              className={clsx(
                "h-5 w-5 border-0 rounded-full cursor-pointer bg-[rgba(var(--darkGray-rgb),0.2)] flex items-center justify-center",
                showFilters && "bg-[rgba(var(--darkGray-rgb),0.6)]",
                "hover:bg-[rgba(var(--darkGray-rgb),0.4)]"
              )}
              aria-label='toggle filters'
              onClick={() => setShowFilters(!showFilters)}
            >
              <i className='icon-equalizer' />
            </button>
            {activeFilterCount > 0 && (
              <span className='absolute top-[-1rem] right-[-1rem] w-3 h-3 rounded-full bg-[var(--primary)] text-[var(--white)] flex items-center justify-center text-[0.8em] pointer-events-none'>
                {activeFilterCount}
              </span>
            )}
          </div>

          <Search search={search} setSearch={setSearch} />

          <span className='absolute left-full ml-2 overflow-visible whitespace-nowrap'>
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
        {bokehs.map((bokeh, index) => (
          <span
            key={index}
            className={clsx(
              "bokeh absolute w-[20vmin] h-[20vmin] rounded-[20vmin] -z-10 transition-opacity duration-3000 ease-in-out",
              search && "opacity-0"
            )}
            style={{
              color: bokeh.color,
              top: bokeh.top,
              left: bokeh.left,
              animationDuration: bokeh.animationDuration,
              animationDelay: bokeh.animationDelay,
              transformOrigin: bokeh.transformOrigin,
              boxShadow: bokeh.boxShadow,
            }}
          />
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
        <div className='sticky flex justify-center items-center bottom-0 z-10 bg-gradient-to-t from-[rgba(var(--black-rgb),1)] to-[rgba(var(--black-rgb),0)]'>
          <div className='flex gap-1 items-center rounded-t-[var(--borderRadius)] bg-[var(--black)] shadow-[0_0_10px_rgba(var(--black-rgb),0.5)]'>
            <button
              className={clsx(
                "h-[46px] w-[46px] border-0 rounded-[var(--borderRadius)] cursor-pointer bg-none prev"
              )}
              disabled={page <= 1}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            />
            {page} of {totalPages}
            <button
              className={clsx(
                "h-[46px] w-[46px] border-0 rounded-[var(--borderRadius)] cursor-pointer bg-none next"
              )}
              disabled={page >= totalPages}
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            />
          </div>
        </div>
      )}
    </div>
  )
}
