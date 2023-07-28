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

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a delay to show the loading screen (you can replace this with actual data loading logic)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
      {/* <Footer /> */}
  </Fragment>
  );
}

export default App;
