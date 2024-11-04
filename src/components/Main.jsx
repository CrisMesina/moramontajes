import React from 'react'
import Logo from '../images/logo.png'


export const Main = () => {
  return (
    <div className="flex flex-row ms:flex-wrap w-full h-96 pb-2 mx-auto ">
      <div class="flex sm:flex-wrap place-content-between my-auto mx-auto text-white">
        <img src={Logo} className='my-auto w-96 animate-fade-down animate-duration-[3000ms]' alt="" />
      </div>
    </div>
  )
}

