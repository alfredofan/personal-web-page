import React from 'react';
import { FooterContainer, StickyFooterContainer,FooterNav, NavLink, SocialMediaContainer, LinkedinLink, GitHubLink, Copyright }
  from './FooterStyles';

const CarouselFooter = () => {
  return (
    <StickyFooterContainer>
      
  
 
      <Copyright>
        &copy; {new Date().getFullYear()} Alfredo Faustino. 
      </Copyright>
<div>
      <LinkedinLink href="https://au.linkedin.com/in/alfredo-faustino-44034a70?trk=public_profile_samename-profile">
          <i className="fab fa-linkedin-in"></i>
        </LinkedinLink>

        <GitHubLink href="https://github.com/alfredofan/">
          <i className="fab fa-github"></i>
        </GitHubLink>
        </div>
    </StickyFooterContainer>
  );
};

export default CarouselFooter;
