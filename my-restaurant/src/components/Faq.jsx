import React, { useState } from 'react'
import abouticon from '../assets/abouticon.png'

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "What are the opening hours?",
      answer: "We are open Monday to Sunday from 8:00 AM to 10:00 PM. However, hours may vary on holidays."
    },
    {
      question: "Are you opening on public holiday?",
      answer: "Yes, we are open on most public holidays, though operating hours might be slightly reduced."
    },
    {
      question: "How do i book a table?",
      answer: "You can book a table online through our website or by calling our front desk directly."
    },
    {
      question: "Are pets allowed outside and inside?",
      answer: "Pets are welcome in our outdoor seating area, but not allowed inside the main restaurant for hygiene reasons."
    },
    {
      question: "Do you have any ongoing promotion or special offers?",
      answer: "Yes, we frequently offer discounts and seasonal promotions. Check our website or follow us on social media for updates."
    },
    {
      question: "What food does your restauraant specialize in?",
      answer: "We specialize in continental and local dishes made with fresh, locally sourced ingredients."
    },
    {
      question: "Are their Choices for children on the menu?",
      answer: "Yes, our kids’ menu includes smaller portions and child-friendly meals that children love."
    },
  ]

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='px-35 py-10'>
      {/* Section Header */}
      <div className="w-full text-center mb-12">
        <p className="font-semibold text-green-900 text-2xl mb-3">Faq</p>
        <img className="w-1/12 mx-auto" src={abouticon} alt="section icon" />
      </div>

      <div className='flex flex-col w-full'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className='bg-[#007A5919] w-3xl mx-auto mb-5 rounded-md transition-all duration-300'
          >
            <div
              className='flex justify-between px-5 py-2 items-center cursor-pointer'
              onClick={() => toggle(index)}
            >
              <p className='font-medium text-xl'>{faq.question}</p>
              <span className='font-bold text-2xl'>
                {openIndex === index ? '−' : '+'}
              </span>
            </div>

            {/* Expanded Section */}
            {openIndex === index && (
              <div className='px-5 pb-3 text-gray-700 text-sm'>
                <hr className='my-2 border-gray-300' />
                <p className='font-medium'>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
