import "../src/styles/globals.css"
import "../src/styles/structure.css"
import "../src/styles/typography.css"
import "../src/styles/variables.css"

import type { Preview } from "@storybook/nextjs"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
