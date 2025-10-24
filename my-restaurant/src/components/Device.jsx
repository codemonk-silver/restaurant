import React from 'react'
import abouticon from '../assets/abouticon.png'
import phone from '../assets/phone.png'
import phonepep from '../assets/phonepep.png'
import phonebag from '../assets/phonebag.png'
import phonelogo from '../assets/phonelogo.png'

const Device = () => {
  return (
    <div className='hidden lg:block px-35 py-10'>
        {/* Section Header */}
        <div className="w-full text-center mb-42">
          <p className="font-semibold text-green-800 text-2xl mb-3">App For Your Andriod And IOS</p>
          <img className="h-1.5 object-contain mx-auto" src={abouticon} alt="section icon" />
        </div>

        <div className='flex justify-between'>
          <div className='-mt-20'>
            <img className='object-contain' src={phonepep} alt='' />
            <p className='font-bold'>Get to easily find your Food</p>
            <p className='font-bold text-5xl'>
              Download the Food App
            </p>
            <p className='font-medium mt-3'>
              Download this app and order your food online to get fatest delivery
            </p>
            <img className='mt-8' src={phonelogo} alt='' />
          </div>

          <div className='relative'>
            <img className='relative' src={phonebag} alt='' />
            <img className='absolute top-[-70px] left-26' src={phone} alt='' />
          </div>
        </div>
    </div>
  )
}

export default Device
