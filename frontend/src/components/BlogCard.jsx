import React from 'react';
import { Link } from "react-router-dom";

const BlogCard = ({
  id,
  title,
  category,
  image,
  author_name,
  author_image,
  date,
}) => {
  return ( 
    <div className="border border-gray-300 shadow-md p-3 rounded-md">
      <Link to={`/blog/${id}`}>
        <img src={image} alt={title}  className='flex items-center justify-center w-full h-48 object-cover mx-auto cursor-pointer 
        transform duration-300 hover:scale-105 '/>
      </Link>
      <div className="mt-3">
        <Link to={`/blog/${id}`}>
          <h2 className="text-lg font-semibold hover:text-blue-600">{title}</h2>
        </Link>
        <p className="text-semibold text-gray-500 my-3">{category} • {date}</p>
        <div className="flex items-center mt-2">
          <img
            src="/src/assets/author1.webp"
            alt={author_name}
            className="w-8 h-8 rounded-full mr-2"
          />
          <span className="text-sm text-gray-700">{author_name}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
