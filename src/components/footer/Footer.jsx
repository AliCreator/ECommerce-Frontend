import React, { useState } from "react";
import {
  AiOutlineDown,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineUp,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FOOTER_LIST } from "../../data";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <div className="">
      <div className=" flex flex-col gap-4 md:flex-row md:justify-between md:items-center md:px-24 p-4 ">
        <div className="flex flex-col gap-4">
          {FOOTER_LIST.map((list) => (
            <FooterList key={list.id} title={list.title} list={list.list} />
          ))}
        </div>
        {FOOTER_LIST.map((list) => (
          <div className="hidden md:flex items-center justify-between text-xl font-bold w-full">
            <div className="flex flex-col gap-4">
              <h2 className="md:text-2xl">{list.title}</h2>
              <ul className="flex flex-col gap-4 md:text-sm md:text-gray-600">
                {list.list.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-500 text-white flex flex-col md:flex-row gap-3 items-center justify-between py-4">
        <div className="flex   items-center gap-6 md:pl-12">
          <span className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center">
            <AiOutlineFacebook className="text-2xl" />
          </span>
          <span className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center">
            <AiOutlineInstagram className="text-2xl" />
          </span>
          <span className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center">
            <AiOutlineYoutube className="text-2xl" />
          </span>
          <span className="w-8 h-8 rounded-full bg-slate-950 text-white flex items-center justify-center">
            <AiOutlineTwitter className="text-2xl" />
          </span>
        </div>
        <h2 className="text-center md:text-2xl italic tracking-tighter">
          Designed and developed by Jan Ali Zahedi
        </h2>
        <div className="flex items-center md:justify-center md:pr-12">
          <ul className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-sm">
            <li>Terms</li>
            <li>CA Supply Chain</li>
            <li>Privacy</li>
            <li>Interest Based Ads</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
