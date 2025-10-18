import React from 'react'
import aboutimg from '../assets/aboutimg.png';
import abouticon from '../assets/abouticon.png';
import aboutstar from '../assets/aboutstar.png';

const AboutUs = () => {
  return (
    <div className='px-35 pt-30'>
        <div className='flex gap-15'>
            <img className='w-[600px] h-auto' src={aboutimg} alt='' />
            <div className='flex flex-col mt-20'>
            <p className='font-bold text-2xl text-[#007A59]'>
                About Us
            </p>
            <img className='w-1/8' src={abouticon} alt='' />
            <p className='my-6 font-medium w-xl'>
                Bringing people together through delicious food, warm hospitality, and a passion for great service.
            </p>
            <p className='font-light mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quae repellendus numquam facere, possimus aut cum quas rerum quibusdam iusto quod! Unde omnis ducimus, eius iusto mollitia illo accusantium dignissimos.</p>
            <div className='flex justify-between mb-8'>
                <div className='flex flex-col'>
                    <p className='text-red-500 font-semibold text-3xl'>
                        10K+
                    </p>
                    <p className='font-medium'>Happy Customers</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-red-500 font-semibold text-3xl'>
                        98+
                    </p>
                    <p className='font-medium'>Guest Satisfaction</p>
                </div>
                <div className='flex flex-col'>
                    <p className='text-red-500 font-medium text-xl'>
                        <img className='w-2/4' src={aboutstar} alt='' />
                    </p>
                    <p className='font-medium'>Guest Experience</p>
                </div>
            </div>
            <p className='font-medium mb-2'>Jack Auther</p>
            <hr className='w-1/12 text-gray-300'></hr>
            <p className='text-gray-300 font-medium'>Owner</p>
        </div>
        </div>
        
    </div>
  )
}

export default AboutUs