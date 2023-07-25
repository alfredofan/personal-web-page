import React, { useEffect, useState } from "react";
import "./MagicScroll.css";

import Image from './img/carousel/markus-spiske-6pflEeSzGUo-unsplash.jpg';


const MagicScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const modifier = window.innerWidth / 1320;
  const windowHeight = window.innerHeight * 1.1; // Use 110vh for the container height
  const maxScroll = windowHeight / (1 * modifier); // Maximum scroll height for triangles to meet in the middle

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollY(Math.min(currentScrollY, maxScroll));
  };

  useEffect(() => {
    const handleDelayedScroll = () => {
      setTimeout(() => {
        window.addEventListener("scroll", handleScroll);
      }, 1000); // Add a 1-second delay before adding the scroll event listener
    };

    handleDelayedScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerStyle = {
    position: "relative",
    overflow: "hidden", // Clip the triangles within the container
    height: "110vh",
  };

  const triangleStyle1 = {
    position: "absolute",
    height: "110vh",
    top: 0,
    left: 0,
    backgroundColor: "var(--yellow)",
    backgroundImage: `url(${Image})`, // Use backgroundImage with lowercase "b" and "I"
    clipPath: `polygon(0 0, 100% 0, 0 ${scrollY * modifier}px)`,
    zIndex: 0, // Appear on top of other elements within the container
  };

  const triangleStyle2 = {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "var(--blue)",
    clipPath: `polygon(100% ${windowHeight}px, 0 ${windowHeight}px, 100% ${
      windowHeight - scrollY * modifier
    }px)`,
    zIndex: 0, // Appear on top of other elements within the container
    height: "110vh",
  };

  const textStyle = {
    position: "relative", // Ensures the text remains above the triangles
    zIndex: 3,
    textAlign: "center",
    color: "#fff",
    fontSize: "4em",
    WebkitTextStroke: "3px #333",
  };

  return (
    <section style={containerStyle}>
      <div className="box box1" style={triangleStyle1}>
        <h2 className="h2" style={textStyle}>
          Magic
        </h2>
      </div>
      <div className="box box2" style={triangleStyle2}>
        <h2 className="h2" style={textStyle}>
          Magic
        </h2>
      </div>
      <h2 className="h2" style={textStyle}>
        Magic
      </h2>
    </section>
  );
};

export default MagicScroll;
