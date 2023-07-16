// App.js

import React, { Fragment } from 'react';
import Navbar from './Navbar';
import VerticalCarousel from './VerticalCarousel';
import CarouselFooter from './CarouselFooter';
import { FullContainer } from './Containers';

function App() {
  return (
    <Fragment>
      <Navbar />
      <VerticalCarousel />
      <FullContainer>
        <section>
          <br />
       
        </section>
      </FullContainer>
      <CarouselFooter/>
    </Fragment>
  );
}

export default App;
