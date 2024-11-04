import React from 'react'
import { Footer } from './Footer'



export function Formulario() {
  return (
    <>
    <div className='w-full h-screen text-white'>
        <h1 className='text-center text-4xl my-5'>Contacta con nosotros!</h1>
        <form action="https://formsubmit.co/claudio.mesina@moramontajes.com" method='POST' className='w-full text-center '>
            <fieldset>
                <p className='my-10'>
                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                    </div>
                    <input type="text" name="name" id="nombre" className='w-96 h-10 text-center text-black' placeholder='Ingresa tu nombre' />
                </p>
                <p className='my-10'>
                    <div>
                        <label htmlFor="email">Correo Electronico:</label>
                    </div>
                    <input type="email" name="email" id="email" className='w-96 h-10 text-center text-black' placeholder='Ingresa tu correo electronico' />
                </p>
                <p className='my-10'>
                    <div>
                        <label htmlFor="comments">Que necesitas de nosotros?</label>
                    </div>
                    <textarea className='w-96 h-36 text-center text-black' name="comments" id="textarea" placeholder='Ingresa lo que necesites para poder contactarte..'></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" />  
                </p>
                
            </fieldset>
            <input type="hidden" name='_next' value="http://www.moramontajes.com/#contactanos/" />
            <input type="hidden" name='_captcha' value="false" />
            <input type="hidden" name='_template' value="table" />
        </form>
    </div>
   <div>
    <Footer/>
   </div>
    </>
  )
}
