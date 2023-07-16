import styled from 'styled-components';

export const FooterContainer = styled.footer`

  position: absolute;
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

export const SocialMediaLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: #333;
  color: #fff;
  margin: 0 10px;
  border-radius: 50%;
  text-decoration: none;
  transition: background 0.3s ease;

  &:hover {
    background: #555;
  }
`;

export const Copyright = styled.p`
  text-align: center;
  font-size: 14px;
  color: #666;
`;
