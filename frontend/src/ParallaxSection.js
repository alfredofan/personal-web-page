// ParallaxSection.js

import { useState } from 'react';
import styled from 'styled-components';

import './index.css'; // CSS custom styling
import './ParallaxSection.css'; // CSS custom styling
// import Image from './img/carousel/luigi-pozzoli-Db8xEYwtdWw-unsplash-2.jpg';


import VideoPlayer from './VideoPlayer';


import {

    FullContainer,

  } from './Containers';
  
  import Footer from './Footer';
  import Contact from './Contact';

  import Header from './Header';
  import Curtain from './Curtain';


   




const ParallaxContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 110vh !important; /* Adjust to position the container higher than the screen */
min-width: 100%;
background-color: transparent;
position: relative;
object-fit: cover;
overflow: hidden;
background-color: #000;

z-index: -1 !important;

`;


const ContentContainer = styled.div`
  height: fit-content;
  background-color: transparent;
  font-size: 36px;
  position: absolute;
  width: 100%;
  overflow-x: hidden; //fix horizontal scroll issue on mobile
  -webkit-overflow-scrolling: touch; /* Disable horizontal overflow for Safari */

 
  `;



const ParallaxSection = () => {
  const [,setMousePosition] = useState({ x: 0, y: 0 });

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
<>
  <ParallaxContainer  >
    <div className="parallax-container" onMouseMove={handleMouseMove}>    
      <div className="parallax">
        <VideoPlayer />
        <Header />
      </div>
    </div>
    </ParallaxContainer >
      <ContentContainer >
        <FullContainer style={{backgroundColor: '#333', maxHeight:'110vh', position:'relative', alignItems:'center', justifyContent:'center',}}>
          <Curtain />
        </FullContainer>
          <Contact/>
        <FullContainer style={{backgroundColor: '#000',  color: '#000'}}>
              <Footer style={{backgroundColor: '#000' }}/>
        </FullContainer>
      </ContentContainer>
</>

  );
};


export default ParallaxSection;
