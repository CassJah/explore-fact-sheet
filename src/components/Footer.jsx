import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a
          href="https://exploregeotechnical.co.nz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGlobe} className="icon bounce" />
        </a>
        <a
          href="https://www.linkedin.com/company/explore-geotechnical"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="icon spin" />
        </a>
        <a
          href="https://www.facebook.com/exploregeotechnical"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} className="icon bounce" />
        </a>
        <a
          href="https://www.instagram.com/exploregeotechnical"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="icon spin" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
