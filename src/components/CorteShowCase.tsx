import React from 'react';

import { corte } from '../types/Items_Slider';
import { CorteSlider } from './CorteSlider';

const Corte: corte[] = [
  {
    id: 1,
    imgURL: "/Corte.JPG",
  },
  {
    id: 2,
    imgURL: "/Corte2.JPG",
  },
  {
    id: 3,
    imgURL: "/Corte3.JPEG",
  },
  {
    id:4,
    imgURL: "/Corte4.jpg"
  },
  {
    id:5,
    imgURL:"/Corte5.jpg"
  }
];

export const CorteShowCase: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center mt-20 justify-center">
        <CorteSlider corte={Corte} />
    </div>
  );
};


