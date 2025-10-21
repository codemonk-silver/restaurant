import React from 'react'
import { Star, ShoppingBag } from 'lucide-react'

const ProductCard = ({ product }) => {
  const stars = Array(5).fill(0);

  return (
    <div className="relative rounded-lg p-4 flex flex-col h-80" style={{ background: 'linear-gradient(to bottom, white 0%, white 30%, rgba(249, 249, 249, 1) 30%, rgba(249, 249, 249, 1) 100%)' }}>
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="absolute top-[0px] left-1/2 transform -translate-x-1/2 w-40 h-40 object-cover rounded-md"
      />

      {/* Product Info */}
      <div className="absolute bottom-20 left-0 w-full flex justify-between items-start px-3">
        <div className="flex flex-col">
          <h2 className="text-md font-bold">{product.name}</h2>
          <div className="flex">
            {stars.map((_, i) => (
              <Star
                key={i}
                size={10}
                className={
                  i < product.rating
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'text-gray-300'
                }
              />
            ))}
          </div>
        </div>
        <p className="font-bold text-right">${product.price}</p>
      </div>

      {/* Buttons */}
      <div className="absolute bottom-5 left-[30px] w-full flex gap-12">
        <button className="px-8 py-2 bg-green-950 text-white rounded-full hover:bg-green-700 transition font-medium">
          Order Now
        </button>
        <div className="bg-red-500 p-3 rounded-full cursor-pointer hover:bg-red-500 transition-colors">
          <ShoppingBag className="text-white" size={16} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;