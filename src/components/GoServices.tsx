

export const GoServices = () => {
  return (
    <>
        <div className="flex-row w-full phone-sm:w-100 phone-md:w-[500px] phone-lg:w-[600px] md:w-full h-full mt-10 mb-2">
          <h1 className="text-center font-extrabold text-2xl">Conoce nuestros Servicios!</h1>
            <div className="flex font-bold text-2xl">
                <div className="flex w-full phone-sm:w-100 phone-md:w-[500px] phone-lg:w-[600px] md:w-full text-center mx-2 mt-18">
                    <p className="w-full mt-20 text-sm md:text-2xl">
                        A dia de hoy contamos con un minimo de 5 servicios activos 
                        que podemos otorgar. Con el tiempo puede que se incorporen mas servicios 
                        con los que podamos ayudarte en un futuro proximo.
                    </p>
                    <img id="imagen" src="/nosotros.jpg" className="md:ml-40 invisible md:visible w-0 md:w-[450px] rounded my-10"/>
                </div> 
            </div>
            
            <div className="w-full phone-sm:w-100 phone-md:w-[500px] phone-lg:w-[600px] mb-20 mt-10 md:mb-0 md:-mt-10">
                <a href="/servicios/">
                    <button className="mx-20 phone-sm:mx-32 phone-md:mx-44 phone-lg:mx-60 border p-3 rounded-xl bg-slate-500 bg-gradient-to-br from-slate-500 to-slate-950 text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300">Ver Servicios</button>
                </a>
            </div>
        </div>
    </>
  )
}
