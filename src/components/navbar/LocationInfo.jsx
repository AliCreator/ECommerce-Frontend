import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsBuildings } from "react-icons/bs";
import { Link } from "react-router-dom";
const LocationInfo = () => {
  return (
    <div className="bg-red-700 text-slate-200 flex justify-center w-full">
    <div className="max-w-[1560px] w-full flex md:justify-between items-center gap-6 min-h-[50px] text-sm px-8">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 ">
          <span>
            <CiLocationOn className="text-base" />
          </span>
          <p>3405 El Camino Ave</p> <span> - </span>
          <h2>Sacramento, CA</h2>
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center gap-6">
        <Link to="/">About Us</Link>
        <Link to="/">About You</Link>
        <Link to="/">About Them</Link>
        <Link to="/">About Him</Link>
        <Link to="/">About Her</Link>
        <Link to="/">About It</Link>
      </div>
    </div>
    </div>
  );
};

export default LocationInfo;
