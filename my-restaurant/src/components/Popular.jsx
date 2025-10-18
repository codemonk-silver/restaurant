import React, { useState } from 'react'
import abouticon from '../assets/abouticon.png';

const Popular = () => {


  return (
    <div className='px-35 pt-28'>
        <div className='flex flex-col mb-10'>
            <p className=' font-semibold text-center text-2xl text-[#007A59]'>
                Popular Items
            </p>
            <img className='w-1/8 mx-auto' src={abouticon} alt='' />
        </div>
        <div className=''>
            
        </div>
    </div>
  )
}

export default Popular