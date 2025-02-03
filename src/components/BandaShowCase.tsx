import React from 'react';

import { banda } from '../types/Items_Slider';
import BandaSlider from './BandaSlider';

const Banda: banda[] = [
  {
    id: 1,
    imgURL: "/Banda.jpg",
  },
  {
    id: 2,
    imgURL: "/Banda2.jpg",
  },
  {
    id: 3,
    imgURL: "/Banda3.jpg",
  },
  {
    id:4,
    imgURL: "/Banda4.jpg"
  },
  {
    id:5,
    imgURL:"/Banda5.jpg"
  }
];

const BandaShowCase: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center mt-20 justify-center">
        <BandaSlider banda={Banda} />
    </div>
  );
};

export default BandaShowCase;

