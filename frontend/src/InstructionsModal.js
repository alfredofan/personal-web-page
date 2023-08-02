// InstructionsTooltip.js
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';


const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const TooltipOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  background: transparent;
  backdrop-filter: blur(12px); // Adjust the blur intensity as needed. blur not working on browsers for mobile devices
  -webkit-backdrop-filter: blur(12px); /* Safari */
  -moz-backdrop-filter: blur(12px); /* Firefox */
  -ms-backdrop-filter: blur(12px); /* IE 10 */
  -o-backdrop-filter: blur(12px); /* Opera */
  blur: true;

  // Add opacity and transition for fade-in effect
  animation: ${fadeIn} 0.8s ease; // Apply the fade-in animation
  transition: opacity 0.5s;
`;

const TooltipContent = styled.div`
  // background-color: rgba(255, 255, 255, 0.9); /* Add some transparency to the background color */
  background: transparent;


  color: #fff;
  padding: 10px;
  // border: 2px solid #fff;
  border-radius: 4px;
  height: 30vh;
  width: 80vw;
  text-align: left;
  display: flex;
  align-items: center; 
  justify-content: center;
  margin-bottom: 30vh;


`;


const InstructionsTooltip = ({ onClose }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const lastVisitTimestamp = localStorage.getItem('lastVisitTimestamp');
    const currentTime = Date.now();
    const hoursSinceLastVisit = (currentTime - lastVisitTimestamp) / (1000 * 60 * 60);

    // Show the tooltip only if the user hasn't visited in the last 8 hours
    if (!lastVisitTimestamp || hoursSinceLastVisit >= 8) {
      setShowTooltip(true);
      // Save the current timestamp to localStorage
      localStorage.setItem('lastVisitTimestamp', currentTime);
    }
  }, []);

  const handleClose = () => {
    setShowTooltip(false);
    onClose();
  };

  return (
    <>
      {showTooltip && (
      <TooltipOverlay show={showTooltip} onClick={handleClose}>
        <TooltipContent show={showTooltip}>
            <p className='font-medium'>
                1. Look for the header and click just behind it to play the video.<br/>
                2. To pause the video, just click back.<br/>
                3. Move your mouse around to interact with the image.<br/>
                4. Have fun and enjoy the show! 🎉📽️😄
            </p>
          </TooltipContent>
        </TooltipOverlay>
      )}
    </>
  );
};

export default InstructionsTooltip;
