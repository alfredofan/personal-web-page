import styled from 'styled-components';

export const Nav = styled.nav`
  background: transparent;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  /* Fix your navbar by using below two lines of code */
  position: sticky;
  top: 0;
  /* Fix your navbar by using above two lines of code */
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;


export const NavLogo = styled.a`
  color: Blue;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.0rem;
  display: flex;
  align-items: center;
  margin-left: 44px;
  font-weight: bold;
  text-decoration: none;
`;


export const MobileIcon = styled.div`
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
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #000000;
  }
`;



//Side Navigation Panel

export const Sidenav = styled.div`
  width: ${({ isOpen }) => (isOpen ? '250px' : '0')};
  position: fixed;
  z-index: 1;
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
  
  height: 60px;
  z-index: 1;
  width: 100%;
  min-width:fit-content;
  padding: 0px;
`;

export const SidenavLogo = styled.a`
  display: block;
  position: absolute;
  top: 10px;
  left: 24px;
  align-items: center;  

  color: Blue;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2.0rem;
  margin-left: 44px;
  font-weight: bold;
  text-decoration: none;

`;


export const SidenavItem = styled.li`
  height: 50px;
`;

export const SidenavLinks = styled.a`
  color: #808080;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  width:100%;
  &.active {
    color: #000000;
  }
`;

export const Overlay = styled.div`
  height: 100%;
  width: 100%;
  display: block;
  position: fixed;
  z-index: 11;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;
