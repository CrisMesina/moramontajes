import React from 'react';

import {BandaSlider} from './BandaSlider';

const images = [
  {
    id: 1,
    imgURL: "/Banda1.JPG",
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
  },
  {
    id:6,
    imgURL:"/Banda6.JPG"
  },
];

const BandaShowCase: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center mt-20 justify-center">
        <BandaSlider slides={images} />
    </div>
  );
};

export default BandaShowCase;

