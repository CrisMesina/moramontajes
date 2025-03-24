import React from 'react';
import {AceroSlider} from './AceroSlider';

const images= [
  {
    id: 1,
    imgURL: "/Acero1.jpg",
  },
  {
    id: 2,
    imgURL: "/Acero2.jpg",
  },
  {
    id: 3,
    imgURL: "/Acero3.jpg",
  },
  {
    id:4,
    imgURL: "/Acero4.jpg"
  },
  {
    id:5,
    imgURL:"/Acero5.jpg"
  },
  {
    id:6,
    imgURL:"/Acero6.JPG"
  },
  {
    id:7,
    imgURL:"/Acero7.JPG"
  },
  
];

const AceroShowCase: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center mt-20 justify-center">
        <AceroSlider slides={images} />
    </div>
  );
};

export default AceroShowCase;

