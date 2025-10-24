import React from "react";
import abouticon from "../assets/abouticon.png";
import ProductCard from "../components/ProductCard";
import { products } from "../data/Products";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Popular = () => {
  return (
    <div className="px-6 sm:px-10 lg:px-35 pt-28 pb-16 relative">
      {/* Section Title */}
      <div className="flex flex-col mb-20 text-center">
        <p className="font-semibold text-2xl text-[#007A59]">Popular Items</p>
        <img className="w-12 mx-auto mt-2" src={abouticon} alt="section icon" />
      </div>

      {/* ✅ Pagination Dots (positioned top-right outside Swiper) */}
      <div className="absolute right-16 top-38 lg:top-[8.5rem] sm:right-10 lg:right-35 z-10">
        <div className="swiper-pagination !static flex justify-end" />
      </div>

      {/* ✅ Swiper Section - Centered on mobile */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={25}
        slidesPerView={1}
        loop={true}
        centeredSlides={true} // Add this line to center slides
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          prevEl: ".prev-btn",
          nextEl: ".next-btn",
        }}
        breakpoints={{
          480: { 
            slidesPerView: 1,
            spaceBetween: 15,
            centeredSlides: true // Disable centering on larger screens
          },
          640: { 
            slidesPerView: 2,
            spaceBetween: 20,
            centeredSlides: false
          },
          768: { 
            slidesPerView: 3,
            spaceBetween: 25,
            centeredSlides: false
          },
          1024: { 
            slidesPerView: 4,
            spaceBetween: 25,
            centeredSlides: false
          },
          1280: { 
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false
          }
        }}
        className="pb-10"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* ✅ Navigation Buttons BELOW Swiper */}
      <div className="flex justify-center lg:justify-end mt-10 gap-4">
        <button
          className="prev-btn bg-white shadow-md border border-gray-300 rounded-full p-3 hover:bg-[#007A59] hover:text-white transition"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          className="next-btn bg-white shadow-md border border-gray-300 rounded-full p-3 hover:bg-[#007A59] hover:text-white transition"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Popular;