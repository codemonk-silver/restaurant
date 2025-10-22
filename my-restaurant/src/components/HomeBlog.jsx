import React from "react";
import abouticon from "../assets/abouticon.png";
import blogimg from "../assets/blogimg.png"; 
import blogdine from '../assets/blogdine.png';
import blogfood from '../assets/blogfood.png';

const HomeBlog = () => {
  const Blog = [
    {
      id: 1,
      image: blogdine,
      category: "Dining",
      author: "Chef Daniel",
      title: "Discover our new summer menu with ingredients",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, assumenda! Dolores ab tenetur itaque aliquid accusantium necessitatibus nihil nam sapiente.",
      date: "July-15-2025",
    },
    {
      id: 2,
      image: blogfood,
      category: "Food",
      author: "Owner Jack Arthur",
      title: "Announcing big changes to your favorite restaurant",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, assumenda! Dolores ab tenetur itaque aliquid accusantium necessitatibus nihil nam sapiente.",
      date: "August-03-2025",
    },
    {
      id: 3,
      image: blogimg,
      category: "Restaurant",
      author: "Admin",
      title: "5 tips to make your dishes taste better at home",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, assumenda! Dolores ab tenetur itaque aliquid accusantium necessitatibus nihil nam sapiente.",
      date: "September-09-2025",
    },
  ];

  return (
    <div className="px-10 md:px-20 lg:px-35 py-16 bg-white">
      {/* Section Header */}
      <div className="flex flex-col mb-16 text-center">
        <p className="font-semibold text-3xl text-[#007A59]">Blog</p>
        <img className="w-1/12 mx-auto mt-3" src={abouticon} alt="section icon" />
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {Blog.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden transition-all duration-300"
          >
            {/* Image with category overlay */}
            <div className="relative w-full h-56">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              {/* Category Badge */}
              <div className="absolute bottom-3 left-3 bg-black/40 backdrop-blur-sm text-white text-sm px-3 py-1 rounded-full">
                {item.category}
              </div>
            </div>

            {/* Content */}
            <div className="pt-3">
              {/* Author + Date */}
              <div className="flex items-center gap-6 text-sm text-gray-500 mb-3">
                <span className="font-medium">{item.author}</span>
                <span className="font-medium">{item.date}</span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-md text-red-500 mb-2 hover:text-[#007A59] transition-colors">
                {item.title}
              </h3>

              {/* Description + Read More */}
              <p className="text-gray-600 text-xs leading-relaxed line-clamp-4">
                {item.desc}{" "}
                <a
                  href="#"
                  className="text-red-500 font-medium hover:underline ml-1"
                >
                  Read More...
                </a>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeBlog;
