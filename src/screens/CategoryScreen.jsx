import React, { useEffect, useState } from "react";
import CategoryCard from "../components/category/CategoryCard";
import Featured from "../components/home/Featured";
import ProductCard from "../components/home/ProductCard";
import { FEATURED_PRODUCTS } from "../data";
import Carousel from "../components/Carousel";
import FeaturedCategoryCard from "../components/category/FeaturedCategoryCard";

const ALL_CATEGORIES = [
  {
    id: 1,
    title: "Fresh",
    image: "https://www.organicfacts.net/wp-content/uploads/vegetarianfood.jpg",
  },
  {
    id: 2,
    title: "Frozen",
    image: "https://www.organicfacts.net/wp-content/uploads/vegetarianfood.jpg",
  },
  {
    id: 3,
    title: "Produce",
    image: "https://www.organicfacts.net/wp-content/uploads/vegetarianfood.jpg",
  },
  {
    id: 4,
    title: "Snacks",
    image: "https://www.organicfacts.net/wp-content/uploads/vegetarianfood.jpg",
  },
  {
    id: 5,
    title: "Beverages",
    image: "https://www.organicfacts.net/wp-content/uploads/vegetarianfood.jpg",
  },
  {
    id: 6,
    title: "Bakery",
    image: "https://www.organicfacts.net/wp-content/uploads/vegetarianfood.jpg",
  },
  {
    id: 7,
    title: "Pantry",
    image: "https://www.organicfacts.net/wp-content/uploads/vegetarianfood.jpg",
  },
  {
    id: 8,
    title: "Dairy",
    image: "https://www.organicfacts.net/wp-content/uploads/vegetarianfood.jpg",
  },
  {
    id: 9,
    title: "Candy",
    image: "https://www.organicfacts.net/wp-content/uploads/vegetarianfood.jpg",
  },
  {
    id: 10,
    title: "Tea",
    image: "https://www.organicfacts.net/wp-content/uploads/vegetarianfood.jpg",
  },
  {
    id: 11,
    title: "Desserts",
    image: "https://www.organicfacts.net/wp-content/uploads/vegetarianfood.jpg",
  },
];

const CategoryScreen = () => {
  const [categories, setCategories] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setCategories(ALL_CATEGORIES);
    } else {
      setCategories(ALL_CATEGORIES.slice(0, 6));
    }
  }, [showAll]);

  const handleToggle = () => {
    setShowAll(!showAll);
  };
  return (
    <section className="min-h-screen py-1 md:py-12 flex flex-col gap-4 ">
      <h2 className="text-3xl font-bold text-center">Grocery</h2>
      <div className="flex flex-col items-center gap-4 ">
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {categories.map((a) => (
            <CategoryCard key={a.id} image={a.image} title={a.title} />
          ))}
        </div>
        <button
          className="border border-slate-200 outline-none px-3 py-1 hover:bg-gray-100 transition-all duration-500 rounded-md cursor-pointer"
          onClick={handleToggle}
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
      <div className="flex flex-col items-center gap-4 lg:gap-8">
        <h2 className="text-3xl font-bold">Featured products</h2>
        <div className="w-full flex items-center justify-center">
          <Carousel>
            {FEATURED_PRODUCTS.map((p) => (
              <ProductCard
                key={p.id}
                image={p.image}
                description={p.description}
                price={p.price}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold">Top deals on grocery</h2>
        <div className="w-full flex justify-center flex-wrap items-center gap-4">
          <FeaturedCategoryCard />
          <FeaturedCategoryCard />
          <FeaturedCategoryCard />
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-3xl font-bold">Top products on grocery</h2>
        <div className="w-full flex items-center justify-center">
          <Carousel>
            {FEATURED_PRODUCTS.map((p) => (
              <ProductCard
                key={p.id}
                image={p.image}
                description={p.description}
                price={p.price}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CategoryScreen;
