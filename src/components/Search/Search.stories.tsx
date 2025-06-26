import type { Meta, StoryObj } from "@storybook/nextjs"
import { useState } from "react"
import { Search as SearchComponent } from "./Search"

const meta: Meta<typeof SearchComponent> = {
  title: "Molecules/Search",
  component: SearchComponent,
  tags: ["autodocs"],
  argTypes: {
    search: { control: "text" },
    setSearch: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof SearchComponent>

export const Search: Story = {
  render: (args) => {
    const [search, setSearch] = useState(args.search ?? "")
    return <SearchComponent search={search} setSearch={setSearch} />
  },
  args: {
    search: "",
  },
}
