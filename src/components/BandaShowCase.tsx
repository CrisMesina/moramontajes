import React from 'react';

import { banda } from '../types/Items_Slider';
import BandaSlider from './BandaSlider';

const Banda: banda[] = [
  {
    id: 1,
    imgURL: "/Banda6.JPG",
  },
  {
    id: 2,
    imgURL: "/Banda7.JPG",
  },
  {
    id: 3,
    imgURL: "/Banda8.JPG",
  },
  {
    id:4,
    imgURL: "/Banda9.JPG"
  },
  {
    id:5,
    imgURL:"/Banda10.JPG"
  },
  {
    id:6,
    imgURL:"/Banda11.jpg"
  },
];

const BandaShowCase: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center mt-20 justify-center">
        <BandaSlider banda={Banda} />
    </div>
  );
};

export default BandaShowCase;

