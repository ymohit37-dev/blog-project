import React from 'react'
import contact from '../assets/contact.webp'

const Contact = () => {
  return (
    <div>
      <h1 className='text-center text-3xl uppercase font-black my-8'>Contact</h1>
            <p className='text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto my-6'>
              Welcome to <span className='text-blue-600 font-semibold'>MyBlog</span>, your go-to platform for insightful articles and updates on various topics. Our mission is to provide high-quality content that informs, inspires, and engages our readers.our mission is to provide high-quality content that informs, inspires, and engages our readers.
            </p>
            <div>
              <img src={contact} alt="contact" className='flex items-center justify-center w-[1600px] ' />
            </div>
    </div>
  )
}

export default Contact
