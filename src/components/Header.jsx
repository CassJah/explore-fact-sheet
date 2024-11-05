import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/explore_nb.png";
import "./Header.css";

const Header = ({ onFactSheetClick, onContactClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => setShowDropdown(!showDropdown);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar">
      <Link to="/" className="logo">
        <img src={logo} alt="Explore Logo" />
      </Link>
      {isMobile ? (
        <>
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          {isMenuOpen && (
            <div className="mobile-menu">
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("cpt");
                }}
              >
                CPT
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("direct-push-soil");
                }}
              >
                Direct Push Soil Sampling
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("dynamic-probe");
                }}
              >
                Dynamic Probe Super Heavy
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("flat-dilatometer");
                }}
              >
                Flat Dilatometer Test
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("pagani-cpt");
                }}
              >
                Pagani CPT Rig
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("piezometer");
                }}
              >
                Piezometer Installation
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("scpt");
                }}
              >
                Seismic CPT
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("sdmt");
                }}
              >
                Seismic DMT
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("dissipation-testing");
                }}
              >
                Dissipation Testing
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("service-locate");
                }}
              >
                Service Locating
              </button>
              <button
                onClick={() => {
                  toggleMenu();
                  onFactSheetClick("excavator-mounted-rig");
                }}
              >
                Excavator Mounted CPT Rig
              </button>
              <button onClick={onContactClick}>Contact</button>
            </div>
          )}
        </>
      ) : (
        <nav className="nav-links">
          <div
            className="dropdown"
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
          >
            <button className="dropdown-btn">Our Capabilities</button>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="#" onClick={() => onFactSheetClick("cpt")}>
                  CPT
                </Link>
                <Link
                  to="#"
                  onClick={() => onFactSheetClick("direct-push-soil")}
                >
                  Direct Push Soil Sampling
                </Link>
                <Link to="#" onClick={() => onFactSheetClick("dynamic-probe")}>
                  Dynamic Probe Super Heavy
                </Link>
                <Link
                  to="#"
                  onClick={() => onFactSheetClick("flat-dilatometer")}
                >
                  Flat Dilatometer Test
                </Link>
                <Link to="#" onClick={() => onFactSheetClick("pagani-cpt")}>
                  Pagani CPT Rig
                </Link>
                <Link to="#" onClick={() => onFactSheetClick("piezometer")}>
                  Piezometer Installation
                </Link>
                <Link to="#" onClick={() => onFactSheetClick("scpt")}>
                  Seismic CPT
                </Link>
                <Link to="#" onClick={() => onFactSheetClick("sdmt")}>
                  Seismic DMT
                </Link>
                <Link
                  to="#"
                  onClick={() => onFactSheetClick("dissipation-testing")}
                >
                  Dissipation Testing
                </Link>
                <Link to="#" onClick={() => onFactSheetClick("service-locate")}>
                  Service Locating
                </Link>
                <Link
                  to="#"
                  onClick={() => onFactSheetClick("excavator-mounted-rig")}
                >
                  Excavator Mounted CPT Rig
                </Link>
              </div>
            )}
          </div>
          <Link to="#" className="contact-link" onClick={onContactClick}>
            Contact
          </Link>
          <button className="dropdown-btn">Blog</button>
        </nav>
      )}
    </header>
  );
};

export default Header;
