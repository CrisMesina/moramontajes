import React from 'react'
import { Footer } from './Footer'

export const Servicios = () => {
  return (
    <>
    <div className="flex flex-row ms:flex-wrap w-full pb-2 mt-20 text-white">
        <div className='w-full h-96'>
            <div className='w-full' >
                <h1 className='text-center font-extrabold text-6xl'>Servicios!</h1>
                <p className='text-center my-5 text-2xl'>Aqui podras encontrar todos nuestros servicios disponibles!</p>
            </div>
            <div  className='w-full text-center'>
                <ul className='w-full inline-block list-decimal'>
                   <li className='my-2' >
                        <a href="/moramontajes/#servicios/Piping/" className='mx-2  hover:text-blue-700' >▶ Piping en Acero Inoxidable y Acero Carbono</a>
                   </li>
                   <li className='my-2' >
                        <a href="/moramontajes/#servicios/Acero/" className='mx-2  hover:text-blue-700' >▶ Estructuras y Plataformas de Acero</a>
                   </li>
                   <li className='my-2' >
                        <a href="/moramontajes/#servicios/Transportadores/" className='mx-2  hover:text-blue-700' >▶ Transportadores de Banda</a>
                    </li>
                   <li className='my-2' >                    
                        <a href="/moramontajes/#servicios/Caldeceria/" className='mx-2  hover:text-blue-700' >▶ Caldeceria, Corte y plegados</a>
                    </li>
                   <li className='my-2' >
                        <a href="/moramontajes/#servicios/CortesCNC/" className='mx-2 hover:text-blue-700' >▶ Servicios de Corte CNC</a>
                   </li>
                </ul>
            </div>
        </div>
    </div>
    <Footer/>

    </>
    )
}
