import type { Meta, StoryObj } from "@storybook/nextjs"
import { Container } from "../Container/Container"
import { Carousel as CarouselComponent } from "./Carousel"

type ComponentProps = Parameters<typeof CarouselComponent>[0]

const meta: Meta<ComponentProps & { slideCount: number }> = {
  title: "Molecules/Carousel",
  component: CarouselComponent,
  tags: ["autodocs"],
  argTypes: {
    counteractGutter: {
      control: "boolean",
      description: "Removes gutter from the carousel container",
    },
    children: { control: false },
    slideCount: {
      control: {
        type: "range",
        min: 1,
        max: 10,
        step: 1,
      },
      description: "Number of slides to display in the carousel",
      table: { category: "Custom" },
    },
  },
  parameters: {
    layout: "fullscreen",
  },
}
export default meta

type Story = StoryObj<typeof meta>

export const Carousel: Story = {
  args: {
    counteractGutter: true,
    slideCount: 6,
  },
  render: (args) => (
    <div style={{ paddingBlock: "calc(var(--spacing) * 4)" }}>
      <Container>
        <CarouselComponent {...args}>
          {Array.from({ length: args.slideCount }, (_, index) => (
            <div
              key={index}
              style={{
                width: 200,
                height: 300,
                backgroundColor: `hsl(${(index * 90) % 360}, 70%, 70%)`,
                display: "flex",
                flexDirection: "column",
                gap: 16,
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
                color: "#fff",
              }}
            >
              <div style={{ width: 200, height: 200 }} />
              Slide {index + 1}
            </div>
          ))}
        </CarouselComponent>
      </Container>
    </div>
  ),
}
