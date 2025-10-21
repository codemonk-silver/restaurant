import React from 'react'
import abouticon from '../assets/abouticon.png';

const HomeBlog = () => {
  return (
    <div className='px-35 py-10'>
        {/* Section Title */}
        <div className="flex flex-col mb-20 text-center">
                <p className="font-semibold text-2xl text-[#007A59]">Popular Items</p>
                <img className="w-12 mx-auto mt-2" src={abouticon} alt="section icon" />
        </div>
    </div>
  )
}

export default HomeBlog