import React, { useState, Fragment } from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

import {
  Nav,
  NavContainer,
  NavLogo,
  NavItem,
  NavLinks,
  NavMenu,
  MobileIcon,
  Sidenav,
  SidenavContainer,
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
    if (window.scrollY >= 80) {
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

  return (
    <Fragment>
      <Nav className={colorChange ? 'navbar colorChange' : 'navbar'}>
        <NavContainer>
 <div >
      <NavLogo href="#">
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
              <NavLinks href="#">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Events</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Contact</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks href="#">Sign In</NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainer>

        <Sidenav isOpen={isSidenavOpen}>
          <a href="javascript:void(0)" className="closebtn" onClick={closeSidenav}>
            ×
          </a>
          <SidenavContainer>
            <SidenavLogo href="#">
              {/* AFaustino */}
              </SidenavLogo>
            <MobileIcon onClick={closeSidenav}>
              <div className="container">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </MobileIcon>
          </SidenavContainer>

          <SidenavItem>
            <SidenavLinks href="#">About</SidenavLinks>
          </SidenavItem>
          <SidenavItem>
            <SidenavLinks href="#">Services</SidenavLinks>
          </SidenavItem>
          <SidenavItem>
            <SidenavLinks href="#">Events</SidenavLinks>
          </SidenavItem>
          <SidenavItem>
            <SidenavLinks href="#">Contact</SidenavLinks>
          </SidenavItem>
          <SidenavItem>
            <SidenavLinks href="#">Sign In</SidenavLinks>
          </SidenavItem>
        </Sidenav>
      </Nav>
      {isOverlayOpen && <Overlay onClick={closeOverlay, closeSidenav} />}
    </Fragment>
  );
};

export default Navbar;
