import React from 'react';

import { banda } from '../types/Items_Slider';
import BandaSlider from './BandaSlider';

const Banda: banda[] = [
  {
    id: 1,
    imgURL: "/Banda1.JPG",
  },
  {
    id: 2,
    imgURL: "/Banda2.JPG",
  },
  {
    id: 3,
    imgURL: "/Banda3.JPG",
  },
  {
    id:4,
    imgURL: "/Banda4.JPG"
  },
  {
    id:5,
    imgURL:"/Banda5.jpg"
  },
  {
    id:6,
    imgURL:"/Banda6.JPG"
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

