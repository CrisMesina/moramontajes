

export const GoServices = () => {
  return (
    <>
        <div className="flex-row w-full h-full mt-10 mb-2">
          <h1 className="text-center font-extrabold text-4xl">Conoce nuestros Servicios!</h1>
            <div className="flex font-bold text-2xl">
                <div className="flex w-full mx-28 mt-18">
                    <p className="w-[450px] mt-32 text-xl">
                        A dia de hoy contamos con un minimo de 5 servicios activos 
                        que podemos otorgar. Con el tiempo puede que se incorporen mas servicios 
                        con los que podamos ayudarte en un futuro proximo.
                    </p>
                    <img id="imagen" src="/nosotros.jpg" className="md:ml-40 invisible md:visible w-0 md:w-[450px] rounded my-10"/>
                </div> 
            </div>
            
            <div className="w-full mb-28 mt-10 md:mt-0">
                <a href="/servicios/">
                    <button className="mx-48 border p-3 rounded-xl bg-slate-500 bg-gradient-to-br from-slate-500 to-slate-950 text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300">Ver Servicios</button>
                </a>
            </div>
        </div>
    </>
  )
}
