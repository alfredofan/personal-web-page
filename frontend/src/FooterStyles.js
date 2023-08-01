import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import './App.css'; // Import your custom CSS


import logoImage from './img/personal_logo_white.png';
import logoLinkedin from './img/Social Media/linkedin-white.png';
import logoGitHub from './img/Social Media/github-white.png';




//const Color = '#808080'; // Change the color value as needed
//const Color2 = '#000000'; // Change the color value as needed
//color: ${navLinksAvtiveColor};



export const FooterContainer = styled.footer`
position: relative;
z-index: 0;
font-size: 1rem;


// display:flex;
// justify-content: center;  
// align-items: center;
// flex-direction: column;



background: transparent;
width: 100%;
max-width: 100vw;

height: fit-content;

  background-color: #000;
  color: #fff;

`;



export const FooterContainerAround = styled.div`
position: relative;
z-index: 0;
position: sticky-bottom;
display:flex;
justify-content: space-aroud;   
align-items: center;

background: transparent;
max-width: 100vw;


  background-color: #000;
  color: #fff;
`;

export const FooterContainerBetween = styled.div`
position: relative;
z-index: 0;

display:flex;
justify-content: space-around;   
align-items: center;

background: transparent;
max-width: 100vw;

background-color: #000;
color: #fff;
padding: 30px ;


  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    transition: transform 0.3s ease-in-out;  
  }
`;

export const FooterContainerCenter = styled.div`
position: relative;
z-index: 0;

display:flex;
justify-content: center;  
align-items: center;
max-width: 100vw;


background: transparent;


  padding: 30px;
  background-color: #000;
  color: #fff;

`;




export const StickyFooterContainer = styled.footer`

  position: absolute;
  display:flex;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  max-width: 100vw;
  background-color: #333;
  color: #fff;
  padding: 20px;
  background: transparent;
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  
  // margin-bottom: 20px;
`;

export const FooterNavLink = styled.a`
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;
  padding: 0.25rem;


  &:hover {
    text-decoration: none;
    opacity: 0.5;
    
    }

    &:after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      width: 0%;
      content: '.';
      color: transparent;
      background: #fff;
      height: 1px;
    }
    
    &:hover:after {
      width: 100%; //approximatelly size of the word (link)
    }
    
    &:after{
      transition: all .5s;
    }
    
    &:before {
      transition: all .5s;
    }
    
    `;


export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const LinkedinLink = styled.a`
display: inline-flex;
align-items: center;
justify-content: center;
width: 25px;
height: 25px;
background: transparent;
color: #fff;
margin: 0 10px;
// border-radius: 50%; //Roud effect
// text-decoration: none;
transition: background 0.3s ease;
background-image: url(${logoLinkedin});
background-repeat: no-repeat;
background-size: contain; 

&:hover {
  opacity: 0.5;
}
`;



export const GitHubLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background: transparent;
  color: #fff;
  margin: 0 10px;
  // border-radius: 50%; //Roud effect
  // text-decoration: none;
  transition: background 0.3s ease;
  background-image: url(${logoGitHub});
  background-repeat: no-repeat;
  background-size: contain; 

  &:hover {
    opacity: 0.5;
  }
`;


export const EmailLink = styled.div`
  margin: 0 10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  a {

    width: 25px;
    height: 25px;
    background: transparent;
    color: #fff !important;
    transition: color 0.2s ease;
    /* Set icons and links to white color */

    svg {
      /* Adjust icon size proportionally */
      width: 25px;
      height: 25px;
    }

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const Copyright = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  padding-right: 200px;

  @media screen and (max-width: 960px) {
    padding-right: 0px;

  }
`;


export const FooterLogo = styled.a`

  display: flex;
  align-self: center;
  justify-content: center;
  width: 85px;
  height: 35px;
  background: transparent;
  color: #fff;
  margin: 10px;
  // border-radius: 50%; //Roud effect
  // text-decoration: none;
  transition: background 0.3s ease;
  background-image: url(${logoImage});
  background-repeat: no-repeat;
  background-size: contain; 

  &:hover {
    opacity: 0.5;
  }
  `;


  export const GradientHR = styled.hr`
  align-self: center;
  height: 1px;
  border: none;
  background-image: linear-gradient(to right, transparent, white, transparent);
`;
