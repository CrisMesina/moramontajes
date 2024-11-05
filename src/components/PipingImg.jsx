import React from "react";
import { Footer } from "./Footer";
import Piping from '../images/Piping.JPG'
import Piping2 from '../images/Piping2.JPG'
import Piping3 from '../images/Piping3.JPG'
import Piping4 from '../images/Piping4.JPG'
import Piping5 from '../images/Piping5.JPG'


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export function PipingImg(){

    const data = [
        {
            imgs:
            Piping,
        },
        {
            imgs:
            Piping2,
        },
        {
            imgs:
            Piping3,
        },
        {
            imgs:
            Piping4,
        },
        {
            imgs:
            Piping5,
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
        <h1 className='text-center text-white font-extrabold text-3xl my-5'>Piping en Acero Inoxidable</h1>
        <Slider {...settings} className="w-500 mx-auto my-10">
        {data.map(({imgs}, index) =>(
            <div key={index} >
                <img src={imgs} className=" mx-auto h-96 w-500 cursor-pointer rounded-lg object-cover object-center" alt="..."/>
            </div>
        ))}
        
     </Slider>
    <Footer/>
    </>
    
  );
}