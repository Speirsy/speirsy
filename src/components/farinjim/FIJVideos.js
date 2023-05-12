
import React, {useState, useEffect} from 'react';
import './FIJVideos.css';
import { getVideos } from '../../repository';



const FIJLook = () => {

const [videos, setVideos] = useState([]);  

useEffect(() => {
  getVideos()
  .then(data => setVideos(data))  //sets our state in the component
},[]);


  
// the virtual dom wants the array to have an index key for the mapping . hence ",index" and key = {index} in the li. 
  const htmlSongArray = videos.map((songItem, index) => (
    <li key={index}>
    <h3>{songItem.name}</h3>
    <h4>{songItem.year}</h4>
    <h4>{songItem.artist}</h4>
    
  <iframe 
// this iframe business is a somewhat hardcoded soulution  and needs sorting out. 
  width="400" height="285" className="video-item "
  src={songItem.url} 
  title="YouTube video player" frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>     
  </iframe>
    </li>
     
  ));
  return (
    <>
   
      <header>
        <h1 className="videos-header">FIJ Videos</h1>
      </header>

    <ul>
      {htmlSongArray}
    </ul>
     <title>
      Speirsy, Not Jim
     </title>
     <div>
      Speirsy toons
     </div>
     {/* <ul>
      {speirsyVideoArray}
     </ul> */}

   
  
    </>
  );
};

export default FIJLook;
