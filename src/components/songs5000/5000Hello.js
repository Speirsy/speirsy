import React, { useState, useEffect } from 'react';
import { getVideos } from '../../repository';
import VideoList from '../VideoList';


const SongsHello = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then((data) => setVideos(data));
  }, []);

  const fij5000Videos = videos.filter((video) => video.artist === 'fij_5000');

  return (
    <>
    <h1>Songs Hello</h1>
    <VideoList videos={ fij5000Videos } />
    </>
  );
};

export default SongsHello;