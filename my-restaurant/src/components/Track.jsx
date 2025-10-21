import React from 'react'
import play from '../assets/play.png'
import abouticon from '../assets/abouticon.png'

const Track = () => {
  return (
    <div className='px-35 py-20'>
         {/* Section Title */}
              <div className="flex flex-col mb-20 text-center">
                <p className="font-bold text-2xl text-[#007A59]">Track your Order</p>
                <img className="w-1/7 mx-auto" src={abouticon} alt="section icon" />
              </div>
        <div className='bg-gray-300 w-full h-[60vh] rounded-xl'>
            <div className='w-full flex justify-center items-center h-full'>
                    <img className='w-18 h-auto bg-gray-50 rounded-full pl-4 pr-3 py-3' src={play} alt='' />
            </div>
        </div>
    </div>
  )
}

export default Track