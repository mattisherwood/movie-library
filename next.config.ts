import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://www.amazon.com/images/**"),
      new URL("https://m.media-amazon.com/images/**"),
      new URL("https://c.pxhere.com/photos/**"),
    ],
  },
}

export default nextConfig
