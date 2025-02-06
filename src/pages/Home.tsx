import { About } from "../components/About"
import { Footer } from "../components/Footer"
import { GoServices } from "../components/GoServices"
import { Hero } from "../components/Hero"
import { Nav } from "../components/Nav"

export const Home = () => {
  return (
    <>
        <div className="w-full md:w-full sm:w-screen phone:w-screen phone-sm:w-[300px]">
          <Nav/>
          <Hero/>
          <GoServices/>
          <About/>
          <Footer/>
        </div>
    </>
  )
}
