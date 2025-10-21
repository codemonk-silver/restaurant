import React from 'react'
import abouticon from '../assets/abouticon.png';
import street from '../assets/street.jpg';
import { Phone, Mail } from 'lucide-react'; // ✅ Added Lucide icons

const Location = () => {
  return (
    <div className='px-35 pb-20'>
        {/* Section Header */}
        <div className="w-full mb-18 text-center">
          <p className="font-semibold text-[#007A59] text-2xl">Nearest Place</p>
          <img className="w-1/8 mx-auto" src={abouticon} alt="section icon" />
        </div>

        <div className='flex gap-5'>
          <img className='w-[60vw] h-[50vh] rounded-md' src={street} alt='' />

          <div className='flex flex-col'>
            {/* ✅ Phone Section */}
            <div className='bg-[#F9F9F9] rounded-md py-12 px-16 flex flex-col items-center justify-center text-center'>
              <div className='bg-[#007A59] p-3 rounded-full mb-2'>
                <Phone className='w-6 h-6 text-white' />
              </div>
              <p className='text-gray-700 font-medium'>Phone: +22466633069</p>
            </div>

            {/* ✅ Email Section */}
            <div className='bg-[#F9F9F9] rounded-md py-12 px-5 flex flex-col items-center justify-center text-center mt-3'>
              <div className='bg-[#007A59] p-3 rounded-full mb-2'>
                <Mail className='w-6 h-6 text-white' />
              </div>
              <p className='text-gray-700 font-medium'>Email: info@example.com</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Location
