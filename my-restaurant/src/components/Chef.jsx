import React from "react";
import abouticon from "../assets/abouticon.png";
import { Star, StarOff } from "lucide-react";
import chef1 from "../assets/chef1.png";
import chef2 from "../assets/chef2.png";
import chef3 from "../assets/chef3.png";

const Chef = () => {
  const Chafe = [
    {
      id: 1,
      title: "Head Chef",
      name: "Owen Grant",
      image: chef1,
      rating: 5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime quibusdam nulla facilis? Fugiat magni exercitationem tempora, ipsum, iure quas omnis officiis molestias tempore aliquam.",
    },
    {
      id: 2,
      title: "Sous Chef",
      name: "Derrick Grant",
      image: chef2,
      rating: 4,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime quibusdam nulla facilis? Fugiat magni exercitationem tempora, ipsum, iure quas omnis officiis molestias tempore aliquam.",
    },
    {
      id: 3,
      title: "Pastry Chef",
      name: "Racheal Grant",
      image: chef3,
      rating: 5,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime quibusdam nulla facilis? Fugiat magni exercitationem tempora, ipsum, iure quas omnis officiis molestias tempore aliquam.",
    },
  ];

  return (
    <div className="px-6 sm:px-10 lg:px-35 py-20">
      {/* Section Header */}
      <div className="w-full mb-32 text-center">
        <p className="font-semibold text-[#007A59] text-2xl">Our Chefs</p>
        <img className="w-1/11 mx-auto" src={abouticon} alt="section icon" />
      </div>

      {/* Chef Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-y-20 lg:space-y-0 gap-10">
        {Chafe.map((chef) => (
          <div
            key={chef.id}
            className="relative bg-gray-100 rounded-2xl shadow-md p-6 overflow-visible"
          >
            {/* Name + Image */}
            <div className="flex justify-between items-start relative">
              <div>
                <h2 className="font-bold text-xl text-gray-800">{chef.name}</h2>
                <p className="text-[#007A59] text-sm mt-1">{chef.title}</p>
              </div>

              {/* ✅ Image perfectly centered inside yellow background */}
              <div className="relative bg-[#ED9D08] w-32 h-38 rounded-lg flex justify-center items-end overflow-hidden -mt-25 shadow-lg">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="w-24 h-30 object-contain"
                />
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mt-3 mb-2">
              {[...Array(chef.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="text-yellow-400 w-5 h-5 fill-yellow-400"
                />
              ))}
              {[...Array(5 - chef.rating)].map((_, i) => (
                <StarOff key={i} className="text-gray-300 w-5 h-5" />
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">{chef.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chef;
