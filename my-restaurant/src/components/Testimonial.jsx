import React from 'react'
import abouticon from '../assets/abouticon.png'
import cust1 from '../assets/cust1.png';
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
      image: cust1,
      rating: 5
    },
    {
      id: 2,
      name: 'John Thomas',
      title: 'Editor',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iste esse voluptatum. Cupiditate aperiam vitae quasi architecto.',
      image: cust1,
      rating: 4
    },
    {
      id: 3,
      name: 'Daniel Mercy',
      title: 'Designer',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iste esse voluptatum. Cupiditate aperiam vitae quasi architecto.',
      image: cust1,
      rating: 5
    },
    {
      id: 4,
      name: 'Mike Thomas',
      title: 'Designer',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iste esse voluptatum. Cupiditate aperiam vitae quasi architecto.',
      image: cust1,
      rating: 5
    },
    {
      id: 5,
      name: 'Lord Thomas',
      title: 'Designer',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iste esse voluptatum. Cupiditate aperiam vitae quasi architecto.',
      image: cust1,
      rating: 5
    },
    {
      id: 6,
      name: 'Egg Thomas',
      title: 'Designer',
      desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore iste esse voluptatum. Cupiditate aperiam vitae quasi architecto',
      image: cust1,
      rating: 5
    },
  ];

  return (
    <div className='pl-35 py-20 bg-[rgba(0,0,0,0.5)] rounded-md'>
        
        {/* Section Header */}
        <div className="w-full text-center mb-12">
          <p className="font-semibold text-white text-2xl mb-3">Nearest Place</p>
          <img className="w-12 mx-auto" src={abouticon} alt="section icon" />
        </div>

        {/* Swiper Carousel */}
        <div className='mt-10'>
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
                <div className="bg-gray-100 rounded-xl shadow-md h-44 flex flex-col mb-4"></div>
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

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="swiper-button-prev bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Testimonial