import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase.js'


const BlogForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        await db.collection('blog_speirsy').add(formData);
            // Redirect after successful submission
    navigate.push('/confirmation');
} catch (error) {
  // Handle error if submission fails
  console.log(error);
}
};

return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={formData.title} onChange={handleChange} />
      </label>
      <label>
        Content:
        <textarea name="content" value={formData.content} onChange={handleChange} />
      </label>
      <label>
        Author:
        <input type="text" name="author" value={formData.author} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogForm;


