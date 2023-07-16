import styled from 'styled-components';
import logoImage from './img/personal_logo_black.png';
import logoImageSide from './img/personal_logo_white.png';


const navLinksColor = '#000'; // Change the color value as needed
const navLinksHoverColor = '#808080'; // Change the color value as needed

const sidenavLinksColor = '#fff'; // Change the color value as needed
const sidenavLinksHoverColor = '#808080'; // Change the color value as needed


export const Nav = styled.nav`
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width:100%;
  /* Fix navbar by using below two lines of code */
  position: fixed;
  top: 0;
  /* Fix navbar by using above two lines of code */
  z-index: 1;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: inherit;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;


export const NavLogo = styled.a`
//   color: Blue;
//  justify-self: flex-start;
//   cursor: pointer;
//   font-size: 2.0rem;
//   display: flex;
//  align-items: center;
   margin-left: 44px;
//   font-weight: bold;
//   text-decoration: none;

  display: block;
  position: ;
  top: 30px;
  left: 47.5px; 

  background-image: url(${logoImage});
  background-repeat: no-repeat;
  background-size: contain; 
  height: 35px;
  width: 100%;
  padding-left: 30px; // Adjust the padding as needed
  margin-top: 25px;

  &:hover {
    opacity: 0.5;
  }
`;


export const MobileIcon = styled.div` // Hamburger menu
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: -6px;
    left: 47.5px; /* Updated this line to position humburger menu on the right. just change to right: 0px;*/
	align-items: center;
	paddgin: 0px;
	margin: 0px;

    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }

  &:hover {
    opacity: 0.5;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;


export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.a`
  color: ${navLinksColor};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: ${navLinksHoverColor};
  }
`;



//Side Navigation Panel

export const Sidenav = styled.div`
  width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  position: fixed;
  z-index: 3;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;

export const OpenButton = styled.button`
  font-size: 20px;
  cursor: pointer;
  background-color: #111;
  color: white;
  padding: 10px 15px;
  border: none;
  &:hover {
  background-color: #444;
  }
  
`;


export const SidenavContainer = styled.div`
  display: flex;
  justify-self: center;
  align-self: center;
  z-index: inherit;

  
  height: 60px;
  width: 100%;
  min-width:fit-content;
  padding: 0px;

  
`;


export const SidenavLogo = styled.a`
//   color: Blue;
//  justify-self: flex-start;
//   cursor: pointer;
//   font-size: 2.0rem;
//   display: flex;
//  align-items: center;
   margin-left: 24px;
//   font-weight: bold;
//   text-decoration: none;

  display: block;
  position: absolute;
  z-index: inherit;
  top: 15px;
  left: 47.5px; 

  background-image: url(${logoImageSide});
  background-repeat: no-repeat;
  background-size: contain; 
  height: 35px;
  width: 100%;
  padding-left: 30px; // Adjust the padding as needed

  &:hover {
    opacity: 0.5;
  }

`;



export const SidenavItem = styled.li`
  height: 50px;
  z-index: inherit;
  list-style-type: none; /* this line is to hide the list marker */
`;

export const SidenavLinks = styled.a`
  color: ${sidenavLinksColor};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  width:100%;
  z-index: inherit;

  &:hover {
    color: ${sidenavLinksHoverColor};
  }
`;

export const Overlay = styled.a`
  height: 100%;
  width: 100%;
  display: block;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;
