import type { Meta, StoryObj } from "@storybook/nextjs"
import { howToTrainYourDragon } from "../../fixtures/filmDetails"
import { MovieDetailPage as MovieDetailPageComponent } from "./MovieDetailPage"

const meta: Meta<typeof MovieDetailPageComponent> = {
  title: "Templates/MovieDetailPage",
  component: MovieDetailPageComponent,
  tags: ["autodocs"],
  argTypes: {
    movie: { control: false },
  },
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj<typeof MovieDetailPageComponent>

export const MovieDetailPage: Story = {
  args: {
    movie: howToTrainYourDragon,
  },
}
