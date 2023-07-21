// App.js

import React, { Fragment } from 'react';
import Navbar from './Navbar';
import VerticalCarousel from './VerticalCarousel';
import CarouselFooter from './CarouselFooter';
import { FullContainer } from './Containers';
import ParallaxSection from './ParallaxSection';
import Footer from './Footer';


function App() {
  return (
    <Fragment>
      <Navbar />
      {/* <VerticalCarousel /> */}
      <FullContainer>
        <section>
          <br />
       
        </section>
      </FullContainer>
      {/* <CarouselFooter/> */}
      <ParallaxSection />

      {/* <Footer/> */}

    </Fragment>
  );
}

export default App;
