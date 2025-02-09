import React from 'react';
import { acero } from '../types/Items_Slider';
import AceroSlider from './AceroSlider';

const Acero: acero[] = [
  {
    id: 1,
    imgURL: "/Acero6.JPG",
  },
  {
    id: 2,
    imgURL: "/Acero7.JPG",
  },
  {
    id: 3,
    imgURL: "/Acero8.JPG",
  },
  {
    id:4,
    imgURL: "/Acero9.JPG"
  },
  {
    id:5,
    imgURL:"/Acero10.JPG"
  }

];

const AceroShowCase: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center mt-20 justify-center">
        <AceroSlider acero={Acero} />
    </div>
  );
};

export default AceroShowCase;

