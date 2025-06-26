import type { Meta, StoryObj } from "@storybook/nextjs"
import { Footer as FooterComponent } from "./Footer"

const meta: Meta<typeof FooterComponent> = {
  title: "Organisms/Footer",
  component: FooterComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj<typeof FooterComponent>

export const Footer: Story = {}
