import React from "react";

const StarPercentage = ({ star, percentage }) => {
  return (
    <div className="flex w-full items-center gap-1">
      <p className="basis-1/6 text-gray-600 text-sm">{star} stars</p>
      <div className="basis-4/6 h-2 bg-gray-200 rounded-md mr-2">
        <span
          className="bg-green-600 h-2 block rounded-sm"
          style={{ width: `${percentage}%` }}
        ></span>
      </div>
      <p className="basis-1/6 text-gray-600 text-sm">{percentage}%</p>
    </div>
  );
};

export default StarPercentage;
