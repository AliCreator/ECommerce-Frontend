import React from "react";
import Popularity from "./Popularity";
import { AiOutlineLike } from "react-icons/ai";

const ProductReview = () => {
  return (
    <div className="p-2 border border-slate-500 self-center rounded-md w-[22rem] lg:w-[60rem] flex flex-col lg:flex-row lg:items-center lg:gap-12 ml-[-1.4rem]">
      <div className="lg:min-w-[40%]">
        <h2 className=" font-bold">Cute trees</h2>
        <div className="flex items-center gap-6">
          <Popularity star={5} numRating={0} />
          <span className="text-gray-900 w-1">|</span>
          <div className="flex items-center gap-2">
            <span className="text-green-700 text-xl">
              <AiOutlineLike />
            </span>
            <h3 className="text-gray-600 text-sm">Would recommend</h3>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <h3>Spooky Mama</h3>
          <span>-</span>
          <p>4 days ago</p>
          <h3 className="text-green-700 font-semibold">Verified purchaser</h3>
        </div>
      </div>
      <p className="mt-8 md:mt-0">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate ab
        mollitia at? Error numquam illo ratione esse provident. Eos, delectus
        dolorum voluptate amet quam a.
      </p>
    </div>
  );
};

export default ProductReview;
