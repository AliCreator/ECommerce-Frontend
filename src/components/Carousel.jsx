import React, { useEffect, useRef, useState } from "react";
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'

const Carousel = ({ children }) => {
  const carouselRef = useRef();
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [maxTranslate, setMaxTranslate] = useState(0);
  const maxShift = 230; // The shift amount on each click

  const updateMaxTranslate = () => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.scrollWidth;
      const containerWidth = carouselRef.current.offsetWidth;
      const newMaxTranslate = containerWidth - carouselWidth; 
      setMaxTranslate(newMaxTranslate);
    }
  };

  useEffect(() => {
    updateMaxTranslate();
    window.addEventListener('resize', updateMaxTranslate);
    return () => window.removeEventListener('resize', updateMaxTranslate);
  }, []);

  const handleClick = (direction) => {
    let newTranslate = currentTranslate;

    if (direction === "left") {
      newTranslate = Math.min(newTranslate + maxShift, 0); 
    } else if (direction === "right") {
      newTranslate = Math.max(newTranslate - maxShift, maxTranslate); 
    }

    carouselRef.current.style.transform = `translateX(${newTranslate}px)`;
    setCurrentTranslate(newTranslate); 
  };

  return (
    <div className="relative overflow-hidden w-[25rem] md:w-[48rem] lg:w-[64rem] xl:w-[84rem] max-w-5xl mx-auto">
      <div
        className="flex transition-transform duration-500 items-center gap-3"
        ref={carouselRef}
      >
        {children}
      </div>
      <button
         onClick={() => handleClick("left")}
         className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-red-700 text-white rounded-full p-2 shadow-lg"
         style={{ left: '1rem' }} 
      >
        <AiOutlineLeft className="text-xl"/>
      </button>
      <button
        onClick={() => handleClick("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-red-700 text-white cursor-pointer rounded-full p-2 shadow-lg"
        style={{ right: '1rem' }} 
      >
        <AiOutlineRight className="text-xl"/>
      </button>
    </div>
  );
}
export default Carousel;
