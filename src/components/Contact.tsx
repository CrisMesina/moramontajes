
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";

export const Contact = () => {
  return (
    <>
        <div className='w-full mt-28 sm:w-full md:w-full lg:w-full h-full'>
            <h1 className="text-center text-4xl font-extrabold">Contactanos</h1>
            <p className="text-center">Actualmente hay dos formas de contactarse con nosotros</p>
            <div className="grid grid-cols-1 md:grid-cols-2 my-20">
                <div className="w-96 xs:w-72 200:w-40 h-80 mx-auto mb-10 bg-slate-300 rounded-lg ">
                    <IoLogoWhatsapp className="w-24 h-24 mx-auto" fill="green"/>
                    <p className="text-center p-2 xs:p-1">Mediante whatsapp a los siguientes numeros</p>
                    <p className="text-center p-2 xs:p-0">+56 9 92278159</p>
                    <p className="text-center p-2 xs:p-0">+56 9 67316510</p>
                    <p className="text-center">
                        En caso de no ser respondido por ninguno de los dos numeros,
                        haga uso de el otro metodo de contacto.
                    </p>
                </div>
                <div className="w-96 xs:w-72 h-80 mx-auto bg-slate-300 rounded-lg">
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
