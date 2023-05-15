import React from 'react';
import { getVideos } from '../../repository';
import FIJLook from '../farinjim/FIJVideos';
import { VideoList } from '../farinjim/FIJVideos';

const SongsHello = () => {


  return (
    <>
    <h1>Songs Hello</h1>
    <VideoList videos={ speirsyVideos } />
    </>
  );
};

export default SongsHello;