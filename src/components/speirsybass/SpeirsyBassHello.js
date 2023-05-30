import React, { useState, useEffect } from 'react';
import { getVideos } from '../../repository';
import VideoList from '../VideoList';
import BlogForm from '../BlogEntryForm';

const BassHello = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then((data) => setVideos(data));
  }, []);

  const speirsyBlogVideos = videos.filter((video) => video.artist === 'speirsy_blog');

  return (
    <>
    <h1>Bass Hello</h1>
    <VideoList videos={ speirsyBlogVideos } />
    <BlogForm />
    </>
  );
};

export default BassHello;

  