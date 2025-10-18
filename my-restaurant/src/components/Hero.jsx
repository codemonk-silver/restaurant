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
    <div className='px-35'>
        <div className='flex justify-between mt-10 items-center'>
            <div className='flex flex-col'>
                <p className='w-[683px] font-bold text-6xl mb-8'>
                    The Power Of Healthy Food <span className='text-red-500'>Breakfast</span>
                </p>
                <p className='w-[508px] mb-8'>
                    A restaurant is an establishment that prepares and serves food and drink to customer, typically
                    for consumption on the premises, but also offering take out for delivery.
                </p>
                <div className='flex gap-[10px]'>
                <button className='bg-green-800 text-sm px-[20px] py-[10px] text-white rounded-full w-[130px]'>
                    Order Now
                </button>
                <button className='bg-transparent text-sm px-[20px] py-[10px] text-red-600 border border-red-600 rounded-full  w-[130px]'>
                    Sign In
                </button>
                </div>
            </div>
            <div className='bg-gray-50 rounded-full w-[530.45px] h-[530px] relative'>
                <img src={heroimg} alt='heroimg' />
                <img className='absolute top-0 left-14 w-[140px]' src={Frame4} alt='' />
                <img className='absolute top-15 right-0 w-[140px]' src={Frame5} alt='' />
                <img className='absolute bottom-10 right-0 w-[140px] ' src={Frame6} alt='' />
                <img className='absolute top-83 left-[-40px] w-[140px]' src={Frame7} alt='' />
                
            </div>
        </div>
    </div>
     <div className='pl-35 pt-20'>
        <div className='flex justify-between'>
            <img className='w-[600px] h-auto' src={discount1} alt='' />
            <img src={discount2} alt='' />
        </div>
    </div>
    </>
  )
}

export default Hero