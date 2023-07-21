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
  Copyright, 
  GradientHR }
  from './FooterStyles';

const Footer = () => {
  return (

    <FooterContainer>
    <FooterContainerCenter > 

    <FooterLogo/>
    </FooterContainerCenter>

    <GradientHR />

    <FooterContainerCenter>

      <FooterNav>
        <FooterNavLink href="#">Home</FooterNavLink>
        <FooterNavLink href="#">About</FooterNavLink>
        <FooterNavLink href="#">Services</FooterNavLink>
        <FooterNavLink href="#">Contact</FooterNavLink>
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
        </div>
        </FooterContainerBetween>
        {/* </MediumContainer> */}
    </FooterContainer>


  );
};

export default Footer;
