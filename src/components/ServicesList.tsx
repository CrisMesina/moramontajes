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
        name: "Corte y plegado Corte CNC",
        href: "/servicios/CCP",
        imgURL: "/iconPlegado.svg"
    },
   
]

export const ServicesList = () => {
  return (
    <>
        <div className="h-auto w-full my-10 grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4">
            {data.map((data)=>(
                <div className="mx-auto">
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
