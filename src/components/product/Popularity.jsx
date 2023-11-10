import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const Popularity = ({ star, numRating, line = false }) => {
  return (
    <div className={`flex ${line ? "flex-col" : ""} items-center gap-2`}>
      <span className="flex items-center">
        {star >= 1 ? (
          <AiFillStar className="text-yellow-400" />
        ) : (
          <AiOutlineStar />
        )}
        {star <= 1 ? (
          <AiOutlineStar className="text-yellow-400" />
        ) : star <= 1.5 ? (
          <BsStarHalf className="text-yellow-400" />
        ) : (
          <AiFillStar className="text-yellow-400" />
        )}
        {star <= 2 ? (
          <AiOutlineStar className="text-yellow-400" />
        ) : star <= 2.5 ? (
          <BsStarHalf className="text-yellow-400" />
        ) : (
          <AiFillStar className="text-yellow-400" />
        )}
        {star <= 3 ? (
          <AiOutlineStar className="text-yellow-400" />
        ) : star <= 3.5 ? (
          <BsStarHalf className="text-yellow-400" />
        ) : (
          <AiFillStar className="text-yellow-400" />
        )}
        {star <= 4 ? (
          <AiOutlineStar className="text-yellow-400" />
        ) : star <= 4.5 ? (
          <BsStarHalf className="text-yellow-400" />
        ) : (
          <AiFillStar className="text-yellow-400" />
        )}
      </span>

      <p className="text-sm text-gray-400">{numRating} {line && "ratings"}</p>
    </div>
  );
};

export default Popularity;
