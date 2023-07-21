import React, { useRef, useState, useEffect } from 'react';
import { useDeviceOrientation } from './useDeviceOrientation';
import Video from './vid/_import_61557a2fa7fd98.46035599_preview.mp4';
import VideoThumbnail from './img/carousel/Screenshot 2023-07-20 143511.png';

const VideoPlayerWithMotion = () => {
  const videoRef = useRef(null);
  const { orientation, requestAccess, revokeAccess } = useDeviceOrientation();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPauseClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoClick = (event) => {
    event.stopPropagation();
    handlePlayPauseClick();
  };

  useEffect(() => {
    if (orientation) {
      const { gamma } = orientation;
      const gammaThreshold = 10; // Adjust this threshold for more or less sensitivity to tilting

      if (Math.abs(gamma) > gammaThreshold) {
        handlePlayPauseClick();
      }
    }
  }, [orientation]);

  return (
    <div
      style={{
        position: 'relative',
        minWidth: '105%',
        height: '110vh', // Set the height to 100vh to take the full screen height, Add 30px to the height using the calc() function
        overflow: 'hidden', // Prevent child elements from overflowing
        top: '-30px',
      }}
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        style={{
          width: '105%',
          height: 'calc(110vh + 30px)',
          objectFit: 'cover',
          transform: `rotateX(${orientation?.gamma || 0}deg)`, // Rotate the video based on the gamma value
        }}
        autoPlay={false}
        loop
        muted
        playsInline
        poster={VideoThumbnail} // Replace VideoThumbnail with the image URL for the video thumbnail
      >
        <source src={Video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      {!isPlaying && (
        <button
          style={{
            position: 'absolute',
            top: '90%',
            left: '70%',
            transform: 'translate(-50%, -50%)',
            padding: '10px 20px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
          onClick={handleVideoClick}
        >
          Play
        </button>
      )}
    </div>
  );
};

export default VideoPlayerWithMotion;
