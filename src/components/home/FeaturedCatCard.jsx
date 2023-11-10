import React from "react";

const FeaturedCatCard = ({image, cat}) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <figure className="bg-gray-200 w-24 h-24 md:w-40 md:h-40 rounded-full p-3 flex items-center justify-center">
        <img src={image} alt="" className="w-full object-cover" />
      </figure>
      <h3 className="md:text-xl">{cat}</h3>
    </div>
  );
};

export default FeaturedCatCard;
