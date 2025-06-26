import type { Meta, StoryObj } from "@storybook/nextjs"
import { RecentlyRated as RecentlyRatedComponent } from "./RecentlyRated"

const meta: Meta<typeof RecentlyRatedComponent> = {
  title: "Organisms/RecentlyRated",
  component: RecentlyRatedComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj<typeof RecentlyRatedComponent>

export const RecentlyRated: Story = {
  render: () => <RecentlyRatedComponent />,
}
