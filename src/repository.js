import { db } from './firebase.js';

// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import {collection, getDocs} from "firebase/firestore";

const getVideos = async function(){
    try {
        const videosRef = collection(db,'videos');
        const videosSnapshot = await getDocs(videosRef);
        console.log(videosSnapshot.docs);
        const videos = videosSnapshot.docs.map(d => d.data());
        console.log(videos);
        return videos
    }
    catch(err){
        alert(err.message);
    }
};

export {getVideos};

// const getBassBlogs = async function(){
//     try {
//         const BassBlogsRef = collection(db,'blog_speirsy');

//         const speirsyVideosSnapshot = await getDocs(speirsyVideosRef);
//         const speirsyVideos = speirsyVideosSnapshot.docs.map(d => d.data());

//         return speirsyVideos
//     }
//     catch(err){
//         alert(err.message);
//     }
// };

// export {getSpeirsyVideos};