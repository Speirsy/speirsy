import React, { useState, useEffect } from 'react';
import { getBlogs } from '../../BlogRepository'; // Correct path to BlogRepository
import BlogForm from '../BlogEntryForm';
import SpeirsyBlogsList from '../SpeirsyBlogsList';

const BassBlog = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from Firestore
  const fetchBlogs = async () => {
    const blogList = await getBlogs();
    setBlogs(blogList);
  };

  // Fetch blogs when component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blogs</h1>
      <BlogForm onBlogSubmit={fetchBlogs} /> {/* Pass callback to refresh blogs after submission */}
      <SpeirsyBlogsList blogs={blogs} /> {/* Show the list of blogs with collapse and "More Blogs" button */}
    </div>
  );
};

export default BassBlog;



