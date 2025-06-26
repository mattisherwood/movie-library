import type { Meta, StoryObj } from "@storybook/nextjs"
import { howToTrainYourDragon } from "../../fixtures/filmDetails"
import { MovieDetails as MovieDetailsComponent } from "./MovieDetails"

const meta: Meta<typeof MovieDetailsComponent> = {
  title: "Organisms/MovieDetails",
  component: MovieDetailsComponent,
  tags: ["autodocs"],
  argTypes: {
    movie: { control: false },
  },
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj<typeof MovieDetailsComponent>

export const MovieDetails: Story = {
  args: {
    movie: howToTrainYourDragon,
  },
}
