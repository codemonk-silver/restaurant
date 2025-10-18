import React from 'react'
import Feature1 from '../assets/Feature1.png'
import Feature2 from '../assets/Feature2.png'
import Feature3 from '../assets/Feature3.png'

const Feature = () => {
  return (
    <div className='pt-20'>
    <div className='px-35 py-10 bg-[#065B5E]'>
        <div className='flex justify-between '>
            <img src={Feature1} alt='' />
            <img src={Feature2} alt='' />
            <img src={Feature3} alt='' />
        </div>
    </div>
    </div>
  )
}

export default Feature