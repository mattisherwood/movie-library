import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import "../styles/globals.css"
import "../styles/structure.css"
import "../styles/typography.css"
import "../styles/variables.css"

const notoSans = Noto_Sans({
  weight: ["100", "400", "700"],
  variable: "--font-noto-sans",
  subsets: ["latin"],
})
export const metadata: Metadata = {
  title: "Movie Library",
  description:
    "A quick technical excercise in react, NextJS, typescript, CSS modules & RestAPI by Matt Isherwood",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='apple-mobile-web-app-title' content='Movie Library' />
        <link
          rel='icon'
          type='image/png'
          href='/favicon-96x96.png'
          sizes='96x96'
        />
        <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='manifest' href='/manifest.json' />
      </head>
      <body className={notoSans.variable}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
