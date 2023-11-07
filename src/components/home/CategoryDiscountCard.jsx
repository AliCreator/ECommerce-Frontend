import React from "react";

const CategoryDiscountCard = ({ purchase, discount, category, event }) => {
  return (
    <div className="px-4 py-6 bg-black text-white flex flex-col gap-12 min-w-[18rem] rounded-md min-h-[28rem] h-full content-end">
      <div className="basis-1/3 max-h-[33%] flex flex-col gap-0">
        <h3 className="font-semibold text-xl italic">{purchase}</h3>
        <h2 className="font-bold text-5xl mt-[-10px] mb-1">{discount}</h2>
        <p>{category}</p>
      </div>
      <figure className=" basis-2/3 self-center  min-h-[66%]  w-48 h-48 bg-teal-500 rounded-md p-3 relative">
        <img src="./images/hero.png" alt="" className="w-full object-contain" />
        <div className="absolute w-20 h-20 rounded-full bg-teal-300 text-black right-[-1rem] bottom-[-1rem] flex items-center justify-center">
          <h2 className="text-center text-xl font-bold">{event}</h2>
        </div>
      </figure>
    </div>
  );
};

export default CategoryDiscountCard;
