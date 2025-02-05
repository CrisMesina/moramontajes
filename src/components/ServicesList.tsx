import ServicesCard from "./ServicesCard"


const data = [
    {
        id: 1,
        name: "Piping",
        href: "/servicios/piping",
        imgURL: "/iconPiping.svg"
    },
    {
        id: 2,
        name: "Plataformas de Acero",
        href: "/servicios/acero",
        imgURL: "/steelPlatform.svg"
    },
    {
        id: 3,
        name: "Tranpostadores de Banda",
        href: "/servicios/transportadoras",
        imgURL: "/iconTranporteBanda.svg"
    },
    {
        id: 4,
        name: "Corte y plegado",
        href: "/servicios/CCP",
        imgURL: "/iconPlegado.svg"
    },
   
]

export const ServicesList = () => {
  return (
    <>
        <div className="h-auto mx-32 phone:mx-0 phone-sm:mx-10 sm:mx-32 md:mx-32 my-10 grid grid-cols-1 md:grid-cols-4 sm:grid-cols-1">
            {data.map((data)=>(
                <div>
                    <ServicesCard
                        key={data.id}
                        title={data.name}
                        href={data.href}
                        imgURL={data.imgURL}
                    />
                </div>
            ))}
        </div>
    </>
  )
}
