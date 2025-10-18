import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Search } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className='px-35 py-5'>
        <div className='flex justify-between items-center'>
                <img className='w-[161.84px] h-[45px]' src={logo} alt='' />
                <div className='flex gap-2 font-medium'>
                    <NavLink to='/' className='hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white hover:px-3 hover:py-1.5'>
                        Home
                    </NavLink>
                    <NavLink to='/menu' className='hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white hover:px-3 hover:py-1.5'>
                        Menu
                    </NavLink>
                    <NavLink to='/about' className='hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white hover:px-3 hover:py-1.5'>
                        About
                    </NavLink>
                    <NavLink to='/contact' className='hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white hover:px-3 hover:py-1.5'>
                        Contact
                    </NavLink>
                    <NavLink to='/blog' className='hover:bg-green-700 rounded-full px-3 py-1.5 hover:text-white hover:px-3 hover:py-1.5'>
                        Blog
                    </NavLink>
                </div>
                <div className='flex gap-5'>
                    <div className="bg-[#065B5E] p-2 rounded-full cursor-pointer hover:bg-green-800 transition-colors duration-300">
                            <Search className="text-white" size={16} />
                    </div>
                     <div className="bg-[#065B5E] p-2 rounded-full cursor-pointer hover:bg-green-800 transition-colors">
                      <ShoppingBag className="text-white" size={16} />
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Navbar