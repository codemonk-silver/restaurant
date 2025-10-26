import React, { useState } from 'react'
import contactpep from '../assets/contactpep.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Phone, Mail, Instagram, Youtube, Clock, ChevronDown, Calendar } from 'lucide-react';

const ContactDetails = () => {
  const times = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
    "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
    "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM",
    "07:00 PM", "07:30 PM", "08:00 PM",
  ];

  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className='py-16'>
      <div className='bg-green-900 min-h-[90vh] px-4 sm:px-8 md:px-16 lg:px-35 py-10'>
        <div className='flex flex-col lg:flex-row gap-14'>
          
          {/* FORM SECTION */}
          <form className='space-y-4 p-6 sm:p-8 bg-white rounded-md w-full lg:w-[55%]'>
            
            {/* Name & Email */}
            <div className='flex flex-col md:flex-row gap-6'>
              <div className='flex-1'>
                <label className='block text-black font-medium text-xs mb-2'>Your Name*</label>
                <input
                  type='text'
                  className='w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600'
                />
              </div>
              <div className='flex-1'>
                <label className='block text-black font-medium text-xs mb-2'>Email*</label>
                <input
                  type='email'
                  className='w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600'
                />
              </div>
            </div>

            {/* Phone & Guests */}
            <div className='flex flex-col md:flex-row gap-6'>
              <div className='flex-1'>
                <label className='block text-black font-medium text-xs mb-2'>Phone Number*</label>
                <input
                  type='tel'
                  className='w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600'
                />
              </div>
              <div className='flex-1'>
                <label className='block text-black font-medium text-xs mb-2'>Number of Guests*</label>
                <div className="relative">
                  <select
                    id="guests"
                    name="guests"
                    className='w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md appearance-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600'
                    defaultValue=""
                  >
                    <option value="" disabled>Select number</option>
                    {Array.from({ length: 10 }, (_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                  <ChevronDown size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Time & Date */}
            <div className='flex flex-col md:flex-row gap-6'>
              <div className='flex-1'>
                <label className='block text-black font-medium text-xs mb-2'>Time of Reservation*</label>
                <div className="relative">
                  <select
                    id="time"
                    name="time"
                    className='w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md appearance-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600'
                    defaultValue=""
                  >
                    <option value="" disabled>Select time</option>
                    {times.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  <Clock size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className='flex-1'>
                <label className='block text-black font-medium text-xs mb-2'>Date of Reservation*</label>
                <div className="relative">
                  <DatePicker
                    selected={selectedDate}
                    onChange={(date) => setSelectedDate(date)}
                    dateFormat="dd MMM yyyy"
                    className='w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] rounded-md appearance-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600'
                  />
                  <Calendar size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Message */}
            <div>
              <label className='block text-black font-medium text-xs mb-2'>Message*</label>
              <textarea
                rows='4'
                className='w-full shadow-[0_0_15px_rgba(0,0,0,0.2)] h-44 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600'
              ></textarea>
            </div>

            {/* Submit */}
            <button
              type='submit'
              className='bg-green-700 text-white px-6 py-3 rounded-md font-medium hover:bg-green-800 transition w-full sm:w-auto'
            >
              Send Message
            </button>
          </form>

          {/* IMAGE + INFO */}
          <div className='flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[45%]'>
            <img className='w-[70%] sm:w-[50%] lg:w-[70%] h-auto' src={contactpep} alt='' />
            <p className='font-bold text-white text-2xl mt-10'>Address</p>
            <p className='text-white mt-1'>57 Sultan Market (4th Floor), Dakshin Khan, Dhaka-1230, Bangladesh</p>

            <p className='mt-6 font-bold text-white text-2xl'>Open Time</p>
            <div className='flex justify-between sm:justify-center lg:justify-start flex-wrap gap-2 mt-2 text-sm'>
              <p className='text-gray-300 font-light'>Mon - Fri</p>
              <p className='text-white font-medium'>: 11:00 AM - 10:00 PM</p>
            </div>
            <div className='flex justify-between sm:justify-center lg:justify-start flex-wrap gap-2 text-sm'>
              <p className='text-gray-300 font-light'>Sat - Sun</p>
              <p className='text-white font-medium'>: 11:00 AM - 10:00 PM</p>
            </div>

            <p className='font-bold text-white mt-6 text-2xl'>Contact Us</p>
            <div className='flex gap-4 flex-wrap mt-3 justify-center lg:justify-start'>
              {[Phone, Mail, Instagram, Youtube].map((Icon, i) => (
                <div key={i} className="bg-white p-2 rounded-full">
                  <Icon size={14} className="text-green-700" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactDetails
