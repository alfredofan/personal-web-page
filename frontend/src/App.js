// App.js
import React, { Fragment, useState, useEffect } from 'react';
import Navbar from './Navbar';
import VerticalCarousel from './VerticalCarousel';
import CarouselFooter from './CarouselFooter';
import { FullContainer } from './Containers';
import ParallaxSection from './ParallaxSection';
import Footer from './Footer';
import Curtain from './Curtain';
import LoadingScreen from './LoadingScreen'; // Import the LoadingScreen component
import InstructionsModal from './InstructionsModal'; // Import the InstructionsModal component


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showInstructions, setShowInstructions] = useState(false);


  // Simulate a delay to show the loading screen (you can replace this with actual data loading logic)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    // Show the instructions modal once the loading is complete and add a delay of 2 seconds
    if (!isLoading) {
      setTimeout(() => {
        setShowInstructions(true);
      }, 2000); // Adjust the delay (in milliseconds) to your preferred value
    }
  }, [isLoading]);

  const handleModalClose = () => {
    setShowInstructions(false);
  };

  return (
  <Fragment>
    {/* Display the loading screen if isLoading is true */}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <Fragment>
        <Navbar />
        {/* <VerticalCarousel /> */}
        {/* <FullContainer>
  
        </FullContainer> */}
        {/* <CarouselFooter/> */}
  
        <ParallaxSection />
        {/* <Curtain /> */}
  
  
      </Fragment>
      )}

      {/* Render the instructions modal if showInstructions is true */}
      {showInstructions && <InstructionsModal onClose={handleModalClose} />}
  </Fragment>
  );
}

export default App;
