import React from "react";
import Transp from '../images/Transp.jpg'
import Transp2 from '../images/Transp2.jpg'
import Transp3 from '../images/Transp3.jpg'
import Transp4 from '../images/Transp4.jpg'
import Transp5 from '../images/Transp5.jpg'
import { Footer } from "./Footer";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function Transport() {

 
    const data = [
        {
            imgs:
            Transp,
        },
        {
            imgs:
            Transp2,
        },
        {
            imgs:
            Transp3,
        },
        {
            imgs:
            Transp4,
        },
        {
            imgs:
            Transp5,
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
        <h1 className='text-center text-white font-extrabold text-3xl my-5'>Transportadores de Banda</h1>
        <Slider 
            {...settings} 
            className="w-500 mx-auto my-10 text-white">
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