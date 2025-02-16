import React from 'react';
import { acero } from '../types/Items_Slider';
import AceroSlider from './AceroSlider';

const Acero: acero[] = [
  {
    id: 1,
    imgURL: "/Acero1.jpg",
  },
  {
    id: 2,
    imgURL: "/Acero2.JPG",
  },
  {
    id: 3,
    imgURL: "/Acero3.jpg",
  },
  {
    id:4,
    imgURL: "/Acero4.JPG"
  },
  {
    id:5,
    imgURL:"/Acero5.JPG"
  },
  {
    id:6,
    imgURL:"/Acero6.JPG"
  },
  {
    id:7,
    imgURL:"/Acero7.jpg"
  },
  
];

const AceroShowCase: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center mt-20 justify-center">
        <AceroSlider acero={Acero} />
    </div>
  );
};

export default AceroShowCase;

