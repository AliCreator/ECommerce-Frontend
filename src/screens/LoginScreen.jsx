import React from "react";
import { FcShop } from "react-icons/fc";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <section className="min-h-screen px-3 py-1 md:py-12 flex flex-col items-center  gap-4 lg:gap-8 max-w-full">
      <FcShop className="text-6xl" />
      <h2 className="text-xl font-bold text-center">
        Sign into your East Market account
      </h2>
      <div className="flex flex-col gap-2 items-center max-w-xl w-full">
        <input type="email" placeholder="Your email here" className="outline-none border border-slate-800 rounded-sm px-4 py-2 w-full" />
        <input type="password" placeholder="Your password here" className="outline-none border border-slate-800 rounded-sm px-4 py-2 w-full"/>
        <button className="px-4 py-2 bg-red-700 text-white w-full rounded-md cursor-pointer font-semibold">Sign in</button>
        <Link to="/" className="text-gray-600 underline lg:my-2">Forgot password?</Link>
        <Link to="/" className="px-4 py-2 bg-white border border-slate-800 w-full cursor-pointer rounded-md">Create your East Market account</Link>
      </div>
      <p className="px-4 text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus, non.
      </p>
    </section>
  );
};

export default LoginScreen;
