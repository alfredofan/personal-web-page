import React from 'react';

import {
  Container,
  SmallContainer,
  MediumContainer,
  LargeContainer,
  FullContainer,
  PageContainer,
  PageSmallContainer,
  PageMediumContainer,
  PageLargeContainer,
  PageFullContainer,
} from './Containers';

import { 
  FooterContainer, 
  FooterContainerAround, 
  FooterContainerCenter, 
  FooterContainerBetween, 
  StickyFooterContainer, 
  FooterLogo, 
  FooterNav, 
  FooterNavLink, 
  SocialMediaContainer,
  LinkedinLink, 
  GitHubLink,
  EmailLink,  
  Copyright, 
  GradientHR }
  from './FooterStyles';

const Footer = () => {
  return (

    <FooterContainer>
    <FooterContainerCenter > 

    <FooterLogo href='/'/>
    </FooterContainerCenter>

    <GradientHR />

    <FooterContainerCenter>

      <FooterNav>
        <FooterNavLink href="#">Home</FooterNavLink>
        <FooterNavLink href="#about">About</FooterNavLink>
        {/* <FooterNavLink href="#">Services</FooterNavLink> */}
        <FooterNavLink href="#contact">Contact</FooterNavLink>
      </FooterNav>
      </FooterContainerCenter>

      <GradientHR />



<br></br>
{/* <MediumContainer> */}
<FooterContainerBetween >
      <Copyright>
        &copy; {new Date().getFullYear()} Alfredo Faustino. All rights reserved.
      </Copyright>
      
      <div>
        
      <LinkedinLink href="https://au.linkedin.com/in/alfredo-faustino-44034a70?trk=public_profile_samename-profile">
        </LinkedinLink>

        <GitHubLink href="https://github.com/alfredofan/">
        </GitHubLink>

        <EmailLink>
            <a href="mailto:fan.alfredo@gmail.com" title="Contact me">
              <svg
              aria-hidden="true"
              className="h-5 inline w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"
                ></path>
                <path
                  d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"
                ></path>
              </svg>
            </a>
        </EmailLink>

        </div>
        </FooterContainerBetween>
        {/* </MediumContainer> */}
    </FooterContainer>


  );
};

export default Footer;
