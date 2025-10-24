import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { products } from "../data/Products"; 
import abouticon from "../assets/abouticon.png";
import { ChevronDown } from "lucide-react";

const MenuItemList = () => {
    const categories = [
        "Breakfast",
        "Lunch",
        "Dinner",
        "Pizza",
        "Burger",
        "Drinks",
        "Dessert",
      ];
    
      const [activeCategory, setActiveCategory] = useState("Breakfast");
      const [dropdownOpen, setDropdownOpen] = useState(false); // ✅ controls dropdown
    
      const filteredProducts = products
        .filter((item) => item.category === activeCategory)
        .slice(0, 12);
  return (
    <div className="px-6 sm:px-10 lg:px-35 pt-5 pb-16">

      <hr className="w-full border-0 lg:border-8 text-[#FF4033] rounded-full" />

      {/* ✅ Category Tabs / Dropdown */}
      <div className="mb-15 mt-0">
        {/* ✅ Desktop Tabs */}
        <div className="hidden sm:flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-base sm:text-lg font-medium px-5 py-2 rounded-b-xl border transition-all duration-300 ${
                activeCategory === category
                  ? " bg-[#FF4033] text-white border-[#FF4033]"
                  : "bg-white text-[#007A59] border-transparent hover:bg-[#FF4033] hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* ✅ Mobile Dropdown */}
        <div className="sm:hidden flex flex-col items-center relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between w-72 bg-[#FF4033] text-white font-medium px-5 py-2 rounded-full"
          >
            {activeCategory}
            <ChevronDown className={`ml-2 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
          </button>

          {dropdownOpen && (
            <div className="absolute top-full mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg z-10">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    setDropdownOpen(false); // auto-close
                  }}
                  className={`block w-full text-left px-5 py-2 text-[#007A59] hover:bg-[#FF4033] hover:text-white transition-all ${
                    activeCategory === category ? "bg-[#FF4033] text-white" : ""
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Products Grid */}
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
  )
}

export default MenuItemList