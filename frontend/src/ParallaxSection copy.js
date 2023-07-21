// ParallaxSection.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import './ParallaxSection.css'; // CSS custom styling
import Image from './img/carousel/luigi-pozzoli-Db8xEYwtdWw-unsplash-2.jpg';





const ParallaxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 105vh;
  min-width: 105%;
  background-color: #f5f5f5;
  position: relative;
  object-fit: cover;
  overflow: hidden;
  left: -20px;
//   background-image: url(${Image});
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: transform 0.05s ease-in-out;
`;

const ParallaxCaption = styled.div`
  /* Add your caption styles here */
`;




const ParallaxSection = () => {
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

    <div className="parallax-container" onMouseMove={handleMouseMove}>
      
      <div className="parallax">

      <img src={Image} alt="Image" 
            style={{
              transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
              marginBottom: '20px',          
            }}
            />


        <div className="parallax-caption">
          <p className="font-small" style={{ marginBottom: '0px' }}>
            Hi, my name is
          </p>
          <h2 className="font-large" style={{ fontWeight: 'bold', margin: '0px' }}>
            Alfredo Faustino
          </h2>
          <h2 className="font-medium" style={{ marginTop: '0px' }}>
            I build things for the web.
          </h2>
          <p className="font-small">
            As a full stack developer, I bring your ideas to life by building innovative and
            captivating online solutions.
          </p>
          <button>Learn More</button>
        </div>
      </div>
    </div>

  );
};


export default ParallaxSection;
