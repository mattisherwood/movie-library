import { Container } from "../Container/Container"
import classes from "./Footer.module.css"

export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={classes.root}>
      <Container>
        <p>© Matt Isherwood {currentYear}</p>
      </Container>
    </footer>
  )
}
