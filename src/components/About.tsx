import { FaRegEye, FaQuestion } from "react-icons/fa"
import { GiHiking } from "react-icons/gi";


export const About = () => {
  return (
    <>
        <div className="flex-row w-full h-full mt-40">
          <h1 className="text-center font-extrabold text-4xl">Sobre Nosotros</h1>
          <div className="flex font-bold text-2xl">
            <div className="flex mx-28 mt-18">
              <p className="w-[450px] mt-16">
                Somos una empresa especilizada en fabricación y montaje de equipos de procesos, 
                destinados a la industria alimenticia, 
                centrales hidroeléctricas de paso, mineria y química.
              </p>
              <div className="">
                <img src="/logo.png" className="md:ml-40 invisible md:visible w-0 md:w-72"/>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-40  p-20">
          <div className="border rounded w-72">
            <div>
              <FaQuestion className="mx-auto h-14 w-14 mt-2"/>
            </div>
              <div>
                  <h3 className="text-center font-bold text-2xl">Mision</h3>
                  <p className="text-center w-64 mx-auto">Nuestro principal objetivo es satisfacer los requerimientos de nuestros clientes, garantizando la calidad del producto y la seguridad durante todo el preceso productivo y durante la vida útil de nuestros equipos</p>
              </div>
          </div>
          <div className="border rounded w-72">
            <div>
              <FaRegEye className="mx-auto h-14 w-14 mt-2"/>
            </div>
              <div>
                  <h3 className="text-center font-bold text-2xl">Vision</h3>
                  <p className="text-center w-64 mx-auto">Lo que buscamos es poder facilitar el trabajo en algunas areas, tales como industrias alimenticias, centrales hidroeléctricas de paso, mineria y quimica</p>
              </div>
          </div>
          <div className="border rounded w-72">
            <div>
              <GiHiking className="mx-auto h-14 w-14 mt-2"/>
            </div>
              <div>
                  <h3 className="text-center font-bold text-2xl">Proposito</h3>
                  <p className="text-center w-64 mx-auto">Nuestro proposito es la busqueda de la reduccion de tiempo en los trabajos. Poder lograr comodidad con nuestros servicios.</p>
              </div>
          </div>
        </div>
     
    </>
  )
}
