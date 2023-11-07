import React, { cloneElement, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";

const SearchPortal = ({ children, isSearching, setIsSearching }) => {
  const ref = useRef();
  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsSearching(false);
      }
    };

    window.addEventListener("click", handleClick, true);
    return () => window.removeEventListener("click", handleClick, true);
  }, [setIsSearching]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-slate-700/70 backdrop-blur-md z-50 transition-all duration-500`}
    >
      <div
        ref={ref}
        className={`fixed top-0 md:top-24 left-0 max-w-6xl w-full md:translate-x-0 lg:translate-x-4 xl:translate-x-20 2xl:translate-x-96 bg-gray-200 rounded-md shadow-md px-3 py-4 transition-all duration-500`}
      >
        <button className="bg-inherit border-none p-2 rounded-sm translate-x-3 transition-all duration-200 absolute top-5 right-8 hover:bg-gray-400">
          <AiOutlineClose />
        </button>

        <div>
          {cloneElement(children, {
            onCloseModal: () => setIsSearching(false),
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPortal;
