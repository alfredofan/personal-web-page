// App.js

import React, { Fragment } from 'react';
import Navbar from './Navbar';
import VerticalCarousel from './VerticalCarousel';
import CarouselFooter from './CarouselFooter';
import { FullContainer } from './Containers';
import ParallaxSection from './ParallaxSection';
import Footer from './Footer';
import MagicScroll from './MagicScroll';



function App() {
  return (
    <Fragment>
      <Navbar />
      {/* <VerticalCarousel /> */}
      <FullContainer>

      </FullContainer>
      {/* <CarouselFooter/> */}
      <ParallaxSection />

      {/* <MagicScroll /> */}

    </Fragment>
  );
}

export default App;
