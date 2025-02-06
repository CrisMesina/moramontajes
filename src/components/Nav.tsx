import type React from "react"
import { useState } from "react"
import { FiMenu } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
// Definimos una interfaz para los elementos del menú
interface MenuItem {
  label: string
  href: string
}

// Definimos los elementos del menú
const menuItems: MenuItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios/" },
  { label: "Sobre Nosotros", href: "/nosotros/" },
  { label: "Contactenos", href: "/contacto/" },
]

export const Nav: React.FC = () => {
  // Estado para controlar la visibilidad del menú en dispositivos móviles
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  // Función para alternar la visibilidad del menú
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 bg-slate-300 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold text-gray-800">
              <img src="/logo.png" className="w-16" alt="" />
            </a>
          </div>

          {/* Menú para pantallas medianas y grandes */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Botón de menú para dispositivos móviles */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? <ImCancelCircle className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
    </>
  )
}


