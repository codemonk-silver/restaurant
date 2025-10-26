import React from 'react'

const ContactReservation = () => {
  return (
    <div className='px-35 pb-16'>
      <div className='bg-yellow-100 h-[100vh] flex gap-14 items-start pt-4 px-12'>
        <div className='flex w-[60vw] bg-white rounded-lg justify-between px-8 py-3 items-center'>
          <div className='flex gap-4'>
            <p className='bg-green-800 text-white px-3 py-1.5 rounded-full'>
              All Table
            </p>
            <p className='bg-gray-300 text-black px-3 py-1.5 rounded-full'>
              Reservation
            </p>
          </div>

          {/* ✅ Radio Buttons Section */}
          <div className='flex items-center gap-6'>
            {/* Available (Green) */}
            <label className='flex items-center gap-2 cursor-default'>
              <div className='relative flex items-center justify-center'>
                <span className='w-5 h-5 rounded-full border-2 border-green-700 flex items-center justify-center'>
                  <span className='w-2.5 h-2.5 bg-green-700 rounded-full'></span>
                </span>
              </div>
              <span className='text-green-700 font-medium'>Available</span>
            </label>

            {/* Reserved (Red) */}
            <label className='flex items-center gap-2 cursor-default'>
              <div className='relative flex items-center justify-center'>
                <span className='w-5 h-5 rounded-full border-2 border-red-600 flex items-center justify-center'>
                  <span className='w-2.5 h-2.5 bg-red-600 rounded-full'></span>
                </span>
              </div>
              <span className='text-red-600 font-medium'>Reserved</span>
            </label>

            {/* Available Soon (Yellow) */}
            <label className='flex items-center gap-2 cursor-default'>
              <div className='relative flex items-center justify-center'>
                <span className='w-5 h-5 rounded-full border-2 border-yellow-500 flex items-center justify-center'>
                  <span className='w-2.5 h-2.5 bg-yellow-500 rounded-full'></span>
                </span>
              </div>
              <span className='text-yellow-600 font-medium'>Available Soon</span>
            </label>
          </div>
        </div>
        <div className='bg-white w-[15vw] h-[50vh] rounded-lg'>

        </div>
      </div>
    </div>
  )
}

export default ContactReservation
