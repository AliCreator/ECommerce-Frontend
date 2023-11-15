import React, { useEffect, useState } from "react";
import LocationInfo from "./LocationInfo";

import MenuBar from "./MenuBar";

const Header = () => {
  

  return (
    <header className="flex flex-col w-full shadow-md dark:bg-gray-950">
      <LocationInfo />
      <MenuBar />
    </header>
  );
};

export default Header;
