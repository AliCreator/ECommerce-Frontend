import React from "react";

const CategoryCard = ({ text, image }) => {
  return (
    <div className="min-w-[3rem] max-w-[8rem] md:min-w-[8rem] md:max-w-[16rem] rounded-md w-full flex flex-col items-center gap-2">
      <figure className="w-full bg-gray-50 dark:bg-slate-600  rounded-md relative">
        <p className="absolute top-0 md:font-semibold left-0 md:left-3  flex flex-col bg-white text-slate-950 rounded-md p-1">
          From <span className="md:text-xl">$50</span>
        </p>
        <img src={image} alt={text} className=" w-full object-cover" />
      </figure>
      <h2 className="text-xl font-bold">{text}</h2>
    </div>
  );
};

export default CategoryCard;
