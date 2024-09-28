import React, { useState } from 'react';

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayButtonClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="container  "> {/* Use Bootstrap's container */}
    <div className='text-center'>
    {isPlaying ? (
        <iframe
          src="https://www.youtube.com/embed/BdnISpZjjJ0?autoplay=1"
          title="Furniture video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="static-iframe" // Updated class for fixed size
        ></iframe>
      ) : (
        <div className="thumbnail" onClick={handlePlayButtonClick}>
          <img
            src="https://heritagehomepk.com/cdn/shop/files/slider-09-A-scaled_1e6fed1d-1ead-4af5-8f1d-c21997fc3854.jpg?v=1711795133&width=3840"
            alt="Custom Thumbnail"
            className="thumbnail-image"
          />
          <button className="play-button">
            <i className="fa fa-play" aria-hidden="true"></i>
          </button>
        </div>
      )}
    </div>
     
    </div>
  );
};

export default Video;
