import React from 'react';

const VideoPlayer = ({ src }) => {
  return (
    <div className="video-player">
      {src && <video width="640" height="480" controls>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>}
    </div>
  );
};

export default VideoPlayer;
