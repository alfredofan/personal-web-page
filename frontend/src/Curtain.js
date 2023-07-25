import React, { useEffect, useState } from 'react';
import './Curtain.css';

const Curtain = () => {
  const [isCurtainOpen, setIsCurtainOpen] = useState(false);
  const [centerPosition, setCenterPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight ;
      const sectionHeight = 100; // Adjust this value based on your section's height

      // Calculate the central position of the section
      const sectionTop = centerPosition - windowHeight / 2;
      const sectionBottom = centerPosition + windowHeight / 0; //the 0 makes the curtain not open again when scolling up.

      // Open the curtain when scrolling down and close when scrolling up near the central position
      if (scrollPosition > sectionBottom || scrollPosition < sectionTop) {
        setIsCurtainOpen(false);
      } else {
        setIsCurtainOpen(true);
      }
    };

    // Calculate the central position of the section when the component mounts
    const sectionElement = document.querySelector('.curtain');
    if (sectionElement) {
      const sectionRect = sectionElement.getBoundingClientRect();
      setCenterPosition(sectionRect.top + window.scrollY + sectionRect.height / 2);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [centerPosition]);

  return (
    <div className="curtain">
      <div className={`curtain__wrapper ${isCurtainOpen ? 'open' : 'closed'}`}>
        <input type="checkbox" checked={isCurtainOpen} readOnly />

        <div className="curtain__panel curtain__panel--left">
          <h1>Click to reveal&nbsp;</h1>
        </div>

        <div className="curtain__content">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9632/trophy.svg"
            alt="Achievement Unlocked"
          />
          <h2>Achievement Unlocked!</h2>
        </div>

        <div className="curtain__panel curtain__panel--right">
          <h1>a special reward...</h1>
        </div>
      </div>
    </div>
  );
};

export default Curtain;





