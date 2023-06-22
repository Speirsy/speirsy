import React from "react";


const SpeirsyBlogsList = ({ blogs }) => (
    <ul>
      {blogs.map((blog, index) => (
        <li key={index}>
  
          <h3>{blog.author}</h3>
          <h4>{blog.title}</h4>
          <h4>{blog.content}</h4>
          <h4>{blog.id}</h4>
          {/* <iframe
            width="400"
            height="285"
            className="video-item"
            src={video.url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          /> */}
        </li>
      ))}
    </ul>
  );
  
  export default SpeirsyBlogsList;