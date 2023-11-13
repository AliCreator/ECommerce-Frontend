import React, {
    cloneElement,
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
  } from "react";
  import { createPortal } from "react-dom";
  import { AiOutlineClose } from "react-icons/ai";
  
  const AddToCartModal = createContext();
  
  const AddToCart = ({ children }) => {
    const [openName, setOpenName] = useState("");
    const close = () => setOpenName("");
    const open = setOpenName;
    return (
      <AddToCartModal.Provider value={{ openName, close, open }}>
        {children}
      </AddToCartModal.Provider>
    );
  };
  
  function Open({ children, opens: opensWindowName }) {
    const { open } = useContext(AddToCartModal);
  
    return cloneElement(children, { onClick: () => open(opensWindowName) });
  }
  
  const Window = ({ children, name }) => {
    const { close, openName } = useContext(AddToCartModal);
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
        className={`fixed top-0 left-0 w-full h-screen bg-slate-300/50 backdrop-blur-0 z-50 transition-all duration-500`}
      >
        <div
          ref={ref}
          className={`fixed top-0 left-0 w-96 h-screen bg-gray-100 rounded-md shadow-md px-3 py-4 transition-all duration-500 `}
        >
          <button
            onClick={close}
            className="bg-inherit border-none p-2 rounded-sm translate-x-3 transition-all duration-200 absolute top-5 right-8 hover:bg-gray-400"
          >
            <AiOutlineClose />
          </button>
  
          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </div>
      </div>,
      document.body
    );
  };
  
  AddToCart.Open = Open;
  AddToCart.Window = Window;
  
  export default AddToCart;
  