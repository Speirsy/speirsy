
import React, { useState, useEffect } from 'react';
import { getBlogs} from '../../BlogRepository';
import SpeirsyBlogsList from '../SpeirsyBlogsList';

const BassBlog = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs().then((data) => setBlogs(data));
  }, []);


  return (
    <>
    <header>year
      <h1>Blogs</h1>
    </header>
    
    <SpeirsyBlogsList blogs={blogs}/>
    </>
  );
};

export default BassBlog;