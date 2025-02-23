
import { MdMarkEmailUnread } from "react-icons/md";
import { RiContactsBook2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer id='contacto' className="flex flex-row w-full phone-sm:w-100 min-h-full phone-md:w-[500px] phone-lg:w-[600px] md:w-full text-sm mt-10 bg-slate-600">
        <div className="w-full list-none text-white my-5">
            <div className="flex justify-center">
                <RiContactsBook2Fill className='w-4 h-4'/>
                <h1 className="text-center">Contactanos</h1>
            </div>
            <li className="mx-5 my-5">
                <div className="flex flex-row w-6">
                    <div> 
                        <MdMarkEmailUnread className="w-4 h-4"/>
                    </div>
                    <div className='flex flex-wrap text-xs'>  
                       <div>
                            <div className='flex flex-row'>
                                <span className="mx-2" >jmora@moramontajes.com</span>                    
                            </div>
                            <div className='flex'>
                                <span className="mx-2" >claudio.mesina@moramontajes.com</span>
                            </div>
                       </div>
                    </div>
                </div>

            </li>
            <li className="mx-5 my-5">
                <div className="flex">
                    <FaPhoneAlt className='w-4 h-4'/>
                    <div className='flex flex-wrap text-xs'>

                        <div className="flex">
                            <span className="mx-4"> +56 9 92278159</span>
                        </div>
                        <div className="flex">
                            <span className="mx-4"> +56 9 67316510</span>
                        </div>
                    </div>
                </div>
            </li>
            <li className="mx-5 my-5">
                <div className="flex">
                   <FaLocationDot className='w-4 h-4'/>
                    <div className='flex flex-wrap text-xs'>
                        <div className='flex'>
                            <span className="mx-2" > El Trapiche S/N Parcela N°1 </span>
                        </div>
                    </div>
                </div>
            </li>
        </div>
    </footer>
  )
}

