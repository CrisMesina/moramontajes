import React from "react";


import Acero from '../images/EstructurasAcero.jpg'
import Acero2 from '../images/EstructurasAcero2.jpg'
import Acero3 from '../images/EstructurasAcero3.jpg'
import Acero4 from '../images/EstructurasAcero4.jpg'
import Acero5 from '../images/EstructurasAcero5.jpg'


import { Footer } from "./Footer";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function AceroImgs() {
    const data = [
        {
            imgs:
            Acero,
        },
        {
            imgs:
            Acero2,
        },
        {
            imgs:
            Acero3,
        },
        {
            imgs:
            Acero4,
        },
        {
            imgs:
            Acero5,
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
        <h1 className='text-center text-white font-extrabold text-3xl my-5'>Estructuras y Plataformas de Acero</h1>
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