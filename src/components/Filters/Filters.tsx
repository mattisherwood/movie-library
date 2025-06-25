import clsx from "clsx"

import classes from "./Filters.module.css"

type FilterType = "movie" | "series" | "episode"

type Props = {
  showFilters: boolean
  filterType?: FilterType
  setFilterType: (filterType?: FilterType) => void
  filterYear?: number
  setFilterYear: (filterYear?: number) => void
}

export const Filters = ({
  showFilters,
  filterType,
  setFilterType,
  filterYear,
  setFilterYear,
}: Props) => (
  <div className={clsx(classes.root, showFilters && classes.active)}>
    <label className={classes.label}>
      Type:
      <select
        className={classes.select}
        onChange={(e) => setFilterType(e.target.value as FilterType)}
        defaultValue={filterType}
      >
        <option value=''>Any</option>
        <option value='movie'>Movie</option>
        <option value='series'>Series</option>
        <option value='episode'>Episode</option>
      </select>
    </label>

    <label className={classes.label}>
      Released:
      <select
        className={classes.select}
        onChange={(e) => {
          setFilterYear(e.target.value ? Number(e.target.value) : undefined)
        }}
        defaultValue={filterYear}
      >
        <option value=''>Any time</option>
        {Array.from(
          { length: new Date().getFullYear() + 5 - 1960 + 1 },
          (_, i) => 1960 + i
        ).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </label>
  </div>
)
