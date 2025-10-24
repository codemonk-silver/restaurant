import React from 'react'
import aboutimg from '../assets/aboutimg.png';
import abouticon from '../assets/abouticon.png';
import aboutstar from '../assets/aboutstar.png';

const AboutUs = () => {
  return (
    <div className='px-6 sm:px-10 md:px-20 lg:px-35 pt-10 sm:pt-20 lg:pt-30'>
      <div className='flex flex-col-reverse lg:flex-row gap-10 lg:gap-15 items-center'>
        {/* Left Image */}
        <img
          className='w-full sm:w-[500px] lg:w-[600px] h-auto object-contain'
          src={aboutimg}
          alt='About'
        />

        {/* Right Content */}
        <div className='flex flex-col mt-10 lg:mt-20 text-center lg:text-left'>
          <p className='font-bold text-xl sm:text-2xl text-[#007A59]'>
            About Us
          </p>
          <div className='flex justify-center lg:justify-start'>
            <img className='w-[50px] sm:w-[70px] mt-2' src={abouticon} alt='Icon' />
          </div>

          <p className='my-6 font-medium text-base sm:text-lg lg:w-xl'>
            Bringing people together through delicious food, warm hospitality, and a passion for great service.
          </p>

          <p className='font-light mb-6 text-sm sm:text-base leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quae repellendus numquam facere, possimus aut cum quas rerum quibusdam iusto quod! Unde omnis ducimus, eius iusto mollitia illo accusantium dignissimos.
          </p>

          {/* Stats */}
          <div className='flex flex-row sm:flex-row justify-between items-center gap-6 sm:gap-4 mb-8'>
            <div className='flex flex-col items-center lg:items-start'>
              <p className='text-red-500 font-semibold text-2xl sm:text-3xl'>10K+</p>
              <p className='font-medium text-sm sm:text-base'>Happy Customers</p>
            </div>

            <div className='flex flex-col items-center lg:items-start'>
              <p className='text-red-500 font-semibold text-2xl sm:text-3xl'>98+</p>
              <p className='font-medium text-sm sm:text-base'>Guest Satisfaction</p>
            </div>

            <div className='flex flex-col items-center lg:items-start'>
              <img className='w-[60px] sm:w-[80px]' src={aboutstar} alt='Stars' />
              <p className='font-medium text-sm sm:text-base'>Guest Experience</p>
            </div>
          </div>

          {/* Owner Info */}
          <div className='flex flex-col items-center lg:items-start'>
            <p className='font-medium mb-2'>Jack Auther</p>
            <hr className='w-12 border-gray-300 mb-1' />
            <p className='text-gray-400 font-medium text-sm sm:text-base'>Owner</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
