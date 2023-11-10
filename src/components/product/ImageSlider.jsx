import { current } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const next = () => {
    const index = images.length - 1;
    setCurrentImage((current) => (current !== index ? current + 1 : 0));
  };

  const previous = () => {
    const index = 0;
    setCurrentImage((current) =>
      current !== index ? current - 1 : images.length - 1
    );
  };
  return (
    <div className="flex flex-col items-center overflow-hidden relative my-6">
      {images.map((image, i) => (
        <img
          key={i}
          src={image}
          alt="Product photos"
          className={`${currentImage === i ? "block" : "hidden"} w-96 h-96 md:w-[36rem] lg:w-[42rem] object-cover`}
        />
      ))}
      <button
        onClick={previous}
        className="absolute top-1/2 left-3 md:left-4 z-30 -translate-x-1/2 w-6 h-6 bg-red-700 text-white rounded-full flex items-center justify-center cursor-pointer"
      >
        <AiOutlineLeft />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-5 md:right-1 lg:right-0 z-30 -translate-x-1/2 w-6 h-6 bg-red-700 text-white rounded-full flex items-center justify-center cursor-pointer"
      >
        <AiOutlineRight />
      </button>
    </div>
  );
};

export default ImageSlider;
