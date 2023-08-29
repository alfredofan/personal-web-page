import React, { useRef, useState } from 'react';
import Video from './vid/_import_61557a2fa7fd98.46035599_preview.mp4';
import VideoThumbnail from './img/Screenshot 2023-07-20 143511.png';




//video player
const VideoPlayer = () => {
  const videoRef = useRef(null);
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




// mouse movement effect 
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // image movement effect on hover
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const offsetX = clientX - screenWidth / 2;
    const offsetY = clientY - screenHeight / 2;

    if (
      clientX < 0 ||
      clientX > screenWidth ||
      clientY < 0 ||
      clientY > screenHeight ||
      (e.target && e.target.nodeName === 'HTML')
    ) {
      // Reset position if the mouse moves outside the screen or is not on the page
      setMousePosition({ x: 0, y: 0 });
    } else {
      setMousePosition({ x: offsetX / -60, y: offsetY / -60 }); // remove sign to change direction
    }
  };





  return (
    <div
      style={{
        position: 'relative',
        minWidth: '105%',
        height: '120vh ', // Set the height to 100vh to take the full screen height, Add 30px to the height using the calc() function
        overflow: 'hidden', // Prevent child elements from overflowing
        top:'-30px',

        
      }}
      onClick={handleVideoClick}
      onMouseMove={handleMouseMove}
    >
      <video
        ref={videoRef}
        style={{ width: '105%', height: 'calc(120vh + 30px)',  objectFit: 'cover', 
    
        transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
    }}
        autoPlay={true}
        loop
        muted
        playsInline
        poster={VideoThumbnail} // Replace VideoThumbnail with the image URL for the video thumbnail

      >
        <source src={Video} type="video/mp4" />
        Your browser does not support HTML5 video.
        <track src="" kind="captions" srclang="en" label="english_captions"/>

      </video>
      {!isPlaying 

//Reserved for play button

      /*&& (
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
        )*/

        }
    </div>
  );
};

export default VideoPlayer;