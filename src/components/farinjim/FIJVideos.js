import React, { useState, useEffect } from 'react';
import './FIJVideos.css';
import { getVideos } from '../../repository';
import VideoList from '../VideoList';



const FIJLook = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then((data) => setVideos(data));
  }, []);

  const fijVideos = videos.filter((video) => video.artist === 'fij');
  const speirsyVideos = videos.filter((video) => video.artist === 'speirsy');

  return (
    <>
      <header>
        <h1 className="videos-header">FIJ Videos</h1>
      </header>
      <VideoList videos={fijVideos} />
      <title>Speirsy, Not Jim</title>
      <div>Speirsy toons</div>
      <VideoList videos={speirsyVideos} />
    </>
  );
};



export default FIJLook;

// import React, {useState, useEffect} from 'react';
// import './FIJVideos.css';
// import { getVideos } from '../../repository';



// const FIJLook = () => {

// const [videos, setVideos] = useState([]);  

// useEffect(() => {
//   getVideos()
//   .then(data => setVideos(data))  //sets our state in the component
// },[]);

// const speirsyVideos = videos.filter((video) => video.artist === 'speirsy');
// const fijVideos = videos.filter((video) => video.artist === 'fij');

  
// // the virtual dom wants the array to have an index key for the mapping . hence ",index" and key = {index} in the li. 


//   const speirsyJSXArray = speirsyVideos.map((video, index) => (
//     <li key={index}>
//       <h3>{video.name}</h3>
//       <h4>{video.year}</h4>
//       <h4>{video.artist}</h4>
    
//       <iframe 
//         width="400" height="285" className="video-item "
//         src={video.url} 
//         title="YouTube video player" frameBorder="0" 
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>     
//       </iframe>
//     </li>   
//   ));

//   const fijJSXArray = fijVideos.map((video, index) => (
//     <li key={index}>
//       <h3>{video.name}</h3>
//       <h4>{video.year}</h4>
//       <h4>{video.artist}</h4>
    
//       <iframe 
//         width="400" height="285" className="video-item "
//         src={video.url} 
//         title="YouTube video player" frameBorder="0" 
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>     
//       </iframe>
//     </li>   
//   ));
//   return (
//     <>
   
//       <header>
//         <h1 className="videos-header">FIJ Videos</h1>
//       </header>

//     <ul>
//       {fijJSXArray}
//     </ul>
//      <title>
//       Speirsy, Not Jim
//      </title>
//      <div>
//       Speirsy toons
//      </div>
//      <ul>
//       {speirsyJSXArray}
//      </ul>

   
  
//     </>
//   );
// };

// export default FIJLook;



// below is a refactoring by Chat GPT
// The main changes are:

// Extracting the video rendering logic into a separate VideoList component.
// Using filter to split the videos into separate arrays based on their artist field.
// Rendering the VideoList component twice, passing in the filtered arrays as props.



