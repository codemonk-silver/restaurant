import React from 'react'
import abouticon from '../assets/abouticon.png'
import cust1 from '../assets/cust1.png'
import testbg from '../assets/testbg.png';

// 🖼️ Import your new top banner images
import test1 from '../assets/test1.png'
import test2 from '../assets/test2.png'
import test3 from '../assets/test3.png'
import test4 from '../assets/test4.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Star, StarOff } from "lucide-react";

const Testimonial = () => {
  const Customer = [
    {
      id: 1,
      name: 'Daniel Thomas',
      title: 'Designer',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iste esse voluptatum. Cupiditate aperiam vitae quasi architecto.',
      image: cust1,   // profile image
      banner: test1, // top image
      rating: 5
    },
    {
      id: 2,
      name: 'John Thomas',
      title: 'Editor',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iste esse voluptatum. Cupiditate aperiam vitae quasi architecto.',
      image: cust1,
      banner: test2,
      rating: 4
    },
    {
      id: 3,
      name: 'Daniel Mercy',
      title: 'Designer',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iste esse voluptatum. Cupiditate aperiam vitae quasi architecto.',
      image: cust1,
      banner: test3,
      rating: 5
    },
    {
      id: 4,
      name: 'Mike Thomas',
      title: 'Designer',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iste esse voluptatum. Cupiditate aperiam vitae quasi architecto.',
      image: cust1,
      banner: test4,
      rating: 5
    },
    {
      id: 5,
      name: 'Lord Thomas',
      title: 'Designer',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iste esse voluptatum. Cupiditate aperiam vitae quasi architecto.',
      image: cust1,
      banner: test1,
      rating: 5
    },
    {
      id: 6,
      name: 'Egg Thomas',
      title: 'Designer',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iste esse voluptatum. Cupiditate aperiam vitae quasi architecto.',
      image: cust1,
      banner: test3,
      rating: 5
    },
  ];

  return (
    <div className='px-8 lg:px-0 lg:pl-35 py-20 rounded-md relative overflow-hidden'>
      <div className='absolute inset-0 bg-center'  style={{ backgroundImage: `url(${testbg})` }}></div>
      <div className="absolute inset-0 backdrop-blur-sm bg-black/60"></div>

      {/* Section Header */}
      <div className="w-full text-center mb-12 relative z-10">
        <p className="font-semibold text-white text-2xl mb-3">Nearest Place</p>
        <img className="w-12 mx-auto" src={abouticon} alt="section icon" />
      </div>

      {/* Swiper Carousel for large screens */}
      <div className='mt-10 hidden lg:block'>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={20}
          slidesPerView={4.5}
          loop={true}
          className="testimonial-swiper"
        >
          {Customer.map((cust) => (
            <SwiperSlide key={cust.id}>
              {/* 🖼️ Top banner image */}
              <div className="rounded-xl overflow-hidden mb-4 h-44 w-full shadow-md">
                <img
                  src={cust.banner}
                  alt={cust.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <p className="text-white text-xs leading-relaxed mb-5 flex-grow">
                {cust.desc}
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 mt-auto">
                <img
                  src={cust.image}
                  alt={cust.name}
                  className="w-16 h-16 object-cover rounded-full flex-shrink-0"
                />
                <div className="flex flex-col">
                  <h3 className="font-semibold text-white text-base">
                    {cust.name}
                  </h3>
                  <p className="text-sm text-white">
                    {cust.title}
                  </p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, index) => (
                      <span key={index}>
                        {index < cust.rating ? (
                          <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
                        ) : (
                          <StarOff className="text-gray-300 w-4 h-4" />
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Grid layout for mobile/tablet screens */}
      <div className='mt-10 lg:hidden flex flex-col items-center gap-6 px-4 relative z-10'>
        {Customer.map((cust) => (
          <div key={cust.id} className="w-full max-w-md">
            {/* 🖼️ Top banner image */}
            <div className="rounded-xl overflow-hidden mb-4 h-44 w-full shadow-md">
              <img
                src={cust.banner}
                alt={cust.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Description */}
            <p className="text-white text-xs leading-relaxed mb-5">
              {cust.desc}
            </p>

            {/* Customer Info */}
            <div className="flex items-center gap-4">
              <img
                src={cust.image}
                alt={cust.name}
                className="w-16 h-16 object-cover rounded-full flex-shrink-0"
              />
              <div className="flex flex-col">
                <h3 className="font-semibold text-white text-base">
                  {cust.name}
                </h3>
                <p className="text-sm text-white">
                  {cust.title}
                </p>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, index) => (
                    <span key={index}>
                      {index < cust.rating ? (
                        <Star className="text-yellow-400 w-4 h-4 fill-yellow-400" />
                      ) : (
                        <StarOff className="text-gray-300 w-4 h-4" />
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
