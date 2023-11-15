import React, { useEffect, useRef, useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import DropdownPortal from "./DropdownPortal";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMenuOpen } from "../../slices/preferenceSlice";

const MenuItem = ({ item }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [dropDownStyle, setDropDownStyle] = useState({});
  const ref = useRef(null);
  const dispatch = useDispatch()

  const handleClickMenu = (e) => {
    if (isDropdown) {
      setIsDropdown(false);
      return;
    }
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setDropDownStyle({
        position: "absolute",
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
      });
      dispatch(setMenuOpen(true))
      setIsDropdown(true);
    }
  };

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        dispatch(setMenuOpen(false))
        setIsDropdown(false);
      }
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [dispatch]);

  const { title, subCategories } = item;
  return (
    <li
      className="flex items-center gap-1 font-bold relative cursor-pointer"
      ref={ref}
      onClick={handleClickMenu}
    >
      <span>{title}</span>
      <span>
        {isDropdown ? (
          <AiOutlineUp className="text-xs" />
        ) : (
          <AiOutlineDown className="text-xs" />
        )}
      </span>
      {isDropdown && (
        <DropdownPortal style={dropDownStyle}>
          <ul className="bg-white shadow rounded mt-8  border border-slate-950 w-[16rem] max-h-max flex flex-col gap-2 px-4 py-6 text-[18px]">
            {subCategories.map((i, index) => (
              <Link to="/c/1" key={index}>
                <li className=" px-2 py-1 border-b-2 cursor-pointer hover:bg-gray-50">
                  {i}
                </li>
              </Link>
            ))}
          </ul>
        </DropdownPortal>
      )}
    </li>
  );
};

export default MenuItem;
