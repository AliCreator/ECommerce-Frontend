import React, { useEffect, useRef, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FcShop } from "react-icons/fc";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineRight,
  AiOutlineShopping,
  AiOutlineDollar,
} from "react-icons/ai";
import MenuItem from "./MenuItem";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import SmallSizeCatCard from "./SmallSizeCatCard";
import { useDispatch, useSelector } from "react-redux";
import { setMenuOpen, setTheme } from "../../slices/preferenceSlice";
import { FaMoon } from "react-icons/fa";
import { LuSunMoon } from "react-icons/lu";


const MENU_ITEMS = [
  {
    id: 1,
    title: "Categories",
    subCategories: ["Groceries", "Food", "Home Appliances", "Meat", "Bread"],
  },
  {
    id: 2,
    title: "Deals",
    subCategories: ["Top Deals", "East Points", "Weekly Ads", "Clearance"],
  },
  {
    id: 3,
    title: "What's New",
    subCategories: ["East New Arrivals", "East Finds"],
  },
  {
    id: 4,
    title: "Pickup & Delivery",
    subCategories: ["Shop Oder Pickup", "Shop Same Day Delivery"],
  },
];

const MenuBar = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [dropDownStyle, setDropDownStyle] = useState({});


  const [showMenu, setShowMenu] = useState(false);
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const {isDark} = useSelector(state => state.preferences)


  
  const handleSearchClick = (e) => {
    if (searchRef.current) {
      const rect = searchRef.current.getBoundingClientRect();
      setDropDownStyle({
        position: "absolute",
        top: `${rect.bottom + window.scrollY}px`,
        left: `${rect.left + window.scrollX}px`,
        width: "w-[128rem]",
      });
      setIsSearching(true);
    }
  };



  return (
    <section
      className={` max-w-[1560px] w-full m-auto flex justify-center bg-white dark:bg-gray-950 dark:text-white text-slate-950 py-4 z-99`}
    >
      <div className="grid grid-cols-12 md:flex md:items-center md:justify-between gap-4 md:gap-16  px-8 py-2 w-full ">
        <div className="col-span-2 order-1 md:order-2">
          <IoMdMenu
            className="lg:hidden text-2xl"
            onClick={() => setShowMenu(true)}
          />
          <ul className="hidden lg:flex items-center gap-4">
            {MENU_ITEMS.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </ul>{" "}
          {showMenu && (
            <div
              className={`absolute w-full min-h-screen h-[5200px] top-0 left-0 transform ${
                showMenu ? "translate-x-0" : "-translate-x-full"
              } transition-all duration-500 ease-in-out bg-white z-50 px-6 py-8 shadow-2xl dark:bg-slate-950`}
            >
              <div className="flex items-center justify-between border-b-2 border-slate-950 py-2">
                <h2 className="text-xl font-bold">Menu</h2>
                <span className="text-xl font-bold">
                  <AiOutlineClose onClick={() => setShowMenu(false)} />
                </span>
              </div>
              <div className="flex flex-col border-b border-slate-950 py-2">
                <div className="w-full flex items-center justify-between py-4 border-b">
                  <h2 className="text-xl font-bold">Categories</h2>
                  <span className="text-xl font-semibold">
                    <AiOutlineRight />
                  </span>
                </div>
                <div className="flex items-center justify-start gap-4 flex-wrap py-4">
                  <SmallSizeCatCard />
                  <SmallSizeCatCard />
                  <SmallSizeCatCard />
                  <SmallSizeCatCard />
                  <SmallSizeCatCard />
                  <SmallSizeCatCard />
                  <SmallSizeCatCard />
                  <SmallSizeCatCard />
                  <SmallSizeCatCard />
                </div>
              </div>
              <div className="flex flex-col border-b border-slate-950 py-2">
                <div className="flex items-center justify-between ">
                  <h2 className="text-xl font-bold">Deals</h2>
                  <span className="text-xl font-semibold">
                    <AiOutlineRight />
                  </span>
                </div>
                <div className="flex items-center gap-4 py-4">
                  <div className="flex flex-col">
                    <span className="w-24 h-24 bg-gray-100 dark:bg-slate-950 rounded-full p-2 flex items-center justify-center">
                      <AiOutlineShopping className="text-6xl" />
                    </span>
                    <p className="text-center font-bold">Top Deals</p>
                  </div>
                  <div className="flex flex-col">
                    <span className="w-24 h-24 bg-gray-100 dark:bg-slate-950 rounded-full p-2 flex items-center justify-center">
                      <AiOutlineDollar className="text-6xl" />
                    </span>
                    <p className="text-center font-bold">Top Deals</p>
                  </div>
                  <div className="flex flex-col">
                    <span className="w-24 h-24 bg-gray-100 dark:bg-slate-950 rounded-full p-2 flex items-center justify-center">
                      <AiOutlineShopping className="text-6xl" />
                    </span>
                    <p className="text-center font-bold">Clearance</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col border-b border-slate-950 py-2">
                <div className="flex items-center justify-between ">
                  <h2 className="text-xl font-bold">What's New</h2>
                  <span className="text-xl font-semibold">
                    <AiOutlineRight />
                  </span>
                </div>
                <div className="flex items-center gap-4 py-4">
                  <div className="w-24 h-24 flex flex-col items-center justify-start">
                    <img
                      src="./images/vegetable.png"
                      alt="vegetable"
                      className="w-16 h-16 rounded-full"
                    />
                    <p className="font-semibold">Vegetables</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col border-b border-slate-950 py-2">
                <div className="flex items-center justify-between ">
                  <h2 className="text-xl font-bold">Pickup & Delivery</h2>
                  <span className="text-xl font-semibold">
                    <AiOutlineRight />
                  </span>
                </div>
                <div className="flex items-center gap-4 py-4">
                  <div className="w-24 h-24 flex flex-col items-center justify-start">
                    <img
                      src="./images/vegetable.png"
                      alt="vegetable"
                      className="w-16 h-16 rounded-full"
                    />
                    <p className="font-semibold">Vegetables</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-4">
                <p className="w-full border-b">Register</p>
                <p className="w-full border-b">Login</p>
                <p className="w-full border-b">East Points</p>
              </div>
            </div>
          )}
        </div>
        <div className="col-span-6 order-2 md:order-1 flex justify-center">
          <Link to="/">
            <FcShop className="text-2xl" />
          </Link>
        </div>

        <div className="col-span-4 order-3 md:order-4 flex items-center justify-center gap-6">
          <Link to="/login" className="flex items-center gap-2">
            <AiOutlineUser className="text-2xl  hover:bg-gray-100 transition-all duration-500 hover:rounded-md" />
            <span className="hidden">Sign in</span>
          </Link>
          <Link
            to="/cart"
            className="relative  hover:bg-gray-100 transition-all duration-500 hover:rounded-md"
          >
            <AiOutlineShoppingCart className="text-2xl" />
            <span className="absolute left-4 top-[-10px] w-4 h-4 rounded-full bg-red-700 text-white text-xs flex items-center justify-center">
              1
            </span>
          </Link>
          <button className="px-3 py-2 bg-gray-100  rounded-md text-slate-950  hover:bg-gray-300 transition-all duration-500" onClick={() => dispatch(setTheme(!isDark))}>{isDark ? <LuSunMoon /> :<FaMoon />}</button>
        </div>
        <div
          className="col-span-12  md:order-3 md:flex-grow flex items-center gap-4  px-2 bg-gray-100 dark:bg-gray-700 dark:text-white"
          ref={searchRef}
          onClick={handleSearchClick}
        >
          <AiOutlineSearch className="text-xl" />

          <input
            type="text"
            placeholder="Search here"
            className="w-full  outline-none px-4 py-2 bg-gray-100 relative dark:bg-gray-700 dark:text-white"
          />
        </div>

        {isSearching && (
          <>
            <SearchBar
              setIsSearching={setIsSearching}
              dropDownStyle={dropDownStyle}
              isSearching={isSearching}
            />
          </>
        )}
      </div>
    </section>
  );
};

export default MenuBar;
