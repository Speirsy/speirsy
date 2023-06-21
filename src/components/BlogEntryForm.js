import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase.js';
import { saveBlog } from '../BlogRepository.js';

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
    console.log (handleChange)
    console.log (formData)

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log (handleSubmit)

    try {
      await saveBlog(formData); // Save the blog data to the Firestore collection
      navigate('/confirmation'); // Redirect after successful submission
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

console.log('DB object:', db);

export default BlogForm;


