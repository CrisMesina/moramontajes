import React from "react";

import Caldeceria from '../images/Caldeceria.jpg'
import Caldeceria2 from '../images/Caldeceria2.jpg'
import Caldeceria3 from '../images/Caldeceria3.jpg'
import Caldeceria4 from '../images/Caldeceria4.jpg'
import Caldeceria5 from '../images/Caldeceria5.jpg'

import { Footer } from "./Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function CaldeceriaImages() {
    const data = [
        {
            imgs:
            Caldeceria,
        },
        {
            imgs:
            Caldeceria2,
        },
        {
            imgs:
            Caldeceria3,
        },
        {
            imgs:
            Caldeceria4,
        },
        {
            imgs:
            Caldeceria5,
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
        <h1 className='text-center text-white font-extrabold text-3xl my-5'>Caldeceria, Corte y Plegado</h1>
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
