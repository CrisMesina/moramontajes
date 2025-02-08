import type React from "react"
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { ImCancelCircle } from "react-icons/im"

interface MenuItem {
  label: string
  href: string
}

const menuItems: MenuItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios/" },
  { label: "Sobre Nosotros", href: "/nosotros/" },
  { label: "Contactenos", href: "/contacto/" },
]

export const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-slate-300 shadow-md z-50 w-full sm:w-full md:h-20">
      <div className="max-w-7xl mx-auto px-1">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-gray-800">
              <img src="/logo.png" className="w-12 " alt="" />
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-4 xs:ml-6 sm:ml-10 flex items-baseline space-x-2 xs:space-x-3 sm:space-x-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-2 py-2 rounded-md font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-1 rounded-md text-black hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <ImCancelCircle className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5 " />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

