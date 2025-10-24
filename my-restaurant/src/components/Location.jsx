import React from 'react'
import abouticon from '../assets/abouticon.png';
import street from '../assets/street.jpg';
import { Phone, Mail } from 'lucide-react'; // ✅ Added Lucide icons

const Location = () => {
  return (
    <div className='px-6 sm:px-10 lg:px-35 pb-20'>
      {/* Section Header */}
      <div className="w-full mb-18 text-center">
        <p className="font-semibold text-[#007A59] text-2xl sm:text-3xl">Nearest Place</p>
        <img className="w-1/6 sm:w-1/8 mx-auto" src={abouticon} alt="section icon" />
      </div>

      {/* Responsive layout */}
      <div className='flex flex-col lg:flex-row gap-5 items-center lg:items-start'>
        <img className='w-full lg:w-[60vw] h-[40vh] sm:h-[50vh] rounded-md object-cover' src={street} alt='' />

        <div className='flex flex-col w-full lg:w-auto'>
          {/* ✅ Phone Section */}
          <div className='bg-[#F9F9F9] rounded-md py-10 px-10 sm:py-12 sm:px-16 flex flex-col items-center justify-center text-center'>
            <div className='bg-[#007A59] p-3 rounded-full mb-2'>
              <Phone className='w-6 h-6 text-white' />
            </div>
            <p className='text-gray-700 font-medium text-sm sm:text-base'>Phone: +22466633069</p>
          </div>

          {/* ✅ Email Section */}
          <div className='bg-[#F9F9F9] rounded-md py-10 px-8 sm:py-12 sm:px-5 flex flex-col items-center justify-center text-center mt-3'>
            <div className='bg-[#007A59] p-3 rounded-full mb-2'>
              <Mail className='w-6 h-6 text-white' />
            </div>
            <p className='text-gray-700 font-medium text-sm sm:text-base'>Email: info@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Location
