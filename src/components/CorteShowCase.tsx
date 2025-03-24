import React from 'react';

import { CorteSlider } from './CorteSlider';

const images = [
  {
    id: 1,
    imgURL: "/Corte1.JPG",
  },
  {
    id: 2,
    imgURL: "/Corte2.JPG",
  },
  {
    id: 3,
    imgURL: "/Corte3.JPG",
  },
  {
    id:4,
    imgURL: "/Corte4.jpg"
  },
  
];

export const CorteShowCase: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center mt-20 justify-center">
        <CorteSlider slides={images} />
    </div>
  );
};


