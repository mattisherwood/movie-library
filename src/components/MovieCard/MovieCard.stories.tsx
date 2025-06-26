import type { Meta, StoryObj } from "@storybook/nextjs"
import { howToTrainYourDragon } from "../../fixtures/filmDetails"
import { MovieCard } from "./MovieCard"

const meta: Meta<typeof MovieCard> = {
  title: "MovieCard",
  component: MovieCard,
  tags: ["autodocs"],
  argTypes: {
    imdbID: { control: "text" },
    title: { control: "text" },
    year: { control: "text" },
    poster: { control: "text" },
    type: {
      control: "select",
      options: ["movie", "series", "game"],
    },
    large: { control: "boolean" },
    priority: { control: "boolean" },
    disableLink: { control: "boolean" },
    className: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof MovieCard>

export const Default: Story = {
  args: {
    imdbID: howToTrainYourDragon.imdbID,
    title: howToTrainYourDragon.Title,
    year: howToTrainYourDragon.Year,
    poster: howToTrainYourDragon.Poster,
    type: howToTrainYourDragon.Type,
    large: false,
    priority: false,
    disableLink: false,
  },
}

export const Large: Story = {
  args: {
    ...Default.args,
    large: true,
  },
}

export const NoPoster: Story = {
  args: {
    ...Default.args,
    poster: undefined,
  },
}
