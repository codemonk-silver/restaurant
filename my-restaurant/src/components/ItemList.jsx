import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/Products"; 
import abouticon from "../assets/abouticon.png";

const ItemList = () => {
  const categories = [
    "Breakfast",
    "Lunch",
    "Dinner",
    "Pizza",
    "Burger",
    "Drinks",
    "Dessert",
  ];

  // Active category
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  // ✅ Filter products based on selected category
  const filteredProducts = products
    .filter((item) => item.category === activeCategory)
    .slice(0, 8); // limit to 8 items per category

  return (
    <div className="px-6 sm:px-10 lg:px-35 pt-20 pb-16">
      {/* ✅ Section Header */}
      <div className="w-full mb-15">
        <p className="text-[#007A59] font-bold text-center text-2xl">
          All Items
        </p>
        <img className="mx-auto w-1/12" src={abouticon} alt="Section Icon" />
      </div>

      <hr className="w-full border-8 text-[#FF4033] rounded-full" />

      {/* ✅ Category Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-15">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-base sm:text-lg font-medium px-5 py-2 rounded-b-xl border transition-all duration-300 ${
              activeCategory === category
                ? "bg-[#FF4033] text-white border-[#FF4033]"
                : "bg-white text-[#007A59] border-transparent hover:bg-[#FF4033] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* ✅ Products Grid (8 items: 4 top, 4 bottom) */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">
          No products found for {activeCategory}.
        </p>
      )}
      <div className="flex justify-center">
        <button className="px-6 py-3 bg-amber-600 rounded-full font-bold mt-15 hover:text-teal-400 hover:bg-amber-800">
            See All Item
        </button>
      </div>
    </div>
  );
};

export default ItemList;
