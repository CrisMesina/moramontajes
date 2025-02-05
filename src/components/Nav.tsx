import { RxHamburgerMenu } from "react-icons/rx"

export const Nav = () => {
  return (
    <>
        <nav className="fixed top-0 left-0 right-0 z-10 text-center opacity-95 bg-slate-300">
            <div className="md:w-screen sm:w-full lg:w-full flex flex-wrap justify-between p-4 phone:w-96 w-screen">
                <a href="/">
                    <img src="/logo.png" className="w-16" alt="" />
                </a>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 mt-2 w-12 h-12 justify-center text-sm text-black rounded-lg md:hidden focus:outline focus:ring-2" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Abrir Menu Principal</span>
                    <RxHamburgerMenu className="w-8 h-8"/>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium text-lg flex flex-col p-4 md:p-0 mt-4 rounded-lg border md:border-0 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 bg-slate-300">
                        <li><a href="/" className="block py-4 px-3 rounded text-black hover:bg-gray-500 md:hover:bg-transparent md:hover:text-blue-700" aria-current="page">Inicio</a></li>
                        <li><a href="/servicios/" className="block py-2 px-3 my-2 text-black rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-blue-700">Servicios</a></li>
                        <li><a href="/nosotros/" className="block py-2 px-3 my-2 text-black rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-blue-700">Sobre Nosotros</a></li>
                        <li><a href="/contacto/" className="block py-2 px-3 my-2 text-black rounded hover:bg-gray-400 md:hover:bg-transparent md:hover:text-blue-700">Contactanos</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}
