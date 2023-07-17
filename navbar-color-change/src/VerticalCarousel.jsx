// VerticalCarousel.js

import React, { useRef, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './VerticalCarousel.css'; // CSS custom styling
import CarouselImage1 from './img/carousel/luigi-pozzoli-Db8xEYwtdWw-unsplash.jpg';
import CarouselImage2 from './img/carousel/ty-feague-gnDbEnWFMWs-unsplash.jpg';
import CarouselImage3 from './img/carousel/taylor-leopold-COE-CIGj8VA-unsplash.jpg';

const VerticalCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleScroll = (e) => {
    const deltaY = e.deltaY;

    // scrolling to change slide up or down
    if (deltaY > 0) {
      // Scrolling down, go to the next slide
      setCurrentSlide((prevSlide) =>
        prevSlide === carouselRef.current.props.children.length - 1 ? 0 : prevSlide + 1
      );
    } else {
      // Scrolling up, go to the previous slide
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? carouselRef.current.props.children.length - 1 : prevSlide - 1
      );
    }
  };


  // effect image movement
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const offsetX = clientX - screenWidth / 2;
    const offsetY = clientY - screenHeight / 2;
  
    if (
      clientX < 0 ||
      clientX > screenWidth ||
      clientY < 0 ||
      clientY > screenHeight ||
      (e.target && e.target.nodeName === 'HTML')
    ) {
      // Reset position if the mouse moves outside the screen or is not on the page
      setMousePosition({ x: 0, y: 0 });
    } else {
      setMousePosition({ x: offsetX / 60, y: offsetY / 60 });
    }
  };
  return (
    <div
      className="carousel-container"
      onWheel={handleScroll}
      onMouseMove={handleMouseMove}
    >
      <Carousel
        ref={carouselRef}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        emulateTouch={true}
        autoPlay={true}
        interval={5000}
        transitionDuration={1000}
        axis="vertical"
        selectedItem={currentSlide}
        onChange={(index) => setCurrentSlide(index)}
      >
        <div className="carousel-item">
            <img src={CarouselImage1} alt="Image 2" 
            style={{
              transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
              marginBottom: '20px'}}
            />

          <div className="carousel-caption">
            <p className="font-small" style={{ marginBottom: '0px' }}>
              Hi, my name is
            </p>
            <h2 className="font-large" style={{ fontWeight: 'bold', margin: '0px' }}>
              Alfredo Faustino
            </h2>
            <h2 className="font-medium" style={{ marginTop: '0px' }}>
              I build things for the web.
            </h2>
            <p className="font-small">
              As a full stack developer, I bring your ideas to life by building innovative and
              captivating online solutions.
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
          <img src={CarouselImage3} alt="Image 3"  style={{
              transform: `translateX(${mousePosition.x}px) translateY(${mousePosition.y}px)`,
            }}/>
          <div className="carousel-caption">
            <h3>Slide 3</h3>
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
