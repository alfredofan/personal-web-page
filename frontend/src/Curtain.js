import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import logo from './img/personal_logo_white.png';
import photo from './img/Photos/mono.jpg';
import {LogoFadeOut, LogoFadeOutWide}  from './LogoFadeOut';




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

  curtainTop: {
    position: 'absolute',  
    top: 0,
    left: 0,
    width: '100%', // Start with half the screen width
    height: '55vh',
    backgroundColor: 'transparent',
    transition: 'width 0.3s ease', // Animate width change
  },
  curtainBottom: {
    position: 'absolute',     
    top: 0,
    right: 0,
    width: '100%', // Start with half the screen width
    height: '55vh',
    backgroundColor: 'transparent',
    transition: 'width 0.3s ease', // Animate width change
    marginTop: '55vh', // Half of the height (50%) to shift the bottom half into view
  },

  content: { 
    // This class is used to make the content from left side slide out with the curtain
    height: '100%',
    display: 'flex',
    flexDirection: 'column', // Align the content vertically
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center',

  // Center the content horizontally
  },
};


//  const Logo = styled.a`
//  display: flex;
//  align-self: center;
//  justify-content: center;
//  width: 106px;
//  height: 43px;
//  position: absolute;
//  background: transparent;
//  color: #fff;
//  margin-bottom: 75% !important;
//  // border-radius: 50%; //Roud effect
//  // text-decoration: none;
//  transition: background 0.3s ease;
//  background-image: url(${logo});
//  background-repeat: no-repeat;
//  background-size: contain; 

//  &:hover {
//    opacity: 0.5;
//  }
// `;

const Photo = styled.div`
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

const MobileCurtainsContainer = styled.div`
  display: none; /* Hide the curtains on non-mobile devices */

    @media (max-width: 768px) {
      display: flex; /* Show the curtains on mobile devices */
      flex-direction: column; /* Reverse the order for mobile layout */
      height: 110vh;
  }

  @media (min-aspect-ratio: 21/10) {
    display: none; /* Hide the curtains on non-mobile devices */
  }
`;

const DesktopCurtainsContainer = styled.div`
  display: none; /* Hide the curtains on non-desktop devices */

    @media (min-width: 769px) {
      display: flex; /* Show the curtains on desktop devices */
      height: 110vh;
  }

  @media (min-aspect-ratio: 21/10) { //used 21:10.5 instead of 21:9 because of different desktop browsers
     display: none; /* Hide the curtains on non-desktop devices */
  }
`;


const UltrawideCurtainsContainer = styled.div`
  display: none; /* Hide the curtains on non-desktop devices */

    @media (min-aspect-ratio: 21/10) {
      display: flex; /* Show the curtains on desktop devices */
      height: 110vh;
  }
//   @media (max-width: 768px) {
//     display: none; /* Hide the curtains on non-mobile devices */

// }
`;


// Effect for  curtains
const CurtainEffect = () => {
  const [curtainLeftWidth, setCurtainLeftWidth] = useState('0%'); // Start with half the screen width
  const [curtainRightWidth, setCurtainRightWidth] = useState('0%'); // Start with half the screen width

  const [curtainTopWidth, setCurtainTopWidth] = useState('0%'); // Start with half the screen width
  const [curtainBottomWidth, setCurtainBottomWidth] = useState('0%'); // Start with half the screen width

  const [curtainWideLeftWidth, setCurtainWideLeftWidth] = useState('0%'); // Start with half the screen width
  const [curtainWideRightWidth, setCurtainWideRightWidth] = useState('0%'); // Start with half the screen width

  useEffect(() => {
    const handleScroll = () => {
      const scrollDesktopPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 450; //scroll sensivity
      const scrollMobilePercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 600; //scroll sensivity
      const scrollWidePercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 400; //scroll sensivity


      // Effect for desktop curtains
      const newCurtainLeftWidth = Math.min(50, scrollDesktopPercentage / 3.3); // Limit to a maximum of 50%
      const newCurtainRightWidth = Math.min(50, scrollDesktopPercentage / 3.3); // Limit to a maximum of 50%
      setCurtainLeftWidth(`${newCurtainLeftWidth}%`);
      setCurtainRightWidth(`${newCurtainRightWidth}%`);
      
      // Effect for mobile curtains
      const newCurtainTopWidth = Math.min(100, scrollMobilePercentage / 1.6); // Limit to a maximum of 50%
      const newCurtainBottomWidth = Math.min(100, scrollMobilePercentage / 1.6); // Limit to a maximum of 50%
      setCurtainTopWidth(`${newCurtainTopWidth}%`);
      setCurtainBottomWidth(`${newCurtainBottomWidth}%`);

      // Effect for ultrawide curtains
      const newCurtainWideLeftWidth = Math.min(50, scrollWidePercentage / 1.3); // Limit to a maximum of 50%
      const newCurtainWideRightWidth = Math.min(50, scrollWidePercentage / 1.3); // Limit to a maximum of 50%
      setCurtainWideLeftWidth(`${newCurtainWideLeftWidth}%`);
      setCurtainWideRightWidth(`${newCurtainWideRightWidth}%`);
      

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<div>



  <UltrawideCurtainsContainer>
    <div>

        {/* Left Curtain */}
      <div style={{ ...styles.curtainLeft, width: curtainWideLeftWidth }} >
        <div style={styles.content}>  
        <Photo role="img" aria-label="Alfredo in Salvador, Bahia, Brazil"/>
        </div>
      </div>

        {/* Right Curtain */}
      <div style={{ ...styles.curtainRight, width: curtainWideRightWidth }} >
        <div style={styles.content} >  

          <div style={{
                    display: 'block',
                    color: 'white',
                    textAlign:'left',
                    textAlignVertical: 'center',
                    lineHeight: '25px',
                    // padding: '40px',
                    minWidth: '300px',
                    width: '90%',
                    }}>
            <p className='font-medium' >
              About
            </p> <br></br>
            {/* <h2 className='font-x-large'>
              Developer
            </h2> <br></br> */}

            <p className='font-small'>
              Hi there! I'm Alfredo, a passionate full stack developer ready to craft dynamic 
              and interactive websites for you. I specialize in creating first-rate frontend and 
              backend solutions. Let's team up and turn your web development vision into reality!
            </p>
          </div>
        </div>
      </div>
    </div>
  </UltrawideCurtainsContainer>


  <DesktopCurtainsContainer>
    <div>
      
        {/* Left Curtain */}
      <div style={{ ...styles.curtainLeft, width: curtainLeftWidth }} >
        <div style={styles.content}>  
        <Photo role="img" aria-label="Alfredo in Salvador, Bahia, Brazil"/>
        </div>
      </div>

        {/* Right Curtain */}
      <div style={{ ...styles.curtainRight, width: curtainRightWidth }} >
        <div style={styles.content} >  
          <div style={{
                    display: 'block',
                    color: 'white',
                    textAlign:'left',
                    textAlignVertical: 'center',
                    // padding: '40px',
                    minWidth: '300px',
                    width: '90%',
                    }}>
              <p className='font-medium' font->
                  About
              </p> <br></br>
              {/* <h2 className='font-x-large'>
                  Developer
              </h2> <br></br> */}

              <p className='font-small'>
              Hi there! I'm Alfredo, a passionate full stack developer ready to craft dynamic 
              and interactive websites for you. I specialize in creating first-rate frontend and 
              backend solutions. Let's team up and turn your web development vision into reality!
              </p>
          </div>
        </div>
      </div>
    </div>
  </DesktopCurtainsContainer>


  <MobileCurtainsContainer>
    <div>

        {/* Left Curtain */}
      <div style={{ ...styles.curtainTop, width: curtainTopWidth }} >
        <div style={styles.content}>  
        <Photo role="img" aria-label="Alfredo in Salvador, Bahia, Brazil"/>
        </div>
      </div>


        {/* Right Curtain */}
      <div style={{ ...styles.curtainBottom, width: curtainBottomWidth }} >
        <div style={styles.content}>  
          <div style={{
            // position: 'absolute',
              display: 'block',
              
              color: 'white',
              textAlign:'left',
              textAlignVertical: 'center',
              lineHeight: '25px',

              // padding: '20px',
              minWidth: '300px',
              width: '90%',
              }}>

            <p className='font-medium' font->
              About
            </p> <br/><br/>

            {/* <h2 className='font-xx-large'>
              Developer
            </h2> <br/><br/> */}

            <p className='font-small'>
            Hi there! I'm Alfredo, a passionate full stack developer ready to craft dynamic 
            and interactive websites for you. I specialize in creating first-rate frontend and 
            backend solutions. Let's team up and turn your web development vision into reality!
            </p>
          </div>
        </div>
      </div>
    </div>
  </MobileCurtainsContainer>
</div>

  );
};

function Curtain() {
  return (
<section id="about" style={{height:"110vh"}}>
  <div style={styles.content} >  
    <DesktopCurtainsContainer> 
        <LogoFadeOut role="img" aria-label="af Logo"/>
    </DesktopCurtainsContainer>

    <UltrawideCurtainsContainer>
        <LogoFadeOutWide role="img" aria-label="af Logo"/>
    </UltrawideCurtainsContainer>

    <MobileCurtainsContainer>
        <LogoFadeOut role="img" aria-label="af Logo"/>
    </MobileCurtainsContainer>

      {/* <h1>Scroll up or down to see the curtain effect!</h1> */}

    <CurtainEffect />
  </div>
</section>
  );
}

export default Curtain;