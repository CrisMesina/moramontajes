import React from "react";

interface ServiciosProps{
    title: string,
    href: string,
    imgURL: string,
}

const ServicesCard:React.FC<ServiciosProps> = ({title, href, imgURL}) =>{


    return(
        <>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 w-full mx-auto text-center mb-3">
                <div className="grid rounded-tr-lg rounded-br-lg h-[450px]">
                    <div className="">
                        <div className="w-64 bg-pink-200 mx-auto my-10 shadow-2xl rounded-lg overflow-hidden group  transition-all duration-300 hover:shadow-lg  hover:scale-105 flex flex-col">
                            <div id="ServicesCards" className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 h-64 ">
                                <div className="relative my-24">
                                    <span className="text-3xl font-extrabold opacity-100">{title}</span>
                                    <div className="mx-28">
                                        <a href={href}>
                                            <svg xmlns="http://www.w3.org/2000/svg" 
                                                viewBox="0 0 24 24" 
                                                fill="black" 
                                                stroke="black" 
                                                stroke-linecap="round" 
                                                stroke-linejoin="round" 
                                                width="32" 
                                                height="32" 
                                                stroke-width="2"> 
                                                <path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"></path> 
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <a href="" className="bg-white" >
                                <img src={imgURL} className="w-64" alt="" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesCard