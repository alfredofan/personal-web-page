import React from 'react';
import { FooterContainer, StickyFooterContainer,FooterNav, NavLink, SocialMediaContainer, SocialMediaLink, Copyright }
  from './FooterStyles';

const CarouselFooter = () => {
  return (
    <StickyFooterContainer>
      
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
        &copy; {new Date().getFullYear()} Alfredo Faustino. All rights reserved.
      </Copyright>
    </StickyFooterContainer>
  );
};

export default CarouselFooter;
