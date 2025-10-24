import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Search, ShoppingBag, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 sm:px-10 lg:px-35 py-5 bg-white shadow-md">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Logo */}
        <div>
          <img
            className="w-[150px] sm:w-[161.84px] h-auto"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-4 font-medium">
          <NavLink to="/" className="hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white">Home</NavLink>
          <NavLink to="/menu" className="hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white">Menu</NavLink>
          <NavLink to="/about" className="hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white">About</NavLink>
          <NavLink to="/contact" className="hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white">Contact</NavLink>
          <NavLink to="/blog" className="hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white">Blog</NavLink>
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

      {/* Mobile Dropdown */}
      <div className="md:hidden mt-5">
        {/* Dropdown Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex justify-between items-center bg-green-700 text-white px-4 py-2 rounded-md font-medium"
        >
          <span>Home</span>
          <ChevronDown
            className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            size={18}
          />
        </button>

        {/* Dropdown Content */}
        {isOpen && (
          <div className="mt-2 bg-white shadow-lg rounded-xl border border-gray-200 p-4 flex flex-col gap-3 z-50">
            <NavLink
              to="/menu"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block w-full rounded-md px-3 py-2 transition-colors duration-150 cursor-pointer focus:outline-none
                 ${isActive ? 'bg-green-700 text-white' : 'bg-white text-gray-800 hover:bg-green-700 hover:text-white active:bg-green-800 focus:bg-green-700'}`
              }
            >
              Menu
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block w-full rounded-md px-3 py-2 transition-colors duration-150 cursor-pointer focus:outline-none
                 ${isActive ? 'bg-green-700 text-white' : 'bg-white text-gray-800 hover:bg-green-700 hover:text-white active:bg-green-800 focus:bg-green-700'}`
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block w-full rounded-md px-3 py-2 transition-colors duration-150 cursor-pointer focus:outline-none
                 ${isActive ? 'bg-green-700 text-white' : 'bg-white text-gray-800 hover:bg-green-700 hover:text-white active:bg-green-800 focus:bg-green-700'}`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/blog"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block w-full rounded-md px-3 py-2 transition-colors duration-150 cursor-pointer focus:outline-none
                 ${isActive ? 'bg-green-700 text-white' : 'bg-white text-gray-800 hover:bg-green-700 hover:text-white active:bg-green-800 focus:bg-green-700'}`
              }
            >
              Blog
            </NavLink>

            {/* Divider */}
            <hr className="my-2 border-gray-300" />

            {/* Icons */}
            <div className="flex justify-around mt-2">
              <div className="bg-[#065B5E] p-2 rounded-full cursor-pointer hover:bg-green-800 transition-colors">
                <Search className="text-white" size={16} />
              </div>
              <div className="bg-[#065B5E] p-2 rounded-full cursor-pointer hover:bg-green-800 transition-colors">
                <ShoppingBag className="text-white" size={16} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
