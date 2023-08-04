// LoadingScreen.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './img/personal_logo_white.png';

const fadeInOut = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

const Logo = styled.a`
  align-self: center;
  justify-content: center;
  width: 106px;
  height: 43px;
  position: absolute;
  background: transparent;
  color: #fff;
  transition: background 0.3s ease;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
//   background-color: white;
  animation: ${fadeInOut} 2s infinite;
  opacity: 0;

  display: none; /* Hide the curtains on non-desktop devices */

  @media (min-width: 768px) {
    display: flex; /* Show the curtains on desktop devices */
}

@media (min-aspect-ratio: 21/10) { //used 21:10.5 instead of 21:9 because of different mobile browsers
   display: none; /* Hide the curtains on non-mobile devices */
}
`;



const LogoMobile = styled.a`
  align-self: center;
  justify-content: center;
  margin-bottom: 25vh;
  width: 106px;
  height: 43px;
  position: absolute;
  background: transparent;
  color: #fff;
  transition: background 0.3s ease;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
//   background-color: white;
  animation: ${fadeInOut} 2s infinite;
  opacity: 0;

  display: none; /* Hide the curtains on non-desktop devices */

  @media (max-width: 768px) {
    display: flex; /* Show the curtains on mobile devices */
}

@media (min-aspect-ratio: 21/10) {
  display: none; /* Hide the curtains on non-mobile devices */
}
`;


const LoadingScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh!important;
    background-color: black;
  
  `;


const LoadingScreen = () => {
  return (
    <LoadingScreenContainer >
      {/* <div className="loader"></div> */}
      <Logo />
      <LogoMobile />

    </LoadingScreenContainer>
  );
};

export default LoadingScreen;
