import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from './img/carousel/luigi-pozzoli-Db8xEYwtdWw-unsplash-2.jpg'; 







const ParallaxContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100vh !important; /* Adjust to position the container higher than the screen */
min-width: 105%;
background-color: #f5f5f5;
position: relative;
object-fit: cover;
overflow: hidden;
left: -20px; /* Adjust to position the container wider than the screen */
top: -30px;


background-image: url(${backgroundImage});
// background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
transition: transform 0.05s ease-in-out;


  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: ${({ mousePosition }) => `${mousePosition.x}px ${mousePosition.y}px`};
  background-repeat: no-repeat;
  background-size: cover;
`;




const ParallaxCaption = styled.div`
position:stick;
max-width: 600px;
margin-bottom: 200px;


@media screen and (max-width: 1600px) {
    max-width: 500px;
  }

@media screen and (max-width: 1200px) {
    max-width: 400px;

  }

@media screen and (max-width: 1010px) {
    max-width: 350px;

  }

`;




const ContentContainer = styled.div`
  height: 1000px;
  background-color: red;
  font-size: 36px;
  z-index: 1;
  `;

  

const ParallaxSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const offsetX = clientX - screenWidth / 2;
    const offsetY = clientY - screenHeight / 2;

    if (
      clientX < 0 ||
      clientX > screenWidth ||
      clientY < 0 ||
      clientY > screenHeight ||
      (e.target && e.target.nodeName === 'HTML')
    ) {
      // Reset position if the mouse moves outside the screen or is not on the page
      setMousePosition({ x: 0, y: 0 });
    } else {
      setMousePosition({ x: offsetX / -60, y: offsetY / -60 }); // Remove sign to change direction
    }
  };

  return (
    <>

        <div className="parallax-container"  onMouseMove={handleMouseMove}>
        <div className="parallax">
      {/* <p>Scroll Up and Down this page to see the parallax scrolling effect.</p> */}
      <ParallaxContainer  mousePosition={mousePosition}>
      <ParallaxCaption>
        <p className="font-small" style={{ marginBottom: '0px' }}>
          Hi, my name is
        </p>
        <h2 className="font-large" style={{ fontWeight: 'bold', margin: '0px' }}>
          Alfredo Faustino
        </h2>
        <h2 className="font-medium" style={{ marginTop: '0px' }}>
          I build things for the web.
        </h2>
        <p className="font-small">
          As a full stack developer, I bring your ideas to life by building innovative and
          captivating online solutions.
        </p>
        <button>Learn More</button>
      </ParallaxCaption>
      </ParallaxContainer>

      <ContentContainer>
        Scroll Up and Down this page to see the parallax scrolling effect.
        This div is just here to enable scrolling.
        Tip: Try to remove the background-attachment property to remove the scrolling effect.
      </ContentContainer>

      </div>
    </div>
    </>
  );
};

export default ParallaxSection;



