import React from "react";

const HeroCategory = () => {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between  h-[70vh] md:h-[55vh] lg:h-[50vh] bg-white my-1">
      <div className="basis-2/3 flex items-center justify-center order-1 md:order-2">
        <img
          src="./images/hero.png"
          alt="Hero category"
          className="object-contain w-72 md:w-96 lg:w-[60%]"
        />
        
      </div>
      <div className="basis-1/3   flex flex-col md:justify-center gap-5 md:gap-4 p-5 md:p-8 order-2 md:order-1 bg-red-50  h-full w-full">
        <h2 className="text-3xl md:text-4xl lg:text-6xl text-red-700 font-bold leading-5 italic tracking-tighter">
          Eat Fresh, Stay Healthy
        </h2>
        <h3 className="text-base lg:text-xl leading-4 tracking-tighter px-1  max-w-[70%] md:max-w-full">
          Get the fresh and Halal meat here in East Market and Restaurant
        </h3>
        <button className=" text-white bg-red-700 text-sm lg:text-xl font-semibold lg:font-bold rounded-sm px-6 py-1 max-w-min ">
          Explore
        </button>
      </div>
    </div>
  );
};

export default HeroCategory;
