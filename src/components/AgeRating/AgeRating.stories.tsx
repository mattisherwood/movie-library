import type { Meta, StoryObj } from "@storybook/nextjs"
import { AgeRating } from "./AgeRating"

const meta: Meta<typeof AgeRating> = {
  title: "AgeRating",
  component: AgeRating,
  tags: ["autodocs"],
}
export default meta

type Story = StoryObj<typeof AgeRating>

export const Default: Story = {
  args: {
    ageRating: "PG",
  },
  argTypes: {
    ageRating: {
      control: "select",
      options: [
        "U",
        "PG",
        "12A",
        "12",
        "15",
        "18",
        "R18",
        "N/A",
        "PG-13",
        "R",
        "etc.",
      ],
    },
  },
}

export const AllRatings: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
      }}
    >
      <AgeRating ageRating='U' />
      <AgeRating ageRating='PG' />
      <AgeRating ageRating='12A' />
      <AgeRating ageRating='12' />
      <AgeRating ageRating='15' />
      <AgeRating ageRating='18' />
      <AgeRating ageRating='R18' />
      <AgeRating ageRating='N/A' />
      <AgeRating ageRating='PG-13' />
      <AgeRating ageRating='R' />
      <AgeRating ageRating='etc.' />
    </div>
  ),
}
