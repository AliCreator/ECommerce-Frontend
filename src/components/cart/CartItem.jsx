import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const CartItem = () => {
  return (
    <div className="flex flex-col border-b border-slate-200 relative pb-5">
      <AiOutlineClose className="absolute top-0 right-2 text-2xl text-gray-800" />
      <div className="flex items-center gap-2">
        <figure className="basis-1/5 self-start">
          <img src="./images/hero.png" alt="" />
        </figure>
        <div className="basis-4/5 flex flex-col md:flex-row gap-3">
          <div className="basis-1/6 order-1 md:order-3 flex flex-col gap-0">
            <h3 className="text-red-700 font-semibold my-[-5px]">$39.99</h3>
            <p className="flex items-center text-gray-400 gap-2">
              Reg <span className="line-through">$59.99</span>
            </p>
            <h3 className="text-red-700 my-[-5px]">Sale</h3>
          </div>
          <p className="basis-2/6 py-4 order-2 md:order-1">
            Gourmia Digital 4-Slice Toaster Oven Air Fryer with 11 Cooking
            Functions Stainless Steel Gray
          </p>
          <div className="basis-3/6 flex flex-col items-center  order-3 md:order-2">
            <div className="flex items-center gap-3">
              <div className="border border-slate-400 rounded-md px-2 py-1">
                <label htmlFor="qty">Qty</label>
                <select name="qty" id="qty" className="dark:bg-slate-950 outline-none">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
              <button className="bg-transparent outline-none border border-slate-400 px-2 py-1 rounded-md cursor-pointer">
                Save for later
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <input
                  type="radio"
                  id="delivery"
                  name="shoppingStyle"
                  className="rounded-full"
                  value="shopping_style"
                />
                <label htmlFor="delivery">
                  <div className="flex flex-col gap-0 text-sm">
                    <h2>Same Day Delivery</h2>
                    <p className="text-green-700 font-semibold">
                      Get as soon as 5pm today
                    </p>
                  </div>
                </label>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <input
                  type="radio"
                  id="pickup"
                  name="shoppingStyle"
                  className="rounded-full"
                  value="shopping_style"
                />
                <label htmlFor="pickup">
                  <div className="flex flex-col gap-0">
                    <h2>Order Pickup</h2>
                    <p className="text-green-700 font-semibold">
                      Ready within 2 hours
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
