import React, { useState, useEffect, Fragment } from 'react';
// import { FaBars } from 'react-icons/fa';
// import styled from 'styled-components';

import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
  Sidenav,
  // SidenavContainer,
  SidenavLogo,
  SidenavItem,
  SidenavLinks,
  Overlay,
} from './NavbarStyles';
import './App.css';

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const [isSidenavOpen, setIsSidenavOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const changeNavbarColor = () => {
    const scrollHeight = window.innerHeight; // Get the window height (viewport height)
    const equivalentHeight = scrollHeight * 0.97; // Calculate the equivalent height based on a percentage (97% in this case) which is equivalent to the whole page less the navbar
    
    if (window.scrollY >= equivalentHeight) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };


  const toggleSidenav = () => {
    setIsSidenavOpen(!isSidenavOpen);
    setIsOverlayOpen(!isOverlayOpen);
  };

  const closeSidenav = () => {
    setIsSidenavOpen(false);
    setIsOverlayOpen(false);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  window.addEventListener('scroll', changeNavbarColor);


  //automatically close the overlay and sidebar screen is resize to width greater than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        closeSidenav();
        closeOverlay();
      }
    };
  
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  

  return (
    <Fragment>
      <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <NavContainer>
          <div>
      <NavLogo href="/" aria-label="af Logo">
          {/* AFaustino */}
      </NavLogo>
          </div>
          <MobileIcon onClick={toggleSidenav}>
            <div className="container">
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </MobileIcon>

          <NavMenu>
            <NavItem>
              <NavLinks href="#about">About</NavLinks>
            </NavItem>
            {/* <NavItem>
              <NavLinks href="#">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Events</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks href="#contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>
        </Nav>

        <Sidenav isOpen={isSidenavOpen}>
         
            <SidenavLogo href="/" aria-label="af Logo">
              {/* AFaustino */}
              </SidenavLogo>
            <MobileIcon onClick={closeSidenav}>
              <div className="container">
                <div className="bar01"></div>
                <div className="bar02"></div>
                <div className="bar03"></div>
              </div>
            </MobileIcon>

            <SidenavItem style={{ marginTop: '20px' }} onClick={() => {closeOverlay(); closeSidenav();}}>
            <SidenavLinks href="#about">About</SidenavLinks>
          </SidenavItem>
          {/* <SidenavItem onClick={closeOverlay, closeSidenav}>
            <SidenavLinks href="#">Services</SidenavLinks>
          </SidenavItem>
          <SidenavItem onClick={closeOverlay, closeSidenav}>
            <SidenavLinks href="#">Events</SidenavLinks>
          </SidenavItem> */}
          <SidenavItem onClick={() => {closeOverlay(); closeSidenav();}}>
            <SidenavLinks href="#contact">Contact</SidenavLinks>
          </SidenavItem>
        </Sidenav>

      {isOverlayOpen && <Overlay onClick={() => {closeOverlay(); closeSidenav();}} />}
    </Fragment>
  );
};

export default Navbar;