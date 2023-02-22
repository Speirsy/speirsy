
import React from 'react';
// import './FIJ.css';
import './FIJVideos.css';


const FIJLook = () => {

  return (
    <>
    <body>
      <header>
        <h1 className="videos-header">FIJ Videos</h1>
      </header>
    
      <div>
        <h3>Hey There Andy Murray</h3>
          <iframe className="video-container video-item video-item-2 " width="560" height="500" src="https://www.youtube.com/embed/0hBAQuQVxEY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <h3>Should I Move...</h3>
          <iframe className="video-container video-item video-item-2 " width="560" height="400" src="https://www.youtube.com/embed/z0A6j9kw3jY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <h3>The Spiral</h3>
         <iframe className="video-container video-item video-item-2 " width="560" height="400" src="https://www.youtube.com/embed/Cxcxt_KRpNk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </body>
    </>
  );
};

export default FIJLook;
