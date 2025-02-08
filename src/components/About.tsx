import { FaRegEye, FaQuestion } from "react-icons/fa"
import { GiHiking } from "react-icons/gi";


export const About = () => {
  return (
    <>
        <div className="flex-row w-full phone-sm:w-100 phone-md:w-[500px] phone-lg:w-[600px] md:w-full h-full mt-40">
          <h1 className="text-center font-extrabold text-4xl">Sobre Nosotros</h1>
          <div className="flex font-bold text-xl">
            <div className="flex mt-18">
              <p className="w-full phone-sm:w-100 phone-md:w-[500px] phone-lg:w-[600px] md:w-full text-center p-1 mt-16">
                Somos una empresa especilizada en fabricación y montaje de equipos de procesos, 
                destinados a la industria alimenticia, 
                centrales hidroeléctricas de paso, mineria y química.
              </p>
              <div className="">
                <img src="/logo.png" className="invisible w-0"/>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-96 w-72 phone-sm:w-100 phone-md:w-[500px] phone-lg:w-[600px] mt-10 gap-40">
          <div className="border rounded w-64 phone-sm:w-80 phone-md:w-96 phone-lg:w-[400px] phone-lg:mx-24 mx-4 phone-sm:mx-10 phone-md:mx-16 md:mx-8">
            <div>
              <FaQuestion className="mx-auto h-14 w-14 mt-2"/>
            </div>
              <div>
                  <h3 className="text-center font-bold text-2xl">Mision</h3>
                  <p className="text-center w-64 phone-sm:w-80 phone-md:w-96 p-2 text-sm">Nuestro principal objetivo es satisfacer los requerimientos de nuestros clientes, garantizando la calidad del producto y la seguridad durante todo el preceso productivo y durante la vida útil de nuestros equipos</p>
              </div>
          </div>
          <div className="border rounded w-64 phone-sm:w-80 phone-md:w-96 phone-lg:w-[400px] phone-lg:mx-24 mx-4 phone-sm:mx-10 phone-md:mx-16 md:ml-16">
            <div>
              <FaRegEye className="mx-auto h-14 w-14 mt-2"/>
            </div>
              <div>
                  <h3 className="text-center font-bold text-2xl">Vision</h3>
                  <p className="text-center w-64 phone-sm:w-80 phone-md:w-96 p-2 text-sm">Lo que buscamos es poder facilitar el trabajo en algunas areas, tales como industrias alimenticias, centrales hidroeléctricas de paso, mineria y quimica</p>
              </div>
          </div>
          <div className="border rounded w-64 phone-sm:w-80 phone-md:w-96 phone-lg:w-[400px] phone-lg:mx-24 mx-4 phone-sm:mx-10 phone-md:mx-16 md:mr-32">
            <div>
              <GiHiking className="mx-auto h-14 w-14 mt-2"/>
            </div>
              <div>
                  <h3 className="text-center font-bold text-2xl">Proposito</h3>
                  <p className="text-center w-64 phone-sm:w-80 phone-md:w-96 p-2 text-sm">Nuestro proposito es la busqueda de la reduccion de tiempo en los trabajos. Poder lograr comodidad con nuestros servicios.</p>
              </div>
          </div>
        </div>
     
    </>
  )
}
