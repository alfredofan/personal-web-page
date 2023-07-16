import React from 'react';
import { FooterContainer, StickyFooterContainer,FooterNav, NavLink, SocialMediaContainer, SocialMediaLink, Copyright }
  from './FooterStyles';

const CarouselFooter = () => {
  return (
    <StickyFooterContainer>
      
  
 
      <Copyright>
        &copy; {new Date().getFullYear()} Alfredo Faustino. 
      </Copyright>

      <SocialMediaLink href="#">
          <i className="fab fa-linkedin-in"></i>
        </SocialMediaLink>
        
    </StickyFooterContainer>
  );
};

export default CarouselFooter;
