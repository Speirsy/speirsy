import React, { useState, useEffect } from "react";
import { getBlogs } from "../BlogRepository";

const SpeirsyBlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [visibleBlogs, setVisibleBlogs] = useState([]); // Blogs currently visible
  const [hasMore, setHasMore] = useState(true); // To check if more blogs are available
  const [limit, setLimit] = useState(5); // Number of blogs to show initially
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(0); // Default to latest blog (index 0)

  // Fetch and set blogs on component mount
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const allBlogs = await getBlogs(); // Fetch all blogs
        const sortedBlogs = allBlogs.sort((a, b) => b.timestamp - a.timestamp); // Sort by timestamp
        setBlogs(sortedBlogs);
        setVisibleBlogs(sortedBlogs.slice(0, limit)); // Set initial visible blogs
        setHasMore(sortedBlogs.length > limit); // Check if there are more blogs
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, [limit]);

  // Function to load more blogs
  const loadMoreBlogs = () => {
    const nextLimit = limit + 5; // Increment the limit
    setLimit(nextLimit);
    setVisibleBlogs(blogs.slice(0, nextLimit)); // Update visible blogs
    setHasMore(blogs.length > nextLimit); // Update hasMore state
  };

  // Function to handle expand/collapse for individual blogs
  const toggleExpandBlog = (index) => {
    setExpandedBlogIndex(expandedBlogIndex === index ? null : index); // Toggle the clicked blog
  };

  const getYouTubeEmbedUrl = (mediaUrl) => {
    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = mediaUrl.match(youtubeRegex);
    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }
    return null;
  };

  const renderMedia = (mediaUrl) => {
    if (!mediaUrl) return null;

    const youtubeEmbedUrl = getYouTubeEmbedUrl(mediaUrl);
    if (youtubeEmbedUrl) {
      return (
        <iframe
          width="400"
          height="285"
          className="video-item"
          src={youtubeEmbedUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      );
    }

    if (mediaUrl.match(/\.(jpeg|jpg|gif|png)$/)) {
      return <img src={mediaUrl} alt="blog media" style={{ maxWidth: "100%", height: "auto" }} />;
    }

    if (mediaUrl.match(/\.(mp4|webm|ogg)$/)) {
      return (
        <video width="400" height="285" controls>
          <source src={mediaUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }

    if (mediaUrl.match(/\.(mp3|wav)$/)) {
      return (
        <audio controls>
          <source src={mediaUrl} type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      );
    }

    return (
      <a href={mediaUrl} target="_blank" rel="noopener noreferrer">
        {mediaUrl}
      </a>
    );
  };

  return (
    <div>
      <ul>
        {visibleBlogs.map((blog, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <h2
              onClick={() => toggleExpandBlog(index)}
              style={{ cursor: "pointer", color: expandedBlogIndex === index ? "blue" : "black" }}
            >
              {blog.title}
            </h2>

            {/* If it's the latest blog (index 0) or expanded, show full content */}
            {expandedBlogIndex === index || index === 0 ? (
              <>
                <h4>{blog.content}</h4>
                {renderMedia(blog.mediaUrl)}
              </>
            ) : (
              <p>{blog.content.substring(0, 100)}...</p> // Show truncated content if collapsed
            )}

            <button onClick={() => toggleExpandBlog(index)}>
              {expandedBlogIndex === index ? "Collapse" : "Read More"}
            </button>
          </li>
        ))}
      </ul>

      {/* Show "More Blogs" button if there are more blogs to load */}
      {hasMore && (
        <button onClick={loadMoreBlogs}>More Blogs</button>
      )}
    </div>
  );
};

export default SpeirsyBlogsList;




