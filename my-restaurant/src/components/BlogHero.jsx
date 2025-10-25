import React from 'react'
import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'

const BlogHero = () => {
  const Content = [
    {
      id: 1,
      image: blog1,
      category: 'Dining',
      name: 'Owner Jack Auther',
      date: '25-Sept-2020',
      title: 'Announce big changes To your restaurant',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem voluptatum, laudantium consequatur non modi ab ipsa suscipit! Aut nesciunt autem quod, impedit in id sapiente illum nostrum consectetur, ipsa dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque, debitis molestias aspernatur ea ex hic deserunt. Sequi ea tempore magni, dolorum numquam officiis in voluptates, dolore ad pariatur assumenda!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum cumque tempora quae sit neque ipsa dolorum molestiae ut odit velit. Molestias voluptatum earum eveniet vitae eum quisquam minus? Facere, omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quia tempore, voluptates quidem maiores repudiandae atque eaque adipisci dolorum corporis accusamus error, eum delectus veritatis nemo illo ipsam inventore recusandae.'
    },
    {
      id: 2,
      image: blog2,
      category: 'Food',
      name: 'Owner Jack Auther',
      date: '25-Sept-2020',
      title: 'Hold Fun Contests to engage your readers',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem voluptatum, laudantium consequatur non modi ab ipsa suscipit! Aut nesciunt autem quod, impedit in id sapiente illum nostrum consectetur, ipsa dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque, debitis molestias aspernatur ea ex hic deserunt. Sequi ea tempore magni, dolorum numquam officiis in voluptates, dolore ad pariatur assumenda!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius ipsa maxime autem porro laudantium. Nihil voluptate exercitationem quisquam est id officiis, tempora, sed quidem impedit corporis libero at dolore sunt!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos, ad officiis at similique ipsum, laborum qui dignissimos ratione suscipit labore sequi autem. Eveniet ipsam quo consectetur quos molestiae nam sunt?'
    },
    {
      id: 3,
      image: blog3,
      category: 'Restaurant',
      name: 'Owner Jack Auther',
      date: '25-Sept-2020',
      title: 'Reflect on the restaurant experience',
      desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem voluptatum, laudantium consequatur non modi ab ipsa suscipit! Aut nesciunt autem quod, impedit in id sapiente illum nostrum consectetur, ipsa dolorem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eaque, debitis molestias aspernatur ea ex hic deserunt. Sequi ea tempore magni, dolorum numquam officiis in voluptates, dolore ad pariatur assumenda!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore amet pariatur non velit enim aliquid quae veritatis facere incidunt vero tenetur quidem accusantium repellat, voluptates sit sunt deserunt dolor. Consequatur!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad excepturi rerum eum ratione quas distinctio, voluptate delectus maxime asperiores vitae voluptatibus placeat temporibus quae dolores amet porro quaerat ipsa voluptatum!'
    },
  ];

  return (
    <div className='px-4 sm:px-6 md:px-20 lg:px-56 py-10 sm:py-16 md:py-20'>
      <div className='flex flex-col gap-20'>
        {Content.map((item) => (
          <div key={item.id} className='bg-white shadow-lg rounded-xl overflow-hidden w-full'>
            {/* Image with category */}
            <div className='relative'>
              <img
                src={item.image}
                alt={item.title}
                className='w-full h-56 sm:h-72 md:h-[60vh] object-cover'
              />
              {/* Category Tag */}
              <div className='absolute bottom-4 left-4 backdrop-blur-md bg-white/20 text-white text-sm sm:text-base font-semibold px-4 py-1.5 rounded-lg border border-white/30'>
                {item.category}
              </div>
            </div>

            {/* Name + Date */}
            <div className='flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-10 font-semibold px-4 sm:px-6 py-3 text-sm sm:text-base text-gray-600'>
              <span>{item.name}</span>
              <span>{item.date}</span>
            </div>

            {/* Title */}
            <h2 className='px-4 sm:px-6 text-xl sm:text-2xl font-bold text-red-600 mb-2'>
              {item.title}
            </h2>

            {/* Description + Read more */}
            <p className='px-4 sm:px-6 pb-6 text-gray-700 leading-relaxed text-sm sm:text-base'>
              {item.desc}{' '}
              <a href="#" className='text-red-600 font-medium hover:underline'>
                Read more..
              </a>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BlogHero
