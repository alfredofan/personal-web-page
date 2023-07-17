import styled from 'styled-components';
import logoLinkedin from './img/Social Media/icons8-linkedin-64_clean.png';
import logoGitHub from './img/Social Media/github-2.png';




//const Color = '#808080'; // Change the color value as needed
//const Color2 = '#000000'; // Change the color value as needed
//color: ${navLinksAvtiveColor};



export const FooterContainer = styled.footer`
  background: transparent;
  padding: 20px;
  z-index: 10;

`;

export const StickyFooterContainer = styled.footer`

  position: absolute;
  display:flex;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 20px;
  background: transparent;
  padding: 20px;
`;

export const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const NavLink = styled.a`
  color: #333;
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
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


export const Copyright = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: #000;
`;
