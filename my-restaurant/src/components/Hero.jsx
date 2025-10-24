import React from 'react'
import heroimg from '../assets/heroimg.png';
import Frame4 from '../assets/Frame4.png'
import Frame5 from '../assets/Frame5.png'
import Frame6 from '../assets/Frame6.png'
import Frame7 from '../assets/Frame7.png'
import discount1 from '../assets/discount1.png';
import discount2 from '../assets/discount2.png';

const Hero = () => {
  return (
    <>
      <div className='px-6 sm:px-10 md:px-20 lg:px-35'>
        <div className='flex flex-col lg:flex-row justify-between mt-10 items-center gap-20 lg:gap-10'>
          {/* Left Section */}
          <div className='flex flex-col text-center lg:text-left'>
            <p className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 sm:mb-8 lg:w-[683px]'>
              The Power Of Healthy Food <span className='text-red-500'>Breakfast</span>
            </p>
            <p className='mb-8 text-sm sm:text-base md:text-lg lg:w-[508px]'>
              A restaurant is an establishment that prepares and serves food and drink to customer, typically
              for consumption on the premises, but also offering take out for delivery.
            </p>
            <div className='flex sm:flex-row justify-center lg:justify-start gap-4 sm:gap-[10px]'>
              <button className='bg-green-800 lg:text-sm px-[10px] py-[10px] font-medium lg:px-[20px] lg:py-[10px] text-white rounded-full w-[120px] sm:w-[130px] text-lg'>
                Order Now
              </button>
              <button className='bg-transparent lg:text-sm px-[10px] py-[10px] font-medium lg:px-[20px] lg:py-[10px] text-red-600 border border-red-600 rounded-full w-[100px] sm:w-[130px] text-lg'>
                Sign In
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className='bg-gray-50 rounded-full w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[530.45px] lg:h-[530px] relative flex items-center justify-center'>
            <img src={heroimg} alt='heroimg' className='w-[100%] lg:w-[100%] h-auto' />
            <img className='absolute top-6 lg:top-0 left-[-17px] sm:left-14 w-[120px] sm:w-[140px]' src={Frame4} alt='' />
            <img className='absolute top-12 lg:top-14 right-[0px] lg:right-0 w-[120px] sm:w-[140px]' src={Frame5} alt='' />
            <img className='absolute bottom-4 lg:bottom-15 right-0 w-[120px] sm:w-[140px]' src={Frame6} alt='' />
            <img className='absolute bottom-14 lg:bottom-40 left-[0px] sm:left-[-20px] w-[120px] sm:w-[140px]' src={Frame7} alt='' />
          </div>
        </div>
      </div>

      {/* Discount Images */}
      <div className='relative px-6 sm:pl-10 md:pl-20 lg:pl-35 pt-10 sm:pt-20'>
        <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6'>
          <img className='w-full sm:w-[600px] h-auto' src={discount1} alt='' />
          <img className='w-full sm:w-auto h-auto hidden lg:block lg:absolute lg:right-0' src={discount2} alt='' />
        </div>
      </div>
    </>
  )
}

export default Hero
