import React from 'react';
import { FooterContainer, FooterNav, NavLink, SocialMediaContainer, SocialMediaLink, Copyright } from '../FooterStyles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterNav>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#">About</NavLink>
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Contact</NavLink>
      </FooterNav>
      <SocialMediaContainer>
        <SocialMediaLink href="#">
          <i className="fab fa-facebook-f"></i>
        </SocialMediaLink>
        <SocialMediaLink href="#">
          <i className="fab fa-twitter"></i>
        </SocialMediaLink>
        <SocialMediaLink href="#">
          <i className="fab fa-instagram"></i>
        </SocialMediaLink>
        <SocialMediaLink href="#">
          <i className="fab fa-linkedin-in"></i>
        </SocialMediaLink>
      </SocialMediaContainer>
      <Copyright>
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
