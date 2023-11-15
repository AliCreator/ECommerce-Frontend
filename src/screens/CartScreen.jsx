import React, { useState } from "react";
import { AiFillShopping, AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { GoGift } from "react-icons/go";
import { CiReceipt } from "react-icons/ci";
import CartItem from "../components/cart/CartItem";

const CartScreen = () => {
  const [showSummary, setShowSummary] = useState(false);
  return (
    <section className="min-h-screen">
      <div className="px-4 flex flex-col">
        <div className="flex flex-col gap-0 mb-2">
          <h2 className="text-2xl font-bold">Cart</h2>
          <div className="flex items-center gap-2 font-semibold text-gray-400 py-2">
            <h3>$99.99 subtotal</h3>
            <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
            <h3>3 item</h3>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:basis-4/6 flex flex-col gap-3 p-2 border border-slate-100 rounded-lg">
            <div className="border-b border-slate-300 flex items-center gap-3 py-2">
              <AiFillShopping className="text-3xl text-red-700" />
              <div className="flex flex-col gap-1 justify-center">
                <h2 className="font-bold">Order Pickup</h2>
                <p className="text-gray-400">3 item at East Market</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>
          <div className="lg:basis-2/6 lg:max-w-[18rem] lg:ml-[6rem] flex flex-col gap-3 py-4">
            <h2 className="text-2xl font-bold">Order Summary</h2>
            <div className="flex flex-col gap-4 mb-5">
              <div
                className={`flex items-center justify-between border-b border-slate-300  dark:bg-slate-700 rounded-sm  cursor-pointer mb-3 `}
                onClick={() => setShowSummary(!showSummary)}
              >
                <div className="flex items-center gap-2">
                  <CiReceipt className="text-red-700 text-3xl" />
                  <div className="flex flex-col gap-0">
                    <h3 className="font-semibold">$359.68</h3>
                    <p className="text-gray-400">3 items</p>
                  </div>
                </div>
                {showSummary ? (
                  <AiOutlineUp className="text-2xl" />
                ) : (
                  <AiOutlineDown className="text-2xl" />
                )}
              </div>
              {showSummary && (
                <ul className="flex flex-col gap-5">
                  <li className="flex items-center justify-between">
                    <h4>Subtotal (3 items)</h4>
                    <h4>$339.98</h4>
                  </li>
                  <li className="flex items-center justify-between">
                    <h4>Pickup</h4>
                    <h4>Free</h4>
                  </li>
                  <li className="flex items-center justify-between">
                    <h4>Regional Fee</h4>
                    <h4>$1.00</h4>
                  </li>
                  <li className="flex items-center justify-between">
                    <h4>Estimated taxes</h4>
                    <h4>$18.70</h4>
                  </li>
                  <li className="flex items-center justify-between">
                    <h2 className="text-xl font-bold">Total</h2>
                    <h2 className="text-xl font-bold">$359.68</h2>
                  </li>
                </ul>
              )}
            </div>
            <div className="flex items-center justify-between lg:gap-12">
              <GoGift className="text-red-700 text-2xl" />
              <p>Not eligible for East points system</p>
            </div>
            <button className="outline-none bg-red-700 text-white font-bold px-3 py-2 rounded-sm cursor-pointer">
              Sign in to check out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartScreen;
