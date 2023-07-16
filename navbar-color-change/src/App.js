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
          <p className="font-small" style={{ marginBottom: '0px' }}>
            Hi, my name is
          </p>
          <h1 className="font-large" style={{ fontWeight: 'bold', marginTop: '0px' }}>
            Alfredo Faustino
          </h1>

          <h2 className="font-medium">I build things for the web.</h2>
          <p className="font-small">
            As a web developer, I bring your ideas to life by building innovative and captivating online solutions.
          </p>
        </section>
      </FullContainer>
      <CarouselFooter/>
    </Fragment>
  );
}

export default App;
