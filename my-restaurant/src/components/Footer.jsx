import React from 'react'
import contactimg from '../assets/contactimg.png'
import logo from '../assets/logo.png'
import { Facebook, Youtube, Twitter, Instagram, MessageCircle, Copyright } from 'lucide-react'

const Footer = () => {
  return (
    <div className='px-6 md:px-35 py-10'>
      {/* Top Section (Form + Image) */}
      <div className='relative flex flex-col md:block'>
        {/* ✅ Form (on top for small screens) */}
        <div className='order-1 md:order-2 bg-white rounded-xl md:h-[80vh] md:w-[40vw] md:absolute md:top-[-20px] md:right-20 shadow-[0_0_15px_rgba(0,0,0,0.2)] z-10 mb-6 md:mb-0'>
          <form className='space-y-6 p-8'>
            {/* First Name & Last Name */}
            <div className='flex flex-col md:flex-row gap-6'>
              <div className='flex-1'>
                <label className='block text-gray-700 font-medium mb-2'>First Name*</label>
                <input
                  type='text'
                  className='w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600'
                />
              </div>
              <div className='flex-1'>
                <label className='block text-gray-700 font-medium mb-2'>Last Name*</label>
                <input
                  type='text'
                  className='w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600'
                />
              </div>
            </div>

            {/* Email & Phone */}
            <div className='flex flex-col md:flex-row gap-6'>
              <div className='flex-1'>
                <label className='block text-gray-700 font-medium mb-2'>Email*</label>
                <input
                  type='email'
                  className='w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600'
                />
              </div>
              <div className='flex-1'>
                <label className='block text-gray-700 font-medium mb-2'>Phone*</label>
                <input
                  type='tel'
                  className='w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600'
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className='block text-gray-700 font-medium mb-2'>Message*</label>
              <textarea
                rows='4'
                className='w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] h-44 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600'
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition'
            >
              Send Message
            </button>
          </form>
        </div>

        {/* ✅ Image Section (below form on mobile) */}
        <div className='order-2 md:order-1 relative'>
          <img className='relative w-full h-auto object-cover rounded-l-xl' src={contactimg} alt='' />
          {/* Black Overlay */}
          <div
            className='absolute inset-0 bg-black/60'
            style={{
              WebkitMaskImage: `url(${contactimg})`,
              WebkitMaskSize: 'cover',
              WebkitMaskRepeat: 'no-repeat',
              WebkitMaskPosition: 'center',
              maskImage: `url(${contactimg})`,
              maskSize: 'cover',
              maskRepeat: 'no-repeat',
              maskPosition: 'center',
            }}
          ></div>
          <div className='absolute top-1/2 left-6 md:left-14 transform -translate-y-1/2 w-[90%] md:w-[440px]'>
            <p className='text-3xl md:text-4xl font-bold text-white mb-4 md:mb-8'>
              Bringing People Together Over Great Food
            </p>
            <p className='text-sm md:text-base text-white'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis
              expedita nostrum, commodi dignissimos consequuntur qui delectus, nisi
              numquam tempore rem officia doloremque quia aut.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Footer Bottom (logo → socials → copyright for mobile order) */}
      <div className='flex flex-col items-center mt-10 md:mt-8 md:flex-row md:justify-between gap-6'>
        <img src={logo} alt='' className='order-1 w-28 md:w-auto mb-4 md:mb-0' />

        <div className='flex gap-4 order-2 mb-4 md:mb-0'>
          <div className='bg-white border border-red-500 p-2 rounded-full'>
            <Facebook className='text-red-500 w-5 h-5' />
          </div>
          <div className='bg-white border border-red-500 p-2 rounded-full'>
            <Youtube className='text-red-500 w-5 h-5' />
          </div>
          <div className='bg-white border border-red-500 p-2 rounded-full'>
            <Twitter className='text-red-500 w-5 h-5' />
          </div>
          <div className='bg-white border border-red-500 p-2 rounded-full'>
            <MessageCircle className='text-red-500 w-5 h-5' />
          </div>
          <div className='bg-white border border-red-500 p-2 rounded-full'>
            <Instagram className='text-red-500 w-5 h-5' />
          </div>
        </div>

        <p className='order-3 flex items-center gap-1 text-gray-700 text-sm'>
          <Copyright className='w-4 h-4' /> 2020 Lift Media, All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
