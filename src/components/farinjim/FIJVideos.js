
import React, {useState, useEffect} from 'react';
import './FIJVideos.css';
import { getVideos } from '../../repository';
import { getSpeirsyVideos } from '../../repository';


const FIJLook = () => {

const [videos, setVideos] = useState([]);  

useEffect(() => {
  getVideos()
  .then(data => setVideos(data))  //sets our state in the component
},[]);


// Below is just repeating the above. If I want to render speirsy videos I should give the 
// entries? in the database collections and new attribute of artist (farinjim or Speirsy) and set up a 
// if statement in order to extract the desired videos. Or something

// additional note to check git push

const [speirsyVideos, setSpeirsyVideos] = useState([]);

useEffect(() => {
  getSpeirsyVideos()
  .then(data => setSpeirsyVideos(data))
},[]);

  
// the virtual dom wants the array to have an index key for the mapping . hence ",index" and key = {index} in the li. 
  const htmlSongArray = videos.map((songItem, index) => (
    <li key={index}>
    <h3>{songItem.name}</h3>
    <h4>{songItem.year}</h4>
  <iframe 
// this iframe business is a somewhat hardcoded soulution  and needs sorting out. 
  width="400" height="285" className="video-item "
  src={songItem.url} 
  title="YouTube video player" frameBorder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>     
  </iframe>
    </li>
     
  ));
  const speirsyVideoArray = speirsyVideos.map((songItem, index) => (
    <li key={index}>
    <h3>{songItem.name}</h3>
    <h4>{songItem.year}</h4>
  <iframe 
  width="400" height="285" 
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
     <ul>
      {speirsyVideoArray}
     </ul>

   
  
    </>
  );
};

export default FIJLook;
