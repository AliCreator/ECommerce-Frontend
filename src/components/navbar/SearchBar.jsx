import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import SearchPortal from "./SearchPortal";

const SearchBar = ({ setIsSearching, isSearching }) => {
 
  if (!isSearching) return null;

  return (
    <SearchPortal isSearching={isSearching} setIsSearching={setIsSearching}>
      <div className="bg-gray-200 dark:bg-gray-700 dark:text-white px-2 py-2 relative">
        <input
          type="text"
          className="outline-none p-3 bg-slate-100 w-[90%] rounded-md "
        />
        <ul className="my-4 px-2 flex flex-col gap-3">
          <AiOutlineClose
            onClick={() => setIsSearching(false)}
            className="absolute top-3  right-1 md:right-6 text-4xl"
          />
          <li className="border-b border-slate-100 w-ful hover:bg-slate-300 py-2 transition duration-700 italic font-semibold">
            Halal Meat
          </li>
          <li className="border-b border-slate-100 w-ful hover:bg-slate-300 py-2 transition duration-700 italic font-semibold">
            Afghan Gandana
          </li>
          <li className="border-b border-slate-100 w-ful hover:bg-slate-300 py-2 transition duration-700 italic font-semibold">
            Afghan Bread
          </li>
          <li className="border-b border-slate-100 w-ful hover:bg-slate-300 py-2 transition duration-700 italic font-semibold">
            Qabuli Palaw
          </li>
          <li className="border-b border-slate-100 w-ful hover:bg-slate-300 py-2 transition duration-700 italic font-semibold">
            Bolani
          </li>
          <li className="border-b border-slate-100 w-ful hover:bg-slate-300 py-2 transition duration-700 italic font-semibold">
            Spices
          </li>
        </ul>
      </div>
    </SearchPortal>
  );
};

export default SearchBar;
