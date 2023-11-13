import React from "react";

const CategoryCard = ({ title, image }) => {
  return (
    <div className="w-[8rem] h-[8rem] md:w-[10rem] md:h-[10rem] flex flex-col items-center">
      <figure className="w-[5rem] h-[5rem] md:w-[7rem] md:h-[7rem] rounded-full bg-gray-100 flex items-center justify-center">
        <img src={image} alt={title} className="w-[80%] object-cover" />
      </figure>
      <h3 className="">{title}</h3>
    </div>
  );
};

export default CategoryCard;
