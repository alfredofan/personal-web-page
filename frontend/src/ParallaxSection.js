// ParallaxSection.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from "react-dom";

import './index.css'; // CSS custom styling
import './ParallaxSection.css'; // CSS custom styling
// import Image from './img/carousel/luigi-pozzoli-Db8xEYwtdWw-unsplash-2.jpg';


import VideoPlayer from './VideoPlayer';


import {
    Container,
    SmallContainer,
    MediumContainer,
    LargeContainer,
    FullContainer,
    StyledFullContainer,
    PageContainer,
    PageSmallContainer,
    PageMediumContainer,
    PageLargeContainer,
    PageFullContainer,
  } from './Containers';
  
  import Footer from './Footer';
  import Contact from './Contact';

  import Header from './Header';
  import Curtain from './Curtain';


   




const ParallaxContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh !important; /* Adjust to position the container higher than the screen */
min-width: 100%;
background-color: transparent;
position: relative;
object-fit: cover;
overflow: hidden;

z-index: -1 !important;



`;

const ParallaxCaption = styled.div`
position:stick;
max-width: 600px;
margin-bottom: 200px;


@media screen and (max-width: 1600px) {
    max-width: 500px;
  }

@media screen and (max-width: 1200px) {
    max-width: 400px;

  }

@media screen and (max-width: 1010px) {
    max-width: 350px;

  }

`;

const ContentContainer = styled.div`
  height: fit-content;
  background-color: red;
  font-size: 36px;
  position: absolute;
  width: 100%;
  overflow-x: hidden; //fix horizontal scroll issue on mobile
  -webkit-overflow-scrolling: touch; /* Disable horizontal overflow for Safari */

 
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
    <>
      <ParallaxContainer  >

    <div className="parallax-container" onMouseMove={handleMouseMove}>
      
      <div className="parallax">

      <VideoPlayer />
      

{/* <video id="myBanner" style={{
  transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
  marginBottom: '20px',
  height:'110vh', minWidth:'105%', top:'-20', left: '-50' }} autoPlay loop muted playsInline>
    <source src={Video} type="video/mp4"></source>
    Your browser does not support HTML5 video.
</video> */}


<Header />
      </div>
    </div>


    </ParallaxContainer>

<ContentContainer>



{/* <MagicScroll  /> */}


{/* <!-- Our Mission --> */}

<PageFullContainer style={{backgroundColor: '#333' }}>

{/* <div className="" style={{ width: '100%', height: '100vh',backgroundColor: '#f1f1f1' }}> */}
      <SmallContainer style={{justifyContent:'center', alignContent:'center'}}>

        <div className="" role="grid" style={{ marginTop: 0, marginBottom: 0 }}>
          <h2 className="" style={{ fontSize: 'clamp(22px, 3vw, 45px)' }}>
            Our Mission
          </h2>
          <br />
          <p style={{ padding: 20, fontSize: 'clamp(15px, 2vw, 22px)', textAlign: 'justify' }}>
            At A2Z recyclers we understand the connection between a healthy planet and good recycling habits. We aim to make our earth green and inculcate recycling as a habit, not a practice.
          </p>
        </div>
            <Curtain />

      </SmallContainer>
    {/* </div> */}

    </PageFullContainer>



{/* <!-- Our Vision --> */}


<PageFullContainer className="parallax-container" style={{backgroundColor: '#818181' }}>
      <SmallContainer style={{justifyContent:'center', alignContent:'center'}}>
        <h2 className="" style={{ fontSize: 'clamp(22px, 3vw, 45px)' }}>
          Our Vision
        </h2>
        <br />
        <p style={{ padding: 20, fontSize: 'clamp(15px, 2vw, 22px)', textAlign: 'justify' }}>
          To promote recycling habits in every household and business organisation.
        </p>
        </SmallContainer>
    </PageFullContainer>




<PageFullContainer style={{backgroundColor: '#f1f1f1' }}>
      <SmallContainer style={{justifyContent:'center', alignContent:'center'}}>
          <h2 className="" style={{ fontSize: 'clamp(22px, 3vw, 45px)' }}>
            Company Values
          </h2>
          <br />
          <p style={{ padding: 20, fontSize: 'clamp(15px, 2vw, 22px)', textAlign: 'justify' }}>
            <strong>• Commitment</strong>: to make reduce pollution.<br />
            <br />
            <strong>• Teamwork</strong>: to work collectively as a society to make the environment cleaner.<br />
            <br />
            <strong>• Responsibility</strong>: to make everyone understand how good and bad recycling habits affect the environment.
          </p>
      </SmallContainer>
    </PageFullContainer>
    
    {/* <PageFullContainer style={{backgroundColor: '#fff' }} className="parallax-container" onMouseMove={handleMouseMove}>
    </PageFullContainer> */}

    {/* <PageFullContainer style={{backgroundColor: '#000' }}> previous color: #818181 */}
      <Contact/>
    {/* </PageFullContainer> */}


{/* <!-- video --> */}

{/* <FullContainer style={{backgroundColor: '#000' }}> */}

  {/* <VideoPlayer /> */}

{/* <video id="myBanner" style={{width:'100%', marginTop:'50px',}} controls autoplay loop muted playsinline>
    <source src={Video} type="video/mp4"></source>
    Your browser does not support HTML5 video.
</video> */}


{/* <!-- Company Values --> */}

{/* </FullContainer> */}


<FullContainer style={{backgroundColor: '#000',  color: '#000'}}>
      <Footer style={{backgroundColor: '#000' }}/>
</FullContainer>

</ContentContainer>

</>

  );
};


export default ParallaxSection;
