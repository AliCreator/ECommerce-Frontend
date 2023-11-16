import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useSelector } from "react-redux";
import MyInfo from "../components/profile/MyInfo";
import ChangeInfo from "../components/profile/ChangeInfo";
import ChangePassword from "../components/profile/ChangePassword";
import MyOrders from "../components/profile/MyOrders";
import MyWishlist from "../components/profile/MyWishlist";
import MyAlerts from "../components/profile/MyAlerts";

const Profile = () => {

  
  const MENU_ITEMS = [
    "My info",
    "Change info",
    "Change password",
    "My orders",
    "My wishlist",
    "My alerts",
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [currentMenu, setCurrentMenu] = useState("My info");
  const { user, events } = useSelector((state) => state.auth);

  const currentMenuItem = () => {
    switch (currentMenu) {
      case "My info":
        return <MyInfo user={user} />;
      case "Change info":
        return <ChangeInfo user={user}/>;
      case "Change password":
        return <ChangePassword />;
      case "My orders":
        return <MyOrders user={user}/>;
      case "My wishlist":
        return <MyWishlist user={user}/>;
      case "My alerts":
        return <MyAlerts events={events}/>;
      default:
        return <MyInfo user={user}/>;
    }
  };

  return (
    <section className="min-h-screen py-1 md:py-12 flex flex-col md:flex-row gap-4">
      <ul className="hidden md:basis-1/4 w-full md:flex flex-col gap-3 border-r border-slate-300  h-[40%] px-4 py-6 font-semibold">
        {MENU_ITEMS.map((item, i) => (
          <li
            className="border-b border-slate-100 p-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-500"
            key={i}
            onClick={() => setCurrentMenu(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="w-full md:hidden flex flex-col border-b border-slate-300 px-4 py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Menu</h2>
          <span onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
          </span>
        </div>
        {showMenu && (
          <ul className="md:basis-1/4 w-full flex flex-col gap-3 h-[40%] px-4 py-6 font-semibold">
            {MENU_ITEMS.map((item, i) => (
              <li
                className="border-b border-slate-100 p-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 transition-all duration-500"
                key={i}
                onClick={() => {
                  setCurrentMenu(item);
                  setShowMenu(false);
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col gap-4 px-4">{currentMenuItem()}</div>
    </section>
  );
};

export default Profile;
