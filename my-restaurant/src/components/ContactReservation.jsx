import React from 'react'

const ContactReservation = () => {
  return (
    <div className='px-35 pb-16'>
      <div className='bg-[#ED9D081A] h-[100vh] flex gap-14 items-start pt-4 px-12'>
        <div className='flex flex-col h-[100vh]'>
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
        <div className="flex flex-col space-y-[0px] mt-10">
        <div className='flex gap-30 mt-10'>
            <div className='relative w-[100px]'>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-[50px]'></div>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-[50px] right-[-52px]'></div>
                <div className='absolute top-5 left-[10%] w-[130px] h-20 
                    backdrop-blur-xs bg-black/20 border-l-3 border-green-700 
                    rounded-md shadow-md text-white pl-2'>T1</div>
            </div>
             <div className='relative w-[100px]'>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-[50px]'></div>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-1.5 left-[70px]'></div>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-[50px] right-[-73px]'></div>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-[85px] left-[70px]'></div>
                <div className='absolute top-5 left-[10%] w-[150px] h-20 
                    backdrop-blur-xs bg-black/20 border-l-3 border-green-700 
                    rounded-md shadow-md text-white pl-2'>T1</div>
            </div>
            <div className='relative w-[100px]'>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-[50px] left-[30px]'></div>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-1.5 left-[80px]'></div>
                 <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-1.5 left-[140px]'></div>
                 <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-1.5 left-[200px]'></div>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-[50px] right-[-180px]'></div>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-[85px] left-[80px]'></div>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-[85px] left-[140px]'></div>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-[85px] left-[200px]'></div>
                <div className='absolute top-5 left-[40%] w-[230px] h-20 
                    backdrop-blur-xs bg-black/20 border-l-3 border-green-700 
                    rounded-md shadow-md text-white pl-2'>T1</div>
            </div>
            <div className='relative w-[100px]'>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-1.5 left-[180px]'></div>
                <div className='h-7 w-7 bg-gray-700 rounded-full absolute top-[85px] right-[-110px]'></div>
                <div className='absolute top-5 left-[130px] w-[130px] h-20 
                    backdrop-blur-xs bg-black/20 border-l-3 border-green-700 
                    rounded-md shadow-md text-white pl-2'>T1</div>
            </div>
        </div>
        <div className="flex mt-[140px] gap-[45px]">
                {/* ===== Group 1 ===== */}
                <div className="relative w-[300px]">
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-[50px] left-0"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-1.5 left-[80px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-1.5 left-[140px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-1.5 left-[200px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-[50px] right-[-3px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-[85px] left-[80px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-[85px] left-[140px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-[85px] left-[200px]"></div>
                    
                    {/* Blur Glass Overlay */}
                    <div className="absolute top-5 left-[4%] w-[280px] h-20 
                    backdrop-blur-sm bg-black/30 border-l-3 border-green-700 
                    rounded-md shadow-md text-white pl-2 flex items-center">
                    T1
                    </div>
                </div>

                {/* ===== Group 2 ===== */}
                <div className="relative w-[300px]">
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-[50px] left-[20px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-1.5 left-[100px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-1.5 left-[160px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-1.5 left-[220px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-[50px] right-[-20px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-[85px] left-[100px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-[85px] left-[160px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-[85px] left-[220px]"></div>

                    {/* Blur Glass Overlay */}
                    <div className="absolute top-5 left-[10%] w-[280px] h-20 
                    backdrop-blur-sm bg-black/30 border-l-4 border-green-700 
                    rounded-md shadow-md text-white pl-2 flex items-center">
                    T2
                    </div>
                </div>

                {/* ===== Group 3 ===== */}
                <div className="relative w-[250px]">
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-1.5 left-[130px]"></div>
                    <div className="h-7 w-7 bg-gray-700 rounded-full absolute top-[85px] left-[130px]"></div>

                    {/* Blur Glass Overlay */}
                    <div className="absolute top-5 left-[20%] w-[180px] h-20 
                    backdrop-blur-sm bg-black/30 border-l-4 border-green-700 
                    rounded-md shadow-md text-white pl-2 flex items-center">
                    T3
                    </div>
                </div>
                

                </div>
  
        </div>
        </div>
        <div className='bg-white w-[15vw] h-[65vh] rounded-lg'>
                <div className='grid grid-cols-3 gap-5 px-5 py-5'>
                    <div className="w-11 h-11 bg-gray-300 rounded-full flex items-center 
                    justify-center text-black font-semibold">T1</div>
                    <div className="w-11 h-11 bg-gray-300 rounded-full flex items-center 
                    justify-center text-black font-semibold">T1</div>
                    <div className="w-11 h-11 bg-red-700 rounded-full flex items-center 
                    justify-center text-white font-semibold">T3</div>
                    <div className="w-11 h-11 bg-gray-300 rounded-full flex items-center 
                    justify-center text-black font-semibold">T1</div>
                    <div className="w-11 h-11 bg-gray-300 rounded-full flex items-center 
                    justify-center text-black font-semibold">T1</div>
                    <div className="w-11 h-11 bg-gray-300 rounded-full flex items-center 
                    justify-center text-black font-semibold">T1</div>
                    <div className="w-11 h-11 bg-red-700 rounded-full flex items-center 
                    justify-center text-white font-semibold">T7</div>
                    <div className="w-11 h-11 bg-gray-300 rounded-full flex items-center 
                    justify-center text-black font-semibold">T1</div>
                    <div className="w-11 h-11 bg-red-700 rounded-full flex items-center 
                    justify-center text-white font-semibold">T9</div>
                    <div className="w-11 h-11 bg-gray-300 rounded-full flex items-center 
                    justify-center text-black font-semibold">T1</div>
                    <div className="w-11 h-11 bg-gray-300 rounded-full flex items-center 
                    justify-center text-black font-semibold">T1</div>
                    <div className="w-11 h-11 bg-gray-300 rounded-full flex items-center 
                    justify-center text-black font-semibold">T1</div>
                    <div className="w-11 h-11 bg-red-700 rounded-full flex items-center 
                    justify-center text-white font-semibold">T13</div>
                    <div className="w-11 h-11 bg-red-700 rounded-full flex items-center 
                    justify-center text-white font-semibold">T1</div>
                    <div className="w-11 h-11 bg-gray-300 rounded-full flex items-center 
                    justify-center text-black font-semibold">T1</div>
                    <div className="w-11 h-11 bg-gray-300 rounded-full flex items-center 
                    justify-center text-black font-semibold">T1</div>
                    <div className="w-11 h-11 bg-red-700 rounded-full flex items-center 
                    justify-center text-white font-semibold">T1</div>
                    <div className="w-11 h-11 bg-gray-300 rounded-full flex items-center 
                    justify-center text-black font-semibold">T1</div>
                </div>
                <div className='w-full flex justify-center mt-2'>
                    <button className='bg-green-800 text-white text-md rounded-full font-medium px-16 py-1.5'>
                        Book
                    </button>
                </div>
        </div>
      </div>
    </div>
  )
}

export default ContactReservation
