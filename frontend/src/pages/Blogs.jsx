import React from 'react'
import Hero from '../components/Hero'
import BlogCard from '../components/BlogCard'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const Blogs = () => {
  const {blogData} = useContext(StoreContext);
  return (
    <div>
     <Hero />
   <h1 className='text-3xl text-center  font-bold my-6'>All Blogs</h1>
   <p className='text-base sm:text-lg px-3 leading-6 max-w-2xl mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, odio fugiat dolorem laudantium molestias, deleniti amet, illo laborum quasi officiis quae saepe magni aspernatur. Labore dolores nisi cumque officia laborum eaque dolorum nesciunt pariatur, perspiciatis nam non, quibusdam eius praesentium?</p>

       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-3 my-6  sm:px-4">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            id={blog.id}
            title={blog.title}
            image={blog.image}
            catagory={blog.category}
            author_name={blog.author.name}
            author_image={blog.author.image}
            date={blog.date}
          />
        ))}
      </div>
    </div>
  )
}

export default Blogs
