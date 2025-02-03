import React, { useState } from 'react';
import { acero } from '../types/Items_Slider';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

interface AceroSliderProps {
  acero: acero[];
}

const AceroSlider: React.FC<AceroSliderProps> = ({ acero }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? acero.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === acero.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[500px]">
        <div className='p-2 text-slate-500 font-bold text-center'>
            <span>Actualmente estas en: <a href="/">/</a><a href="/servicios/">Servicios/</a><a href="/servicios/acero/">Acero</a></span>
        </div>
      <div
        className="w-full h-full rounded-xl bg-center bg-cover duration-500"
        style={{ backgroundImage: `url(${acero[currentIndex].imgURL})` }}
      >
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-4 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BiChevronLeft onClick={goToPrevious} size={30} />
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-4 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BiChevronRight onClick={goToNext} size={30} />
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {acero.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === slideIndex ? 'bg-white' : 'bg-white/50'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AceroSlider;

