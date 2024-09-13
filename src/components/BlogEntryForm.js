import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveBlog } from '../BlogRepository'; // Ensure correct path to BlogRepository

const BlogForm = () => {
  const navigate = useNavigate(); // Initialize the navigation hook
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
    mediaUrl: ''
  });

  // Handle form field changes
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Save the blog to Firestore
      const savedBlog = await saveBlog(formData);

      console.log('Blog saved successfully:', savedBlog); // Debugging

      // Redirect to the main blog list page or specific blog details page
      navigate('/speirsybass/bassblog'); // Change this to `/bassblog/${savedBlog.id}` if you want to redirect to the details page
    } catch (error) {
      console.error("Error saving blog:", error); // Detailed error handling
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
      </label>
      <label>
        Content:
        <textarea name="content" value={formData.content} onChange={handleChange} required />
      </label>
      <label>
        Author:
        <input type="text" name="author" value={formData.author} onChange={handleChange} required />
      </label>
      <label>
        Media URL (Image/Video):
        <input type="text" name="mediaUrl" value={formData.mediaUrl} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;


