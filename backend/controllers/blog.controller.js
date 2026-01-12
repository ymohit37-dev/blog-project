import Blog from '../models/blog.model.js';
import fs from 'fs';



export const allBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });  
    res.status(200).json({ blogs,success: true ,message: 'All Blogs' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

export const createBlog = async (req, res) => {
  try {
   
    const { title, catagory,description} = req.body;
     let image_filename = `${req.file.filename}`;
    const blog = await Blog.create({
      title,
      catagory,
      description,
      image: image_filename,
      author:{
        id: req.user._id,
        name: req.user.name,
        image: req.user.image
      },
    });
    return res.status(201).json({message: 'Blog Created', success: true, blog });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
      }



export const deleteBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  fs.unlink(`uploads/${blog.image}`, () => {});
  if (!blog) {
    return res.status(404).json({ message: 'Blog not found', success: false });
  }
  if (blog.author.id.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: 'Not authorized to delete this blog', success: false });
  }
 await blog.deleteOne();
  res.status(200).json({ message: 'Blog deleted successfully', success: true });
};

export const singleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
   return res.status(200).json({ blog, success: true, message: 'Blog found' });
    } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  } 
};

export const userBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ 'author.id': req.user._id }).sort({ createdAt: -1 });
    res.status(200).json({ blogs, success: true, message: 'User Blogs' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};


  