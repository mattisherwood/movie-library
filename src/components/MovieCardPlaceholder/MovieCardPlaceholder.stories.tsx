import type { Meta, StoryObj } from "@storybook/nextjs"
import { Container } from "../Container/Container"
import { MovieCardPlaceholder } from "./MovieCardPlaceholder"

const meta: Meta<typeof MovieCardPlaceholder> = {
  title: "MovieCardPlaceholder",
  component: MovieCardPlaceholder,
  tags: ["autodocs"],
  argTypes: {
    className: { control: false },
  },
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj<typeof MovieCardPlaceholder>

export const Single: Story = {
  render: () => (
    <Container>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "calc(var(--spacing) * 2)",
          paddingBlock: "calc(var(--spacing) * 4)",
        }}
      >
        <MovieCardPlaceholder />
      </div>
    </Container>
  ),
}

export const Multiple: Story = {
  render: () => (
    <Container>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "calc(var(--spacing) * 2)",
          paddingBlock: "calc(var(--spacing) * 4)",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <MovieCardPlaceholder key={index} />
        ))}
      </div>
    </Container>
  ),
}
