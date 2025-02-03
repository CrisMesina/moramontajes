import { About } from "../components/About"
import { Footer } from "../components/Footer"
import { GoServices } from "../components/GoServices"
import { Hero } from "../components/Hero"
import { Nav } from "../components/Nav"

export const Home = () => {
  return (
    <>
        <Nav/>
        <Hero/>
        <About/>
        <GoServices/>
        <Footer/>
    </>
  )
}
