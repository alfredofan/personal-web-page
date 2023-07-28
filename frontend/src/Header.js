import React, { useEffect, useState } from "react";
import styled, { keyframes } from 'styled-components';



const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const HeaderContainer = styled.div`
  animation:  ${fadeIn} 1s 0s ease-in-out;
`;

const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define the fade-out and slide-in animation based on the scroll position
  const fadeOutOpacity = Math.min(1, 1 - scrollY / 450);
  const slideInY = Math.min(0, 150 - scrollY / 5);
  const slideDown = Math.min(0, 50 - scrollY / 10); // Adjust the slide down distance as needed

  const captionStyle = {
    opacity: fadeOutOpacity,
    transform: `translateY(${slideInY}px)`,
    transition: "opacity 0.3s, transform 0.5s",
    marginBottom: `${slideDown}px`, // Apply the slide down transformation
  };

  return (
    <HeaderContainer className="parallax-caption" style={captionStyle}>
      <p className="font-small">Hi, my name is</p>      

      <h2 className="font-xx-large" style={{ fontWeight: "bold", margin: "0px" }}>
        Alfredo Faustino
      </h2>
      <h2 className="font-large" style={{ marginTop: "0px" }}>
        I build things for the web.
      </h2>
      <p className="font-small">      <br></br>

        As a full stack developer, I bring your ideas to life by building innovative and captivating online solutions.
      </p>
      <br></br>
      <button>Learn More</button>
    </HeaderContainer>

  );
};

export default Header;
