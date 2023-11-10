import React from "react";
import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import Popularity from "../components/product/Popularity";
import ImageSlider from "../components/product/ImageSlider";
import ProductDetails from "../components/product/ProductDetails";
import StarPercentage from "../components/product/StarPercentage";
import SimilarItem from "../components/product/SilimarItem";
import ProductReview from "../components/product/ProductReview";

const IMAGES = [
  "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Shah%28Emam_%29_Mosque_%2C_Isfahan.jpg/800px-Shah%28Emam_%29_Mosque_%2C_Isfahan.jpg",
  "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Shah%28Emam_%29_Mosque_%2C_Isfahan.jpg/800px-Shah%28Emam_%29_Mosque_%2C_Isfahan.jpg",
  "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Shah%28Emam_%29_Mosque_%2C_Isfahan.jpg/800px-Shah%28Emam_%29_Mosque_%2C_Isfahan.jpg",
  "https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Shah%28Emam_%29_Mosque_%2C_Isfahan.jpg/800px-Shah%28Emam_%29_Mosque_%2C_Isfahan.jpg",
];

const ProductScreen = () => {
  return (
    <section className="min-h-screen py-1 md:py-12 md:px-16 flex flex-col md:flex-row gap-4 md:gap-12 flex-wrap">
      <div className="self-start order-1 md:order-2 px-2">
        <Link to="/" className="border-b border-slate-300 cursor-pointer">
          Shop all Sadaf
        </Link>
        <div className="py-4 flex flex-col gap-2">
          <h2 className="font-bold text-xl">Pomegranate Jam</h2>
          <div className="flex items-center gap-2">
            <Popularity star={3.5} numRating={19} />
          </div>
          <h3 className="flex items-center gap-4">
            Available{" "}
            <span className="w-4 h-4 text-white rounded-full bg-green-700 flex items-center justify-center">
              <IoMdCheckmark />
            </span>
          </h3>
          <h3 className="font-bold ">$10.99</h3>
          <div className="flex items-center gap-4">
            <select
              name="amount"
              id="amount"
              className="min-w-[4rem] px-2 py-1 bg-slate-200 rounded-sm cursor-pointer outline-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <button className="px-6 py-2 bg-red-700 text-white font-bold rounded-md cursor-pointer">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className="order-2 md:order-1">
        <ImageSlider images={IMAGES} />
      </div>
      <div className="order-3 w-full flex flex-col gap-3 bg-gray-100 py-2 px-3">
        <h2 className="text-xl font-bold text-center">About this item</h2>
        <div className="flex flex-col gap-2 bg-white px-2 py-3 rounded-sm">
          <div className="flex flex-col gap-3">
            <ProductDetails />
            <ProductDetails />
            <ProductDetails />
            <ProductDetails />
          </div>
        </div>
      </div>
      <div className="order-5 flex flex-col gap-3 lg:min-w-[1300px]">
        <h2 className="text-xl font-bold text-center">Similar Items</h2>
        <SimilarItem />
      </div>
      <div className="order-4 flex flex-col gap-3 md:w-full">
        <h2 className="text-xl font-bold text-center">
          Guest Ratings & Reviews
        </h2>
        <div className="flex flex-col md:items-center">
          <div className="flex flex-col lg:flex-row  items-center justify-around px-6 md:w-[60%]">
            <div className="flex flex-row lg:gap-4 items-center order-1 lg:order-2">
              <div className="basis-1/2 w-full flex flex-col gap-1 items-center">
                <h3 className="text-2xl font-bold">5.0</h3>
                <Popularity star={5} numRating={19} line={true} />
              </div>
              <div className="basis-1/2 lg:min-w-[12rem] w-full flex flex-col gap-1 items-center">
                <span className="w-12 h-12 bg-white border border-green-800 rounded-full flex items-center justify-center text-green-800 font-bold">
                  100
                </span>
                <h2 className="font-semibold text-center leading-4 lg:text-sm">
                  100% would recommend
                </h2>
                <h3 className="text-gray-500 text-xs lg:text-sm pr-4 lg:pr-0 mb-2 lg:mb-0">
                  11 recommendations
                </h3>
              </div>
            </div>
            <div className="w-full order-2 lg:order-1 flex flex-col gap-0">
              <StarPercentage star={5} percentage={95} />
              <StarPercentage star={4} percentage={5} />
              <StarPercentage star={3} percentage={0} />
              <StarPercentage star={2} percentage={0} />
              <StarPercentage star={1} percentage={0} />
            </div>
          </div>
          <div className="flex flex-col gap-0 px-2">
            <div className="flex flex-col gap-4 pt-6">
              <div className="self-center flex items-center gap-12 px-2 py-4">
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 border-2 border-green-700 rounded-full flex items-center justify-center">
                    5.0
                  </span>
                  <div className="flex flex-col gap-0 items-center">
                    <h2>Value</h2>
                    <p>out of 5</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-10 h-10 border-2 border-green-700 rounded-full flex items-center justify-center">
                    5.0
                  </span>
                  <div className="flex flex-col gap-0 items-center">
                    <h2>Quality</h2>
                    <p>out of 5</p>
                  </div>
                </div>
              </div>
              <button className="self-center px-4 py-2 text-xl bg-red-700 text-white rounded-md">
                Write a review
              </button>
              <div className="self-center lg:min-w-[40rem] flex flex-col lg:flex-row lg:gap-12 gap-4 items-center bg-gray-200 px-3 py-2 rounded-sm">
                <div className="px-4 py-2 border lg:flex lg:items-center lg:justify-between lg:min-w-[22rem] border-slate-50 rounded-md cursor-pointer">
                  <label htmlFor="sort">Sort By </label>
                  <select
                    name="sort"
                    id="sort"
                    className="outline-none rounded-sm lg:w-[75%]"
                  >
                    <option value="recent">Recent</option>
                    <option value="lighest">Highest rated</option>
                    <option value="lowest">Lowest rated</option>
                  </select>
                </div>
                <div className="px-4 py-2 border border-slate-50 rounded-md cursor-pointer w-full">
                  <label htmlFor="filter">Filter By </label>
                  <select
                    name="filter"
                    id="filter"
                    className="w-32 outline-none rounded-sm"
                  >
                    <option value="5">5 Star</option>
                    <option value="4">4 Star</option>
                    <option value="3">3 Star</option>
                    <option value="2">2 Star</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>
              </div>
              <h2 className="self-center text-sm">
                We found 12 matching reviews
              </h2>
              <div className="w-full flex flex-col md:w-full gap-6">
                <ProductReview />
                <ProductReview />
                <ProductReview />
                <ProductReview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductScreen;
