import type { Meta, StoryObj } from "@storybook/nextjs"
import { Rating as RatingComponent } from "./Rating"

const meta: Meta<typeof RatingComponent> = {
  title: "Atoms/Rating",
  component: RatingComponent,
  tags: ["autodocs"],
  argTypes: {
    movieId: { control: "text" },
  },
}

export default meta

type Story = StoryObj<typeof RatingComponent>

export const Rating: Story = {
  args: {
    movieId: "tt0892769",
  },
}
