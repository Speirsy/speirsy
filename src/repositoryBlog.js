// import { db } from './firebase.js';

// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";

// import {collection, getDocs} from "firebase/firestore";

// const getBassBlogs = async function(){
//     try {
//         const BassBlogsRef = collection(db,'blog_speirsy');

//         const BassBlogsSnapshot = await getDocs(BassBlogsRef);
//         const BassBlogs = BassBlogsSnapshot.docs.map(d => d.data());

//         return BassBlogs
//     }
//     catch(err){
//         alert(err.message);
//     }
// };

// export {getBassBlogs};