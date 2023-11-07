import React from "react";
import { createPortal } from "react-dom";

const DropdownPortal = ({ children, style }) => {
  return createPortal(
    <div style={style} className="z-50">{children}</div>,
    document.getElementById("portal")
  );
};

export default DropdownPortal;
