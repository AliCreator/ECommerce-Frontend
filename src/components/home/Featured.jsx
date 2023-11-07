import React from "react";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";
import Carousel from "../Carousel";
import { FEATURED_PRODUCTS } from "../../data";



const Featured = () => {
  return (
    <div className="bg-blue-50/25 h-full p-6">
      <div className="flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold">Merry & Bright Days</h2>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <CategoryCard text="Lights" image="./images/hero.png" />
            <CategoryCard text="Lights" image="./images/vegetable.png" />
            <CategoryCard text="Lights" image="./images/hero.png" />
            <CategoryCard text="Lights" image="./images/vegetable.png" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold">Top Picks For You</h2>
          <div className="flex items-center gap-6 relative">
           <Carousel>
            {FEATURED_PRODUCTS.map(p => <ProductCard key={p.id} image={p.image} description={p.description} price={p.price}/>)}
           </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
