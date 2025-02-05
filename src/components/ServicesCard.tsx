import React from "react";

interface ServiciosProps{
    title: string,
    href: string,
    imgURL: string,
}

const ServicesCard:React.FC<ServiciosProps> = ({title, href, imgURL}) =>{


    return(
        <>
                <div className="text-center mt-2 h-auto">
                    <div className="border w-60 h-96 rounded-xl border-slate-950 ">
                        <div>
                            <img src={imgURL}  className="mx-auto mt-20"/>
                        </div>
                        <div>
                            <h3 className="font-extrabold text-2xl mt-10">{title}</h3>
                        </div>
                        <a href={href}>
                            <button className="border mt-5 p-4 focus:outline-none focus:ring-2 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-500 hover:bg-gradient-to-bl hover:from-slate-500 hover:to-slate-950 text-white">Ver mas</button>
                        </a>
                    </div>
                </div>
        </>
    )
}

export default ServicesCard