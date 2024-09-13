// VideoList.js is a functional component that takes a prop called videos, which is an array of video objects. 
import React from 'react';

const VideoList = ({ videos }) => (
  <ul>
    {videos.map((video, index) => (
      <li key={index}>

        <h3>{video.name}</h3>
        <h4>{video.year}</h4>
        <h4>{video.artist}</h4>
        <iframe
          width="400"
          height="285"
          className="video-item"
          src={video.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </li>
    ))}
  </ul>
);

export default VideoList;