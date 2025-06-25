import Image from "next/image"
import Link from "next/link"
import { Container } from "../Container/Container"
import classes from "./Footer.module.css"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={classes.root}>
      <Container>
        <p>© Matt Isherwood {currentYear}</p>
        <p>
          Powered by{" "}
          <Link href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
            <Image
              className={classes.logo}
              src='/next.svg'
              alt='Next.js logo'
              width={80}
              height={16}
            />
          </Link>
        </p>
      </Container>
    </footer>
  )
}
