import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from './img/personal_logo_white.png';

const Logo = styled.div`
display: flex;
align-self: center;
justify-content: center;
width: 106px;
height: 43px;
position: relative;
background: transparent;
color: #fff;
margin-top: 80vh ;
// border-radius: 50%; //Roud effect
// text-decoration: none;
transition: background 0.3s ease;
background-image: url(${logo});
background-repeat: no-repeat;
background-size: contain; 

&:hover {
  opacity: 0.5;
}

@media screen and (max-width: 767px) {
  // margin-top: 100vh !important;
}
`;

export const LogoFadeOutWide = () => {
    const [scrollY, setScrollY] = useState(0);
  
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    // Define the fade-out and slide-in animation based on the scroll position
    const fadeOutOpacity = Math.min(1, 1 - scrollY / 300);
    
    const slideInY = Math.min(0, 150 - scrollY / 50);
    const slideDown = Math.min(0, 50 - scrollY / 20); // Adjust the slide down distance as needed
  
    const captionStyle = {
      opacity: fadeOutOpacity,
      transform: `translateY(${slideInY}px)`,
      transition: "opacity 0.3s, transform 0.8s",
      marginBottom: `${slideDown}px`, // Apply the slide down transformation
    };
  
    return (


    <div style={{display:'flex', justifyContent:'center', padding:'0px'}}>
      <Logo style={captionStyle}/>
    </div>
  );
};





export const LogoFadeOut = () => {
    const [scrollY, setScrollY] = useState(0);
  
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  
    // Define the fade-out and slide-in animation based on the scroll position
    const fadeOutOpacity = Math.min(1, 1 - scrollY / 700);
    
    const slideInY = Math.min(0, 150 - scrollY / 50);
    const slideDown = Math.min(0, 50 - scrollY / 20); // Adjust the slide down distance as needed
  
    const captionStyle = {
      opacity: fadeOutOpacity,
      transform: `translateY(${slideInY}px)`,
      transition: "opacity 0.8s, transform 0.8s",
      marginBottom: `${slideDown}px`, // Apply the slide down transformation
    };
  
    return (


    <div style={{display:'flex', justifyContent:'center', padding:'0px'}}>
      <Logo style={captionStyle}/>
    </div>
  );
};

export default LogoFadeOut;
