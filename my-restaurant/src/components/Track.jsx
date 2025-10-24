import React from 'react'
import play from '../assets/play.png'
import abouticon from '../assets/abouticon.png'
import trackimg from '../assets/trackimg.jpg'

const Track = () => {
  return (
    <div className='px-6 sm:px-10 md:px-20 lg:px-35 py-10 sm:py-16 md:py-20'>
      {/* Section Title */}
      <div className="flex flex-col mb-10 sm:mb-16 md:mb-20 text-center">
        <p className="font-bold text-xl sm:text-2xl md:text-3xl text-[#007A59]">Track your Order</p>
        <img className="w-10 sm:w-14 md:w-20 mx-auto mt-2" src={abouticon} alt="section icon" />
      </div>

      <div className='relative'>
        <img
          className='w-full h-[40vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] object-cover rounded-xl'
          src={trackimg}
          alt=''
        />
        <div className='w-full flex justify-center items-center h-full absolute top-0'>
          <img
            className='w-14 sm:w-18 md:w-20 h-auto bg-gray-50 rounded-full p-3 sm:pl-4 sm:pr-3 sm:py-3'
            src={play}
            alt=''
          />
        </div>
      </div>
    </div>
  )
}

export default Track
