import React from 'react'
import Feature1 from '../assets/Feature1.png'
import Feature2 from '../assets/Feature2.png'
import Feature3 from '../assets/Feature3.png'

const Feature = () => {
  return (
    <div className='pt-20'>
      <div className='px-6 sm:px-10 md:px-20 lg:px-35 py-10 bg-[#065B5E]'>
        <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-8 sm:gap-6'>
          <img
            src={Feature1}
            alt='Feature 1'
            className='w-[100%] sm:w-[220px] md:w-[250px] lg:w-auto object-contain'
          />
          <img
            src={Feature2}
            alt='Feature 2'
            className='w-[100%] sm:w-[220px] md:w-[250px] lg:w-auto object-contain'
          />
          <img
            src={Feature3}
            alt='Feature 3'
            className='w-[100%] sm:w-[220px] md:w-[250px] lg:w-auto object-contain'
          />
        </div>
      </div>
    </div>
  )
}

export default Feature
