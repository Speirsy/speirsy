// import React, { useEffect } from 'react';
// import gsap from 'gsap/gsap-core';
// import { CSSPlugin } from 'gsap/CSSPlugin';
// gsap.registerPlugin(CSSPlugin);

// const SpinningStarsBackground = () => {
//   useEffect(() => {
//     // Animation code goes here
//      // Get all star elements
//      const stars = document.querySelectorAll(".star");

//      // Loop through star elements and apply animations
//      stars.forEach((star, index) => {
//          gsap.to(star, {
//              rotation: 360, // Rotate by 360 degrees (one full circle)
//              duration: 5,   // Animation duration in seconds
//              repeat: -1,    // Repeat the animation indefinitely
//              delay: index * 2, // Delay each star's animation
//              transformOrigin: "center", // Rotate around the center of each star
//              ease: "linear", // Linear easing for a constant speed rotation
//          });
//      });
//   }, []);

//   return (
//     <>
//       {/* Create and render multiple star elements here */}
//         <div className="star"></div>
//         <div className="star"></div>
//         <div className="star"></div>
//     </>
// );   
 
// }

// export default SpinningStarsBackground;