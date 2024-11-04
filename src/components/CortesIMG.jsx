import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Corte from '../images/Corte.JPG'
import Corte2 from '../images/Corte2.JPG'
import Corte3 from '../images/Corte3.JPEG'
import Corte4 from '../images/Corte4.jpg'
import Corte5 from '../images/Corte5.jpg'
import { Footer } from "./Footer";

export function CortesIMG(){
    const data = [
        {
            imgs:
            Corte,
        },
        {
            imgs:
            Corte2,
        },
        {
            imgs:
            Corte3,
        },
        {
            imgs:
            Corte4,
        },
        {
            imgs:
            Corte5,
        },

    ]
    const settings = {
        dots: true,
        infinity: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay: true,
    }

  return (
    <>
        <h1 className='text-center text-white font-extrabold text-3xl my-5'>Servicios de Corte CNC</h1>
        <Slider {...settings} className="w-500 mx-auto my-10 text-white">
        {data.map(({imgs}, index) =>(
            <div key={index} >
                <img src={imgs} className="mx-auto h-96 w-500 cursor-pointer rounded-lg object-cover object-center" alt="..."/>
            </div>
        ))}
        
     </Slider>
    <Footer/>
    </>
    
  );
}