import { Contact } from "../Components/Contact"
import { Hero } from "../Components/Hero"
import { NavBar } from "../Components/NavBar"
import { Projects } from "../Components/Projects"
import { Skills } from "../Components/Skills"

export const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Projects/>
      <Contact/>
    </>
  )
}
