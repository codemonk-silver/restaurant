import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingBag } from 'lucide-react';
import logo from '../assets/logo.png';
import navbg from '../assets/navbg.png';
import abouticon from '../assets/abouticon.png'

const ItemDetailsNav = () => {
  return (
     <nav
      className="relative px-6 sm:px-10 lg:px-35 py-5 h-[40vh] overflow-hidden"
    >
      {/* 🔹 Blurred Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${navbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          transform: "scale(1.05)", // prevents edge blur cutoff
        }}
      ></div>

      {/* 🔹 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* 🔹 Centered "All Items" Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-white text-6xl font-bold tracking-wide">Item Details</h1>
        <img className='w-1/5 h-1 mt-5' src={abouticon} alt=''  style={{ filter: 'brightness(0) invert(1)' }} />
      </div>

      {/* 🔹 Content (kept sharp and aligned to top) */}
      <div className="relative z-10 flex justify-between items-start md:flex-row md:justify-between md:items-center">
        {/* ✅ Logo */}
        <img
          className="w-[150px] sm:w-[161.84px] h-auto"
          src={logo}
          alt="Logo"
        />

        {/* ✅ Icons (visible on all screens, hidden only on large screens if desired) */}
        <div className="flex gap-3 md:hidden">
          <div className="bg-[#065B5E] p-2 rounded-full cursor-pointer hover:bg-green-800 transition-colors">
            <Search className="text-white" size={16} />
          </div>
          <div className="bg-[#065B5E] p-2 rounded-full cursor-pointer hover:bg-green-800 transition-colors">
            <ShoppingBag className="text-white" size={16} />
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-4 font-medium">
          <NavLink to="/" className="hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white text-white">Home</NavLink>
          <NavLink to="/menu" className="hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white text-white">Menu</NavLink>
          <NavLink to="/about" className="hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white text-white">About</NavLink>
          <NavLink to="/contact" className="hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white text-white">Contact</NavLink>
          <NavLink to="/blog" className="hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white text-white">Blog</NavLink>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex gap-5">
          <div className="bg-[#065B5E] p-2 rounded-full cursor-pointer hover:bg-green-800 transition-colors">
            <Search className="text-white" size={16} />
          </div>
          <div className="bg-[#065B5E] p-2 rounded-full cursor-pointer hover:bg-green-800 transition-colors">
            <ShoppingBag className="text-white" size={16} />
          </div>
        </div>
      </div>
     
    </nav>
  )
}

export default ItemDetailsNav