import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { Servicios } from "../pages/Servicios"
import { Contactanos } from "../pages/Contactanos"
import { Nosotros } from "../pages/Nosotros"
import { Piping } from "../pages/Piping"
import { Acero } from "../pages/Acero"
import { Transportadoras } from "../pages/Transportadoras"
import { CorteYPlegado } from "../pages/CorteYPlegado"

export const AppRouter = () => {
  return (
   <>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/servicios/" element={<Servicios/>}/>
        <Route path="/nosotros/" element={<Nosotros/>}/>
        <Route path="/contacto/" element={<Contactanos/>}/>
        <Route path="/servicios/piping/" element={<Piping/>}/>
        <Route path="/servicios/acero/" element={<Acero/>}/>
        <Route path="/servicios/transportadoras/" element={<Transportadoras/>}/>
        <Route path="/servicios/CCP/" element={<CorteYPlegado/>}/>
    </Routes>
   </> 
  )
}
