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
  display: flex;
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
  animation: ${fadeInOut} 2.1s infinite;
  opacity: 0;

  @media (max-width: 768px) {
    margin-bottom: 25vh !important;
}

@media (min-aspect-ratio: 21/10) {
  margin-bottom: 10vh !important;
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
      <Logo aria-label="af Logo" />
    </LoadingScreenContainer>
  );
};

export default LoadingScreen;
