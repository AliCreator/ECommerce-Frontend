import React from "react";
import Carousel from "../Carousel";
import CategoryDiscountCard from "./CategoryDiscountCard";

const CATEGORY_DISCOUNT = [
  {
    id: 1,
    purchase: "Buy 2, Get 1",
    discount: "Free",
    category: "Books, magazine, activites",
    event: "Black Friday",
  },
  {
    id: 2,
    purchase: "Save up to",
    discount: "$180",
    category: "Select Dyson Vaccums",
    event: "Black Friday",
  },
  {
    id: 3,
    purchase: "Up to",
    discount: "50% Off",
    category: "Headphones ",
    event: "Black Friday",
  },
  {
    id: 4,
    purchase: "Up to",
    discount: "40% Off",
    category: "Kitchen items",
    event: "Black Friday",
  },
];

const CategoryDiscount = () => {
  return (
    <div className="bg-white p-4 flex items-center justify-center flex-wrap gap-8 min-w-[12rem] ">
      {CATEGORY_DISCOUNT.map((dis) => (
        <CategoryDiscountCard
          key={dis.id}
          purchase={dis.purchase}
          discount={dis.discount}
          category={dis.category}
          event={dis.event}
        />
      ))}
    </div>
  );
};

export default CategoryDiscount;
