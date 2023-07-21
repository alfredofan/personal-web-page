import styled from 'styled-components';
import logoBlack from './img/personal_logo_black.png';
import logoWhite from './img/personal_logo_white.png';


const navLinksColor = '#000'; // Change the color value as needed
const navLinksHoverColor = '#555555'; // Change the color value as needed

const sidenavLinksColor = '#fff'; // Change the color value as needed
const sidenavLinksHoverColor = '#808080'; // Change the color value as needed


export const Nav = styled.nav`
  background: transparent;
  backdrop-filter: blur(4px); // Adjust the blur intensity as needed. blur not working on browsers for mobile devices
  -webkit-backdrop-filter: blur(4px); /* Safari */
  -moz-backdrop-filter: blur(4px); /* Firefox */
  -ms-backdrop-filter: blur(4px); /* IE 10 */
  -o-backdrop-filter: blur(4px); /* Opera */



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
  transition: background-color 0.6s ease;


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
   margin-left: 47.5px;
//   font-weight: bold;
//   text-decoration: none;

  display: block;
  position: ;
  top: 30px;
  left: 47.5px; 

  background-image: url(${logoWhite});
  background-repeat: no-repeat;
  background-size: contain; 
  height: 30px;
  width: 100%;
  padding-left: 30px; // Adjust the padding as needed
  margin-top: 27.5px;

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
  // height: 80px;



`;

export const NavLinks = styled.a`
  color: ${sidenavLinksColor};
  display: flex;
  align-items: center;
  align-self: center;

  text-decoration: none;
  padding: 0 1rem;
  height: 30%;
  padding-bottom: 0.25rem;
  cursor: pointer;
  position: relative;


  &:hover {
    // color: ${sidenavLinksColor};
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
  background: ${sidenavLinksColor};
  height: 1px;
}

&:hover:after {
  width: 70%; //approximatelly size of the word (link)
}

&:after{
  transition: all .5s;
}

&:before {
  transition: all .5s;
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

  @media screen and (min-width: 960px) {
    display: none;
  }
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
  top: 17.5px;
  left: 47.5px; 

  background-image: url(${logoWhite});
  background-repeat: no-repeat;
  background-size: contain; 
  height: 30px;
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

  @media screen and (min-width: 960px) {
    display: none;
`;
