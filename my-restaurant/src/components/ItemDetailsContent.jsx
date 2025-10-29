import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/Products";

const ItemDetailsContent = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center py-40 text-center">
        <p className="text-gray-600 text-xl mb-4">Product not found.</p>
        <Link
          to="/"
          className="bg-[#FF4033] text-white px-6 py-3 rounded-full hover:bg-[#007A59] transition-all"
        >
          Back to All Items
        </Link>
      </div>
    );
  }

  // ✅ Manage main image and fade animation
  const [mainImage, setMainImage] = useState(product.image);
  const [fade, setFade] = useState(false);

  const handleImageClick = (thumb) => {
    if (thumb === mainImage) return;
    setFade(true);
    setTimeout(() => {
      setMainImage(thumb);
      setFade(false);
    }, 200); // smooth timing
  };

  const thumbnails = [
    product.image,
    product.image2 || product.image,
    product.image3 || product.image,
    product.image4 || product.image,
  ];

  const [quantity, setQuantity] = useState(1);
  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="px-6 sm:px-10 lg:px-35 pt-14 pb-20">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start p-6 sm:p-10">
        {/* Product Image Section */}
        <div className="flex flex-col items-center">
          {/* ✅ Main Big Image with fade animation */}
          <img
            src={mainImage}
            alt={product.name}
            className={`rounded-2xl w-[600px] h-auto object-cover transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* ✅ Thumbnails */}
          <div className="flex gap-4 mt-5">
            {thumbnails.map((thumb, index) => (
              <img
                key={index}
                src={thumb}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleImageClick(thumb)}
                className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition-all duration-200 ${
                  mainImage === thumb
                    ? "border-[#007A59] scale-105"
                    : "border-transparent hover:border-[#FF4033]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4 mt-26">
            {product.name}
          </h1>

          <p className="text-gray-600 text-sm leading-relaxed mb-2 whitespace-pre-line">
            {product.description || "No description available for this item."}
          </p>

          <div className="flex justify-between items-center">
            {/* Counter */}
            <div className="flex items-center gap-4">
              <button
                onClick={decrease}
                className="bg-[#FF4033] text-white w-8 h-8 rounded-full text-lg font-bold flex items-center justify-center hover:bg-red-700 transition-all duration-200"
              >
                –
              </button>

              <span className="text-2xl font-semibold text-gray-800 min-w-[20px] text-center select-none">
                {quantity}
              </span>

              <button
                onClick={increase}
                className="bg-[#007A59] text-white w-8 h-8 rounded-full text-lg font-bold flex items-center justify-center hover:bg-green-700 transition-all duration-200"
              >
                +
              </button>
            </div>

            <p className="text-xl font-semibold text-[#FF4033] mb-8">
              ${product.price}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-3">
            <button className="bg-[#007A59] text-white px-4 py-1.5 rounded-full font-semibold hover:bg-[#007A59] transition-all">
              Order Now
            </button>

            <button className="border border-red-600 text-red-600 px-4 py-1.5 rounded-full font-semibold hover:bg-[#007A59] hover:text-white transition-all">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      {/* Optional More Info Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-[#007A59] mb-4">
          More About This Item
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          This {product.name.toLowerCase()} is prepared with premium ingredients
          and cooked to perfection. We ensure freshness and quality in every
          bite.
        </p>
      </div>
    </div>
  );
};

export default ItemDetailsContent;
