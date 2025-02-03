
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";

export const Contact = () => {
  return (
    <>
        <div className='w-full mt-28 h-screen'>
            <h1 className="text-center text-4xl font-extrabold">Contactanos</h1>
            <p className="text-center">Actualmente hay dos formas de contactarse con nosotros</p>
            <div className="flex my-20">
                <div className="w-96 h-80 mx-auto bg-slate-300 rounded-lg ">
                    <IoLogoWhatsapp className="w-24 h-24 mx-auto" fill="green"/>
                    <p className="text-center p-2">Mediante whatsapp a los siguientes numeros</p>
                    <p className="text-center p-2">+56 9 92278159</p>
                    <p className="text-center p-2">+56 9 67316510</p>
                    <p className="text-center">
                        En caso de no ser respondido por ninguno de los dos numeros,
                        haga uso de el otro metodo de contacto.
                    </p>
                </div>
                <div className="w-96 mx-auto bg-slate-300 rounded-lg">
                    <MdMarkEmailUnread className="w-24 h-24 mx-auto"/>
                    <p className="text-center p-2">Mediante los dos siguientes correos</p>
                    <p className="text-center p-2">jmora@moramontajes.com</p>
                    <p className="text-center p-2">claudio.mesina@moramontajes.com</p>
                </div>
            </div>
        </div>
    </>
  )
}
