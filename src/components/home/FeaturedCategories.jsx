import React from "react";
import { Link } from "react-router-dom";
import { FEATURED_CATEGORIES } from "../../data";
import FeaturedCatCard from "./FeaturedCatCard";

const FeaturedCategories = () => {
  return (
    <div className="bg-white dark:bg-slate-950 dark:text-white text-black p-4 flex flex-col gap-4 items-center">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-4xl font-bold">Featured Categories</h2>
        <Link to="/">Shop all</Link>
      </div>
      <div className="flex items-center justify-center gap-5 flex-wrap">
        {FEATURED_CATEGORIES.map(c => <FeaturedCatCard key={c.id} image={c.image} cat={c.cat} />)}
      </div>
    </div>
  );
};

export default FeaturedCategories;
