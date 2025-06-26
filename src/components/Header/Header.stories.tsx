import type { Meta, StoryObj } from "@storybook/nextjs"
import Image from "next/image"
import { Header as HeaderComponent } from "./Header"

const meta: Meta<typeof HeaderComponent> = {
  title: "Organisms/Header",
  component: HeaderComponent,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
}

export default meta

type Story = StoryObj<typeof HeaderComponent>

export const Header: Story = {
  args: {
    logo: (
      <Image
        alt='Movie Library logo'
        src='/icon0.svg'
        width='40'
        height='40'
        priority
      />
    ),
  },
}
