import React from 'react'
import { Phone, Mail, Instagram, Youtube } from 'lucide-react'
import aboutchef from '../assets/aboutchef.png';

const AboutDetails = () => {
  const skills = [
    { name: "Leadership", percent: 65 },
    { name: "Kitchen Management", percent: 80 },
    { name: "Menu Planning", percent: 90 },
    { name: "Food Preparation", percent: 75 },
    { name: "Cooking Techniques", percent: 85 },
    { name: "Time Management", percent: 70 },
    { name: "Creativity", percent: 60 },
    { name: "Hygiene & Food Safety", percent: 88 },
    { name: "Multitasking", percent: 72 },
    { name: "Communication", percent: 95 },
    { name: "Attention & Decision", percent: 72 },
    { name: "Team Collaboration", percent: 95 },
  ];

  return (
    <div className='px-4 sm:px-10 md:px-20 lg:px-35 py-10 md:py-20'>
      <div className='flex flex-col md:flex-row gap-10'>
        <div className="relative bg-[#ED9D08] w-full md:w-[110vw] h-[40vh] rounded-lg flex justify-center items-end overflow-hidden shadow-lg">
          <img
            src={aboutchef}
            alt=''
            className="w-[70%] sm:w-[50%] h-auto object-bottom object-contain"
          />
        </div>

        <div className='flex flex-col space-y-3'>
          <p className='font-bold text-xl sm:text-2xl'>Owen Great</p>
          <p className='text-sm sm:text-md font-medium'>Executive Chef</p>
          <p className='text-gray-500 text-sm sm:text-base'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nam at harum quibusdam nostrum.
            Dolores quasi nulla aperiam quis voluptatum amet exercitationem in, quaerat inventore sunt omnis minima enim esse!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At aspernatur nobis, iusto facilis vitae soluta officia,
            numquam molestias enim, voluptas tenetur sint ab? Eum ipsam optio illo ea, dignissimos molestiae.
          </p>
          <p className='font-bold text-sm mt-2'>Contact me</p>
          <div className='flex gap-4 flex-wrap'>
            <div className="bg-[#007A59] p-2 rounded-full">
              <Phone size={14} className="text-white" />
            </div>
            <div className="bg-[#007A59] p-2 rounded-full">
              <Mail size={14} className="text-white" />
            </div>
            <div className="bg-[#007A59] p-2 rounded-full">
              <Instagram size={14} className="text-white" />
            </div>
            <div className="bg-[#007A59] p-2 rounded-full">
              <Youtube size={14} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Clean dynamic version */}
      <div className='mt-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {skills.map((skill, index) => (
            <label key={index} className='w-full'>
              <div className='flex justify-between w-full max-w-[400px]'>
                <p className='font-semibold text-sm sm:text-base'>{skill.name}</p>
                <p className='font-semibold text-sm sm:text-base'>{skill.percent}%</p>
              </div>
              <div className='relative mt-2 w-full max-w-[400px]'>
                <hr className='w-full border-[5px] rounded-full relative' />
                <div
                  className="absolute top-[-5px] z-10 w-4 h-4 sm:w-5 sm:h-5 bg-red-500 rounded-full"
                  style={{ left: `calc(${skill.percent}% - 10px)` }}
                ></div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutDetails
