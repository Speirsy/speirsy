import React, { useState, useEffect } from 'react';
import { getVideos } from '../../repository';
import VideoList from '../VideoList';

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
    </>
  );
};

export default BassHello;

  