import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './VerticalCarousel.css'; // CSS custom styling
import CarouselImage1 from './img/carousel/luigi-pozzoli-Db8xEYwtdWw-unsplash.jpg';
import CarouselImage2 from './img/carousel/ty-feague-gnDbEnWFMWs-unsplash.jpg';
import CarouselImage3 from './img/carousel/taylor-leopold-COE-CIGj8VA-unsplash.jpg';




const VerticalCarousel = () => {
    return (
      <div className="carousel-container">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showStatus={false}
          emulateTouch={true}
          autoPlay={true}
          interval={5000}
          transitionDuration={1000}
          axis="vertical"
        >

            
          <div className="carousel-item">
            <img src={CarouselImage1} alt="Image 1" />
            <div className="carousel-caption">
            
        <p className="font-small" style={{ marginBottom: "0px" }}>
          Hi, my name is</p>
          <h1 className="font-large" style={{ fontWeight: "bold", marginTop: "0px" }}>
          Alfredo Faustino
          </h1>




          <h2 className="font-medium">
          I build things for the web.
            </h2>
          <p className="font-small">
          As a web developer, I bring your ideas to life by building 
          innovative and captivating online solutions.
          </p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="carousel-item">
          <img src={CarouselImage2} alt="Image 2" />
            <div className="carousel-caption">
              <h3>Slide 2</h3>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="carousel-item">
          <img src={CarouselImage3} alt="Image 3" />
            <div className="carousel-caption">
              <h3>Slide 2</h3>
              <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <button>Learn More</button>
            </div>
          </div>
          {/* Add more carousel items as needed */}
        </Carousel>
      </div>
    );
  };
  
  
  export default VerticalCarousel;
  