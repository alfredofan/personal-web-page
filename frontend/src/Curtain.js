import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import logo from './img/personal_logo_white.png';
import photo from './img/Photos/mono.jpg';




const styles = {
  curtainLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '0%', // Start with half the screen width
    height: '110vh',
    backgroundColor: 'transparent',
    transition: 'width 0.3s ease', // Animate width change
  },
  curtainRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '0%', // Start with half the screen width
    height: '110vh',
    backgroundColor: 'transparent',
    transition: 'width 0.3s ease', // Animate width change
  },

  content: { 
    // This class is used to make the content from left side slide out with the curtain

    height: '100%',
    display: 'flex',
    flexDirection: 'column', // Align the content vertically
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center',
  },

  

};

 const Logo = styled.a`
 display: flex;
 align-self: center;
 justify-content: center;
 width: 106px;
 height: 43px;
 background: transparent;
 color: #fff;
 margin: 10px;
 // border-radius: 50%; //Roud effect
 // text-decoration: none;
 transition: background 0.3s ease;
 background-image: url(${logo});
 background-repeat: no-repeat;
 background-size: contain; 

 &:hover {
   opacity: 0.5;
 }
`;

const Photo = styled.img`
width: 100%;
height: 110vh;
// border-radius: 50%;
background-image: url(${photo});
background-repeat: no-repeat;
background-size:cover; 

//position photo 100px beyond left edge of the screen 
// position: absolute;
// left: -100px;

}
`;


const CurtainEffect = () => {
  const [curtainLeftWidth, setCurtainLeftWidth] = useState('0%'); // Start with half the screen width
  const [curtainRightWidth, setCurtainRightWidth] = useState('0%'); // Start with half the screen width

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 450; //scroll sensivity
      const newCurtainLeftWidth = Math.min(50, scrollPercentage / 1.8); // Limit to a maximum of 50%
      const newCurtainRightWidth = Math.min(50, scrollPercentage / 1.8); // Limit to a maximum of 50%
      setCurtainLeftWidth(`${newCurtainLeftWidth}%`);
      setCurtainRightWidth(`${newCurtainRightWidth}%`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
        {/* Left Curtain */}
      <div style={{ ...styles.curtainLeft, width: curtainLeftWidth }} >
        <div style={styles.content}>  

        <Photo />

            {/* <h2>Test</h2> */}
    
        </div>
      </div>


        {/* Right Curtain */}
      <div style={{ ...styles.curtainRight, width: curtainRightWidth }} >
      <div style={styles.content}>  

        <h2>Test 2</h2>

      </div>

      </div>
    </div>
  );
};

function Curtain() {
  return (
<div >
<div style={styles.content}>  

        <Logo />
      <h1>Scroll up or down to see the curtain effect!</h1>

      <CurtainEffect />
      </div>

    </div>
  );
}

export default Curtain;
