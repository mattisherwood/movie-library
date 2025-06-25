import Image from "next/image"
import Link from "next/link"
import { Container } from "../Container/Container"
import classes from "./Header.module.css"

export const Header = () => (
  <header className={classes.root}>
    <Container className={classes.container}>
      <Link href='/' className={classes.title}>
        <Image
          alt='Movie Library logo'
          src='/icon0.svg'
          width='40'
          height='40'
          priority
        />
        Movie Library
      </Link>
      <div className={classes.search}>
        <input type='text' className={classes.input} placeholder='Search...' />
      </div>
    </Container>
  </header>
)
