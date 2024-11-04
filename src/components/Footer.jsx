import React from 'react'
import contact from '../images/address-book.png'
import email from '../images/mail.png'
import numero from '../images/phone.png'
import ubication from '../images/map-pin.png'
import servicios from '../images/wrecking-ball.png'

export const Footer = () => {
  return (
    <footer id='contacto' className="flex flex-row ms:flex-wrap  text-sm bg-plomito">
        <div className="w-96 list-none text-white my-5 mx-5">
            <div className="flex justify-center">
                <img src={contact} className='w-6' alt="" />
                <h1 className="text-center">Contactanos</h1>
            </div>
            <li className="mx-5 my-5">
                <div className="flex flex-row w-6">
                    <img src={email} className='w-6' alt="Correos" />
                    <div className='flex flex-wrap text-xs'>
                        <div className='flex flex-row'>
                            <span className="mx-2" >jmora@moramontajes.com</span>                    
                        </div>
                        <div className='flex'>
                            <span className="mx-2" >Claudio.mesina@moramontajes.com</span>
                        </div>
                    </div>
                </div>

            </li>
            <li className="mx-5 my-5">
                <div className="flex">
                    <img src={numero} className='w-6' alt="Numero Telefonico" />

                    <div className='flex flex-wrap text-xs'>

                        <div className="flex">
                            <span className="mx-4"> +56 9 92278159</span>
                        </div>
                        <div className="flex">
                            <span className="mx-4"> +56 9 67316510</span>
                        </div>
                    </div>
                </div>
            </li>
            <li className="mx-5 my-5">
                <div className="flex">
                    <img src={ubication} alt="" className='w-6'/>
                    <div className='flex flex-wrap text-xs'>
                        <div className='flex'>
                            <span className="mx-2" > El Trapiche S/N Parcela N°1 </span>
                        </div>
                    </div>
                </div>
            </li>
        </div>
        <div id='xd' className="w-96 list-none text-white my-5 mx-5">
            <div className="flex justify-center">
                <img src={servicios} className='w-6' alt="" />
                <h1 className="text-center">Servicios</h1>
            </div>
        
            <div className='flex flex-row text-xs'>
                <div id='xd' className='w-64'>
                    <li className="mx-5 my-2">
                        <div className="flex">
                            <span className='text-lg'>▶</span>
                            <span className="mx-2" ><a href="/#servicios/Piping/" className="hover:text-blue-600">Piping en Acero Inoxidable y Acero Carbono</a></span>
                        </div>
                    </li>
                    <li className="mx-5 my-2">
                        <div className="flex">
                            <span className='text-lg'>▶</span>
                            <span className="mx-2" ><a href="/#servicios/Acero" className="hover:text-blue-600">Estructuras y Plataformas Acero</a></span>
                        </div>
                    </li>
                    <li className="mx-5 my-2">
                        <div className="flex">
                            <span className='text-lg'>▶</span>
                            <span className="mx-2" ><a href="/#servicios/Transportadores/" className="hover:text-blue-600">Transportadores de banda</a></span>
                        </div>
                    </li>
                    <li className="mx-5 my-2">
                        <div className="flex">
                            <span className='text-lg'>▶</span>
                            <span className="mx-2" ><a href="/#servicios/Caldeceria/" className="hover:text-blue-600">Caldeceria, Corte y Plegados</a></span>
                        </div>
                    </li>
                </div>
                <div id='xd' className='w-64'>
                    <li className="mx-5 my-2">
                        <div className="flex">
                            <span className='text-lg'>▶</span>
                            <span className="mx-2" ><a href="/#servicios/CortesCNC/" className="hover:text-blue-600">Servicios de Corte CNC</a></span>
                        </div>
                    </li>
                </div>
            </div>
        </div>
        <div className="w-96 list-none text-white my-5 mx-5">
            <div className="flex justify-center">
                <img src={contact} className='w-6' alt="" />
                <h1 className="text-center">Redes Sociales</h1>
            </div>
            <li className="mx-5 my-5">
                <div className="flex flex-row w-6">
                    <div className='flex flex-wrap text-xs'>
                        <div className='flex flex-row'>
                            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg>
                            <span className="mx-2 hover:text-blue-700" ><a href="https://www.instagram.com" target='_blank'>@MoraMontajes</a></span>                    
                        </div>

                    </div>
                </div>
            </li>
            <li className="mx-5 my-5">
                <div className="flex">
                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 2a1 1 0 0 1 .993 .883l.007 .117v4a1 1 0 0 1 -.883 .993l-.117 .007h-3v1h3a1 1 0 0 1 .991 1.131l-.02 .112l-1 4a1 1 0 0 1 -.858 .75l-.113 .007h-2v6a1 1 0 0 1 -.883 .993l-.117 .007h-4a1 1 0 0 1 -.993 -.883l-.007 -.117v-6h-2a1 1 0 0 1 -.993 -.883l-.007 -.117v-4a1 1 0 0 1 .883 -.993l.117 -.007h2v-1a6 6 0 0 1 5.775 -5.996l.225 -.004h3z" /></svg>
                        <div className='flex flex-wrap text-xs'>
                            <div className="flex">
                                <span className="mx-4 hover:text-blue-700"><a href="https://www.facebook.com" target='_blank'>MoraMontajes</a> </span>
                            </div>

                        </div>
                </div>
            </li>
        </div>
    </footer>
  )
}

