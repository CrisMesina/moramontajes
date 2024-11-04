import React from "react";
import MEM from '../images/MEM.jpeg'
import MEM2 from '../images/MEM2.jpeg'
import MEM3 from '../images/MEM3.jpeg'
import MEM4 from '../images/MEM4.jpeg'
import MEM5 from '../images/MEM5.JPEG'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { Footer } from "./Footer";


export function MontajesImgs() {

    const data = [
        {
            imgs:
            MEM,
        },
        {
            imgs:
            MEM2,
        },
        {
            imgs:
            MEM3,
        },
        {
            imgs:
            MEM4,
        },
        {
            imgs:
            MEM5,
        },

    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay: true,
    }

  return (
    <>
        <h1 className='text-center text-white font-extrabold text-3xl my-5'>Montajes de Estructuras Metalicas</h1>
        <Slider {...settings} className="w-mitad mx-auto my-10 text-white">
        {data.map(({imgs}, index) =>(
            <div key={index} >
                <img src={imgs} className="h-xxl max-w-full cursor-pointer rounded-lg object-cover object-center" alt="..."/>
            </div>
        ))}
        
     </Slider>
    <Footer/>
    </>
    
  );
}