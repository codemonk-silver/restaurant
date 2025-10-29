import React from 'react'

const ItemDetailsBenefit = () => {
  const Benefit = [
    {
      id: 1,
      title: 'High in Protein',
      desc: 'The grilled chicken provides lean protein, which helps build and repair muscles and keep you full longer.'
    },
    {
      id: 2,
      title: 'Good source of Fiber',
      desc: 'The romaine lettuce and other vegetables add fiber, which supports digestion and helps control blood sugar levels.'
    },
    {
      id: 3,
      title: 'Rich in Vitamins and Minerals',
      desc: 'Contains Vitamin A, Vitamin C, calcium, and Iron, especially from lettuce and Parmesan cheese.'
    },
    {
      id: 4,
      title: 'Healthy Fats',
      desc: 'The dressing and the cheese contain healthy fats, which help absorb nutrients and provide energy. (Note: Use in moderation if watching calories.)'
    },
    {
      id: 5,
      title: 'Low Carb Option (if croutons are limited)',
      desc: 'Ideal for people following low carb or keto friendly diets.'
    },
    {
      id: 6,
      title: 'Quick and Balanced Meal',
      desc: 'Offers a good balance of protein, veggies, and fats — great for lunch or dinner.'
    }
  ]

  return (
    <div className='px-35 py-10'>
      <p className='font-bold mb-6 text-2xl'>
        What are the benefits of this food?
      </p>

      <div className='flex flex-col gap-3'>
        {Benefit.map((item) => (
          <div key={item.id}>
            {/* ✅ Title (no background) */}
            <p className='text-md font-bold text-black mb-2'>
              {item.title}
            </p>

            {/* ✅ Description (full-width green background) */}
            <div className='bg-[#007A591A] text-black font-semibold py-2 px-6 rounded-xl'>
              <p className='max-w-5xl leading-relaxed text-sm'>
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ItemDetailsBenefit
