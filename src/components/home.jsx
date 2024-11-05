import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Home.css";

import rigImage from "../assets/Pagani_rig.jpg";
import mahiaImage from "../assets/pagani_mahia.jpg";
import orangesImage from "../assets/pagani_oranges.jpg";

function Home({ onViewServicesClick }) {
  return (
    <div className="hero-section">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        interval={10000}
        className="hero-carousel"
        transitionTime={1500}
        swipeable={false}
      >
        <div className="carousel-slide">
          <img src={rigImage} alt="Pagani Rig" />
          <div className="hero-content">
            <h1>
              Specialists in Cone Penetration{" "}
              <span className="highlighted-text">Testing</span> and Beyond
            </h1>
            <p>
              Specialising in everything from soil analysis to service locating,
              Explore Geotechnical offers complete solutions for site
              investigation tailored to your project’s needs.
            </p>
            <button
              onClick={() => onViewServicesClick()}
              className="cta-button"
            >
              View Our Full Services
            </button>
          </div>
        </div>

        <div className="carousel-slide">
          <img src={mahiaImage} alt="Pagani Mahia" />
          <div className="hero-content">
            <h1>
              <span className="highlighted-text">Advanced</span> Soil Sampling
              Solutions
            </h1>
            <p>
              From detailed soil profiling to chemical analysis, we provide
              state-of-the-art sampling techniques to meet the highest standards
              in environmental testing.
            </p>
            <button
              onClick={() => onViewServicesClick()}
              className="cta-button"
            >
              View Our Full Services
            </button>
          </div>
        </div>

        <div className="carousel-slide">
          <img src={orangesImage} alt="Pagani Oranges" />
          <div className="hero-content">
            <h1>
              Reliable <span className="highlighted-text">Service</span> for All
              Geotechnical Needs
            </h1>
            <p>
              Our team brings expertise and dedication to every project,
              ensuring accurate and dependable geotechnical solutions for your
              peace of mind.
            </p>
            <button
              onClick={() => onViewServicesClick()}
              className="cta-button"
            >
              View Our Full Services
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Home;
