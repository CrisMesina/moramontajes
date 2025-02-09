import React from 'react';
import PipingSlider from './PipingSlider';
import { piping } from '../types/Items_Slider';

const Piping: piping[] = [
  {
    id: 1,
    imgURL: "/Piping6.jpg",
  },
  {
    id: 2,
    imgURL: "/Piping7.JPG",
  },
  {
    id: 3,
    imgURL: "/Piping8.JPG",
  },
  {
    id:4,
    imgURL: "/Piping9.JPG"
  },
  {
    id:5,
    imgURL:"/Piping10.JPG"
  }
];

const PipingShowCase: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center mt-20 justify-center">
        <PipingSlider piping={Piping} />
    </div>
  );
};

export default PipingShowCase;

