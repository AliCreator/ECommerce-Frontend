import React, { cloneElement, createContext, useContext, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';


const AddToCartPopupContext = createContext();

const AddToCartPopup = ({ children }) => {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = setOpenName;
  return (
    <AddToCartPopupContext.Provider value={{ openName, close, open }}>
      {children}
    </AddToCartPopupContext.Provider>
  );
};


function Open({ children, opens: opensWindowName }) {
    const { open } = useContext(AddToCartPopupContext);
  
    return cloneElement(children, { onClick: () => open(opensWindowName) });
  }

  const Window = ({ children, name }) => {
    const { close, openName } = useContext(AddToCartPopupContext);
    const ref = useRef();
  
    useEffect(() => {
      const handleClick = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
          close();
        }
      };
  
      document.addEventListener("click", handleClick, true);
  
      return () => document.removeEventListener("click", handleClick, true);
    }, [close]);
  
    if (name !== openName) return null;
    return createPortal(
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-slate-500/50 backdrop-blur-sm z-50 transition-all duration-500`}
      >
        <div
          ref={ref}
          className={`fixed top-0 right-0 w-full md:w-[25%] h-screen z-[100]  bg-white dark:bg-gray-200   shadow-md px-3 py-4 transition-all duration-500 overflow-y-scroll`}
        >
          <button
            onClick={close}
            className="bg-inherit border-none p-2 rounded-sm translate-x-3 transition-all duration-200 absolute top-5 right-8 hover:bg-gray-400"
          >
            <AiOutlineClose className='text-3xl cursor-pointer'/>
          </button>
  
          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </div>
      </div>,
      document.body
    );
  };
  
  AddToCartPopup.Open = Open;
  AddToCartPopup.Window = Window;
  

export default AddToCartPopup