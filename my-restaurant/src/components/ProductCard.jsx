import React from 'react'
import { Star, ShoppingBag } from 'lucide-react';

const ProductCard = ({product}) => {
    const stars = Array(5).fill(0);

  return (
    <div className='relative border rounded-lg shadow-sm p-4 flex flex-col items-center bg-gray-200'>
        <img src={product.image} alt={product.name} className='w-40 h-40 object-cover rounded-md mb-3' />
        <div className='flex justify-between'>
            <div className='flex flex-col'>
            <h2 className='text-lg font-semibold text-gray-800'>
                {product.name}
            </h2>
            <div className='flex justify-center'>
                {stars.map((_, i) => (
                    <Star key={i} size={18} className={i < product.rating ? 'fill-yellow-400 text-yellow-400' :
                        'text-gray-300'
                    } />
                ))}
            </div>
            </div>
            <p className='text-blue-600 font-bold'>${product.price}</p>
        </div>
        <div className='flex gap-4'>
            <button className='px-3 py-1.5 bg-green-950 text-white rounded-full hover:bg-green-700 transition font-medium'>
                Order Now
            </button>
            <div className="bg-[#065B5E] p-2 rounded-full cursor-pointer hover:bg-green-800 transition-colors">
                <ShoppingBag className="text-white" size={16} />
            </div>
        </div>
    </div>
  )
}

export default ProductCard