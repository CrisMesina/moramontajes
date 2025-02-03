import { Footer } from "../components/Footer"
import { Nav } from "../components/Nav"
import { ServicesList } from "../components/ServicesList"


export const Servicios = () => {
  return (
    <>
        <Nav/>
        <h1 className="text-center font-extrabold text-6xl mb-4 mt-24">Servicios</h1>
        <ServicesList/>
        <Footer/>
    </>
  )
}
